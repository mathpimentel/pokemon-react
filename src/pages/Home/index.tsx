import { useEffect, useState } from "react";
import api from "../../services/api";
import { Pokemon } from "../../types/pokemon";
import {
  SearchBar,
  Loading,
  PokemonInfo,
  PokemonImageViewer,
  PokemonStatus,
} from "../../components";
import "./styles.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePesquisar = () => {
    setSearch(inputValue.trim());
  };

  const fetchPokemon = async () => {
    if (!search) return;
    try {
      const response = await api.get<Pokemon>(`/${search.toLowerCase()}`);
      setPokemon(response.data);
    } catch (err) {
      console.error("Erro: ", err);
      setPokemon(null);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [search]);

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSearch={handlePesquisar}
      />

      {pokemon ? (
        <main className="pokedex-container">
          <PokemonImageViewer
            sprites={pokemon.sprites}
          />
          <PokemonInfo
            id={pokemon.id}
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
          <PokemonStatus />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
