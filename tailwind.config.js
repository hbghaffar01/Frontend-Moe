/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFF2F7",
        secondary: "#EDF5FE",
        info: "#EAEBEB",
        tertiary: "#D1D2D3",
        "grey-100": "#434445",
        "grey-200": "#9FA1A4",
        "primary-color": "#80C87B",
        "secondary-color": "#6D9FD7",
        "danger-color": "#ED1C24",
      },
      screens: {
        xs: "400px",
      },
    },
  },
};
