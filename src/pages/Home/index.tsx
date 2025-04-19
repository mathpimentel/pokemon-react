import { useEffect, useState } from "react";
import api from "../../services/api";
import { Pokemon } from "../../types/pokemon";
import {
  SearchBar,
  Loading,
  PokemonInfo,
  PokemonImageViewer,
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

      <main className="pokedex-container">
        <PokemonImageViewer />
        <PokemonInfo />

        <section className="pokemon-status">
          <div className="button-graph-group">
            <button>Radar</button>
            <button>Barra</button>
          </div>
          <span>Componente do gráfico</span>
        </section>
      </main>

      {pokemon ? (
        <ul>
          <li>Numero pokedex: {pokemon.id}</li>
          <li>Nome: {pokemon.name}</li>
          <li>Altura: {pokemon.height / 10}</li>
          <li>Peso: {pokemon.weight / 10} </li>
          <li>
            Tipo:
            {pokemon.types?.map((type) => (
              <span>{type.type.name}</span>
            ))}
          </li>

          <li>
            Status:
            {pokemon.stats?.map((stat) => (
              <li>
                Nome:{stat.stat.name}, Status:{stat.base_stat},{" "}
              </li>
            ))}
          </li>
          <li>
            {pokemon.abilities?.map((ability, index) => (
              <li>
                Habilidade {index + 1}:{ability.ability.name}
              </li>
            ))}
          </li>

          <li>
            Imagem:{" "}
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            Shiny:{" "}
            <img
              src={pokemon.sprites.other["official-artwork"].front_shiny}
              alt={pokemon.name}
            />
          </li>
        </ul>
      ) : (
        <Loading />
      )}
    </>
  );
}
