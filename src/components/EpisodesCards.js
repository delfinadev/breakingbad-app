import Cards.css from "./Cards.css";

export default function EpisodesCards({ episode }) {
  const { title, season, air_date, episode, } = episodio;
  return (
    <>
      <div className="card-character">
        <div className="card-character-footer">
          <p className="card-texts">Nombre del Espisodio: {title}</p>
          <p className="card-texts">Dia de Estreno: {air_date}</p>
          <p className="card-texts">Temporada: {season}</p>
          <p className="card-texts">Episodio: {episode}</p>
        </div>
      </div>
    </>
  );
}
