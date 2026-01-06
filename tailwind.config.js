/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#041626", // Deep Dark Blue
        card: "#162A3B", // Lighter Blue/Gray for cards
        primary: "#00BE76", // Gold
        secondary: "#FF3D00", // Red/Orange for notification
        accent: "#29B6F6", // Cyan/Blue for buttons
        text: "#FFFFFF", // White text
        textGray: "#90A4AE", // Gray text
      },
    },
  },
  plugins: [],
};
