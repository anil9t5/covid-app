import * as types from "../types"

export const toggleOverviewAction = () => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_OVERVIEW,
    payload: dispatch,
  })
}
