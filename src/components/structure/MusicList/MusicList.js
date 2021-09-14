import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import './MusicList.scss';
import { Api } from '../../../api/api';

const MusicList = () => {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    getMusic();
  }, [])
  

  const getMusic = async () => {
    const response = await Api.fetchGet();
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