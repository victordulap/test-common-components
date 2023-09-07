import React from "react";
import { isAndroid, isMobileOnly } from "react-device-detect";
import styled, { css } from "styled-components";

const Overlay = styled.svg`
  position: absolute;
  top: calc(50% - 40px);
  filter: blur(19px);
  transform: translateY(-60%);

  @media (orientation: portrait) {
    transform: translateY(-50%);
    ${({ isAndroid }) =>
      isAndroid &&
      isMobileOnly &&
      css`
        top: calc(50%);
      `}
  }
`;

const WinOverlay = ({ colorValue, showOverlay, aspectRatio }) => {
  const color = colorValue === "Red" ? "#f33" : colorValue === "Black" ? "#000" : colorValue === "Blue" ? "#009BD4" : "#008000";
  return (
    showOverlay && (
      <Overlay id="win-overlay" viewBox="0 0 257.999 197.509" isAndroid={isAndroid} aspectRatio={aspectRatio}>
        <defs>
          <radialGradient
            id="aOverlay"
            cx=".45"
            cy="1"
            r="1"
            gradientTransform="matrix(0 -1 .383 0 .117 1.5)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor={`${color}`} />
            <stop offset=".711" stopColor={`${color}`} stopOpacity=".89" />
            <stop offset=".845" stopColor={`${color}`} stopOpacity=".3" />
            <stop offset="1" stopColor={`${color}`} stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M-8507.254-386.492h-169.324l-58.137-39.621V-584h258v156.79l-30.538 40.718z"
          transform="translate(8734.715 584.001)"
          opacity=".7"
          fill={`url(${window.location.href}#aOverlay)`}
        />
      </Overlay>
    )
  );
};

export default WinOverlay;
