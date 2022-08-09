const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {
        directory: ['./src/tsconfig.json', './scripts/tsconfig.json'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'unicorn', 'promise'],
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'consistent-return': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'react/jsx-fragments': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/no-unused-prop-types': OFF,
    'func-names': OFF,
    'lines-between-class-members': OFF,
    'max-classes-per-file': OFF,
    'no-console': OFF,
    'no-empty': OFF,
    'no-bitwise': OFF,
    'no-param-reassign': OFF,
    'no-plusplus': OFF,
    'no-continue': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-expressions': OFF,
    'no-useless-constructor': OFF,
    'no-empty-function': OFF,
    'unicorn/no-null': OFF,
    'unicorn/prevent-abbreviations': OFF,
    'unicorn/no-process-exit': OFF,
    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          kebabCase: false,
          camelCase: true,
          snakeCase: false,
          pascalCase: true,
        },
      },
    ],
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-useless-constructor': ERROR,
  },
  ignorePatterns: ['example/**/*', 'scripts/**/*'],
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
      },
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
      },
    },
  ],
};
