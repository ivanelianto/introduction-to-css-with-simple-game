(function(e) {
  function n(n) {
    for (
      var i, o, r = n[0], c = n[1], l = n[2], d = 0, f = [];
      d < r.length;
      d++
    )
      (o = r[d]), a[o] && f.push(a[o][0]), (a[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    u && u(n);
    while (f.length) f.shift()();
    return s.push.apply(s, l || []), t();
  }
  function t() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], i = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== a[c] && (i = !1);
      }
      i && (s.splice(n--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var i = {},
    a = { app: 0 },
    s = [];
  function o(e) {
    return (
      r.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-2d0a3577": "7d295029",
        "chunk-2d0a43df": "ba763123",
        "chunk-2d0aa90c": "1ff83f88",
        "chunk-2d0aab07": "c7b138ee",
        "chunk-2d0abc00": "e59fec7f",
        "chunk-2d0ae937": "4d9b82da",
        "chunk-2d0aeb45": "2c0f93aa",
        "chunk-2d0afa49": "72db30bb",
        "chunk-2d0b2762": "cc16d625",
        "chunk-2d0b6187": "352098d3",
        "chunk-2d0ba136": "bcbeb7fc",
        "chunk-2d0bb267": "b5d72914",
        "chunk-2d0bcec1": "3ee947d2",
        "chunk-2d0bff92": "c3149f81",
        "chunk-2d0c0494": "c4f9fca8",
        "chunk-2d0c0a09": "6932e4f0",
        "chunk-2d0c1ed0": "efa20cc6",
        "chunk-2d0c4313": "d662ca8a",
        "chunk-2d0c46d1": "1d6afcef",
        "chunk-2d0c512b": "b51a9c09",
        "chunk-2d0cf16e": "d61991d4",
        "chunk-2d0d056d": "b06de0d3",
        "chunk-2d0d0645": "c2a17485",
        "chunk-2d0d2f22": "bacca7fa",
        "chunk-2d0d7e63": "121a61f9",
        "chunk-2d0e1b57": "20eb2fbd",
        "chunk-2d0e1fbe": "0f88c86d",
        "chunk-2d0e22d6": "bb5cbbbe",
        "chunk-2d0e542a": "cab3ae49",
        "chunk-2d0e57ec": "354f3523",
        "chunk-2d0e6553": "e64d25b8",
        "chunk-2d0e6c86": "2865faa3",
        "chunk-2d0ea098": "21274f30",
        "chunk-2d208ac5": "f800fa82",
        "chunk-2d209408": "3febcba1",
        "chunk-2d20f745": "7acb8018",
        "chunk-2d20ff23": "dd4191ed",
        "chunk-2d2138c7": "807d6317",
        "chunk-2d216f3b": "2bdffc29",
        "chunk-2d217e5b": "bcc7b28f",
        "chunk-2d21b84a": "5f56953f",
        "chunk-2d21dcd2": "854caf9b",
        "chunk-2d21f327": "c9b4277c",
        "chunk-2d2214b3": "25970bcd",
        "chunk-2d221814": "ceb8141b",
        "chunk-2d221a34": "b0e5d3ce",
        "chunk-2d22502a": "27646c39",
        "chunk-2d228ca6": "923671b2",
        "chunk-2d2295e9": "8370693f",
        "chunk-2d22c171": "c2405e7d",
        "chunk-2d22c2b8": "17c71188",
        "chunk-2d22ca58": "4b094d49",
        "chunk-2d2311f7": "af657a5f",
        "chunk-2d237ee7": "4b1a8ee8",
        "chunk-2d238465": "56e5e76a",
        "chunk-7532b3ea": "348963f5",
        "chunk-774ac664": "f6f208f0"
      }[e] +
      ".js"
    );
  }
  function r(n) {
    if (i[n]) return i[n].exports;
    var t = (i[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.e = function(e) {
    var n = [],
      t = a[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var i = new Promise(function(n, i) {
          t = a[e] = [n, i];
        });
        n.push((t[2] = i));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          (c.src = o(e)),
          (s = function(n) {
            (c.onerror = c.onload = null), clearTimeout(l);
            var t = a[e];
            if (0 !== t) {
              if (t) {
                var i = n && ("load" === n.type ? "missing" : n.type),
                  s = n && n.target && n.target.src,
                  o = new Error(
                    "Loading chunk " + e + " failed.\n(" + i + ": " + s + ")"
                  );
                (o.type = i), (o.request = s), t[1](o);
              }
              a[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          s({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(n);
  }),
    (r.m = e),
    (r.c = i),
    (r.d = function(e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            t,
            i,
            function(n) {
              return e[n];
            }.bind(null, i)
          );
      return t;
    }),
    (r.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = "/"),
    (r.oe = function(e) {
      throw (console.error(e), e);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = n), (c = c.slice());
  for (var d = 0; d < c.length; d++) n(c[d]);
  var u = l;
  s.push([0, "chunk-vendors"]), t();
})({
  0: function(e, n, t) {
    e.exports = t("56d7");
  },
  "030c": function(e, n, t) {
    "use strict";
    var i = t("3dfe"),
      a = t.n(i);
    a.a;
  },
  "034f": function(e, n, t) {
    "use strict";
    var i = t("64a9"),
      a = t.n(i);
    a.a;
  },
  "0e66": function(e, n, t) {},
  "21e7": function(e, n, t) {
    e.exports = t.p + "img/previous.4e489c35.svg";
  },
  "243f": function(e, n, t) {},
  "3d26": function(e, n, t) {
    "use strict";
    var i = t("6acb"),
      a = t.n(i);
    a.a;
  },
  "3dfd": function(e, n, t) {
    "use strict";
    var i = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", { attrs: { id: "app" } }, [t("router-view")], 1);
      },
      a = [],
      s = { name: "app", components: {} },
      o = s,
      r = (t("034f"), t("2877")),
      c = Object(r["a"])(o, i, a, !1, null, null, null);
    n["a"] = c.exports;
  },
  "3dfe": function(e, n, t) {},
  "41d2": function(e, n, t) {},
  "45b6": function(e, n, t) {},
  5665: function(e, n, t) {
    "use strict";
    var i = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "div",
          { staticClass: "home-container" },
          [
            t(
              "router-link",
              { staticClass: "main-button", attrs: { to: "/level/1" } },
              [e._v("\n    Let's Start\n  ")]
            )
          ],
          1
        );
      },
      a = [],
      s = { name: "home" },
      o = s,
      r = (t("a01a"), t("2877")),
      c = Object(r["a"])(o, i, a, !1, null, "f770a340", null),
      l = c.exports,
      d = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("Level", {
          attrs: {
            level: e.level,
            description: e.description,
            cssInitialCode: e.cssInitialCode,
            htmlInitialCode: e.htmlInitialCode,
            answer: e.answer,
            iframeCSS: e.iframeCSS
          }
        });
      },
      u = [],
      f = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "div",
          { staticClass: "level-container" },
          [
            t("UserSidebar", {
              ref: "editor",
              attrs: {
                run: e.run,
                cssInitialCode: e.cssInitialCode,
                htmlInitialCode: e.htmlInitialCode,
                level: e.level,
                description: e.description
              }
            }),
            t("div", { staticClass: "iframe-container" }, [
              t("iframe", { attrs: { height: "100%", width: "100%" } })
            ]),
            this.isModalVisible ? t("SuccessModal", { ref: "modal" }) : e._e()
          ],
          1
        );
      },
      h = [],
      p =
        (t("28a5"),
        t("c5f6"),
        function() {
          var e = this,
            n = e.$createElement,
            i = e._self._c || n;
          return i(
            "div",
            {
              staticClass: "sidebar-container",
              on: { keydown: e.onKeyDown, keyUp: e.onKeyUp }
            },
            [
              i("div", { staticClass: "menu-container" }, [
                i(
                  "span",
                  {
                    staticClass: "hamburger-icon-wrapper",
                    on: { click: e.toggleMenu }
                  },
                  [
                    i("span", { staticClass: "hamburger-icon-line" }),
                    i("span", { staticClass: "hamburger-icon-line" }),
                    i("span", { staticClass: "hamburger-icon-line" })
                  ]
                ),
                i(
                  "ul",
                  { staticClass: "level-list" },
                  e._l(e.routes, function(n) {
                    return i(
                      "li",
                      { key: n.path },
                      [
                        i(
                          "router-link",
                          {
                            class: {
                              "main-button": !0,
                              finished: !!n.isFinished
                            },
                            attrs: { to: n.path }
                          },
                          [
                            i("img", {
                              staticClass: "level-finish-indicator",
                              attrs: {
                                src: n.isFinished
                                  ? e.levelFinishedImage
                                  : e.levelNotFinishedImage,
                                alt: ""
                              }
                            }),
                            e._v(
                              "\n\n          Level " +
                                e._s(n.level) +
                                "\n        "
                            )
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  0
                )
              ]),
              i("div", { staticClass: "level-description-container" }, [
                i(
                  "h3",
                  { class: { "level-text": !0, finished: this.isFinished } },
                  [
                    i(
                      "button",
                      {
                        staticClass: "btn transparent-background",
                        on: { click: e.onPreviousButtonClicked }
                      },
                      [
                        i("img", {
                          staticClass: "btn-prev",
                          attrs: { src: t("21e7") }
                        })
                      ]
                    ),
                    i("p", [e._v("Level " + e._s(e.level))]),
                    i(
                      "button",
                      {
                        staticClass: "btn transparent-background",
                        on: { click: e.onNextButtonClicked }
                      },
                      [
                        i("img", {
                          staticClass: "btn-next",
                          attrs: { src: t("21e7") }
                        })
                      ]
                    )
                  ]
                ),
                i("p", { staticClass: "description-text" }, [
                  i("span", { domProps: { innerHTML: e._s(e.description) } })
                ])
              ]),
              i("div", { staticClass: "editor-container" }, [
                i(
                  "div",
                  { staticClass: "html-editor-container" },
                  [
                    e._m(0),
                    i("MonacoEditor", {
                      staticClass: "editor",
                      attrs: {
                        theme: "vs-dark",
                        options: e.htmlEditorOptions,
                        language: "html"
                      },
                      model: {
                        value: e.htmlCode,
                        callback: function(n) {
                          e.htmlCode = n;
                        },
                        expression: "htmlCode"
                      }
                    })
                  ],
                  1
                ),
                i(
                  "div",
                  { staticClass: "css-editor-container" },
                  [
                    e._m(1),
                    i("MonacoEditor", {
                      ref: "cssEditor",
                      staticClass: "editor",
                      attrs: {
                        theme: "vs-dark",
                        options: e.cssEditorOptions,
                        language: "css"
                      },
                      model: {
                        value: e.cssCode,
                        callback: function(n) {
                          e.cssCode = n;
                        },
                        expression: "cssCode"
                      }
                    })
                  ],
                  1
                )
              ]),
              i("div", { staticClass: "action-button-container" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-run",
                    attrs: { id: "btn-run", title: "Shortcut: Alt + Enter" },
                    on: { click: e.run }
                  },
                  [e._v("\n      Run\n    ")]
                )
              ])
            ]
          );
        }),
      m = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", { staticClass: "editor-description" }, [
            t("b", { staticClass: "editor-title" }, [e._v("HTML Viewer")]),
            t("p", { staticClass: "editor-filename" }, [e._v("index.html")])
          ]);
        },
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", { staticClass: "editor-description" }, [
            t("b", { staticClass: "editor-title" }, [e._v("CSS Editor")]),
            t("p", { staticClass: "editor-filename" }, [e._v("style.css")])
          ]);
        }
      ],
      b = (t("ac6a"), t("059c")),
      v = t("9b7b"),
      g = t.n(v),
      C = t("6ae5"),
      k = t.n(C),
      y = t("2ef0"),
      w = 18,
      S = 13,
      x = {
        name: "UserSidebar",
        components: { MonacoEditor: b["a"] },
        props: [
          "cssInitialCode",
          "htmlInitialCode",
          "level",
          "description",
          "run"
        ],
        data: function() {
          return {
            routes: se.filter(function(e, n) {
              return void 0 !== e.level;
            }),
            isFinished: !1,
            levelFinishedImage: g.a,
            levelNotFinishedImage: k.a,
            isAltPressed: !1,
            cssCode: this.cssInitialCode,
            htmlCode: this.htmlInitialCode,
            htmlEditorOptions: {
              fontFamily: "consolas",
              fontLigatures: !0,
              fontSize: 14,
              roundedSelection: !0,
              automaticLayout: !0,
              readOnly: !0,
              minimap: { enabled: !1 }
            },
            cssEditorOptions: {
              fontFamily: "consolas",
              fontLigatures: !0,
              fontSize: 14,
              roundedSelection: !0,
              automaticLayout: !0,
              minimap: { enabled: !1 }
            }
          };
        },
        mounted: function() {
          var e = this;
          (this.toggleMenu = Object(y["throttle"])(this.toggleMenu, 500)),
            this.routes.forEach(function(n) {
              n.level === e.level && (e.isFinished = n.isFinished);
            }),
            $(window).on("click", this.onWindowClick),
            this.$refs.cssEditor.focus();
        },
        methods: {
          onWindowClick: function(e) {
            $(".hamburger-icon-wrapper").hasClass("active") &&
              !$(e.target).is($(".hamburger-icon-wrapper")) &&
              this.hideMenu();
          },
          onKeyDown: function(e) {
            e.keyCode === w && (this.isAltPressed = !0),
              this.isAltPressed &&
                e.keyCode === S &&
                document.querySelector("#btn-run").click();
          },
          onKeyUp: function(e) {
            e.keyCode === w && (this.isAltPressed = !1);
          },
          onPreviousButtonClicked: function() {
            var e = this;
            this.routes.forEach(function(n, t) {
              n.path === e.$route.path &&
                t > 0 &&
                e.$router.push({ path: e.routes[t - 1].path });
            });
          },
          onNextButtonClicked: function() {
            var e = this;
            this.routes.some(function(n, t) {
              if (n.path === e.$route.path && t < e.routes.length - 1)
                return e.$router.push({ path: e.routes[t + 1].path }), !0;
            });
          },
          toggleMenu: function(e) {
            $(e.target).hasClass("active") ? this.hideMenu() : this.showMenu();
          },
          hideMenu: function() {
            $(".level-list").fadeOut(),
              $(".hamburger-icon-wrapper").removeClass("active");
          },
          showMenu: function() {
            $(".level-list").fadeIn(),
              $(".hamburger-icon-wrapper").addClass("active");
          },
          changeLevelToFinishedState: function() {
            var e = this;
            (this.isFinished = !0),
              this.routes.forEach(function(n) {
                n.level === e.level && (n.isFinished = !0);
              });
          }
        }
      },
      _ = x,
      I = (t("030c"), Object(r["a"])(_, p, m, !1, null, null, null)),
      M = I.exports,
      F = function() {
        var e = this,
          n = e.$createElement,
          i = e._self._c || n;
        return i("div", { staticClass: "modal-wrapper" }, [
          i("div", { staticClass: "modal" }, [
            i("img", {
              staticClass: "star-logo",
              attrs: { src: t("dbfd"), alt: "" }
            }),
            i("h1", { staticClass: "caption" }, [
              e._v("\n      Level Completed!\n    ")
            ])
          ])
        ]);
      },
      E = [],
      j = {
        name: "SuccessModal",
        methods: {
          hide: function() {
            $(".modal-wrapper").css({
              animation: "fadeOut .5s ease-in-out",
              opacity: "0"
            });
          }
        }
      },
      O = j,
      L = (t("da8e"), Object(r["a"])(O, F, E, !1, null, null, null)),
      P = L.exports,
      T = {
        name: "level",
        components: { UserSidebar: M, SuccessModal: P },
        props: {
          level: { required: !0, type: Number },
          description: { required: !0, type: String },
          cssInitialCode: { required: !0, type: String },
          htmlInitialCode: { required: !0, type: String },
          answer: { required: !0, type: String },
          iframeCSS: { required: !0, type: String }
        },
        data: function() {
          return { isModalVisible: !1 };
        },
        mounted: function() {
          var e = this;
          this.setContent(this.iframeCSS + this.htmlInitialCode),
            $(window).click(function(n) {
              e.isModalVisible &&
                e.isModalLostFocus(n.target) &&
                ($(e.$refs.modal.$el).css({
                  animation: "fadeOut .5s ease-in-out",
                  opacity: "0"
                }),
                setTimeout(function() {
                  e.isModalVisible = !1;
                }, 550));
            });
        },
        methods: {
          run: function() {
            var e = this.$refs.editor.$data.cssCode.split("{")[0].trim();
            (e = e.split(this.answer)),
              2 === e.length &&
                "" === e[0] &&
                "" === e[1] &&
                (this.insertUserCSSCode(),
                this.$refs.editor.changeLevelToFinishedState(),
                (this.isModalVisible = !0));
          },
          isModalLostFocus: function(e) {
            var n = this.$refs.modal;
            if (void 0 !== n && void 0 !== e)
              return !!$(e).hasClass("modal-wrapper");
          },
          setContent: function(e) {
            var n = document.querySelector("iframe").contentWindow.document;
            n.open(), n.write(e), n.close();
          },
          insertUserCSSCode: function() {
            var e = this.iframeCSS.split("</style>");
            e.splice(1, 0, this.$refs.editor.$data.cssCode),
              (e[2] = "</style>"),
              this.setContent(e.join("") + this.htmlInitialCode);
          }
        }
      },
      A = T,
      U = (t("e750e"), Object(r["a"])(A, f, h, !1, null, null, null)),
      q = U.exports,
      V =
        "<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: #202020;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n",
      z = {
        css: "".concat(
          V,
          "\n  @keyframes rotating {\n    0%, 100% {\n      transform: rotate(2deg);\n    }\n\n    50% {\n      transform: rotate(-2deg);\n    }\n  }\n\n  h1 {\n    position: relative;\n    font-family: Arial;\n    animation: rotating .5s cubic-bezier(1,-0.11,.18,1.1) infinite;\n    background-color: #000;\n    box-shadow: 0 0 1em #333;\n    padding: 1em;\n    transition: all .2s linear;\n  }\n\n  @keyframes pulse {\n    0%, 100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n  }\n\n  @keyframes flip {\n    from { transform: rotateX(180deg); }\n    to { transform: rotateX(0deg); }\n  }\n  </style>"
        ),
        description:
          '\n    Select <code>h1</code> type element to highlight the text.\n\n    <h4 class="example">Example</h4>\n    <p>\n        <code>div</code> selects all <code>&lt;div&gt;</code> elements.\n    </p>\n  '
      },
      B = {
        name: "LevelOne",
        components: { Level: q },
        data: function() {
          return {
            isModalVisible: !1,
            level: 1,
            description: z.description,
            htmlInitialCode: "<h1>Hello, World</div>",
            cssInitialCode:
              "/* Type css selector here */\n{\n  color: #ddd;\n  background-color: transparent;\n  animation: pulse .5s ease-out infinite, flip 1s cubic-bezier(0,-0.33,1,-0.24);\n  box-shadow: none;\n}",
            answer: "h1",
            iframeCSS: z.css
          };
        }
      },
      N = B,
      W = (t("dbeb"), Object(r["a"])(N, d, u, !1, null, null, null)),
      K = W.exports,
      H = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("Level", {
          attrs: {
            level: e.level,
            description: e.description,
            cssInitialCode: e.cssInitialCode,
            htmlInitialCode: e.htmlInitialCode,
            answer: e.answer,
            iframeCSS: e.iframeCSS
          }
        });
      },
      D = [],
      J = {
        css: "".concat(
          V,
          "\n    .chemical {\n      position: relative;\n      border: 1px solid #ddd;\n      height: 40%;\n      width: 25px;\n      border-bottom-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n      transition: all 1s ease-out;\n    }\n\n    .chemical:not(:last-child) {\n      margin-right: 2em;\n    }\n\n    #copper {\n      background: linear-gradient(0deg, #81d4fa 70%, #202020 0%);\n    }\n\n    #copper::after {\n      content: '';\n      position: absolute;\n      width: 10px;\n      height: 10px;\n      background-color: #81d4fa;\n      border-radius: 50%;\n      top: 30%;\n      left: 50%;\n      animation: fly 1s .8s ease-out infinite;\n    }\n\n    #manganese {\n      background: linear-gradient(0deg, #f06292 20%, #202020 0%);\n    }\n\n    #nickel {\n      background: linear-gradient(0deg, #81c784 70%, #202020 0%);\n    }\n\n    #nickel::after {\n      content: '';\n      position: absolute;\n      width: 10px;\n      height: 10px;\n      background-color: #81c784;\n      border-radius: 50%;\n      top: 30%;\n      left: 50%;\n      animation: fly 1s ease-out infinite;\n    }\n\n    @keyframes fly {\n      0% {\n        top: 50%;\n        left: 50%;\n        opacity: 1;\n        transform: scale(1);\n      }\n      25% {\n        top: 25%;\n        left: 10%;\n      }\n      50% {\n        top: 20%;\n        left: 30%;\n      }\n      75% {\n        top: 15%;\n        left: 40%;\n      }\n      100% {\n        top: 10%;\n        left: calc(50% - 10px / 2);\n        opacity: 0;\n        transform: scale(1.25);\n      }\n    }\n  </style>"
        ),
        description:
          '\n    Select element with id <code>manganese</code> to fill it up to 70%.\n\n    <h4 class="example">Example</h4>\n    <p>\n        <code>#cool</code> selects all element with <code>id=&#34;cool&#34;</code> elements.\n    </p>'
      },
      Q = {
        name: "LevelTwo",
        components: { Level: q },
        data: function() {
          return {
            isModalVisible: !1,
            level: 2,
            description: J.description,
            htmlInitialCode:
              '<div class="chemical" id="copper"></div>\n<div class="chemical" id="manganese"></div>\n<div class="chemical" id="nickel"></div>',
            cssInitialCode:
              "/* Type css selector here */\n{\n  background: linear-gradient(0deg, #f06292 70%, #202020 0%);\n}",
            answer: "#manganese",
            iframeCSS: J.css
          };
        }
      },
      R = Q,
      X = Object(r["a"])(R, H, D, !1, null, null, null),
      G = X.exports,
      Y = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("Level", {
          attrs: {
            level: e.level,
            description: e.description,
            cssInitialCode: e.cssInitialCode,
            htmlInitialCode: e.htmlInitialCode,
            answer: e.answer,
            iframeCSS: e.iframeCSS
          }
        });
      },
      Z = [],
      ee = {
        css: "".concat(
          V,
          "@keyframes fadeIn {\n    from { \n      background-color: #2a2a2a;\n    }\n  \n    to {\n      box-shadow: 0 0 1em #AAF9FF;\n      background-color: #CCFFFB;\n    }\n  }\n  \n  @keyframes bounce {\n    0%, 100% {\n      bottom: -1.5em;\n    }\n  \n    90% {\n      bottom: 0;\n    }\n  }\n  \n  .light-bulb {\n    position: relative;\n    height: 100px;\n    width: 100px;\n    border: none;\n    border-radius: 50%;\n    background-color: #2a2a2a;\n    animation: fadeIn .2s ease-in-out,\n      bounce .8s 1s cubic-bezier(.17,.67,.51,1) infinite;\n  }\n  </style>"
        ),
        description:
          '\n    Select <code>light-bulb</code> class element to turn on the light bulb.\n\n    <h4 class="example">Example</h4>\n    <p>\n        <code>.box</code> selects all <code>&lt;div class=&#34;box&#34;&gt;</code> elements.\n    </p>\n  '
      },
      ne = {
        name: "LevelThree",
        components: { Level: q },
        data: function() {
          return {
            isModalVisible: !1,
            level: 3,
            description: ee.description,
            htmlInitialCode: '<div class="light-bulb"></div>',
            cssInitialCode:
              "/* Type css selector here */\n{\n  background-color: #CCFFFB;\n  box-shadow: 0 0 1em #AAF9FF;\n}",
            answer: ".light-bulb",
            iframeCSS: ee.css
          };
        }
      },
      te = ne,
      ie = (t("3d26"), Object(r["a"])(te, Y, Z, !1, null, null, null)),
      ae = ie.exports,
      se = (n["a"] = [
        { path: "/", component: l },
        { path: "/level/1", component: K, level: 1, isFinished: !1 },
        { path: "/level/2", component: G, level: 2, isFinished: !1 },
        { path: "/level/3", component: ae, level: 3, isFinished: !1 }
      ]);
  },
  "56d7": function(e, n, t) {
    "use strict";
    t.r(n),
      function(e) {
        t("cadf"), t("551c"), t("f751"), t("097d");
        var n = t("2b0e"),
          i = t("3dfd"),
          a = t("8c4f"),
          s = (t("c2c6"), t("5665"));
        (n["a"].config.productionTip = !1), (e.jQuery = t("1157"));
        var o = e.jQuery;
        (window.$ = o),
          n["a"].use(a["a"]),
          (window.MonacoEnvironment = {
            getWorkerUrl: function(e, n) {
              return "data:text/javascript;charset=utf-8,".concat(
                encodeURIComponent(
                  "\n        self.MonacoEnvironment = {\n          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.1/min/'\n        };\n        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.1/min/vs/base/worker/workerMain.js');"
                )
              );
            }
          });
        var r = new a["a"]({ mode: "history", routes: s["a"] });
        new n["a"]({
          el: "#app",
          router: r,
          render: function(e) {
            return e(i["a"]);
          }
        }).$mount("#app");
      }.call(this, t("24aa"));
  },
  "64a9": function(e, n, t) {},
  "6acb": function(e, n, t) {},
  "6ae5": function(e, n, t) {
    e.exports = t.p + "img/level-not-finished.939ea9c1.svg";
  },
  "9b7b": function(e, n, t) {
    e.exports = t.p + "img/level-finished.e740162a.svg";
  },
  a01a: function(e, n, t) {
    "use strict";
    var i = t("41d2"),
      a = t.n(i);
    a.a;
  },
  da8e: function(e, n, t) {
    "use strict";
    var i = t("243f"),
      a = t.n(i);
    a.a;
  },
  dbeb: function(e, n, t) {
    "use strict";
    var i = t("0e66"),
      a = t.n(i);
    a.a;
  },
  dbfd: function(e, n, t) {
    e.exports = t.p + "img/star.db6b4396.svg";
  },
  e750e: function(e, n, t) {
    "use strict";
    var i = t("45b6"),
      a = t.n(i);
    a.a;
  }
});
//# sourceMappingURL=app.be3dfc8b.js.map
