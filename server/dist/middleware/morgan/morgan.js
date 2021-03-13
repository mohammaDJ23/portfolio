"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "../../access.log"), {
    flags: "a"
});
exports.default = morgan_1.default("combined", { stream: accessLogStream });
