import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
