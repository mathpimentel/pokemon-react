import "./styles.css";
import PokemonHeader from "./components/PokemonHeader";
import PokemonTypes from "./components/PokemonTypes";
import PokemonSize from "./components/PokemonSize"
import PokemonAbilities from "./components/PokemonAbilities";

const index = () => {
  return (
    <>
      <PokemonHeader />

      <table className="pokemon-attributes">
        <tbody>
          <tr>
            <th>Tipo</th>
            <td>
              <PokemonTypes />

            </td>
          </tr>
          
          <PokemonSize />
          <PokemonAbilities />
        </tbody>
      </table>
    </>
  );
};

export default index;
