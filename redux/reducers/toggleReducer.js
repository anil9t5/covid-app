import * as types from "../types"
const initialState = {
  toggleOverview: false,
  newsItemCheckout: false,
}
export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_OVERVIEW:
      return {
        ...state,
        toggleOverview: action.payload,
      }
    case types.NEWS_ITEM_CHECKOUT:
      return {
        ...state,
        newsItemCheckout: action.payload,
      }
    default:
      return state
  }
}
