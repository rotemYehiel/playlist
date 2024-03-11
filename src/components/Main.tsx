import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMsgSelector,
  fsmCurrentNameSelector,
  listSelector,
} from "../store/selectors";
import { setErrorMsg, updateFSM } from "../store/actions";
import FormSubmit from "./FormSubmit";
import List from "./List";
import { MainLayout } from "../styleComponents/Main";
import STATES from "../constants/states";
import { Button } from "../styleComponents/App";
import EVENTS from "../constants/events";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";
import { List as ListInterface } from "../interfaces/storeInterface";

const Main = () => {
  const dispatch = useDispatch();
  const fsmCurrentName = useSelector(fsmCurrentNameSelector);
  const list = useSelector(listSelector);
  const errorMsg = useSelector(errorMsgSelector);

  const setList = useCallback(
    (newList:ListInterface | null) => {
      dispatch({ type: "UPDATE_LIST", payload: newList });
    },
    [dispatch]
  );

  const handleRetry = useCallback(
    (ev:React.SyntheticEvent) => {
      ev.preventDefault();
      if (fsmCurrentName !== STATES.LOADING) {
        dispatch(updateFSM(EVENTS.RESET));
        setList(null);
        dispatch(setErrorMsg(null));
      }
    },
    [fsmCurrentName, dispatch, setList]
  );

  useEffect(() => {
    if (fsmCurrentName === STATES.LOADING && list !== null) {
      dispatch(updateFSM(EVENTS.SONGS_RECEIVED));
    }

    if (fsmCurrentName === STATES.LOADING && !list && errorMsg) {
      dispatch(updateFSM(EVENTS.ERROR_RECEIVED));
    }
  }, [fsmCurrentName, list, errorMsg, dispatch]);

  if (!fsmCurrentName) return null;
  return (
    <MainLayout>
      {fsmCurrentName === STATES.IDLE && <FormSubmit  />}

      {fsmCurrentName === STATES.FAIL && errorMsg && (
        <ErrorDisplay errorMsg={errorMsg} />
      )}

      {fsmCurrentName === STATES.LOADING && <Loader />}

      {fsmCurrentName === STATES.SUCCESS && list && <List list={list} />}
      {(fsmCurrentName === STATES.SUCCESS ||
        fsmCurrentName === STATES.FAIL) && (
        <Button onClick={handleRetry}>Retry</Button>
      )}
    </MainLayout>
  );
};

export default Main;
