import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/popup/popup.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/popup.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          dev: !production,
        },
      }),
      css({ output: "popup.css" }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      !production && livereload("public"),
      production && terser(),
    ],
  },
  {
    input: "src/content/content.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/content.js",
    },
  },
  {
    input: "src/background/background.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/background.js",
    },
  },
  {
    input: "src/options/options.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/options.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          dev: !production,
        },
      }),
      css({ output: "options.css" }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      production && terser(),
    ],
  },
];
