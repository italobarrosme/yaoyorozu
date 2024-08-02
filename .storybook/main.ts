const config = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  docs: {
    theme: '@storybook/addon-docs',
    source: {
      type: 'dynamic',
    },
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/manager-api',
  ],

  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },

  framework: {
    name: '@storybook/react-vite',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
