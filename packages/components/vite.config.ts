import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: true,
    sourcemap: true,
  },
  server: {
    port: 8001,
    open: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/utils/variables" as *;
          @use "src/styles/utils/functions" as *;
          @use "src/styles/utils/mixins" as *;
        `,
      },
    },
  },
});
