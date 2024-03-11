import styled from "styled-components";

export const StyledLoader = styled.div`
  position: relative;
  width: 10vw;
  height: 10vw;
  margin: 10vh auto;

  &::before {
    content: "";
    background-color: #094a4f73;
    position: absolute;
    left: 0;
    border-radius: 50%;
    animation: shade 0.5s linear infinite;

    width: 10vw;
    height: 1vw;
    top: 12vw;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #16bac5;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    animation: bounce 0.5s linear infinite;
  }

  @keyframes bounce {
    15% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67deg);
    }
    75% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shade {
    0%,
    100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
`;
