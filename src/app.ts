import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import { getResolvers, getTypeDefs } from './models';

// Put together a schema
  const schema = makeExecutableSchema({
    typeDefs: getTypeDefs(),
    resolvers: getResolvers()
  });
  
  // Initialize the app
  const app = express();
  
  // The GraphQL endpoint
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  
  // GraphiQL, a visual editor for queries
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  
  // Start the server
  app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
  });
