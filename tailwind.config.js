/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Add Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite plugin
  ],
};
