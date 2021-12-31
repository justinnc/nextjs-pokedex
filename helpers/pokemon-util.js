export const getPokemonIdFormUrl = (url) => {
  const id = url?.split('/').slice(-2)[0];

  if (id < 10) {
    return `00${id}`;
  }
  if (id >= 10 && id < 100) {
    return `0${id}`;
  }
  return id;
};

export const importImages = (image, filetype) => {
  return `${process.env.PUBLIC_URL}/assets/images/${image}.${
    filetype || 'png'
  }`;
};

export const importPokemonImage = (image) => {
  return `${process.env.PUBLIC_URL}/assets/pokemons/${image}.png`;
};

export const PokemonTypePlaceholders = {
  normal: importPokemonImage('togepi'),
  fire: importPokemonImage('charizard'),
  fighting: importPokemonImage('lucario'),
  water: importPokemonImage('blastoise'),
  flying: importPokemonImage('aerodactyl'),
  grass: importPokemonImage('venusaur'),
  poison: importPokemonImage('seviper'),
  electric: importPokemonImage('pikachu'),
  ground: importPokemonImage('diglett'),
  psychic: importPokemonImage('mew'),
  rock: importPokemonImage('onix'),
  ice: importPokemonImage('regice'),
  bug: importPokemonImage('butterfree'),
  dragon: importPokemonImage('dragonite'),
  ghost: importPokemonImage('ganger'),
  dark: importPokemonImage('weavile'),
  steel: importPokemonImage('klinklang'),
  fairy: importPokemonImage('clefable'),
};
