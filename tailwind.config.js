/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // กำหนดเส้นทางไฟล์ของคุณ
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // เพิ่ม DaisyUI เป็นปลั๊กอิน
  
  // plugins: [],
  // plugins: [require('@tailwindcss/aspect-ratio')],
}

