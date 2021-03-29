import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default {
  // preserveModules: true,
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    // {
    //   file: packageJson.module,
    //   format: 'esm',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      modules: true,
      sourceMap: true,
      extract: true,
      minimize: true,
      extensions: ['.css', '.less'],
    }),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'dist',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'dist',
          rename: 'typography.scss',
        },
      ],
    }),
  ],
  external: [
    'react',
    'react-dom',
  ],
};
