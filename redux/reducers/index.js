import { combineReducers } from "redux"
import { countriesReducer } from "./countriesReducer"
import { newsReducer } from "./newsReducer"
import { overviewReducer } from "./overviewReducer"
export default combineReducers({
  overview: overviewReducer,
  country: countriesReducer,
  news: newsReducer,
})
