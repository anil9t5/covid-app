import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
const NEWS_API_URL =
  "https://coronavirus-smartable.p.rapidapi.com/news/v1/global/"

export const fetchNews = () => async (dispatch) => {
  const response = await covidApi.newsHighlight(`${NEWS_API_URL}`)
  dispatch({
    type: types.GET_NEWS,
    payload: response.news[0],
  })
}
