import React from 'react'
import { render } from 'react-dom'
import ArticleList from './ArticleList'
import { normalizedArticles, normalizedComments } from './fixtures'

render(<ArticleList normalizedArticles = {normalizedArticles} normalizedComments = {normalizedComments} />, document.getElementById('container'))