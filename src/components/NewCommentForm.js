'use strict';
import React, {Component, PropTypes} from 'react';

export default class NewCommentForm extends Component {
  static propTypes = {};

  state = {
    userName: '',
    commentText: ''
  }

  handleChange = ev => {
    let nameForState = ev.target.name;
    this.setState({
      [nameForState]: ev.target.value
    })
  }

  submitForm = ev => {
    ev.preventDefault();
    const {userName, commentText} = this.state
    if ( userName.length === 0 || commentText.length === 0)
      return

    console.log('Имя: '+userName+'. Комментарий: '+commentText);

  }

  render() {
    const {userName, commentText} = this.state

    return (
      <form onSubmit={this.submitForm}>
        <div>
          <div>
            <label htmlFor="userName">Ваше имя</label>
          </div>
          <div>
            <input value = {userName} name="userName" id="userName" type="text" onChange = {this.handleChange}/>
          </div>
        </div>

        <br />

        <div>
          <div>
            <label htmlFor="commentText">Комментарий</label>
          </div>
          <div>
            <textarea value = {commentText} name="commentText" id="commentText" onChange = {this.handleChange} />
          </div>
        </div>

        <br />

        <div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    );
  }
}