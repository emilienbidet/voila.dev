import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@voila.dev/ui/components/avatar";
import { Button } from "@voila.dev/ui/components/button";
import { DropdownMenu } from "@voila.dev/ui/components/dropdown-menu";
import { Item } from "@voila.dev/ui/components/item";
import {
	ChevronDown,
	ChevronRight,
	ExternalLink,
	Plus,
	ShieldAlert,
} from "@voila.dev/ui/icons";
import * as React from "react";

const meta = {
	title: "UI/Item",
	component: Item.Root,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline", "muted"],
		},
		size: {
			control: "select",
			options: ["default", "sm"],
		},
	},
} satisfies Meta<typeof Item.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<Item.Root>
				<Item.Content>
					<Item.Title>Default Variant</Item.Title>
					<Item.Description>
						Standard styling with subtle background and borders.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</Item.Actions>
			</Item.Root>

			<Item.Root variant="outline">
				<Item.Content>
					<Item.Title>Outline Variant</Item.Title>
					<Item.Description>
						Outlined style with clear borders and transparent background.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</Item.Actions>
			</Item.Root>

			<Item.Root variant="muted">
				<Item.Content>
					<Item.Title>Muted Variant</Item.Title>
					<Item.Description>
						Subdued appearance with muted colors for secondary content.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</Item.Actions>
			</Item.Root>
		</div>
	),
};

export const WithIcon: Story = {
	render: () => (
		<div className="flex w-full max-w-lg flex-col gap-6">
			<Item.Root variant="outline">
				<Item.Media variant="icon">
					<ShieldAlert />
				</Item.Media>
				<Item.Content>
					<Item.Title>Security Alert</Item.Title>
					<Item.Description>
						New login detected from unknown device.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button size="sm" variant="outline">
						Review
					</Button>
				</Item.Actions>
			</Item.Root>
		</div>
	),
};

export const WithAvatar: Story = {
	render: () => (
		<div className="flex w-full max-w-lg flex-col gap-6">
			<Item.Root variant="outline">
				<Item.Media>
					<Avatar.Root className="size-10">
						<Avatar.Image src="https://github.com/evilrabbit.png" />
						<Avatar.Fallback>ER</Avatar.Fallback>
					</Avatar.Root>
				</Item.Media>
				<Item.Content>
					<Item.Title>Evil Rabbit</Item.Title>
					<Item.Description>Last seen 5 months ago</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button
						size="icon"
						variant="outline"
						className="rounded-full size-8"
						aria-label="Invite"
					>
						<Plus />
					</Button>
				</Item.Actions>
			</Item.Root>

			<Item.Root variant="outline">
				<Item.Media>
					<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
						<Avatar.Root className="hidden sm:flex">
							<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						<Avatar.Root className="hidden sm:flex">
							<Avatar.Image
								src="https://github.com/maxleiter.png"
								alt="@maxleiter"
							/>
							<Avatar.Fallback>LR</Avatar.Fallback>
						</Avatar.Root>
						<Avatar.Root>
							<Avatar.Image
								src="https://github.com/evilrabbit.png"
								alt="@evilrabbit"
							/>
							<Avatar.Fallback>ER</Avatar.Fallback>
						</Avatar.Root>
					</div>
				</Item.Media>
				<Item.Content>
					<Item.Title>No Team Members</Item.Title>
					<Item.Description>
						Invite your team to collaborate on this project.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button size="sm" variant="outline">
						Invite
					</Button>
				</Item.Actions>
			</Item.Root>
		</div>
	),
};

const music = [
	{
		title: "Midnight City Lights",
		artist: "Neon Dreams",
		album: "Electric Nights",
		duration: "3:45",
	},
	{
		title: "Coffee Shop Conversations",
		artist: "The Morning Brew",
		album: "Urban Stories",
		duration: "4:05",
	},
	{
		title: "Digital Rain",
		artist: "Cyber Symphony",
		album: "Binary Beats",
		duration: "3:30",
	},
];

export const WithImage: Story = {
	render: () => (
		<div className="flex w-full max-w-md flex-col gap-6">
			<Item.Group className="gap-4">
				{music.map((song) => (
					<Item.Root
						key={song.title}
						variant="outline"
						// biome-ignore lint/a11y/useAnchorContent: we don't need to add content to the anchor
						render={<a href="#listitem" />}
						role="listitem"
					>
						<Item.Media variant="image">
							<img
								src={`https://avatar.vercel.sh/${song.title}`}
								alt={song.title}
								width={32}
								height={32}
								className="object-cover grayscale"
							/>
						</Item.Media>
						<Item.Content>
							<Item.Title className="line-clamp-1">
								{song.title} -{" "}
								<span className="text-muted-foreground">{song.album}</span>
							</Item.Title>
							<Item.Description>{song.artist}</Item.Description>
						</Item.Content>
						<Item.Content className="flex-none text-center">
							<Item.Description>{song.duration}</Item.Description>
						</Item.Content>
					</Item.Root>
				))}
			</Item.Group>
		</div>
	),
};

