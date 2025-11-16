import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@voila.dev/ui/components/pagination";

const meta = {
	title: "UI/Pagination",
	component: Pagination.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Pagination.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Pagination.Root>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous href="#" />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">1</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#" isActive>
						2
					</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">3</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">10</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Next href="#" />
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	),
};

export const Simple: Story = {
	render: () => (
		<Pagination.Root>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous href="#" />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#" isActive>
						1
					</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">2</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">3</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Next href="#" />
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	),
};

export const WithEllipsis: Story = {
	render: () => (
		<Pagination.Root>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous href="#" />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">1</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">5</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#" isActive>
						6
					</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">7</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Link href="#">10</Pagination.Link>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Next href="#" />
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	),
};
