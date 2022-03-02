import { QueryArtistsArgs, Resolvers, SongsResult, Track } from '../types';
import { authenticate, spotifyAPI } from '../helpers/auth';

export const songs: Resolvers['Query']['songs'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  authenticate();
  return spotifyAPI.searchTracks(args.searchString).then((resp) => {
    const res: SongsResult = {
      tracks: resp.body.tracks.items.map((track) => {
        const artists = track.artists.map((art) => {
          return art.name;
        });

        return {
          id: track.id,
          name: track.name,
          artists,
          album: track.album,
        } as Track;
      }),
    };
    return res;
  });
};
