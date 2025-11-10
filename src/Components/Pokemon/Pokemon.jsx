import { Link } from "react-router";

const Pokemon = ({ name, url, id }) => {
  return (
    <Link to={`/pokemon/${id}`} className=" min-w-[350px] ">
      <div className=" pokemon-card ">
        <h2 className="">{name}</h2>
        <div className="max-h-[200px]">
          <img src={url} alt={name} className="max-h-[50%] min-h-[170px]" />
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
