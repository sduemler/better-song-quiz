import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import axios from 'axios';


const Playlists = ({ playlistId, token }) => {
    const [playlists, setPlaylists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [images, setImages] = useState([]);
    const [name, setName] = useState([]);
    let selected = false;
    let trackNumber = -1;
    let trackInfo = "";
  
    useEffect(() => {
      const fetchPlaylist = async () => {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setTracks(response.data.tracks.items);
          setImages(response.data.images);
          setName(response.data.name);
        } catch (error) {
          console.error('Error fetching playlist:', error);
        }
      };
      
      axios.get("/playlists.json").then((results) => {
        setPlaylists(results.data.playlists)
      })
  
      fetchPlaylist();
    }, [playlistId, token]);

    const handleClick = () => {
      selected = true;
      trackNumber = Math.floor(Math.random() * 100);
      trackInfo = tracks[trackNumber].track.name + " - " + tracks[trackNumber].track.artists[0].name;
      console.log(trackInfo);
    };

    return (
      <div>
        <h1>Spotify Playlist</h1>
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