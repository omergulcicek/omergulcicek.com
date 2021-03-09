import React from "react"
import { Link } from "gatsby"
import articleTimeAgo from "article-time-ago"
import convertDate from "../utilities/convertDate"
import "isomorphic-fetch"
import { BlogArticle } from "../components/Styled"

class ArticleItem extends React.Component {
  render() {
    const { data, id } = this.props
    
    return (<>
    {data.map(({ node }) => {
        const { title, date, category, path } = node.frontmatter
        const { slug } = node.fields

        return (
          <BlogArticle key={slug}>
            <div>
              <span title={convertDate(date)}>{ articleTimeAgo.date(date) }</span> • <span>{ category }</span></div>
            <Link to={ path }>{ title }</Link>
          </BlogArticle>
        )
      })}
    </>)
  }
}

export default ArticleItem