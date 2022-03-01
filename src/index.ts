import { ApolloServer } from 'apollo-server-express';
import { getConfig } from './config/config';
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";
import express from 'express';
import cors from 'cors'



async function startApollo() {
  const app = express();
  const { port } = getConfig();  
  const server = new ApolloServer({
    playground: true,
    typeDefs,
    resolvers,
  });
  
  await server.start();
  server.applyMiddleware({ app });
  
  app.listen({ port: port }, () => {
    console.log(`server is sniffing on port ${port}`);
  });
}

startApollo();