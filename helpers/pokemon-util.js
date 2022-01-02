export const getPokemonIdFormUrl = (url, onlyId = false) => {
  const id = url?.split('/').slice(-2)[0];

  return id;
};

export const formatPokemonId = (id) => {
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

export const leftPad = (number, targetLength) => {
  let output = Math.abs(number).toString();
  while (output.length < Math.abs(targetLength)) {
    output = '0' + output;
  }
  return output;
};

export const transformStatNames = (statName) => {
  const map = [
    ['special-attack', 'Sp. Atk'],
    ['special-defense', 'Sp. Def'],
  ];
  let transformed = statName;
  map.forEach(([a, b]) => {
    if (a === statName) {
      transformed = b;
    }
  });

  return transformed;
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
