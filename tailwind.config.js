/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#090f40",
        gold: {
          "100": "rgba(255, 203, 0, 0)",
          "200": "rgba(255, 203, 0, 0.5)",
        },
        white: "#fff",
        royalblue: "rgba(57, 109, 242, 0)",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.2)",
          "200": "rgba(217, 217, 217, 0)",
        },
        limegreen: "#24de06",
        yellow: "#faff00",
        red: "#ff0000",
        palegoldenrod: {
          "100": "#eaeba7",
          "200": "#ebdda7",
        },
        cornflowerblue: "#7289d9",
        darkslateblue: "rgba(63, 69, 108, 0.57)",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "roboto-flex": "'Roboto Flex'",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
        "46xl": "65px",
        "7xl-5": "26.5px",
        "111xl": "130px",
        xl: "20px",
      },
    },
    fontSize: {
      "45xl": "64px",
      xl: "20px",
      "3xl": "22px",
      "5xl": "24px",
      "63xl": "82px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
