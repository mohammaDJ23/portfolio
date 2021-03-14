import { FunctionComponent, memo } from "react";

import { HomeButtonsComponentTypes } from "../../../shared/types/types";

import "./Buttons.css";

const Buttons: FunctionComponent<HomeButtonsComponentTypes> = ({
  pictures,
  onClickHandler,
  buttonRef
}) => {
  return (
    <div ref={buttonRef} className="position-absolute middle-button z-120">
      {pictures.map((item, index) => (
        <div key={item.id} className="mb-1 overflow-hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="14"
              height="14"
              viewBox="0 0 172 172"
              className="hover"
              onClick={() => onClickHandler({ id: item.id, index })}
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
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={item.yellowButton ? "#f0c30f" : "#ffffff"} className="default-transition">
                  <path d="M86,0c-47.49639,0 -86,38.50361 -86,86c0,47.4964 38.50361,86 86,86c47.4964,0 86,-38.5036 86,-86c0,-47.49639 -38.5036,-86 -86,-86z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Buttons);
