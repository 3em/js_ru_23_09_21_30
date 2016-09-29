import React, { Component } from 'react'
import CommentsSection from './CommentsSection';

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article, comments } = this.props
        const { isOpen } = this.state
        const body = isOpen ? <section>{article.text}<CommentsSection comments={comments} commentsId={article.comments} /></section> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
