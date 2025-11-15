import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Empty } from "@voila.dev/ui/components/empty";
import { Input } from "@voila.dev/ui/components/input";
import { ArrowUpRightIcon, InboxIcon, SearchIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Empty",
	component: Empty.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Empty.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Empty.Root>
			<Empty.Header>
				<Empty.Media variant="icon">
					<InboxIcon />
				</Empty.Media>
				<Empty.Title>No Projects Yet!</Empty.Title>
				<Empty.Description>
					You haven't created any projects yet. Get started by creating your
					first project.
				</Empty.Description>
			</Empty.Header>
			<Empty.Content>
				<Button>Create Project</Button>
				<Button variant="outline">Import Project</Button>
			</Empty.Content>
			<Button variant="link">
				Learn More
				<ArrowUpRightIcon />
			</Button>
		</Empty.Root>
	),
};

export const InputGroup: Story = {
	render: () => (
		<Empty.Root>
			<Empty.Header>
				<Empty.Media variant="icon">
					<SearchIcon />
				</Empty.Media>
				<Empty.Title>No results found</Empty.Title>
				<Empty.Description>
					Try adjusting your search or filter criteria.
				</Empty.Description>
			</Empty.Header>
			<Empty.Content>
				<Input placeholder="Search..." />
				<Button>Search</Button>
			</Empty.Content>
		</Empty.Root>
	),
};
