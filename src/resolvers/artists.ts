import { QueryArtistArgs, Resolvers } from '../types';
import { authenticate, spotify } from '../helpers/auth';

export const artist: Resolvers['Query']['artist'] = async (
  parent: any,
  args: QueryArtistArgs,
) => {
  await authenticate();

  try {
    const response = await spotify.getArtist(args.artistId);
    if (response) {
      return response;
    }
  } catch (e) {
    console.error(e);
  }
};
