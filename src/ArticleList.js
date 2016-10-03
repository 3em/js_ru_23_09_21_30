import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleArticle from './decorators/toggleArticle'

function ArticleList(props) {
    const { articles, openArticleId, toggleArticle } = props

    const articleComponents = articles.map(article => (
        <li key={article.id}>
            <Article article = {article} isOpen = {article.id == openArticleId}
                     openArticle = {toggleArticle(article.id)}/>
        </li>
        )
    )
    return (
        <div>
            <ul>
                {articleComponents}
            </ul>
        </div>
    )
}

export default toggleArticle(ArticleList);