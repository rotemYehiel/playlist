export const fsmSelector = (state) => state.fsm;
export const fsmCurrentNameSelector = (state) => state.fsm?.currentState?.name;

export const listSelector = (state) => state.list;
export const listNameSelector = (state) => state.list?.listName;
export const listImageSelector = (state) => state.list?.listImage;

export const errorMsgSelector = (state) => state.errorMsg;
