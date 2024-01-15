import * as actionTypes from "./actions/actionTypes";
import { idleState } from "../fsm/fsmStore";
import { createFiniteStateMachine } from "../lib/fsm/finiteStateMachine";

const initialState = {
  fsm: createFiniteStateMachine(idleState),
  list: null,
  errorMsg: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case actionTypes.SET_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload,
      };

    case actionTypes.UPDATE_FSM:
      const { event, payload } = action.payload;
      const newFSM = createFiniteStateMachine(state.fsm.currentState);
      newFSM.transition(event, payload);

      return {
        ...state,
        fsm: newFSM,
      };

    default:
      return state;
  }
};

export default rootReducer;
