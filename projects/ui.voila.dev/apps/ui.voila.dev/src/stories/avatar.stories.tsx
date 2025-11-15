import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@voila.dev/ui/components/avatar";
import { AvatarGroup } from "@voila.dev/ui/components/avatar-group";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";

const meta = {
	title: "UI/Avatar",
	component: Avatar.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Avatar.Root>
			<Avatar.Image src={avatar1} />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	),
};

export const Fallback: Story = {
	render: () => (
		<Avatar.Root>
			<Avatar.Image src="https://invalid-url.png" alt="Invalid" />
			<Avatar.Fallback>EB</Avatar.Fallback>
		</Avatar.Root>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar.Root className="size-8">
				<Avatar.Image src={avatar1} />
				<Avatar.Fallback>EB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root className="size-12">
				<Avatar.Image src={avatar1} />
				<Avatar.Fallback>EB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root className="size-16">
				<Avatar.Image src={avatar1} />
				<Avatar.Fallback>EB</Avatar.Fallback>
			</Avatar.Root>
		</div>
	),
};

export const Group: Story = {
	render: () => (
		<AvatarGroup>
			<Avatar.Root>
				<Avatar.Image src={avatar1} />
				<Avatar.Fallback>EB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root>
				<Avatar.Image src={avatar2} />
				<Avatar.Fallback>JD</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root>
				<Avatar.Image src="https://invalid-url.png" alt="Invalid" />
				<Avatar.Fallback>AB</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root>
				<Avatar.Image src={avatar3} />
				<Avatar.Fallback>CD</Avatar.Fallback>
			</Avatar.Root>
		</AvatarGroup>
	),
};
