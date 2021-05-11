import React from "react";
import { MovieListArray } from "../../types";
import styled from "styled-components";

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;
const Message = styled.p`
  font-weight: bold;
  text-align: center;
`;

type StatusHandlerType = {
  json: MovieListArray;
  isLoading: Boolean;
  error: Boolean;
  listHandler: Boolean;
};

const StatusHandler = ({
  json,
  isLoading,
  error,
  listHandler,
}: StatusHandlerType) => (
  <div>
    {json.Error && <ErrorText>Error: {json.Error}</ErrorText>}

    {!json.Error && !json.Search && listHandler && (
      <Message>The list of movies is empty</Message>
    )}

    {isLoading && <Message>Loading</Message>}

    {error && <p>Sorry! There was an network error</p>}
  </div>
);

export default StatusHandler;
