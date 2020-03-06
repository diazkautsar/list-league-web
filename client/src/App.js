import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import './App.css';

import NavbarColorContext from './context/navbarColorContext'
import Leagues from './components/Leagues'
import ProfileTeam from './components/ProfileTeam'
import ListTeam from './components/ListTeam'
import Navbar from './components/Navbar'
import Favorite from './components/Favorite.jsx'

function App() {
  const [allTeam, setAllTeam] = useState('')

  return (
    <div className="App">
      <NavbarColorContext.Provider value={{color: 'black'}}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Leagues setAllTeam={setAllTeam} />
              </Route>
              <Route exact path='/favorite'>
                <Favorite />
              </Route>
              <Route exact path='/favorite/:idTeam' >
                <ProfileTeam />
              </Route>
              <Route exact path="/:idLeague">
                <ListTeam allTeam={allTeam} />
              </Route>
              <Route path={`/:idLeague/:idTeam`}>
                <ProfileTeam />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </NavbarColorContext.Provider>
    </div>
  );
}

export default App;