import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import moment from 'moment'
import range from "moment-range"
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    makeFilterArticle = (article, toggleItem, isItemOpen, filterSelect, date) => {
        let statusSelectHidden = false
        let statusDateHidden = false
        let arrayShow = []
        //лучше логику фильтрации в коннект вынести
        if (date.from && date.to){
            let from = new Date(moment(date.from).format('LLLL'))
            let to = new Date(moment(date.to).format('LLLL'))
            let range = moment().range(from, to)
            let articleDate = new Date(moment(article.date).format('LLLL'))
            if (!range.contains(articleDate)){
                statusDateHidden = true
            }
        }


        if (filterSelect && filterSelect.length > 0) {
            filterSelect.map(filter => {
                if (article.id == filter.value)
                    arrayShow.push(filter.value)
            })
            arrayShow.indexOf(article.id) < 0 ? statusSelectHidden = true : statusSelectHidden = false
        }

        return (
            <li key={article.id} hidden={statusSelectHidden || statusDateHidden ? 'hidden' : ''}>
              <Article article = {article} filterSelect = {filterSelect} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>
        )
    }

    render() {
        const { articles, toggleItem, isItemOpen, filterSelect, date } = this.props

        const articleComponents = articles.map(article => (
            this.makeFilterArticle(article, toggleItem, isItemOpen, filterSelect, date)
        ))

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filterSelect: state.filterSelect,
    date: state.filterDate
}))(accordion(ArticleList))
