import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		alpinejs(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
