import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},

      colors: {
        placeholder: "#8D8B8B",

        romekan: {
          navbar: "#2F2F2F",
          brown: "#652A0E",
          blue: "#024E82",
          text: {
            100: "#BABABA",
            200: "#3E3E3E",
            300: "#383838",
          },
          error: {
            10: "#6A0101",
            20: "#FC3131",
            30: "#FEDCDC",
            40: "#FFEBEB",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

/* Made with 💙 By Stephen Adeniji
https://stephen-adeniji.vercel.app/ */
