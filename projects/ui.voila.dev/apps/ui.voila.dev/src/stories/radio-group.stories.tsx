import { Label } from "@voila.dev/ui/components/label";
import { Radio } from "@voila.dev/ui/components/radio";
import { RadioGroup } from "@voila.dev/ui/components/radio-group";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

const meta = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1">
			<div className="flex items-center gap-2">
				<Radio value="option-1" id="option-1" />
				<Label htmlFor="option-1">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-2" id="option-2" />
				<Label htmlFor="option-2">Option 2</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-3" id="option-3" />
				<Label htmlFor="option-3">Option 3</Label>
			</div>
		</RadioGroup>
	),
};

export const WithLabel: Story = {
	render: () => (
		<RadioGroup defaultValue="fuji-apple" aria-labelledby="apples-caption">
			<div className="font-medium mb-2" id="apples-caption">
				Best apple
			</div>
			<div className="flex items-center gap-2">
				<Radio value="fuji-apple" id="fuji" />
				<Label htmlFor="fuji">Fuji</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="gala-apple" id="gala" />
				<Label htmlFor="gala">Gala</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="granny-smith-apple" id="granny-smith" />
				<Label htmlFor="granny-smith">Granny Smith</Label>
			</div>
		</RadioGroup>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1" disabled>
			<div className="flex items-center gap-2">
				<Radio value="option-1" id="option-1-disabled" />
				<Label htmlFor="option-1-disabled">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-2" id="option-2-disabled" />
				<Label htmlFor="option-2-disabled">Option 2</Label>
			</div>
		</RadioGroup>
	),
};

export const Controlled: Story = {
	render: () => {
		const [value, setValue] = React.useState("option-1");

		return (
			<div className="space-y-4">
				<RadioGroup
					value={value}
					onValueChange={(value) =>
						typeof value === "string" && setValue(value)
					}
				>
					<div className="flex items-center gap-2">
						<Radio value="option-1" id="controlled-1" />
						<Label htmlFor="controlled-1">Option 1</Label>
					</div>
					<div className="flex items-center gap-2">
						<Radio value="option-2" id="controlled-2" />
						<Label htmlFor="controlled-2">Option 2</Label>
					</div>
					<div className="flex items-center gap-2">
						<Radio value="option-3" id="controlled-3" />
						<Label htmlFor="controlled-3">Option 3</Label>
					</div>
				</RadioGroup>
				<div className="text-sm text-muted-foreground">Selected: {value}</div>
			</div>
		);
	},
};

export const Horizontal: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
			<div className="flex items-center gap-2">
				<Radio value="option-1" id="horizontal-1" />
				<Label htmlFor="horizontal-1">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-2" id="horizontal-2" />
				<Label htmlFor="horizontal-2">Option 2</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-3" id="horizontal-3" />
				<Label htmlFor="horizontal-3">Option 3</Label>
			</div>
		</RadioGroup>
	),
};
