import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import Immutable from 'immutable'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT: {
            const { text, user, newCommentId } = payload

            // как можно переопределить лучше newCommentId как id ?
            // можно { newCommentId: id } = payload,  если очень хочешь
            const id = newCommentId
            //не мутируй comments
            comments[id] = { id, text, user }
            return comments
        }
    }

    return comments
}
