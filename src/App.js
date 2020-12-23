import {useEffect} from 'react'
import {Home} from './components/Home'
import {Search} from './components/Search'
import {FetchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import 'whatwg-fetch';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();
  useEffect(() => {
    fetchContext.fetchDataAsync()
      return () => {}
  }, [])


  return (
    <FetchStore.Provider value={fetchContext} >
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/search/:query">
        <Search/>
      </Route>
    </Switch>
    </FetchStore.Provider>
  );
}

export default App;
