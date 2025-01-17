import {
  formatFiles,
  generateFiles,
  names as nameUtils,
  Tree,
} from '@nx/devkit';
import { componentGenerator } from '@nxext/stencil';
import * as path from 'path';
import { WebComponentGeneratorSchema as WCGSchema } from './schema';

// ------------------------------------------------------------ //

/**
 * Creates a story file for the web component.
 * @param {Tree} tree - The file system tree.
 * @param {WCGSchema} options - The options for the web component generator.
 */
function createStoryFile(tree: Tree, options: WCGSchema) {
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

/**
 * Generate a web component using Stencil and Nx.
 * @param {Tree} tree - The file system tree.
 * @param {WCGSchema} schema - The schema for the web component generator.
 * @returns {Promise<void>} A promise that resolves when the component is generated.
 */
export async function webComponentGenerator(tree: Tree, schema: WCGSchema) {
  // Generate Stencil component using @nxext/stencil
  await componentGenerator(tree, {
    name: schema.name,
    project: schema.project,
    directory: schema.directory,
  });

  // Creates a story file for the web component.
  createStoryFile(tree, schema);

  // Formats all the created or updated files using Prettier.
  await formatFiles(tree);
}

// ------------------------------------------------------------ //

export default webComponentGenerator;
