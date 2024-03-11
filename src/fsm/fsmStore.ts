import { createState } from "../lib/fsm/finiteStateMachine";
import {FetchListPayload} from "../lib/fsm/fsmInterface"
import { fetchList } from "../service/apiService";
import STATES from "../constants/states";
import EVENTS from "../constants/events";

export const idleState = createState(
  STATES.IDLE,
  () => {},
  () => {}
);

export const loadingState = createState(
  STATES.LOADING,
  async (payload:FetchListPayload) => {
    const { listName, setListFunc, setErrorMsgFunc } = payload;

    if (listName) {
      const res = await fetchList(payload);

      if (res?.listName) {
        setListFunc(res);
      }

      if (res?.error) {
        setErrorMsgFunc(res?.error);
      }
    }
  },
  () => {}
);

const successState = createState(
  STATES.SUCCESS,
  () => {},
  () => {}
);

const failState = createState(
  STATES.FAIL,
  () => {},
  () => {}
);

// Transition
idleState.addTransition(EVENTS.SUBMIT, loadingState);
loadingState.addTransition(EVENTS.SONGS_RECEIVED, successState);
loadingState.addTransition(EVENTS.ERROR_RECEIVED, failState);
successState.addTransition(EVENTS.RESET, idleState);
failState.addTransition(EVENTS.RESET, idleState);
