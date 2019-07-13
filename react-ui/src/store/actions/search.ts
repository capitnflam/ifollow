import { AnyAction } from 'redux'

export const TEXT_SEARCH_QUERY = 'TEXT_SEARCH_QUERY'
export const TEXT_SEARCH_RESULT = 'TEXT_SEARCH_RESULT'

export interface SearchArguments {
  query: string
}

export const textSearch = (payload: SearchArguments): AnyAction => ({
  payload,
  type: TEXT_SEARCH_QUERY,
})
