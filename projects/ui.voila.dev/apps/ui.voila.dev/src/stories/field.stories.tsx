import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@voila.dev/ui/components/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
} from "@voila.dev/ui/components/field";
import { Input } from "@voila.dev/ui/components/input";
import { RadioGroup } from "@voila.dev/ui/components/radio-group";
import { Select } from "@voila.dev/ui/components/select";
import { Slider } from "@voila.dev/ui/components/slider";
import { Switch } from "@voila.dev/ui/components/switch";
import { Textarea } from "@voila.dev/ui/components/textarea";
import { useState } from "react";

const meta = {
	title: "UI/Field",
	component: Field,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldInput: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldSet>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="username">Username</FieldLabel>
						<Input id="username" type="text" placeholder="Max Leiter" />
						<FieldDescription>
							Choose a unique username for your account.
						</FieldDescription>
					</Field>
					<Field>
						<FieldLabel htmlFor="password">Password</FieldLabel>
						<FieldDescription>
							Must be at least 8 characters long.
						</FieldDescription>
						<Input id="password" type="password" placeholder="********" />
					</Field>
				</FieldGroup>
			</FieldSet>
		</div>
	),
};

export const FieldTextarea: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldSet>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="feedback">Feedback</FieldLabel>
						<Textarea
							id="feedback"
							placeholder="Your feedback helps us improve..."
							rows={4}
						/>
						<FieldDescription>
							Share your thoughts about our service.
						</FieldDescription>
					</Field>
				</FieldGroup>
			</FieldSet>
		</div>
	),
};

const departments = [
	{ value: "engineering", label: "Engineering" },
	{ value: "design", label: "Design" },
	{ value: "marketing", label: "Marketing" },
	{ value: "sales", label: "Sales" },
	{ value: "support", label: "Customer Support" },
	{ value: "hr", label: "Human Resources" },
	{ value: "finance", label: "Finance" },
	{ value: "operations", label: "Operations" },
];

export const FieldSelect: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<Field>
				<FieldLabel>Department</FieldLabel>
				<Select.Root items={departments}>
					<Select.Trigger>
						<Select.Value placeholder="Choose department" />
					</Select.Trigger>
					<Select.Portal>
						<Select.Positioner>
							<Select.Content>
								<Select.List>
									<Select.Item value="engineering">Engineering</Select.Item>
									<Select.Item value="design">Design</Select.Item>
									<Select.Item value="marketing">Marketing</Select.Item>
									<Select.Item value="sales">Sales</Select.Item>
									<Select.Item value="support">Customer Support</Select.Item>
									<Select.Item value="hr">Human Resources</Select.Item>
									<Select.Item value="finance">Finance</Select.Item>
									<Select.Item value="operations">Operations</Select.Item>
								</Select.List>
							</Select.Content>
						</Select.Positioner>
					</Select.Portal>
				</Select.Root>
				<FieldDescription>
					Select your department or area of work.
				</FieldDescription>
			</Field>
		</div>
	),
};

export const FieldSlider: Story = {
	render: () => {
		const [value, setValue] = useState([200, 800]);
		return (
			<div className="w-full max-w-md">
				<Field>
					<FieldTitle>Price Range</FieldTitle>
					<FieldDescription>
						Set your budget range ($
						<span className="font-medium tabular-nums">{value[0]}</span> -{" "}
						<span className="font-medium tabular-nums">{value[1]}</span>).
					</FieldDescription>
					<Slider.Root
						value={value}
						onValueChange={(val) => setValue(val as number[])}
						max={1000}
						min={0}
						step={10}
						className="mt-2 w-full"
						aria-label="Price Range"
					>
						<Slider.Control>
							<Slider.Track>
								<Slider.Indicator />
							</Slider.Track>
							<Slider.Thumb index={0} />
							<Slider.Thumb index={1} />
						</Slider.Control>
					</Slider.Root>
				</Field>
			</div>
		);
	},
};

export const FieldFieldset: Story = {
	render: () => (
		<div className="w-full max-w-md space-y-6">
			<FieldSet>
				<FieldLegend>Address Information</FieldLegend>
				<FieldDescription>
					We need your address to deliver your order.
				</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="street">Street Address</FieldLabel>
						<Input id="street" type="text" placeholder="123 Main St" />
					</Field>
					<div className="grid grid-cols-2 gap-4">
						<Field>
							<FieldLabel htmlFor="city">City</FieldLabel>
							<Input id="city" type="text" placeholder="New York" />
						</Field>
						<Field>
							<FieldLabel htmlFor="zip">Postal Code</FieldLabel>
							<Input id="zip" type="text" placeholder="90502" />
						</Field>
					</div>
				</FieldGroup>
			</FieldSet>
		</div>
	),
};

