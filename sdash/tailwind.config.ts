import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#876AFE",
        yellow: "#FFBC02",
        blue: "#2F70F2",
        grey: "#A8A8A8",
        violett: "#282541",
        "my-blue": "#111C44",
        "my-black": "#121212",
        whitesmoke: "#E3E3E3",
      },
      fontFamily: {
        roboto: "roboto",
      },
    },
  },
  plugins: [],
};
export default config;
