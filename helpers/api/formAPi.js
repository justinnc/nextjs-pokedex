import { HTTP_METHODS } from '../../constants/index';
import { createApiRequest } from './axios';

const getPokemons = (limit, offset) => {
  return createApiRequest(
    `/pokemon/?limit=${limit}&offset=${offset}`,
    HTTP_METHODS.GET,
    {}
  );
};
const getPokemonByNameOrId = (id) => {
  return createApiRequest(`/pokemon/${id}/`, HTTP_METHODS.GET, {});
};
const getSpeciesByNameOrId = (id) => {
  return createApiRequest(`/pokemon-species/${id}/`, HTTP_METHODS.GET, {});
};
const getEvolutionChainByNameOrId = (id) => {
  return createApiRequest(`/evolution-chain/${id}/`, HTTP_METHODS.GET, {});
};

export {
  getPokemons,
  getPokemonByNameOrId,
  getSpeciesByNameOrId,
  getEvolutionChainByNameOrId,
};
