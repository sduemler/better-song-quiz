import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const PlaylistCard = (props) => {
    const [tracks, setTracks] = useState([]);
    const [trackNumber, setTrackNumber] = useState(-1)
    let trackInfo = "";

    const fetchPlaylist = async () => {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${props.id}`, {
            headers: {
              Authorization: `Bearer ${props.token}`
            }
          });
          setTracks(response.data.tracks.items);
          setTrackNumber(Math.floor(Math.random() * 100));
        } catch (error) {
          console.error('Error fetching playlist:', error);
        }
      };

    const handleClick = () => {
        (tracks[0] === undefined) ? fetchPlaylist() : console.log("Already fetched playlist");
        setTrackNumber(Math.floor(Math.random() * 100));
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} 
            onClick={handleClick}
            style={{ width: "300px", height: "300px"}}/>
            {(tracks[trackNumber] === undefined) ? <p>Track loading...</p> : <p>{tracks[trackNumber].track.name}</p>}
        </div>
    )
};

export default PlaylistCard;