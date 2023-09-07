import React, { useEffect, useState } from 'react';
import WheelBall from '../WheelBall';
import styled, { keyframes } from 'styled-components';

import WheelVector from 'images/wheel.svg';
import WheelDragonRoulette from 'images/winDragonRoulette.svg';
import WheelShadow from 'images/wheelShadow.svg';

import { useSvgAttr } from 'common/utils';
import { RacetrackData, mapDragonRouletteWin } from 'common/constants/roulette';

const rotateWheel = (x) => keyframes`
    0%{
        transform : rotate(${x - 90}deg)
    }
    100% {
        transform : rotate(${x}deg)
    }`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 3;
  & img {
    &:nth-of-type(1) {
      animation: ${({ spinData }) => rotateWheel(spinData)} 5s normal forwards;
      z-index: 1;
      position: relative;
    }
    &:nth-of-type(2) {
      position: absolute;
      z-index: 2;
      top: 10px;
      left: 0;
    }
  }

  & svg {
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    animation: ${rotateWheel(0)} 5s normal forwards;
  }
`;

const Wheel = ({ roundResult, isDragonRoulette }) => {
  const [spinPosition, setSpinPosition] = useState(0);
  let spinAngle = 360 / RacetrackData.length;
  useEffect(() => {
    let spinData =
      (RacetrackData.findIndex((item) => item.type === roundResult) -
        11 +
        (isDragonRoulette ? mapDragonRouletteWin[roundResult] : 0)) *
      spinAngle;
    setSpinPosition(spinData);
  }, [isDragonRoulette, roundResult, spinAngle]);

  return (
    <Wrapper spinData={spinPosition}>
      {isDragonRoulette ? (
        <img src={WheelDragonRoulette} ref={useSvgAttr(['fill'])} />
      ) : (
        <img src={WheelVector} ref={useSvgAttr(['fill'])} />
      )}
      <img src={WheelShadow} ref={useSvgAttr(['fill'])} />
      <WheelBall />
    </Wrapper>
  );
};

export default Wheel;
