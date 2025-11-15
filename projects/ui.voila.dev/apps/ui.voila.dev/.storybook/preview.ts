import type { Preview } from "@storybook/react-vite";
import "./styles.css";
import { withMode } from "./decorators/with-mode";
import { withTheme } from "./decorators/with-theme";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		mode: {
			description: "Mode",
			defaultValue: "light",
			toolbar: {
				title: "Mode",
				icon: "moon",
				items: ["light", "dark"],
			},
		},
		theme: {
			description: "Theme",
			defaultValue: "default",
			toolbar: {
				title: "Theme",
				icon: "paintbrush",
				items: ["default", "ocean"],
			},
		},
	},
	decorators: [withMode, withTheme],
};

export default preview;
