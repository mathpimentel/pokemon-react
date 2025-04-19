import "./styles.css";

const types = [
  { url: "../../src/assets/icons/types/grass.png", name: "Grama" },
  { url: "../../src/assets/icons/types/poison.png", name: "Venenoso" },
];

const PokemonTypes = () => {
  return (
    <div className="types">
      {types.map((type) => (
        <span key={type.name}>
          <img src={type.url} alt={type.name} />
          <p>{type.name}</p>
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
