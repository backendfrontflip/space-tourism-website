import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/space-tourism-website/", // Set base path for GitHub Pages
  plugins: [react()],
  server: {
    mimeTypes: {
      "text/css": [".css"], // Ensure CSS is served correctly
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
