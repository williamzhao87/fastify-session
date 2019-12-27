import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'lib/fastifySession.js',
  output: {
    file: 'build/fastifySession.js',
    format: 'cjs',
    name: 'fastifySession',
    exports: 'named'
  },
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};