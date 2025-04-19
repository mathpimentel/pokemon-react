import "./styles.css";

interface ToggleProps {
  onToggle: (isShiny: boolean) => void;
  showShiny: boolean;
}

const index = ({ onToggle, showShiny }: ToggleProps) => {
  return (
    <div className="button-image-group">
      <button
        className={!showShiny ? "active" : ""}
        onClick={() => onToggle(false)}
      >
        Normal
      </button>
      <button
        className={showShiny ? "active" : ""}
        onClick={() => onToggle(true)}
      >
        Brilhante
      </button>
    </div>
  );
};

export default index;
