import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
// const NEWS_API_URL =
//   "https://newsapi.org/v2/top-headlines?category=health&apiKey=5199faa724124de5bd29392f76c67e74"

const NEWS_URL =
  "http://api.mediastack.com/v1/news?access_key=b13db7c3aaf701793670594affa7ddfd&keywords=coronavirus&sources=en&limit=50"

export const fetchNews = () => async (dispatch) => {
  let rand = Math.floor(Math.random() * (20 - 1 + 1) + 1)
  const response = await covidApi.get(`${NEWS_URL}`)
  dispatch({
    type: types.GET_NEWS,
    payload: response.data.data[rand],
  })
}

export const fetchAllNews = () => async (dispatch) => {
  const response = await covidApi.get(`${NEWS_URL}`)
  dispatch({
    type: types.GET_ALL_NEWS,
    payload: response.data,
  })
}

export const newsDetailsAction = () => async (dispatch) => {
  dispatch({
    type: types.NEWS_DETAILS,
    payload: dispatch,
  })
}
