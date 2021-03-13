import { buildSchema } from "graphql";

export default buildSchema(`
  type RequestedMessageData {
    message: String!
  }

  input MessageInputsData {
    name: String!
    email: String!
    message: String!
  }



  type RootQuery {
    defaultFunction: Boolean!
  }

  type RootMutation {
    leaveMessageHandler (inputs: MessageInputsData!): RequestedMessageData!
  }



  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
