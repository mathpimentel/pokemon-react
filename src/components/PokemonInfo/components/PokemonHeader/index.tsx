import './styles.css'

interface PokemonHeaderProps{
  id: number,
  name: string
}

const PokemonHeader = ({id,name} : PokemonHeaderProps) => {
  return (
    <header>
        <span>N° {String(id).padStart(4, "0")}</span>
        <h2>{name}</h2>
      </header>
  )
}

export default PokemonHeader
