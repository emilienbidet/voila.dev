import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@voila.dev/ui/components/checkbox";
import { Field } from "@voila.dev/ui/components/field";
import { FieldGroup } from "@voila.dev/ui/components/field-group";
import { Input } from "@voila.dev/ui/components/input";
import { RadioGroup } from "@voila.dev/ui/components/radio-group";
import { Select } from "@voila.dev/ui/components/select";
import { Slider } from "@voila.dev/ui/components/slider";
import { Switch } from "@voila.dev/ui/components/switch";
import { Textarea } from "@voila.dev/ui/components/textarea";
import { useState } from "react";

const meta = {
	title: "UI/Field",
	component: Field.Root,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldInput: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldGroup.Set>
				<FieldGroup.Group>
					<Field.Root>
						<Field.Label htmlFor="username">Username</Field.Label>
						<Input id="username" type="text" placeholder="Max Leiter" />
						<Field.Description>
							Choose a unique username for your account.
						</Field.Description>
					</Field.Root>
					<Field.Root>
						<Field.Label htmlFor="password">Password</Field.Label>
						<Field.Description>
							Must be at least 8 characters long.
						</Field.Description>
						<Input id="password" type="password" placeholder="********" />
					</Field.Root>
				</FieldGroup.Group>
			</FieldGroup.Set>
		</div>
	),
};

export const FieldTextarea: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldGroup.Set>
				<FieldGroup.Group>
					<Field.Root>
						<Field.Label htmlFor="feedback">Feedback</Field.Label>
						<Textarea
							id="feedback"
							placeholder="Your feedback helps us improve..."
							rows={4}
						/>
						<Field.Description>
							Share your thoughts about our service.
						</Field.Description>
					</Field.Root>
				</FieldGroup.Group>
			</FieldGroup.Set>
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
			<Field.Root>
				<Field.Label>Department</Field.Label>
				<Select.Root items={departments}>
					<Select.Trigger>
						<Select.Value placeholder="Choose department" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="engineering">Engineering</Select.Item>
						<Select.Item value="design">Design</Select.Item>
						<Select.Item value="marketing">Marketing</Select.Item>
						<Select.Item value="sales">Sales</Select.Item>
						<Select.Item value="support">Customer Support</Select.Item>
						<Select.Item value="hr">Human Resources</Select.Item>
						<Select.Item value="finance">Finance</Select.Item>
						<Select.Item value="operations">Operations</Select.Item>
					</Select.Content>
				</Select.Root>
				<Field.Description>
					Select your department or area of work.
				</Field.Description>
			</Field.Root>
		</div>
	),
};

export const FieldSlider: Story = {
	render: () => {
		const [value, setValue] = useState([200, 800]);
		return (
			<div className="w-full max-w-md">
				<Field.Root>
					<Field.Title>Price Range</Field.Title>
					<Field.Description>
						Set your budget range ($
						<span className="font-medium tabular-nums">{value[0]}</span> -{" "}
						<span className="font-medium tabular-nums">{value[1]}</span>).
					</Field.Description>
					<Slider
						value={value}
						onValueChange={(val) => setValue(val as number[])}
						max={1000}
						min={0}
						step={10}
						className="mt-2 w-full"
						aria-label="Price Range"
					/>
				</Field.Root>
			</div>
		);
	},
};

export const FieldFieldset: Story = {
	render: () => (
		<div className="w-full max-w-md space-y-6">
			<FieldGroup.Set>
				<FieldGroup.Legend>Address Information</FieldGroup.Legend>
				<FieldGroup.Description>
					We need your address to deliver your order.
				</FieldGroup.Description>
				<FieldGroup.Group>
					<Field.Root>
						<Field.Label htmlFor="street">Street Address</Field.Label>
						<Input id="street" type="text" placeholder="123 Main St" />
					</Field.Root>
					<div className="grid grid-cols-2 gap-4">
						<Field.Root>
							<Field.Label htmlFor="city">City</Field.Label>
							<Input id="city" type="text" placeholder="New York" />
						</Field.Root>
						<Field.Root>
							<Field.Label htmlFor="zip">Postal Code</Field.Label>
							<Input id="zip" type="text" placeholder="90502" />
						</Field.Root>
					</div>
				</FieldGroup.Group>
			</FieldGroup.Set>
		</div>
	),
};

export const FieldCheckbox: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup.Root>
				<FieldGroup.Set>
					<FieldGroup.Legend variant="label">
						Show these items on the desktop
					</FieldGroup.Legend>
					<FieldGroup.Description>
						Select the items you want to show on the desktop.
					</FieldGroup.Description>
					<FieldGroup.Group className="gap-3">
						<Field.Root orientation="horizontal">
							<Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked />
							<Field.Label
								htmlFor="finder-pref-9k2-hard-disks-ljj"
								className="font-normal"
							>
								Hard disks
							</Field.Label>
						</Field.Root>
						<Field.Root orientation="horizontal">
							<Checkbox id="finder-pref-9k2-external-disks-1yg" />
							<Field.Label
								htmlFor="finder-pref-9k2-external-disks-1yg"
								className="font-normal"
							>
								External disks
							</Field.Label>
						</Field.Root>
						<Field.Root orientation="horizontal">
							<Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
							<Field.Label
								htmlFor="finder-pref-9k2-cds-dvds-fzt"
								className="font-normal"
							>
								CDs, DVDs, and iPods
							</Field.Label>
						</Field.Root>
						<Field.Root orientation="horizontal">
							<Checkbox id="finder-pref-9k2-connected-servers-6l2" />
							<Field.Label
								htmlFor="finder-pref-9k2-connected-servers-6l2"
								className="font-normal"
							>
								Connected servers
							</Field.Label>
						</Field.Root>
					</FieldGroup.Group>
				</FieldGroup.Set>
				<FieldGroup.Separator />
				<Field.Root orientation="horizontal">
					<Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
					<Field.Content>
						<Field.Label htmlFor="finder-pref-9k2-sync-folders-nep">
							Sync Desktop & Documents folders
						</Field.Label>
						<Field.Description>
							Your Desktop & Documents folders are being synced with iCloud
							Drive. You can access them from other devices.
						</Field.Description>
					</Field.Content>
				</Field.Root>
			</FieldGroup.Root>
		</div>
	),
};

