
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        cssCodeSplit: true,     // Split CSS to reduce main.css blocking
        minify: "esbuild",      // Faster + smaller output
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.endsWith(".css")) {
                        return "styles"; // Separate style chunk
                    }
                },
            },
        },
    },
    server: {
        proxy: {
            "/gurully": {
                target: "https://app.gurully.com",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/gurully/, ""), // IMPORTANT
            },

            "/bands": {
                target: "https://app.8bands.com",
                // target: "https://999873c608e2.ngrok-free.app/gurully/public",
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/bands/, ""),
            },
        },
    },
});
