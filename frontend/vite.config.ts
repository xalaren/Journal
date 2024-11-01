import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 4002,
        proxy: {
            '/api': {
                target: 'http://localhost:4001',
            }
        },
        open: true,
    },
    build: {
        minify: false,
        cssMinify: false,
        emptyOutDir: true,
        outDir: '../LevelsCompletionTracker.WebApi/wwwroot',

        rollupOptions: {
            output: {
                chunkFileNames: "assets/ts/[name].ts",
                entryFileNames: "assets/js/[name].js",

                assetFileNames: ({ name }) => {
                    if (/\.css$/.test(name ?? "")) {
                        return 'assets/css/[name][extname]';
                    }

                    if (/\.woff\d*$/.test(name ?? "")) {
                        return 'assets/fonts/[name].[ext]';
                    }
                    return "assets/[name].[ext]";
                },
            },
        }
    },
})
