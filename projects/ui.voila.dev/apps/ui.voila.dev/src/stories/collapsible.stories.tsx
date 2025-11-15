import type { Meta, StoryObj } from "@storybook/react-vite";
import { Collapsible } from "@voila.dev/ui/components/collapsible";
import { ChevronDownIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Collapsible",
	component: Collapsible.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Collapsible.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible.Root className="w-md">
			<Collapsible.Trigger className="flex items-center gap-2">
				<span>Toggle content</span>
				<ChevronDownIcon className="size-4 open:rotate-180" />
			</Collapsible.Trigger>
			<Collapsible.Panel>
				This is collapsible content that can be shown or hidden.
			</Collapsible.Panel>
		</Collapsible.Root>
	),
};
