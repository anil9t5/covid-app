import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
import data from "../../components/news/data/news.json"

export const fetchNews = () => async (dispatch) => {
  let rand = Math.floor(Math.random() * (20 - 1 + 1) + 1)
  dispatch({
    type: types.GET_NEWS,
    payload: data.data[rand],
  })
}

export const fetchAllNews = () => async (dispatch) => {
  dispatch({
    type: types.GET_ALL_NEWS,
    payload: data,
  })
}

export const newsDetailsAction = () => async (dispatch) => {
  dispatch({
    type: types.NEWS_DETAILS,
    payload: dispatch,
  })
}
