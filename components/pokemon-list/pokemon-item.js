import React from 'react';
import Image from 'next/image';
import { getPokemonIdFormUrl } from '../../helpers/pokemon-util';

import upperFirst from 'lodash/upperFirst';

const PokemonItem = (props) => {
  const { name, url, image } = props.pokemon;

  return (
    <div className='p-4 transition-colors duration-200 border w-28 md:h-52 md:w-36 hover:bg-stone-200 '>
      <h3 className='text-2xl font-bold text-stone-500'>
        {getPokemonIdFormUrl(url)}
      </h3>
      <h3 className='font-[500] text-stone-400 pb-2'>{upperFirst(name)}</h3>

      <Image src={image} alt={name} width={150} height={150} />
    </div>
  );
};

export default PokemonItem;
