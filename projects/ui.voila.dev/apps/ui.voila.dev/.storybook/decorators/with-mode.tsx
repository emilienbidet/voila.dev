import type { Decorator } from "@storybook/react-vite";

export const withMode: Decorator = (Story, context) => {
	const body =
		document.getElementsByTagName("body")[0] || document.documentElement;
	if (context.globals.mode === "dark") {
		body.classList.add("dark");
	} else {
		body.classList.remove("dark");
	}
	return Story();
};
