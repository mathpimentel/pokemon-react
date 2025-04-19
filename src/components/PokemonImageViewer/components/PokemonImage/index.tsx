import "./styles.css"

interface PokemonImageProps {
  src: string;
}
const index = ({ src }: PokemonImageProps) => {
  return (
    <div className="img-container">
      <img
        src={src}
        alt="Pokemon"
      />
    </div>
  );
};

export default index;
