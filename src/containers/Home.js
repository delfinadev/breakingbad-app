import { useState, useEffect } from "react";
import axios from "axios";
import './home.css'

export default function Home(params) {
  const [character, setCharacter] = useState([])

  // useEffect(()=> {
  //   let url = 'https://www.breakingbadapi.com/api/characters?name=Walter+White'
  //   axios.get(url).then((response) => {
  //     setCharacter(response);
  //     console.log(response)
  //   });
  // }, [])

  return (
    <>
      <div className="header-home">
        <h1>Busca tu personaje favorito</h1>
      </div>
      <div className="main-home">
        <form className="container-search">
          <input className="container-search-input" placeholder="Busca tu personaje favorito"></input>
        </form>
        <div className="container-episodios">
          <p>Visita todos los episodios</p>
        </div>
        <div className="container-personajes">
          <p>Visita todos los personajes</p>
        </div>
      </div>
    </>
  );
}
