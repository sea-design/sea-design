const path = require('path');
module.exports = {
  "stories": [
    "../components/**/*.stories.@(tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport"
  ]
}