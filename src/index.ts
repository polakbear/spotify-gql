import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { initApp } from './app';
import { config } from './config/config';
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";

new ApolloServer({
  playground: true,
  introspection: true,
  schema: buildFederatedSchema([ {
    typeDefs,
    resolvers,
  }]),
  context: (expressContext) => ({
    accessToken: expressContext.req.header('accessToken'),
  }),
}).applyMiddleware({ app: initApp(Number(config.port)), cors: false });