import { IQueryPokemon } from "@/type/App"
import { defaultApiClient } from "@/util/ApiClient"

const getPokemon = async (query: IQueryPokemon) => {
  return await defaultApiClient.get(`/v2/pokemon?limit=${query?.limit || 20}&offset=${query?.offset}`)
}

const getPokemonByType = async (type: string) => {
  return await defaultApiClient.get(`/v2/type/${type}`)
}

export const HomeApi = {
  getPokemon,
  getPokemonByType
}
