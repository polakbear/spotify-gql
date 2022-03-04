import { QueryRecommendationsArgs, Track } from '../types';
import { authenticate, spotify } from '../helpers/auth';
import { seeds } from '../config/config';
import { toMinutes } from '../helpers/time';

export const recommendations: (
  parent: any,
  args: QueryRecommendationsArgs,
) => Promise<Track[]> = async (parent: any, args: QueryRecommendationsArgs) => {
  await authenticate();

  const audioFeatures = {
    seed_artists: seeds.artists,
    seed_genres: [args.seedGenres] ?? seeds.genres,
    seed_tracks: seeds.tracks,
    ...args.audioFeatures,

    // TODO: pre-defined seeds, implement custom later
    // seed_artists: args.seedArtists,
    // seed_tracks: args.seedTracks,
  };

  try {
    const response = await spotify.getRecommendations(audioFeatures);
    if (response) {
      return response.tracks.map((track): Track => {
        return {
          id: track.id,
          album: track.album,
          uri: track.uri,
          name: track.name,
          artists: track.artists,
          duration_human: toMinutes(track.duration_ms),
          duration_ms: track.duration_ms,
          popularity: track.popularity,
          href: track.href,
        };
      });
    }
  } catch (e) {
    console.error(e);
  }
};
