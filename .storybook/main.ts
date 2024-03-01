import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/style": path.resolve(__dirname, "../src/style"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/": path.resolve(__dirname, "../src"),
        "next/navigation": require.resolve("./__mock__/next/navigation.js"),
      };
    }

    return config;
  },
};
export default config;
