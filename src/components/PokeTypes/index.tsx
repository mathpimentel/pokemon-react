import { useState, useEffect } from "react";
import "./PokeTypes.css";

interface PokeTypesProps {
  types: string[];
}

const PokeTypes = ({ types }: PokeTypesProps) => {
  const [images, setImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: { [key: string]: string } = {};

      for (let type of types) {
        try {
          const image = await import(`../../assets/icons/types/${type}.png`);
          loadedImages[type] = image.default;  // Access the default export
        } catch (error) {
          console.error(`Imagem para o tipo ${type} não encontrada`, error);
        }
      }

      setImages(loadedImages);
    };

    if (types.length) {
      loadImages();
    }
  }, [types]);

  return (
    <div className="poke-types">
      {types.map((t, index) => (
        <div key={index} className="type-container">
          {images[t] ? (
            <img src={images[t]} alt={t} className="type-icon" />
          ) : (
            <div>Imagem não encontrada</div>
          )}
          <span className="type-name">{t}</span>
        </div>
      ))}
    </div>
  );
};

export default PokeTypes;
