import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/index.ts",
    output: {
        file: "./lib/index.js",
        format: "umd",
        name: 'searchListText'
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        terser()
    ]
};
