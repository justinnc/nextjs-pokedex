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
  lists: {
    loading: 'idle',
    data: null,
    error: null,
  },
  details: {
    loading: 'idle',
    data: null,
    error: null,
  },
  evo: {
    loading: 'idle',
    data: null,
    error: null,
  },
};

export const getPokemonsAction = createAsyncThunk(
  'pokemon/getPokemonList',
  async (params, thunkAPI) => {
    const { offset, limit } = params;
    const response = await getPokemons(offset, limit);
    return response?.results;
  }
);

export const getPokemonDetailAction = createAsyncThunk(
  'pokemon/getPokemonDetail',
  async (name, thunkAPI) => {
    const response = await getPokemonByNameOrId(name);
    return response;
  }
);

export const getPokemonEvoAction = createAsyncThunk(
  'pokemon/getPokemonEvo',
  async (name, thunkAPI) => {
    const response = await getEvolutionChainByNameOrId(name);
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPokemonsAction.pending, (state, action) => {
      state.lists = {
        status: 'loading',
        data: null,
        error: null,
      };
    });
    builder.addCase(getPokemonsAction.fulfilled, (state, action) => {
      state.lists = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    });
    builder.addCase(getPokemonsAction.rejected, (state, action) => {
      state.lists = {
        status: 'idle',
        data: null,
        error: 'Something went wrong',
      };
    });

    builder.addCase(getPokemonDetailAction.pending, (state, action) => {
      state.details = {
        status: 'loading',
        data: null,
        error: null,
      };
    });
    builder.addCase(getPokemonDetailAction.fulfilled, (state, action) => {
      state.details = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    });
    builder.addCase(getPokemonDetailAction.rejected, (state, action) => {
      state.details = {
        status: 'idle',
        data: null,
        error: 'Something went wrong',
      };
    });

    builder.addCase(getPokemonEvoAction.pending, (state, action) => {
      state.evo = {
        status: 'loading',
        data: null,
        error: null,
      };
    });
    builder.addCase(getPokemonEvoAction.fulfilled, (state, action) => {
      state.evo = {
        status: 'idle',
        data: action.payload,
        error: null,
      };
    });
    builder.addCase(getPokemonEvoAction.rejected, (state, action) => {
      state.evo = {
        status: 'idle',
        data: null,
        error: 'Something went wrong',
      };
    });
  },
});

export default pokemonSlice.reducer;

export const pokemonsSelector = createSelector(
  (state) => state.pokemons.lists,
  (lists) => lists
);

export const pokemonDetailSelector = createSelector(
  (state) => state.pokemons.details,
  (details) => details
);

export const pokemonEvoSelector = createSelector(
  (state) => state.pokemons.evo,
  (evo) => evo
);
