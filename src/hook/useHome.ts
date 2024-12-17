import { HomeApi } from "@/api/HomeApi"
import { IBannerHomeItem } from "@/type/Banner"
import { TMenuItem } from "@/type/Menu"
import { IPostHome } from "@/type/Post"
import { IProductHome } from "@/type/Product"
import { useQuery } from "@tanstack/react-query"

export const useGetMenus = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.menus"],
    queryFn: async (): Promise<TMenuItem[]> => {
      const res = await HomeApi.getMenus()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })

export const useGetConfig = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.config"],
    queryFn: async (): Promise<any> => {
      const res = await HomeApi.getConfig()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })

export const useHomeGetProducts = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.products"],
    queryFn: async (): Promise<IProductHome[]> => {
      const res = await HomeApi.getProducts()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })

export const useHomeGetPosts = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.posts"],
    queryFn: async (): Promise<IPostHome[]> => {
      const res = await HomeApi.getPosts()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })

export const useHomeGetBanners = (type: string, enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.banners"],
    queryFn: async (): Promise<IBannerHomeItem[]> => {
      const res = await HomeApi.getHomeBanners(type)
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })
