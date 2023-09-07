import styled, { css } from "styled-components";

export const WinResultWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, 45%);
  top: 0.9em;
  height: 45vh;
  left: 50%;
  width: 100%;
  pointer-events: none;
  @media (orientation: portrait) {
    top: 0;
    ${({ verticalHeight }) => verticalHeight && `height: calc(${verticalHeight}px  + 40px)`};
    transform: translateX(-50%);
  }
`;

export const Result = styled(WinResultWrapper)`
  display: ${({ displayWinResult }) => (displayWinResult ? 'block' : `none`)};
  z-index: 1;
  left: 50%;
  width: ${({ isLandscape }) => (isLandscape ? `25em` : `21em`)};
  @media (orientation: portrait) {
    width: ${({ isAndroid }) => (isAndroid ? '50em' : '39em')};
    top: 0;
    ${({ verticalHeight }) => verticalHeight && `height: calc(${verticalHeight}px  + 40px)`};
    transform: translateX(-50%);
    @media (orientation: portrait) and (min-device-height: 1024px) {
      ${({ isAndroid }) =>
        isAndroid &&
        css`
          width: 39em;
        `}
    }
  }
`;

export const Outer = styled.div`
  position: absolute;
  width: 100%;
  height: 10em;
  bottom: 0;
  overflow: hidden;
  clip-path: polygon(50% 0%, 95% 15%, 100% 45%, 90% 100%, 10% 100%, 0% 45%, 5% 15%);
  @media (orientation: portrait) {
    height: ${({ isAndroid }) => (isAndroid ? '14em' : `10em`)};
  }

  @media (min-device-width: 1024px) {
    ${({ isAndroid }) =>
      isAndroid &&
      css`
        height: ${({ isLandscape }) => (isLandscape ? '7em' : `9em`)};
      `}
  }
`;

export const MessageWrapper = styled(WinResultWrapper)`
  z-index: 22;
`;

export const Message = styled.div`
  position: absolute;
  width: 100%;
  top: ${({ isLandscape }) => (isLandscape ? `calc(50% - 2em)` : `calc(50% + 0.4em)`)};
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffff19;
  -webkit-text-stroke: 0.01em #fab682;
  text-shadow: 0 0 0.5em #000;
  font-size: 2.5em;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-align: center;
  z-index: 22;
  line-height: 1.2em;
  transition: opacity 1s;
  opacity: ${({ showMessage }) => (showMessage ? `1` : `0`)};

  @media screen and (orientation: portrait) and (max-device-height: 900px) {
    font-size: 3.5em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.5em;
  }

  @media screen and (orientation: portrait) {
    ${({ isIPad }) =>
      isIPad &&
      css`
        font-size: 1.8em;
      `};
  }
`;

export const Currency = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: ${({ currencySide }) => (currencySide === 'left' ? `row` : `row-reverse;`)};
  & span {
    margin: 0 0.1em;
  }
`;
