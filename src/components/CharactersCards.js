<<<<<<< HEAD
import "./Cards.css";

const CharactersCards = ({ character }) => (
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
export default CharactersCards;
=======
export default function CharactersCards() {
  return;
}
>>>>>>> d00d9c9e86acfa162cb25c4ed8da4c920ac5830c
