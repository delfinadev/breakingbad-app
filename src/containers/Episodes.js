import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`;
    axios.get(url).then((response) => {
      setEpisodes(response.data);
    });
  }, []);

  return <> </>;
}
