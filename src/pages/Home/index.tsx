import { useEffect, useState } from "react";
import api from "../../services/api";
import { Pokemon } from "../../types/pokemon";
import { SearchBar, PokeCard, Loading} from "../../components";

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

  useEffect(() => {
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
        <PokeCard pokemon={pokemon} />
      ) : search ? (
        <Loading />
      ) : (
        <div>Pesquise um Pokémon acima!</div>
      )}
      {/* src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} */}
    </>
  );
}
