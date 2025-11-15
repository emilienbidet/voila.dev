import type { Decorator } from "@storybook/react-vite";
import { useEffect } from "react";

const themeMap: Record<string, () => Promise<unknown>> = {
	default: () => import("@voila.dev/ui/styles/themes/default.css"),
};

export const withTheme: Decorator = (Story, context) => {
	const theme = context.globals.theme || "default";

	useEffect(() => {
		const loadTheme = themeMap[theme];
		if (loadTheme) {
			loadTheme();
		}
	}, [theme]);

	return Story();
};
