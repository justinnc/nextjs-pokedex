import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
  },
});
