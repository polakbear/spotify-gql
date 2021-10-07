import { Genre, GenresResult, Resolvers } from '../types';
import { authenticate } from '../../helpers/auth';

export const genres: Resolvers['Query']['genres'] = () => {
  const spot = authenticate();

  return spot.getAvailableGenreSeeds().then((resp) => {
    const res: GenresResult = {
      genres: resp.body.genres.map((genre: string) => {
        return {
          name: genre,
        };
      }),
    };
    return res;
  });
};
