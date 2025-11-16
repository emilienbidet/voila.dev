import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@voila.dev/ui/components/label";
import { RadioGroup } from "@voila.dev/ui/components/radio-group";
import {
	AppleIcon,
	BananaIcon,
	CherryIcon,
	CircleCheckIcon,
} from "lucide-react";

const meta = {
	title: "UI/RadioGroup",
	component: RadioGroup.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="option-1">
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-1" id="option-1" />
				<Label htmlFor="option-1">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-2" id="option-2" />
				<Label htmlFor="option-2">Option 2</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-3" id="option-3" />
				<Label htmlFor="option-3">Option 3</Label>
			</div>
		</RadioGroup.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="option-1" className="flex flex-row gap-4">
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-1" id="vertical-1" />
				<Label htmlFor="vertical-1">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-2" id="vertical-2" />
				<Label htmlFor="vertical-2">Option 2</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroup.Item value="option-3" id="vertical-3" />
				<Label htmlFor="vertical-3">Option 3</Label>
			</div>
		</RadioGroup.Root>
	),
};

export const Size: Story = {
	render: () => (
		<div className="space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Small</div>
				<RadioGroup.Root defaultValue="sm-1">
					<div className="flex items-center gap-2">
						<RadioGroup.Item size="sm" value="sm-1" id="size-sm-1" />
						<Label htmlFor="size-sm-1">Small option</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroup.Item size="sm" value="sm-2" id="size-sm-2" />
						<Label htmlFor="size-sm-2">Small option</Label>
					</div>
				</RadioGroup.Root>
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Default</div>
				<RadioGroup.Root defaultValue="default-1">
					<div className="flex items-center gap-2">
						<RadioGroup.Item value="default-1" id="size-default-1" />
						<Label htmlFor="size-default-1">Default option</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroup.Item value="default-2" id="size-default-2" />
						<Label htmlFor="size-default-2">Default option</Label>
					</div>
				</RadioGroup.Root>
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Large</div>
				<RadioGroup.Root defaultValue="lg-1">
					<div className="flex items-center gap-2">
						<RadioGroup.Item size="lg" value="lg-1" id="size-lg-1" />
						<Label htmlFor="size-lg-1">Large option</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroup.Item size="lg" value="lg-2" id="size-lg-2" />
						<Label htmlFor="size-lg-2">Large option</Label>
					</div>
				</RadioGroup.Root>
			</div>
		</div>
	),
};

export const Color: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="default">
			<div className="flex items-center gap-3">
				<RadioGroup.Item value="default" id="color-r1" />
				<Label htmlFor="color-r1">Default</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroup.Item
					value="red"
					id="color-r2"
					className="[&_svg]:fill-red-500 [&_svg]:stroke-red-500 border-red-400"
				/>
				<Label htmlFor="color-r2">Red</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroup.Item
					value="blue"
					id="color-r3"
					className="[&_svg]:fill-blue-500 [&_svg]:stroke-blue-500 border-blue-400"
				/>
				<Label htmlFor="color-r3">Blue</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroup.Item
					value="green"
					id="color-r4"
					className="[&_svg]:fill-green-500 [&_svg]:stroke-green-500 border-green-400"
				/>
				<Label htmlFor="color-r4">Green</Label>
			</div>
		</RadioGroup.Root>
	),
};

const fruits = [
	{
		name: "Apple",
		value: "apple",
		icon: AppleIcon,
		defaultChecked: true,
	},
	{
		name: "Banana",
		value: "banana",
		icon: BananaIcon,
	},
	{
		name: "Cherry",
		value: "cherry",
		icon: CherryIcon,
		defaultChecked: true,
	},
];

export const Cards: Story = {
	render: () => (
		<RadioGroup.Root
			defaultValue={fruits[0].value}
			className="flex items-center gap-6"
		>
			{fruits.map((fruit) => (
				<RadioPrimitive.Root
					key={fruit.value}
					value={fruit.value}
					data-slot="checkbox"
					className="outline rounded-lg p-3 relative data-checked:outline-primary data-checked:outline-2 data-checked:bg-primary/5"
				>
					<fruit.icon />
					<RadioPrimitive.Indicator
						data-slot="checkbox-indicator"
						className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
					>
						<CircleCheckIcon className="size-7 fill-primary text-primary-foreground" />
					</RadioPrimitive.Indicator>
				</RadioPrimitive.Root>
			))}
		</RadioGroup.Root>
	),
};
