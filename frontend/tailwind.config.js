/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "24/25": "96%",
      },
      height: {
        "calc-100-minus-20": "calc(100vh - 80px)",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        "light-element-gray1": "#737373",
        "light-fg-black": "#0C0C0C",
        "dark-black": "#1b1b1b",
        "dark-element-yellow": "#ffba02",
        "dark-element-gray1": "#3d3d3d",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-drag": {
            "-webkit-user-drag": "none",
            "user-drag": "none",
            "pointer-events": "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
