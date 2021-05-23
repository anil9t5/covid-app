import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
const NEWS_API_URL =
  "https://newsapi.org/v2/top-headlines?category=health&apiKey=5199faa724124de5bd29392f76c67e74"

export const fetchNews = () => async (dispatch) => {
  let rand = Math.floor(Math.random() * (20 - 1 + 1) + 1)
  const response = await covidApi.get(`${NEWS_API_URL}`)
  dispatch({
    type: types.GET_NEWS,
    payload: response.data.articles[rand],
  })
}

export const fetchAllNews = () => async (dispatch) => {
  const response = await covidApi.get(`${NEWS_API_URL}`)
  dispatch({
    type: types.GET_ALL_NEWS,
    payload: response.data.articles,
  })
}
