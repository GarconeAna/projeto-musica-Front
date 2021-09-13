import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import './MusicList.scss';

const MusicList = () => {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    getMusic();
  }, [])
  
  const url = 'http://localhost:3000/musicas';
  const getMusic = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMusicas(data);
  }
  return (
    <div>
      {musicas.map((musica, index) => (
        <MusicCard musica={musica} key={musica._id} />
      ))}
    </div>
  );
}

export default MusicList;