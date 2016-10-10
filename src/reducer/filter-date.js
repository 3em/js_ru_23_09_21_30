import { FILTER_DATE_ARTICLE } from '../constants'

export default (date = {from: null, to: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_DATE_ARTICLE:
      return date = payload
  }

  return date
}