import * as types from "../types"

export const toggleOverviewAction = () => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_OVERVIEW,
    payload: dispatch,
  })
}

export const toggleNewsAction = () => async (dispatch) => {
  dispatch({
    type: types.NEWS_ITEM_CHECKOUT,
    payload: dispatch,
  })
}
