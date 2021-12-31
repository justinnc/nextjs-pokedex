import { getPokemons } from '../helpers/api/formAPi';
import { importImages, getPokemonIdFormUrl } from '../helpers/pokemon-util';

import PokemonList from '../components/pokemon-list/pokemon-list';

const PokemonPage = (props) => {
  return (
    <div className='mx-2 md:mx-4'>
      <PokemonList pokemons={props?.pokemons} />
    </div>
  );
};

export default PokemonPage;

export async function getStaticProps() {
  const { results } = await getPokemons(50, 0);

  const mapImageToList = results.map((pokemon, idx) => ({
    ...pokemon,
    image: importImages(getPokemonIdFormUrl(pokemon.url)),
  }));

  return {
    props: {
      pokemons: mapImageToList,
    },
  };
}
