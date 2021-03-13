import { Request } from "express";
import mailgun from "mailgun-js";

import { MessageHandlerInputTypes, MessageHandlerReturnTypes } from "../../types/types";
import Message from "../../models/message/messages";
import { validation } from "../../utils/validation/validation";

const api_key = "9f3530592f02033c63cc67067876c54e-d5e69b0b-aa0b362a";
const DOMAIN = "sandbox55a0ac2fc6654dc49894ec6153983d0b.mailgun.org";

const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

export default {
  defaultFunction: function <T extends Request>({}, req: T) {
    return true;
  },

  leaveMessageHandler: async function <T extends MessageHandlerInputTypes, U extends Request>(
    { inputs }: T,
    req: U
  ): Promise<MessageHandlerReturnTypes> | never {
    try {
      const isEmpty = validation({ ...inputs });

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

      const message = new Message({
        name,
        email,
        message: msg
      });

      await message.save();

      return {
        message: `Hey ${message.name}, thank you very much for leaving a message. Your message will be read as soon as possible`
      };
    } catch (error) {
      const err = new Error(JSON.stringify(error.message));
      throw err;
    }
  }
};
