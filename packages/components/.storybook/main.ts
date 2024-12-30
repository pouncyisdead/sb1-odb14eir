import type { StorybookConfig } from '@storybook/web-components-vite';

const config = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components-vite',
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  // SEE: https://nx.dev/recipes/storybook/custom-builder-configs
} as StorybookConfig;

export default config;
