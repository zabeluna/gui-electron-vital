import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraphicsCard } from "./graphics-card"


export function Dashboard () {
  return(
    <div className="ml-28 mt-5">
      <Card className="bg-white text-black h-80">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p> hdfjkdshfjdshfjhsdjfhsjdfhjsdhfjskdhfjksdhfjksdhfjksdhfjkshfjkshfkj</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
<div></div>
<GraphicsCard/>

    </div>
  )
}
