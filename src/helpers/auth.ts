import fetch from 'node-fetch';
import { config } from '../config/config';
import { Spotify } from 'spotify-ts/';

export const spotify = new Spotify('');

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: `Basic ${Buffer.from(
    `${config.clientId}:${config.clientSecret}`,
  ).toString('base64')}`,
};

let token = '';

const fetchToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers,
      body: 'grant_type=client_credentials',
    });

    if (response) {
      const parsed = JSON.parse(await response.text());
      token = parsed.access_token;
    }
  } catch (e) {}

  // .then((resp) => resp.text())
  // .then((resp) => {
  //   const response = JSON.parse(resp);
  //   const expires = new Date();
  //   expires.setHours(expires.getHours() + 1);
  //   token = response.access_token;
  // });

  return token;
};

export const authenticate = async () => {
  const token = await fetchToken();
  spotify.setToken(token);
};
