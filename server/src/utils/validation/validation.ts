import validator from "validator";

import { InputsEnums, ValidationReturnTypes, ValidationTypes } from "../../types/types";

const { isLength, isEmail, matches, normalizeEmail } = validator;

export function validation(inputs: ValidationTypes): ValidationReturnTypes {
  let isValid: boolean = true;

  const isEmpty: any[] = [];

  Object.keys(inputs).forEach(input => {
    switch (input) {
      case InputsEnums.NAME:
        isValid =
          isValid &&
          isLength(inputs[input], { min: 3, max: 30 }) &&
          matches(inputs[input], /^[a-zA-z]+([\s][a-zA-Z]+)*$/);

        if (!isValid) {
          isEmpty.push({
            [input]: "the name should between 3 - 30 and contain alphabet characters"
          });
        }

        break;

      case InputsEnums.EMAIL:
        isValid =
          isValid &&
          /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(
            inputs[input]
          );

        if (isValid) {
          normalizeEmail(inputs[input]);
        } else {
          isEmpty.push({ [input]: "the email is incorrect" });
        }

        break;

      case InputsEnums.MESSAGE:
        isValid =
          isValid &&
          isLength(inputs[input], { min: 10, max: 350 }) &&
          matches(inputs[input], /^[a-zA-z]+([\s][a-zA-Z]+)*$/);

        if (!isValid) {
          isEmpty.push({
            [input]: "the message should between 10 - 350 and contain alphabet characters"
          });
        }

        break;

      default:
        isEmpty.push({ message: "Invalid input." });
    }
  });

  return isEmpty;
}
