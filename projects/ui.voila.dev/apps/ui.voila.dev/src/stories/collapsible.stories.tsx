import type { Meta, StoryObj } from "@storybook/react-vite";
import { Collapsible } from "@voila.dev/ui/components/collapsible";
import { ChevronRight } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Collapsible",
	component: Collapsible.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Collapsible.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible.Root className="flex w-[350px] flex-col gap-2">
			<Collapsible.Trigger className="bg-secondary py-2 px-4 rounded-lg text-left [&[data-panel-open]_svg]:rotate-90">
				<div className="flex items-center justify-between gap-4">
					<h4 className="grow text-sm font-semibold">
						@peduarte starred 3 repositories
					</h4>
					<ChevronRight className="size-4 transition-transform" />
				</div>
			</Collapsible.Trigger>
			<Collapsible.Panel className="flex flex-col gap-2">
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@shadcn-ui/ui
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@mui/base-ui
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@akash3444/basecn
				</div>
			</Collapsible.Panel>
		</Collapsible.Root>
	),
};
