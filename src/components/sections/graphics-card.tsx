import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Component } from "./test-graphic"


export function GraphicsCard () {
  return(
    <div className="ml-28 mt-3">
<Component/>
      <div></div>
   <Card className="bg-white text-black h-60 mt-3">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

<div></div>

    </div>


  )
}
