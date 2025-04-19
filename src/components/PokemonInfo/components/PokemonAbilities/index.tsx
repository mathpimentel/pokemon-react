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
              
                <a
                  href={`https://pokemondb.net/ability/${ability}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li key={ability}>
                  {ability}

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
