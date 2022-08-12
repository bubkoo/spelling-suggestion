import config from '@bubkoo/rollup-config'

export default config({
  output: [
    {
      name: 'getSpellingSuggestion',
      format: 'umd',
      file: 'dist/index.js',
      sourcemap: true,
    },
  ],
})
