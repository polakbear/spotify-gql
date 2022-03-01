import fetch from 'node-fetch';
import {getConfig} from '../config/config';
import SpotifyWebApi from "spotify-web-api-node";

export const spotifyAPI = new SpotifyWebApi();
const { clientId, clientSecret } = getConfig();

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`,
    ).toString('base64')}`,
}

let token = ''

const fetchToken = (): string => {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers,
        body: 'grant_type=client_credentials',
    })
        .then((resp) => resp.text())
        .then((resp) => {
            const response = JSON.parse(resp);
            const expires = new Date();
            expires.setHours(expires.getHours() + 1);
            token =  response.access_token;
        });

    return token;
};

export const authenticate = () => {
    const token = fetchToken();
    spotifyAPI.setAccessToken(token);
}
