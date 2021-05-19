import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
const API_URL = process.env.API_URL

export const fetchOverview = () => async (dispatch) => {
  const response = await covidApi.get(`${API_URL}all`)
  dispatch({
    type: types.GET_OVERVIEW,
    payload: response.data,
  })
}
