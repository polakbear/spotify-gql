import {
  Artist,
  ArtistsResult,
  Genre,
  QueryArtistsArgs,
  Resolvers,
} from '../types';
import { authenticate } from '../helpers/auth';

export const artists: Resolvers['Query']['artists'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  const spot = authenticate();

  return spot.searchArtists(args.searchString).then((resp) => {
    const res: ArtistsResult = {
      artists: resp.body.artists.items.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          images: artist.images,
          genres: artist.genres.map((genre) => ({ name: genre } as Genre)),
        };
      }),
    };
    return res;
  });
};
