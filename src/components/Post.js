import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import articleTimeAgo from "article-time-ago"

const Post = ({ title, date, category, path }) => (
  <Article>
    <Link to={ path }>{ title }</Link>
    <div><span title={ConvertDate(date)}>{ articleTimeAgo.date(date) }</span> • <span>{ category }</span></div>
  </Article>
)

export default Post

const ConvertDate = d => new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })

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
