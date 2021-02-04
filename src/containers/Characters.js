import { useState, useEffect } from "react";
import axios from "axios";

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
      <h1>Characters</h1>
      {/* <Button /> */}
    </>
  );
}
