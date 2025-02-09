import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import axios from 'axios';


const Playlists = ({ token }) => {
    const [playlists, setPlaylists] = useState([]);
  
    useEffect(() => {
      axios.get("/playlists.json").then((results) => {
        setPlaylists(results.data.playlists)
      })  
    }, []);

    return (
      <div>
        <h1>Spotify Playlists</h1>
        <div>
          {(playlists.decades === undefined) ? "Loading..." : 
                playlists.decades.map(decade => (
                  <div key={decade.id}>
                    <PlaylistCard token={token} id={decade.id} name={decade.name} image={decade.image} />
                  </div>
                ))
          }
        </div>
      </div>
    );
  };
  
export default Playlists;