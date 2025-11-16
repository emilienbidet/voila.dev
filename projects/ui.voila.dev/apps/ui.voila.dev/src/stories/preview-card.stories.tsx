import type { Meta, StoryObj } from "@storybook/react-vite";
import { PreviewCard } from "@voila.dev/ui/components/preview-card";

const meta = {
	title: "UI/PreviewCard",
	component: PreviewCard.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof PreviewCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<PreviewCard.Root>
			<p>
				The principles of good{" "}
				<PreviewCard.Trigger
					className="font-medium underline"
					href="https://en.wikipedia.org/wiki/Typography"
				>
					typography
				</PreviewCard.Trigger>{" "}
				remain into the digital age.
			</p>
			<PreviewCard.Content>
				<p>
					<strong>Typography</strong> is the art and science of arranging type
					to make written language clear, visually appealing, and effective in
					communication.
				</p>
			</PreviewCard.Content>
		</PreviewCard.Root>
	),
};

export const WithImage: Story = {
	render: () => (
		<PreviewCard.Root>
			<p>
				All you need to know about{" "}
				<PreviewCard.Trigger className="font-medium underline">
					Bitcoin
				</PreviewCard.Trigger>
			</p>
			<PreviewCard.Content>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/langfr-500px-Bitcoin_logo.svg.png"
					alt="Bitcoin Logo"
					className="bg-white p-2 border rounded-md mb-2"
				/>
				<p>
					Bitcoin is a digital currency that allows you to send and receive
					payments online without intermediaries.
				</p>
			</PreviewCard.Content>
		</PreviewCard.Root>
	),
};
