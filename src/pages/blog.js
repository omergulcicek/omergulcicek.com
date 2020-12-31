import React from "react"
import { Link, graphql } from "gatsby"
import articleTimeAgo from "article-time-ago"
import "isomorphic-fetch"
import { BlogArticle, Svg } from "./../components/Styled"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const ConvertDate = d => new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Yazılar" />

        <div className="container">
          <Title t1="Son" t2="Yazılarım" />

          {posts.map(({ node }) => {
            const { title, date, category, path } = node.frontmatter
            const { slug } = node.fields

            return (
              <BlogArticle key={slug}>
                <Link to={ path }>{ title }</Link>
                <div><span title={ConvertDate(date)}>{ articleTimeAgo.date(date) }</span> • <span>{ category }</span></div>
              </BlogArticle>
            )
          })}
          
          <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--c-theme)" d="M36.9,-45.4C45.9,-36.4,50,-23,50.9,-10.1C51.8,2.7,49.5,15,42.9,23.4C36.4,31.8,25.7,36.4,12.6,46.3C-0.5,56.2,-16,71.3,-24.4,67.9C-32.7,64.4,-34,42.4,-39.1,26.2C-44.2,9.9,-53.1,-0.5,-55.8,-14.1C-58.5,-27.8,-55.1,-44.7,-44.8,-53.4C-34.4,-62.2,-17.2,-62.8,-1.6,-60.8C13.9,-58.9,27.9,-54.4,36.9,-45.4Z" transform="translate(100 100)" />
          </Svg>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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