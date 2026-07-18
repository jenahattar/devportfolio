import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jenahattar.github.io",
  base: "/devportfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});