import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { ButtonGroup } from "@voila.dev/ui/components/button-group";
import { DropdownMenu } from "@voila.dev/ui/components/dropdown-menu";
import { Input } from "@voila.dev/ui/components/input";
import { InputGroup } from "@voila.dev/ui/components/input-group";
import { Popover } from "@voila.dev/ui/components/popover";
import { Select } from "@voila.dev/ui/components/select";
import { Separator } from "@voila.dev/ui/components/separator";
import { Textarea } from "@voila.dev/ui/components/textarea";
import { Tooltip } from "@voila.dev/ui/components/tooltip";
import {
	AlertTriangleIcon,
	ArchiveIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	AudioLinesIcon,
	BotIcon,
	CalendarPlusIcon,
	CheckIcon,
	ChevronDownIcon,
	ClockIcon,
	CopyIcon,
	ListFilterPlusIcon,
	MailCheckIcon,
	MinusIcon,
	MoreHorizontalIcon,
	PlusIcon,
	SearchIcon,
	ShareIcon,
	TagIcon,
	Trash2Icon,
	TrashIcon,
	UserRoundXIcon,
	VolumeOffIcon,
} from "@voila.dev/ui/icons";
import * as React from "react";

const meta = {
	title: "UI/ButtonGroup",
	component: ButtonGroup.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ButtonGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="outline">Archive</Button>
			<Button variant="outline">Report</Button>
		</ButtonGroup.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<ButtonGroup.Root orientation="vertical" aria-label="Media controls">
			<Button variant="outline" size="icon">
				<PlusIcon />
			</Button>
			<Button variant="outline" size="icon">
				<MinusIcon />
			</Button>
		</ButtonGroup.Root>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col items-start gap-8">
			<ButtonGroup.Root>
				<Button variant="outline" size="sm">
					Small
				</Button>
				<Button variant="outline" size="sm">
					Button
				</Button>
				<Button variant="outline" size="sm">
					Group
				</Button>
				<Button variant="outline" size="icon-sm">
					<PlusIcon />
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline">Default</Button>
				<Button variant="outline">Button</Button>
				<Button variant="outline">Group</Button>
				<Button variant="outline" size="icon">
					<PlusIcon />
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="lg">
					Large
				</Button>
				<Button variant="outline" size="lg">
					Button
				</Button>
				<Button variant="outline" size="lg">
					Group
				</Button>
				<Button variant="outline" size="icon-lg">
					<PlusIcon />
				</Button>
			</ButtonGroup.Root>
		</div>
	),
};

export const Nested: Story = {
	render: () => (
		<ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="sm">
					1
				</Button>
				<Button variant="outline" size="sm">
					2
				</Button>
				<Button variant="outline" size="sm">
					3
				</Button>
				<Button variant="outline" size="sm">
					4
				</Button>
				<Button variant="outline" size="sm">
					5
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="icon-sm" aria-label="Previous">
					<ArrowLeftIcon />
				</Button>
				<Button variant="outline" size="icon-sm" aria-label="Next">
					<ArrowRightIcon />
				</Button>
			</ButtonGroup.Root>
		</ButtonGroup.Root>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="secondary" size="sm">
				Copy
			</Button>
			<ButtonGroup.Separator />
			<Button variant="secondary" size="sm">
				Paste
			</Button>
		</ButtonGroup.Root>
	),
};

export const Split: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="secondary">Button</Button>
			<ButtonGroup.Separator />
			<Button size="icon" variant="secondary">
				<PlusIcon />
			</Button>
		</ButtonGroup.Root>
	),
};

export const WithText: Story = {
	render: () => (
		<ButtonGroup.Root>
			<ButtonGroup.Text>View</ButtonGroup.Text>
			<Button variant="outline">List</Button>
			<Button variant="outline">Grid</Button>
		</ButtonGroup.Root>
	),
};

export const WithInput: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Input placeholder="Search..." />
			<Button variant="outline" aria-label="Search">
				<SearchIcon />
			</Button>
		</ButtonGroup.Root>
	),
};

export const WithInputGroup: Story = {
	render: () => {
		const [voiceEnabled, setVoiceEnabled] = React.useState(false);

		return (
			<ButtonGroup.Root className="[--radius:9999rem]">
				<ButtonGroup.Root>
					<Button variant="outline" size="icon">
						<PlusIcon />
					</Button>
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<InputGroup.Root>
						<InputGroup.Input
							placeholder={
								voiceEnabled ? "Record and send audio..." : "Send a message..."
							}
							disabled={voiceEnabled}
						/>
						<InputGroup.Addon align="inline-end">
							<Tooltip.Root>
								<Tooltip.Trigger
									render={
										<InputGroup.Button
											onClick={() => setVoiceEnabled(!voiceEnabled)}
											size="icon-xs"
											data-active={voiceEnabled}
											className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
											aria-pressed={voiceEnabled}
										/>
									}
								>
									<AudioLinesIcon />
								</Tooltip.Trigger>
								<Tooltip.Positioner>
									<Tooltip.Content>Voice Mode</Tooltip.Content>
								</Tooltip.Positioner>
							</Tooltip.Root>
						</InputGroup.Addon>
					</InputGroup.Root>
				</ButtonGroup.Root>
			</ButtonGroup.Root>
		);
	},
};

