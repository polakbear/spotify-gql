import { QueryAudioFeaturesArgs, Resolvers } from '../types';
import { authenticate, spotify } from '../helpers/auth';

export const audioFeatures: Resolvers['Query']['audioFeatures'] = async (
  parent: any,
  args: QueryAudioFeaturesArgs,
) => {
  await authenticate();

  try {
    const response = await spotify.getAudioFeatures(args.id);
    if (response) {
      return {
        ...response,
        acousticness: parseFloat(response.acousticness),
        danceability: parseFloat(response.danceability),
        energy: parseFloat(response.energy),
        instrumentalness: parseFloat(response.instrumentalness),
        liveness: parseFloat(response.liveness),
        loudness: parseFloat(response.liveness),
        speechiness: parseFloat(response.speechiness),
        tempo: parseFloat(response.tempo),
        valence: parseFloat(response.valence),
      };
    }
  } catch (e) {
    console.error(e);
  }
};
