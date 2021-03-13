import { graphqlHTTP } from "express-graphql";
import { GraphQLError } from "graphql";

import schema from "../../graphql/schema/schema";
import resolver from "../../graphql/resolver/resolver";

export default graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true,

  customFormatErrorFn(err: GraphQLError) {
    if (!err.originalError) {
      return err;
    }

    const error: Error = err.originalError;

    return { ...error, message: error.message };
  }
});
