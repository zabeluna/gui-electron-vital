'use client';

import { TrendingUp } from 'lucide-react';
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
  { month: 'nutriente', desktop: 186 },
  { month: 'nutriente', desktop: 305 },
  { month: 'nutriente', desktop: 237 },
  { month: 'nutriente', desktop: 73 },
  { month: 'nutriente', desktop: 209 },
  { month: 'nutriente', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Nutrientes',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Nutrientes</CardTitle>
        <CardDescription>Nutrientes presentes no alimento</CardDescription>
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
              className=''
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="-mt-9"></CardFooter>
    </Card>
  );
}
