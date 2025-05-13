import { Button } from "@/app/_components/Button";

export default function Home() {
  return (
    <div className="bg-black w-full grid grid-cols-3 gap-4 justify-center items-center h-screen">

      <Button variant="buttons">Click me</Button>
      <Button variant="buttons" >Click me</Button>
      <Button variant="buttons">Click me</Button>



    </div>
  );
}