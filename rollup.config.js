import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'build',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [],
    }),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'build',
      rootDir: 'src/',
    }),
    terser(),
  ],
}
