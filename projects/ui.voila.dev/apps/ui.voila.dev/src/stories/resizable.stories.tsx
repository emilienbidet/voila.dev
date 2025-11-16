import type { Meta, StoryObj } from "@storybook/react-vite";
import { Resizable } from "@voila.dev/ui/components/resizable";

const meta = {
	title: "UI/Resizable",
	component: Resizable.PanelGroup,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Resizable.PanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="h-96 w-[600px] rounded-lg border">
			<Resizable.PanelGroup direction="horizontal">
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Left Panel</h3>
							<p className="text-sm text-muted-foreground">
								This is the left panel content
							</p>
						</div>
					</div>
				</Resizable.Panel>
				<Resizable.Handle />
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Right Panel</h3>
							<p className="text-sm text-muted-foreground">
								This is the right panel content
							</p>
						</div>
					</div>
				</Resizable.Panel>
			</Resizable.PanelGroup>
		</div>
	),
};

export const WithHandle: Story = {
	render: () => (
		<div className="h-96 w-[600px] rounded-lg border">
			<Resizable.PanelGroup direction="horizontal">
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Left Panel</h3>
							<p className="text-sm text-muted-foreground">
								Drag the handle to resize
							</p>
						</div>
					</div>
				</Resizable.Panel>
				<Resizable.Handle withHandle />
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Right Panel</h3>
							<p className="text-sm text-muted-foreground">
								This panel has a visible handle
							</p>
						</div>
					</div>
				</Resizable.Panel>
			</Resizable.PanelGroup>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="h-96 w-[600px] rounded-lg border">
			<Resizable.PanelGroup direction="vertical">
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Top Panel</h3>
							<p className="text-sm text-muted-foreground">
								This is the top panel content
							</p>
						</div>
					</div>
				</Resizable.Panel>
				<Resizable.Handle />
				<Resizable.Panel defaultSize={50} minSize={30}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Bottom Panel</h3>
							<p className="text-sm text-muted-foreground">
								This is the bottom panel content
							</p>
						</div>
					</div>
				</Resizable.Panel>
			</Resizable.PanelGroup>
		</div>
	),
};

export const ThreePanels: Story = {
	render: () => (
		<div className="h-96 w-[600px] rounded-lg border">
			<Resizable.PanelGroup direction="horizontal">
				<Resizable.Panel defaultSize={33} minSize={20}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Panel 1</h3>
							<p className="text-sm text-muted-foreground">First panel</p>
						</div>
					</div>
				</Resizable.Panel>
				<Resizable.Handle />
				<Resizable.Panel defaultSize={34} minSize={20}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Panel 2</h3>
							<p className="text-sm text-muted-foreground">Second panel</p>
						</div>
					</div>
				</Resizable.Panel>
				<Resizable.Handle />
				<Resizable.Panel defaultSize={33} minSize={20}>
					<div className="flex h-full items-center justify-center p-6">
						<div className="text-center">
							<h3 className="text-lg font-semibold">Panel 3</h3>
							<p className="text-sm text-muted-foreground">Third panel</p>
						</div>
					</div>
				</Resizable.Panel>
			</Resizable.PanelGroup>
		</div>
	),
};