export const FieldRadio: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<FieldGroup.Set>
				<Field.Label>Subscription Plan</Field.Label>
				<Field.Description>
					Yearly and lifetime plans offer significant savings.
				</Field.Description>
				<RadioGroup.Root defaultValue="monthly">
					<Field.Root orientation="horizontal">
						<RadioGroup.Item value="monthly" id="plan-monthly" />
						<Field.Label htmlFor="plan-monthly" className="font-normal">
							Monthly ($9.99/month)
						</Field.Label>
					</Field.Root>
					<Field.Root orientation="horizontal">
						<RadioGroup.Item value="yearly" id="plan-yearly" />
						<Field.Label htmlFor="plan-yearly" className="font-normal">
							Yearly ($99.99/year)
						</Field.Label>
					</Field.Root>
					<Field.Root orientation="horizontal">
						<RadioGroup.Item value="lifetime" id="plan-lifetime" />
						<Field.Label htmlFor="plan-lifetime" className="font-normal">
							Lifetime ($299.99)
						</Field.Label>
					</Field.Root>
				</RadioGroup.Root>
			</FieldGroup.Set>
		</div>
	),
};

export const FieldSwitch: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<Field.Root orientation="horizontal">
				<Field.Content>
					<Field.Label htmlFor="2fa">Multi-factor authentication</Field.Label>
					<Field.Description>
						Enable multi-factor authentication. If you do not have a two-factor
						device, you can use a one-time code sent to your email.
					</Field.Description>
				</Field.Content>
				<Switch id="2fa" />
			</Field.Root>
		</div>
	),
};

export const FieldChoiceCard: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup.Root>
				<FieldGroup.Set>
					<Field.Label htmlFor="compute-environment-p8w">
						Compute Environment
					</Field.Label>
					<Field.Description>
						Select the compute environment for your cluster.
					</Field.Description>
					<RadioGroup.Root defaultValue="kubernetes">
						<Field.Label htmlFor="kubernetes-r2h">
							<Field.Root orientation="horizontal">
								<RadioGroup.Item value="kubernetes" id="kubernetes-r2h" />
								<Field.Content>
									<Field.Title>Kubernetes</Field.Title>
									<Field.Description>
										Run GPU workloads on a K8s configured cluster.
									</Field.Description>
								</Field.Content>
							</Field.Root>
						</Field.Label>
						<Field.Label htmlFor="vm-z4k">
							<Field.Root orientation="horizontal">
								<RadioGroup.Item value="vm" id="vm-z4k" />
								<Field.Content>
									<Field.Title>Virtual Machine</Field.Title>
									<Field.Description>
										Access a VM configured cluster to run GPU workloads.
									</Field.Description>
								</Field.Content>
							</Field.Root>
						</Field.Label>
					</RadioGroup.Root>
				</FieldGroup.Set>
			</FieldGroup.Root>
		</div>
	),
};

export const FieldGroupExample: Story = {
	render: () => (
		<div className="w-full max-w-lg">
			<FieldGroup.Root>
				<FieldGroup.Set>
					<Field.Label>Responses</Field.Label>
					<Field.Description>
						Get notified when ChatGPT responds to requests that take time, like
						research or image generation.
					</Field.Description>
					<FieldGroup.Group data-slot="checkbox-group">
						<Field.Root orientation="horizontal">
							<Checkbox id="push" defaultChecked disabled />
							<Field.Label htmlFor="push" className="font-normal">
								Push notifications
							</Field.Label>
						</Field.Root>
					</FieldGroup.Group>
				</FieldGroup.Set>
				<FieldGroup.Separator />
				<FieldGroup.Set>
					<Field.Label>Tasks</Field.Label>
					<Field.Description>
						Get notified when tasks you&apos;ve created have updates.{" "}
						<a href="#manage-tasks">Manage tasks</a>
					</Field.Description>
					<FieldGroup.Group data-slot="checkbox-group">
						<Field.Root orientation="horizontal">
							<Checkbox id="push-tasks" />
							<Field.Label htmlFor="push-tasks" className="font-normal">
								Push notifications
							</Field.Label>
						</Field.Root>
						<Field.Root orientation="horizontal">
							<Checkbox id="email-tasks" />
							<Field.Label htmlFor="email-tasks" className="font-normal">
								Email notifications
							</Field.Label>
						</Field.Root>
					</FieldGroup.Group>
				</FieldGroup.Set>
			</FieldGroup.Root>
		</div>
	),
};
