import {createContext} from 'react';
import FetchState from "./states/fetch";
import SearchState from "./states/search";
export const FetchStore = createContext(FetchState);
export const SearchStore = createContext(SearchState);