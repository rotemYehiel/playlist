import styled from "styled-components";

export const ErrorLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;

  & > * {
    margin: 0;
  }
`;
