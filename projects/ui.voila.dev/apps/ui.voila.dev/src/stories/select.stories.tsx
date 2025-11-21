import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@voila.dev/ui/components/select";

const meta = {
	title: "UI/Select",
	component: Select.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const timezones = {
	"North America": [
		{
			value: "est",
			label: "Eastern Standard Time (EST)",
		},
		{
			value: "cst",
			label: "Central Standard Time (CST)",
		},
		{
			value: "mst",
			label: "Mountain Standard Time (MST)",
		},
		{
			value: "pst",
			label: "Pacific Standard Time (PST)",
		},
		{
			value: "akst",
			label: "Alaska Standard Time (AKST)",
		},
		{
			value: "hst",
			label: "Hawaii Standard Time (HST)",
		},
	],
	"Europe & Africa": [
		{
			value: "gmt",
			label: "Greenwich Mean Time (GMT)",
		},
		{
			value: "cet",
			label: "Central European Time (CET)",
		},
		{
			value: "eet",
			label: "Eastern European Time (EET)",
		},
		{
			value: "west",
			label: "Western European Summer Time (WEST)",
		},
		{
			value: "cat",
			label: "Central Africa Time (CAT)",
		},
		{
			value: "eat",
			label: "East Africa Time (EAT)",
		},
	],
	Asia: [
		{
			value: "msk",
			label: "Moscow Time (MSK)",
		},
		{
			value: "ist",
			label: "India Standard Time (IST)",
		},
		{
			value: "cst_china",
			label: "China Standard Time (CST)",
		},
		{
			value: "jst",
			label: "Japan Standard Time (JST)",
		},
		{
			value: "kst",
			label: "Korea Standard Time (KST)",
		},
		{
			value: "ist_indonesia",
			label: "Indonesia Central Standard Time (WITA)",
		},
	],
	"Australia & Pacific": [
		{
			value: "awst",
			label: "Australian Western Standard Time (AWST)",
		},
		{
			value: "acst",
			label: "Australian Central Standard Time (ACST)",
		},
		{
			value: "aest",
			label: "Australian Eastern Standard Time (AEST)",
		},
		{
			value: "nzst",
			label: "New Zealand Standard Time (NZST)",
		},
		{
			value: "fjt",
			label: "Fiji Time (FJT)",
		},
	],
	"South America": [
		{
			value: "art",
			label: "Argentina Time (ART)",
		},
		{
			value: "bot",
			label: "Bolivia Time (BOT)",
		},
		{
			value: "brt",
			label: "Brasilia Time (BRT)",
		},
		{
			value: "clt",
			label: "Chile Standard Time (CLT)",
		},
	],
};

const items = Object.values(timezones).flat();

export const Default: Story = {
	render: () => (
		<Select.Root items={items}>
			<Select.Trigger className="max-w-xs w-full">
				<Select.Value placeholder="Select a timezone" />
			</Select.Trigger>

			<Select.Content>
				{Object.entries(timezones).map(([group, items]) => (
					<Select.Group key={group}>
						<Select.Label>{group}</Select.Label>
						{items.map((item) => (
							<Select.Item key={item.value} value={item.value}>
								{item.label}
							</Select.Item>
						))}
					</Select.Group>
				))}
			</Select.Content>
		</Select.Root>
	),
};

const fonts = [
	{ label: "Sans-serif", value: "sans" },
	{ label: "Serif", value: "serif" },
	{ label: "Monospace", value: "mono" },
	{ label: "Cursive", value: "cursive" },
];

export const Simple: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger className="w-42">
				<Select.Value />
			</Select.Trigger>

			<Select.Content>
				{fonts.map((font) => (
					<Select.Item key={font.value} value={font.value}>
						{font.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
};

export const WithPlaceholder: Story = {
	render: () => (
		<Select.Root items={fonts}>
			<Select.Trigger>
				<Select.Value placeholder="Select a font" />
			</Select.Trigger>

			<Select.Content>
				{fonts.map((font) => (
					<Select.Item key={font.value} value={font.value}>
						{font.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
};

export const SmallSize: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger size="sm" className="w-42">
				<Select.Value />
			</Select.Trigger>

			<Select.Content>
				{fonts.map((font) => (
					<Select.Item key={font.value} value={font.value}>
						{font.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
};

const themes = [
	{ label: "Light", value: "light" },
	{ label: "Dark", value: "dark" },
	{ label: "System", value: "system" },
];

export const WithGroups: Story = {
	render: () => (
		<Select.Root items={themes} defaultValue="system">
			<Select.Trigger>
				<Select.Value />
			</Select.Trigger>

			<Select.Content>
				<Select.Group>
					<Select.Label>Appearance</Select.Label>
					{themes.map((theme) => (
						<Select.Item key={theme.value} value={theme.value}>
							{theme.label}
						</Select.Item>
					))}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger>
				<Select.Value />
			</Select.Trigger>

			<Select.Content>
				{fonts.slice(0, 2).map((font) => (
					<Select.Item key={font.value} value={font.value}>
						{font.label}
					</Select.Item>
				))}
				<Select.Separator />
				{fonts.slice(2).map((font) => (
					<Select.Item key={font.value} value={font.value}>
						{font.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
};
