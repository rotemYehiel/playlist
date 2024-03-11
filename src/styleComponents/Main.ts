import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  padding: 2vh 20vw;
  background-color: #efe9f4;

  @media (max-width: 1536px) {
    flex: 0.9;
    padding: 4vh 20vw;
  }

  @media (max-width: 800px) {
    flex: 0.95;
    padding: 2vh 5vw;
  }
`;
