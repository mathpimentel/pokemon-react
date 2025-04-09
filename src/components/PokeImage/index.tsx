
import "./PokeImage.css";

interface PokeImageProps {
  id: number;
  name: string;
}

const PokeImage = ({ id, name }: PokeImageProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="poke-image-container">
      <img
        src={imageUrl}
        alt={name}
        className="poke-image"
      />
    </div>
  );
};

export default PokeImage;
