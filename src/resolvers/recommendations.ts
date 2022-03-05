import { QueryRecommendationsArgs, Track } from '../types';
import { authenticate, spotify } from '../helpers/auth';
import { seeds } from '../config/config';
import { toMinutes } from '../helpers/time';
import { createArtistImageMap } from '../helpers/mapping';

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
  };

  try {
    const response = await spotify.getRecommendations(audioFeatures);
    if (response) {
      let artistIds: string[] = [];
      const tracksResult = response.tracks.map((track): Track => {
        artistIds.push(track.artists[0].id);
        return {
          id: track.id,
          duration_human: toMinutes(track.duration_ms),
          name: track.name,
          uri: track.uri,
          artists: track.artists,
          album: track.album,
          artist_display: '',
        };
      });

      try {
        const artistResponse = await spotify.getArtists(artistIds);
        const mapping = createArtistImageMap(artistResponse);

        return tracksResult.map((track) => {
          return {
            ...track,
            artist_display: mapping.get(track.artists[0].id),
          };
        });
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
