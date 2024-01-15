import styled from "styled-components";
import { Button } from "./App";

export const FormSubmitLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;

  & > * {
    margin: 10px 0;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 1536px) {
    font-size: 2rem;
  }
`;

export const InputsSection = styled.section`
  display: flex;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  appearance: none;
  outline: none;
  border: none;
  box-sizing: border-box;

  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  position: relative;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover,
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ResetButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;

  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  font-size: 16px;
  z-index: 2;

  &:hover {
    font-weight: 600;
    background-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:disabled:hover {
    opacity: 0.5;
  }
`;

export const SubmitButton = styled(Button)`
  border-radius: unset;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
