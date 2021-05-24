import { combineReducers } from "redux"
import { countriesReducer } from "./countriesReducer"
import { newsReducer } from "./newsReducer"
import { overviewReducer } from "./overviewReducer"
import { toggleReducer } from "./toggleReducer"
export default combineReducers({
  overview: overviewReducer,
  country: countriesReducer,
  news: newsReducer,
  newsList: newsReducer,
  toggle: toggleReducer,
  checkout: newsReducer,
})
