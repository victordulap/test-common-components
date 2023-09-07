import React from "react";

const WheelBall = () => (
  <svg width="481" height="481" viewBox="0 0 481 481">
    <defs>
      <filter id="wheel-ball-aBall" width="58.82" height="58.66" x="211.202" y="36.503" filterUnits="userSpaceOnUse">
        <feOffset dy="7" />
        <feGaussianBlur result="b" stdDeviation="5" />
        <feFlood floodOpacity=".502" />
        <feComposite in2="b" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="wheel-ball-dBall" width="58.82" height="58.66" x="211.202" y="36.503" filterUnits="userSpaceOnUse">
        <feOffset dy="7" />
        <feGaussianBlur result="e" stdDeviation="5" />
        <feFlood floodOpacity=".502" />
        <feComposite in2="e" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <radialGradient
        id="wheel-ball-cBall"
        cx=".414"
        cy=".414"
        r=".614"
        gradientTransform="matrix(1 0 0 1.037 0 -.015)"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset=".467" stop-color="#fff" stopOpacity=".749" />
        <stop offset=".737" stop-color="#fff" stopOpacity=".549" />
        <stop offset=".856" stop-color="#fff" stopOpacity=".502" />
        <stop offset="1" stop-color="#fff" stopOpacity=".6" />
      </radialGradient>
    </defs>
    <g filter={`url(${window.location.href}#wheel-ball-aBall)`}>
      <ellipse cx="14.41" cy="14.33" fill="#353535" rx="14.41" ry="14.33" transform="translate(226.2 44.5)" />
    </g>
    <g filter={`url(${window.location.href}#wheel-ball-dBall)`}>
      <ellipse
        cx="14.41"
        cy="14.33"
        fill={`url(${window.location.href}#wheel-ball-cBall)`}
        rx="14.41"
        ry="14.33"
        transform="translate(226.2 44.5)"
      />
    </g>
  </svg>
);

export default WheelBall;
