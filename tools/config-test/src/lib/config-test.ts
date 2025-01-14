/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */

// tools/config-test/src/lib/config-test.ts
// SEE: `https://storybook.js.org/docs/api/main-config/main-config`.

import { Parameters, ProjectAnnotations } from 'storybook/internal/types';

/**
 * Interface representing the documentation configuration.
 */
interface SbMainDocs {
  /**
   * Autodocs configuration.
   * @type {string}
   */
  autodocs: string;

  /**
   * Default name for the documentation.
   * @type {string}
   */
  defaultName: string;
}

/**
 * Type representing the features configuration.
 * @typedef {Object} SbMainFeatures
 * @property {boolean} buildStoriesJson - Indicates if the stories JSON should be built.
 */
type SbMainFeatures = any & {
  buildStoriesJson: boolean;
};

/**
 * Interface representing the core configuration.
 */
interface SbMainCore {
  /**
   * Indicates if telemetry should be disabled.
   * @type {boolean}
   */
  disableTelemetry: boolean;
}

/**
 * Interface representing the main configuration,
 * is used to configure various aspects of Storybook.
 */
interface SbMainConfig {
  /**
   * An array of paths or glob patterns to locate story files.
   * @type {string[]}
   */
  stories: string[];

  /**
   * An array of Storybook addons to enhance functionality.
   * @type {string[]}
   */
  addons: string[];

  /**
   * Documentation configuration.
   * @type {SbMainDocs}
   */
  docs: SbMainDocs;

  /**
   * Features configuration.
   * @type {SbMainFeatures | any}
   */
  features?: SbMainFeatures | any;

  /**
   * Core configuration.
   * @type {SbMainCore}
   */
  core: SbMainCore;

  /**
   * Function to modify the manager head.
   * @param {string} [mhead] - Optional manager head string.
   * @returns {string} Modified manager head.
   */
  managerHead: (mhead?: string) => string;

  /**
   * Function to modify the preview head.
   * @param {string} [phead] - Optional preview head string.
   * @returns {string} Modified preview head.
   */
  previewHead: (phead?: string) => string;

  /**
   * List of static directories.
   * @type {string[]}
   */
  staticDirs: string[];
}

/** Test function to return a string. */
export function configTest(): string {
  var _retVal = 'config-test',
    _args = arguments;
  return _retVal;
}

/** Glob pattern of paths to return stories from */
export const sbMainStories = [
  '../src/**/*.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];

/** An array of Storybook addons to enhance functionality. */
export const sbMainAddons = [
  '@storybook/addon-essentials',
  '@storybook/addon-designs',
  '@storybook/addon-interactions',
  '@storybook/addon-a11y',
  '@storybook/addon-styling',
  '@storybook/addon-links',
  '@storybook/addon-docs',
  '@storybook/blocks',
];

/** Documentation configuration. */
export const sbMainDocs = {
  autodocs: 'tag',
  defaultName: 'Docs',
};

/** Enable or disable experimental features. */
export const sbMainFeatures = {
  buildStoriesJson: true,
};

/** List of static directories. */
export const sbMainStaticDirs = ['./static'];

/** Core configuration options like disabling telemetry. */
export const sbMainCore = {
  disableTelemetry: true,
};

/**
 * Function to modify the Storybook configuration based on the environment.
 *
 * @param {any} _config - The Storybook configuration object.
 * @param {any} configType - The environment configuration type.
 * @returns {any} The modified Storybook configuration object.
 */
export function sbConfigMode(_config: any, { configType }: any) {
  if (configType === 'DEVELOPMENT') {
    // Your development configuration goes here
  }
  if (configType === 'PRODUCTION') {
    // Your production configuration goes here.
  }
  if (configType != 'PRODUCTION' && configType != 'DEVELOPMENT') {
    // Your other configurations go here.
  }
  return _config;
}

/** Storybook main configuration export. */
export const sbMainConfig = {
  stories: sbMainStories,
  addons: sbMainAddons,
  docs: sbMainDocs,
  features: sbMainFeatures,
  core: sbMainCore,
  managerHead: (mhead?: string) => `${mhead}`,
  previewHead: (phead?: string) => `${phead}`,
  // previewHead: (phead?: string) =>
  //   `${phead}<style>body,.sb-main,.sb-show-main,.sb-main-centered,.sb-wrapper{font-family:'Helvetica Now','Helvetica Neue',Helvetica,Arial,'Segoe UI',Noto,'Open Sans',Arial,-apple-system,system-ui,BlinkMacSystemFont,sans-serif}</style>`,
  staticDirs: sbMainStaticDirs,
};

/**
 * Function to modify & return the storybook main configuration.
 *
 * @param {...Partial<SbMainConfig>[]} rest
 * @returns {SbMainConfig}
 */
export const storybookMain = (
  ...rest: Partial<SbMainConfig>[]
): SbMainConfig => ({
  ...sbMainConfig,
  ...rest.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
});

/**
 * URL to the Figma (figspec) design file.
 * @type {string}
 */
export const figmaUrl =
  'https://www.figma.com/file/RPtQ3VxEzuzddAR3lKIfAY/Tune-2.0-%2F-Components';

/**
 * Storybook documentation configuration.
 * @type {object}
 */
export const sbPreviewDocs: object = {
  story: {
    inline: true,
    height: '150px',
  },
};

/**
 * Storybook tags configuration.
 * @type {string[]}
 */
export const sbPreviewTags: string[] = ['autodocs'];

/**
 * Storybook preview parameters.
 * @type {Parameters}
 */
export const sbPreviewParameters: Parameters = {
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
  docs: sbPreviewDocs,
};

/** Runs a callback function, like `setCustomElementsManifest`, in the preview frame. */
export async function sbPreviewIife(
  win: Window | typeof globalThis,
  callbackFn?: () => unknown,
) {
  win.setTimeout(() => {
    (win as any).global = win;
    if (callbackFn && typeof callbackFn == 'function') {
      callbackFn();
    }
  }, 0);
}

/**
 * Storybook preview configuration export.
 * @type {ProjectAnnotations}
 * @see {@link https://storybook.js.org/docs/configure#configure-story-rendering}
 */
export const sbPreviewConfig: ProjectAnnotations<any> = {
  tags: sbPreviewTags,
  parameters: sbPreviewParameters,
};

export const storybookPreview = (...rest: any[]) => ({
  ...sbPreviewConfig,
  ...rest.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
});
