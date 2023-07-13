import netlify from "@astrojs/netlify";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: netlify(),
	experimental: {
		assets: true
	}
});
