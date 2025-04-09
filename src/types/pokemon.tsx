export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonAbility = {
  ability: {
    name: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types?: PokemonType[];
  abilities?: PokemonAbility[];
  stats?: PokemonStat[];
}