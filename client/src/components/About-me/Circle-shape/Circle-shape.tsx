import { FunctionComponent, memo, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import { DurationTimesEnum, UseCircleHookTypes } from "../../../shared/types/types";

import "./Circle-shape.css";

const CircleShape: FunctionComponent<UseCircleHookTypes> = ({ scale, rotate }) => {
  const circleShapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: circleShape } = circleShapeRef;

    if (circleShape) {
      TweenMax.fromTo(
        circleShape,
        DurationTimesEnum.FAST_DURATION,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, delay: 0.6 }
      );
    }
  }, [circleShapeRef]);

  return (
    <div ref={circleShapeRef} className="circle position-absolute bottom-right-0">
      <svg
        width="52px"
        height="66px"
        viewBox="0 0 226 226"
        className="position-absolute default-transition buttom-right-0"
        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,226v-226h226v226z" fill="none"></path>

          <g className="opacity-5" id="original-icon" fill="#f0c30f">
            <path d="M112.55859,28.25c-2.37256,0.16553 -4.46923,1.48975 -5.62792,3.47608l-91.8125,155.375c-1.26905,2.20703 -1.32422,4.91064 -0.05519,7.0625c1.26905,2.20703 3.58644,3.58642 6.12452,3.58642h183.625c2.53809,0 4.85547,-1.37939 6.12452,-3.58642c1.26905,-2.15186 1.21386,-4.85547 -0.05517,-7.0625l-91.8125,-155.375c-1.21387,-2.09669 -3.42091,-3.36572 -5.84864,-3.47608c-0.2207,0 -0.44141,0 -0.66211,0zM113,49.16162l79.45313,134.46338h-158.90625z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default memo(CircleShape);
