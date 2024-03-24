const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: "rgba(119, 34, 132, 1)",
          "purple-light": "rgba(221, 190, 223, 1)",
          "purple-thin-light": "rgba(254, 243, 255, 1)",
          "purple-ultra-light": "rgba(249, 239, 250, 1)",
          "grey-text-light": "rgba(54, 54, 54, 1)",
          "grey-text": "rgba(51, 51, 51, 1)",
          "grey-text-ultra-light": "rgba(131, 131, 131, 1)",
          "grey-bg-light": "rgba(246, 246, 246, 1)",
        },
      },
      fontSize: {
        "2xs": [
          "0.776rem",
          {
            lineHeight: "1.057rem",
          },
        ],
        "lg-19": [
          "1.219rem",
          {
            lineHeight: "1.621rem",
          },
        ],
        "3.2xl": [
          "2rem",
          {
            lineHeight: "2.724rem",
          },
        ],
        "5.4xl": [
          "3.438rem",
          {
            lineHeight: "4.681rem",
          },
        ],
        "4.8xl": [
          "2.688rem",
          {
            lineHeight: "3.575rem",
          },
        ],
        "2.4xl": [
          "1.75rem",
          {
            lineHeight: "2.38rem",
          },
        ],
        "2.2xl": [
          "1.625rem",
          {
            lineHeight: "2.188rem",
          },
        ],
        "sm-15": [
          "0.938rem",
          {
            lineHeight: "1.277rem",
          },
        ],
      },
    },
  },
};
