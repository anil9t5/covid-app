import * as types from "../types"
const initialState = {
  overviews: [],
}
export const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OVERVIEW:
      return {
        ...state,
        overviews: action.payload,
      }
    default:
      return state
  }
}
