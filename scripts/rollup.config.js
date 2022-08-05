import path from 'path';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
// import sucrase from '@rollup/plugin-sucrase';
import typescriptEngine from 'typescript';
import json from '@rollup/plugin-json';

import pkg from '../package.json';

const outputs = [
  {
    file: path.resolve(__dirname, '..', pkg.main),
    format: 'umd',
    name: 'ReactSimpleClamp',
    isExternal: true,
    isUglify: true,
  },
  {
    file: path.resolve(__dirname, '..', pkg.module),
    format: 'es',
    isExternal: true,
    isUglify: true,
  },
];

const config = outputs.map((output, i) => {
  const isUglify = output.isUglify || false;
  const isExternal = output.isExternal || false;
  return {
    input: 'src/index.tsx',
    output,
    plugins: [
      json(),
      nodeResolve({ browser: true }),
      commonjs(),
      postcss({
        extract: false,
        minimize: true,
        extensions: ['.css', '.less'],
        plugins: [autoprefixer],
      }),
      typescript({
        typescript: typescriptEngine,
        include: ['*.js+(|x)', '**/*.js+(|x)'],
        exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
      }),
      // typescript(),
      // sucrase({
      //   exclude: ['node_modules/**'],
      //   transforms: ['typescript', 'jsx'],
      // }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      progress(),
      ...(isUglify ? [terser()] : []),
    ],
    external: !isExternal ? false : ['react', 'react-dom'],
    globals: !isExternal
      ? false
      : {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
  };
});

export default config;
