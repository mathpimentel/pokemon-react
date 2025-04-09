import "./PokeInfo.css";

interface PokeInfoProps {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const PokeInfo = ({ name, id, height, weight }: PokeInfoProps) => {
  return (
    <div className="poke-info">
      <h2 className="poke-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p className="poke-id">Nº {id.toString().padStart(3, "0")}</p>
      <p className="poke-height">Altura: {(height / 10).toFixed(1)} m</p>
      <p className="poke-weight">Peso: {(weight / 10).toFixed(1)} kg</p>
    </div>
  );
};


export default PokeInfo;
