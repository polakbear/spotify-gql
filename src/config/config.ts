import dotenv from 'dotenv';

dotenv.config();

export const config = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  port: Number(process.env.PORT) || 5000,
};

export const seeds = {
  artists: '4NHQUGzhtTLFvgF5SZesLK',
  genres: 'country',
  tracks: '0c6xIDDpzE81m2q797ordA',
};
