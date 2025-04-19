import ImageToogleButtons from "./components/ImageToogleButtons";
import PokemonImage from "./components/PokemonImage";

import "./style.css";
const index = () => {
  return (
    <>
      <section className="pokemon-photo">
        <ImageToogleButtons />
        <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" />
      </section>
    </>
  );
};

export default index;
