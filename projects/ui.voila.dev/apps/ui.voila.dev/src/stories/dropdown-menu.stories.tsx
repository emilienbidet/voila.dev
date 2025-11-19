import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { DropdownMenu } from "@voila.dev/ui/components/dropdown-menu";
import {
	ChevronDown,
	Download,
	LogOut,
	Plus,
	Settings,
	User,
} from "@voila.dev/ui/icons";

const meta = {
	title: "UI/DropdownMenu",
	component: DropdownMenu.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DropdownMenu.Root>;

export default meta;
type Story = StoryObj<typeof DropdownMenu.Root>;

export const Default: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Open Menu <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<User />
						Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Settings />
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<LogOut />
						Logout
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithGroups: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Open Menu <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Account</DropdownMenu.Label>
						<DropdownMenu.Item>
							<User />
							Profile
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Settings />
							Settings
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Label>Actions</DropdownMenu.Label>
						<DropdownMenu.Item>
							<Plus />
							New Item
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Download />
							Download
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithCheckboxes: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						View Options <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.CheckboxItem checked>
						Show Status Bar
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem checked>
						Show Activity Bar
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem>Show Minimap</DropdownMenu.CheckboxItem>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithRadioGroup: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Theme <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.RadioGroup value="light">
						<DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="system">
							System
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithSubmenu: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						More Options <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<User />
						Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Settings />
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<Plus />
							More Tools
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Positioner>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>
									<Download />
									Export
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<LogOut />
									Import
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Positioner>
					</DropdownMenu.Sub>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const Destructive: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Actions <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<User />
						Edit Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Settings />
						Preferences
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item variant="destructive">
						<LogOut />
						Delete Account
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithShortcuts: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						File <ChevronDown />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<Plus />
						New File
						<DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Download />
						Open File
						<DropdownMenu.Shortcut>⌘O</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Settings />
						Preferences
						<DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};
