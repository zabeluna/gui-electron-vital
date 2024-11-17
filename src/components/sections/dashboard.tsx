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
    <div className="px-12 mt-5">
      <Card className="bg-white text-black w-[300px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <div className="grid justify-end"> */}
          {/*   <button className="bg-green-400 rounded-md h-9 w-16"></button> */}
          {/*   <button className="bg-green-400 rounded-md h-9 w-16 mt-2"></button> */}
          {/*   <button className="bg-green-400 rounded-md h-9 w-16 mt-2"></button> */}
          {/*   <button className="bg-green-400 rounded-md h-9 w-16 mt-2"></button> */}
          {/* </div> */}
        </CardContent>
      </Card>
      <NutrientChart />
    </div>
  );
}
