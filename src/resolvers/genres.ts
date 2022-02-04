import { Genre, GenresResult, Resolvers } from '../types';
import { spotifyAPI, authenticate } from '../helpers/auth';

export const genres: Resolvers['Query']['genres'] = () => {
  authenticate();

  return spotifyAPI.getAvailableGenreSeeds().then((response): GenresResult => {
    return {
      result: response.body.genres.map((genre: string) => {
        return {
          name: genre,
        };
      }),
    };
  });
};
