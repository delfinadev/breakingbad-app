import { useState, useEffect } from "react";
import axios from "axios";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  console.log(
    "🚀 ~ file: Characters.js ~ line 6 ~ Character ~ characters",
    characters
  );

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";
    axios.get(url).then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <>
      <h1>hola fede</h1>
    </>
  );
}
