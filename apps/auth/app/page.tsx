import { Button } from "@repo/ui/button";
import { Flex } from "@repo/ui/flex";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1>Login Page</h1>
      <div>
        <Flex>
          <Button>Login</Button>
          <Button>Login</Button>
          <button className="bg-red-500">TEST</button>
          <button>TEST</button>
        </Flex>
      </div>
    </main>
  );
}
