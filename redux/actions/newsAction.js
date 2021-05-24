import * as types from "../types"
import * as covidApi from "../../generics/covidApi"

const NEWS_API_URL = process.env.NEWS_API_URL

export const fetchNews = () => async (dispatch) => {
  let rand = Math.floor(Math.random() * (20 - 1 + 1) + 1)
  const response = await covidApi.get(
    `${NEWS_API_URL}/news?access_key=b13db7c3aaf701793670594affa7ddfd&keywords=coronavirus&sources=en&limit=50`
  )
  dispatch({
    type: types.GET_NEWS,
    payload: response.data.data[rand],
  })
}

export const fetchAllNews = () => async (dispatch) => {
  const response = await covidApi.get(
    `${NEWS_API_URL}/news?access_key=b13db7c3aaf701793670594affa7ddfd&keywords=coronavirus&sources=en&limit=50`
  )
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
