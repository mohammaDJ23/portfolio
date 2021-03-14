import { FunctionComponent, memo } from "react";

import { MessageComponentTypes } from "../../types/types";

import "./Message.css";

const Message: FunctionComponent<MessageComponentTypes> = ({ message, error }) => {
  return (
    <div
      className={`message position-fixed w-300 p-4 left-50 default-transition ${
        error ? "red-background-color" : "yellow-background-color"
      } ${
        message.length || error!.length > 0 ? "top-2" : "top--100"
      } border-radius-8 white-color z-160`}
    >
      <div className="row">
        <div className="col">
          <div>
            <p className="m-0">{message || error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Message);
