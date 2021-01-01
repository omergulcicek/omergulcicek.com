import React from "react"
import { Link, graphql } from "gatsby"
import articleTimeAgo from "article-time-ago"
import convertDate from "../utilities/convertDate"
import { BlogArticle, HomeTitle } from "../components/Styled"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Ana Sayfa" />
        
        <div className="container">

          <HomeTitle>
            <div>Son <span>Makaleler</span></div>
            <Link to="/blog/">Tümünü Göster
              <svg width="14" height="10"><g stroke="currentColor" fill="none" fill-rule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" stroke-linecap="square"></path></g></svg>
            </Link>
          </HomeTitle>

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
        </div>
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
