/// <reference types="node" />

declare module 'tmdb' {
  import ExtendableError from 'es6-error'

  export interface ErrorResponseType {
    statusCode: number
    statusMessage: string
  }

  export type ImagePathType = string | null

  export interface MovieBackdropImageType {
    aspectRatio: number
    filePath: string
    height: number
    iso6391: string | null
    voteAverage: number
    voteCount: number
    width: number
  }

  export interface MovieCastCreditType {
    castId: number
    character: string
    creditId: string
    gender: number | null
    id: number
    name: string
    order: number
    profilePath: ImagePathType
  }

  export interface MovieCrewCreditType {
    creditId: string
    department: string
    gender: number | null
    id: number
    job: string
    name: string
    profilePath: ImagePathType
  }

  export interface MoviePosterImageType {
    aspectRation: number
    filePath: string
    height: number
    iso6391: string | null
    voteAverage: number
    voteCount: number
    width: number
  }

  export interface MovieType {
    adult: boolean
    backdropPath: ImagePathType
    belongsToCollection: object | null
    budget: number
    genres: ReadonlyArray<{
      id: number
      name: string
    }>
    homepage: string | null
    id: number
    imdbId: string | null
    originalLanguage: string
    originalTitle: string
    overview: string | null
    popularity: number
    posterPath: ImagePathType
    productionCompanies: ReadonlyArray<{
      id: number
      name: string
    }>
    productionCountries: ReadonlyArray<{ iso31661: string; name: string }>
    releaseDate: string
    revenue: number
    runtime: number | null
    spokenLanguages: ReadonlyArray<{ iso6391: string; name: string }>
    status: string
    tagline: string | null
    title: string
    video: boolean
    voteAverage: number
    voteCount: number
  }

  export interface MovieVideoType {
    id: string
    iso31661: string
    iso6391: string
    key: string
    name: string
    site: string
    size: number
    type: string
  }

  export interface PersonType {
    adult: boolean
    alsoKnownAs: ReadonlyArray<object>
    biography: string
    birthday: string | null
    deathday: string | null
    gender: number
    homepage: string | null
    id: number
    imdbId: string
    name: string
    placeOfBirth: string | null
    popularity: number
    profilePath: ImagePathType
  }

  export class TmdbError extends ExtendableError {}

  export class Unimplemented extends TmdbError {
    constructor()
  }

  export class UnexpectedResponseError extends TmdbError {
    constructor()
  }

  export class NotFoundError extends TmdbError {
    constructor()
  }

  export class RemoteError extends TmdbError {
    code: number
    message: string

    constructor(message: string, code: number)
  }

  interface QueryType {
    [key: string]: string | number | null
  }

  export class Tmdb {
    apiKey: string
    language: string

    constructor(apiKey: string, language: string = 'en')
    async get(resource: string, parameters: QueryType = {}): object
    async getMovie(movieId: number): Promise<MovieType>
    async getMovieBackdropImages(
      movieId: number,
      includeImageLanguage: ReadOnlyArray<string>,
    ): Promise<ReadOnlyArray<MovieBackdropImageType>>
    async getMovieCastCredits(
      movieId: number,
    ): Promise<ReadOnlyArray<MovieCastCreditType>>
    async getMovieCrewCredits(
      movieId: number,
    ): Promise<ReadOnlyArray<MovieCrewCreditType>>
    async getMoviePosterImages(
      movieId: number,
      includeImageLanguage: ReadOnlyArray<string>,
    ): Promise<ReadOnlyArray<MoviePosterImageType>>
    async getMovieVideos(
      movieId: number,
    ): Promise<ReadOnlyArray<MovieVideoType>>
    async getPerson(personId: number): Promise<PersonType>
    async findId(
      resourceType: 'movie' | 'person',
      externalSource: 'imdb',
      externalId: string,
    ): Promise<number>
  }
}
