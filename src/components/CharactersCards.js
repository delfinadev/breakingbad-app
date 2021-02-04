import "./Cards.css";

export default function CharactersCards({ character }) {
  return (
    <div className="card-character">
      <img src={character.image} alt="character"></img>
      <div className="card-character-footer">
        <p className="card-texts">Nombre: {character.name}</p>
        <p className="card-texts">Apodo: {character.nickname} </p>
        <p className="card-texts">Ocupación: {character.occupation} </p>
        <p className="card-texts">Estado: {character.status}</p>
      </div>
    </div>
  );
}
