import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

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
  external: [
    'react',
    'maskose'
  ],
  plugins: [
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'useMemo',
          'useCallback'
        ]
      }
    }),
    resolve({
      extensions: [
        '.ts',
        '.tsx'
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      rootMode: 'upward',
      extensions: [
        '.ts',
        '.tsx'
      ]
    }),
    terser()
  ]
};