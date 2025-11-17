import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "@voila.dev/ui/components/autocomplete";
import { Label } from "@voila.dev/ui/components/label";

const meta = {
	title: "UI/Autocomplete",
	component: Autocomplete.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Autocomplete.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Tag {
	id: string;
	value: string;
}

const tags: Tag[] = [
	{ id: "t1", value: "feature" },
	{ id: "t2", value: "fix" },
	{ id: "t3", value: "bug" },
	{ id: "t4", value: "docs" },
	{ id: "t5", value: "internal" },
	{ id: "t6", value: "mobile" },
	{ id: "t7", value: "frontend" },
	{ id: "t8", value: "backend" },
	{ id: "t9", value: "performance" },
	{ id: "t10", value: "accessibility" },
];

export const Default: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Autocomplete.Root items={tags}>
				<Label htmlFor="tags">Tags</Label>
				<Autocomplete.Input
					id="tags"
					placeholder="e.g. feature"
					className="mt-2"
				/>
				<Autocomplete.Body>
					<Autocomplete.Empty>No tags found.</Autocomplete.Empty>
					<Autocomplete.List>
						{(tag) => (
							<Autocomplete.Item key={tag.id} value={tag.value}>
								{tag.value}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Body>
			</Autocomplete.Root>
		</div>
	),
};

export const WithClear: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Autocomplete.Root items={tags}>
				<Label htmlFor="tags">Tags</Label>
				<div className="mt-2 flex items-center gap-2 relative">
					<Autocomplete.Input
						id="tags"
						placeholder="e.g. feature"
						className="pe-8"
					/>
					<Autocomplete.Clear className="absolute right-2 top-1/2 -translate-y-1/2" />
				</div>
				<Autocomplete.Body>
					<Autocomplete.Empty>No tags found.</Autocomplete.Empty>
					<Autocomplete.List>
						{(tag) => (
							<Autocomplete.Item key={tag.id} value={tag.value}>
								{tag.value}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Body>
			</Autocomplete.Root>
		</div>
	),
};

export const AutoHighlight: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Autocomplete.Root items={tags} autoHighlight>
				<Label htmlFor="tags">Tags</Label>
				<Autocomplete.Input
					id="tags"
					placeholder="e.g. feature"
					className="mt-2"
				/>
				<Autocomplete.Body>
					<Autocomplete.Empty>No tags found.</Autocomplete.Empty>
					<Autocomplete.List>
						{(tag) => (
							<Autocomplete.Item key={tag.id} value={tag.value}>
								{tag.value}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Body>
			</Autocomplete.Root>
		</div>
	),
};

interface TagGroup {
	value: string;
	items: Tag[];
}

const groupedTags: TagGroup[] = [
	{
		value: "Type",
		items: [
			{ id: "t1", value: "feature" },
			{ id: "t2", value: "fix" },
			{ id: "t3", value: "bug" },
			{ id: "t4", value: "docs" },
			{ id: "t5", value: "internal" },
			{ id: "t6", value: "mobile" },
		],
	},
	{
		value: "Component",
		items: [
			{ id: "c-accordion", value: "component: accordion" },
			{ id: "c-alert-dialog", value: "component: alert dialog" },
			{ id: "c-autocomplete", value: "component: autocomplete" },
			{ id: "c-avatar", value: "component: avatar" },
			{ id: "c-button", value: "component: button" },
		],
	},
];

export const Grouped: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Autocomplete.Root items={groupedTags}>
				<Label htmlFor="tags">Tags</Label>
				<Autocomplete.Input
					id="tags"
					placeholder="e.g. feature"
					className="mt-2"
				/>
				<Autocomplete.Body>
					<Autocomplete.Empty>No tags found.</Autocomplete.Empty>
					<Autocomplete.List>
						{(group: TagGroup) => (
							<Autocomplete.Group key={group.value} items={group.items}>
								<Autocomplete.GroupLabel className="sticky top-0 z-1 uppercase">
									{group.value}
								</Autocomplete.GroupLabel>
								<Autocomplete.Collection>
									{(tag: Tag) => (
										<Autocomplete.Item key={tag.id} value={tag.value}>
											{tag.value}
										</Autocomplete.Item>
									)}
								</Autocomplete.Collection>
							</Autocomplete.Group>
						)}
					</Autocomplete.List>
				</Autocomplete.Body>
			</Autocomplete.Root>
		</div>
	),
};
