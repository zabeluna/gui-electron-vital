import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraphicsCard } from './graphics-card';
import { Button } from '@/components/ui/button';

export function Dashboard() {
  return (
    <div className="ml-28 mt-5">
      <Card className="bg-white text-black h-80">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid justify-end">
            <button className="bg-green-500 rounded-md h-9 w-16"></button>
            <button className="bg-green-500 rounded-md h-9 w-16 mt-2"></button>
            <button className="bg-green-500 rounded-md h-9 w-16 mt-2"></button>
            <button className="bg-green-500 rounded-md h-9 w-16 mt-2"></button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div></div>
      <GraphicsCard />
    </div>
  );
}
