export type IPagination = {
    page: number
    size: number
    total: number
    pageCount: number
}

export type ITypePokemon = {
    name: string
    url: string
    image?: string
    id?: number
}

export type IQueryPokemon = {
    limit: number
    offset: number
}
