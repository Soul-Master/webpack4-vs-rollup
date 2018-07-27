# Webpack 4.1.3 vs Rollup 0.63.4

Index.js
```
import { cube } from './maths.js';

console.log( cube( 5 ) ); // 125
```

Maths.js
```
// Unused method
export function square ( x ) {
	return x * x;
}

// This function gets included
export function cube ( x ) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x;
}
```

## Rollup config
```
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
```

## Webpack Config
```
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## Rollup Output (pretty print) - 58 bytes
```
!function() {
    "use strict";
    var o;
    console.log((o = 5) * o * o)
}();
```

## Webpack Output (pretty print) - 993 bytes
```
! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function(e, t, r) {
    "use strict";
    r.r(t), console.log(function(e) {
        return e * e * e
    }(5))
}]);
```

https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
https://webpack.js.org/guides/production/
