import { AnyAction } from 'redux'

export const GET_LIST = 'GET_LIST'
export const GET_LIST_RESULT = 'GET_LIST_RESULT'

export interface GetListArguments {}

export const getList = (payload: GetListArguments): AnyAction => ({
  payload,
  type: GET_LIST,
})
