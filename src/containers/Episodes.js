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

  return <> 
  
  <div style="background-image: url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB-S5-Key-Art-2560-v2.jpg);">
      <h1>Todos los personajes </h1>
      </div>
      {/* <Button /> */}

      {characters ? ( 
      <div className="episodes-container">
          {episodes.map((episodes, cards) => {
            return <EpisodesCards key={cards} episode={episode} />;
          })}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
  </>;
}
