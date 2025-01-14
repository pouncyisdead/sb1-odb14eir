/* eslint-disable @nx/enforce-module-boundaries */
import {
  Parameters,
  Preview,
  setCustomElementsManifest,
} from '@storybook/web-components';
import { defineCustomElements } from '../../../dist/packages/components/loader';
import customElements from '../custom-elements.json';
// import { configStorybook } from '../../../dist/tools/config-test/';

(async (win) => {
  win.setTimeout(() => {
    win.global = win;
    setCustomElementsManifest(customElements);
    defineCustomElements(win);
  }, 0);
})(window);

/**
 * URL to the Figma design file.
 * @type {string}
 */
const figmaUrl =
  'https://www.figma.com/file/RPtQ3VxEzuzddAR3lKIfAY/Tune-2.0-%2F-Components';

/**
 * Storybook documentation configuration.
 * @type {object}
 */
const docs = {
  story: {
    inline: true,
    height: '150px',
  },
};

/**
 * Storybook tags configuration.
 * @type {object}
 */
const tags = ['autodocs'];

/**
 * Storybook preview parameters.
 * @type {Parameters}
 */
const parameters: Parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: true,
        },
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  design: {
    type: 'figma',
    url: figmaUrl,
  },
  docs,
};

/**
 * Storybook preview configuration export.
 * @type {Preview}
 */
export default {
  tags,
  parameters,
} satisfies Preview;
