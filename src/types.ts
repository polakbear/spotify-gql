import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Image>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  release_date: Scalars['String'];
};

export type Artist = {
  __typename?: 'Artist';
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  href: Scalars['String'];
  id: Scalars['String'];
  images: Array<Maybe<Image>>;
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type ArtistImageMap = {
  __typename?: 'ArtistImageMap';
  id: Scalars['String'];
  img: Scalars['String'];
};

export type ArtistsResult = {
  __typename?: 'ArtistsResult';
  result?: Maybe<Array<Maybe<Artist>>>;
};

export type AudioFeatures = {
  analysis_url?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['Int']>;
  max__speechiness?: Maybe<Scalars['Float']>;
  max_acousticness?: Maybe<Scalars['Float']>;
  max_danceability?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  max_instrumentalness?: Maybe<Scalars['Float']>;
  max_liveness?: Maybe<Scalars['Float']>;
  max_loudness?: Maybe<Scalars['Float']>;
  max_popularity?: Maybe<Scalars['Int']>;
  max_valence?: Maybe<Scalars['Float']>;
  min_acousticness?: Maybe<Scalars['Float']>;
  min_danceability?: Maybe<Scalars['Float']>;
  min_energy?: Maybe<Scalars['Float']>;
  min_instrumentalness?: Maybe<Scalars['Float']>;
  min_liveness?: Maybe<Scalars['Float']>;
  min_loudness?: Maybe<Scalars['Float']>;
  min_popularity?: Maybe<Scalars['Int']>;
  min_speechiness?: Maybe<Scalars['Float']>;
  min_valence?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Int']>;
  tempo?: Maybe<Scalars['Int']>;
};

export type ExternalUrl = {
  __typename?: 'ExternalURL';
  spotify: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  artist: Artist;
  artists: Array<Artist>;
  genres: Array<Scalars['String']>;
  recommendations: Array<Maybe<Track>>;
};


export type QueryArtistArgs = {
  artistId: Scalars['String'];
};


export type QueryArtistsArgs = {
  artistIds: Array<Scalars['String']>;
};


export type QueryRecommendationsArgs = {
  audioFeatures?: Maybe<AudioFeatures>;
  seedGenres?: Maybe<Scalars['String']>;
};

export type RecommendationsResult = {
  __typename?: 'RecommendationsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type SimplifiedAlbum = {
  __typename?: 'SimplifiedAlbum';
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Image>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  release_date: Scalars['String'];
};

export type SimplifiedArtist = {
  __typename?: 'SimplifiedArtist';
  external_urls?: Maybe<Array<Maybe<ExternalUrl>>>;
  href: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type SongsResult = {
  __typename?: 'SongsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Track = {
  __typename?: 'Track';
  album: SimplifiedAlbum;
  artist_display: Scalars['String'];
  artists: Array<SimplifiedArtist>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_human?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Float']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  popularity?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistImageMap: ResolverTypeWrapper<ArtistImageMap>;
  ArtistsResult: ResolverTypeWrapper<ArtistsResult>;
  AudioFeatures: AudioFeatures;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ExternalURL: ResolverTypeWrapper<ExternalUrl>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  RecommendationsResult: ResolverTypeWrapper<RecommendationsResult>;
  SimplifiedAlbum: ResolverTypeWrapper<SimplifiedAlbum>;
  SimplifiedArtist: ResolverTypeWrapper<SimplifiedArtist>;
  SongsResult: ResolverTypeWrapper<SongsResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Track: ResolverTypeWrapper<Track>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  Artist: Artist;
  ArtistImageMap: ArtistImageMap;
  ArtistsResult: ArtistsResult;
  AudioFeatures: AudioFeatures;
  Boolean: Scalars['Boolean'];
  ExternalURL: ExternalUrl;
  Float: Scalars['Float'];
  Image: Image;
  Int: Scalars['Int'];
  Query: {};
  RecommendationsResult: RecommendationsResult;
  SimplifiedAlbum: SimplifiedAlbum;
  SimplifiedArtist: SimplifiedArtist;
  SongsResult: SongsResult;
  String: Scalars['String'];
  Track: Track;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['Image']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistImageMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistImageMap'] = ResolversParentTypes['ArtistImageMap']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistsResult'] = ResolversParentTypes['ArtistsResult']> = {
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalURL'] = ResolversParentTypes['ExternalURL']> = {
  spotify?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<QueryArtistArgs, 'artistId'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'artistIds'>>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  recommendations?: Resolver<Array<Maybe<ResolversTypes['Track']>>, ParentType, ContextType, RequireFields<QueryRecommendationsArgs, never>>;
};

export type RecommendationsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationsResult'] = ResolversParentTypes['RecommendationsResult']> = {
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimplifiedAlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimplifiedAlbum'] = ResolversParentTypes['SimplifiedAlbum']> = {
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedArtist']>>>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimplifiedArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimplifiedArtist'] = ResolversParentTypes['SimplifiedArtist']> = {
  external_urls?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExternalURL']>>>, ParentType, ContextType>;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SongsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SongsResult'] = ResolversParentTypes['SongsResult']> = {
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  album?: Resolver<ResolversTypes['SimplifiedAlbum'], ParentType, ContextType>;
  artist_display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['SimplifiedArtist']>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  disc_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_human?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  ArtistImageMap?: ArtistImageMapResolvers<ContextType>;
  ArtistsResult?: ArtistsResultResolvers<ContextType>;
  ExternalURL?: ExternalUrlResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecommendationsResult?: RecommendationsResultResolvers<ContextType>;
  SimplifiedAlbum?: SimplifiedAlbumResolvers<ContextType>;
  SimplifiedArtist?: SimplifiedArtistResolvers<ContextType>;
  SongsResult?: SongsResultResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
