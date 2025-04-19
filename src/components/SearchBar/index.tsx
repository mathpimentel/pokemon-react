import React from 'react';

// Tipagem dos props
interface SearchBarProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar= ({ inputValue, onInputChange, onSearch } : SearchBarProps) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Digite o nome ou o número da pokédex do pokémon"
        style={styles.input}
      />
      <button onClick={onSearch} style={styles.button}>
        Pesquisar
      </button>
    </div>
  );
};

// Estilos simples para o componente
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '500px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #007BFF',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '4px',
  }
};

export default SearchBar;
