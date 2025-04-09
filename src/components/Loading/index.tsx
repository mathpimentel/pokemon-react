import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt="Loading Pokébola"
        className="pokeball-spinner"
      />
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
