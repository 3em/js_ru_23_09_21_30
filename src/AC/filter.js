import {FILTER_SELECT_ARTICLE, FILTER_DATE_ARTICLE} from '../constants'

export function selectFilterValue(id){
  return {
    type: FILTER_SELECT_ARTICLE,
    payload: id
  }
}

export function dateFilterValue(id){
  return {
    type: FILTER_DATE_ARTICLE,
    payload: id
  }
}