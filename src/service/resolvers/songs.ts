import { QueryArtistsArgs, Resolvers, SongsResult, Track } from '../types';
import { authenticate } from '../../helpers/auth';

export const songs: Resolvers['Query']['songs'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  const spot = authenticate();
  return spot.searchTracks(args.searchString).then((resp) => {
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
