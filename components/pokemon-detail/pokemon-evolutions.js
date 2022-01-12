import React from 'react';

const PokemonEvolutions = (props) => {
  console.log('🚀 PokemonEvolutions ~ props', props);

  const evolves = props?.evolution?.chain;

  return (
    <div>
      <h1>{evolves?.species?.name}</h1>
      {evolves?.evolves_to?.length !== 0 &&
        evolves?.evolves_to?.map((evo, idx) => {
          return (
            <div key={idx}>
              <h2 className='font-2xl text-rose-900'>{evo.species.name}</h2>

              {evo.evolves_to?.length !== 0 &&
                evo.evolves_to?.map((evo2, idx2) => {
                  return (
                    <div key={idx2}>
                      <h3 className='font-2xl text-rose-900'>
                        {evo2.species.name}
                      </h3>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default PokemonEvolutions;
