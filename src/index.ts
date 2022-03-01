import { ApolloServer } from 'apollo-server-express';
import { getConfig } from './config/config';
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";
import express from 'express';
import cors from 'cors'

const app = express();

// app.use(
//   session({ secret: 'kittycat', saveUninitialized: true, resave: true }),
// );

const { port } = getConfig();

app.use(cors());
app.listen({ port: port }, () => {
  console.log(`server is sniffing on port ${port}`);
});

new ApolloServer({
  playground: true,
  typeDefs,
  resolvers,
}).applyMiddleware({ app, cors: false });