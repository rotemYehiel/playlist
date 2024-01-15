import styled from "styled-components";

export const MainHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #5863f8;
  flex: 0.3;
  margin: 0;
  padding: 2vh 20vw;

  @media (max-width: 1536px) {
    flex: 0.1;
    padding: 1vh 20vw;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    flex: 0.05;
    padding: 1vh 5vw;
  }
`;

export const ListTitle = styled.h2`
  text-transform: capitalize;
  color: white;
  font-size: 3rem;
  margin: 0;

  @media (max-width: 1536px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const ListImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  background-image: ${({ $listImage }) =>
    $listImage ? `url(${$listImage})` : "unset"};
  background-size: cover;
  background-position: center;
`;

export const ListImageWrapper = styled.div`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 60vw;
  max-width: 250px;
  height: 60vw;
  max-height: 250px;

  @media (max-width: 1536px) {
    max-width: 100px;
    max-height: 100px;
  }

  @media (max-width: 800px) {
    max-width: 50px;
    max-height: 50px;
  }
`;
