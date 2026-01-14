import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tutorials.daspete.at',

  server: {
    allowedHosts: true,
  },

  integrations: [
    starlight({
      title: 'DasPeTe Tutorials',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/daspete' }],

      customCss: ['./src/styles/global.css'],
      
      sidebar: [
        {
          label: 'Web development',
          items: [
            { label: 'Vue.js', autogenerate: { directory: 'webdev/vue' } },
          ]
        },
        {
          label: 'Game development',
          items: [
            {
              label: 'Unity',
              items: [
                { label: 'Quick tipps', autogenerate: { directory: 'gamedev/unity/quick-tipps' } },
                { label: 'Inventory system', autogenerate: { directory: 'gamedev/unity/inventory-system' } },
              ],
            },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
