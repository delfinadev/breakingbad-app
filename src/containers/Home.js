import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(params) {
  const [character, setCharacter] = useState([])

  useEffect(()=> {
    let url = 'https://www.breakingbadapi.com/api/characters?name=Walter+White'
    axios.get(url).then((response) => {
      setCharacter(response);
      console.log(response)
    });
  }, [])

  return (
    <>


      <h1>hola</h1>
    </>
  );
}
