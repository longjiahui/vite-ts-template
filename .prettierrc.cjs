module.exports = {
    printWidth: 150,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: 'all',
    bracketSpacing: true,
    endOfLine: 'lf',
    overrides: [
        {
            files: '*.tsx',
            options: {
                printWidth: 200,
            },
        },
    ],
}
