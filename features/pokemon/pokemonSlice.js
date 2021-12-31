import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons } from '../../helpers/api/formAPi';

const initialState = {
  pokemonList: {
    loading: 'idle',
    data: {},
    error: {},
  },
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/getPokemonList',

  async (params, thunkAPI) => {
    const { offset, limit } = params;

    const response = await getPokemons(limit, offset);

    return response?.results;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPokemons.pending, (state, action) => {
      console.log('pending');
      // Add user to the state array
      state.pokemonList = {
        status: 'loading',
        data: {},
        error: {},
      };
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      console.log('fullfilled');
      console.log('action', action);

      // Add user to the state array
      state.pokemonList = {
        status: 'idle',
        data: {},
        error: {},
      };
    });
  },
});

export default pokemonSlice.reducer;
