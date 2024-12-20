import {
  Preview,
  setCustomElementsManifest,
  Parameters,
} from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

export const tags = ['autodocs'];

export const parameters: Parameters = {
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
    url: 'https://www.figma.com/design/RPtQ3VxEzuzddAR3lKIfAY/Tune-2.0-%2F-Components',
  },
  docs: {
    story: {
      inline: true,
      height: '150px',
    },
  },
};

export default {
  tags,
  parameters,
} satisfies Preview;
