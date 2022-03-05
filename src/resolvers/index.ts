import { recommendations } from './recommendations';
import { Resolvers } from '../types';
import { genres } from './genres';
import { artists } from './artists';
import { audioFeatures } from './audio-features';

export const resolvers: Resolvers = {
  Query: {
    artists,
    recommendations,
    genres,
    audioFeatures,
  },
};
