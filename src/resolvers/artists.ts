import { QueryArtistsArgs, Resolvers } from '../types';
import { authenticate, spotify } from '../helpers/auth';

export const artists: Resolvers['Query']['artists'] = async (
  parent: any,
  args: QueryArtistsArgs,
) => {
  await authenticate();

  try {
    const response = await spotify.getArtists(args.artistIds);
    if (response) {
      return response;
    }
  } catch (e) {
    console.error(e);
  }
};
