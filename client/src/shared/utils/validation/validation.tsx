import validator from "validator";

import { InputEnums, IsValidInputTypes } from "../../types/types";

const { isLength, normalizeEmail, matches } = validator;

export function validation(value: string, input: string) {
  let isValid: IsValidInputTypes = { valid: true, error: "" };

  switch (input) {
    case InputEnums.NAME:
      isValid["valid"] =
        isValid["valid"] &&
        isLength(value, { min: 3, max: 30 }) &&
        matches(value, /^[a-zA-z]+([\s][a-zA-Z]+)*$/);

      if (!isValid["valid"]) {
        isValid["error"] = "the name should between 3 - 30 and contain alphabet characters";
      }

      break;

    case InputEnums.EMAIL:
      isValid["valid"] =
        isValid["valid"] &&
        /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(
          value
        );

      if (isValid["valid"]) {
        normalizeEmail(value);
      } else {
        isValid["error"] = "the email is incorrect";
      }

      break;

    case InputEnums.MESSAGE:
      isValid["valid"] =
        isValid["valid"] &&
        isLength(value, { min: 10, max: 350 }) &&
        matches(value, /^[a-zA-z]+([\s][a-zA-Z]+)*$/);

      if (!isValid["valid"]) {
        isValid["error"] = "the message should between 10 - 350 and contain alphabet characters";
      }

      break;

    default:
      return isValid;
  }

  return isValid;
}
