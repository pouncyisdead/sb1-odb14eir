import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'example-wc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
        'src/styles/_functions.scss',
      ],
    }),
  ],
  testing: {
    browserHeadless: true,
    moduleNameMapper: {
      '@utils/(.*)': '<rootDir>/src/utils/$1',
    },
  },
};