import styles from "./styles.module.css";
import { useState } from "react";

<div className={styles.card}>Olá!</div>;
type PokemonImageProps = {
  name: string;
  imageUrl?: string;
  fallbackUrl?: string;
  size?: number;
};

function PokemonImage({ name, imageUrl, fallbackUrl, size = 120 }: PokemonImageProps) {
  const [src, setSrc] = useState(imageUrl);

  const handleError = () => {
    if (fallbackUrl) {
      setSrc(fallbackUrl);
    } else {
      setSrc("https://placehold.co/120x120/cccccc/000000?text=No+Image");
    }
  };

  return (
    <img
      src={src}
      alt={name}
      onError={handleError}
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

export default PokemonImage;