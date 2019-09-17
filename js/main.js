!function (t, e) { "use strict"; "function" == typeof define && define.amd ? define([], function () { return t.Waves = e.call(t), t.Waves }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t) }("object" == typeof global ? global : this, function () { "use strict"; function t(t) { return null !== t && t === t.window } function e(e) { return t(e) ? e : 9 === e.nodeType && e.defaultView } function n(t) { var e = typeof t; return "function" === e || "object" === e && !!t } function o(t) { return n(t) && t.nodeType > 0 } function a(t) { var e = f.call(t); return "[object String]" === e ? d(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : o(t) ? [t] : [] } function i(t) { var n, o, a = { top: 0, left: 0 }, i = t && t.ownerDocument; return n = i.documentElement, void 0 !== t.getBoundingClientRect && (a = t.getBoundingClientRect()), o = e(i), { top: a.top + o.pageYOffset - n.clientTop, left: a.left + o.pageXOffset - n.clientLeft } } function r(t) { var e = ""; for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";"); return e } function s(t, e, n) { if (n) { n.classList.remove("waves-rippling"); var o = n.getAttribute("data-x"), a = n.getAttribute("data-y"), i = n.getAttribute("data-scale"), s = n.getAttribute("data-translate"), u = 350 - (Date.now() - Number(n.getAttribute("data-hold"))); u < 0 && (u = 0), "mousemove" === t.type && (u = 150); var c = "mousemove" === t.type ? 2500 : v.duration; setTimeout(function () { var t = { top: a + "px", left: o + "px", opacity: "0", "-webkit-transition-duration": c + "ms", "-moz-transition-duration": c + "ms", "-o-transition-duration": c + "ms", "transition-duration": c + "ms", "-webkit-transform": i + " " + s, "-moz-transform": i + " " + s, "-ms-transform": i + " " + s, "-o-transform": i + " " + s, transform: i + " " + s }; n.setAttribute("style", r(t)), setTimeout(function () { try { e.removeChild(n) } catch (t) { return !1 } }, c) }, u) } } function u(t) { if (!1 === h.allowEvent(t)) return null; for (var e = null, n = t.target || t.srcElement; n.parentElement;) { if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) { e = n; break } n = n.parentElement } return e } function c(t) { var e = u(t); if (null !== e) { if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return; if (h.registerEvent(t), "touchstart" === t.type && v.delay) { var n = !1, o = setTimeout(function () { o = null, v.show(t, e) }, v.delay), a = function (a) { o && (clearTimeout(o), o = null, v.show(t, e)), n || (n = !0, v.hide(a, e)), r() }, i = function (t) { o && (clearTimeout(o), o = null), a(t), r() }; e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", a, !1), e.addEventListener("touchcancel", a, !1); var r = function () { e.removeEventListener("touchmove", i), e.removeEventListener("touchend", a), e.removeEventListener("touchcancel", a) } } else v.show(t, e), m && (e.addEventListener("touchend", v.hide, !1), e.addEventListener("touchcancel", v.hide, !1)), e.addEventListener("mouseup", v.hide, !1), e.addEventListener("mouseleave", v.hide, !1) } } var l = l || {}, d = document.querySelectorAll.bind(document), f = Object.prototype.toString, m = "ontouchstart" in window, v = { duration: 750, delay: 200, show: function (t, e, n) { if (2 === t.button) return !1; e = e || this; var o = document.createElement("div"); o.className = "waves-ripple waves-rippling", e.appendChild(o); var a = i(e), s = 0, u = 0; "touches" in t && t.touches.length ? (s = t.touches[0].pageY - a.top, u = t.touches[0].pageX - a.left) : (s = t.pageY - a.top, u = t.pageX - a.left), u = u >= 0 ? u : 0, s = s >= 0 ? s : 0; var c = "scale(" + e.clientWidth / 100 * 3 + ")", l = "translate(0,0)"; n && (l = "translate(" + n.x + "px, " + n.y + "px)"), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-x", u), o.setAttribute("data-y", s), o.setAttribute("data-scale", c), o.setAttribute("data-translate", l); var d = { top: s + "px", left: u + "px" }; o.classList.add("waves-notransition"), o.setAttribute("style", r(d)), o.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + l, d["-moz-transform"] = c + " " + l, d["-ms-transform"] = c + " " + l, d["-o-transform"] = c + " " + l, d.transform = c + " " + l, d.opacity = "1"; var f = "mousemove" === t.type ? 2500 : v.duration; d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", o.setAttribute("style", r(d)) }, hide: function (t, e) { for (var n = (e = e || this).getElementsByClassName("waves-rippling"), o = 0, a = n.length; o < a; o++)s(t, e, n[o]); m && (e.removeEventListener("touchend", v.hide), e.removeEventListener("touchcancel", v.hide)), e.removeEventListener("mouseup", v.hide), e.removeEventListener("mouseleave", v.hide) } }, p = { input: function (t) { var e = t.parentNode; if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) { var n = document.createElement("i"); n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t); var o = window.getComputedStyle(t, null), a = o.color, i = o.backgroundColor; n.setAttribute("style", "color:" + a + ";background:" + i), t.setAttribute("style", "background-color:rgba(0,0,0,0);") } }, img: function (t) { var e = t.parentNode; if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) { var n = document.createElement("i"); e.replaceChild(n, t), n.appendChild(t) } } }, h = { touches: 0, allowEvent: function (t) { var e = !0; return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e }, registerEvent: function (t) { var e = t.type; "touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () { h.touches && (h.touches -= 1) }, 500) } }; return l.init = function (t) { var e = document.body; "duration" in (t = t || {}) && (v.duration = t.duration), "delay" in t && (v.delay = t.delay), m && (e.addEventListener("touchstart", c, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", c, !1) }, l.attach = function (t, e) { t = a(t), "[object Array]" === f.call(e) && (e = e.join(" ")), e = e ? " " + e : ""; for (var n, o, i = 0, r = t.length; i < r; i++)o = (n = t[i]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (p[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e) }, l.ripple = function (t, e) { var n = (t = a(t)).length; if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n) for (var o, r, s, u = {}, c = 0, l = { type: "mousedown", button: 1 }; c < n; c++)if (o = t[c], r = e.position || { x: o.clientWidth / 2, y: o.clientHeight / 2 }, s = i(o), u.x = s.left + r.x, u.y = s.top + r.y, l.pageX = u.x, l.pageY = u.y, v.show(l, o), e.wait >= 0 && null !== e.wait) { var d = { type: "mouseup", button: 1 }; setTimeout(function (t, e) { return function () { v.hide(t, e) } }(d, o), e.wait) } }, l.calm = function (t) { for (var e = { type: "mouseup", button: 1 }, n = 0, o = (t = a(t)).length; n < o; n++)v.hide(e, t[n]) }, l.displayEffect = function (t) { l.init(t) }, l });

(function (root, factory) {
    root['FP'] = factory();
})(typeof this !== undefined && this, function () {

    var $ = function (arg, all) {
        return all ? document.querySelectorAll(arg) : document.querySelector(arg);
    };

    var MoveTo = function () {
        var defaults = {
            tolerance: 0,
            duration: 800,
            easing: 'easeOutQuart',
            container: window,
            callback: function callback() { }
        };

        function easeOutQuart(t, b, c, d) {
            t /= d;
            t--;
            return -c * (t * t * t * t - 1) + b;
        }

        function mergeObject(obj1, obj2) {
            var obj3 = {};
            Object.keys(obj1).forEach(function (propertyName) {
                obj3[propertyName] = obj1[propertyName];
            });
            Object.keys(obj2).forEach(function (propertyName) {
                obj3[propertyName] = obj2[propertyName];
            });
            return obj3;
        };

        function kebabCase(val) {
            return val.replace(/([A-Z])/g, function ($1) {
                return '-' + $1.toLowerCase();
            });
        };

        function countScrollTop(container) {
            if (container instanceof HTMLElement) {
                return container.scrollTop;
            }

            return container.pageYOffset;
        };

        function MoveTo() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.options = mergeObject(defaults, options);
            this.easeFunctions = mergeObject({
                easeOutQuart: easeOutQuart
            }, easeFunctions);
        }

        MoveTo.prototype.registerTrigger = function (dom, callback) {
            var _this = this;

            if (!dom) {
                return;
            }

            var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled

            var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
            var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));

            if (typeof callback === 'function') {
                options.callback = callback;
            }

            var listener = function listener(e) {
                e.preventDefault();

                _this.move(target, options);
            };

            dom.addEventListener('click', listener, false);
            return function () {
                return dom.removeEventListener('click', listener, false);
            };
        };

        MoveTo.prototype.move = function (target) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (target !== 0 && !target) {
                return;
            }

            options = mergeObject(this.options, options);
            var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
            var from = countScrollTop(options.container);
            var startTime = null;
            var lastYOffset;
            distance -= options.tolerance; // rAF loop

            var loop = function loop(currentTime) {
                var currentYOffset = countScrollTop(_this2.options.container);

                if (!startTime) {
                    // To starts time from 1, we subtracted 1 from current time
                    // If time starts from 1 The first loop will not do anything,
                    // because easing value will be zero
                    startTime = currentTime - 1;
                }

                var timeElapsed = currentTime - startTime;

                if (lastYOffset) {
                    if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {
                        return options.callback(target);
                    }
                }

                lastYOffset = currentYOffset;

                var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);

                options.container.scroll(0, val);

                if (timeElapsed < options.duration) {
                    window.requestAnimationFrame(loop);
                } else {
                    options.container.scroll(0, distance + from);
                    options.callback(target);
                }
            };

            window.requestAnimationFrame(loop);
        };
        /**
         * Adds custom ease function
         * @param {string}   name Ease function name
         * @param {function} fn   Ease function
         */


        MoveTo.prototype.addEaseFunction = function (name, fn) {
            this.easeFunctions[name] = fn;
        };

        function _getOptionsFromTriggerDom(dom, options) {
            var domOptions = {};
            Object.keys(options).forEach(function (key) {
                var value = dom.getAttribute("data-mt-".concat(kebabCase(key)));

                if (value) {
                    domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
                }
            });
            return domOptions;
        }

        return MoveTo;
    }();

    (function () {
        return {
            toggle: function (id) {
                $(id).classList.toggle('is-active');
            }
        };
    })();

    var ScrollOut = function () {
        "use strict"
        function S(e, t, n) { return e < t ? t : n < e ? n : e } function w(e) { return +(0 < e) - +(e < 0) } var t = {}
        function A(e) { return t[e] || (t[e] = e.replace(/([A-Z])/g, n)) } function n(e) { return "-" + e[0].toLowerCase() } var D = window, E = document.documentElement
        function H(e, t) { return e && 0 !== e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (t || E).querySelectorAll(e)) : [] } var L, P = function (e, t) { for (var n in t) e.setAttribute("data-" + A(n), t[n]) }, b = []
        function x() { b.slice().forEach(function (e) { return e() }), L = b.length ? requestAnimationFrame(x) : 0 } function O() { } var W = "scroll", y = "resize", _ = "addEventListener", N = "removeEventListener", T = 0
        return function (h) {
            var o, c, l, i, g, p, t, s = (h = h || {}).onChange || O, f = h.onHidden || O, u = h.onShown || O, a = h.cssProps ? (o = h.cssProps, function (e, t) {
                for (var n in t) (!0 === o || o[n]) && e.style.setProperty("--" + A(n), (r = t[n], Math.round(1e4 * r) / 1e4))
                var r
            }) : O, e = h.scrollingElement, m = e ? H(e)[0] : D, X = e ? H(e)[0] : E, r = ++T, v = function (e, t, n) { return e[t + r] !== (e[t + r] = JSON.stringify(n)) }, n = function () { i = !0 }, d = function () {
                i && (i = !1, l = H(h.targets || "[data-scroll]", H(h.scope || X)[0]).map(function (e) { return { $: e, ctx: {} } }))
                var v = X.clientWidth, d = X.clientHeight, e = w(-g + (g = X.scrollLeft || D.pageXOffset)), t = w(-p + (p = X.scrollTop || D.pageYOffset)), n = X.scrollLeft / (X.scrollWidth - v || 1), r = X.scrollTop / (X.scrollHeight - d || 1)
                c = { scrollDirX: e, scrollDirY: t, scrollPercentX: n, scrollPercentY: r }, l.forEach(function (e) {
                    for (var t = e.$, n = t, r = 0, o = 0; r += n.offsetLeft, o += n.offsetTop, (n = n.offsetParent) && n !== m;); var i = t.clientWidth || t.offsetWidth || 0, c = t.clientHeight || t.offsetHeight || 0, l = (S(r + i, g, g + v) - S(r, g, g + v)) / i, s = (S(o + c, p, p + d) - S(o, p, p + d)) / c, f = S((g - (i / 2 + r - v / 2)) / (v / 2), -1, 1), u = S((p - (c / 2 + o - d / 2)) / (d / 2), -1, 1), a = +(h.offset ? h.offset <= p : (h.threshold || 0) < l * s)
                    e.ctx = { elementHeight: c, elementWidth: i, intersectX: 1 === l ? 0 : w(r - g), intersectY: 1 === s ? 0 : w(o - p), offsetX: r, offsetY: o, viewportX: f, viewportY: u, visible: a, visibleX: l, visibleY: s }
                })
            }, Y = (t = function () {
                if (l) {
                    var e = { scrollDirX: c.scrollDirX, scrollDirY: c.scrollDirY }
                    v(X, "_SA", e) && P(X, e), v(X, "_S", c) && a(X, c)
                    for (var t = l.length - 1; -1 < t; t--) {
                        var n = l[t], r = n.$, o = n.ctx, i = o.visible
                        v(r, "_SO", o) && a(r, o), v(r, "_SV", i) && (P(r, { scroll: i ? "in" : "out" }), o.index = t, s(r, o, X), (i ? u : f)(r, o, X)), i && h.once && l.splice(t, 1)
                    }
                }
            }, b.push(t), L || x(), function () { !(b = b.filter(function (e) { return e !== t })).length && L && (L = 0, cancelAnimationFrame(L)) })
            return n(), d(), D[_](y, d), m[_](W, d), { index: n, teardown: function () { Y(), D[N](y, d), m[N](W, d) }, update: d }
        }
    }();

    !(function (e, t) { "function" == typeof define && define.amd ? define([], (function () { return t(e) })) : "object" == typeof exports ? module.exports = t(e) : e.Gumshoe = t(e) })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function (e) { "use strict"; var t = { navClass: "active", contentClass: "active", nested: !1, nestedClass: "active", offset: 0, reflow: !1, events: !0 }, n = function (e, t, n) { if (n.settings.events) { var o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n }); t.dispatchEvent(o) } }, o = function (e) { var t = 0; if (e.offsetParent) for (; e;)t += e.offsetTop, e = e.offsetParent; return t >= 0 ? t : 0 }, s = function (e) { e && e.sort((function (e, t) { return o(e.content) < o(t.content) ? -1 : 1 })) }, c = function (t, n, o) { var s = t.getBoundingClientRect(), c = (function (e) { return "function" == typeof e.offset ? parseFloat(e.offset()) : parseFloat(e.offset) })(n); return o ? parseInt(s.bottom, 10) < (e.innerHeight || document.documentElement.clientHeight) : parseInt(s.top, 10) <= c }, i = function () { return e.innerHeight + e.pageYOffset >= Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) }, r = function (e, t) { var n = e[e.length - 1]; if (function (e, t) { return !(!i() || !c(e.content, t, !0)) }(n, t)) return n; for (var o = e.length - 1; o >= 0; o--)if (c(e[o].content, t)) return e[o] }, a = function (e, t) { if (t.nested && e.parentNode) { var n = e.parentNode.closest("li"); n && (n.classList.remove(t.nestedClass), a(n, t)) } }, l = function (e, t) { if (e) { var o = e.nav.closest("li"); o && (o.classList.remove(t.navClass), e.content.classList.remove(t.contentClass), a(o, t), n("gumshoeDeactivate", o, { link: e.nav, content: e.content, settings: t })) } }, u = function (e, t) { if (t.nested) { var n = e.parentNode.closest("li"); n && (n.classList.add(t.nestedClass), u(n, t)) } }; return function (o, c) { var i, a, f, d, v, m = {}; m.setup = function () { i = document.querySelectorAll(o), a = [], Array.prototype.forEach.call(i, (function (e) { var t = document.getElementById(decodeURIComponent(e.hash.substr(1))); t && a.push({ nav: e, content: t }) })), s(a) }, m.detect = function () { var e = r(a, v); e ? f && e.content === f.content || (l(f, v), (function (e, t) { if (e) { var o = e.nav.closest("li"); o && (o.classList.add(t.navClass), e.content.classList.add(t.contentClass), u(o, t), n("gumshoeActivate", o, { link: e.nav, content: e.content, settings: t })) } })(e, v), f = e) : f && (l(f, v), f = null) }; var p = function (t) { d && e.cancelAnimationFrame(d), d = e.requestAnimationFrame(m.detect) }, h = function (t) { d && e.cancelAnimationFrame(d), d = e.requestAnimationFrame((function () { s(a), m.detect() })) }; m.destroy = function () { f && l(f, v), e.removeEventListener("scroll", p, !1), v.reflow && e.removeEventListener("resize", h, !1), a = null, i = null, f = null, d = null, v = null }; return v = (function () { var e = {}; return Array.prototype.forEach.call(arguments, (function (t) { for (var n in t) { if (!t.hasOwnProperty(n)) return; e[n] = t[n] } })), e })(t, c || {}), m.setup(), m.detect(), e.addEventListener("scroll", p, !1), v.reflow && e.addEventListener("resize", h, !1), m } }));

    (function () {
        var debounceTimer = null,
            btn = $('#btnTop'),
            bn = $("#bottom-nav-1"),
            bni = $('#bti');

        window.onscroll = function () {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
            var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            debounceTimer = setTimeout(function () {
                if (scrollPos > 800) {
                    btn.classList.add('is-active');
                    bn.classList.add('bottom-navv');
                    bni.classList.remove('hide')
                } else {
                    btn.classList.remove('is-active');
                    bn.classList.remove('bottom-navv');
                    bni.classList.add('hide')
                }

                console.log('fired');

            }, 100);
        }
    })();

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    var VanillaTilt = function () { "use strict"; var t = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }, e = function () { function e(i) { var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (t(this, e), !(i instanceof Node)) throw "Can't initialize VanillaTilt because " + i + " is not a Node."; this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = i, this.settings = this.extendSettings(s), this.reverse = this.settings.reverse ? -1 : 1, this.glare = e.isSettingTrue(this.settings.glare), this.glarePrerender = e.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = e.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = e.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition() } return e.isSettingTrue = function (t) { return "" === t || !0 === t || 1 === t }, e.prototype.getElementListener = function () { if (this.fullPageListening) return window.document; if ("string" == typeof this.settings["mouse-event-element"]) { var t = document.querySelector(this.settings["mouse-event-element"]); if (t) return t } return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element }, e.prototype.addEventListeners = function () { this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind) }, e.prototype.removeEventListeners = function () { this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind) }, e.prototype.destroy = function () { clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null }, e.prototype.onDeviceOrientation = function (t) { if (null !== t.gamma && null !== t.beta) { this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1); var e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX, i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY, s = e / this.width, n = i / this.height, a = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s, l = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n; null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = { clientX: a + this.left, clientY: l + this.top }, this.updateCall = requestAnimationFrame(this.updateBind) } }, e.prototype.onMouseEnter = function () { this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition() }, e.prototype.onMouseMove = function (t) { null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind) }, e.prototype.onMouseLeave = function () { this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind) }, e.prototype.reset = function () { this.event = { clientX: this.left + this.width / 2, clientY: this.top + this.height / 2 }, this.element && this.element.style && (this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare() }, e.prototype.resetGlare = function () { this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0") }, e.prototype.updateInitialPosition = function () { if (0 !== this.settings.startX || 0 !== this.settings.startY) { this.onMouseEnter(), this.fullPageListening ? this.event = { clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth, clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight } : this.event = { clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width, clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height }; var t = this.settings.scale; this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare() } }, e.prototype.getValues = function () { var t = void 0, e = void 0; return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), { tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2), tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2), percentageX: 100 * t, percentageY: 100 * e, angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI) } }, e.prototype.updateElementPosition = function () { var t = this.element.getBoundingClientRect(); this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top }, e.prototype.update = function () { var t = this.getValues(); this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + t.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + t.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", { detail: t })), this.updateCall = null }, e.prototype.prepareGlare = function () { if (!this.glarePrerender) { var t = document.createElement("div"); t.classList.add("js-tilt-glare"); var e = document.createElement("div"); e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t) } this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", "pointer-events": "none" }), Object.assign(this.glareElement.style, { position: "absolute", top: "50%", left: "50%", "pointer-events": "none", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", width: 2 * this.element.offsetWidth + "px", height: 2 * this.element.offsetWidth + "px", transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" })) }, e.prototype.updateGlareSize = function () { this.glare && Object.assign(this.glareElement.style, { width: "" + 2 * this.element.offsetWidth, height: "" + 2 * this.element.offsetWidth }) }, e.prototype.updateClientSize = function () { this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight }, e.prototype.onWindowResize = function () { this.updateGlareSize(), this.updateClientSize() }, e.prototype.setTransition = function () { var t = this; clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout(function () { t.element.style.transition = "", t.glare && (t.glareElement.style.transition = "") }, this.settings.speed) }, e.prototype.extendSettings = function (t) { var e = { reverse: !1, max: 15, startX: 0, startY: 0, perspective: 1e3, easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: !0, axis: null, glare: !1, "max-glare": 1, "glare-prerender": !1, "full-page-listening": !1, "mouse-event-element": null, reset: !0, gyroscope: !0, gyroscopeMinAngleX: -45, gyroscopeMaxAngleX: 45, gyroscopeMinAngleY: -45, gyroscopeMaxAngleY: 45, gyroscopeSamples: 10 }, i = {}; for (var s in e) if (s in t) i[s] = t[s]; else if (this.element.hasAttribute("data-tilt-" + s)) { var n = this.element.getAttribute("data-tilt-" + s); try { i[s] = JSON.parse(n) } catch (t) { i[s] = n } } else i[s] = e[s]; return i }, e.init = function (t, i) { t instanceof Node && (t = [t]), t instanceof NodeList && (t = [].slice.call(t)), t instanceof Array && t.forEach(function (t) { "vanillaTilt" in t || (t.vanillaTilt = new e(t, i)) }) }, e }(); return "undefined" != typeof document && (window.VanillaTilt = e, e.init(document.querySelectorAll("[data-tilt]"))), e }();

    (function () {

        Waves.init();
        ScrollOut({
            once: true
        });


        var elements = $('.typewrite', true);
                        
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        var triggers = $('.js-trigger', true),
            move2 = new MoveTo();


        for (var i = 0; i < triggers.length; i++) {
            move2.registerTrigger(triggers[i]);
        }

        if (window.innerWidth > 960) {
            VanillaTilt.init($('.tilt-3d', true), {
                reverse: true
            });
            new Gumshoe('#toolbar-nav-1 a');
            // Remove Bottom Nav
            var bn = $('#bottom-nav-1');
            bn.parentElement.removeChild(bn);
        } else {
            $('#skills-list').classList.remove('list--two-line');
            // Remove Toolbar Nav
            var tn = $('#toolbar-sec-1');
            tn.parentElement.removeChild(tn);
        }
        new Gumshoe('#bottom-nav-1 a');

    })();
});