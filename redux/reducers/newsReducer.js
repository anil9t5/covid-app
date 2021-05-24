import * as types from "../types"
const initialState = {
  news: [],
  news_list: [],
  news_details: [],
}
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    case types.GET_ALL_NEWS:
      return {
        ...state,
        news_list: action.payload,
      }
    case types.NEWS_DETAILS:
      return {
        ...state,
        news_details: action.payload,
      }
    default:
      return state
  }
}
