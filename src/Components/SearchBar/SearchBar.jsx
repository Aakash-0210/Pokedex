const SearchBar = ({ updateSearchTerm }) => {
  return (
    <input
      onChange={(e) => updateSearchTerm(e.target.value)}
      type="text"
      placeholder="what pokemon are you looking for ?"
      className="border w-[50%] p-5 mt-8 "
    />
  );
};

export default SearchBar;
