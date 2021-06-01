module.exports = {
  logLevel: 'debug',
  stories: ['../components/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'none',
  },
};
