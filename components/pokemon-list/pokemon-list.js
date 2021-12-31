import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../helpers/api/formAPi';
import { importImages, getPokemonIdFormUrl } from '../../helpers/pokemon-util';
import { useDispatch } from 'react-redux';
import PokemonItem from './pokemon-item';

import { fetchPokemons } from '../../features/pokemon/pokemonSlice';

import InfiniteScroll from 'react-infinite-scroll-component';

const PokemonList = ({ pokemons }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const params = { offset: pokemonLists.length };

  //   dispatch(fetchPokemons(params));
  // }, []);

  const [pokemonLists, setPokemonLists] = useState(pokemons);

  const getMorePokemon = async () => {
    const newPokemons = await getPokemons(
      pokemonLists.length,
      pokemonLists.length
    );
    console.log('🚀 getMorePokemon ~ newPokemons', newPokemons);

    const { results } = newPokemons;

    const mapImageToList = results.map((pokemon) => ({
      ...pokemon,
      image: importImages(getPokemonIdFormUrl(pokemon.url)),
    }));

    console.log('mapImageToList', mapImageToList);

    setPokemonLists([...pokemonLists, ...mapImageToList]);
  };

  return (
    <InfiniteScroll
      dataLength={pokemonLists.length} //This is important field to render the next data
      next={getMorePokemon}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
    >
      <div className='flex flex-wrap'>
        {pokemonLists?.length !== 0 &&
          pokemonLists?.map((pokemon, index) => {
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
