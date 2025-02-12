import React, { useState, useEffect } from 'react';
import WebPlayback from './Webplayback';
import Login from './Login';
import Header from './Header';
import Playlists from './Playlists';
import './App.css';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return <>
    <div>
      <Header />
      {token === '' ? <Login /> : <Playlists token={token} />}
    </div>
  
  </>;
}

export default App;
