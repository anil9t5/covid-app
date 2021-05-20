import { combineReducers } from "redux"
import { countriesReducer } from "./countriesReducer"
import { overviewReducer } from "./overviewReducer"
export default combineReducers({
  overview: overviewReducer,
  country: countriesReducer,
})
