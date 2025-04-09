import {PokeInfo, PokeTypes, PokeImage} from "../index";
import {Pokemon} from "../../types/pokemon"
import "./PokemonCard.css";


export default function PokeCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="pokemon-card">
      <PokeImage id={pokemon.id} name={pokemon.name} />
      <PokeInfo
        name={pokemon.name}
        id={pokemon.id}
        height={pokemon.height}
        weight={pokemon.weight}
      />

      <PokeTypes types={pokemon?.types?.map((t) => t.type.name) || []} />

      {/* <PokeAbilities abilities={pokemon.abilities} /> */}
      {/* <PokeStats stats={pokemon.stats} /> */}
    </div>
  );
}