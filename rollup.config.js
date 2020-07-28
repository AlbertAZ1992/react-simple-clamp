import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
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
      name: 'demo',
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};

export default options;
