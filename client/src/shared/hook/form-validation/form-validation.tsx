import { useCallback, useReducer } from "react";

import {
  FormValidationEnums,
  UseFormValidationDispatchTypes,
  UseFormValidationStateHookTypes
} from "../../types/types";

export const useFormValidation = () => {
  const [{ formValid, inputs }, dispatch] = useReducer(
    (
      state: UseFormValidationStateHookTypes,
      action: UseFormValidationDispatchTypes
    ): UseFormValidationStateHookTypes => {
      switch (action.type) {
        case FormValidationEnums.FORM_VALIDATION:
          const label = action.label.toLowerCase();

          let isValid: boolean = true;

          if (!state.inputs[label]) {
            state.inputs[label] = { value: action.value, valid: action.inputValid };
          }

          for (const input in state.inputs) {
            if (input === label) {
              isValid = isValid && action.inputValid;
            } else {
              isValid = isValid && state.inputs[input].valid;
            }
          }

          return {
            ...state,

            inputs: {
              ...state.inputs,

              [label]: {
                ...state.inputs[label],
                value: action.value,
                valid: action.inputValid
              }
            },

            formValid: isValid
          };

        case FormValidationEnums.CLEAR_INPUTS: {
          console.log({
            ...state,
            inputs: {},
            formValid: false
          });

          return {
            ...state,
            inputs: {},
            formValid: false
          };
        }

        default:
          return state;
      }
    },

    {
      formValid: false,
      inputs: {}
    }
  );

  const onInputHandler = useCallback(({ value, valid, label }) => {
    dispatch({ type: FormValidationEnums.FORM_VALIDATION, value, inputValid: valid, label });
  }, []);

  return { formValid, inputs, onInputHandler };
};
