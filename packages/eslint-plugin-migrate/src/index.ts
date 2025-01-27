import migrate from './migrate'

export default {
  rules: {
    rules: migrate,
  },
  configs: {
    recommended: {
      plugins: [
        '@stylistic/migrate',
      ],
      overrides: [
        {
          files: [
            '.eslintrc.js',
            '.eslintrc.cjs',
            '.eslintrc.json',
            'eslintrc.js',
            'eslintrc.cjs',
            'eslintrc.json',
            'eslint.config.js',
            'eslint.config.cjs',
            'eslint.config.ts',
            '**/eslint-config-*/index.js',
            '**/eslint-config-*/src/index.js',
            '**/eslint-config-*/src/index.ts',
            '**/eslint-config/index.js',
            '**/eslint-config/src/index.js',
            '**/eslint-config/src/index.ts',
          ],
          rules: {
            '@stylistic/migrate/rules': 'error',
          },
        },
      ],
    },
  },
}
