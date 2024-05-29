const config = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  docs: {
    theme: "@storybook/addon-docs",
    source: {
      type: "dynamic",
    },
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/manager-api",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      postCss: {
        implementation: require("postcss"),
      },
      builder: {
        viteConfigPath: "./vite.config.ts",
      }
    },
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;