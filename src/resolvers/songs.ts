import { QueryArtistsArgs, Resolvers, SongsResult, Track } from '../types';
import { spotifyAPI, authenticate } from '../helpers/auth';

export const songs: Resolvers['Query']['songs'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  authenticate();
  return spotifyAPI.searchTracks(args.searchString).then((resp) => {
    const res: SongsResult = {
      tracks: resp.body.tracks.items.map((track) => {
        return {
          id: track.id,
          name: track.name,
          artists: track.artists,
          album: track.album,
        } as Track;
      }),
    };
    return res;
  });
};
