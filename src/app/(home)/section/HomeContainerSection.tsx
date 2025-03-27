"use client"

import { HomeApi } from "@/api/HomeApi"
import { useGetPokemon } from "@/hook/useHome"
import { ITypePokemon } from "@/type/App"
import { useQueries, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

type IProps = {
  types: ITypePokemon[]
}

export default function HomeContainerSection({ types }: IProps) {
  const [typeSelected, setTypeSelected] = useState<string[]>([])
  const [offset, setOffset] = useState(0)
  const limit = 24
  const { data: dataPokemon, isLoading } = useGetPokemon({ limit: limit, offset: offset })
  const [pokemons, setPokemons] = useState<ITypePokemon[]>([])
  const queryClient = useQueryClient()

  const typeQueries = useQueries({
    queries: typeSelected.map((type) => ({
      queryKey: ["home.pokemon_type", type],
      queryFn: async (): Promise<ITypePokemon[]> => {
        const res = await HomeApi.getPokemonByType(type)
        const pokemons = res.data.pokemon
        const detailedPokemon = await Promise.all(
          pokemons.map(async (pokemon: { pokemon: ITypePokemon; slot: number }) => {
            const detailResponse = await axios.get(pokemon.pokemon.url)
            return {
              name: detailResponse.data.name,
              url: pokemon.pokemon.url,
              image: detailResponse.data.sprites.other["official-artwork"].front_default,
              id: detailResponse.data.id,
            }
          }),
        )
        return detailedPokemon
      },
      enabled: typeSelected.length > 0, // Chỉ chạy khi có type được chọn
      refetchOnWindowFocus: false,
    })),
  })

  useEffect(() => {
    if (dataPokemon && typeSelected.length === 0) {
      setPokemons(dataPokemon?.results)
    }
  }, [dataPokemon, typeSelected])

  const handleSelectType = (type: ITypePokemon) => {
    if (typeSelected.includes(type?.name)) {
      setTypeSelected(typeSelected.filter((item) => item !== type?.name))
    } else {
      setTypeSelected([...typeSelected, type?.name])
    }
  }

  useEffect(() => {
    if (typeSelected.length === 0) return

    const pokemonByType = typeQueries.map((query) => query.data || [])
    const isLoadingTypes = typeQueries.some((query) => query.isLoading)
    const isErrorTypes = typeQueries.some((query) => query.isError)

    if (isLoadingTypes || isErrorTypes || pokemonByType.some((data) => !data.length)) return

    const pokemonSets = pokemonByType.map((list) => new Set(list.map((p: ITypePokemon) => p.name)))

    const commonPokemonNames = pokemonSets.reduce((acc, curr) => {
      return new Set([...acc].filter((name) => curr.has(name)))
    }, pokemonSets[0])

    const filteredPokemon = pokemonByType
      .flat()
      .filter((pokemon: ITypePokemon) => commonPokemonNames.has(pokemon.name))
      .reduce((unique: ITypePokemon[], item: ITypePokemon) => {
        return unique.some((p) => p.name === item.name) ? unique : [...unique, item]
      }, [])

    setPokemons(filteredPokemon)
  }, [typeSelected, typeQueries])

  return (
    <div className="flex flex-col gap-4 px-10">
      <p className="text-center">Welcome to Pokemon world</p>
      <p>Total count: {dataPokemon?.count || 0}</p>
      <section className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <span>Types:</span>
        {types.map((type, index) => (
          <button
            className={`border p-4 rounded ${typeSelected.includes(type?.name) ? "bg-blue-500 text-white" : "bg-white"}`}
            key={index}
            onClick={() => handleSelectType(type)}>
            {type?.name}
          </button>
        ))}
      </section>
      <section className="flex flex-col justify-center">
        {isLoading ? <p className="text-center">Loading ...</p> : null}
        <div className="grid grid-cols-6 gap-16">
          {pokemons.map((pokemon, index) => (
            <div
              className="flex flex-col items-center justify-between"
              key={index}>
              <h3>{pokemon?.name || ""}</h3>
              <Image
                alt={pokemon?.name || ""}
                src={pokemon?.image || ""}
                width={35}
                height={53}
                className="w-20"
              />
              <p>Number: {pokemon?.id}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center gap-4 py-4">
        {offset !== 0 && (
          <button
            onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
            disabled={offset === 0}
            className="rounded bg-blue-500 px-4 py-2 text-white border">
            Previous
          </button>
        )}
        {typeSelected.length === 0 && limit >= pokemons.length && !isLoading && (
          <button
            onClick={() => setOffset((prev) => prev + limit)}
            className="rounded bg-blue-500 px-4 py-2 text-white border">
            Next
          </button>
        )}
      </div>
    </div>
  )
}