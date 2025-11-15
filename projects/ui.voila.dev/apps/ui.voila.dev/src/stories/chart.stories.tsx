import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chart, type ChartConfig } from "@voila.dev/ui/components/chart";
import {
	Area,
	Bar,
	CartesianGrid,
	Line,
	AreaChart as RechartsAreaChart,
	BarChart as RechartsBarChart,
	LineChart as RechartsLineChart,
	XAxis,
	YAxis,
} from "recharts";

const meta = {
	title: "UI/Chart",
	component: Chart.Container,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Chart.Container>;

export default meta;
type Story = StoryObj<typeof Chart.Container>;

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const chartConfig: ChartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
	},
};

export const LineChartStory: Story = {
	render: () => (
		<Chart.Container
			config={chartConfig}
			className="h-[300px] w-full max-w-[600px]"
		>
			<RechartsLineChart
				data={chartData}
				margin={{
					left: 12,
					right: 12,
					top: 12,
					bottom: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<Chart.Tooltip
					cursor={false}
					content={<Chart.TooltipContent indicator="dot" />}
				/>
				<Line
					dataKey="mobile"
					type="monotone"
					stroke="var(--color-mobile)"
					strokeWidth={2}
					dot={false}
				/>
				<Line
					dataKey="desktop"
					type="monotone"
					stroke="var(--color-desktop)"
					strokeWidth={2}
					dot={false}
				/>
			</RechartsLineChart>
		</Chart.Container>
	),
};

export const AreaChart: Story = {
	render: () => (
		<Chart.Container
			config={chartConfig}
			className="h-[300px] w-full max-w-[600px]"
		>
			<RechartsAreaChart
				data={chartData}
				margin={{
					left: 12,
					right: 12,
					top: 12,
					bottom: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<Chart.Tooltip
					cursor={false}
					content={<Chart.TooltipContent indicator="dot" />}
				/>
				<defs>
					<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="var(--color-mobile)"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="var(--color-mobile)"
							stopOpacity={0.1}
						/>
					</linearGradient>
					<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="var(--color-desktop)"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="var(--color-desktop)"
							stopOpacity={0.1}
						/>
					</linearGradient>
				</defs>
				<Area
					dataKey="mobile"
					type="natural"
					fill="url(#fillMobile)"
					fillOpacity={0.4}
					stroke="var(--color-mobile)"
					stackId="a"
				/>
				<Area
					dataKey="desktop"
					type="natural"
					fill="url(#fillDesktop)"
					fillOpacity={0.4}
					stroke="var(--color-desktop)"
					stackId="a"
				/>
			</RechartsAreaChart>
		</Chart.Container>
	),
};

export const BarChart: Story = {
	render: () => (
		<Chart.Container
			config={chartConfig}
			className="h-[300px] w-full max-w-[600px]"
		>
			<RechartsBarChart
				data={chartData}
				margin={{
					left: 12,
					right: 12,
					top: 12,
					bottom: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<Chart.Tooltip
					cursor={false}
					content={<Chart.TooltipContent indicator="dot" />}
				/>
				<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
				<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
			</RechartsBarChart>
		</Chart.Container>
	),
};

export const WithLegend: Story = {
	render: () => (
		<Chart.Container
			config={chartConfig}
			className="h-[300px] w-full max-w-[600px]"
		>
			<RechartsLineChart
				data={chartData}
				margin={{
					left: 12,
					right: 12,
					top: 12,
					bottom: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<Chart.Tooltip
					cursor={false}
					content={<Chart.TooltipContent indicator="dot" />}
				/>
				<Chart.Legend content={<Chart.LegendContent />} />
				<Line
					dataKey="mobile"
					type="monotone"
					stroke="var(--color-mobile)"
					strokeWidth={2}
					dot={false}
				/>
				<Line
					dataKey="desktop"
					type="monotone"
					stroke="var(--color-desktop)"
					strokeWidth={2}
					dot={false}
				/>
			</RechartsLineChart>
		</Chart.Container>
	),
};
