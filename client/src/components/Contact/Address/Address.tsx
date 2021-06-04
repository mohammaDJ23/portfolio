import { FunctionComponent, memo } from "react";

import { AddressComponentTypes } from "../../../shared/types/types";

import "./Address.css";

const Address: FunctionComponent<AddressComponentTypes> = ({
  showContactInformation
}) => {
  return (
    <div
      className={`contact-information p-4 position-fixed bottom-left-4-50 gray-background-color z-100 default-transition ${
        showContactInformation ? "show" : "hide"
      }`}
    >
      <div className="row">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-geo-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
              />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">Shiraz, Fars, Iran</h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">+98 917 416 3042</h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">mohammad.ha9bi8@gmail.com</h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M0 0v24h24v-24h-24zm13.39 19.351c-5.133.98-9.647-3.509-8.722-8.673-2.379-3.868 2.075-8.393 5.956-6.02 5.091-.955 9.606 3.476 8.702 8.653 2.392 3.866-2.049 8.397-5.936 6.04zm2.893-5.468c0 2.026-1.615 3.354-4.026 3.354-2.121 0-4.252-.965-4.242-2.627.003-.501.376-.961.872-.961 1.249 0 1.237 1.863 3.225 1.863 1.396 0 1.872-.764 1.872-1.296 0-1.924-6.029-.745-6.029-4.362 0-1.958 1.602-3.309 4.12-3.161 2.401.142 3.809 1.202 3.944 2.193.067.647-.361 1.151-1.105 1.151-1.086 0-1.197-1.454-3.067-1.454-.844 0-1.556.352-1.556 1.116-.001 1.597 5.992.67 5.992 4.184z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open("https://join.skype.com/invite/iLANEIgxYmTB");
                }}
              >
                Skype
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M0 0v24h24v-24h-24zm10.488 8.272l5.531 3.243-.686 1.162-5.532-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.331 1.23-6.204-1.667.35-1.302zm-.672 2.813l6.498.65-.118 1.28-6.504-.586.124-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.081 6.224-1.329.231z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open(
                    "https://stackoverflow.com/users/14800462/mohammad-nowresideh"
                  );
                }}
              >
                Stackoverflow
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open("https://github.com/mohammaDJ23");
                }}
              >
                Github
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open(
                    "https://www.linkedin.com/in/mohammad-nowresideh-5a2a96201/"
                  );
                }}
              >
                Linkedin
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="row my-2">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M14.667 12c0 1.473-1.194 2.667-2.667 2.667-1.473 0-2.667-1.193-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667zm3.846-3.232c.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.233c-.1 2.15-1.109 3.181-3.279 3.279-.844.038-1.097.047-3.234.047-2.136 0-2.39-.008-3.232-.046-2.174-.099-3.181-1.132-3.279-3.279-.039-.845-.048-1.098-.048-3.234s.009-2.389.047-3.232c.099-2.152 1.109-3.181 3.279-3.279.844-.039 1.097-.047 3.233-.047s2.39.008 3.233.046c2.168.099 3.18 1.128 3.28 3.28zm-2.405 3.232c0-2.269-1.84-4.108-4.108-4.108-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.84 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108zm1.122-4.27c0-.53-.43-.96-.96-.96s-.96.43-.96.96.43.96.96.96c.531 0 .96-.43.96-.96zm6.77-7.73v24h-24v-24h24zm-4 12c0-2.172-.009-2.445-.048-3.298-.131-2.902-1.745-4.52-4.653-4.653-.854-.04-1.126-.049-3.299-.049s-2.444.009-3.298.048c-2.906.133-4.52 1.745-4.654 4.653-.039.854-.048 1.127-.048 3.299 0 2.173.009 2.445.048 3.298.134 2.906 1.746 4.521 4.654 4.654.854.039 1.125.048 3.298.048s2.445-.009 3.299-.048c2.902-.133 4.522-1.745 4.653-4.654.039-.853.048-1.125.048-3.298z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open("https://www.instagram.com/m_nowresideh/");
                }}
              >
                Instagram
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col px-2 py-0 d-flex align-items-center">
          <div className="mr-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
            </svg>
          </div>

          <div>
            <h3 className="m-0 label">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();

                  window.open("https://twitter.com/mohamma78207970");
                }}
              >
                Twitter
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Address);
