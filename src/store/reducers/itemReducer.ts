import { MovieListArray } from "../../types/";

interface ActionType {
  type: string
}

interface ErrorActionType extends ActionType {
  hasErrored: Boolean
}
interface LoadingActionType extends ActionType {
  isLoading: Boolean
}
interface ItemActionType extends ActionType {
  items: MovieListArray
}

export function fetchHasErrored(state = false, action: ErrorActionType) {
    switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
        return action.hasErrored;
  
      default:
        return state;
    }
  }
  
  export function fetchLoading(state = false, action: LoadingActionType) {
    switch (action.type) {
      case 'ITEMS_IS_LOADING':
        return action.isLoading;
  
      default:
        return state;
    }
  }
  
  export function items(state = [], action: ItemActionType) {
    switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
        return action.items;
  
      default:
        return state;
    }
  }
  