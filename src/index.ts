import { ApolloServer } from 'apollo-server-express';
import { initApp } from './app';
import { config } from './config/config';
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";

new ApolloServer({
  playground: true,
    typeDefs,
    resolvers,
  context: (expressContext) => ({
    accessToken: expressContext.req.header('accessToken'),
  }),
}).applyMiddleware({ app: initApp(config.port), cors: false });