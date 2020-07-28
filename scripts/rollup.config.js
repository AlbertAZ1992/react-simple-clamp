const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('rollup-plugin-postcss');
const clear = require('rollup-plugin-clear');
const progress = require('rollup-plugin-progress');
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const options = {
  input: 'src/index.tsx',
  output: [
    {
      file: path.resolve(__dirname, pkg.main),
      format: 'cjs',
    },
    {
      file: path.resolve(__dirname, pkg.module),
      format: 'es',
    },
    {
      file: path.resolve(__dirname, pkg.unpkg),
      format: 'umd',
      plugins: [terser()],
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'] }),
    commonjs(),
    clear({
      targets: ['dist', 'es', 'lib'],
    }),
    postcss({
      extract: false,
      minimize: true,
      extensions: ['css', 'less'],
      plugins: [autoprefixer],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true,
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    progress({ clearLine: false }),
  ],
};

export default options;
