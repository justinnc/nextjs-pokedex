import ProgressBar from 'react-bootstrap/ProgressBar';

const PokemonInformation = ({ title, content }) => {
  return (
    <li className='grid grid-cols-2 gap-x-1 mb-3'>
      <span className='text-gray-800 font-medium'>{title}</span>
      <span>{content}</span>
    </li>
  );
};

const PokemonStats = ({ title, min, max }) => {
  return (
    <li className='grid grid-cols-3 gap-x-1 mb-3'>
      <span className='text-gray-800 font-medium'>{title}</span>
      <div className='col-span-2'>
        <ProgressBar
          style={{ height: '21px' }}
          className='bg-red-300'
          animated
          now={min?.toFixed(0)}
          label={`${min?.toFixed(0)}`}
          max={max?.toFixed(0) / 2}
        />
      </div>
    </li>
  );
};

export { PokemonInformation, PokemonStats };
