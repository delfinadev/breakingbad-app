import { useState, useEffect } from "react";
import axios from "axios";
import "./CharactersCards.js";

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
<<<<<<< HEAD
          {characters.map((character, cards) => {
            return (
            <CharactersCards key={cards} character={character} />,
            )}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
=======
        {characters.map((character, cards) => {
          return <CharactersCards key={cards} character={character} />;
        })}
      </div>
>>>>>>> d00d9c9e86acfa162cb25c4ed8da4c920ac5830c
    </>
  );
}
