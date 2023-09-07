import React from 'react';
import WheelDragonRoulette from 'images/winDragonRoulette.svg';
import { useSvgAttr } from 'common/utils';


const Wheel = () => {
  return (
    <>
      <img src={WheelDragonRoulette} ref={useSvgAttr(['fill'])} />
    </>
  );
};

export default Wheel;
