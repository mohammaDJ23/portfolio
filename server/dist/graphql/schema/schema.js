"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = graphql_1.buildSchema(`
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
