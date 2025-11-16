import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputOTP } from "@voila.dev/ui/components/input-otp";

const meta = {
	title: "UI/InputOTP",
	component: InputOTP.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof InputOTP.Root>;

export default meta;
type Story = StoryObj<typeof InputOTP.Root>;

export const Default: Story = {
	render: () => (
		<InputOTP.Root maxLength={6}>
			<InputOTP.Group>
				<InputOTP.Slot index={0} />
				<InputOTP.Slot index={1} />
				<InputOTP.Slot index={2} />
				<InputOTP.Slot index={3} />
			</InputOTP.Group>
		</InputOTP.Root>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<InputOTP.Root maxLength={6}>
			<InputOTP.Group>
				<InputOTP.Slot index={0} />
				<InputOTP.Slot index={1} />
				<InputOTP.Slot index={2} />
			</InputOTP.Group>
			<InputOTP.Separator />
			<InputOTP.Group>
				<InputOTP.Slot index={3} />
				<InputOTP.Slot index={4} />
				<InputOTP.Slot index={5} />
			</InputOTP.Group>
		</InputOTP.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<InputOTP.Root maxLength={6} disabled>
			<InputOTP.Group>
				<InputOTP.Slot index={0} />
				<InputOTP.Slot index={1} />
				<InputOTP.Slot index={2} />
				<InputOTP.Slot index={3} />
			</InputOTP.Group>
		</InputOTP.Root>
	),
};
