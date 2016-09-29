'use strict';
import React, {Component} from 'react';

export default class CommentsSection extends Component {

  state = {
    isOpen: false
  }

  renderComments (comments, commentsId){
    if (commentsId.length > 0){
      return commentsId.map(i=>{return <li>{comments.find(e=>e.id == i).text}</li>});
    } else {
      return <li>Упс а их нет!</li>
    }

  }

  toggleOpen= ev => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {comments, commentsId} = this.props
    const { isOpen } = this.state

    const body = isOpen ? <ul>{this.renderComments(comments, commentsId)}</ul> : null

    return (
      <div>
        <a href="#" onClick = {this.toggleOpen}>
          {isOpen ? 'Закрыть комментарии' : 'Открыть комментарии'}
        </a>
        {body}
      </div>
    );
  }
}