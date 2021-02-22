(function (e) {
  function t(t) {
    for (
      var o, i, l = t[0], u = t[1], a = t[2], p = 0, d = [];
      p < l.length;
      p++
    )
      (i = l[p]),
        Object.prototype.hasOwnProperty.call(c, i) && c[i] && d.push(c[i][0]),
        (c[i] = 0);
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    s && s(t);
    while (d.length) d.shift()();
    return r.push.apply(r, a || []), n();
  }

  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, l = 1; l < n.length; l++) {
        var u = n[l];
        0 !== c[u] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    c = {
      app: 0,
    },
    r = [];

  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var a = 0; a < l.length; a++) t(l[a]);
  var s = u;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "2d5a": function (e, t, n) {
    "use strict";
    n("9cdf");
  },
  4091: function (e, t, n) {
    "use strict";
    n("877e");
  },
  "40d1": function (e, t, n) {},
  "4a2d": function (e, t, n) {
    "use strict";
    n("40d1");
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var o = n("7a23");

    function c(e, t, n, c, r, i) {
      var l = Object(o["u"])("Navbar"),
        u = Object(o["u"])("router-view");
      return (
        Object(o["p"])(),
        Object(o["d"])(o["a"], null, [Object(o["g"])(l), Object(o["g"])(u)], 64)
      );
    }
    var r = {
        class: "main-nav",
      },
      i = Object(o["f"])("Projects"),
      l = Object(o["f"])("Add new project");

    function u(e, t, n, c, u, a) {
      var s = Object(o["u"])("router-link");
      return (
        Object(o["p"])(),
        Object(o["d"])("nav", r, [
          Object(o["g"])(
            s,
            {
              to: {
                name: "Home",
              },
            },
            {
              default: Object(o["A"])(function () {
                return [i];
              }),
              _: 1,
            }
          ),
          Object(o["g"])(
            s,
            {
              to: {
                name: "AddProject",
              },
            },
            {
              default: Object(o["A"])(function () {
                return [l];
              }),
              _: 1,
            }
          ),
        ])
      );
    }
    var a = {};
    n("d635");
    a.render = u;
    var s = a,
      p = {
        components: {
          Navbar: s,
        },
      };
    n("2d5a");
    p.render = c;
    var d = p,
      j = n("6c02"),
      f = {
        class: "home",
      },
      b = {
        key: 0,
      };

    function h(e, t, n, c, r, i) {
      var l = Object(o["u"])("SingleProject");
      return (
        Object(o["p"])(),
        Object(o["d"])("div", f, [
          r.projects.length
            ? (Object(o["p"])(),
              Object(o["d"])("div", b, [
                (Object(o["p"])(!0),
                Object(o["d"])(
                  o["a"],
                  null,
                  Object(o["t"])(r.projects, function (e) {
                    return (
                      Object(o["p"])(),
                      Object(o["d"])(
                        "div",
                        {
                          key: e.id,
                        },
                        [
                          Object(o["g"])(
                            l,
                            {
                              project: e,
                              onDelete: i.handleDelete,
                              onComplete: i.handleComplete,
                            },
                            null,
                            8,
                            ["project", "onDelete", "onComplete"]
                          ),
                        ]
                      )
                    );
                  }),
                  128
                )),
              ]))
            : Object(o["e"])("", !0),
        ])
      );
    }
    n("4de4"), n("7db0"), n("d3b7");
    var O = {
        class: "actions",
      },
      m = {
        class: "icons",
      },
      v = Object(o["g"])(
        "span",
        {
          class: "material-icons",
        },
        "edit",
        -1
      ),
      g = {
        key: 0,
        class: "details",
      };

    function y(e, t, n, c, r, i) {
      return (
        Object(o["p"])(),
        Object(o["d"])(
          "div",
          {
            class: [
              "project",
              {
                complete: n.project.complete,
              },
            ],
          },
          [
            Object(o["g"])("div", O, [
              Object(o["g"])(
                "h3",
                {
                  onClick:
                    t[1] ||
                    (t[1] = function (e) {
                      return (r.showDetails = !r.showDetails);
                    }),
                },
                Object(o["w"])(n.project.title),
                1
              ),
              Object(o["g"])("div", m, [
                v,
                Object(o["g"])(
                  "span",
                  {
                    onClick:
                      t[2] ||
                      (t[2] = function () {
                        return (
                          i.deleteProject && i.deleteProject.apply(i, arguments)
                        );
                      }),
                    class: "material-icons",
                  },
                  "delete"
                ),
                Object(o["g"])(
                  "span",
                  {
                    onClick:
                      t[3] ||
                      (t[3] = function () {
                        return (
                          i.toggleComplete &&
                          i.toggleComplete.apply(i, arguments)
                        );
                      }),
                    class: "material-icons tick",
                  },
                  "done"
                ),
              ]),
            ]),
            r.showDetails
              ? (Object(o["p"])(),
                Object(o["d"])("div", g, [
                  Object(o["g"])(
                    "p",
                    null,
                    Object(o["w"])(n.project.details),
                    1
                  ),
                ]))
              : Object(o["e"])("", !0),
          ],
          2
        )
      );
    }
    var w = {
      props: ["project"],
      data: function () {
        return {
          showDetails: !1,
          uri: "/data/db.json/" + this.project.id,
        };
      },
      methods: {
        deleteProject: function () {
          var e = this;
          fetch("this.uri", {
            method: "DELETE",
          }).then(function () {
            return e.$emit("delete", e.project.id).catch(function (e) {
              return console.log(e);
            });
          });
        },
        toggleComplete: function () {
          var e = this;
          fetch(this.uri, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              complete: !this.project.complete,
            }),
          })
            .then(function () {
              e.$emit("complete", e.project.id);
            })
            .catch(function (e) {
              return console.log(e);
            });
        },
      },
    };
    n("4091");
    w.render = y;
    var P = w,
      C = {
        name: "Home",
        components: {
          SingleProject: P,
        },
        data: function () {
          return {
            projects: [],
          };
        },
        mounted: function () {
          var e = this;
          fetch("/data/db.json")
            .then(function (e) {
              return e.json();
            })
            .then(function (t) {
              return (e.projects = t);
            })
            .catch(function (e) {
              return console.log(e.message);
            });
        },
        methods: {
          handleDelete: function (e) {
            this.projects = this.projects.filter(function (t) {
              return t.id !== e;
            });
          },
          handleComplete: function (e) {
            var t = this.projects.find(function (t) {
              return t.id === e;
            });
            t.complete = !t.complete;
          },
        },
      };
    C.render = h;
    var S = C,
      k = Object(o["g"])("label", null, "Title:", -1),
      D = Object(o["g"])("label", null, "Details", -1),
      x = Object(o["g"])("button", null, "Add project", -1);

    function T(e, t, n, c, r, i) {
      return (
        Object(o["p"])(),
        Object(o["d"])(
          "form",
          {
            onSubmit:
              t[3] ||
              (t[3] = Object(o["C"])(
                function () {
                  return i.handleSubmit && i.handleSubmit.apply(i, arguments);
                },
                ["prevent"]
              )),
          },
          [
            k,
            Object(o["B"])(
              Object(o["g"])(
                "input",
                {
                  type: "text",
                  required: "",
                  "onUpdate:modelValue":
                    t[1] ||
                    (t[1] = function (e) {
                      return (r.title = e);
                    }),
                },
                null,
                512
              ),
              [[o["y"], r.title]]
            ),
            D,
            Object(o["B"])(
              Object(o["g"])(
                "textarea",
                {
                  required: "",
                  "onUpdate:modelValue":
                    t[2] ||
                    (t[2] = function (e) {
                      return (r.details = e);
                    }),
                },
                null,
                512
              ),
              [[o["y"], r.details]]
            ),
            x,
          ],
          32
        )
      );
    }
    var _ = {
      data: function () {
        return {
          title: "",
          details: "",
        };
      },
      methods: {
        handleSubmit: function () {
          var e = this,
            t = {
              title: this.title,
              details: this.details,
              complete: !1,
            };
          fetch("/data/db.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(t),
          })
            .then(function () {
              e.$router.push("/");
            })
            .catch(function (e) {
              return console.log(e);
            });
        },
      },
    };
    n("4a2d");
    _.render = T;
    var A = _,
      H = [
        {
          path: "/",
          name: "Home",
          component: S,
        },
        {
          path: "/add",
          name: "AddProject",
          component: A,
        },
      ],
      J = Object(j["a"])({
        history: Object(j["b"])("/"),
        routes: H,
      }),
      M = J;
    Object(o["c"])(d).use(M).mount("#app");
  },
  6791: function (e, t, n) {},
  "877e": function (e, t, n) {},
  "9cdf": function (e, t, n) {},
  d635: function (e, t, n) {
    "use strict";
    n("6791");
  },
});
//# sourceMappingURL=app.14ba2ab1.js.map
