module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': 'off',
    'react/prop-types': [0, { ignore: ['ignore'], customValidators: ['customValidator'] }],
    'react/no-unescaped-entities': 0,
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
