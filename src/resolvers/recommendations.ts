import {
  QueryRecommendationsArgs,
  RecommendationsResult,
  Resolvers,
} from '../types';
import { authenticate } from '../helpers/auth';
import { seeds } from '../config/config';
import { toMinutes } from '../helpers/time';

export const recommendations: Resolvers['Query']['recommendations'] = (
  parent: any,
  args: QueryRecommendationsArgs,
) => {
  const spot = authenticate();

  const audioOptions = {
    seed_artists: seeds.artists,
    seed_genres: seeds.genres,
    seed_tracks: seeds.tracks,
    ...args.audioFeatures,

    // TODO: MVP has pre-defined seeds, implement custom later
    // seed_artists: args.seedArtists,
    // seed_genres: args.seedGenres,
    // seed_tracks: args.seedTracks,
  };

  return spot.getRecommendations(audioOptions).then((resp) => {
    const res: RecommendationsResult = {
      tracks: resp.body.tracks.map((track) => {
        return {
          id: track.id,
          name: track.name,
          artists: track.artists,
          duration_human: toMinutes(track.duration_ms),
        };
      }),
    };
    return res;
  });
};
