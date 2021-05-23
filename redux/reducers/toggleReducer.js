import * as types from "../types"
const initialState = {
  toggleOverview: false,
}
export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_OVERVIEW:
      return {
        ...state,
        toggleOverview: action.payload,
      }
    default:
      return state
  }
}
