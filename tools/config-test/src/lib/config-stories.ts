/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, prefer-rest-params, no-var */

import { Parameters, ProjectAnnotations } from 'storybook/internal/types';

/**
 * @fileoverview Storybook configuration utilities for managing main and preview settings.
 * @module config-stories
 * @requires storybook/internal/types
 * @see {@link https://storybook.js.org/docs/api/main-config/main-config}
 */

/**
 * Documentation configuration interface for Storybook.
 * @interface SbMainDocs
 * @property {string} autodocs - Controls automatic documentation generation ('tag' | 'always' | 'never')
 * @property {string} defaultName - Default name for documentation pages
 */
interface SbMainDocs {
  autodocs: string;
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
 * Core configuration interface for Storybook features.
 * @interface SbMainCore
 * @property {boolean} disableTelemetry - Whether to disable Storybook's telemetry
 */
interface SbMainCore {
  disableTelemetry: boolean;
}

/**
 * Main configuration interface for Storybook.
 * @interface SbMainConfig
 * @property {string[]} stories - Array of story file patterns to include
 * @property {string[]} addons - List of Storybook addons to enable
 * @property {SbMainDocs} docs - Documentation configuration
 * @property {SbMainFeatures} [features] - Optional feature flags
 * @property {SbMainCore} core - Core Storybook configuration
 * @property {Function} managerHead - Function to modify manager head HTML
 * @property {Function} previewHead - Function to modify preview head HTML
 * @property {string[]} staticDirs - Directories to serve static files from
 */
interface SbMainConfig {
  stories: string[];
  addons: string[];
  docs: SbMainDocs;
  features?: SbMainFeatures;
  core: SbMainCore;
  managerHead: (mhead?: string) => string;
  previewHead: (phead?: string) => string;
  staticDirs: string[];
}

/** Test function to return a string. */
export function configStories(): string {
  var _retVal = 'config-stories',
    _args = arguments;
  return _retVal;
}

/**
 * Story file & MDX patterns to include in Storybook.
 * @constant {string[]}
 */
export const sbMainStories = [
  '../src/**/*.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];

/**
 * List of Storybook addons to enable.
 * @constant {string[]}
 */
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
 * Configures Storybook based on the environment.
 * @function sbConfigMode
 * @param {any} _config - The base Storybook configuration
 * @param {Object} params - Configuration parameters
 * @param {string} params.configType - Environment type ('DEVELOPMENT' | 'PRODUCTION')
 * @returns {any} Modified configuration object
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
 * Generates the main Storybook configuration by merging defaults with overrides.
 * @function storybookMain
 * @param {...Partial<SbMainConfig>} rest - Configuration overrides
 * @returns {SbMainConfig} Complete Storybook configuration
 * @example
 * const config = storybookMain({
 *   stories: ['./src/**\/*.stories.tsx'],
 *   addons: ['@storybook/addon-essentials']
 * });
 */
export const storybookMain = (
  ...rest: Partial<SbMainConfig>[]
): SbMainConfig => ({
  ...sbMainConfig,
  ...rest.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
});

/**
 * URL to the Figma design (figspec) file.
 * @constant {string}
 * @see {@link https://www.figma.com/file/RPtQ3VxEzuzddAR3lKIfAY/Tune-2.0-%2F-Components}
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
/**
 * Preview parameters for Storybook configuration.
 * @constant {Parameters}
 * @property {object} a11y - Accessibility testing configuration
 * @property {object} actions - Action handling configuration
 * @property {object} controls - Controls panel configuration
 * @property {object} design - Figma design integration settings
 * @property {object} docs - Documentation display settings
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

/**
 * Initializes the Storybook preview environment.
 * @async
 * @function sbPreviewIife
 * @param {Window | typeof globalThis} win - Window object to initialize
 * @param {Function} [callbackFn] - Optional callback to execute after initialization
 * @returns {Promise<void>}
 * @example
 * await sbPreviewIife(window, () => {
 *   setCustomElementsManifest(manifest);
 * });
 */
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

/**
 * Creates a preview configuration by merging default settings with custom overrides.
 * @function storybookPreview
 * @param {...any[]} rest - Custom preview configuration overrides
 * @returns {ProjectAnnotations<any>} Merged preview configuration
 * @example
 * const previewConfig = storybookPreview({parameters:{backgrounds:{default:'light'}}});
 */
export function storybookPreview(...rest: any[]) {
  return {
    ...sbPreviewConfig,
    ...rest.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  };
}
