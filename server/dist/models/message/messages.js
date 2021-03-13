"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema: BuildSchema, model } = mongoose_1.default;
const defaultTypes = {
    type: String,
    required: true
};
const MessageSchema = new BuildSchema({
    name: defaultTypes,
    email: defaultTypes,
    message: defaultTypes
});
exports.default = model("Message", MessageSchema);
