import { useState, useEffect } from "react";
import axios from "axios";
import CharactersCards from "../components/CharactersCards"

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
      <div className="personajes-container">
      {characters ? 
     
          characters.map((character, cards) => {
            
            <CharactersCards key={cards} character={character} />
          })

       : 
        <p>Cargando....</p>
      }
      </div>
    </>






  );
}
