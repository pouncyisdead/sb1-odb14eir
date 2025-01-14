/* eslint-disable @nx/enforce-module-boundaries */
import { storybookMain } from '../../../dist/tools/config-test/';

const configMain = storybookMain();

const config = {
  ...configMain,
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['@storybook/web-components'],
      },
    });
  },
  staticDirs: [],
};

export default config;
