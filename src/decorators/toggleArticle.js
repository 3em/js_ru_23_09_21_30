import React, {PropTypes} from 'react';

export default function toggleArticle(Component) {

  return class WrapperArticle extends React.Component {
    static PropTypes = {
      articles: PropTypes.object.isRequired
    }

    state = {
      openArticleId: null
    }

    toggleArticle = id => ev => {
      ev.preventDefault()
      let { openArticleId } = this.state
      let setVal = null

      if (id != openArticleId)
        setVal = id

      this.setState({
        openArticleId: setVal
      })
    }

    render() {
      return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle}/>
    }
    
  }

}