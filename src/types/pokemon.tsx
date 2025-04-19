export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonAbility = {
  ability: {
    name: string;
  };
  is_hidden: boolean
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonSprites = {
  other: {
    "official-artwork": PokemonArtwork
  }
}

export type PokemonArtwork = {
  front_default : string,
  front_shiny: string
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  sprites: PokemonSprites
}