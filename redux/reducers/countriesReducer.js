import * as types from "../types"
const initialState = {
  countries: [],
}
export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    default:
      return state
  }
}
