import path from 'path';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import typescriptEngine from 'typescript';
import json from '@rollup/plugin-json';
import summary from 'rollup-plugin-summary';
import { visualizer } from 'rollup-plugin-visualizer';
import pkg from '../package.json';


const outputs = [
  {
    file: path.resolve(__dirname, '..', pkg.main),
    format: 'umd',
    name: 'ReactSimpleClamp',
    exports: 'named',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  {
    file: path.resolve(__dirname, '..', pkg.module),
    format: 'es',
    exports: 'named',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
];

const config = outputs.map((output, i) => {
  return {
    input: 'src/index.tsx',
    output,
    plugins: [
      json(),
      commonjs(),
      nodeResolve(),
      typescript({
        tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
        useTsconfigDeclarationDir: true,
        typescript: typescriptEngine,
        include: ['*.js+(|x)', '**/*.js+(|x)'],
        exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
      }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      progress(),
      terser(),
      summary({
        showBrotliSize: true,
        showMinifiedSize: true,
        showGzippedSize: true,
      }),
      process.env.NODE_ENV === 'analyze' ? visualizer({
        emitFile: true,
        file: 'stats.html',
        open: true,
      }) : null,
    ],
    external: ['react', 'react-dom'],
  };
});

export default config;
