import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd, KbdGroup } from "@voila.dev/ui/components/kbd";

const meta = {
	title: "UI/Kbd",
	component: Kbd,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Ctrl + S",
	},
};

export const SingleKey: Story = {
	render: () => (
		<div className="flex flex-col items-start gap-4">
			<Kbd>Ctrl</Kbd>
			<Kbd>Space</Kbd>
		</div>
	),
};

export const Group: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>Ctrl</Kbd>
			<span>+</span>
			<Kbd>B</Kbd>
		</KbdGroup>
	),
};

export const InText: Story = {
	render: () => (
		<div className="flex flex-col gap-4 text-sm">
			<p>
				Press{" "}
				<KbdGroup>
					<Kbd>Ctrl + C</Kbd>
				</KbdGroup>{" "}
				to copy
			</p>
			<p>
				Press{" "}
				<KbdGroup>
					<Kbd>Ctrl + V</Kbd>
				</KbdGroup>{" "}
				to paste
			</p>
			<p>
				Use <Kbd>Esc</Kbd> to close dialogs
			</p>
			<p>
				Press{" "}
				<KbdGroup>
					<Kbd>Alt + Tab</Kbd>
				</KbdGroup>{" "}
				to switch windows
			</p>
		</div>
	),
};
