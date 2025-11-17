import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@voila.dev/ui/components/checkbox";
import { Label } from "@voila.dev/ui/components/label";

const meta = {
	title: "UI/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-3">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
			<div className="flex items-start gap-3">
				<Checkbox id="terms-2" defaultChecked />
				<div className="grid gap-2">
					<Label htmlFor="terms-2">Accept terms and conditions</Label>
					<p className="text-muted-foreground text-sm">
						By clicking this checkbox, you agree to the terms and conditions.
					</p>
				</div>
			</div>
			<div className="flex items-start gap-3">
				<Checkbox id="toggle" disabled />
				<Label htmlFor="toggle">Enable notifications</Label>
			</div>
		</div>
	),
};

export const WithCard: Story = {
	render: () => (
		<Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
			<Checkbox
				id="toggle-2"
				defaultChecked
				className="data-checked:border-blue-600 data-checked:bg-blue-600 data-checked:text-white dark:data-checked:border-blue-700 dark:data-checked:bg-blue-700"
			/>
			<div className="grid gap-1.5 font-normal">
				<p className="text-sm leading-none font-medium">Enable notifications</p>
				<p className="text-muted-foreground text-sm">
					You can enable or disable notifications at any time.
				</p>
			</div>
		</Label>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-3">
			<Checkbox defaultChecked />
			<Checkbox className="size-6 [&_svg]:size-4" defaultChecked />
			<Checkbox className="size-7 [&_svg]:size-4.5" defaultChecked />
		</div>
	),
};

export const Shapes: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-3">
				<Checkbox id="terms1" defaultChecked className="rounded-none size-5" />
				<Label htmlFor="terms1">Accept terms and conditions</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="terms2" defaultChecked className="size-5" />
				<Label htmlFor="terms2">Accept terms and conditions</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="terms3" defaultChecked className="rounded-full size-5" />
				<Label htmlFor="terms3">Accept terms and conditions</Label>
			</div>
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div className="flex items-center gap-3">
			<Checkbox
				defaultChecked
				className="size-5 data-checked:bg-blue-500 data-checked:border-blue-500"
			/>
			<Checkbox
				defaultChecked
				className="size-5 data-checked:bg-gray-200 data-checked:border-gray-200 data-checked:[&_svg]:text-black"
			/>
			<Checkbox
				defaultChecked
				className="size-5 data-checked:bg-red-500 data-checked:border-red-500"
			/>
			<Checkbox
				defaultChecked
				className="size-5 data-checked:bg-green-500 data-checked:border-green-500"
			/>
		</div>
	),
};

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<Checkbox id="unchecked" />
				<Label htmlFor="unchecked">Unchecked</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="checked" defaultChecked />
				<Label htmlFor="checked">Checked</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="disabled-unchecked" disabled />
				<Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="disabled-checked" disabled defaultChecked />
				<Label htmlFor="disabled-checked">Disabled checked</Label>
			</div>
			<div className="flex items-center gap-3">
				<Checkbox id="invalid" aria-invalid="true" />
				<Label htmlFor="invalid">Invalid</Label>
			</div>
		</div>
	),
};
