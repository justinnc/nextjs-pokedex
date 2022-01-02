import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { importImages, formatPokemonId } from '../../helpers/pokemon-util';
import PokemonStatsDetail from './pokemon-stats';
import PokemonBiography from './pokemon-biography';
import PokemonEvolutions from './pokemon-evolutions';

const PokemonDetail = (props) => {
  const imageUrl = importImages(formatPokemonId(props.pokemon?.id));
  const name = props.pokemon?.name;

  return (
    <div>
      <h1 className='text-center text-2xl lg:text-4xl font-bold text-stone-600 mt-4'>
        {name?.toUpperCase()}
      </h1>
      <div className='grid grid-cols-3 gap-4 mt-2 lg:mt-8 mx-2 md:px-4'>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 text-center flex justify-center'>
          <PokemonBiography pokemon={props.pokemon} />
        </div>
        <div className='col-span-3	md:col-span-3 lg:col-span-1 text-center'>
          <Image src={imageUrl} alt={name} width={550} height={550} />
        </div>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 text-center flex justify-center'>
          <PokemonStatsDetail stats={props.pokemon?.stats} />
        </div>
      </div>
      <PokemonEvolutions />
    </div>
  );
};

export default PokemonDetail;
