import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",        // ✅ Required for Render deployment
    port: 8080,
    allowedHosts: ["appscrip-task-tarun.onrender.com"], // ✅ Add this line
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
