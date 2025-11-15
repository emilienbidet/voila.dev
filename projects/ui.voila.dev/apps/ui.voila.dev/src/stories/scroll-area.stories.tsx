import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "@voila.dev/ui/components/scroll-area";

const meta = {
	title: "UI/ScrollArea",
	component: ScrollArea.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ScrollArea.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
	render: () => (
		<ScrollArea.Root className="h-72 w-80 rounded-md border">
			<ScrollArea.Viewport>
				<ScrollArea.Content className="p-4 grid gap-8">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						at pulvinar velit. Sed sagittis sem libero. Fusce in tincidunt ex,
						accumsan condimentum nibh. Morbi gravida mauris nisl, vel maximus
						est varius eget. Maecenas consectetur dui nulla, et tincidunt libero
						lacinia at. Phasellus eleifend ligula et augue accumsan
						sollicitudin. Praesent cursus sit amet tortor ut elementum. Nunc
						cursus nunc eu diam varius, id venenatis elit pretium. Phasellus id
						ipsum placerat, egestas turpis vitae, ultricies ex. Sed nec placerat
						justo, at congue sem. Aliquam erat volutpat. Curabitur vitae erat
						dolor. Vivamus ac est felis. Quisque sed dui ut ante blandit
						fermentum. Fusce pellentesque dui orci, sit amet blandit ipsum
						vehicula eu. Mauris leo dui, interdum eget erat rhoncus, pulvinar
						tempus ex.
					</p>

					<p>
						Vestibulum eu massa leo. Proin suscipit aliquam justo at volutpat.
						Maecenas tristique felis vitae tempus commodo. Nunc suscipit sapien
						quis arcu volutpat posuere eget sit amet dolor. Etiam tincidunt ex
						sed purus pellentesque, quis rutrum augue volutpat. Aliquam non
						lacus auctor, tempus leo quis, interdum lorem. Phasellus vitae
						iaculis massa, feugiat iaculis tellus. Nulla justo dui, porttitor
						sit amet hendrerit sit amet, ultricies vitae ipsum. In hac habitasse
						platea dictumst. Suspendisse gravida vel mauris vitae fringilla.
						Curabitur vitae ligula non diam ultricies lacinia.
					</p>
					<p>
						Mauris auctor eget arcu convallis malesuada. Nullam vitae sem eu
						metus porta aliquet sit amet vel ipsum. Cras ex urna, commodo sit
						amet enim quis, eleifend imperdiet risus. In non mauris sagittis,
						elementum turpis vitae, mollis leo. Morbi blandit ornare purus vitae
						blandit. Cras posuere gravida risus ac malesuada. Morbi venenatis
						felis orci, volutpat efficitur odio placerat et. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Donec maximus in
						sapien ut scelerisque. Morbi enim orci, ultricies et ex ut, finibus
						auctor risus. Sed tempor lorem augue, vitae luctus eros facilisis
						sit amet.
					</p>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};

export const Horizontal: Story = {
	render: () => (
		<ScrollArea.Root className="w-96 rounded-md border">
			<ScrollArea.Viewport>
				<ScrollArea.Content className="p-4">
					<div className="flex gap-4">
						{Array.from({ length: 20 }, (_, i) => `item-${i}`).map(
							(itemId, i) => (
								<div
									key={itemId}
									className="bg-muted text-muted-foreground text-nowrap rounded-md px-3 py-1 text-sm"
								>
									Item {i + 1}
								</div>
							),
						)}
					</div>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};
