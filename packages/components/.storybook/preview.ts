import {
  Preview,
  setCustomElementsManifest,
  Parameters,
} from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

/**
 * URL to the Figma design file.
 * @type {string}
 */
const url =
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
    url,
  },
  docs,
};

/**
 * Storybook tags configuration.
 * @type {object}
 */
const tags = ['autodocs'];

/**
 * Storybook preview configuration export.
 * @type {Preview}
 */
export default {
  tags,
  parameters,
} satisfies Preview;
