import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import {
  getPokemons,
  getPokemonByNameOrId,
  getSpeciesByNameOrId,
  getEvolutionChainByNameOrId,
} from '../../helpers/api/formAPi';

const initialState = {
  pokemonList: {
    loading: 'idle',
    data: null,
    error: null,
  },
  pokemonDetail: {
    loading: 'idle',
    data: null,
    error: null,
  },
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/getPokemonList',
  async (params, thunkAPI) => {
    const { offset, limit } = params;
    const response = await getPokemons(offset, limit);
    return response?.results;
  }
);

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/getPokemonDetail',
  async (name, thunkAPI) => {
    const response = await getPokemonByNameOrId(name);
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.pokemonList = {
        status: 'loading',
        data: null,
        error: null,
      };
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemonList = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.pokemonList = {
        status: 'idle',
        data: null,
        error: 'Something went wrong',
      };
    });

    builder.addCase(fetchPokemonDetail.pending, (state, action) => {
      state.pokemonDetail = {
        status: 'loading',
        data: null,
        error: null,
      };
    });
    builder.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
      state.pokemonDetail = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    });
    builder.addCase(fetchPokemonDetail.rejected, (state, action) => {
      state.pokemonDetail = {
        status: 'idle',
        data: null,
        error: 'Something went wrong',
      };
    });
  },
});

export default pokemonSlice.reducer;

export const pokemonsSelector = createSelector(
  (state) => state.pokemons.pokemonList,
  (pokemonList) => pokemonList.data
);

export const isFetchingPokemons = createSelector(
  (state) => state.pokemons.pokemonList,
  (pokemonList) => pokemonList.status
);

export const pokemonDetailSelector = createSelector(
  (state) => state.pokemons.pokemonDetail,
  (pokemonDetail) => pokemonDetail.data
);

export const isFetchingPokemonDetail = createSelector(
  (state) => state.pokemons.pokemonDetail,
  (pokemonDetail) => pokemonDetail.status
);
