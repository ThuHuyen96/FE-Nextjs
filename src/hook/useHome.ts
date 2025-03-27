import { HomeApi } from "@/api/HomeApi"
import { IQueryPokemon, ITypePokemon } from "@/type/App"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetPokemon = (query: IQueryPokemon) =>
  useQuery({
    queryKey: ["home.pokemon", query],
    queryFn: async (): Promise<{count: number, next: string, previous: string, results: ITypePokemon[]}> => {
      const res = await HomeApi.getPokemon(query)
      const results = res.data.results
      const detailedPokemon = await Promise.all(
        results.map(async (pokemon: ITypePokemon) => {
          const detailResponse = await axios.get(pokemon.url)
          return {
            name: detailResponse.data.name,
            url: pokemon.url,
            image: detailResponse.data.sprites.other["official-artwork"].front_default,
            id: detailResponse.data.id
          }
        }),
      )
      return {...res.data, results: detailedPokemon}
    },
    refetchOnWindowFocus: false,
  })

  export const useGetPokemonByType = (type: string, enabled: boolean) => useQuery({
    queryKey: ["home.pokemon_type", type],
    queryFn: async (): Promise<ITypePokemon[]> => {
      const res = await HomeApi.getPokemonByType(type)
      const pokemons = res.data.pokemon
      const detailedPokemon = await Promise.all(
        pokemons.map(async (pokemon: {pokemon: ITypePokemon, slot: number}) => {
          const detailResponse = await axios.get(pokemon.pokemon.url)
          return {
            name: detailResponse.data.name,
            url: pokemon.pokemon.url,
            image: detailResponse.data.sprites.other["official-artwork"].front_default,
            id: detailResponse.data.id
          }
        }),
      )
      return detailedPokemon
    },
    enabled,
    refetchOnWindowFocus: false,
  })
