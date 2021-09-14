import React from 'react';
import { Link } from 'react-router-dom';

const MusicCard = (props) => {
  const musica = props.musica

  return (
    <div>
      <Link to={`/view/${musica._id}`}>
        <h1>Card de cada musica</h1>
        <img src={musica.capa} alt={musica.nome}/>
        <p>{musica.nome}</p>
        <span>{musica.genero}</span>
      </Link>
    </div>
  );
} 

export default MusicCard;