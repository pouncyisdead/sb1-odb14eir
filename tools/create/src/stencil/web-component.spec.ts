import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {
  ProjectConfiguration,
  Tree,
  addProjectConfiguration,
  readProjectConfiguration,
  removeProjectConfiguration,
} from '@nx/devkit';

import { webComponentGenerator } from './web-component';
import { WebComponentGeneratorSchema } from './schema';

describe('web-component generator', () => {
  let tree: Tree;
  const projectName = 'test-project';
  const options: WebComponentGeneratorSchema = {
    name: 'test-component',
    project: projectName,
    style: 'scss',
  };
  const testConfig: ProjectConfiguration = {
    root: `./packages/${projectName}`,
    sourceRoot: './packages/test-project/src',
    projectType: 'library',
    targets: { build: { executor: '@nxext/stencil:build' } },
  };

  beforeAll(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
    addProjectConfiguration(tree, projectName, testConfig, false);
  });

  afterAll(() => {
    removeProjectConfiguration(tree, projectName);
  });

  it('should run successfully', async () => {
    await webComponentGenerator(tree, options);
    const config = readProjectConfiguration(tree, projectName);
    expect(config).toBeDefined(); // failing
  });
});
