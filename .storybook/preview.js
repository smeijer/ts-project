import { addons } from '@storybook/addons';
import pkg from '../package.json';

// reuse jest globals
Object.assign(global, pkg.jest.globals);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

// Some stories may set up keyboard event handlers, which interfers with storybook
addons.setConfig({
  enableShortcuts: false,
});
