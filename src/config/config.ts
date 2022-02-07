import dotenv from 'dotenv';

dotenv.config();

export const config = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  port: 4000,
};

export const seeds = {
  artists: [''],
  genres: [''],
  tracks: [''],
}