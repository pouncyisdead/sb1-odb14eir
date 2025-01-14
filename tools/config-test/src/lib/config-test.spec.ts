import { configTest } from './config-test';

describe('configTest', () => {
  it('should work', () => {
    expect(configTest()).toEqual('config-test');
  });
});
