import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [baseConfig],
};

export default config;