export const FieldCheckbox: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup>
				<FieldSet>
					<FieldLegend variant="label">
						Show these items on the desktop
					</FieldLegend>
					<FieldDescription>
						Select the items you want to show on the desktop.
					</FieldDescription>
					<FieldGroup className="gap-3">
						<Field orientation="horizontal">
							<Checkbox.Root id="finder-pref-9k2-hard-disks-ljj" defaultChecked>
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel
								htmlFor="finder-pref-9k2-hard-disks-ljj"
								className="font-normal"
							>
								Hard disks
							</FieldLabel>
						</Field>
						<Field orientation="horizontal">
							<Checkbox.Root id="finder-pref-9k2-external-disks-1yg">
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel
								htmlFor="finder-pref-9k2-external-disks-1yg"
								className="font-normal"
							>
								External disks
							</FieldLabel>
						</Field>
						<Field orientation="horizontal">
							<Checkbox.Root id="finder-pref-9k2-cds-dvds-fzt">
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel
								htmlFor="finder-pref-9k2-cds-dvds-fzt"
								className="font-normal"
							>
								CDs, DVDs, and iPods
							</FieldLabel>
						</Field>
						<Field orientation="horizontal">
							<Checkbox.Root id="finder-pref-9k2-connected-servers-6l2">
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel
								htmlFor="finder-pref-9k2-connected-servers-6l2"
								className="font-normal"
							>
								Connected servers
							</FieldLabel>
						</Field>
					</FieldGroup>
				</FieldSet>
				<FieldSeparator />
				<Field orientation="horizontal">
					<Checkbox.Root id="finder-pref-9k2-sync-folders-nep" defaultChecked>
						<Checkbox.Indicator />
					</Checkbox.Root>
					<FieldContent>
						<FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
							Sync Desktop & Documents folders
						</FieldLabel>
						<FieldDescription>
							Your Desktop & Documents folders are being synced with iCloud
							Drive. You can access them from other devices.
						</FieldDescription>
					</FieldContent>
				</Field>
			</FieldGroup>
		</div>
	),
};

export const FieldRadio: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldSet>
				<FieldLabel>Subscription Plan</FieldLabel>
				<FieldDescription>
					Yearly and lifetime plans offer significant savings.
				</FieldDescription>
				<RadioGroup.Root defaultValue="monthly">
					<Field orientation="horizontal">
						<RadioGroup.Item value="monthly" id="plan-monthly" />
						<FieldLabel htmlFor="plan-monthly" className="font-normal">
							Monthly ($9.99/month)
						</FieldLabel>
					</Field>
					<Field orientation="horizontal">
						<RadioGroup.Item value="yearly" id="plan-yearly" />
						<FieldLabel htmlFor="plan-yearly" className="font-normal">
							Yearly ($99.99/year)
						</FieldLabel>
					</Field>
					<Field orientation="horizontal">
						<RadioGroup.Item value="lifetime" id="plan-lifetime" />
						<FieldLabel htmlFor="plan-lifetime" className="font-normal">
							Lifetime ($299.99)
						</FieldLabel>
					</Field>
				</RadioGroup.Root>
			</FieldSet>
		</div>
	),
};

export const FieldSwitch: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<Field orientation="horizontal">
				<FieldContent>
					<FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
					<FieldDescription>
						Enable multi-factor authentication. If you do not have a two-factor
						device, you can use a one-time code sent to your email.
					</FieldDescription>
				</FieldContent>
				<Switch id="2fa" />
			</Field>
		</div>
	),
};

export const FieldChoiceCard: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup>
				<FieldSet>
					<FieldLabel htmlFor="compute-environment-p8w">
						Compute Environment
					</FieldLabel>
					<FieldDescription>
						Select the compute environment for your cluster.
					</FieldDescription>
					<RadioGroup.Root defaultValue="kubernetes">
						<FieldLabel htmlFor="kubernetes-r2h">
							<Field orientation="horizontal">
								<FieldContent>
									<FieldTitle>Kubernetes</FieldTitle>
									<FieldDescription>
										Run GPU workloads on a K8s configured cluster.
									</FieldDescription>
								</FieldContent>
								<RadioGroup.Item value="kubernetes" id="kubernetes-r2h" />
							</Field>
						</FieldLabel>
						<FieldLabel htmlFor="vm-z4k">
							<Field orientation="horizontal">
								<FieldContent>
									<FieldTitle>Virtual Machine</FieldTitle>
									<FieldDescription>
										Access a VM configured cluster to run GPU workloads.
									</FieldDescription>
								</FieldContent>
								<RadioGroup.Item value="vm" id="vm-z4k" />
							</Field>
						</FieldLabel>
					</RadioGroup.Root>
				</FieldSet>
			</FieldGroup>
		</div>
	),
};

export const FieldGroupExample: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup>
				<FieldSet>
					<FieldLabel>Responses</FieldLabel>
					<FieldDescription>
						Get notified when ChatGPT responds to requests that take time, like
						research or image generation.
					</FieldDescription>
					<FieldGroup data-slot="checkbox-group">
						<Field orientation="horizontal">
							<Checkbox.Root id="push" defaultChecked disabled>
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel htmlFor="push" className="font-normal">
								Push notifications
							</FieldLabel>
						</Field>
					</FieldGroup>
				</FieldSet>
				<FieldSeparator />
				<FieldSet>
					<FieldLabel>Tasks</FieldLabel>
					<FieldDescription>
						Get notified when tasks you&apos;ve created have updates.{" "}
						<a href="#manage-tasks">Manage tasks</a>
					</FieldDescription>
					<FieldGroup data-slot="checkbox-group">
						<Field orientation="horizontal">
							<Checkbox.Root id="push-tasks">
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel htmlFor="push-tasks" className="font-normal">
								Push notifications
							</FieldLabel>
						</Field>
						<Field orientation="horizontal">
							<Checkbox.Root id="email-tasks">
								<Checkbox.Indicator />
							</Checkbox.Root>
							<FieldLabel htmlFor="email-tasks" className="font-normal">
								Email notifications
							</FieldLabel>
						</Field>
					</FieldGroup>
				</FieldSet>
			</FieldGroup>
		</div>
	),
};
