import { recommendations } from './recommendations';
import { Resolvers } from '../types';
import { genres } from './genres';
import { artist } from './artists';

export const resolvers: Resolvers = {
  Query: {
    artist,
    recommendations,
    genres,
  },
};
