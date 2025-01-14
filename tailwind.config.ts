import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#FF4B4B',    // แดงสด
        secondary: '#4BC8FF',  // ฟ้าสดใส
        accent: '#FFD700',     // เหลืองทอง
      },
      fontFamily: {
        heading: ['Noto Sans Thai', 'sans-serif'],
        body: ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
