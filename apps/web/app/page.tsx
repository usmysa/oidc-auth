import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Web Page</h1>
      <Button className="bg-red-500">Red</Button>
      <Button className="bg-blue-500">Blue</Button>
    </main>
  );
}
