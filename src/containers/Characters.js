import { useState, useEffect } from "react";
import axios from "axios";
import "./CharactersCards.js"

export default function Character() {
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";
    axios.get(url).then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <>
  <div style="background-image: url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/breaking-bad-resumen-cinco-temporadas-1570700511.jpg);">
      <h1>Todos los personajes </h1>
      </div>
      {/* <Button /> */}

      {characters ? ( 
      <div className="personajes-container">
          {characters.map((character, cards) => {
            return (
            <CharactersCards key={cards} character={character} />,
          )}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
    </>






  );
}
