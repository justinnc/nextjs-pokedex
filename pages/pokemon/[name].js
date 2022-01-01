import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemonDetail,
  pokemonDetailSelector,
  isFetchingPokemonDetail,
} from '../../features/pokemon/pokemonSlice';
import Head from 'next/head';
import upperFirst from 'lodash/upperFirst';
import PokemonDetail from '../../components/pokemon-detail/pokemon-detail';
import LoadingProgress from '../../components/loading-progress/loading-progress';

const PokemonDetailPage = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const name = router.query.name;
  const pokemonDetail = useSelector(pokemonDetailSelector);
  const isLoading = useSelector(isFetchingPokemonDetail);

  useEffect(() => {
    if (name) {
      dispatch(fetchPokemonDetail(name));
    }
  }, [name, dispatch]);

  if (isLoading === 'loading' && !pokemonDetail) {
    return <LoadingProgress />;
  }

  return (
    <div>
      <Head>
        <title>{upperFirst(name)}</title>
      </Head>
      <PokemonDetail pokemon={pokemonDetail} />
    </div>
  );
};

export default PokemonDetailPage;
