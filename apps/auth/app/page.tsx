import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Login Page</h1>
      <Button appName="auth">Login</Button>
    </main>
  );
}
