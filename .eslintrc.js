module.exports = {
  root: true,

  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },

  plugins: ['prettier', 'vue'],

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  globals: {
    ga: true,
  },
};
