import { defineConfig } from 'astro/config';
import turbolinks from '@astrojs/turbolinks';

// https://astro.build/config
export default defineConfig({
  integrations: [turbolinks()],
    vite: {
      ssr: {
        external: ["svgo"],
      },
    },
  })