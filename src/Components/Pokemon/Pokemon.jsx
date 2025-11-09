const Pokemon = ({ name, url }) => {
  return (
    <div className=" pokemon-card card">
      <h2 className="">{name}</h2>
      <div className="max-h-[200px]">
        <img src={url} alt={name} className="max-h-[50%] min-h-[170px]" />
      </div>
    </div>
  );
};

export default Pokemon;
