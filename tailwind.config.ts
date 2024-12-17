import type { Config } from "tailwindcss"

const config: Config = {
  important: true,
  content: ["./src/component/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter), system-ui, sans-serif"],
        hiraKaku: ["HiraKakuPro, var(--font-noto-sans-jp), system-ui, sans-serif"]
      },
      boxShadow: {
        boxShadow_1: "2px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        boxShadow_2: "0px 2px 6px 0px #00000026"
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
export default config
