import React from "react";
import styles from "./styles.module.css"

interface SearchBarProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar = ({ inputValue, onInputChange, onSearch }: SearchBarProps) => {
  return (
    <div className={styles.container}> 
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className={styles.input}  
        placeholder="Digite o nome ou o número da pokédex do pokémon..."
      />
      <button onClick={onSearch} className={styles.button}> 
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
