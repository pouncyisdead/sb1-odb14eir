import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { webComponentGenerator } from './web-component';
import { WebComponentGeneratorSchema } from './schema';

describe('web-component generator', () => {
  let tree: Tree;
  const options: WebComponentGeneratorSchema = {
    name: 'test-component',
    project: '',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await webComponentGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test-component');
    expect(config).toBeDefined(); // failing
  });
});
