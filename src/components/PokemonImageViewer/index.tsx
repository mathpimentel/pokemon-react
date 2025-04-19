import ImageToogleButtons from "./components/ImageToogleButtons";
import PokemonImage from "./components/PokemonImage";
import { PokemonSprites} from "../../types/pokemon";
import { useState } from "react";
import "./style.css";

interface PokemonImageViewerProps {
  sprites: PokemonSprites;
}

const index = ({ sprites }: PokemonImageViewerProps) => {
  const [showShiny, setShowShiny] = useState(false);

  const handleToggle = (value: boolean) => {
    setShowShiny(value);
  };

  const imageSrc = showShiny
  ? sprites.other["official-artwork"].front_shiny || sprites.other["official-artwork"].front_default
  : sprites.other["official-artwork"].front_default;


  return (
    <>
      <section className="pokemon-photo">
        <ImageToogleButtons onToggle={handleToggle} showShiny={showShiny}/>
        <PokemonImage src={imageSrc} />
      </section>
    </>
  );
};

export default index;
