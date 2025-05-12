import { Button } from "@/components/Button";

export default function Home() {
  return ( 
    <div className="bg-black w-full grid grid-cols-3 gap-4 justify-center items-center h-screen">
      <Button variant="default" mode="default" disabled>Click me</Button>
      <Button variant="default" mode="outline" disabled>Click me</Button>
      <Button variant="default" mode="text" disabled>Click me</Button>
      <Button variant="error" mode="default">Click me</Button>
      <Button variant="error" mode="outline">Click me</Button>
      <Button variant="error" mode="text">Click me</Button>
      <Button variant="gray"  >Click me</Button>
      <Button variant="gray" >Click me</Button>
      <Button variant="gray">Click me</Button>
     
      
    </div>
  );
}
