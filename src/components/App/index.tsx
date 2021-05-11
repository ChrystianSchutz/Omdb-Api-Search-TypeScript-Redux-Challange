import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

const Title = styled.p`
  font-size: 1em;
  margin: 0.67em 0;
  text-align: center;
`;

const App = () => (
  <>
    <Title>Omdb Api Search - Chrystian Schutz</Title>
    <Route exact path="/" component={MovieList} />
  </>
);

export default App;
