import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [
        react(),
        WindiCSS(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                "react",
                {
                    "react-spring": ["useSpring", ["animated", "motion"]],
                    dayjs: [["default", "time"]],
                    "@/module": ["log"],
                },
            ],
        }),
    ],
    server: {
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost/',
                rewrite: (path) => path.replace(/^\/api/, ""),
            }
        },
    },
});