const people = [
	{
		username: "shadcn",
		avatar: "https://github.com/shadcn.png",
		email: "shadcn@vercel.com",
	},
	{
		username: "maxleiter",
		avatar: "https://github.com/maxleiter.png",
		email: "maxleiter@vercel.com",
	},
	{
		username: "evilrabbit",
		avatar: "https://github.com/evilrabbit.png",
		email: "evilrabbit@vercel.com",
	},
];

export const Group: Story = {
	render: () => (
		<div className="flex w-full max-w-md flex-col gap-6">
			<Item.Group>
				{people.map((person, index) => (
					<React.Fragment key={person.username}>
						<Item.Root>
							<Item.Media>
								<Avatar.Root>
									<Avatar.Image src={person.avatar} className="grayscale" />
									<Avatar.Fallback>{person.username.charAt(0)}</Avatar.Fallback>
								</Avatar.Root>
							</Item.Media>
							<Item.Content className="gap-1">
								<Item.Title>{person.username}</Item.Title>
								<Item.Description>{person.email}</Item.Description>
							</Item.Content>
							<Item.Actions>
								<Button variant="ghost" size="icon" className="rounded-full">
									<Plus />
								</Button>
							</Item.Actions>
						</Item.Root>
						{index !== people.length - 1 && <Item.Separator />}
					</React.Fragment>
				))}
			</Item.Group>
		</div>
	),
};

const models = [
	{
		name: "v0-1.5-sm",
		description: "Everyday tasks and UI generation.",
		image:
			"https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
		credit: "Valeria Reverdo on Unsplash",
	},
	{
		name: "v0-1.5-lg",
		description: "Advanced thinking or reasoning.",
		image:
			"https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
		credit: "Michael Oeser on Unsplash",
	},
	{
		name: "v0-2.0-mini",
		description: "Open Source model for everyone.",
		image:
			"https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
		credit: "Cherry Laithang on Unsplash",
	},
];

export const WithHeader: Story = {
	render: () => (
		<div className="flex w-full max-w-xl flex-col gap-6">
			<Item.Group className="grid grid-cols-3 gap-4">
				{models.map((model) => (
					<Item.Root key={model.name} variant="outline">
						<Item.Header>
							<img
								src={model.image}
								alt={model.name}
								width={128}
								height={128}
								className="aspect-square w-full rounded-sm object-cover"
							/>
						</Item.Header>
						<Item.Content>
							<Item.Title>{model.name}</Item.Title>
							<Item.Description>{model.description}</Item.Description>
						</Item.Content>
					</Item.Root>
				))}
			</Item.Group>
		</div>
	),
};

export const AsLink: Story = {
	render: () => (
		<div className="flex w-full max-w-md flex-col gap-4">
			{/** biome-ignore lint/a11y/useAnchorContent: we don't need to add content to the anchor */}
			<Item.Root render={<a href="#listitem" />}>
				<Item.Content>
					<Item.Title>Visit our documentation</Item.Title>
					<Item.Description>
						Learn how to get started with our components.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<ChevronRight className="size-4" />
				</Item.Actions>
			</Item.Root>

			<Item.Root
				variant="outline"
				render={
					// biome-ignore lint/a11y/useAnchorContent: we don't need to add content to the anchor
					<a href="#listitem" target="_blank" rel="noopener noreferrer" />
				}
			>
				<Item.Content>
					<Item.Title>External resource</Item.Title>
					<Item.Description>
						Opens in a new tab with security attributes.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<ExternalLink className="size-4" />
				</Item.Actions>
			</Item.Root>
		</div>
	),
};

export const InDropdown: Story = {
	render: () => (
		<div className="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					render={<Button variant="outline" size="sm" className="w-fit" />}
				>
					Select <ChevronDown />
				</DropdownMenu.Trigger>
				<DropdownMenu.Positioner align="end">
					<DropdownMenu.Content className="w-72 [--radius:0.65rem]">
						{people.map((person) => (
							<DropdownMenu.Item key={person.username} className="p-0">
								<Item.Root size="sm" className="w-full p-2">
									<Item.Media>
										<Avatar.Root className="size-8">
											<Avatar.Image src={person.avatar} className="grayscale" />
											<Avatar.Fallback>
												{person.username.charAt(0)}
											</Avatar.Fallback>
										</Avatar.Root>
									</Item.Media>
									<Item.Content className="gap-0.5">
										<Item.Title>{person.username}</Item.Title>
										<Item.Description>{person.email}</Item.Description>
									</Item.Content>
								</Item.Root>
							</DropdownMenu.Item>
						))}
					</DropdownMenu.Content>
				</DropdownMenu.Positioner>
			</DropdownMenu.Root>
		</div>
	),
};
