import { RootState } from "../interfaces/storeInterface"

export const fsmSelector = (state:RootState) => state.fsm;
export const fsmCurrentNameSelector = (state:RootState) => state.fsm?.currentState?.name;

export const listSelector = (state:RootState) => state.list;
export const listNameSelector = (state:RootState) => state.list?.listName;
export const listImageSelector = (state:RootState) => state.list?.listImage;

export const errorMsgSelector = (state:RootState) => state.errorMsg;
