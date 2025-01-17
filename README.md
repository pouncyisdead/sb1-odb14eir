# Web Components Library: sb1-odb14eir

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/pouncyisdead/sb1-odb14eir)

## Development Setup

1. Install NVM (Node Version Manager):

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. Install and use the correct Node.js version:

   ```bash
   nvm install
   nvm use
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

- `npm run build` - Build all packages
- `npm run test` - Run tests across all packages
- `npm run lint` - Lint all packages
- `npm run serve:components` - Start the development server for components
- `npm run build:components` - Build the components package
- `npm run test:components` - Run component tests
- `npm run lint:components` - Lint components package
- `npm run format` - Format all files using Prettier
- `npm run validate` - Run type checking, linting, and tests

## Project Structure

```text
📁 packages/
└─📁 components/        # Web components library
  └─📁 src/
    ├─📁 components/    # Individual components
    ├─📁 styles/        # Shared styles and themes
    └─📁 utils/         # Utility functions
```

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and development process.
