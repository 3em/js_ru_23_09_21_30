import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import Immutable from 'immutable'
import { arrayToMap } from '../store/helpers'


const ArticlesRecord = Immutable.Record({
    id: '0',
    date: '',
    title: '',
    text: '',
    comments: []
})

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles)
                .filter(id => id != payload.id)
                .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})

        case ADD_COMMENT: {
            const { articleId, newCommentId } = payload
            articles[articleId].comments.push(newCommentId)
            return Object.keys(articles).reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
        }

    }
    return articles
}


//export default (articles = normalizedArticles, action) => {
//    const { type, payload } = action
//
//    switch (type) {
//        case DELETE_ARTICLE:
//        //console.log(Immutable.fromJS(normalizedArticles))
//        //return articles
//
//        //Object.keys(articles)
//        //    .filter(id => id != payload.id)
//        //    .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
//
//        //case ADD_COMMENT: {
//        //    const { articleId, newCommentId } = payload
//        //    articles[articleId].comments.push(newCommentId)
//        //    return Object.keys(articles).reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
//        //}
//
//    }
//    return Immutable.fromJS(articles)
//}