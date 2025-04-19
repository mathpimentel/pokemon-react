import './styles.css'


const PokemonHeader = () => {
  return (
    <header>
        <span>N° {String(2).padStart(4, '0')}</span>
        <h2>Ivysaur</h2>
      </header>
  )
}

export default PokemonHeader
