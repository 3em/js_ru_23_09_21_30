import React, {PropTypes} from 'react';

export default function toggleArticle(Component) {

  return class WrapperArticle extends React.Component {
    static PropTypes = {
      //Нет, в декораторе ты вообще не должен знать что за пропсы ожидаются
      articles: PropTypes.object.isRequired
    }

    state = {
      //не привязывайся к названию сущности, в декораторах должен быть общий функционал. Используй, например, openItemId 
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
