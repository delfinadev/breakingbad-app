import { useState, useEffect } from "react";
import axios from "axios";
import CharactersCards from "../components/CharactersCards";
import Button from "../components/Button";
import Spinner from "./../components/Spinner/Spinner";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";
    axios.get(url).then((response) => {
      setTimeout(() => {
        setCharacters(response.data);
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Todos los personajes </h1>
      </div>
      <Button path={"/"} content={"Back to Home"} className={"btn"} />

      {loading ? (
        <Spinner />
      ) : (
        <div className="episodes-container">
          {characters.map((character, index) => {
            return <CharactersCards key={index} character={character} />;
          })}
        </div>
      )}
    </>
  );
}
