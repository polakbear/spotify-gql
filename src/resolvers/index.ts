import { recommendations } from './recommendations';
import { Resolvers } from '../types';
import { genres } from './genres';
import { artists } from './artists';

export const resolvers: Resolvers = {
  Query: {
    artists,
    recommendations,
    genres,
  },
};
