import { ADD_COMMENT } from '../constants'
import {circleCheckInArray} from '../store/helpers'

export default store => next => action => {

  if (action.type ==  ADD_COMMENT){
    //проверку по id не успел написать…
    let idComment = Math.floor(Math.random() * (1000 - 10)) + 10;
    action.payload.newCommentId = idComment
    next(action)
    return idComment
  }

  next(action)
}