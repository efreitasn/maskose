import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      esModule: false
    },
    {
      file: './dist/index.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve({
      extensions: [
        '.ts'
      ]
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: [
        '.ts'
      ]
    }),
    terser()
  ]
};