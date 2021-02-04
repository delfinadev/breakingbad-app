import "./Cards.css";

export default function EpisodesCards({ episodio }) {
  const { title, season, air_date, episode, image } = episodio;
  return (
    <>
      <div className="card-character">
        <img src="" alt="img episodes"></img>
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
