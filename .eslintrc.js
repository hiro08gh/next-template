module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': ['off', {}],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 1 }],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    // FIXME use NonNullable<T> instead
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off'
  }
};
