import dotenv from 'dotenv';

const {parsed } = dotenv.config();

export const getConfig = () => {
  return {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT || 5000,  
  }
};

export const seeds = {
  artists: ['4NHQUGzhtTLFvgF5SZesLK'],
  genres: [''],
  tracks: ['0c6xIDDpzE81m2q797ordA'],
}