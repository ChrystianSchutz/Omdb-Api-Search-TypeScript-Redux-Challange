import React from "react";
import styled from "styled-components";
import moviePlaceholder from "./moviePlaceholder.svg";
import { Movie } from "../../types/";

const MovieContainer = styled.div`
  text-align: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: #f3f3f3;
  max-width: 500px;
`;
const YearText = styled.p`
  text-align: center;
`;
const TitleText = styled.p`
  text-decoration: none;
  color: black;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;
type MovieTitleType = {
  movie: Movie;
};

const MovieTile = ({ movie }: MovieTitleType) => (
  <MovieContainer>
    <TitleText>{movie.Title}</TitleText>
    {movie.Poster === "N/A" ? (
      <img alt="placeholder" src={moviePlaceholder} />
    ) : (
      <img alt="movie poster" src={movie.Poster} />
    )}

    <YearText>Year: {movie.Year}</YearText>
  </MovieContainer>
);

export default MovieTile;
