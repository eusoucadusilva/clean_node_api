module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/key-spacing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
