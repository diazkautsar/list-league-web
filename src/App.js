import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import './App.css';

import Leagues from './components/Leagues'
import ProfileTeam from './components/ProfileTeam'
import ListTeam from './components/ListTeam'
import Navbar from './components/Navbar'
// import Favorite from './components/Favorite.jsx'

function App() {
  const [allTeam, setAllTeam] = useState('')

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Leagues setAllTeam={setAllTeam} />
            </Route>
            <Route exact path="/:idLeague">
              <ListTeam allTeam={allTeam} />
            </Route>
            <Route path={`/:idLeague/:idTeam`}>
              <ProfileTeam />
            </Route>
            {/* <Route exact path='/favorite'>
              <Favorite />
            </Route> */}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;