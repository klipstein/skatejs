webpackJsonp([18], {
  267: function(e, n, r) {
    'use strict';
    function t(e, n) {
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
    function s(e, n) {
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
      a,
      d,
      p = (function() {
        function e(e, n) {
          for (var r = 0; r < n.length; r++) {
            var t = n[r];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              'value' in t && (t.writable = !0),
              Object.defineProperty(e, t.key, t);
          }
        }
        return function(n, r, t) {
          return r && e(n.prototype, r), t && e(n, t), n;
        };
      })(),
      m = (function(e, n) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
        );
      })(
        [
          '\n      <x-layout title="Renderers">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      <x-layout title="Renderers">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    r(27), r(32);
    var l = r(7),
      u = r(24),
      c =
        (0, l.define)(
          ((d = a = (function(e) {
            function n() {
              return (
                t(this, n),
                o(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              s(n, e),
              p(n, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      m,
                      "\n          Renderers are a way to take any UI library and essentially wrap a web\n          component around it. We've provided renderers for some of the popular UI\n          libraries:\n\n          - [LitHTML](/renderers/with-lit-html)\n          - [Preact](/renderers/with-preact)\n          - [React](/renderers/with-react)\n\n          Skate also ships with a super-simple\n          [default renderer](/renderers/default) that\n          simply sets `innerHTML`. It's a fantastic way to mock up and\n          write simple components without requiring a UI library.\n\n          ### Writing a renderer\n\n          The best way to write a renderer is to base it on the\n          [`withRenderer`](/mixins/with-renderer)\n          mixin API. To do this, you implement the `renderer` method on\n          your class.\n\n          ```js\n          interface Renderer {\n            renderer(root: Node, render: Function): void;\n          }\n          ```\n\n          #### A simple implementation\n\n          An example of a simple, concrete implementation of this might be to\n          write a renderer that simply sets `innerHTML`. This is the\n          default behaviour provided by the default `renderer()` function and is\n          great for mockups, simple or static components. It's probably too naive\n          for complex components that re-render a lot. However, it also serves as\n          a fine example to show how to use the renderer API.\n\n          ```js\n          // ./my-renderer.js\n\n          export default class extends HTMLElement {\n            renderer(root, render) {\n              root.innerHTML = render();\n            }\n          }\n          ```\n\n          All this renderer does is simply set the `innerHTML` of the\n          node that we're supposed to render to. We've called this node the\n          `root`.\n\n          The `render` argument is a bound function of the\n          `render` method you define on your class. To use this\n          renderer, you'd do something like:\n\n          ```js\n          // ./my-component.js\n\n          import MyRenderer from './my-renderer';\n\n          export default class extends MyRenderer {\n            render() {\n              return 'Hello, World!';\n            }\n          }\n          ```\n\n          > The `render` function is bound with the host element as\n          `this` and the first argument, so you can also destructure in\n          the function arguments, if you want to.\n\n          #### Hooking it up\n\n          The one problem here is that your component doesn't yet know how to hook\n          up `render` with `renderer` because you need to\n          mixin `withRenderer`.\n\n          ```js\n          // ./my-component.js\n\n          import { withRenderer } from 'skatejs';\n          import MyRenderer from './my-renderer';\n\n          export default class extends withRenderer(MyRenderer) {\n            render() {\n              return 'Hello, World!';\n            }\n          }\n          ```\n\n          #### Reuse\n\n          If you want to make this renderer a bit more generic, you might want it\n          to be able to accept other types of base classes, as opposed to having\n          it fixed to `HTMLElement`. To do this, just make it a mixin.\n          This consists of making it into a function that returns a class.\n\n          ```js\n          // ./my-renderer.js\n\n          export default (Base = HTMLElement) =>\n            class extends Base {\n              renderer(root, render) {\n                root.innerHTML = render();\n              }\n            }\n          ```\n\n          And there you have your renderer that you can reuse with any component.\n\n          Taking the `render` example a bit further, it will now look\n          something like:\n\n          ```js\n          // ./my-component.js\n\n          import { withRenderer } from 'skatejs';\n          import myRenderer from './my-renderer';\n\n          export default class extends withRenderer(myRenderer()) {\n            render() {\n              return 'Hello, World!';\n            }\n          }\n          ```\n\n          #### Responding to attributes and properties\n\n          This component doesn't yet respond to property sets, or have any dynamic\n          states. If we wanted to, say, accept a name property or attribute, we\n          can mixin the `withUpdate` and `withRenderer`\n          mixins with your renderer.\n\n          ```js\n          // ./my-component.js\n\n          import { props, withRenderer, withUpdate } from 'skatejs';\n          import myRenderer from './my-renderer';\n\n          export default class extends withRenderer(withUpdate(myRenderer())) {\n            static props = {\n              name: props.string\n            };\n            render({ name }) {\n              return `Hello, ${name}!`;\n            }\n          }\n          ```\n\n          This component would now render when both a `name` property\n          _and_ a `name` attribute are set.\n\n          #### Simplifying as a base class\n\n          If you don't want to repeat the mixin calls, simply make it a base\n          class:\n\n          ```js\n          // ./my-base.js\n\n          import { withRenderer, withUpdate } from 'skatejs';\n          import myRenderer from './my-renderer';\n\n          export default myRenderer(withRenderer(withUpdate()));\n          ```\n\n          > Your renderer can be composed into any point of your mixin chain, too!\n\n          Your component then can use it:\n\n          ```js\n          // ./my-component.js\n\n          import { props } from 'skatejs';\n          import MyBase from './my-base';\n\n          class MyComponent extends MyBase {\n            static props = {\n              name: props.string\n            };\n            render({ name }) {\n              return `Hello, ${name}!`;\n            }\n          }\n          ```\n        "
                    );
                  }
                }
              ]),
              n
            );
          })(u.Component)),
          (a.is = 'x-pages-renderers-index'),
          (i = d))
        ) || i;
    n.default = c;
  }
});
