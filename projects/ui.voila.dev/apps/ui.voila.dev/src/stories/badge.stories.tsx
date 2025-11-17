import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@voila.dev/ui/components/badge";
import { Button } from "@voila.dev/ui/components/button";
import {
	AtSign,
	Bell,
	Check,
	CircleDashed,
	CircleDotDashed,
	Mail,
	MessageCircle,
	X,
} from "@voila.dev/ui/icons";
import avatar1 from "../assets/avatar-1.png";

const meta = {
	title: "UI/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Badge>Badge</Badge>,
};

export const Variants: Story = {
	render: () => (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	),
};

export const Status: Story = {
	render: () => (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Badge variant="secondary">
				<CircleDashed />
				Todo
			</Badge>
			<Badge className="bg-amber-500/15 dark:bg-amber-500/10 text-amber-500">
				<CircleDotDashed />
				In Progress
			</Badge>
			<Badge className="bg-green-500/15 dark:bg-green-500/10 text-green-500">
				<Check strokeWidth={2.5} />
				Done
			</Badge>
			<Badge className="bg-red-500/10 dark:bg-red-500/20 text-red-500">
				<X />
				Cancelled
			</Badge>
		</div>
	),
};

export const WithImage: Story = {
	render: () => (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Badge className="rounded-full ps-[3px]" variant="outline">
				<img
					src={avatar1}
					className="h-5 w-5 rounded-full"
					alt="avatar1"
					height={20}
					width={20}
				/>
				Avatar
			</Badge>
			<Badge className="rounded-full pe-[3px]" variant="outline">
				Avatar
				<img src={avatar1} className="h-5 w-5 rounded-full" alt="avatar1" />
			</Badge>
		</div>
	),
};

export const Indicator: Story = {
	render: () => (
		<div className="flex flex-wrap items-center justify-center gap-6">
			<Button size="icon" variant="outline" className="relative">
				<Bell />
				<Badge
					variant="destructive"
					className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
				/>
			</Button>
			<Button size="icon" variant="outline" className="relative">
				<Bell />
				<Badge
					variant="destructive"
					className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
				>
					5
				</Badge>
			</Button>
			<Button size="icon" variant="outline" className="relative">
				<Mail />
				<Badge
					variant="destructive"
					className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
				>
					99+
				</Badge>
			</Button>
			<Button size="icon" variant="outline" className="relative">
				<MessageCircle />
				<Badge
					variant="destructive"
					className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-5 min-w-5 p-0 px-0.5 rounded-full empty:h-2.5 empty:min-w-2.5"
				>
					<AtSign className="size-3" />
				</Badge>
			</Button>
		</div>
	),
};
