import React from 'react';
import { PokemonInformation } from './pokemon-information';
import { leftPad } from '../../helpers/pokemon-util';

export const PokemonBiography = (props) => {
  const pokemon = props.pokemon;

  const inches = (pokemon?.height * 3.93701).toFixed(0);
  const feet = Math.floor(Number(inches) / 12);

  return (
    <ul className='mt-5'>
      <PokemonInformation title='ID' content={`#${pokemon?.id}`} />

      <PokemonInformation
        title='Height'
        content={`${feet}'${leftPad(Number(inches) % 12, 2)}" (${
          pokemon?.height / 10
        }m)`}
      />

      <PokemonInformation
        title='Weight'
        content={`${(pokemon?.weight / 10).toFixed(1)} kg`}
      />

      <PokemonInformation
        title='Abilities'
        content={pokemon?.abilities.map((ability, index) => (
          <div
            key={`ability=${ability.ability.name}`}
            className='capitalize mx-1 bg-gray-400 p-2 shadow-md rounded-md my-2 text-white'
          >
            {ability.ability.name} {ability.isHidden && '(Hidden Ability)'}
          </div>
        ))}
      />

      <PokemonInformation
        title='Types'
        content={pokemon?.types.map((type, index) => (
          <div
            key={`ability=${type.type.name}`}
            className='capitalize mx-1 bg-gray-400 p-2 shadow-md rounded-md my-2 text-white'
          >
            {type.type.name}
          </div>
        ))}
      />
    </ul>
  );
};

export default PokemonBiography;
