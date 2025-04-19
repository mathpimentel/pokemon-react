import "./styles.css";
import {PokemonType, PokemonAbility} from "../../../src/types/pokemon.tsx"

import {
  PokemonHeader,
  PokemonTypes,
  PokemonSize,
  PokemonAbilities,
} from "./components";

interface PokemonInfoProps {
  id: number
  name: string
  height: number
  weight: number
  types: PokemonType[]
  abilities: PokemonAbility[]
}

const index = ({id, name, height, weight, types, abilities} : PokemonInfoProps ) => {
  return (
    <>
      <section className="pokemon-info">
        <PokemonHeader id={id} name={name}/>
        <table>
          <tbody>
            <PokemonTypes types={types} />
            <PokemonSize height={height} weight={weight}/>
            <PokemonAbilities abilities={abilities} />
          </tbody>
        </table>
      </section>
    </>
  );
};

export default index;
