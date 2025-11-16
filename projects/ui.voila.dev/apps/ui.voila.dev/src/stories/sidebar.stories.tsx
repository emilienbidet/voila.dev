import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Sidebar } from "@voila.dev/ui/components/sidebar";
import { HomeIcon, InboxIcon, SettingsIcon, UserIcon } from "lucide-react";

const meta = {
	title: "UI/Sidebar",
	component: Sidebar.Root,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Sidebar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Sidebar.Provider>
			<Sidebar.Root>
				<Sidebar.Header>
					<Sidebar.Trigger />
				</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupLabel>Main Menu</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive>
										<HomeIcon />
										<span>Home</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<InboxIcon />
										<span>Inbox</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<UserIcon />
										<span>Profile</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<SettingsIcon />
										<span>Settings</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
				<Sidebar.Footer>
					<Button variant="outline" className="w-full">
						Sign Out
					</Button>
				</Sidebar.Footer>
			</Sidebar.Root>
			<Sidebar.Inset>
				<header className="flex h-16 items-center gap-4 border-b px-4">
					<Sidebar.Trigger />
					<h1 className="text-lg font-semibold">Dashboard</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="grid gap-4">
						<div className="rounded-lg border p-4">
							<h2 className="text-lg font-semibold">Welcome</h2>
							<p className="text-sm text-muted-foreground">
								This is the main content area. The sidebar can be toggled using
								the button in the header.
							</p>
						</div>
					</div>
				</main>
			</Sidebar.Inset>
		</Sidebar.Provider>
	),
};

export const WithSubMenu: Story = {
	render: () => (
		<Sidebar.Provider>
			<Sidebar.Root>
				<Sidebar.Header>
					<Sidebar.Trigger />
				</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive>
										<HomeIcon />
										<span>Home</span>
									</Sidebar.MenuButton>
									<Sidebar.MenuSub>
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton isActive>
												<span>Overview</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton>
												<span>Analytics</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									</Sidebar.MenuSub>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<InboxIcon />
										<span>Inbox</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>
			<Sidebar.Inset>
				<header className="flex h-16 items-center gap-4 border-b px-4">
					<Sidebar.Trigger />
					<h1 className="text-lg font-semibold">Dashboard</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<h2 className="text-lg font-semibold">Content</h2>
						<p className="text-sm text-muted-foreground">
							This sidebar includes a submenu under the Home item.
						</p>
					</div>
				</main>
			</Sidebar.Inset>
		</Sidebar.Provider>
	),
};

export const Floating: Story = {
	render: () => (
		<Sidebar.Provider>
			<Sidebar.Root variant="floating">
				<Sidebar.Header>
					<Sidebar.Trigger />
				</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupLabel>Menu</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive>
										<HomeIcon />
										<span>Home</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<InboxIcon />
										<span>Inbox</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>
			<Sidebar.Inset>
				<header className="flex h-16 items-center gap-4 border-b px-4">
					<Sidebar.Trigger />
					<h1 className="text-lg font-semibold">Floating Sidebar</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							This sidebar uses the floating variant with rounded corners and
							shadow.
						</p>
					</div>
				</main>
			</Sidebar.Inset>
		</Sidebar.Provider>
	),
};

export const IconOnly: Story = {
	render: () => (
		<Sidebar.Provider defaultOpen={false}>
			<Sidebar.Root collapsible="icon">
				<Sidebar.Header>
					<Sidebar.Trigger />
				</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton tooltip="Home" isActive>
										<HomeIcon />
										<span>Home</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton tooltip="Inbox">
										<InboxIcon />
										<span>Inbox</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton tooltip="Settings">
										<SettingsIcon />
										<span>Settings</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>
			<Sidebar.Inset>
				<header className="flex h-16 items-center gap-4 border-b px-4">
					<Sidebar.Trigger />
					<h1 className="text-lg font-semibold">Icon Only Sidebar</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							When collapsed, the sidebar shows only icons. Hover over the icons
							to see tooltips.
						</p>
					</div>
				</main>
			</Sidebar.Inset>
		</Sidebar.Provider>
	),
};

export const WithBadges: Story = {
	render: () => (
		<Sidebar.Provider>
			<Sidebar.Root>
				<Sidebar.Header>
					<Sidebar.Trigger />
				</Sidebar.Header>
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupLabel>Notifications</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<InboxIcon />
										<span>Inbox</span>
										<Sidebar.MenuBadge>12</Sidebar.MenuBadge>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										<UserIcon />
										<span>Messages</span>
										<Sidebar.MenuBadge>3</Sidebar.MenuBadge>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>
			<Sidebar.Inset>
				<header className="flex h-16 items-center gap-4 border-b px-4">
					<Sidebar.Trigger />
					<h1 className="text-lg font-semibold">Sidebar with Badges</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu items can display badges to show counts or notifications.
						</p>
					</div>
				</main>
			</Sidebar.Inset>
		</Sidebar.Provider>
	),
};
