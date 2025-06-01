import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        laserPurple: "#B3EAFB",
        laserPurpleLight: "#EAF8FC",
        laserPurple: "#9A92E0",
        laserPurpleLight: "#ECEBFF",
        laserYellow: "#FAD45C",
        laserYellowLight: "#FEF9D8",
      },
    },
  },
  plugins: [],
};
export default config;
