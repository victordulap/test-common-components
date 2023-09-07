import { useEffect, useState } from 'react';

const isIPad = () => navigator.userAgent.match(/iPad/i) != null;

const calcRatio = (arg) => {
  const size = {};
  const gw = window.innerWidth;
  const gh = window.innerHeight;

  if (gw * 9 < gh * 16) {
    size.width = gw * (arg.widthRatio || 0.789);
    size.height = (gw * (arg.heightRatio || 0.45867) * 9) / 16;
    size.heightRM = (gw * 0.275 * 9) / 16;
    return size;
  }

  size.width = (gh * (arg.widthRatio || 0.789) * 16) / 9;
  size.height = gh * (arg.heightRatio || 0.45867);
  size.heightRM = gh * 0.275;
  return size;
};

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  const [aspectRatio, setAspectRatio] = useState({ width: 0, height: 0 });
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 });

  const resize = () => {
    // isLandscape
    setIsLandscape(window.innerHeight < window.innerWidth);
    // currentSize
    setCurrentSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // aspectRatio
    let _aspectRatio = isIPad() ? 1.33 : 1;
    if (!isLandscape && window.innerWidth >= 768) {
      _aspectRatio = 0.9;
    }
    const sizeRatio = calcRatio({
      widthRatio: _aspectRatio,
      heightRatio: _aspectRatio,
    });
    setAspectRatio(sizeRatio);
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize, false);
    window.addEventListener('orientationchange', resize, false);

    return () => {
      window.removeEventListener('resize', resize, false);
      window.removeEventListener('orientationchange', resize, false);
    };
  }, []);

  return { isLandscape, aspectRatio, currentSize };
};

export default useOrientation;
