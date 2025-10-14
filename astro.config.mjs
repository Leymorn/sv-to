// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': new URL('./src', import.meta.url).pathname,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/src/styles/_main.scss" as *;`,
                },
            },
        },
    },

    integrations: [react(), tailwind(), icon()],
});
