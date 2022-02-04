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
  id?: Maybe<Scalars['String']>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Artist = {
  __typename?: 'Artist';
  id?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  genres?: Maybe<Array<Maybe<Genre>>>;
};

export type ArtistsResult = {
  __typename?: 'ArtistsResult';
  result?: Maybe<Array<Maybe<Artist>>>;
};

export type AudioFeatures = {
  id?: Maybe<Scalars['String']>;
  min_acousticness?: Maybe<Scalars['Float']>;
  max_acousticness?: Maybe<Scalars['Float']>;
  min_danceability?: Maybe<Scalars['Float']>;
  max_danceability?: Maybe<Scalars['Float']>;
  min_energy?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  min_instrumentalness?: Maybe<Scalars['Float']>;
  max_instrumentalness?: Maybe<Scalars['Float']>;
  min_popularity?: Maybe<Scalars['Int']>;
  max_popularity?: Maybe<Scalars['Int']>;
  min_liveness?: Maybe<Scalars['Float']>;
  max_liveness?: Maybe<Scalars['Float']>;
  min_loudness?: Maybe<Scalars['Float']>;
  max_loudness?: Maybe<Scalars['Float']>;
  min_speechiness?: Maybe<Scalars['Float']>;
  max__speechiness?: Maybe<Scalars['Float']>;
  min_valence?: Maybe<Scalars['Float']>;
  max_valence?: Maybe<Scalars['Float']>;
  analysis_url?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  tempo?: Maybe<Scalars['Int']>;
};

export type Genre = {
  __typename?: 'Genre';
  name?: Maybe<Scalars['String']>;
};

export type GenresResult = {
  __typename?: 'GenresResult';
  result?: Maybe<Array<Maybe<Genre>>>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  recommendations?: Maybe<RecommendationsResult>;
  songs?: Maybe<SongsResult>;
  artists?: Maybe<ArtistsResult>;
  genres?: Maybe<GenresResult>;
};


export type QueryRecommendationsArgs = {
  audioFeatures?: Maybe<AudioFeatures>;
};


export type QuerySongsArgs = {
  searchString: Scalars['String'];
};


export type QueryArtistsArgs = {
  searchString: Scalars['String'];
};

export type RecommendationsResult = {
  __typename?: 'RecommendationsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type SongsResult = {
  __typename?: 'SongsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Track = {
  __typename?: 'Track';
  id?: Maybe<Scalars['String']>;
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_ms?: Maybe<Scalars['Float']>;
  duration_human?: Maybe<Scalars['String']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  track_number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
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
  String: ResolverTypeWrapper<Scalars['String']>;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistsResult: ResolverTypeWrapper<ArtistsResult>;
  AudioFeatures: AudioFeatures;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Genre: ResolverTypeWrapper<Genre>;
  GenresResult: ResolverTypeWrapper<GenresResult>;
  Image: ResolverTypeWrapper<Image>;
  Query: ResolverTypeWrapper<{}>;
  RecommendationsResult: ResolverTypeWrapper<RecommendationsResult>;
  SongsResult: ResolverTypeWrapper<SongsResult>;
  Track: ResolverTypeWrapper<Track>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  String: Scalars['String'];
  Artist: Artist;
  ArtistsResult: ArtistsResult;
  AudioFeatures: AudioFeatures;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Genre: Genre;
  GenresResult: GenresResult;
  Image: Image;
  Query: {};
  RecommendationsResult: RecommendationsResult;
  SongsResult: SongsResult;
  Track: Track;
  Boolean: Scalars['Boolean'];
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistsResult'] = ResolversParentTypes['ArtistsResult']> = {
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenresResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenresResult'] = ResolversParentTypes['GenresResult']> = {
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  recommendations?: Resolver<Maybe<ResolversTypes['RecommendationsResult']>, ParentType, ContextType, RequireFields<QueryRecommendationsArgs, never>>;
  songs?: Resolver<Maybe<ResolversTypes['SongsResult']>, ParentType, ContextType, RequireFields<QuerySongsArgs, 'searchString'>>;
  artists?: Resolver<Maybe<ResolversTypes['ArtistsResult']>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'searchString'>>;
  genres?: Resolver<Maybe<ResolversTypes['GenresResult']>, ParentType, ContextType>;
};

export type RecommendationsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationsResult'] = ResolversParentTypes['RecommendationsResult']> = {
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SongsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SongsResult'] = ResolversParentTypes['SongsResult']> = {
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  disc_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_human?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  track_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  ArtistsResult?: ArtistsResultResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  GenresResult?: GenresResultResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecommendationsResult?: RecommendationsResultResolvers<ContextType>;
  SongsResult?: SongsResultResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
