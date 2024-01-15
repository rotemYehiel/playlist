import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMsg, updateFSM, updateList } from "../store/actions";
import { fsmCurrentNameSelector } from "../store/selectors";
import STATES from "../constants/states";
import EVENTS from "../constants/events";
import {
  FormSubmitLayout,
  Title,
  InputsSection,
  SubmitButton,
  Input,
  ResetButton,
  InputContainer,
} from "../styleComponents/FormSubmit";

const FormSubmit = () => {
  const dispatch = useDispatch();
  const fsmCurrentStateName = useSelector(fsmCurrentNameSelector);

  const [listName, setListName] = useState("");

  const setListFunc = useCallback(
    (list) => dispatch(updateList(list)),
    [dispatch]
  );

  const setErrorMsgFunc = useCallback(
    (errorMsg) => dispatch(setErrorMsg(errorMsg)),
    [dispatch]
  );

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      dispatch(
        updateFSM(EVENTS.SUBMIT, {
          listName,
          setListFunc,
          setErrorMsgFunc,
        })
      );
    },
    [dispatch, listName, setErrorMsgFunc, setListFunc]
  );

  const handleReset = useCallback(
    (ev) => {
      ev.preventDefault();
      if (fsmCurrentStateName !== STATES.LOADING) {
        dispatch(updateFSM(EVENTS.RESET));
        setListName("");
        setListFunc(null);
        setErrorMsgFunc(null);
      }
    },
    [fsmCurrentStateName, dispatch, setErrorMsgFunc, setListFunc]
  );

  return (
    <FormSubmitLayout onSubmit={handleSubmit}>
      <Title>Search your playlist</Title>
      <InputsSection>
        <InputContainer>
          <Input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter List Name"
            maxLength="20"
          />
          {listName && (
            <ResetButton
              onClick={handleReset}
              disabled={fsmCurrentStateName === STATES.LOADING}
            >
              X
            </ResetButton>
          )}
        </InputContainer>
        <SubmitButton disabled={!listName.length}>Submit</SubmitButton>
      </InputsSection>
    </FormSubmitLayout>
  );
};

export default FormSubmit;