export const WithDropdown: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="outline">Follow</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger render={<Button variant="outline" />}>
					<ChevronDownIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Positioner align="end">
					<DropdownMenu.Content className="[--radius:1rem]">
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								<VolumeOffIcon />
								Mute Conversation
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<CheckIcon />
								Mark as Read
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<AlertTriangleIcon />
								Report Conversation
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<UserRoundXIcon />
								Block User
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<ShareIcon />
								Share Conversation
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<CopyIcon />
								Copy Conversation
							</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.Group>
							<DropdownMenu.Item variant="destructive">
								<TrashIcon />
								Delete Conversation
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Positioner>
			</DropdownMenu.Root>
		</ButtonGroup.Root>
	),
};

export const Complex: Story = {
	render: () => {
		const [label, setLabel] = React.useState("personal");

		return (
			<ButtonGroup.Root>
				<ButtonGroup.Root className="hidden sm:flex">
					<Button variant="outline" size="icon" aria-label="Go Back">
						<ArrowLeftIcon />
					</Button>
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button variant="outline">Archive</Button>
					<Button variant="outline">Report</Button>
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button variant="outline">Snooze</Button>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							render={
								<Button
									variant="outline"
									size="icon"
									aria-label="More Options"
								/>
							}
						>
							<MoreHorizontalIcon />
						</DropdownMenu.Trigger>
						<DropdownMenu.Positioner align="end">
							<DropdownMenu.Content className="w-52">
								<DropdownMenu.Group>
									<DropdownMenu.Item>
										<MailCheckIcon />
										Mark as Read
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<ArchiveIcon />
										Archive
									</DropdownMenu.Item>
								</DropdownMenu.Group>
								<DropdownMenu.Separator />
								<DropdownMenu.Group>
									<DropdownMenu.Item>
										<ClockIcon />
										Snooze
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<CalendarPlusIcon />
										Add to Calendar
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<ListFilterPlusIcon />
										Add to List
									</DropdownMenu.Item>
									<DropdownMenu.Sub>
										<DropdownMenu.SubTrigger>
											<TagIcon />
											Label As...
										</DropdownMenu.SubTrigger>
										<DropdownMenu.Positioner>
											<DropdownMenu.SubContent>
												<DropdownMenu.RadioGroup
													value={label}
													onValueChange={setLabel}
												>
													<DropdownMenu.RadioItem value="personal">
														Personal
													</DropdownMenu.RadioItem>
													<DropdownMenu.RadioItem value="work">
														Work
													</DropdownMenu.RadioItem>
													<DropdownMenu.RadioItem value="other">
														Other
													</DropdownMenu.RadioItem>
												</DropdownMenu.RadioGroup>
											</DropdownMenu.SubContent>
										</DropdownMenu.Positioner>
									</DropdownMenu.Sub>
								</DropdownMenu.Group>
								<DropdownMenu.Separator />
								<DropdownMenu.Group>
									<DropdownMenu.Item variant="destructive">
										<Trash2Icon />
										Trash
									</DropdownMenu.Item>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Positioner>
					</DropdownMenu.Root>
				</ButtonGroup.Root>
			</ButtonGroup.Root>
		);
	},
};

export const WithSelect: Story = {
	render: () => {
		const [currency, setCurrency] = React.useState("$");

		const currencies = [
			{ value: "$", label: "US Dollar" },
			{ value: "€", label: "Euro" },
			{ value: "£", label: "British Pound" },
		];

		return (
			<ButtonGroup.Root>
				<ButtonGroup.Root>
					<Select.Root
						items={currencies}
						value={currency}
						onValueChange={(value) => setCurrency(value as string)}
					>
						<Select.Trigger className="font-mono text-xs">
							{currency}
						</Select.Trigger>
						<Select.Portal>
							<Select.Positioner>
								<Select.Popup>
									<Select.List>
										{currencies.map((curr) => (
											<Select.Item key={curr.value} value={curr.value}>
												<Select.ItemText>
													{curr.value}{" "}
													<span className="text-muted-foreground text-xs">
														{curr.label}
													</span>
												</Select.ItemText>
											</Select.Item>
										))}
									</Select.List>
								</Select.Popup>
							</Select.Positioner>
						</Select.Portal>
					</Select.Root>
					<Input placeholder="10.00" pattern="[0-9]*" />
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button aria-label="Send" size="icon" variant="outline">
						<ArrowRightIcon />
					</Button>
				</ButtonGroup.Root>
			</ButtonGroup.Root>
		);
	},
};

export const WithPopover: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="outline">
				<BotIcon /> Copilot
			</Button>
			<Popover.Root>
				<Popover.Trigger
					render={
						<Button variant="outline" size="icon" aria-label="Open Popover" />
					}
				>
					<ChevronDownIcon />
				</Popover.Trigger>
				<Popover.Positioner align="end">
					<Popover.Content className="rounded-xl p-0 text-sm">
						<div className="px-4 py-3">
							<div className="text-sm font-medium">Agent Tasks</div>
						</div>
						<Separator />
						<div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
							<Textarea
								placeholder="Describe your task in natural language."
								className="mb-4 resize-none"
							/>
							<p className="font-medium">Start a new task with Copilot</p>
							<p className="text-muted-foreground">
								Describe your task in natural language. Copilot will work in the
								background and open a pull request for your review.
							</p>
						</div>
					</Popover.Content>
				</Popover.Positioner>
			</Popover.Root>
		</ButtonGroup.Root>
	),
};
