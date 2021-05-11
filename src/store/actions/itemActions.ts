import { MovieListArray } from "../../types/";

export function fetchHasErrored(bool: boolean) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool,
  };
}

export function fetchLoading(bool: boolean) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool,
  };
}

export function fetchSuccess(items: MovieListArray) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items,
  };
}

export function fetchData(url: string) {
  return (dispatch: Function) => {
    dispatch(fetchLoading(true));

    fetch(url)
      .then((a) => a)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(fetchLoading(false));
        return response.json();
      })
      .then((dara) => dara)
      .then((items) => dispatch(fetchSuccess(items)))
      .catch((error) => dispatch(fetchHasErrored(true)));
  };
}
