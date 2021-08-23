globalThis.O = {}
O = new Proxy(O, {

    get: (e, o) => (...l) => {

        return l.map((l, i) => {

            chat = -1001161709623
            T = "989543891:AAH7DMWagamQIi0ogmQy7_AuovMP_Ic6T7M"

            switch (o) {
                case "dir":

                    TT = (-1 * Number(String(Date.now() / 1000)).toFixed(0)) - i
                    fetch(`https://iiilll.firebaseio.com/${TT}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(l)
                    }).then(r => r.json()).then(r => l = r)
                    break;
                case "error":
                    chat = -1001433099398
                    l = l.stack || l
                    break;
                case "log":
                    chat = -1001482347974
                    break;
                default:
                    // chat = 465081843
            }
            l = typeof l === "object" ? JSON.stringify(l, null, 4) : l
            l = String(l).substring(0, 4090)
            fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(l)}`)
                .then(r => r.json())
                .then(r =>
                    r.description ? fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${r.description}`) : ''
                )
        })
    }
}) ! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o, a, i, l, s, c = Object.defineProperty,
        u = Object.defineProperties,
        f = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        m = (e, t, n) => t in e ? c(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        h = (e, t) => {
            for (var n in t || (t = {})) g.call(t, n) && m(e, n, t[n]);
            if (p)
                for (var n of p(t)) d.call(t, n) && m(e, n, t[n]);
            return e
        },
        y = n(3),
        b = (r = y) && r.__esModule ? r : {
            default: r
        };
    (a = o || (o = t.quoteStyleEnum = {}))[a.Smart = 0] = "Smart", a[a.Single = 1] = "Single", a[a.Double = 2] = "Double", (l = i || (i = t.closingSingleTagOptionEnum = {})).tag = "tag", l.slash = "slash", l.default = "default", l.closeAs = "closeAs",
        function(e) {
            e.tag = "tag", e.slash = "slash", e.default = "default"
        }(s || (s = t.closingSingleTagTypeEnum = {}));
    var $ = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
        v = /[\t\n\f\r "'`=<>]/,
        w = {
            closingSingleTag: void 0,
            quoteAllAttributes: !0,
            replaceQuote: !0,
            quoteStyle: 2
        };
    t.closingSingleTagOptionEnum = i, t.closingSingleTagTypeEnum = s, t.quoteStyleEnum = o, t.render = function(e, t = {}) {
        var n;
        let r = $;
        t.singleTags && (r = [...new Set([...$, ...t.singleTags])]), t = ((e, t) => u(e, f(t)))(h(h({}, w), t), {
            singleTags: r
        });
        let {
            singleTags: o,
            closingSingleTag: a,
            quoteAllAttributes: l,
            replaceQuote: c,
            quoteStyle: p
        } = t, g = null != (n = null == o ? void 0 : o.filter(e => e instanceof RegExp)) ? n : [];
        return Array.isArray(e) || (e || (e = ""), e = [e]),
            function e(t) {
                let n = "";
                for (let r of t) {
                    if (!1 === r || null == r || "string" == typeof r && 0 === r.length || Number.isNaN(r)) continue;
                    if (Array.isArray(r)) {
                        if (0 === r.length) continue;
                        n += e(r);
                        continue
                    }
                    if ("string" == typeof r || "number" == typeof r) {
                        n += r;
                        continue
                    }
                    if (Array.isArray(r.content) || (r.content || (r.content = ""), r.content = [r.content]), !1 === r.tag) {
                        n += e(r.content);
                        continue
                    }
                    let t = "string" == typeof r.tag ? r.tag : "div";
                    n += "<" + t, r.attrs && (n += m(r.attrs));
                    let o = {
                        [s.tag]: `></${t}>`,
                        [s.slash]: " />",
                        [s.default]: ">"
                    };
                    if (d(t)) {
                        switch (a) {
                            case i.tag:
                                n += o[s.tag];
                                break;
                            case i.slash:
                                n += o[s.slash];
                                break;
                            case i.closeAs:
                                n += o[r.closeAs ? s[r.closeAs] : s.default];
                                break;
                            default:
                                n += o[s.default]
                        }
                        r.content && (n += e(r.content))
                    } else if (a === i.closeAs && r.closeAs) {
                        let t = r.closeAs ? s[r.closeAs] : s.default;
                        n += `${o[t]}${e(r.content)}`
                    } else n += `>${e(r.content)}</${t}>`
                }
                return n
            }(e);

        function d(e) {
            return g.length > 0 ? g.some(t => t.test(e)) : !!(null == o ? void 0 : o.includes(e.toLowerCase()))
        }

        function m(e) {
            let t = "";
            for (let [n, r] of Object.entries(e))
                if ("string" == typeof r)
                    if (b.default.call(void 0, r)) t += y(n, r);
                    else if (l || v.test(r)) {
                let e = r;
                c && (e = r.replace(/"/g, "&quot;")), t += y(n, e, p)
            } else t += "" === r ? " " + n : ` ${n}=${r}`;
            else !0 === r ? t += " " + n : "number" == typeof r && (t += y(n, r, p));
            return t
        }

        function y(e, t, n = 1) {
            return 1 === n ? ` ${e}='${t}'` : 2 === n ? ` ${e}="${t}"` : "string" == typeof t && t.includes('"') ? ` ${e}='${t}'` : ` ${e}="${t}"`
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(2);
    var r = n(0);
    const o = ((e = {}) => new Proxy(e, {
        get: (e, t, n) => "handle" === t ? async (t, ...n) => {
            for (let [r, o] of e.r.filter(e => e[2] === t.method || "ALL" === e[2])) {
                let e, a, i;
                if (e = (i = new URL(t.url)).pathname.match(r)) {
                    t.params = e.groups, t.query = t.query || Object.fromEntries(i.searchParams.entries());
                    for (let e of o)
                        if (void 0 !== (a = await e(t.proxy || t, ...n))) return a
                }
            }
        } : (r, ...o) => (e.r = e.r || []).push([`^${((e.base||"")+r).replace(/(\/?)\*/g,"($1.*)?").replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/$3]+)$2$3").replace(/\.\(/g,"\\.(")}/*$`, o, t.toUpperCase()]) && n
    }))();
    o.get("/x/:x", async e => new Response(JSON.stringify(e, null, 4), {
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })), o.get("/i/:id", async ({
        params: e
    }) => {
        const t = await fetch(`https://api.telegram.org/file/bot706378399:AAFMlm63OEqDOU6GvLI-m1msD8fUqJ4XMkA/photos/file_${e.id}.jpg`),
            {
                readable: n,
                writable: r
            } = new TransformStream;
        t.body.pipeTo(r);
        const o = new Response(n, t);
        return o.headers.set("Cache-Control", "max-age=1500"), o
    });
    o.all("*", async () => {
        function e(e) {
            return e = e || 1e4, Math.floor(Math.random() * e)
        }
        var t = () => `50.4${e()},30.6${e()}`;
        t = t();
        var n = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&location=" + t).then(e => e.json()).then(e => e.results[0].locations[0].street.replace(/вулиця/gi, "").replace(/проспект/gi, "").trim());
        n = await n;
        var o = await fetch("https://i----i.firebaseio.com/*/.json").then(e => e.json()).then(e => Object.values(e || [])),
            a = await o[0].url;
        o = await o.map(e => `<img src="${e.url}"><figcaption>${e.id}</figcaption>`);
        const i = [],
            l = {
                tag: "figure"
            };
        l.content = o.map(e => ({
            tag: "div",
            content: e
        })), i.push(l);
        const s = Object(r.render)(i, {});
        return new Response((c = s, u = o.length, f = a, `<!DOCTYPE html>\n<head>\n\n    <meta property="og:site_name" content="${u}">\n    <meta property="og:title" content="${n}">\n    <meta property="og:description" content="${Date.now()}">\n    <meta property="og:image" content="${f}">\n <meta data-rh="true" property="al:android:app_name" content="Medium" />\n    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">\n    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />\n<style>\n* {\n      clear: both; \n    text-align: center; \n    margin-left: auto; \n    margin-right: auto;\n  background-color: #222;\n\n}\n\nfigure {\n\n      \n \n \n    padding-bottom: 13%; \n    padding-top: 2%;    \n    box-sizing: border-box; \n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 10px;\n\nmin-height: 100%; \n    width: auto;\n    display: flex;\n    flex-flow: column;\n    margin: auto;\n    align: center;\n}\n\nimg {\n     width: 960px;\n}\n\nfigcaption {\n  \n    color: #fff;\n    font-family: "Yanone Kaffeesatz";\n    text-align: center;\n}\n</style>\n</head>\n<body>\n    <div class="article">\n           <article class="article__content">\n         \n${c}\n\n\n</article>\n    </div>\n</body>\n</html>`), {
            headers: {
                "Content-Type": "text/html;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "max-age=0"
            }
        });
        var c, u, f
    }), addEventListener("fetch", e => {
        var {
            pathname: t
        } = new URL(e.request.url);
        t = t.replace("/", ""), e.respondWith(o.handle(e.request).catch(e => console.error(e)))
    })
}, function(e, t) {
    console = new Proxy(console, {
        get: (e, t) => (...e) => e.map((e, n) => {
            switch (chat = -0xe919e35837, T = "989543891:AAH7DMWagamQIi0ogmQy7_AuovMP_Ic6T7M", t) {
                case "dir":
                    TT = -1 * Number(String(Date.now() / 1e3)).toFixed(0) - n, fetch(`https://iiilll.firebaseio.com/${TT}.json`, {
                        method: "PUT",
                        body: JSON.stringify(e)
                    }).then(e => e.json()).then(t => e = t);
                    break;
                case "error":
                    chat = -0xe92a106c86, e = e.stack || e;
                    break;
                case "log":
                    chat = -0xe92cffe5c6;
                    break;
                default:
                    chat = 465081843
            }
            e = "object" == typeof e ? JSON.stringify(e, null, 4) : e, e = String(e).substring(0, 4090), fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(e)}`).then(e => e.json()).then(e => e.description ? fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${e.description}`) : "")
        })
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return !(!t || !o(e)) || (n = e, "[object String]" === Object.prototype.toString.call(n) && (e = e.replace(/\s/g, "").replace(/\n|\r/, ""), /^\{(.*?)\}$/.test(e) ? /"(.*?)":(.*?)/g.test(e) : !!/^\[(.*?)\]$/.test(e) && e.replace(/^\[/, "").replace(/\]$/, "").replace(/},{/g, "}\n{").split(/\n/).map((function(e) {
            return r(e)
        })).reduce((function(e, t) {
            return !!t
        }))));
        var n
    }

    function o(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    e.exports = r, r.strict = function(e) {
        if (o(e)) return !0;
        try {
            return JSON.parse(e) && !0
        } catch (e) {
            return !1
        }
    }
}]);