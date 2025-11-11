import { Link } from "react-router"; // also, should be 'react-router-dom', not 'react-router'

const Pokemon = ({ name, url, id, type }) => {
  const typeColors = {
    normal: "#C2BFA3",
    fire: "#FF7A1C",
    water: "#4C83FF",
    electric: "#FFD83B",
    grass: "#57D163",
    ice: "#A5E3E8",
    fighting: "#E33B2F",
    poison: "#C050C7",
    ground: "#E8C76A",
    flying: "#B39EFF",
    psychic: "#FF6FA2",
    bug: "#B6C91A",
    rock: "#C2A744",
    ghost: "#8E6BB8",
    dragon: "#7E49FF",
    dark: "#7B5E48",
    steel: "#C6C6DC",
    fairy: "#F69FC9",
  };

  return (
    <Link to={`/pokemon/${id}`} className="min-w-[350px]">
      <div
        className="pokemon-card p-4 rounded-xl text-center"
        style={{
          background: `linear-gradient(135deg, ${typeColors[type]} 50%, white 100%)`,
        }}
      >
        <h2 className="capitalize font-bold text-lg">{name}</h2>
        <div className="max-h-[200px] flex justify-center">
          <img src={url} alt={name} className="max-h-[170px] object-contain" />
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
