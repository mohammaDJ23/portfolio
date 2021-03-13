import { FunctionComponent, ChangeEvent, useReducer, useEffect, useContext } from "react";
import TextField from "@material-ui/core/TextField";

import {
  FormValidationEnums,
  InputDispatchTypes,
  InputStateTypes,
  InputTypes
} from "../../types/types";

import { validation } from "../../utils/validation/validation";
import { InputCleanerContext } from "../../context/input-cleaner/input-cleaner";

import "./Input.css";

const Input: FunctionComponent<InputTypes> = ({ label, className, onInputHandler, inputError }) => {
  const [{ value, validate }, dispatch] = useReducer(
    (state: InputStateTypes, action: InputDispatchTypes): InputStateTypes => {
      switch (action.type) {
        case FormValidationEnums.CHANGE_INPUT:
          const { valid, error } = validation(action.value, label);

          return {
            ...state,
            value: action.value,
            validate: { valid, error }
          };

        case FormValidationEnums.CLEAR_INPUTS:
          return {
            ...state,
            value: "",
            validate: { valid: false, error: "" }
          };

        default:
          return state;
      }
    },

    {
      value: "",
      validate: { valid: false, error: "" }
    }
  );

  const { isClear, inputCleaner } = useContext(InputCleanerContext);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormValidationEnums.CHANGE_INPUT, value: event.target.value, label });
  };

  useEffect(() => {
    onInputHandler({ label, value, valid: validate.valid });
  }, [value, label, validate.valid, onInputHandler]);

  useEffect(() => {
    if (isClear) {
      dispatch({ type: FormValidationEnums.CLEAR_INPUTS });
      inputCleaner();
    }
  }, [isClear, inputCleaner]);

  let error: string = inputError || validate.error;

  return (
    <div className="input">
      <TextField
        className={`w-100 ${className}`}
        id="standard-basic"
        label={label}
        value={value}
        onChange={onChangeHandler}
        size="medium"
      />

      {error.length > 0 && !validate.valid && <p className="red mt-2">{error}</p>}
    </div>
  );
};

export default Input;
