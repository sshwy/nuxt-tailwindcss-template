import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"
import colors from "tailwindcss/colors"

const config: Partial<Config> = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,

      // 1: sidebar background
      // 2: code background
      // 3: input background
      'vsc-bg-light-1': 'rgb(248, 248, 248)',
      'vsc-bg-light-2': '#ffffff',
      'vsc-bg-light-3': '#ffffff',
      'vsc-bg-dark-1': 'rgb(24, 24, 24)',
      'vsc-bg-dark-2': '#1f1f1f', // rgb(31, 31, 31)
      'vsc-bg-dark-3': '#313131',
      // 1: hover on sidebar item
      // 2: hover on setting item
      'vsc-bg-dark-hover-1': '#2a2d2e',
      'vsc-bg-dark-hover-2': 'rgba(42, 45, 46, 0.3)',
      'vsc-bg-light-hover-1': '#f2f2f2',
      'vsc-bg-light-hover-2': 'rgba(242, 242, 242, 0.3)',
      // selected but not active
      'vsc-bg-dark-inactive': '#37373d',
      'vsc-bg-light-inactive': 'e4e6f1',
      // 1: focus on sidebar item
      // 2: focus on setting item
      'vsc-bg-dark-focus-1': '#323232',
      'vsc-bg-dark-focus-2': 'rgba(42, 45, 46, 0.6)',
      'vsc-bg-light-focus-1': '#e8e8e8',
      'vsc-bg-light-focus-2': 'rgba(242, 242, 242, 0.6)',
      // container border
      'vsc-border-light': 'rgba(0, 0, 0, 0.1)',
      'vsc-border-dark': 'rgb(255 255 255 / 8%)',
      // 1: primary text color
      // 2: secondary text color
      // 0: title / strong / active text
      'vsc-text-light-1': '#3b3b3b',
      'vsc-text-light-2': 'rgba(0, 0, 0, 0.5)',
      'vsc-text-light-0': '#1f1f1f',
      'vsc-text-dark-1': '#cccccc',
      'vsc-text-dark-2': 'rgba(255, 255, 255, 0.5)',
      'vsc-text-dark-0': '#000000',
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ':root.dark': {
          backgroundColor: theme("colors.vsc-bg-dark-1"),
          color: theme("colors.vsc-text-dark-1")
        }
      })
    })
  ],
};

export default config;
