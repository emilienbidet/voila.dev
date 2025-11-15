import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@voila.dev/ui/components/accordion";

const meta = {
	title: "UI/Accordion",
	component: Accordion.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Accordion.Root className="w-md">
			<Accordion.Item>
				<Accordion.HeaderTrigger>
					What is your return policy?
				</Accordion.HeaderTrigger>
				<Accordion.Panel>
					If you’re not satisfied with your purchase, you can return it within
					30 days for a full refund.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item>
				<Accordion.HeaderTrigger>
					How long does shipping take?
				</Accordion.HeaderTrigger>
				<Accordion.Panel>
					Standard shipping typically takes 3–5 business days, depending on your
					location.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item>
				<Accordion.HeaderTrigger>
					Do you offer customer support?
				</Accordion.HeaderTrigger>
				<Accordion.Panel>
					Yes, our team is available 7 days a week to help with any questions.
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion.Root>
	),
};
