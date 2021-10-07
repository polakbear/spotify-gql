import express from 'express';
import { config } from './config/config';
import session from 'express-session';
import cors from 'cors';

export const initApp = (port: number) => {
  const app = express();

  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  app.use(
    session({ secret: 'kittycat', saveUninitialized: true, resave: true }),
  );
  app.use(cors(corsOptions));
  app.listen({ port: config.port }, () => {
    console.log(`server is sniffing on port ${port}`);
  });
  return app;
};
