import { ApolloServer } from 'apollo-server-express';
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";
import { createServer } from "http";
import express from "express";
// import { prisma } from "./prisma/client";

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, path: `/api` })

  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on 4000${apolloServer.graphqlPath}`)
  )
}

startServer()