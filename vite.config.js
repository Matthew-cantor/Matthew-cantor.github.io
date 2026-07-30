import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// NOTE: For a GitHub *project* page (https://USER.github.io/REPO/),
// set `base` to "/REPO/". For a *user* page (https://USER.github.io/),
// keep it "/". Default below assumes a user page.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
