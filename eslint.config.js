import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {ignores: ['dist/']},
  {files: ['src/*.{js,ts}']},
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
    {
        rules: {
            'quotes': [2, 'single', {'avoidEscape': true}],
            'prefer-const': ['error', {'ignoreReadBeforeAssign': true}],
            '@typescript-eslint/no-explicit-any': 'off',
            'no-useless-escape': 'off'
        }
    }

];