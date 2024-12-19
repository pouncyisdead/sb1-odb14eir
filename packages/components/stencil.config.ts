import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { generateCustomElementsJson } from './src/utils/elements';

const footerMsg =
  'Built with ❤ by *[DSLAB](https://gh.sxm.com/orgs/product-design/teams/dslab)*';

export const config: Config = {
  namespace: 'components',
  taskQueue: 'async',
  sourceMap: true,
  extras: { experimentalImportInjection: true },
  plugins: [
    sass
      ({
        /*
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
        'src/styles/_functions.scss',
      ],
      */
    }),
  ],
  testing: {
    browserHeadless: true,
    moduleNameMapper: {
      '@utils/(.*)': '<rootDir>/src/utils/$1',
    },
  },
  enableCache: true,
  cacheDir: '../../.stencil/',
  devServer: {
    openBrowser: false,
    port: 8001,
  },
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements' },
    { type: 'docs-readme', footer: footerMsg },
    { type: 'docs-vscode', file: 'custom-elements.json' },
    { type: 'docs-custom', generator: generateCustomElementsJson },
    { type: 'www', serviceWorker: null },
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      includeGlobalScripts: true,
      minify: true,
    },
  ],
};