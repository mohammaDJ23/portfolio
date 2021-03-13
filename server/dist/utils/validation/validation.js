"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const validator_1 = __importDefault(require("validator"));
const types_1 = require("../../types/types");
const { isLength, isEmail, matches, normalizeEmail } = validator_1.default;
function validation(inputs) {
    let isValid = true;
    const isEmpty = [];
    Object.keys(inputs).forEach(input => {
        switch (input) {
            case types_1.InputsEnums.NAME:
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
            case types_1.InputsEnums.EMAIL:
                isValid = isValid && isEmail(inputs[input]);
                if (isValid) {
                    normalizeEmail(inputs[input]);
                }
                else {
                    isEmpty.push({ [input]: "the email is incorrect" });
                }
                break;
            case types_1.InputsEnums.MESSAGE:
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
exports.validation = validation;
