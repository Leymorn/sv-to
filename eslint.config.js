import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astro.parser,
            parserOptions: {
                extraFileExtensions: ['.astro'],
                parser: tsparser,
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        plugins: {
            astro,
            prettier,
        },
        rules: {
            ...astro.configs.recommended.rules,
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['**/*.{ts,js}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            'prettier/prettier': 'error',
        },
    },
];
