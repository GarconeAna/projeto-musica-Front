import React, { useEffect, useState } from 'react';
import './MusicView.scss';
import { Api } from '../../api/api';
import { Link } from 'react-router-dom';

const MusicView = (props) => {
  const [musica, setMusica] = useState({});

  useEffect(() => {
    getMusicById();
  });

  const id = props.match.params.id;

  const getMusicById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();

    setMusica(data);
  }
  return (
    <div>
      <h1>Visualização da musica por id</h1>
      <img src={ musica.capa } alt={ musica.nome }/>
      <p>Nome: { musica.nome }</p>
      <p>Autor: { musica.autor }</p>
      {/* <p>Letra: { musica.letra }</p> */}
      <p>Duração: { musica.duracao }</p>
      <p>Data da Criação: { musica.dataCriacao }</p>
      <Link to={`/edit/${musica._id}`}>
        <button>Editar</button>
      </Link>
      <button>Apagar</button>
    </div>
  );
}

export default MusicView;