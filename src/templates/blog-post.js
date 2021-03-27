import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { BlogDetailsInfo, BlogDetailsTitle, BlogDetailsContent, BlogDetailsPagination, Svg } from "../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import friendlyUrl from "../utilities/friendlyUrl"


export default function BlogPostTemplate (props) {
  const siteTitle = props.data.site.siteMetadata.title
  const post = props.data.mdx

  const { date, title, medium } = post.frontmatter
  const { minutes } = post.fields.readingTime
  const { previous, next } = props.pageContext
  
  useEffect(() => {
    document.querySelectorAll("article .gatsby-resp-image-wrapper:not(.loaded)").forEach(imgWrap => {
      // const img = imgWrap.querySelectorAll("img")[0];
      // const figcaption = document.createElement("figcaption");
      // const figcaptionText = document.createTextNode(img.alt);
      // figcaption.appendChild(figcaptionText);
      // imgWrap.parentNode.insertBefore(figcaption, imgWrap.nextSibling);
      
      setTimeout(() => {
        imgWrap.classList.add("loaded");
      }, 500);
    });
    
    document.querySelectorAll(".article h2, .article h3").forEach(t => {
        let text = t.textContent;
        let url = friendlyUrl(text);
        t.id = url;

        t.innerHTML = `<a href="#${url}" aria-label="${url.replace(/-/g, " ")}"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" fill="var(--c-theme)" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> ${text}`;
    })
  });
  
  return <Layout title={siteTitle}>
    <SEO title={title} description={post.excerpt} />
    
    <section className="article">
      <BlogDetailsInfo>
        <Link to="/">
          <svg aria-hidden="true" role="img" viewBox="0 0 448 512" height="14px"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>

          <span>Tüm Yazılar</span>
        </Link>
        
        <span>•</span>
        <span>{date}</span>
        <span>•</span>

        {
          minutes &&
          <span title="Tahmini Okuma Süresi">{Math.ceil(minutes)} dk</span>
        }
        
        <div>
          {
            medium && <>
              <span>•</span>
              <a href={medium} target="_blank" rel="noopener noreferrer">Medium'da Oku</a>
            </>
          }
        </div>
      </BlogDetailsInfo>

      <BlogDetailsTitle>{ title }</BlogDetailsTitle>

      <BlogDetailsContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogDetailsContent>

      <BlogDetailsPagination className="pagination">
        <li>
          {previous && (
            <Link to={previous.frontmatter.path} rel="prev">
              <span>Önceki Makale</span>
              {previous.frontmatter.title}
            </Link>
          )}
        </li>

        <li>
          {next && (
            <Link to={next.frontmatter.path} rel="next">
              <span>Sonraki Makale</span>
              {next.frontmatter.title}
            </Link>
          )}
        </li>
      </BlogDetailsPagination>
    
      <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--c-theme)" d="M47,-55.5C60.1,-45,69.2,-29.4,72.7,-12.4C76.1,4.6,73.9,23,66.4,40.6C58.9,58.2,46.2,75.1,30.6,78.2C15.1,81.3,-3.4,70.6,-23.3,63.5C-43.2,56.4,-64.5,53,-71.7,41.1C-78.8,29.3,-71.7,8.9,-64.6,-7.9C-57.4,-24.8,-50.3,-38.2,-39.6,-49C-28.8,-59.9,-14.4,-68.2,1.3,-69.7C17,-71.3,33.9,-66,47,-55.5Z" transform="translate(100 100)" />
      </Svg>
    </section>
  </Layout>
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        medium
        date(formatString: "Do MMMM YYYY", locale: "tr")
      }
      fields {
        readingTime {
          minutes
        }
      }
      body
    }
  }
`