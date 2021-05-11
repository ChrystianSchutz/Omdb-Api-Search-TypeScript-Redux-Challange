import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import MovieTile from "../MovieTitle";
import { fetchData } from "../../store/actions/itemActions";
import StatusHandler from "../StatusHandler";
import { MovieListArray, State, Movie } from "../../types/";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  height: 100%;
`;

type MovieListType = {
  movieList: MovieListArray;
  fetchData: Function;
  isLoading: Boolean;
  hasErrored: Boolean;
};

const MovieList = ({
  movieList,
  fetchData,
  isLoading,
  hasErrored,
}: MovieListType) => {
  const getMovieList = (query: string) => {
    fetchData(`http://www.omdbapi.com/?s=${query}&apikey=ddbbbf6d`);
  };

  return (
    <div>
      <div>
        <SearchContainer>
          <input
            name="search"
            placeholder="search"
            onChange={(e) => getMovieList(e.target.value)}
          />
        </SearchContainer>
        <StatusHandler
          json={movieList}
          isLoading={isLoading}
          error={hasErrored}
          listHandler
        />
      </div>
      <MovieContainer>
        {movieList?.Search &&
          movieList?.Search.map((movie: Movie) => {
            const key = movie.imdbID.toString();
            return <MovieTile movie={movie} key={key} />;
          })}
      </MovieContainer>
    </div>
  );
};
const mapStateToProps = (state: State) => {
  return {
    movieList: state.rootReducer.items,
    hasErrored: state.rootReducer.fetchHasErrored,
    isLoading: state.rootReducer.fetchLoading,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchData: (url: string) => dispatch(fetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
