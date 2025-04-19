import "./styles.css";

import {
  PokemonHeader,
  PokemonTypes,
  PokemonSize,
  PokemonAbilities,
} from "./components";

const index = () => {
  return (
    <>
    <section className="pokemon-info">

      <PokemonHeader />
      <table>
        <tbody>
          <PokemonTypes />
          <PokemonSize />
          <PokemonAbilities />
        </tbody>
      </table>
    </section>
    </>
  );
};

export default index;
