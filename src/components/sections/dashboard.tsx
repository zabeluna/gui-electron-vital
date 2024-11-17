import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import NutrientChart from './test-graphic';

export default function Dashboard() {
  return (
    <div className="mt-5 px-12">
      <Card className="bg-white text-black w-[500px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <span>here</span>
        </CardContent>
      </Card>
      <NutrientChart />
    </div>
  );
}
