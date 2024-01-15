import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFSM } from "./store/actions/index";
import { fsmSelector, listSelector, errorMsgSelector } from "./store/selectors";
import STATES from "./constants/states";
import EVENTS from "./constants/events";
import MainHeader from "./components/MainHeader";
import Main from "./components/Main";
import { AppLayout } from "./styleComponents/App";

const App = () => {
  const dispatch = useDispatch();
  const fsm = useSelector(fsmSelector);
  const list = useSelector(listSelector);
  const errorMsg = useSelector(errorMsgSelector);

  const updateFSMAction = useCallback(
    (event, payload = null) => {
      dispatch(updateFSM(event, payload));
    },
    [dispatch]
  );

  useEffect(() => {
    if (fsm.currentState.name === STATES.LOADING && list !== null) {
      updateFSMAction(EVENTS.SONGS_RECIVED);
    }

    if (fsm.currentState.name === STATES.LOADING && !list && errorMsg) {
      updateFSMAction(EVENTS.ERROR_RECIVED);
    }
  }, [fsm, list, errorMsg, updateFSMAction]);

  return (
    <AppLayout>
      <MainHeader />
      <Main />
    </AppLayout>
  );
};

export default App;
