import { configStorybook } from './config-storybook';

describe('configStorybook', () => {
  it('should work', () => {
    expect(configStorybook()).toEqual('config-storybook');
  });
});
