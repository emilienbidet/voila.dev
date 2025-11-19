import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@voila.dev/ui/components/alert";
import { CircleAlert, CircleCheck, TriangleAlert } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Alert",
	component: Alert.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Alert.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Alert.Root>
			<Alert.Title>Heads up!</Alert.Title>
			<Alert.Description>
				You can add components to your app using the library.
			</Alert.Description>
		</Alert.Root>
	),
};

export const WithIcon: Story = {
	render: () => (
		<Alert.Root>
			<CircleCheck />
			<Alert.Title>Success! Your changes have been saved</Alert.Title>
			<Alert.Description>
				Your changes have been saved successfully.
			</Alert.Description>
		</Alert.Root>
	),
};

export const WithoutDescription: Story = {
	render: () => (
		<Alert.Root>
			<CircleCheck />
			<Alert.Title>Success! Your changes have been saved</Alert.Title>
		</Alert.Root>
	),
};

export const Destructive: Story = {
	render: () => (
		<Alert.Root variant="destructive">
			<CircleAlert />
			<Alert.Title>Error</Alert.Title>
			<Alert.Description>
				Something went wrong. Please try again later.
			</Alert.Description>
		</Alert.Root>
	),
};

export const DestructiveWithDetails: Story = {
	render: () => (
		<Alert.Root variant="destructive">
			<TriangleAlert />
			<Alert.Title>Unable to process your payment.</Alert.Title>
			<Alert.Description>
				<p>Please verify your billing information and try again.</p>
				<ul className="list-disc pl-4">
					<li>Check your card details</li>
					<li>Ensure sufficient funds</li>
					<li>Verify billing address</li>
				</ul>
			</Alert.Description>
		</Alert.Root>
	),
};
