import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonDetailAction,
  pokemonDetailSelector,
  pokemonEvoSelector,
  getPokemonEvoAction,
} from '../../features/pokemon/pokemonSlice';

import PokemonDetail from '../../components/pokemon-detail/pokemon-detail';
import LoadingProgress from '../../components/loading-progress/loading-progress';

const PokemonDetailPage = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const id = router.query.id;
  const {
    data: pokemonDetail,
    status: isLoading,
    error,
  } = useSelector(pokemonDetailSelector);

  const { data: evolution, status: evolutionStatus } =
    useSelector(pokemonEvoSelector);

  console.log(' evolution', evolution);

  useEffect(() => {
    if (id) {
      dispatch(getPokemonDetailAction(id));
      dispatch(getPokemonEvoAction(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {isLoading === 'loading' ? (
        <LoadingProgress />
      ) : (
        id && (
          <PokemonDetail
            pokemon={pokemonDetail}
            evolution={evolution}
            evolutionStatus={evolutionStatus}
          />
        )
      )}
    </div>
  );
};

export default PokemonDetailPage;
