import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "@voila.dev/ui/components/table";

const meta = {
	title: "UI/Table",
	component: Table.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Table.Root>
			<Table.Caption>A list of recent invoices.</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head>Invoice</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Method</Table.Head>
					<Table.Head>Amount</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell className="font-medium">INV001</Table.Cell>
					<Table.Cell>Paid</Table.Cell>
					<Table.Cell>Credit Card</Table.Cell>
					<Table.Cell>$250.00</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell className="font-medium">INV002</Table.Cell>
					<Table.Cell>Pending</Table.Cell>
					<Table.Cell>PayPal</Table.Cell>
					<Table.Cell>$150.00</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell className="font-medium">INV003</Table.Cell>
					<Table.Cell>Unpaid</Table.Cell>
					<Table.Cell>Bank Transfer</Table.Cell>
					<Table.Cell>$350.00</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};

export const WithFooter: Story = {
	render: () => (
		<Table.Root>
			<Table.Caption>A list of recent invoices.</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head>Invoice</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Method</Table.Head>
					<Table.Head>Amount</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell className="font-medium">INV001</Table.Cell>
					<Table.Cell>Paid</Table.Cell>
					<Table.Cell>Credit Card</Table.Cell>
					<Table.Cell>$250.00</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell className="font-medium">INV002</Table.Cell>
					<Table.Cell>Pending</Table.Cell>
					<Table.Cell>PayPal</Table.Cell>
					<Table.Cell>$150.00</Table.Cell>
				</Table.Row>
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.Cell colSpan={3}>Total</Table.Cell>
					<Table.Cell>$400.00</Table.Cell>
				</Table.Row>
			</Table.Footer>
		</Table.Root>
	),
};

export const SelectableRows: Story = {
	render: () => (
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head className="w-12">
						<input type="checkbox" />
					</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Role</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row data-state="selected">
					<Table.Cell>
						<input type="checkbox" defaultChecked />
					</Table.Cell>
					<Table.Cell className="font-medium">John Doe</Table.Cell>
					<Table.Cell>john.doe@example.com</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<input type="checkbox" />
					</Table.Cell>
					<Table.Cell className="font-medium">Jane Smith</Table.Cell>
					<Table.Cell>jane.smith@example.com</Table.Cell>
					<Table.Cell>User</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};

export const Responsive: Story = {
	render: () => (
		<Table.Root>
			<Table.Caption>Monthly sales report</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head>Month</Table.Head>
					<Table.Head>Sales</Table.Head>
					<Table.Head>Growth</Table.Head>
					<Table.Head>Revenue</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell className="font-medium">January</Table.Cell>
					<Table.Cell>1,234</Table.Cell>
					<Table.Cell>+12.5%</Table.Cell>
					<Table.Cell>$45,678</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell className="font-medium">February</Table.Cell>
					<Table.Cell>1,456</Table.Cell>
					<Table.Cell>+18.2%</Table.Cell>
					<Table.Cell>$52,345</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell className="font-medium">March</Table.Cell>
					<Table.Cell>1,678</Table.Cell>
					<Table.Cell>+15.3%</Table.Cell>
					<Table.Cell>$61,234</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};
