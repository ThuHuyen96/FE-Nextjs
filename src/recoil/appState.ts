import { atom } from "recoil"

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: true,
})

export const drawerState = atom<boolean>({
  key: "drawerState",
  default: false,
})
