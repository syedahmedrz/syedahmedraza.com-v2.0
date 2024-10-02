/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pri-dark": "#020617",
        "sec-dark": "#0f172a",
        "ter-dark": "#1e293b",
        pri: "rgba(106, 90, 205, 0.9)",
      },
      animation: {
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [],
};
