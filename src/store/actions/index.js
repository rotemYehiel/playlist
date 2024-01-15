import * as actionTypes from "./actionTypes";

export const updateList = (list) => ({
  type: actionTypes.UPDATE_LIST,
  payload: list,
});

export const setErrorMsg = (errorMsg) => ({
  type: actionTypes.SET_ERROR_MSG,
  payload: errorMsg,
});

export const updateFSM = (event, payload = null) => ({
  type: actionTypes.UPDATE_FSM,
  payload: { event, payload },
});
