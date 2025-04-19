import { PokemonType } from "../../../../types/pokemon";
import "./styles.css";

const typeTranslation: Record<string, string> = {
  normal: "Normal",
  fire: "Fogo",
  water: "Água",
  electric: "Elétrico",
  grass: "Grama",
  ice: "Gelo",
  fighting: "Lutador",
  poison: "Venenoso",
  ground: "Terra",
  flying: "Voador",
  psychic: "Psíquico",
  bug: "Inseto",
  rock: "Pedra",
  ghost: "Fantasma",
  dragon: "Dragão",
  dark: "Sombrio",
  steel: "Aço",
  fairy: "Fada",
};

interface PokemonTypesProps {
  types: PokemonType[];
}

const PokemonTypes = ({ types }: PokemonTypesProps) => {
  return (
    <tr>
      <th>Tipo</th>
      <td>
        <div className={`types ${types.length === 1 ? "single-type" : ""}`}>
          {types.map(({ type }) => (
            <span key={type.name}>
              <img
                src={`../../src/assets/icons/types/${type.name}.png`}
                alt={type.name}
              />
              <p>{typeTranslation[type.name]}</p>
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
};
export default PokemonTypes;
