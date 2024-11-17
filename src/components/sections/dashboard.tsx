import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import NutrientChart from './nutritient-chart';
import VitaminaChart from './vitaminas-chart';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import React from 'react';

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="px-12 mt-5 ml-16 w-full">
      <div className="flex">
        <Card className="bg-white text-black h-80 w-[900px]">
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
        </Card>
        <Card className="ml-3 h-[320px]">
          <CardHeader className="text-2xl font-bold">Calendário</CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="h-full w-full flex"
              classNames={{
                months:
                  'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
                month: 'space-y-4 w-full flex flex-col',
                table: 'w-full h-full border-collapse space-y-1',
                head_row: '',
                row: 'w-full mt-2',
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex space-x-3 mt-3">
        <NutrientChart />
        <VitaminaChart />
        <Card className="bg-white text-black w-[630px]">
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
        </Card>
      </div>
    </div>
  );
}
