import { ErrorMsg, List } from "../../interfaces/storeInterface";
import { StatePayload } from "../../lib/fsm/fsmInterface";
import * as actionTypes from "./actionTypes";

export const updateList = (list:List|null) => ({
  type: actionTypes.UPDATE_LIST,
  payload: list,
});

export const setErrorMsg = (errorMsg:ErrorMsg| null) => ({
  type: actionTypes.SET_ERROR_MSG,
  payload: errorMsg,
});

export const updateFSM = (event:string, payload:StatePayload |null = null) => ({
  type: actionTypes.UPDATE_FSM,
  payload: { event, payload },
}as const);
