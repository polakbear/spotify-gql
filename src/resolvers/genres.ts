import { authenticate, spotifyAPI } from '../helpers/auth';
import { Genre } from '../types';

export const genres = async (): Promise<Genre[]> => {
  authenticate();

  try {
    const result = await spotifyAPI.getAvailableGenreSeeds();
    if (result && result.body && result.body.genres.length > 0) {
      return result.body.genres.map((genre: string) => {
        return {
          name: genre ?? '',
        };
      });
    }
    return [];
  } catch (e) {
    console.error(e);
  }
};
