import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import "isomorphic-fetch"
import articleTimeAgo from "article-time-ago"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Title from "../components/Title"

const ConvertDate = d => new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className="container">
          <Title t1="Son" t2="Yazılarım" />

          {posts.map(({ node }) => {
            const { title, date, category, path } = node.frontmatter
            const { slug } = node.fields

            return (
              <Article key={slug}>
                <Link to={ path }>{ title }</Link>
                <div><span title={ConvertDate(date)}>{ articleTimeAgo.date(date) }</span> • <span>{ category }</span></div>
              </Article>
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

const Article = styled.article`
  color: var(--c-grey);
  line-height: 30px;
  margin-top: 36px;

  a {
    color: var(--c-text);
    font-size: 18px;
    line-height: 1;
    text-decoration: none;
    transition: var(--g-transition);
    
    @media (min-width: 992px) {
      font-size: 22px;
    }

    &:focus,
    &:hover {
      color: var(--c-theme);
    }
  }
`

const Svg = styled.svg`
  opacity: 0.05;
  left: -25%;
  pointer-events: none;
  position: absolute;
  top: -120px;
  width: 80%;
  z-index: -1;
`