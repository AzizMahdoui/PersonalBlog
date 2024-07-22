import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',       // 12px
        'sm': '.875rem',      // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '4rem',        // 64px
        // Add more custom sizes as needed
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
        // Add more custom weights as needed
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
      },
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
      colors:{
          bluegray:{
            50:"#a4aab5",
            100:"#8b94a0",
            200:"#677283",
            300:"#505d70",
            400:"#39495d",
            500:"#172c42",
            600:"#121a25",
            700:"#10171f",
            800:"#0b1016",
            900:"#070a0f"

          },
          gray:{
            50:"#808080",
            100:"#7a7b7c",
            200:"#5d626b",
            300:"#515964",
            400:"#404b59",
            500:"#2f3d4f",
            600:"#1d3045",
            700:"#172c42",
            
          },
          red:{
            50:"#8b5b57",
            100:"#78423f",
            200:"#6e3633",
            300:"#632a28",
            400:"#4f0f13",
            500:"#450003",
            },
            purple:{
              50:"#5b3044",
              100:"#4d1332",
              200:"#450029",
              300:"#3f0326",
              400:"#29091a",
              500:"#1c0611",
            }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
