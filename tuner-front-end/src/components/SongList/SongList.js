import axios from "axios";
import { useState, useEffect } from "react";
import Song from "../Song/Song";
import "./SongList.css";
const API = process.env.REACT_APP_API_URL;

function SongList() {
  const [songs, setSongs] = useState([]);
  console.log(API);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await axios.get(API + "/songs");
        setSongs(songsData.data);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, []);

  return (
    <>
<div className="###">
      <section>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>


      {/* <div className="songlist">
        <div>Song</div>
        <div>Artist</div>
        <div>Album</div>
       
        <div>Detail</div>
      </div>
      <div className="song-artist">
        {songs.map((song) => (
          <Song key={song.id} song={song}/>
        ))}
      </div> */}
    </>
  );
}

export default SongList;