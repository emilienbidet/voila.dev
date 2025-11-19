import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationMenu } from "@voila.dev/ui/components/navigation-menu";
import { Circle, CircleCheck, CircleQuestionMark } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/NavigationMenu",
	component: NavigationMenu.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const components = [
	{
		title: "Alert Dialog",
		href: "#",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "#",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "#",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "#",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "#",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "#",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

function ListItem({
	title,
	children,
	href,
}: {
	title: string;
	children: React.ReactNode;
	href: string;
}) {
	return (
		<li>
			<NavigationMenu.Link href={href}>
				<div className="text-sm font-medium leading-none">{title}</div>
				<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
					{children}
				</p>
			</NavigationMenu.Link>
		</li>
	);
}

export const Default: Story = {
	render: () => (
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
					<NavigationMenu.Positioner>
						<NavigationMenu.Popup>
							<NavigationMenu.Content>
								<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenu.Link
											href="#"
											className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md"
										>
											<div className="mb-2 mt-4 text-lg font-medium">
												@voila.dev/ui
											</div>
											<p className="text-muted-foreground text-sm leading-tight">
												Beautifully designed components built with Base UI
												Components and Tailwind CSS.
											</p>
										</NavigationMenu.Link>
									</li>
									<ListItem href="#" title="Introduction">
										Re-usable components built using Radix UI and Tailwind CSS.
									</ListItem>
									<ListItem href="#" title="Installation">
										How to install dependencies and structure your app.
									</ListItem>
									<ListItem href="#" title="Typography">
										Styles for headings, paragraphs, lists...etc
									</ListItem>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Popup>
					</NavigationMenu.Positioner>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
					<NavigationMenu.Positioner>
						<NavigationMenu.Popup>
							<NavigationMenu.Content>
								<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{components.map((component) => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Popup>
					</NavigationMenu.Positioner>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="#">Docs</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>List</NavigationMenu.Trigger>
					<NavigationMenu.Positioner>
						<NavigationMenu.Popup>
							<NavigationMenu.Content>
								<ul className="grid w-[300px] gap-4">
									<li>
										<NavigationMenu.Link href="#">
											<div className="font-medium">Components</div>
											<div className="text-muted-foreground">
												Browse all components in the library.
											</div>
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link href="#">
											<div className="font-medium">Documentation</div>
											<div className="text-muted-foreground">
												Learn how to use the library.
											</div>
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link href="#">
											<div className="font-medium">Blog</div>
											<div className="text-muted-foreground">
												Read our latest blog posts.
											</div>
										</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Popup>
					</NavigationMenu.Positioner>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
					<NavigationMenu.Positioner>
						<NavigationMenu.Popup>
							<NavigationMenu.Content>
								<ul className="grid w-[200px] gap-4">
									<li>
										<NavigationMenu.Link href="#">
											Components
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link href="#">
											Documentation
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link href="#">Blocks</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Popup>
					</NavigationMenu.Positioner>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>
					<NavigationMenu.Positioner>
						<NavigationMenu.Popup>
							<NavigationMenu.Content>
								<ul className="grid w-[200px] gap-4">
									<li>
										<NavigationMenu.Link
											href="#"
											className="flex flex-row items-center gap-2"
										>
											<CircleQuestionMark />
											Backlog
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link
											href="#"
											className="flex flex-row items-center gap-2"
										>
											<Circle />
											To Do
										</NavigationMenu.Link>
									</li>
									<li>
										<NavigationMenu.Link
											href="#"
											className="flex flex-row items-center gap-2"
										>
											<CircleCheck />
											Done
										</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Popup>
					</NavigationMenu.Positioner>
				</NavigationMenu.Item>
			</NavigationMenu.List>
			<NavigationMenu.Positioner>
				<NavigationMenu.Popup />
			</NavigationMenu.Positioner>
		</NavigationMenu.Root>
	),
};
