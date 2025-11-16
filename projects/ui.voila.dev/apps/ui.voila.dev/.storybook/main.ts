import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	async viteFinal(config) {
		const tailwindcss = (await import("@tailwindcss/vite")).default;
		return {
			...config,
			plugins: [...(config.plugins ?? []), tailwindcss()],
			build: {
				...config.build,
				rollupOptions: {
					...config.build?.rollupOptions,
					// Disable tree-shaking to work around Rollup bug with conditional expressions
					treeshake: false,
				},
			},
		};
	},
};
export default config;
