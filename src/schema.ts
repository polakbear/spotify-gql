import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Image {
    height: Int
    url: String
    width: Int
  }

  type Track {
    id: String
    album: SimplifiedAlbum!
    artists: [SimplifiedArtist!]!
    available_markets: [String]
    disc_number: Int
    duration_ms: Float
    duration_human: String
    explicit: Boolean
    href: String
    name: String!
    popularity: Int
    uri: String!
    artist_display: String!
  }

  type Artist {
    id: String!
    href: String!
    name: String!
    uri: String!
    images: [Image]!
    genres: [String]
  }

  type ExternalURL {
    spotify: String!
  }

  type SimplifiedArtist {
    external_urls: [ExternalURL]
    id: String!
    href: String!
    name: String!
    uri: String!
  }

  type SimplifiedAlbum {
    id: String!
    artists: [SimplifiedArtist]
    available_markets: [String]
    href: String
    label: String
    name: String!
    images: [Image!]!
    release_date: String!
  }

  type Album {
    id: String!
    artists: [Artist]
    available_markets: [String]
    href: String
    label: String
    name: String!
    images: [Image!]!
    release_date: String!
  }

  type RecommendationsResult {
    tracks: [Track]
  }

  type SongsResult {
    tracks: [Track]
  }

  type ArtistsResult {
    result: [Artist]
  }

  input AudioOptions {
    id: String

    min_acousticness: Float
    max_acousticness: Float
    min_danceability: Float
    max_danceability: Float
    min_energy: Float
    max_energy: Float
    min_instrumentalness: Float
    max_instrumentalness: Float
    min_popularity: Int
    max_popularity: Int
    min_liveness: Float
    max_liveness: Float
    min_loudness: Float
    max_loudness: Float
    min_speechiness: Float
    max__speechiness: Float
    min_valence: Float
    max_valence: Float

    analysis_url: String
    duration_ms: Int

    key: Int
    mode: Int
    tempo: Int
  }

  type ArtistImageMap {
    id: String!
    img: String!
  }

  type AudioFeatures {
    danceability: Float!
    energy: Float!
    key: Int!
    loudness: Float!
    mode: Int!
    speechiness: Float!
    acousticness: Float!
    instrumentalness: Float!
    liveness: Float!
    valence: Float!
    tempo: Float!
    id: String!
    uri: String!
    track_href: String!
    duration_ms: Int!
  }

  type Query {
    recommendations(audioOptions: AudioOptions, seedGenres: String): [Track]!
    artist(artistId: String!): Artist!
    artists(artistIds: [String!]!): [Artist!]!
    genres: [String!]!
    audioFeatures(id: String!): AudioFeatures!
  }
`;
