import React from "react"
import { graphql } from "gatsby"
import { Svg } from "../components/Styled"

import { ArticleItem, } from "../components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

class BlogIndex extends React.Component {
  render() {
    const { data }  = this.props,
          siteTitle = data.site.siteMetadata.title,
          posts     = data.allMdx.edges,
          id        = posts.length;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />

        <section className="blog">
          <ArticleItem data={posts} id={id} />

          <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--c-theme)" d="M36.9,-45.4C45.9,-36.4,50,-23,50.9,-10.1C51.8,2.7,49.5,15,42.9,23.4C36.4,31.8,25.7,36.4,12.6,46.3C-0.5,56.2,-16,71.3,-24.4,67.9C-32.7,64.4,-34,42.4,-39.1,26.2C-44.2,9.9,-53.1,-0.5,-55.8,-14.1C-58.5,-27.8,-55.1,-44.7,-44.8,-53.4C-34.4,-62.2,-17.2,-62.8,-1.6,-60.8C13.9,-58.9,27.9,-54.4,36.9,-45.4Z" transform="translate(100 100)" />
          </Svg>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
