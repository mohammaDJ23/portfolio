"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("../../graphql/schema/schema"));
const resolver_1 = __importDefault(require("../../graphql/resolver/resolver"));
exports.default = express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    rootValue: resolver_1.default,
    graphiql: true,
    customFormatErrorFn(err) {
        if (!err.originalError) {
            return err;
        }
        const error = err.originalError;
        return { ...error, message: error.message };
    }
});
