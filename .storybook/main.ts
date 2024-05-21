const config = {
  stories: ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@chromatic-com/storybook"
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

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;