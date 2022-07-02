/**
 * @type { import("@storybook/core-common").StorybookConfig }
 **/
module.exports = {
  stories: ['../src'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
