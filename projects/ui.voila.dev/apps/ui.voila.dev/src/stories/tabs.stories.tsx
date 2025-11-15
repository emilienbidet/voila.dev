import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@voila.dev/ui/components/tabs";

const meta = {
	title: "UI/Tabs",
	component: Tabs.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs.Root defaultValue="0" className="w-md">
			<Tabs.List>
				<Tabs.Tab value="0">Account</Tabs.Tab>
				<Tabs.Tab value="1">Password</Tabs.Tab>
				<Tabs.Tab value="2">Notifications</Tabs.Tab>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Panel value="0">Make changes to your account here.</Tabs.Panel>
			<Tabs.Panel value="1">Change your password here.</Tabs.Panel>
			<Tabs.Panel value="2">Manage your notifications here.</Tabs.Panel>
		</Tabs.Root>
	),
};
