/* eslint-disable @typescript-eslint/no-explicit-any */
// configs/storybook/main.ts

export const sbMainStories = [
  '../src/**/*.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];

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

export const sbMainDocs = {
  autodocs: 'tag',
  defaultName: 'Docs',
};

export const sbMainFeatures = {
  buildStoriesJson: true,
};

export const sbMainStaticDirs = ['./static'];

export const sbMainCore = {
  disableTelemetry: true,
};

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

export const storybookMain = (...rest: any[]) => ({ ...sbMainConfig, ...rest });
