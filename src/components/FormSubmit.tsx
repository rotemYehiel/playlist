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
import { ErrorMsg, List as ListInterface } from "../interfaces/storeInterface";


const FormSubmit = () => {
  const dispatch = useDispatch();
  const fsmCurrentStateName = useSelector(fsmCurrentNameSelector);

  const [listName, setListName] = useState("");

  const setListFunc = useCallback(
    (list:ListInterface | null) => {
      return dispatch(updateList(list))},
    [dispatch]
  );

  const setErrorMsgFunc = useCallback(
    (errorMsg:ErrorMsg | null) => dispatch(setErrorMsg(errorMsg)),
    [dispatch]
  );

  const handleSubmit = useCallback(
    (ev:React.SyntheticEvent) => {
      ev.preventDefault();
      const clearName=listName.trimStart().trimEnd();
      
      if(clearName.length>0){
        dispatch(
          updateFSM(EVENTS.SUBMIT, {
            listName:clearName,
            setListFunc,
            setErrorMsgFunc,
          })
        );
      }
    },
    [dispatch, listName, setErrorMsgFunc, setListFunc]
  );

  const handleReset = useCallback(
    (ev:React.SyntheticEvent) => {
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
    <FormSubmitLayout onSubmit={handleSubmit} >
      <Title>Search your playlist</Title>
      <InputsSection>
        <SubmitButton disabled={!listName.length}>Submit</SubmitButton>
        <InputContainer>
          <Input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter List Name"
            maxLength={20}
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
      </InputsSection>
    </FormSubmitLayout>
  );
};

export default FormSubmit;
