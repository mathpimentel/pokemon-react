interface PokemonSizeProps{
  height: number,
  weight: number
}

const index = ( {height, weight} : PokemonSizeProps ) => {
  return (
    <>
      <tr>
        <th>Altura</th>
        <td>{height < 10 ? `${height * 10} cm` : `${(height / 10).toFixed(1)} m`}</td>
      </tr>
      <tr>
        <th>Peso</th>
        <td>{weight < 10 ? `${weight * 10} gramas` : `${(weight / 10).toFixed(1)} kg`}</td>
      </tr>
    </>
  );
};

export default index;
