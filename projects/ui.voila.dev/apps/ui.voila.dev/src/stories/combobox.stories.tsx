import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@voila.dev/ui/components/combobox";
import { Apple, Banana, Cherry, Grape } from "@voila.dev/ui/icons";
import { useState } from "react";

const meta = {
	title: "UI/Combobox",
	component: Combobox.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Combobox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
	{ value: "next.js", label: "Next.js" },
	{ value: "sveltekit", label: "SvelteKit" },
	{ value: "nuxt.js", label: "Nuxt.js" },
	{ value: "remix", label: "Remix" },
	{ value: "astro", label: "Astro" },
];

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState("");

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger aria-expanded={open}>
					{value
						? frameworks.find((framework) => framework.value === value)?.label
						: "Select framework..."}
					<Combobox.Icon />
				</Combobox.Trigger>
				<Combobox.Content>
					<Combobox.Command>
						<Combobox.Input placeholder="Search framework..." />
						<Combobox.List>
							<Combobox.Empty>No framework found.</Combobox.Empty>
							<Combobox.Group>
								{frameworks.map((framework) => (
									<Combobox.Item
										key={framework.value}
										value={framework.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										{framework.label}
										<Combobox.ItemIndicator
											selected={value === framework.value}
										/>
									</Combobox.Item>
								))}
							</Combobox.Group>
						</Combobox.List>
					</Combobox.Command>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
};

const languages = [
	{ value: "javascript", label: "JavaScript" },
	{ value: "typescript", label: "TypeScript" },
	{ value: "python", label: "Python" },
	{ value: "java", label: "Java" },
	{ value: "rust", label: "Rust" },
	{ value: "go", label: "Go" },
	{ value: "ruby", label: "Ruby" },
];

export const WithSearch: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState("");

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger aria-expanded={open} className="w-[300px]">
					{value
						? languages.find((lang) => lang.value === value)?.label
						: "Select language..."}
					<Combobox.Icon />
				</Combobox.Trigger>
				<Combobox.Content>
					<Combobox.Command>
						<Combobox.Input placeholder="Search language..." />
						<Combobox.List>
							<Combobox.Empty>No language found.</Combobox.Empty>
							<Combobox.Group>
								{languages.map((lang) => (
									<Combobox.Item
										key={lang.value}
										value={lang.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										{lang.label}
										<Combobox.ItemIndicator selected={value === lang.value} />
									</Combobox.Item>
								))}
							</Combobox.Group>
						</Combobox.List>
					</Combobox.Command>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
};

const countries = [
	{ value: "us", label: "United States" },
	{ value: "uk", label: "United Kingdom" },
	{ value: "fr", label: "France" },
	{ value: "de", label: "Germany" },
	{ value: "es", label: "Spain" },
	{ value: "it", label: "Italy" },
];

export const WithDefaultValue: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState("fr");

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger aria-expanded={open} className="w-[250px]">
					{value
						? countries.find((country) => country.value === value)?.label
						: "Select country..."}
					<Combobox.Icon />
				</Combobox.Trigger>
				<Combobox.Content>
					<Combobox.Command>
						<Combobox.Input placeholder="Search country..." />
						<Combobox.List>
							<Combobox.Empty>No country found.</Combobox.Empty>
							<Combobox.Group>
								{countries.map((country) => (
									<Combobox.Item
										key={country.value}
										value={country.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										{country.label}
										<Combobox.ItemIndicator
											selected={value === country.value}
										/>
									</Combobox.Item>
								))}
							</Combobox.Group>
						</Combobox.List>
					</Combobox.Command>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
};

const fruits = [
	{ value: "apple", label: "Apple", icon: Apple },
	{ value: "banana", label: "Banana", icon: Banana },
	{ value: "cherry", label: "Cherry", icon: Cherry },
	{ value: "grape", label: "Grape", icon: Grape },
];

export const WithIcons: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState(fruits[0].value);

		const selectedFruit = fruits.find((fruit) => fruit.value === value);

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger aria-expanded={open} className="w-[200px]">
					{selectedFruit ? (
						<div className="flex items-center gap-2">
							<selectedFruit.icon className="size-4" />
							{selectedFruit.label}
						</div>
					) : (
						"Select fruit..."
					)}
					<Combobox.Icon />
				</Combobox.Trigger>
				<Combobox.Content>
					<Combobox.Command>
						<Combobox.Input placeholder="Search fruit..." />
						<Combobox.List>
							<Combobox.Empty>No fruit found.</Combobox.Empty>
							<Combobox.Group>
								{fruits.map((fruit) => (
									<Combobox.Item
										key={fruit.value}
										value={fruit.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										<fruit.icon className="size-4" />
										{fruit.label}
										<Combobox.ItemIndicator selected={value === fruit.value} />
									</Combobox.Item>
								))}
							</Combobox.Group>
						</Combobox.List>
					</Combobox.Command>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
};
