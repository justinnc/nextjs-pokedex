import React from 'react';
import {
  importImages,
  getPokemonIdFormUrl,
  formatPokemonId,
} from '../../helpers/pokemon-util';

import Image from 'next/image';
import Link from 'next/link';
import upperFirst from 'lodash/upperFirst';

const PokemonItem = (props) => {
  const { name, url } = props.pokemon;

  const id = getPokemonIdFormUrl(url);
  const imageUrl = importImages(formatPokemonId(id));

  return (
    <Link href={`/pokemon/${id}`}>
      <a>
        <div className='p-4 transition-colors duration-200 border w-28 md:h-52 md:w-[8.9rem] hover:bg-stone-200'>
          <h3 className='text-2xl font-bold text-stone-500'>{id}</h3>
          <h3 className='font-[500] text-stone-400 pb-2'>{upperFirst(name)}</h3>

          <Image src={imageUrl} alt={name} width={150} height={150} />
        </div>
      </a>
    </Link>
  );
};

export default PokemonItem;
