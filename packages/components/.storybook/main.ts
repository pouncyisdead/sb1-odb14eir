import type { StorybookConfig } from '@storybook/web-components-vite';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
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
} as StorybookConfig;

export default config;