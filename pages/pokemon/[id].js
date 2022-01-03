import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  pokemonEvoSelector,
  getPokemonEvoAction,
} from '../../features/pokemon/pokemonSlice';

import { getPokemonByNameOrId } from '../../helpers/api/formAPi';
import _ from 'lodash';

import PokemonDetail from '../../components/pokemon-detail/pokemon-detail';
import LoadingProgress from '../../components/loading-progress/loading-progress';

const PokemonDetailPage = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const id = router.query.id;

  const { data: evolution, status: evolutionStatus } =
    useSelector(pokemonEvoSelector);
  console.log(' evolution', evolution);

  const evolutionTo = _.map(evolution, 'species', 'evolves_to.species');

  console.log('evolutionTo', evolutionTo);

  useEffect(() => {
    if (id) {
      dispatch(getPokemonEvoAction(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  return (
    <div>
      <PokemonDetail
        pokemon={props?.pokemonDetail}
        evolution={evolution}
        evolutionStatus={evolutionStatus}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;

  const pokemonDetail = await getPokemonByNameOrId(id);

  return {
    props: { pokemonDetail },
  };
}

export default PokemonDetailPage;
