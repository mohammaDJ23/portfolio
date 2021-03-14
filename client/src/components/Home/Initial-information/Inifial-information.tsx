import { FunctionComponent, memo } from "react";

import { InitialInformationComponentTypes } from "../../../shared/types/types";

import "./Initial-information.css";

const InitialInformation: FunctionComponent<InitialInformationComponentTypes> = ({
  myNameRef,
  myJobRef,
  myLevelRef,
  myPortfolioRef,
  navigateToPage
}) => {
  return (
    <div className="initial-information position-absolute z-120 padding-left-2-temp middle-content">
      <div className="row p-0 m-0">
        <div className="col p-0">
          <div className="white-color position-relative overflow-hidden">
            <div ref={myNameRef}>
              <h6>
                <span>Hi i am </span>
                <span>Mohammad Nowresideh</span>
              </h6>
            </div>
          </div>

          <div className="my-4 overflow-hidden">
            <div ref={myJobRef}>
              <h1>
                <b className="yellow-color">FRONT END DEVELOPER</b>
              </h1>
            </div>
          </div>

          <div className="mb-4 overflow-hidden">
            <div ref={myLevelRef}>
              <h5 className="opacity-67 white-color">MID. UI/UX DESIGNER</h5>
            </div>
          </div>

          <div className="position-relative overflow-hidden">
            <div ref={myPortfolioRef}>
              <h4
                className="white-color hover d-inline"
                onClick={() => navigateToPage("/portfolio")}
              >
                CHECK MY CV
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#f0c30f"
                    className="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InitialInformation);
