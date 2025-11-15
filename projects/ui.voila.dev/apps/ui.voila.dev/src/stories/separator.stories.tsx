import { Separator } from "@voila.dev/ui/components/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "UI/Separator",
	component: Separator,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	render: () => (
		<div className="w-80 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">Section Title</h4>
				<p className="text-muted-foreground mt-2 text-sm">Content goes here.</p>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Another Section</h4>
				<p className="text-muted-foreground mt-2 text-sm">More content here.</p>
			</div>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="flex h-20 items-center gap-4">
			<div>Left content</div>
			<Separator orientation="vertical" />
			<div>Right content</div>
		</div>
	),
};

export const WithText: Story = {
	render: () => (
		<div className="w-80 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">Section Title</h4>
				<p className="text-muted-foreground mt-2 text-sm">Content goes here.</p>
			</div>
			<div className="flex items-center gap-4">
				<Separator className="shrink" />
				<span className="text-muted-foreground whitespace-nowrap text-xs">
					OR
				</span>
				<Separator className="shrink" />
			</div>
			<div>
				<h4 className="text-sm font-medium leading-none">Another Section</h4>
				<p className="text-muted-foreground mt-2 text-sm">More content here.</p>
			</div>
		</div>
	),
};

export const Multiple: Story = {
	render: () => (
		<div className="w-80 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">First Section</h4>
				<p className="text-muted-foreground mt-2 text-sm">
					Content in the first section.
				</p>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Second Section</h4>
				<p className="text-muted-foreground mt-2 text-sm">
					Content in the second section.
				</p>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Third Section</h4>
				<p className="text-muted-foreground mt-2 text-sm">
					Content in the third section.
				</p>
			</div>
		</div>
	),
};
