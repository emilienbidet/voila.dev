import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@voila.dev/ui/components/badge";
import { Breadcrumb } from "@voila.dev/ui/components/breadcrumb";
import {
	ChevronRight,
	ChevronsRight,
	Component,
	Home,
	Minus,
	Route,
	Slash,
} from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Breadcrumb",
	component: Breadcrumb.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Breadcrumb.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	),
};

export const WithIcons: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">
							<Home className="size-4" />
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight className="size-4" />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">
							<Home className="size-4" />
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link
							href="#components"
							className="flex items-center gap-2"
						>
							<Component className="size-4" /> Components
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight className="size-4" />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page className="flex items-center gap-2">
							<Route className="size-4" /> Breadcrumb
						</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
	),
};

export const CustomSeparators: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<Slash />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<Slash />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<Minus />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<Minus />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
	),
};

export const WithBackground: Story = {
	render: () => (
		<Breadcrumb.Root className="rounded-lg bg-secondary px-4 py-1.5">
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator>
					<ChevronsRight />
				</Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator>
					<ChevronsRight />
				</Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	),
};

export const WithBadges: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">
							<Badge variant="secondary" className="bg-background">
								Home
							</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">
							<Badge variant="secondary" className="bg-background">
								Components
							</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>
							<Badge>Breadcrumb</Badge>
						</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">
							<Badge variant="outline">Home</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">
							<Badge variant="outline">Components</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>
							<Badge>Breadcrumb</Badge>
						</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">
							<Badge variant="secondary">Home</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#components">
							<Badge variant="secondary">Components</Badge>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator>
						<ChevronsRight />
					</Breadcrumb.Separator>
					<Breadcrumb.Item>
						<Breadcrumb.Page>
							<Badge>Breadcrumb</Badge>
						</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
	),
};

export const WithEllipsis: Story = {
	render: () => (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#">Library</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Ellipsis />
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="#components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	),
};
