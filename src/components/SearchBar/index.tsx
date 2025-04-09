import React from "react";
import "./SearchBar.css";

interface SearchBarProps {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar = ({ inputValue, onInputChange, onSearch }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Digite o nome ou o n° na Pokedex do Pokémon"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="search-button" onClick={onSearch}>
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
