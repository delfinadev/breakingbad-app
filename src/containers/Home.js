import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import CharactersCards from "../components/CharactersCards";
import Button from "./../components/Button";

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
    e.preventDefault();
    setPersonaje(e.target.value);
  }

  return (
    <>
      <div className="header-home">
        <h1>Find your favorite character</h1>
        <p>Your favorite character is here</p>
        <Button path={"#input"} content={"Find"} className={"btn btn-small"} />
      </div>
      <div className="main-home">
        <form className="container-search">
          <input
            type="text"
            id="input"
            className="container-search-input"
            placeholder="Find your favorite character"
            onChange={(e) => getValue(e)}></input>
        </form>
        <div className="container-search-card">
          {characters.data === undefined || personaje.length === 0 ? (
            <div></div>
          ) : (
            characters.data
              .map((character) => {
                return <CharactersCards character={character} />;
              })
              .splice(0, 3)
          )}
        </div>
        <div className="container-episodios">
          <Button
            path={"/episodes"}
            content={"Visit all episodes"}
            className={"btn"}
          />
        </div>
        <div className="container-personajes">
          <Button
            path={"/characters"}
            content={"Visit all characters"}
            className={"btn"}
          />
        </div>
      </div>
    </>
  );
}
