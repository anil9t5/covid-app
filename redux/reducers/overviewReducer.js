import * as types from "../types"
const initialState = {
  overviews: [],
  new_cases: [],
}
export const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OVERVIEW:
      return {
        ...state,
        overviews: action.payload,
      }
    case types.GET_NEW_CASES:
      return {
        ...state,
        new_cases: action.payload,
      }
    default:
      return state
  }
}
