"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const messages_1 = __importDefault(require("../../models/message/messages"));
const validation_1 = require("../../utils/validation/validation");
const api_key = "9f3530592f02033c63cc67067876c54e-d5e69b0b-aa0b362a";
const DOMAIN = "sandbox55a0ac2fc6654dc49894ec6153983d0b.mailgun.org";
const mg = mailgun_js_1.default({ apiKey: api_key, domain: DOMAIN });
exports.default = {
    defaultFunction: function ({}, req) {
        return true;
    },
    leaveMessageHandler: async function ({ inputs }, req) {
        try {
            const isEmpty = validation_1.validation({ ...inputs });
            if (isEmpty.length > 0) {
                throw { message: isEmpty };
            }
            const { name, email, message: msg } = inputs;
            const data = {
                from: email,
                to: "mohammad.ha9bi8@gmail.com",
                subject: "New message",
                html: `
          <div>
            <h3>From <b>${name}</b></h3>
            <p>${msg}</p>
          </div>
        `
            };
            const sendedMessage = await mg.messages().send(data);
            if (!sendedMessage) {
                throw { message: "could not send any message to the target." };
            }
            const message = new messages_1.default({
                name,
                email,
                message: msg
            });
            await message.save();
            return {
                message: `Hey ${message.name}, thank you very much for leaving a message. Your message will be read as soon as possible`
            };
        }
        catch (error) {
            const err = new Error(JSON.stringify(error.message));
            throw err;
        }
    }
};
