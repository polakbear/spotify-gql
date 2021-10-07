import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { initApp } from './app';
import { config } from './config/config';
import { spotify } from './service';

new ApolloServer({
  playground: true,
  schema: buildFederatedSchema([spotify as any]),
  context: (expressContext) => ({
    accessToken: expressContext.req.header('accessToken'),
  }),
}).applyMiddleware({ app: initApp(config.port), cors: false });
