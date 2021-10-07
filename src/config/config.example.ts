import dotenv from 'dotenv';

dotenv.config();

export const config = {
  clientId: '',
  clientSecret: '',
  port: 4000,
  baseUrl: 'http://localhost',
  callbackUrl: `/auth/spotify/callback`,
};
