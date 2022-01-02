import { PokemonStats } from './pokemon-information';
import { transformStatNames } from '../../helpers/pokemon-util';
import upperFirst from 'lodash/upperFirst';

const PokemonStatsDetail = ({ stats }) => {
  const formattedStats = stats?.map((resource) => ({
    name: transformStatNames(resource.stat.name),
    min: resource.base_stat,
    max:
      resource.stat.name === 'hp'
        ? Number(resource.base_stat) * 2 + 204
        : (Number(resource.base_stat) * 2 + 99) * 1.1,
  }));

  const total = formattedStats?.reduce((sum, { min }) => sum + min, 0);

  return (
    <ul className='mt-5 pl-0 w-full md:w-3/4'>
      {formattedStats?.map((st) => (
        <PokemonStats
          key={`stats-${st.name}`}
          title={upperFirst(st.name)}
          min={st.min}
          max={st.max}
        />
      ))}
      <li className='grid grid-cols-3 gap-x-1 mb-3'>
        <span className='text-gray-800 font-medium'>Total</span>
        <div>{total}</div>
      </li>
    </ul>
  );
};

export default PokemonStatsDetail;
