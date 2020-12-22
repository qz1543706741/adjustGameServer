module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/recommended', '@vue/airbnb', 'eslint-config-prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-deprecated': ['error'],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'no-warning-comments': ['error', { terms: ['xxx'] }],
    'no-return-assign': ['error', 'except-parens'],
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'vue/require-default-prop': 'off',
    'no-void': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ['@','./src']
        ]
      }
    }
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
