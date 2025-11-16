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

const fonts = [
	{ label: "Sans-serif", value: "sans" },
	{ label: "Serif", value: "serif" },
	{ label: "Monospace", value: "mono" },
	{ label: "Cursive", value: "cursive" },
];

export const Default: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger className="w-42">
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{fonts.map((font) => (
								<Select.Item key={font.value} value={font.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};

export const WithPlaceholder: Story = {
	render: () => (
		<Select.Root items={fonts}>
			<Select.Trigger>
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner sideOffset={8}>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{fonts.map((font) => (
								<Select.Item key={font.value} value={font.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};

export const SmallSize: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger size="sm">
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{fonts.map((font) => (
								<Select.Item key={font.value} value={font.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
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
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner sideOffset={8}>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							<Select.Group>
								<Select.GroupLabel>Appearance</Select.GroupLabel>
								{themes.map((theme) => (
									<Select.Item key={theme.value} value={theme.value}>
										<Select.ItemIndicator />
										<Select.ItemText>{theme.label}</Select.ItemText>
									</Select.Item>
								))}
							</Select.Group>
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans">
			<Select.Trigger>
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner sideOffset={8}>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{fonts.slice(0, 2).map((font) => (
								<Select.Item key={font.value} value={font.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
							<Select.Separator />
							{fonts.slice(2).map((font) => (
								<Select.Item key={font.value} value={font.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};

const languages = [
	{ label: "JavaScript", value: "javascript" },
	{ label: "TypeScript", value: "typescript" },
	{ label: "Python", value: "python" },
	{ label: "Java", value: "java" },
	{ label: "Rust", value: "rust" },
];

export const MultipleSelection: Story = {
	render: () => (
		<Select.Root
			items={languages}
			multiple
			defaultValue={["javascript", "typescript"]}
		>
			<Select.Trigger>
				<Select.Value>
					{(value: string[]) => {
						if (value.length === 0) return "Select languages...";
						const first = languages.find((lang) => lang.value === value[0]);
						const additional =
							value.length > 1 ? ` (+${value.length - 1} more)` : "";
						return first
							? `${first.label}${additional}`
							: "Select languages...";
					}}
				</Select.Value>
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner sideOffset={8} alignItemWithTrigger={false}>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{languages.map((lang) => (
								<Select.Item key={lang.value} value={lang.value}>
									<Select.ItemIndicator />
									<Select.ItemText>{lang.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select.Root items={fonts} defaultValue="sans" disabled>
			<Select.Trigger>
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner sideOffset={8}>
					<Select.Popup>
						<Select.ScrollUpArrow />
						<Select.List>
							{fonts.map((font) => (
								<Select.Item key={font.value} value={font.value} disabled>
									<Select.ItemIndicator />
									<Select.ItemText>{font.label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.List>
						<Select.ScrollDownArrow />
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	),
};
