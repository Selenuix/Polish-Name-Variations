// @ts-check
import {defineConfig} from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import compressor from 'astro-compressor';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind({applyBaseStyles: false}), robotsTxt(), compressor()]
});
