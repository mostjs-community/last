import buba from 'rollup-plugin-buba'

export default {
  entry: "src/index.js",
  dest: "dist/most-last.js",
  moduleName: "mostLast",
  format: "umd",
  plugins: [ buba() ]
}
