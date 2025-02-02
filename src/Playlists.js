import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Playlists = ({ playlistId, token }) => {
    const [tracks, setTracks] = useState([]);
    const [images, setImages] = useState([]);
    const [name, setName] = useState([]);
  
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
  
      fetchPlaylist();
    }, [playlistId, token]);
  
    return (
      <div>
        <h1>Spotify Playlist</h1>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tracks.map((track, index) => (
            <div key={index} style={{ margin: '10px' }}>
              <img
                src={track.track.album.images[0]?.url}
                alt={track.track.name}
                style={{ width: '150px', height: '150px' }}
              />
              <p>{track.track.name}</p>
            </div>
          ))}
        </div> */}
        <div>
            <p>{name}</p>
            <img 
            src={images[1]?.url} 
            style={{ width: '150px', height: '150px'}}
            />
        </div>
      </div>
    );
  };
  
export default Playlists;