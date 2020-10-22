module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false,
        },
    },
    overrides: [
        {
            files: ['*.wxml'],

        },
    ],
};
