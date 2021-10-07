import fetch from 'node-fetch';
import { config } from '../config/config';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import SpotifyWebApi from "spotify-web-api-node";

const db = new JsonDB(new Config('../../tokendb', true, false, '/'));

const fetchToken = (): string => {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${config.clientId}:${config.clientSecret}`,
            ).toString('base64')}`,
        },
        body: 'grant_type=client_credentials',
    })
        .then((resp) => resp.text())
        .then((resp) => {
            const response = JSON.parse(resp);
            const expires = new Date();
            expires.setHours(expires.getHours() + 1);
            db.push('token', response.access_token);
            return response.access_token;
            // db.push('expires', expires);
        });

    return db.getData('token');
};

export const authenticate = () => {
    const token = fetchToken();
    const spot = new SpotifyWebApi();
    spot.setAccessToken(token);

    return spot;
}
