import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "JetBrains Mono",
				cssVariable: "--font-mono",
			},
		],
	},
});
