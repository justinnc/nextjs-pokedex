import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonIdFormUrl } from '../../helpers/pokemon-util';
import {
  fetchPokemons,
  pokemonsSelector,
} from '../../features/pokemon/pokemonSlice';

import PokemonItem from './pokemon-item';
import LoadingProgress from '../loading-progress/loading-progress';
import InfiniteScroll from 'react-infinite-scroll-component';

const PokemonList = (props) => {
  const [pokemonLists, setPokemonLists] = useState(props?.pokemons || []);

  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsSelector);

  useEffect(() => {
    if (pokemons) {
      setPokemonLists([...pokemonLists, ...pokemons]);
    }
  }, [pokemons]);

  const getMorePokemon = async () => {
    const params = { offset: pokemonLists.length };
    dispatch(fetchPokemons(params));
  };

  return (
    <InfiniteScroll
      dataLength={pokemonLists.length} //This is important field to render the next data
      next={getMorePokemon}
      hasMore={true}
      loader={<LoadingProgress />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className='flex flex-wrap justify-center'>
        {pokemonLists?.length !== 0 &&
          pokemonLists?.map((pokemon) => {
            return (
              <PokemonItem
                key={getPokemonIdFormUrl(pokemon.url)}
                pokemon={pokemon}
              />
            );
          })}
      </div>
    </InfiniteScroll>
  );
};

export default PokemonList;
