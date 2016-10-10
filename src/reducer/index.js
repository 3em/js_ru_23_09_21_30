import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
//лучше объеденить в один filters редюсер
import filterSelect from './filter-select'
import filterDate from './filter-date'

export default combineReducers({
    count, articles, filterSelect, filterDate
})


/*
export default combineReducers({
    count: counterReducer,
    articles: articleReducer
})
*/
