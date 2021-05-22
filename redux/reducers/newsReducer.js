import * as types from "../types"
const initialState = {
  news: [],
}
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }
}
