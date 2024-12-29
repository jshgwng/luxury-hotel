import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '/',
    resolve: {
        alias: {
            '@':path.resolve(__dirname,'./src'),
            '@assets': path.resolve(__dirname,'./src/assets'),
            '@styles':path.resolve(__dirname,'./src/styles'),
            '@js':path.resolve(__dirname,'./src/js'),
        }
    },

    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        manifest: true,
        rollupOptions:{
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1]
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)){
                        extType = 'img'
                    } else if (/woff|woff2|eot|tff|otf/i.test(extType)){
                        extType = 'fonts'
                    }
                    return `assets/${extType}/[name]-[hash][extname]`
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
            }
        }
    }
})