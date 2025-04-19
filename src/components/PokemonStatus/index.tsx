import PokemonRadarChart from "./components/PokemonRadarChart";
import RadarToogleButtons from './components/GraphToogleButtons'
import './styles.css'

const stats = [
  { stat: { name: "hp" }, base_stat: 45 },
  { stat: { name: "attack" }, base_stat: 49 },
  { stat: { name: "defense" }, base_stat: 49 },
  { stat: { name: "special-attack" }, base_stat: 65 },
  { stat: { name: "special-defense" }, base_stat: 65 },
  { stat: { name: "speed" }, base_stat: 45 },
];

const formattedStats = stats.map((s) => ({
  stat: s.stat.name.replace("-", " "), // Para tirar o hífen
  value: s.base_stat,
}));

const index = () => {
  return (
    <>
      <section className="pokemon-status">
        <RadarToogleButtons />
        <PokemonRadarChart data={formattedStats}/>
      </section>
    </>
  );
};

export default index;
