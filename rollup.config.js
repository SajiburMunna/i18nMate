import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
