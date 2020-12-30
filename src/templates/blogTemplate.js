import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import "isomorphic-fetch"

import Layout from "../components/Layout"

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, date, medium } = post.frontmatter
  const { minutes } = post.fields.readingTime

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("article img").forEach(img => {
        img.classList.add("loaded");
      });
    }, 500);
  });

  return (
    <Layout>
      <Helmet
        title={title}
        titleTemplate="%s | Ömer Gülçiçek"
      />

      <div className="container article">
        <Details>
          <Link to="/blog/">
            <svg aria-hidden="true" role="img" viewBox="0 0 448 512" height="14px"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>

            <span>Tüm Yazılar</span>
          </Link>
          
          <span>•</span>
          <span>{ date }</span>
          <span>•</span>

          {
            minutes &&
            <span title="Tahmini Okuma Süresi">{ Math.ceil(minutes) } dk</span>
          }
          
          <div>
            {
              medium && <>
                <span>•</span>
                <a href={medium} target="_blank" rel="noopener noreferrer">Medium'da Oku</a>
              </>
            }
          </div>
        </Details>

        <Title>{ title }</Title>

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />

        <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--c-theme)" d="M47,-55.5C60.1,-45,69.2,-29.4,72.7,-12.4C76.1,4.6,73.9,23,66.4,40.6C58.9,58.2,46.2,75.1,30.6,78.2C15.1,81.3,-3.4,70.6,-23.3,63.5C-43.2,56.4,-64.5,53,-71.7,41.1C-78.8,29.3,-71.7,8.9,-64.6,-7.9C-57.4,-24.8,-50.3,-38.2,-39.6,-49C-28.8,-59.9,-14.4,-68.2,1.3,-69.7C17,-71.3,33.9,-66,47,-55.5Z" transform="translate(100 100)" />
        </Svg>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(fields: {readingTime: {minutes: {}}}, frontmatter: { path: { eq: $path }}) {
      frontmatter {
        date(formatString: "Do MMMM YYYY", locale: "tr")
        title
        path
        medium
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
      html
    }
  }
`

const Details = styled.div`
  color: var(--c-grey);
  font-size: 14px;
  line-height: 18px;
  margin-top: 40px;

  svg {
    vertical-align: middle;
  }

  a {
    text-decoration: none;


    &:focus,
    &:hover {
      color: var(--c-theme);
    }

    &:first-child {
      margin-left: 0;
    }
  }

  div {
    margin-top: 8px;

    span:first-of-type {
      display: none;
    }

    a:first-of-type {
      margin-left: 0;
    }
    
    @media (min-width: 992px) {
      display: inline-block;
      margin-top: 0;

      span:first-of-type {
        display: inline-block;
      }
  
      a:first-of-type {
        margin-left: 8px;
      }
    }

  }

  a,
  span {
    margin-left: 8px;
    margin-right: 8px;
  }
`

const Title = styled.h1`
  color: var(--c-theme);
  font-size: 40px;
  line-height: 56px;
  margin-bottom: 24px;
  margin-top: 8px;
  position: relative;

  @media (min-width: 992px) {
    font-size: 56px;
    line-height: 72px;
  }
`

const Content = styled.article`
  h1,
  h2,
  h3 {
    color: var(--c-theme);
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 12px;
    margin-top: 48px;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
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