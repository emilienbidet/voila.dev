import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	async viteFinal(config) {
		const tailwindcss = (await import("@tailwindcss/vite")).default;
		config.plugins = [...(config.plugins ?? []), tailwindcss()];
		return config;
	},
};
export default config;
