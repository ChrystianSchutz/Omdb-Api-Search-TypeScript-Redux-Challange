export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MovieListArray = {
  Search: Array<Movie>;
  Error?: String;
};

export type State = {
  rootReducer: {
    items: MovieListArray;
    fetchHasErrored: Boolean;
    fetchLoading: Boolean;
  };
};
