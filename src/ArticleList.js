import React from 'react'
import Article from './Article'

export default (props) => {
    const { normalizedArticles, normalizedComments } = props

    const articleComponents = normalizedArticles.map(normalizedArticles => <li key={normalizedArticles.id}><Article article = {normalizedArticles} comments = {normalizedComments}/></li>)
    return (
        <ul>
            {articleComponents}
        </ul>
    )
}