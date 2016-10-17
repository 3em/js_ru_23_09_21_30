import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
    };

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        const { text, user} = this.state
        const {addComment, articleId} = this.props

        addComment(articleId, text, user)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                Text: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/><br/>
                User: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/><br/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm