import "./styles.css";

const abilities = ["overgrow", "chlorophyll"];

const PokemonAbilities = () => {
  return (
    <>
      <tr>
        <th colSpan={2}>Habilidade</th>
      </tr>
      <tr className="pokemon-abilities">
        <td colSpan={2}>
          <ul>
            {abilities.map((ability) => (
              <li>{ability}</li>
            ))}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default PokemonAbilities;
