import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Movie from './Components/Movie/Movie';
import TvShow from './Components/TvShow/TvShow';
import Navbar from './Components/Navbar/Navbar';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Search from './Components/Search/Search';
// import Check from './Components/Check/check';
import history from './utils/history';

function App() {

  return (
    <Router history={history}>
      <div className="App" >
        <Navbar />
        <Switch>
          {/* <Route path='/' component={App} /> */}
          <React.Fragment>
            <Route path='/movie' component={Movie} exact />
            <Route path='/tv' component={TvShow} exact />
            <Route path='/movie/:title' component={MovieDetails} exact />
            <Route path='/tv/:title' component={MovieDetails} exact />
            <Route path='/search' component={Search} exact />
            <Route path='/search/:dataOf' component={Search} exact />
            {/* <Route path='/check' component={Check} /> */}
          </React.Fragment>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
