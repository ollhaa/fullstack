import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

module.exports = {
  // ...
  'plugins': [
      '@stylistic/js'
  ],
  'extends': 'eslint:recommended',
  'rules': {
      '@stylistic/js/indent': [
          'error',
          2
      ],
      '@stylistic/js/linebreak-style': [
          'error',
          'unix'
      ],
      '@stylistic/js/quotes': [
          'error',
          'single'
      ],
      '@stylistic/js/semi': [
          'error',
          'never'
      ],
  }
}