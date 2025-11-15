import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@voila.dev/ui/components/toggle";
import { BoldIcon, BookmarkIcon, UnderlineIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Toggle",
	component: Toggle,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Toggle>
			<BoldIcon />
		</Toggle>
	),
};

export const Pressed: Story = {
	render: () => (
		<Toggle defaultPressed>
			<BoldIcon />
		</Toggle>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="grid gap-4">
			<Toggle disabled>
				<BoldIcon />
			</Toggle>
			<Toggle disabled defaultPressed>
				<UnderlineIcon />
			</Toggle>
		</div>
	),
};

export const WithIcon: Story = {
	render: () => (
		<Toggle>
			<BookmarkIcon className="group-data-pressed:fill-yellow-500" />
			Bookmark
		</Toggle>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="grid gap-4 items-start">
			<Toggle size="sm">Small</Toggle>
			<Toggle size="default">Default</Toggle>
			<Toggle size="lg">Large</Toggle>
		</div>
	),
};
