// @flow
import React, { useEffect, useState } from 'react';
import { Currency, Message, MessageWrapper, Outer, Result } from './index.styled';
import { isAndroid } from 'react-device-detect';
import {
  RESULT_COLOR_ENUM,
  RESULT_COLOR_ENUM_DRAGON_ROULETTE,
  RoundPhaseEnum,
} from 'common/constants/roulette';
import WinOverlay from './WinOverlay';
import Wheel from './Wheel';
import useOrientation from 'hooks/useOrientation';

function truncateNumber(number, decimals = 0) {
  if (decimals === 0) {
    return Math.trunc(number);
  }

  const factor = 10 ** decimals;
  return (Math.floor(number * factor) / factor).toFixed(decimals);
}

function truncateObjProps(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => ({ ...acc, [k]: truncateNumber(v) }), {});
}

const WinResult = (props) => {
  const {
    amount,
    currencySide,
    currency,
    isDragonRoulette,
    message,
    winningResultOpt,
    isOnTop,
    roundResult,
    roundPhase,
  } = props;

  const { isLandscape, aspectRatio } = useOrientation();

  let { maximizeEnd, perspectiveEnd, rect } = winningResultOpt ?? {};
  const tableEndedAnimation = maximizeEnd && perspectiveEnd;
  rect = truncateObjProps(rect ?? {});

  const [topPos, setTopPos] = useState(-2000);
  const [leftPos, setLeftPos] = useState(-2000);

  const displayWinResult =
    (roundPhase === RoundPhaseEnum.ResultReady || roundPhase === RoundPhaseEnum.Closed) &&
    tableEndedAnimation;


  useEffect(() => {
    setLeftPos(rect?.left + rect?.width / 2);
    setTopPos(rect?.top);
  }, [rect, winningResultOpt, isLandscape, aspectRatio.width]);

  displayWinResult && console.log(
    'amount: ', amount,
    '\n currencySide: ', currencySide,
    '\n currencyName: ', currency,
    '\n isDragonRoulette: ', isDragonRoulette,
    '\n winningResultOpt: ', winningResultOpt,
    '\n isOnTop: ', isOnTop,
    '\n roundResult: ', roundResult,
    '\n roundPhase: ', roundPhase,
    '\n aspectRatio: ', aspectRatio,
    '\n isLandscape: ', isLandscape,
  )

  return (
    <>
      <Result
        id="winning-container"
        top={topPos}
        left={leftPos}
        isOnTop={isOnTop}
        verticalHeight={aspectRatio.height}
        isAndroid={isAndroid}
        displayWinResult={displayWinResult}
        isLandscape={isLandscape}
      >
        <WinOverlay
          showOverlay={amount > 0}
          colorValue={(isDragonRoulette
            ? RESULT_COLOR_ENUM_DRAGON_ROULETTE
            : RESULT_COLOR_ENUM
          ).findPropertyFromValue(roundResult)}
          aspectRatio={aspectRatio}
        />
        <Outer id="win-wheel" isAndroid={isAndroid}>
          <Wheel roundResult={roundResult} isDragonRoulette={isDragonRoulette} />
        </Outer>
      </Result>
      <MessageWrapper verticalHeight={aspectRatio?.height || 0}>
        <Message id="winning-msg" showMessage={amount > 0} isLandscape={isLandscape}>
          {amount > 0 && (
            <>
              {message}
              <Currency id="winning-amount-container" currencySide={currencySide}>
                <span id="winning-amount-currency">{currency}</span>
                <span id="winning-amount-number">{amount}</span>
              </Currency>
            </>
          )}
        </Message>
      </MessageWrapper>
    </>
  );
};

export default WinResult;
