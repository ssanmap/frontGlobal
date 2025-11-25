// tailwind.config.js
export default {
  content: ["./components/**/*.{vue,js,ts}", "./pages/**/*.vue", "./app.vue"],
  theme: {
    extend: {
      colors: {
        'g66-blue': '#2557D6',   // header bg
        'g66-green': '#20C997',  // chip PERSONAS
        'g66-navy': '#0B3B2E',   // texto dark en chip
        'g66-muted': '#4A4A4A',  // textos secundarios (darkened for contrast)
        'g66-panel': '#F8F9FB',  // panel gris de la sección
      },
      spacing: {
        // valores exactos del Figma que no están en la escala default
        '55px': '55px',
        '57px': '57px',
        '64px': '64px',
      },
      borderRadius: {
        'pill': '9999px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    }
  }
}
