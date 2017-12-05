webpackJsonp([13], {
  271: function(e, n, t) {
    'use strict';
    function o(e, n) {
      if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function a(e, n) {
      if ('function' != typeof n && null !== n)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof n
        );
      (e.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        n &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, n)
            : (e.__proto__ = n));
    }
    Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = void 0);
    var i,
      c,
      s,
      l = (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var o = n[t];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(n, t, o) {
          return t && e(n.prototype, t), o && e(n, o), n;
        };
      })(),
      u = (function(e, n) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
        );
      })(
        [
          '\n      <x-layout title="shadow()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      <x-layout title="shadow()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    t(27), t(32);
    var d = t(7),
      h = t(24),
      f =
        (0, d.define)(
          ((s = c = (function(e) {
            function n() {
              return (
                o(this, n),
                r(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              a(n, e),
              l(n, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      u,
                      "\n          The `shadow()` function will create a `shadowRoot`, if one does not exist, and return it. Subsequent calls simply return the existing shadow root to prevent errors related to calling `attachShadow()` more than once.\n\n          Normally, when you're writing custom elements without any tools, you'd want to attach your root in the `constructor()` and then do your rendering work in `connectedCallback()`. This is because the `connectedCallback` can get called more than once. For example:\n\n          ```js\n          class CustomElement extends HTMLElement {\n            constructor() {\n              super();\n              this.attachShadow({ mode: 'open' });\n            }\n            connectedCallback() {\n              this.shadowRoot.innerHTML = 'Hello, World!';\n            }\n          }\n          ```\n\n          If you're using the `shadow()` function, you can just put everything into the `connectedCallback()`.\n\n          ```js\n          import { shadow } from 'skatejs';\n\n          class CustomElement extends HTMLElement {\n            connectedCallback() {\n              shadow(this).innerHTML = 'Hello, World!';\n            }\n          }\n          ```\n\n          > Skate uses this function internally in the `withRenderer()` mixin as the default return value from `renderRoot`.\n        "
                    );
                  }
                }
              ]),
              n
            );
          })(h.Component)),
          (c.is = 'x-pages-utils-shadow'),
          (i = s))
        ) || i;
    n.default = f;
  }
});
