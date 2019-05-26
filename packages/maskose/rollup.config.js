import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: 'a.js',
    format: 'cjs',
    esModule: false
  },
  plugins: [
    typescript()
  ]
};