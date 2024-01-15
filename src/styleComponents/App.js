import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  appearance: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;

  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  width: fit-content;

  border-radius: 4px;

  background-color: #171d1c;
  color: white;

  &:hover {
    background-color: #5fbff9;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
