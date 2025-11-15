import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Card } from "@voila.dev/ui/components/card";

const meta = {
	title: "UI/Card",
	component: Card.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card.Root className="w-[360px]">
			<Card.Header>
				<Card.Title>Plan</Card.Title>
				<Card.Description>
					Choose the plan that fits your needs.
				</Card.Description>
				<Card.Action>
					<Button variant="outline" size="sm">
						Change
					</Button>
				</Card.Action>
			</Card.Header>
			<Card.Content>
				<div className="text-sm">
					<div className="flex items-center justify-between">
						<span>Pro</span>
						<span className="font-medium">$19/mo</span>
					</div>
					<div className="text-muted-foreground text-xs">
						Billed monthly. Cancel anytime.
					</div>
				</div>
			</Card.Content>
			<Card.Footer className="justify-end gap-2 border-t">
				<Button variant="outline">Cancel</Button>
				<Button>Upgrade</Button>
			</Card.Footer>
		</Card.Root>
	),
};
