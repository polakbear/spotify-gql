import { authenticate, spotify } from '../helpers/auth';

export const genres = async (): Promise<string[]> => {
  await authenticate();
  try {
    return await spotify.getGenres();
  } catch (e) {
    console.error(e);
  }
};
