import { createState } from "../lib/fsm/fsmService";
import { fetchList } from "../service/apiService";
import STATES from "../constants/states";
import EVENTS from "../constants/events";

export const idleState = createState(
  STATES.IDLE,
  () => console.log("Entering Idle state"),
  () => console.log("Leaving Idle state")
);

export const loadingState = createState(
  STATES.LOADING,
  async (payload) => {
    const { listName, setList, setErrorMsg } = payload;
    console.log("Entering Loading state");
    if (listName) {
      const res = await fetchList(payload);

      if (res?.listName) {
        setList(res);
      }

      if (res?.error) {
        setErrorMsg(res?.error);
      }
    }
  },
  () => {
    console.log("Leaving Loading state");
  }
);

const successState = createState(
  STATES.SUCCESS,
  () => console.log("Entering Success state"),
  () => console.log("Leaving Success state")
);

const failState = createState(
  STATES.FAIL,
  () => console.log("Entering Fail state"),
  () => console.log("Leaving Fail state")
);

// Transition
idleState.addTransition(EVENTS.SUBMIT, loadingState);
loadingState.addTransition(EVENTS.SONGS_RECIVED, successState);
loadingState.addTransition(EVENTS.ERROR_RECIVED, failState);
successState.addTransition(EVENTS.RESET, idleState);
failState.addTransition(EVENTS.RESET, idleState);
