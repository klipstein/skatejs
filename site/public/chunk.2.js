webpackJsonp([2], {
  130: function(e, n, t) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, n) {
      if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function l(e, n) {
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
    var c,
      h,
      a,
      u = (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(n, t, r) {
          return t && e(n.prototype, t), r && e(n, r), n;
        };
      })(),
      d = (function(e, n) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
        );
      })(
        [
          '\n      ',
          '\n      <x-layout title="Children">\n        <p>\n          The <code>withChildren</code> mixin allows you to react to changes to\n          your component\'s <code>children</code> by implementing a\n          <code>childrenUpdated</code> lifecycle method.\n        </p>\n        <x-runnable code="',
          '" html="',
          '"></x-runnable>\n        <h3>\n          Integrating with <code>props</code>\n        </h3>\n        <p>\n          If you use the <code>withChildren()</code> mixin with the\n          <code>withUpdate</code> mixin and define a <code>children</code> prop,\n          it will override the built in children prop so that it can trigger an\n          update with the new child list. The overridden <code>children</code>\n          props still returns the same value it normally would if it weren\'t\n          overridden.\n        </p>\n        <x-runnable code="',
          '" html="',
          '"></x-runnable>\n      </x-layout>\n    '
        ],
        [
          '\n      ',
          '\n      <x-layout title="Children">\n        <p>\n          The <code>withChildren</code> mixin allows you to react to changes to\n          your component\'s <code>children</code> by implementing a\n          <code>childrenUpdated</code> lifecycle method.\n        </p>\n        <x-runnable code="',
          '" html="',
          '"></x-runnable>\n        <h3>\n          Integrating with <code>props</code>\n        </h3>\n        <p>\n          If you use the <code>withChildren()</code> mixin with the\n          <code>withUpdate</code> mixin and define a <code>children</code> prop,\n          it will override the built in children prop so that it can trigger an\n          update with the new child list. The overridden <code>children</code>\n          props still returns the same value it normally would if it weren\'t\n          overridden.\n        </p>\n        <x-runnable code="',
          '" html="',
          '"></x-runnable>\n      </x-layout>\n    '
        ]
      );
    t(29), t(27);
    var s = t(7),
      p = t(24);
    t(131);
    var f = t(132),
      y = r(f),
      b = t(133),
      w = r(b);
    t(134);
    var m = t(135),
      v = r(m),
      g = t(136),
      x = r(g),
      O =
        (0, s.define)(
          ((a = h = (function(e) {
            function n() {
              return (
                o(this, n),
                i(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              l(n, e),
              u(n, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      d,
                      this.$style,
                      y.default,
                      w.default,
                      v.default,
                      x.default
                    );
                  }
                }
              ]),
              n
            );
          })(p.Component)),
          (h.is = 'x-pages-mixins-children'),
          (c = a))
        ) || c;
    n.default = O;
  },
  131: function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
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
    var l = (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(n, t, r) {
          return t && e(n.prototype, t), r && e(n, r), n;
        };
      })(),
      c = t(7),
      h = (function(e) {
        function n() {
          return (
            r(this, n),
            o(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
            )
          );
        }
        return (
          i(n, e),
          l(n, [
            {
              key: 'childrenUpdated',
              value: function() {
                var e = this.children.length;
                this.attachShadow({ mode: 'open' }).innerHTML =
                  'This element has ' +
                  e +
                  ' ' +
                  (1 === e ? 'child' : 'children') +
                  '!';
              }
            }
          ]),
          n
        );
      })((0, c.withChildren)());
    customElements.define('with-children1', h);
  },
  132: function(e, n) {
    e.exports =
      "import { withChildren } from 'skatejs';\n\nclass WithChildren extends withChildren() {\n  childrenUpdated() {\n    const len = this.children.length;\n    this.attachShadow({\n      mode: 'open'\n    }).innerHTML = `This element has ${len} ${\n      len === 1 ? 'child' : 'children'\n    }!`;\n  }\n}\n\ncustomElements.define('with-children1', WithChildren);\n";
  },
  133: function(e, n) {
    e.exports =
      '<with-children1>\n  <div>1</div>\n  <div>2</div>\n</with-children1>\n';
  },
  134: function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
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
    var l = (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(n, t, r) {
          return t && e(n.prototype, t), r && e(n, r), n;
        };
      })(),
      c = t(7),
      h = (function(e) {
        function n() {
          var e, t, i, l;
          r(this, n);
          for (var c = arguments.length, h = Array(c), a = 0; a < c; a++)
            h[a] = arguments[a];
          return (
            (t = i = o(
              this,
              (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                e,
                [this].concat(h)
              )
            )),
            (i.props = { children: null }),
            (l = t),
            o(i, l)
          );
        }
        return (
          i(n, e),
          l(n, [
            {
              key: 'render',
              value: function() {
                var e = this.children.length;
                return (
                  'This element has ' +
                  e +
                  ' ' +
                  (1 === e ? 'child' : 'children') +
                  '!'
                );
              }
            }
          ]),
          n
        );
      })((0, c.withComponent)());
    customElements.define('with-children2', h);
  },
  135: function(e, n) {
    e.exports =
      "import { withComponent } from 'skatejs';\n\nclass WithChildren extends withComponent() {\n  props = {\n    children: null\n  };\n  render() {\n    const len = this.children.length;\n    return `This element has ${len} ${len === 1 ? 'child' : 'children'}!`;\n  }\n}\n\ncustomElements.define('with-children2', WithChildren);\n";
  },
  136: function(e, n) {
    e.exports =
      '<with-children2>\n  <div>1</div>\n  <div>2</div>\n</with-children2>\n';
  }
});
