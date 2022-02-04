import {
  Artist,
  ArtistsResult,
  Genre,
  QueryArtistsArgs,
  Resolvers,
} from '../types';
import { spotifyAPI, authenticate } from '../helpers/auth';

export const artists: Resolvers['Query']['artists'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  authenticate();

  return spotifyAPI.searchArtists(args.searchString).then((resp) => {
    const res: ArtistsResult = {
      result: resp.body.artists.items.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          images: artist.images,
          genres: artist.genres.map((genre) => ({ name: genre })),
        };
      }),
    };
    return res;
  });
};
