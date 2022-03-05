import { Artist } from '../types';

export const createArtistImageMap = (artistResponse: Artist[]) => {
  const mapping: Map<string, string> = new Map();
  if (artistResponse) {
    artistResponse.forEach((artist) => {
      mapping.set(artist.id, artist.images[0].url);
    });
  }
  return mapping;
};
