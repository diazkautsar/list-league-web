import React, { useState, useEffect } from 'react';
import './App.css';


import Leagues from './components/Leagues'
import ProfileTeam from './components/ProfileTeam'
import ListTeam from './components/ListTeam'

function App() {
  const [page, setPage] = useState('')
  const [allTeam, setAllTeam] = useState('')
  const [profileTeam, setProfileTeam] = useState('')

  let renderPage = ''
  if (page === 'profile') {
    renderPage = <ProfileTeam profileTeam={profileTeam}/>
  } else if (page === 'teams') {
    renderPage = <ListTeam allTeam={allTeam} setProfileTeam={setProfileTeam} setPage={setPage}/>
  } else {
    renderPage = <Leagues setPage={setPage} setAllTeam={setAllTeam}/>
  }

  return (
    <div className="App">
      {renderPage}
    </div>
  );
}

export default App;
