import { FunctionComponent, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import { CurveLineTypes, DurationTimesEnum } from "../../types/types";

import "./Curve-line.css";

const CurveLine: FunctionComponent<CurveLineTypes> = ({
  path,
  width,
  height,
  transition,
  position,
  opacity,
  large,
  small
}) => {
  const curveLineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const { current: curveLine } = curveLineRef;

    if (curveLine) {
      TweenMax.fromTo(
        curveLine,
        DurationTimesEnum.SLOW_DURATION,
        { opacity: 0, x: 20, scale: 1.1 },
        { opacity: 1, delay: 0.5, x: 0, scale: 1 }
      );
    }
  }, [curveLineRef]);

  return (
    <svg
      ref={curveLineRef}
      width={width}
      height={height}
      className={`position-absolute z-100 ${
        large ? "large-curve" : small && "small-curve"
      } ${position} ${opacity}`}
    >
      <defs>
        <filter filterUnits="userSpaceOnUse" id="Filter_0" x="-3px" y="-3px">
          <feOffset in="SourceAlpha" dx="0" dy="47" />
          <feGaussianBlur result="blurOut" stdDeviation="4" />
          <feFlood floodColor="rgb(0, 0, 0)" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="blurOut" />

          <feComponentTransfer>
            <feFuncA type="linear" slope="0.17" />
          </feComponentTransfer>

          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="Filter_1">
          <feFlood floodColor="rgb(240, 195, 15)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
      </defs>

      <g filter="url(#Filter_0)">
        <g filter="url(#Filter_1)">
          <path
            fillRule="evenodd"
            stroke="#f0c30f"
            strokeWidth="6px"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            className={`${transition}`}
            d={path}
          />
        </g>
      </g>

      <path
        fill="none"
        stroke="#f0c30f"
        strokeWidth="6px"
        strokeLinecap="round"
        strokeLinejoin="miter"
        className={`${transition}`}
        d={path}
      />
    </svg>
  );
};

export default CurveLine;
