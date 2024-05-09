module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'semi': ['error', 'never'], // Disallow semicolons at the end
    'quotes': ['error', 'single'], // Use single quotes
    '@typescript-eslint/no-explicit-any': 'off', // Allow any
  },
}
