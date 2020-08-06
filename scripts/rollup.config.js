import path from 'path';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import sucrase from '@rollup/plugin-sucrase';

import pkg from '../package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const options = {
  input: 'src/index.tsx',
  output: [
    {
      file: path.resolve(__dirname, '..', pkg.main),
      format: 'cjs',
    },
    {
      file: path.resolve(__dirname, '..', pkg.module),
      format: 'es',
    },
    {
      file: path.resolve(__dirname, '..', pkg.unpkg),
      format: 'umd',
      name: 'index',
      plugins: [terser()],
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    clear({
      targets: ['dist', 'es', 'lib'],
    }),
    postcss({
      extract: false,
      minimize: true,
      extensions: ['.css', '.less'],
      plugins: [autoprefixer],
    }),
    typescript(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript', 'jsx'],
    }),
    babel({
      extensions,
      include: ['src/**/*', 'example/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    progress({ clearLine: false }),
  ],
};

export default options;
