import typescript from 'rollup-plugin-typescript'

export default {
  entry: 'src/index.ts',
  dest: 'dist/most-last.js',
  moduleName: 'mostLast',
  format: 'umd',
  sourceMap: true,
  plugins: [ typescript() ]
}
