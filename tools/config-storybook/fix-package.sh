cat >./dist/cjs/package.json <<!EOF
{
  "name": "@example/config-storybook",
  "type": "commonjs",
  "main": "./src/index.js",
  "exports": {
    ".": {
      "require": "./src/index.js"
    }
  }
}
!EOF

cat >./dist/mjs/package.json <<!EOF
{
  "name": "@ds/config-storybook",
  "type": "module",
  "module": "./src/index.js",
  "exports": {
    ".": {
      "require": "./src/index.js"
    }
  }
}
!EOF

cat >./dist/package.json <<!EOF
{
  "name": "@ds/config-storybook",
  "version": "0.0.0",
  "main": "./cjs/src/index.js",
  "module": "./mjs/src/index.js",
  "exports": {
    ".": {
      "import": "./mjs/src/index.js",
      "require": "./cjs/src/index.js"
    }
  }
}
!EOF
