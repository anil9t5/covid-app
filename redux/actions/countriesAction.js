import * as types from "../types"
import * as covidApi from "../../generics/covidApi"
const API_URL = process.env.API_URL

export const fetchCountries = () => async (dispatch) => {
  const response = await covidApi.get(`${API_URL}countries`)
  dispatch({
    type: types.GET_COUNTRIES,
    payload: response.data,
  })
}
