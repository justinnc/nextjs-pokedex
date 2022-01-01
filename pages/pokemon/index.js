import { getPokemons } from '../../helpers/api/formAPi';

import PokemonList from '../../components/pokemon-list/pokemon-list';

const PokemonPage = (props) => {
  return (
    <div className='mx-2 md:mx-4'>
      <PokemonList pokemons={props?.pokemons} />
    </div>
  );
};

export default PokemonPage;

export async function getStaticProps() {
  const { results } = await getPokemons(0, 100);

  return {
    props: {
      pokemons: results,
    },
  };
}
