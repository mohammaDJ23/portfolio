import { LeaveMessageHandlerQueryTypes, LeaveMessageHandlerReturnTypes } from "../../types/types";

export const queries = {
  leaveMessageHandlerQuery: function <T extends LeaveMessageHandlerQueryTypes>({
    name,
    email,
    message
  }: T): LeaveMessageHandlerReturnTypes {
    return {
      query: `
        mutation queryTypes ( $name: String!, $email: String!, $message: String! ) {
          leaveMessageHandler ( inputs: { name: $name, email: $email, message: $message } ) {
            message
          }
        }
      `,

      variables: {
        name,
        email,
        message
      }
    };
  }
};
