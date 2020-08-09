import path from 'path';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import sucrase from '@rollup/plugin-sucrase';
import json from '@rollup/plugin-json';

const PORT = 8288;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.resolve('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(`[dev]: ${devUrl}`);
}, 1000);

const options = {
  input: 'example/demo.jsx',
  output: [
    {
      file: 'example/index.js',
      format: 'umd',
      name: 'index',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    json(),
    nodeResolve({ extensions, browser: true }),
    commonjs(),
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
    serve({
      port: PORT,
      contentBase: [path.resolve('example'), path.resolve('es')],
      historyApiFallback: true, // Set to true to return index.html instead of 404
    }),
    livereload(),
  ],
};

export default options;
