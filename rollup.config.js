import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    treeshake: true,
    input: './index.js',
    output: {
        format: 'iife',
        file: './dist/rollup.js'
    },
    plugins: [
        uglify({
            compress: {},
            output: {}
        }, minify)
    ]
};