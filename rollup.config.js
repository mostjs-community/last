import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/most-last.js',
    name: 'mostLast',
    sourceMap: true,
    format: 'umd'
  },
  plugins: [ typescript() ]
}
