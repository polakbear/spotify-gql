import { recommendations } from './recommendations';
import { Resolvers } from '../types';
import { genres } from './genres';
import { artists } from './artists';
import { songs } from './songs';

export const resolvers: Resolvers = {
  Query: {
    recommendations,
    genres,
    artists,
    songs,
  },
};
