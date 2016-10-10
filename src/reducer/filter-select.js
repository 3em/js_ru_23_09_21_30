import { FILTER_SELECT_ARTICLE } from '../constants'

export default (filters = null, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_SELECT_ARTICLE:
      //присвоения в обоих редсерах лишнее
      return filters = payload
  }

  return filters
}
