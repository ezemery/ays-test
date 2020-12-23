import {Home} from './components/Home'
import {Search} from './components/Search'
import {FetchStore} from './Context/store';
import {SearchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import {useSearch} from "./Hooks/search.hook";
import 'whatwg-fetch';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();
  const SearchContext = useSearch();

  const fetchData = () =>{
    fetchContext.fetchDataAsync()
  }
 
  const searchData = (query) =>{
    SearchContext.searchDataAsync(query)
  }


  return (
    <FetchStore.Provider value={fetchContext}>
      <SearchStore.Provider value={SearchContext} >
        <Switch>
          <Route exact path="/">
            <Home  fetchData={fetchData}/>
          </Route>
          <Route path="/search/:query">
            <Search searchData={searchData}/>
          </Route>
        </Switch>
    </SearchStore.Provider>
    </FetchStore.Provider>
  );
}

export default App;
