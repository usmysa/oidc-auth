import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Login Page</h1>
      <Button className="bg-green-500">Green</Button>
      <Button className="bg-yellow-500">Yellow</Button>
    </main>
  );
}
