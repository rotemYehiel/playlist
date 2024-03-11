import styled from "styled-components";

export const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Song = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.5rem;

  &::before {
    content: "♬";
    background-size: contain;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.1rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 1536px) {
    font-size: 1rem;
  }
`;
