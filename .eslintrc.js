module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'],
  ignorePatterns: ['@types', 'dist', 'out'],
  overrides: [
    {
      files: ['*.ts', '*[^.spec|^.test].ts'],
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    //
    'prettier',
    'react',
  ],
  root: true,
  rules: {
    camelcase: ['error', { allow: ['_UNSTABLE$'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        orderedImports: true,
        parser: 'typescript',
        printWidth: 140,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
