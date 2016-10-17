import { ADD_COMMENT } from '../constants'

export function addComment (articleId, text, user, newCommentId) {
  return {
    type: ADD_COMMENT,
    payload: {articleId, text, user, newCommentId}
  }
}