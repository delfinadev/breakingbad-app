import "./Cards.css";

export default function EpisodesCards({ episodio }) {
  const { name, air_date, episode, season } = episodio;
  return (
    <>
      <div className="card-character">
        <img
          src=""
          alt="img episodes"></img>
        <div className="card-character-footer">
          <p className="card-texts">Episodio: {episode}</p>
          <p className="card-texts">Nombre del Espisodio: {name}</p>
          <p className="card-texts">Dia de Estreno: {air_date}</p>
          <p className="card-texts">Temporada: {season}</p>
        </div>
      </div>
    </>
  );
}