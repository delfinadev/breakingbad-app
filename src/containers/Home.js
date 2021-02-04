import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import CharactersCards from '../components/CharactersCards'

export default function Home(params) {
  const [characters, setCharacters] = useState([]);
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/characters?name=${personaje}`;
    axios.get(url).then((response) => {
      setCharacters(response);
    });
  }, [personaje]);

  function getValue(e) {
    setPersonaje(e.target.value);
  }
  
console.log(characters.data)
  return (
    <>
      <div className="header-home">
        <h1>Busca tu personaje favorito</h1>
      </div>
      <div className="main-home">
        <form className="container-search">
          <input
            type="text"
            className="container-search-input"
            placeholder="Busca tu personaje favorito"
            onChange={getValue}></input>
        </form>
        {characters.data === undefined ? (
          <div></div>
        ) : (
          characters.data
            .splice(0, 3)
            .map(character => {return ( <CharactersCards character={character} />)})
            
        )}
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
