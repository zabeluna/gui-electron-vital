'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { month: 'vitaminas', desktop: 186 },
  { month: 'vitaminas', desktop: 305 },
  { month: 'vitamninas', desktop: 237 },
  { month: 'vitaminas', desktop: 73 },
  { month: 'vitaminas', desktop: 209 },
  { month: 'vitaminas', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Vitaminas',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function VitaminaChart() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Vitaminas</CardTitle>
        <CardDescription>Vitaminas presentes no alimento</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              className=""
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
