import { PokemonAbility } from "../../../../types/pokemon";
import "./styles.css";

interface PokemonAbilitiesProps {
  abilities: PokemonAbility[];
}

const PokemonAbilities = ({ abilities }: PokemonAbilitiesProps) => {
  return (
    <>
      <tr>
        <th colSpan={2}>Habilidades</th>
      </tr>
      <tr className="pokemon-abilities">
        <td colSpan={2}>
          <ul>
            {abilities.map(({ ability, is_hidden }) => (
              <a
                href={`https://pokemondb.net/ability/${ability.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={is_hidden ? "hidden-ability" : ""}>
                  {ability.name}
                  {is_hidden && <span className="hidden-indicator">*</span>}
                </li>
              </a>
            ))}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default PokemonAbilities;
