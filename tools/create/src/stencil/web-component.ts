import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names as nameUtils,
} from '@nx/devkit';
import * as path from 'path';
import { componentGenerator } from '@nxext/stencil';
import { WebComponentGeneratorSchema } from './schema';

// ------------------------------------------------------------ //

function createStoryFile(tree: Tree, options: WebComponentGeneratorSchema) {
  const componentDir = path.join(
    'packages',
    options.project,
    'src/components',
    options.directory || '',
    nameUtils(options.name).fileName,
  );

  generateFiles(tree, path.join(__dirname, 'files'), componentDir, {
    ...options,
    ...nameUtils(options.name),
    template: '',
  });
}

export async function webComponentGenerator(
  tree: Tree,
  schema: WebComponentGeneratorSchema,
) {
  // Generate Stencil component using @nxext/stencil
  await componentGenerator(tree, {
    name: schema.name,
    project: schema.project,
    directory: schema.directory || 'components',
    style: 'scss',
  });

  // Create matching story file
  createStoryFile(tree, schema);

  await formatFiles(tree);
}

// ------------------------------------------------------------ //

export default webComponentGenerator;

// ------------------------------------------------------------ //

export async function _webComponentGenerator(
  tree: Tree,
  options: WebComponentGeneratorSchema,
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

// ------------------------------------------------------------ //
