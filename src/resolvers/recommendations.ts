import {
  QueryRecommendationsArgs,
  RecommendationsResult,
  Resolvers,
  Track,
} from '../types';
import { authenticate, spotifyAPI } from '../helpers/auth';
import { seeds } from '../config/config';
import { toMinutes } from '../helpers/time';
import TrackObjectFull = SpotifyApi.TrackObjectFull;

export const recommendations: Resolvers['Query']['recommendations'] = (
  parent: any,
  args: QueryRecommendationsArgs,
) => {
  authenticate();

  const audioOptions = {
    seed_artists: seeds.artists,
    seed_genres: args.seedGenres ?? seeds.genres,
    seed_tracks: seeds.tracks,
    ...args.audioFeatures,

    // TODO: pre-defined seeds, implement custom later
    // seed_artists: args.seedArtists,
    // seed_genres: args.seedGenres,
    // seed_tracks: args.seedTracks,
  };

  return spotifyAPI
    .getRecommendations(audioOptions)
    .then((resp): RecommendationsResult => {
      return {
        tracks: resp.body.tracks.map((track: TrackObjectFull): Track => {
          const artists = track.artists.map((art) => {
            return art.name;
          });
          return {
            id: track.id,
            album: track.album,
            uri: track.uri,
            name: track.name,
            artists,
            duration_human: toMinutes(track.duration_ms),
            duration_ms: track.duration_ms,
            popularity: track.popularity,
            preview_url: track.preview_url,
            href: track.href,
          };
        }),
      };
    });
};
