import React from "react"
import { Link, graphql } from "gatsby"
import articleTimeAgo from "article-time-ago"
import convertDate from "../utilities/convertDate"
import { BlogArticle, H2Title, ProjectWrap, ProjectItem, Hr, GetInTouch, Button, AboutFigure } from "../components/Styled"
import projects from "../assets/projects"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    let blog = []

    projects() !== null &&
    projects().slice(0, 5).map(({ link, img, title, desc }, i) =>
      blog.push(
      <ProjectWrap href={link} target="_blank" rel="noopener noreferrer" key={i}>
        <ProjectItem>
          <figure>
            <img src={img} alt={title} loading="lazy" width="32" />
          </figure>
          <div>
            <h2>{title}</h2>
            <p>
              {desc}
            </p>
          </div>
        </ProjectItem>
      </ProjectWrap>
      )
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Ana Sayfa" />

        <section className="hero">
          <AboutFigure>
            <img src="" alt="" loading="lazy" />
          </AboutFigure>
        </section>
        
        <section className="blog">
          <H2Title>
            <div>Son <span>5 Yazı</span></div>
            
            <Link to="/blog/">Tümünü Göster
              <svg width="14" height="10"><g stroke="currentColor" fill="none" fillRule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" strokeLinecap="square"></path></g></svg>
            </Link>
          </H2Title>

          {posts.map(({ node }) => {
            const { title, date, category, path } = node.frontmatter
            const { slug } = node.fields

            return (
              <BlogArticle key={slug}>
                <Link to={ path }>{ title }</Link>
                <div><span title={convertDate(date)}>{ articleTimeAgo.date(date) }</span> • <span>{ category }</span></div>
              </BlogArticle>
            )
          })}

          <Hr />
        </section>

        <section className="projects">
          <H2Title>
            <div>Son <span>5 Proje</span></div>
            
            <Link to="/projects/">Tümünü Göster
              <svg width="14" height="10"><g stroke="currentColor" fill="none" fillRule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" strokeLinecap="square"></path></g></svg>
            </Link>
          </H2Title>

          {blog}

          <Hr />
        </section>
      
        <section className="get-in-touch">
          <GetInTouch>
            <h3>Site mi yaptırmak istiyorsunuz?</h3>
            <p>Tüm detayları içeren bir mail atabilirsin.</p>

            <Button href="mailto:iletisim@omergulcicek.com">
              <span>iletisim@omergulcicek.com</span>

              <svg width="14" height="10">
                <g stroke="currentColor" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Button>
          </GetInTouch>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            path
          }
        }
      }
    }
  }
`
