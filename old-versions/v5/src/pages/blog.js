import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Post from "../components/Post"
import Title from "../components/Title"

const Blog = ({ data }) => (
  <Layout>
    <Helmet
      title="Yazılar"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <div className="container">
      <Title t1="Son" t2="Yazılarım" />
      
      { 
        data.allMarkdownRemark.edges.map(post => {
          const { title, date, category, path } = post.node.frontmatter

          return (
            <Post
              title={title}
              date={date}
              category={category}
              key={`${date}__${title}`}
              path={path}
            />
          )
        })
      }

      <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--c-theme)" d="M36.9,-45.4C45.9,-36.4,50,-23,50.9,-10.1C51.8,2.7,49.5,15,42.9,23.4C36.4,31.8,25.7,36.4,12.6,46.3C-0.5,56.2,-16,71.3,-24.4,67.9C-32.7,64.4,-34,42.4,-39.1,26.2C-44.2,9.9,-53.1,-0.5,-55.8,-14.1C-58.5,-27.8,-55.1,-44.7,-44.8,-53.4C-34.4,-62.2,-17.2,-62.8,-1.6,-60.8C13.9,-58.9,27.9,-54.4,36.9,-45.4Z" transform="translate(100 100)" />
      </Svg>
    </div>
  </Layout>
)

export default Blog

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC})  {
      edges {
        node {
          frontmatter {
            date
            title
            category
            path
          }
        }
      }
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