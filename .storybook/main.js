module.exports = {
  framework: '@storybook/react',
  stories: ['../components/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    const { dirname } = require("path");

    // https://github.com/eirslett/storybook-builder-vite/issues/55
    config.root = dirname(require.resolve("storybook-builder-vite"));
    config.server.fsServe = undefined;
    // customize the Vite config here
    return config;
  },
  logLevel: 'debug',
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'none',
  },

};
