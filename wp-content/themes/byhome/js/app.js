(() => {
    "use strict";
    function e(e) {
        this.type = e;
    }
    !(function (e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var n = t();
            for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o];
        }
    })(window, function () {
        return (function (e) {
            var t = {};
            function n(o) {
                if (t[o]) return t[o].exports;
                var i = (t[o] = { i: o, l: !1, exports: {} });
                return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
            }
            return (
                (n.m = e),
                    (n.c = t),
                    (n.d = function (e, t, o) {
                        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
                    }),
                    (n.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                    }),
                    (n.t = function (e, t) {
                        if ((1 & t && (e = n(e)), 8 & t)) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var o = Object.create(null);
                        if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                            for (var i in e)
                                n.d(
                                    o,
                                    i,
                                    function (t) {
                                        return e[t];
                                    }.bind(null, i)
                                );
                        return o;
                    }),
                    (n.n = function (e) {
                        var t =
                            e && e.__esModule
                                ? function () {
                                    return e.default;
                                }
                                : function () {
                                    return e;
                                };
                        return n.d(t, "a", t), t;
                    }),
                    (n.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }),
                    (n.p = ""),
                    n((n.s = 0))
            );
        })([
            function (e, t, n) {
                n.r(t);
                var o,
                    i = "fslightbox-",
                    r = "".concat(i, "styles"),
                    s = "".concat(i, "cursor-grabbing"),
                    a = "".concat(i, "full-dimension"),
                    c = "".concat(i, "flex-centered"),
                    l = "".concat(i, "open"),
                    d = "".concat(i, "transform-transition"),
                    u = "".concat(i, "absoluted"),
                    p = "".concat(i, "slide-btn"),
                    h = "".concat(p, "-container"),
                    f = "".concat(i, "fade-in"),
                    m = "".concat(i, "fade-out"),
                    g = f + "-strong",
                    v = m + "-strong",
                    b = "".concat(i, "opacity-"),
                    y = "".concat(b, "1"),
                    x = "".concat(i, "source");
                function w(e) {
                    return (w =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            })(e);
                }
                function S(e) {
                    var t,
                        n = e.props,
                        o = 0,
                        i = {};
                    (this.getSourceTypeFromLocalStorageByUrl = function (e) {
                        return t[e] ? t[e] : r(e);
                    }),
                        (this.handleReceivedSourceTypeForUrl = function (e, n) {
                            !1 === i[n] &&
                            (o--,
                                "invalid" !== e ? (i[n] = e) : delete i[n],
                            0 === o &&
                            ((function (e, t) {
                                for (var n in t) e[n] = t[n];
                            })(t, i),
                                localStorage.setItem("fslightbox-types", JSON.stringify(t))));
                        });
                    var r = function (e) {
                        o++, (i[e] = !1);
                    };
                    n.disableLocalStorage
                        ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}), (this.handleReceivedSourceTypeForUrl = function () {}))
                        : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
                }
                function A(e, t, n, o) {
                    var i = e.data,
                        r = e.elements.sources,
                        s = n / o,
                        a = 0;
                    this.adjustSize = function () {
                        if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
                        (a = o > i.maxSourceHeight ? i.maxSourceHeight : o), c();
                    };
                    var c = function () {
                        (r[t].style.width = a * s + "px"), (r[t].style.height = a + "px");
                    };
                }
                function L(e, t) {
                    var n = this,
                        o = e.collections.sourceSizers,
                        i = e.elements,
                        r = i.sourceAnimationWrappers,
                        s = i.sourceMainWrappers,
                        a = i.sources,
                        c = e.resolve;
                    function l(e, n) {
                        (o[t] = c(A, [t, e, n])), o[t].adjustSize();
                    }
                    this.runActions = function (e, o) {
                        a[t].classList.add(y), r[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), (n.runActions = l);
                    };
                }
                function E(e, t) {
                    var n,
                        o = this,
                        i = e.elements.sources,
                        r = e.props,
                        s = (0, e.resolve)(L, [t]);
                    (this.handleImageLoad = function (e) {
                        var t = e.target,
                            n = t.naturalWidth,
                            o = t.naturalHeight;
                        s.runActions(n, o);
                    }),
                        (this.handleVideoLoad = function (e) {
                            var t = e.target,
                                o = t.videoWidth,
                                i = t.videoHeight;
                            (n = !0), s.runActions(o, i);
                        }),
                        (this.handleNotMetaDatedVideoLoad = function () {
                            n || o.handleYoutubeLoad();
                        }),
                        (this.handleYoutubeLoad = function () {
                            var e = 1920,
                                t = 1080;
                            r.maxYoutubeDimensions && ((e = r.maxYoutubeDimensions.width), (t = r.maxYoutubeDimensions.height)), s.runActions(e, t);
                        }),
                        (this.handleCustomLoad = function () {
                            setTimeout(function () {
                                var e = i[t];
                                s.runActions(e.offsetWidth, e.offsetHeight);
                            });
                        });
                }
                function _(e, t, n) {
                    var o = e.elements.sources,
                        i = e.props.customClasses,
                        r = i[t] ? i[t] : "";
                    o[t].className = n + " " + r;
                }
                function C(e, t) {
                    var n = e.elements.sources,
                        o = e.props.customAttributes;
                    for (var i in o[t]) n[t].setAttribute(i, o[t][i]);
                }
                function T(e, t) {
                    var n = e.collections.sourceLoadHandlers,
                        o = e.elements,
                        i = o.sources,
                        r = o.sourceAnimationWrappers,
                        s = e.props.sources;
                    (i[t] = document.createElement("img")), _(e, t, x), (i[t].src = s[t]), (i[t].onload = n[t].handleImageLoad), C(e, t), r[t].appendChild(i[t]);
                }
                function k(e, t) {
                    var n = e.collections.sourceLoadHandlers,
                        o = e.elements,
                        i = o.sources,
                        r = o.sourceAnimationWrappers,
                        s = e.props,
                        a = s.sources,
                        c = s.videosPosters;
                    (i[t] = document.createElement("video")),
                        _(e, t, x),
                        (i[t].src = a[t]),
                        (i[t].onloadedmetadata = function (e) {
                            n[t].handleVideoLoad(e);
                        }),
                        (i[t].controls = !0),
                        C(e, t),
                    c[t] && (i[t].poster = c[t]);
                    var l = document.createElement("source");
                    (l.src = a[t]), i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t]);
                }
                function F(e, t) {
                    var n = e.collections.sourceLoadHandlers,
                        o = e.elements,
                        r = o.sources,
                        s = o.sourceAnimationWrappers,
                        a = e.props.sources;
                    (r[t] = document.createElement("iframe")),
                        _(e, t, "".concat(x, " ").concat(i, "youtube-iframe")),
                        (r[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1")),
                        (r[t].allowFullscreen = !0),
                        C(e, t),
                        s[t].appendChild(r[t]),
                        n[t].handleYoutubeLoad();
                }
                function I(e, t) {
                    var n = e.collections.sourceLoadHandlers,
                        o = e.elements,
                        i = o.sources,
                        r = o.sourceAnimationWrappers,
                        s = e.props.sources;
                    (i[t] = s[t]), _(e, t, "".concat(i[t].className, " ").concat(x)), r[t].appendChild(i[t]), n[t].handleCustomLoad();
                }
                function W(e, t) {
                    var n = e.elements,
                        o = n.sources,
                        r = n.sourceAnimationWrappers,
                        s = n.sourceMainWrappers;
                    e.props.sources,
                        (o[t] = document.createElement("div")),
                        (o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c)),
                        (o[t].innerHTML = "Invalid source"),
                        r[t].classList.add(g),
                        r[t].appendChild(o[t]),
                        s[t].removeChild(s[t].firstChild);
                }
                function P(e) {
                    var t = e.collections,
                        n = t.sourceLoadHandlers,
                        o = t.sourcesRenderFunctions,
                        i = e.core.sourceDisplayFacade,
                        r = e.resolve;
                    this.runActionsForSourceTypeAndIndex = function (t, s) {
                        var a;
                        switch (("invalid" !== t && (n[s] = r(E, [s])), t)) {
                            case "image":
                                a = T;
                                break;
                            case "video":
                                a = k;
                                break;
                            case "youtube":
                                a = F;
                                break;
                            case "custom":
                                a = I;
                                break;
                            default:
                                a = W;
                        }
                        (o[s] = function () {
                            return a(e, s);
                        }),
                            i.displaySourcesWhichShouldBeDisplayed();
                    };
                }
                function O() {
                    var e,
                        t,
                        n,
                        o = function (e) {
                            var t = document.createElement("a");
                            return (t.href = e), "www.youtube.com" === t.hostname;
                        },
                        i = function (e) {
                            return e.slice(0, e.indexOf("/"));
                        };
                    function r() {
                        if (4 !== n.readyState) {
                            if (2 === n.readyState) {
                                var e;
                                switch (i(n.getResponseHeader("content-type"))) {
                                    case "image":
                                        e = "image";
                                        break;
                                    case "video":
                                        e = "video";
                                        break;
                                    default:
                                        e = "invalid";
                                }
                                (n.onreadystatechange = null), n.abort(), t(e);
                            }
                        } else t("invalid");
                    }
                    (this.setUrlToCheck = function (t) {
                        e = t;
                    }),
                        (this.getSourceType = function (i) {
                            if (o(e)) return i("youtube");
                            (t = i), ((n = new XMLHttpRequest()).onreadystatechange = r), n.open("GET", e, !0), n.send();
                        });
                }
                function N(e, t, n) {
                    var o = e.props,
                        i = o.types,
                        r = o.type,
                        s = o.sources,
                        a = e.resolve;
                    (this.getTypeSetByClientForIndex = function (e) {
                        var t;
                        return i && i[e] ? (t = i[e]) : r && (t = r), t;
                    }),
                        (this.retrieveTypeWithXhrForIndex = function (e) {
                            var o = a(O);
                            o.setUrlToCheck(s[e]),
                                o.getSourceType(function (o) {
                                    t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
                                });
                        });
                }
                function M(e, t) {
                    var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                        o = e.elements,
                        i = o.sourceWrappersContainer,
                        r = o.sourceMainWrappers;
                    (r[t] = document.createElement("div")), (r[t].className = "".concat(u, " ").concat(a, " ").concat(c)), (r[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>');
                    var s = r[t].firstChild;
                    (n[t] = function () {
                        r[t].contains(s) && r[t].removeChild(s);
                    }),
                        i.appendChild(r[t]),
                        (function (e, t) {
                            var n = e.elements,
                                o = n.sourceMainWrappers,
                                i = n.sourceAnimationWrappers;
                            (i[t] = document.createElement("div")), o[t].appendChild(i[t]);
                        })(e, t);
                }
                function j(e, t, n, o) {
                    var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
                    var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r;
                }
                function H(e, t) {
                    var n = document.createElement("div");
                    return (n.className = "".concat(i, "toolbar-button ").concat(c)), (n.title = t), e.appendChild(n), n;
                }
                function z(e) {
                    var t = e.props.sources,
                        n = e.elements.container,
                        o = document.createElement("div");
                    (o.className = "".concat(i, "nav")),
                        n.appendChild(o),
                        (function (e, t) {
                            var n = document.createElement("div");
                            (n.className = "".concat(i, "toolbar")),
                                t.appendChild(n),
                                (function (e, t) {
                                    var n = e.componentsServices,
                                        o = e.core.fullscreenToggler,
                                        i = e.data,
                                        r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                                        s = H(t);
                                    s.title = "Enter fullscreen";
                                    var a = j(s, "20px", "0 0 18 18", r);
                                    (n.enterFullscreen = function () {
                                        (i.isFullscreenOpen = !0),
                                            (s.title = "Exit fullscreen"),
                                            a.setAttributeNS(null, "width", "24px"),
                                            a.setAttributeNS(null, "height", "24px"),
                                            a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                                            a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
                                    }),
                                        (n.exitFullscreen = function () {
                                            (i.isFullscreenOpen = !1),
                                                (s.title = "Enter fullscreen"),
                                                a.setAttributeNS(null, "width", "20px"),
                                                a.setAttributeNS(null, "height", "20px"),
                                                a.setAttributeNS(null, "viewBox", "0 0 18 18"),
                                                a.firstChild.setAttributeNS(null, "d", r);
                                        }),
                                        (s.onclick = function () {
                                            i.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen();
                                        });
                                })(e, n),
                                (function (e, t) {
                                    var n = H(t, "Close");
                                    (n.onclick = e.core.lightboxCloser.closeLightbox),
                                        j(
                                            n,
                                            "20px",
                                            "0 0 24 24",
                                            "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                                        );
                                })(e, n);
                        })(e, o),
                    t.length > 1 &&
                    (function (e, t) {
                        var n = e.componentsServices,
                            o = e.props.sources,
                            r = (e.stageIndexes, document.createElement("div"));
                        r.className = "".concat(i, "slide-number-container");
                        var s = document.createElement("div");
                        s.className = c;
                        var a = document.createElement("span");
                        n.setSlideNumber = function (e) {
                            return (a.innerHTML = e);
                        };
                        var l = document.createElement("span");
                        l.className = "".concat(i, "slash");
                        var d = document.createElement("div");
                        (d.innerHTML = o.length),
                            r.appendChild(s),
                            s.appendChild(a),
                            s.appendChild(l),
                            s.appendChild(d),
                            t.appendChild(r),
                            setTimeout(function () {
                                s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
                            });
                    })(e, o);
                }
                function D(e, t) {
                    var n = this,
                        o = e.elements.sourceMainWrappers,
                        i = e.props,
                        r = 0;
                    (this.byValue = function (e) {
                        return (r = e), n;
                    }),
                        (this.negative = function () {
                            s(-a());
                        }),
                        (this.zero = function () {
                            s(0);
                        }),
                        (this.positive = function () {
                            s(a());
                        });
                    var s = function (e) {
                            (o[t].style.transform = "translateX(".concat(e + r, "px)")), (r = 0);
                        },
                        a = function () {
                            return (1 + i.slideDistance) * innerWidth;
                        };
                }
                function R(e, t, n, o) {
                    var i = e.elements.container,
                        r = n.charAt(0).toUpperCase() + n.slice(1),
                        s = document.createElement("div");
                    (s.className = "".concat(h, " ").concat(h, "-").concat(n)),
                        (s.title = "".concat(r, " slide")),
                        (s.onclick = t),
                        (function (e, t) {
                            var n = document.createElement("div");
                            (n.className = "".concat(p, " ").concat(c)), j(n, "20px", "0 0 20 20", t), e.appendChild(n);
                        })(s, o),
                        i.appendChild(s);
                }
                function q(e, t) {
                    var n = e.classList;
                    n.contains(t) && n.remove(t);
                }
                function B(e) {
                    var t = this,
                        n = e.core,
                        o = n.eventsDispatcher,
                        i = n.fullscreenToggler,
                        r = n.globalEventsController,
                        s = n.scrollbarRecompensor,
                        a = e.data,
                        c = e.elements,
                        d = e.props,
                        u = e.sourcePointerProps;
                    (this.isLightboxFadingOut = !1),
                        (this.runActions = function () {
                            (t.isLightboxFadingOut = !0),
                                c.container.classList.add(v),
                                r.removeListeners(),
                            d.exitFullscreenOnClose && a.isFullscreenOpen && i.exitFullscreen(),
                                setTimeout(function () {
                                    (t.isLightboxFadingOut = !1),
                                        (u.isPointering = !1),
                                        c.container.classList.remove(v),
                                        document.documentElement.classList.remove(l),
                                        s.removeRecompense(),
                                        document.body.removeChild(c.container),
                                        o.dispatch("onClose");
                                }, 270);
                        });
                }
                function $(e) {
                    var t = e.core,
                        n = t.lightboxCloser,
                        o = t.fullscreenToggler,
                        i = t.slideChangeFacade;
                    this.listener = function (e) {
                        switch (e.key) {
                            case "Escape":
                                n.closeLightbox();
                                break;
                            case "ArrowLeft":
                                i.changeToPrevious();
                                break;
                            case "ArrowRight":
                                i.changeToNext();
                                break;
                            case "F11":
                                e.preventDefault(), o.enterFullscreen();
                        }
                    };
                }
                function X(e) {
                    var t = e.collections.sourceMainWrappersTransformers,
                        n = e.elements,
                        o = e.sourcePointerProps,
                        i = e.stageIndexes;
                    function r(e, n) {
                        t[e].byValue(o.swipedX)[n]();
                    }
                    this.runActionsForEvent = function (e) {
                        var t, a, c;
                        n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer),
                            (t = n.container),
                            (a = s),
                        (c = t.classList).contains(a) || c.add(a),
                            (o.swipedX = e.screenX - o.downScreenX),
                            r(i.current, "zero"),
                            void 0 !== i.previous && o.swipedX > 0 ? r(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && r(i.next, "positive");
                    };
                }
                function Y(e) {
                    var t = e.props.sources,
                        n = e.resolve,
                        o = e.sourcePointerProps,
                        i = n(X);
                    1 === t.length
                        ? (this.listener = function () {
                            o.swipedX = 1;
                        })
                        : (this.listener = function (e) {
                            o.isPointering && i.runActionsForEvent(e);
                        });
                }
                function U(e) {
                    var t = e.collections.sourceMainWrappersTransformers,
                        n = e.core.slideIndexChanger,
                        o = e.elements.sourceMainWrappers,
                        i = e.stageIndexes;
                    (this.runPositiveSwipedXActions = function () {
                        void 0 === i.previous || (r("positive"), n.changeTo(i.previous)), r("zero");
                    }),
                        (this.runNegativeSwipedXActions = function () {
                            void 0 === i.next || (r("negative"), n.changeTo(i.next)), r("zero");
                        });
                    var r = function (e) {
                        o[i.current].classList.add(d), t[i.current][e]();
                    };
                }
                function V(e, t) {
                    e.contains(t) && e.removeChild(t);
                }
                function Q(e) {
                    var t = e.core.lightboxCloser,
                        n = e.elements,
                        o = e.resolve,
                        i = e.sourcePointerProps,
                        r = o(U);
                    (this.runNoSwipeActions = function () {
                        V(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), (i.isPointering = !1);
                    }),
                        (this.runActions = function () {
                            i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), V(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), (i.isPointering = !1);
                        });
                }
                function G(e) {
                    var t = e.resolve,
                        n = e.sourcePointerProps,
                        o = t(Q);
                    this.listener = function () {
                        n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
                    };
                }
                function J(e) {
                    var t, n, o;
                    (n = (t = e).core.classFacade),
                        (o = t.elements),
                        (n.removeFromEachElementClassIfContains = function (e, t) {
                            for (var n = 0; n < o[e].length; n++) q(o[e][n], t);
                        }),
                        (function (e) {
                            var t = e.core.eventsDispatcher,
                                n = e.props;
                            t.dispatch = function (e) {
                                n[e] && n[e]();
                            };
                        })(e),
                        (function (e) {
                            var t = e.componentsServices,
                                n = e.core.fullscreenToggler;
                            (n.enterFullscreen = function () {
                                t.enterFullscreen();
                                var e = document.documentElement;
                                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                            }),
                                (n.exitFullscreen = function () {
                                    t.exitFullscreen(),
                                        document.exitFullscreen
                                            ? document.exitFullscreen()
                                            : document.mozCancelFullScreen
                                            ? document.mozCancelFullScreen()
                                            : document.webkitExitFullscreen
                                                ? document.webkitExitFullscreen()
                                                : document.msExitFullscreen && document.msExitFullscreen();
                                });
                        })(e),
                        (function (e) {
                            var t = e.core,
                                n = t.globalEventsController,
                                o = t.windowResizeActioner,
                                i = e.resolve,
                                r = i($),
                                s = i(Y),
                                a = i(G);
                            (n.attachListeners = function () {
                                document.addEventListener("pointermove", s.listener), document.addEventListener("pointerup", a.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", r.listener);
                            }),
                                (n.removeListeners = function () {
                                    document.removeEventListener("pointermove", s.listener),
                                        document.removeEventListener("pointerup", a.listener),
                                        removeEventListener("resize", o.runActions),
                                        document.removeEventListener("keydown", r.listener);
                                });
                        })(e),
                        (function (e) {
                            var t = e.core.lightboxCloser,
                                n = (0, e.resolve)(B);
                            t.closeLightbox = function () {
                                n.isLightboxFadingOut || n.runActions();
                            };
                        })(e),
                        Z(e),
                        (function (e) {
                            var t = e.data,
                                n = e.core.scrollbarRecompensor;
                            function o() {
                                document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
                            }
                            (n.addRecompense = function () {
                                "complete" === document.readyState
                                    ? o()
                                    : addEventListener("load", function () {
                                        o(), (n.addRecompense = o);
                                    });
                            }),
                                (n.removeRecompense = function () {
                                    document.body.style.removeProperty("margin-right");
                                });
                        })(e),
                        (function (e) {
                            var t = e.core,
                                n = t.slideChangeFacade,
                                o = t.slideIndexChanger,
                                i = t.stageManager;
                            e.props.sources.length > 1
                                ? ((n.changeToPrevious = function () {
                                    o.jumpTo(i.getPreviousSlideIndex());
                                }),
                                    (n.changeToNext = function () {
                                        o.jumpTo(i.getNextSlideIndex());
                                    }))
                                : ((n.changeToPrevious = function () {}), (n.changeToNext = function () {}));
                        })(e),
                        (function (e) {
                            var t,
                                n,
                                o = e.collections.sourceMainWrappersTransformers,
                                i = e.componentsServices,
                                r = e.core,
                                s = r.classFacade,
                                a = r.slideIndexChanger,
                                c = r.sourceDisplayFacade,
                                l = r.stageManager,
                                u = e.elements.sourceAnimationWrappers,
                                p = e.stageIndexes,
                                h =
                                    ((t = function () {
                                        s.removeFromEachElementClassIfContains("sourceAnimationWrappers", m);
                                    }),
                                        (n = []),
                                        function () {
                                            n.push(!0),
                                                setTimeout(function () {
                                                    n.pop(), n.length || t();
                                                }, 300);
                                        });
                            (a.changeTo = function (e) {
                                (p.current = e), l.updateStageIndexes(), i.setSlideNumber(e + 1), c.displaySourcesWhichShouldBeDisplayed();
                            }),
                                (a.jumpTo = function (e) {
                                    var t = p.current;
                                    a.changeTo(e),
                                        s.removeFromEachElementClassIfContains("sourceMainWrappers", d),
                                        q(u[t], g),
                                        q(u[t], f),
                                        u[t].classList.add(m),
                                        q(u[e], g),
                                        q(u[e], m),
                                        u[e].classList.add(f),
                                        h(),
                                        o[e].zero(),
                                        setTimeout(function () {
                                            t !== p.current && o[t].negative();
                                        }, 270);
                                });
                        })(e),
                        (function (e) {
                            var t = e.core,
                                n = t.classFacade,
                                o = t.sourcesPointerDown,
                                i = e.elements.sources,
                                r = e.sourcePointerProps,
                                s = e.stageIndexes;
                            o.listener = function (e) {
                                "VIDEO" !== e.target.tagName && e.preventDefault(), (r.isPointering = !0), (r.downScreenX = e.screenX), (r.swipedX = 0);
                                var t = i[s.current];
                                t && t.contains(e.target) ? (r.isSourceDownEventTarget = !0) : (r.isSourceDownEventTarget = !1), n.removeFromEachElementClassIfContains("sourceMainWrappers", d);
                            };
                        })(e),
                        (function (e) {
                            var t = e.collections.sourcesRenderFunctions,
                                n = e.core.sourceDisplayFacade,
                                o = e.props,
                                i = e.stageIndexes;
                            function r(e) {
                                t[e] && (t[e](), delete t[e]);
                            }
                            n.displaySourcesWhichShouldBeDisplayed = function () {
                                if (o.loadOnlyCurrentSource) r(i.current);
                                else for (var e in i) r(i[e]);
                            };
                        })(e),
                        (function (e) {
                            var t = e.stageIndexes,
                                n = e.core.stageManager,
                                o = e.props.sources.length - 1;
                            (n.getPreviousSlideIndex = function () {
                                return 0 === t.current ? o : t.current - 1;
                            }),
                                (n.getNextSlideIndex = function () {
                                    return t.current === o ? 0 : t.current + 1;
                                }),
                                (n.updateStageIndexes =
                                    0 === o
                                        ? function () {}
                                        : 1 === o
                                        ? function () {
                                            0 === t.current ? ((t.next = 1), delete t.previous) : ((t.previous = 0), delete t.next);
                                        }
                                        : function () {
                                            (t.previous = n.getPreviousSlideIndex()), (t.next = n.getNextSlideIndex());
                                        }),
                                (n.isSourceInStage =
                                    o <= 2
                                        ? function () {
                                            return !0;
                                        }
                                        : function (e) {
                                            var n = t.current;
                                            if ((0 === n && e === o) || (n === o && 0 === e)) return !0;
                                            var i = n - e;
                                            return -1 === i || 0 === i || 1 === i;
                                        });
                        })(e),
                        (function (e) {
                            var t = e.collections,
                                n = t.sourceMainWrappersTransformers,
                                o = t.sourceSizers,
                                i = e.core.windowResizeActioner,
                                r = e.data,
                                s = e.elements.sourceMainWrappers,
                                a = e.props,
                                c = e.stageIndexes;
                            i.runActions = function () {
                                innerWidth < 992 ? (r.maxSourceWidth = innerWidth) : (r.maxSourceWidth = 0.9 * innerWidth), (r.maxSourceHeight = 0.9 * innerHeight);
                                for (var e = 0; e < a.sources.length; e++) q(s[e], d), e !== c.current && n[e].negative(), o[e] && o[e].adjustSize();
                            };
                        })(e);
                }
                function K(e) {
                    var t = e.core.eventsDispatcher,
                        n = e.data,
                        o = e.elements,
                        r = e.props.sources;
                    (n.isInitialized = !0),
                        (n.scrollbarWidth = (function (e) {
                            var t = e.props.disableLocalStorage;
                            if (!t) {
                                var n = localStorage.getItem("fslightbox-scrollbar-width");
                                if (n) return n;
                            }
                            var o = (function () {
                                    var e = document.createElement("div"),
                                        t = e.style;
                                    return (t.visibility = "hidden"), (t.width = "100px"), (t.msOverflowStyle = "scrollbar"), (t.overflow = "scroll"), e;
                                })(),
                                i = (function () {
                                    var e = document.createElement("div");
                                    return (e.style.width = "100%"), e;
                                })();
                            document.body.appendChild(o);
                            var r = o.offsetWidth;
                            o.appendChild(i);
                            var s = i.offsetWidth;
                            document.body.removeChild(o);
                            var a = r - s;
                            return t || localStorage.setItem("fslightbox-scrollbar-width", a.toString()), a;
                        })(e)),
                        (function (e) {
                            for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, i = 0; i < n.length; i++) t[i] = o(D, [i]);
                        })(e),
                        J(e),
                        (o.container = document.createElement("div")),
                        (o.container.className = "".concat(i, "container ").concat(a, " ").concat(g)),
                        (function (e) {
                            var t = e.elements;
                            (t.slideSwipingHoverer = document.createElement("div")), (t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(u));
                        })(e),
                        z(e),
                        (function (e) {
                            var t = e.core.sourcesPointerDown,
                                n = e.elements,
                                o = e.props.sources,
                                i = document.createElement("div");
                            (i.className = "".concat(u, " ").concat(a)), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), (n.sourceWrappersContainer = i);
                            for (var r = 0; r < o.length; r++) M(e, r);
                        })(e),
                    r.length > 1 &&
                    (function (e) {
                        var t = e.core.slideChangeFacade;
                        R(
                            e,
                            t.changeToPrevious,
                            "previous",
                            "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                        ),
                            R(
                                e,
                                t.changeToNext,
                                "next",
                                "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                            );
                    })(e),
                        (function (e) {
                            for (var t = e.props.sources, n = e.resolve, o = n(S), i = n(P), r = n(N, [o, i]), s = 0; s < t.length; s++)
                                if ("string" == typeof t[s]) {
                                    var a = r.getTypeSetByClientForIndex(s);
                                    if (a) i.runActionsForSourceTypeAndIndex(a, s);
                                    else {
                                        var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                                        c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
                                    }
                                } else i.runActionsForSourceTypeAndIndex("custom", s);
                        })(e),
                        t.dispatch("onInit");
                }
                function Z(e) {
                    var t = e.collections.sourceMainWrappersTransformers,
                        n = e.componentsServices,
                        o = e.core,
                        i = o.eventsDispatcher,
                        r = o.lightboxOpener,
                        s = o.globalEventsController,
                        a = o.scrollbarRecompensor,
                        c = o.sourceDisplayFacade,
                        d = o.stageManager,
                        u = o.windowResizeActioner,
                        p = e.data,
                        h = e.elements,
                        f = e.stageIndexes;
                    r.open = function () {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        (f.current = o),
                            p.isInitialized ? i.dispatch("onShow") : K(e),
                            d.updateStageIndexes(),
                            c.displaySourcesWhichShouldBeDisplayed(),
                            n.setSlideNumber(o + 1),
                            document.body.appendChild(h.container),
                            document.documentElement.classList.add(l),
                            a.addRecompense(),
                            s.attachListeners(),
                            u.runActions(),
                            t[f.current].zero(),
                            i.dispatch("onOpen");
                    };
                }
                function ee(e, t, n) {
                    return (ee = te()
                        ? Reflect.construct
                        : function (e, t, n) {
                            var o = [null];
                            o.push.apply(o, t);
                            var i = new (Function.bind.apply(e, o))();
                            return n && ne(i, n.prototype), i;
                        }).apply(null, arguments);
                }
                function te() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function ne(e, t) {
                    return (ne =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        })(e, t);
                }
                function oe(e) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return ie(e);
                        })(e) ||
                        (function (e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                        })(e) ||
                        (function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return ie(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ie(e, t) : void 0;
                            }
                        })(e) ||
                        (function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function ie(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                function re() {
                    for (
                        var e = document.getElementsByTagName("a"),
                            t = function (t) {
                                if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                                var n = e[t].getAttribute("data-fslightbox"),
                                    o = e[t].getAttribute("href");
                                fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox());
                                var i = null;
                                "#" === o.charAt(0) ? (i = document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id") : (i = o), fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[t]);
                                var r = fsLightboxInstances[n].props.sources.length - 1;
                                (e[t].onclick = function (e) {
                                    e.preventDefault(), fsLightboxInstances[n].open(r);
                                }),
                                    u("types", "data-type"),
                                    u("videosPosters", "data-video-poster"),
                                    u("customClasses", "data-class"),
                                    u("customClasses", "data-custom-class");
                                for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[t].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++)
                                    if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
                                        c[r] || (c[r] = {});
                                        var d = a[l].name.substr(5);
                                        c[r][d] = a[l].value;
                                    }
                                function u(o, i) {
                                    e[t].hasAttribute(i) && (fsLightboxInstances[n].props[o][r] = e[t].getAttribute(i));
                                }
                            },
                            n = 0;
                        n < e.length;
                        n++
                    )
                        t(n);
                    var o = Object.keys(fsLightboxInstances);
                    window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
                }
                "object" === ("undefined" == typeof document ? "undefined" : w(document)) &&
                (((o = document.createElement("style")).className = r),
                    o.appendChild(
                        document.createTextNode(
                            ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
                        )
                    ),
                    document.head.appendChild(o)),
                    (window.FsLightbox = function () {
                        var e = this;
                        (this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: 0.3 }),
                            (this.data = { isInitialized: !1, isFullscreenOpen: !1, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0 }),
                            (this.sourcePointerProps = { downScreenX: null, isPointering: !1, isSourceDownEventTarget: !1, swipedX: 0 }),
                            (this.stageIndexes = {}),
                            (this.elements = { a: [], container: null, slideSwipingHoverer: null, sourceWrappersContainer: null, sources: [], sourceMainWrappers: [], sourceAnimationWrappers: [] }),
                            (this.componentsServices = { enterFullscreen: null, exitFullscreen: null, hideSourceLoaderIfNotYetCollection: [], setSlideNumber: function () {} }),
                            (this.resolve = function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                return n.unshift(e), ee(t, oe(n));
                            }),
                            (this.collections = { sourceMainWrappersTransformers: [], sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }),
                            (this.core = {
                                classFacade: {},
                                eventsDispatcher: {},
                                fullscreenToggler: {},
                                globalEventsController: {},
                                lightboxCloser: {},
                                lightboxOpener: {},
                                lightboxUpdater: {},
                                scrollbarRecompensor: {},
                                slideChangeFacade: {},
                                slideIndexChanger: {},
                                sourcesPointerDown: {},
                                sourceDisplayFacade: {},
                                stageManager: {},
                                windowResizeActioner: {},
                            }),
                            Z(this),
                            (this.open = function (t) {
                                return e.core.lightboxOpener.open(t);
                            }),
                            (this.close = function () {
                                return e.core.lightboxCloser.closeLightbox();
                            });
                    }),
                    (window.fsLightboxInstances = {}),
                    re(),
                    (window.refreshFsLightbox = function () {
                        for (var e in fsLightboxInstances) {
                            var t = fsLightboxInstances[e].props;
                            (fsLightboxInstances[e] = new FsLightbox()), (fsLightboxInstances[e].props = t), (fsLightboxInstances[e].props.sources = []), (fsLightboxInstances[e].elements.a = []);
                        }
                        re();
                    });
            },
        ]);
    }),
        (e.prototype.init = function () {
            const e = this;
            (this.оbjects = []), (this.daClassname = "_dynamic_adapt_"), (this.nodes = document.querySelectorAll("[data-da]"));
            for (let e = 0; e < this.nodes.length; e++) {
                const t = this.nodes[e],
                    n = t.dataset.da.trim().split(","),
                    o = {};
                (o.element = t),
                    (o.parent = t.parentNode),
                    (o.destination = document.querySelector(n[0].trim())),
                    (o.breakpoint = n[1] ? n[1].trim() : "767"),
                    (o.place = n[2] ? n[2].trim() : "last"),
                    (o.index = this.indexInParent(o.parent, o.element)),
                    this.оbjects.push(o);
            }
            this.arraySort(this.оbjects),
                (this.mediaQueries = Array.prototype.map.call(
                    this.оbjects,
                    function (e) {
                        return "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint;
                    },
                    this
                )),
                (this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (e, t, n) {
                    return Array.prototype.indexOf.call(n, e) === t;
                }));
            for (let t = 0; t < this.mediaQueries.length; t++) {
                const n = this.mediaQueries[t],
                    o = String.prototype.split.call(n, ","),
                    i = window.matchMedia(o[0]),
                    r = o[1],
                    s = Array.prototype.filter.call(this.оbjects, function (e) {
                        return e.breakpoint === r;
                    });
                i.addListener(function () {
                    e.mediaHandler(i, s);
                }),
                    this.mediaHandler(i, s);
            }
        }),
        (e.prototype.mediaHandler = function (e, t) {
            if (e.matches)
                for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    (n.index = this.indexInParent(n.parent, n.element)), this.moveTo(n.place, n.element, n.destination);
                }
            else
                for (let e = t.length - 1; e >= 0; e--) {
                    const n = t[e];
                    n.element.classList.contains(this.daClassname) && this.moveBack(n.parent, n.element, n.index);
                }
        }),
        (e.prototype.moveTo = function (e, t, n) {
            t.classList.add(this.daClassname),
                "last" === e || e >= n.children.length ? n.insertAdjacentElement("beforeend", t) : "first" !== e ? n.children[e].insertAdjacentElement("beforebegin", t) : n.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, n) {
            t.classList.remove(this.daClassname), void 0 !== e.children[n] ? e.children[n].insertAdjacentElement("beforebegin", t) : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
            const n = Array.prototype.slice.call(e.children);
            return Array.prototype.indexOf.call(n, t);
        }),
        (e.prototype.arraySort = function (e) {
            "min" === this.type
                ? Array.prototype.sort.call(e, function (e, t) {
                    return e.breakpoint === t.breakpoint ? (e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : e.place - t.place) : e.breakpoint - t.breakpoint;
                })
                : Array.prototype.sort.call(e, function (e, t) {
                    return e.breakpoint === t.breakpoint ? (e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : t.place - e.place) : t.breakpoint - e.breakpoint;
                });
        });
    new e("max").init();
    let t = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows();
        },
    };
    function n() {
        if (location.hash) return location.hash.replace("#", "");
    }
    function o(e) {
        history.pushState("", "", e);
    }
    let i = (e, t = 500) => {
            e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
                (e.style.transitionProperty = "height, margin, padding"),
                (e.style.transitionDuration = t + "ms"),
                (e.style.height = e.offsetHeight + "px"),
                e.offsetHeight,
                (e.style.overflow = "hidden"),
                (e.style.height = 0),
                (e.style.paddingTop = 0),
                (e.style.paddingBottom = 0),
                (e.style.marginTop = 0),
                (e.style.marginBottom = 0),
                window.setTimeout(() => {
                    (e.hidden = !0),
                        e.style.removeProperty("height"),
                        e.style.removeProperty("padding-top"),
                        e.style.removeProperty("padding-bottom"),
                        e.style.removeProperty("margin-top"),
                        e.style.removeProperty("margin-bottom"),
                        e.style.removeProperty("overflow"),
                        e.style.removeProperty("transition-duration"),
                        e.style.removeProperty("transition-property"),
                        e.classList.remove("_slide");
                }, t));
        },
        r = (e, t = 500) => {
            if (!e.classList.contains("_slide")) {
                e.classList.add("_slide"), e.hidden && (e.hidden = !1);
                let n = e.offsetHeight;
                (e.style.overflow = "hidden"),
                    (e.style.height = 0),
                    (e.style.paddingTop = 0),
                    (e.style.paddingBottom = 0),
                    (e.style.marginTop = 0),
                    (e.style.marginBottom = 0),
                    e.offsetHeight,
                    (e.style.transitionProperty = "height, margin, padding"),
                    (e.style.transitionDuration = t + "ms"),
                    (e.style.height = n + "px"),
                    e.style.removeProperty("padding-top"),
                    e.style.removeProperty("padding-bottom"),
                    e.style.removeProperty("margin-top"),
                    e.style.removeProperty("margin-bottom"),
                    window.setTimeout(() => {
                        e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide");
                    }, t);
            }
        },
        s = !0,
        a = (e = 500) => {
            let t = document.querySelector("body");
            if (s) {
                let n = document.querySelectorAll("._lp");
                setTimeout(() => {
                    for (let e = 0; e < n.length; e++) {
                        n[e].style.paddingRight = "0px";
                    }
                    (t.style.paddingRight = "0px"), console.log("0px"), document.documentElement.classList.remove("lock"), console.log("lock");
                }, e),
                    (s = !1),
                    setTimeout(function () {
                        s = !0;
                    }, e);
            }
        },
        c = (e = 500) => {
            let t = document.querySelector("body");
            if (s) {
                let n = document.querySelectorAll("._lp");
                for (let e = 0; e < n.length; e++) {
                    n[e].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                (t.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"),
                    document.documentElement.classList.add("lock"),
                    (s = !1),
                    setTimeout(function () {
                        s = !0;
                    }, e);
            }
        };
    let l,
        d = {
            getErrors(e) {
                let t = 0,
                    n = e.querySelectorAll("*[data-required]");
                return (
                    n.length &&
                    n.forEach((e) => {
                        null !== e.offsetParent && (t += this.validateInput(e));
                    }),
                        t
                );
            },
            validateInput(e) {
                let t = 0;
                return (
                    "email" === e.dataset.required
                        ? ((e = e.value.replace(" ", "")), this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
                        : ("checkbox" !== e.type || e.checked) && e.value
                        ? this.removeError(e)
                        : (this.addError(e), t++),
                        t
                );
            },
            addError(e) {
                e.classList.add("_error"), e.parentElement.classList.add("_error");
                let t = e.parentElement.querySelector(".form__error");
                t && e.parentElement.removeChild(t), e.hasAttribute("data-error") && e.getAttribute("data-error") && e.parentElement.insertAdjacentHTML("beforeend", '<div class="form__error">' + e.getAttribute("data-error") + "</div>");
            },
            removeError(e) {
                e.classList.remove("_error"), e.parentElement.classList.remove("_error"), e.parentElement.querySelector(".form__error") && e.parentElement.removeChild(e.parentElement.querySelector(".form__error"));
            },
            formClean(e) {
                let t = e.querySelectorAll("input,textarea");
                for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    n.parentElement.classList.remove("_focus"), n.classList.remove("_focus"), (n.value = n.dataset.placeholder);
                }
                let n = e.querySelectorAll(".checkbox__input");
                if (n.length > 0)
                    for (let e = 0; e < n.length; e++) {
                        n[e].checked = !1;
                    }
                let o = e.querySelectorAll("select");
                if (o.length > 0)
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e],
                            n = t.getAttribute("data-default");
                        (t.value = n), select_item(t);
                    }
            },
            emailTest: (e) => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
        };
    !(function (e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var i = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        (n.m = e),
            (n.c = t),
            (n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        n.d(
                            o,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return o;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 1));
    })([
        function (e, t, n) {
            function o() {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            n.d(t, "a", function () {
                return a;
            });
            var r,
                s,
                a = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.config = o(
                                {
                                    backscroll: !0,
                                    linkAttributeName: "data-hystmodal",
                                    closeOnOverlay: !0,
                                    closeOnEsc: !0,
                                    closeOnButton: !0,
                                    waitTransitions: !1,
                                    catchFocus: !0,
                                    fixedSelectors: "*[data-hystfixed]",
                                    beforeOpen: function () {},
                                    afterClose: function () {},
                                },
                                t
                            )),
                        this.config.linkAttributeName && this.init(),
                            (this._closeAfterTransition = this._closeAfterTransition.bind(this));
                    }
                    var t, n;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: "init",
                                value: function () {
                                    (this.isOpened = !1),
                                        (this.openedWindow = !1),
                                        (this.starter = !1),
                                        (this._nextWindows = !1),
                                        (this._scrollPosition = 0),
                                        (this._reopenTrigger = !1),
                                        (this._overlayChecker = !1),
                                        (this._isMoved = !1),
                                        (this._focusElements = [
                                            "a[href]",
                                            "area[href]",
                                            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                                            "select:not([disabled]):not([aria-hidden])",
                                            "textarea:not([disabled]):not([aria-hidden])",
                                            "button:not([disabled]):not([aria-hidden])",
                                            "iframe",
                                            "object",
                                            "embed",
                                            "[contenteditable]",
                                            '[tabindex]:not([tabindex^="-"])',
                                        ]),
                                        (this._modalBlock = !1),
                                    e._shadow || ((e._shadow = document.createElement("button")), e._shadow.classList.add("hystmodal__shadow"), document.body.appendChild(e._shadow)),
                                        this.eventsFeeler();
                                },
                            },
                            {
                                key: "eventsFeeler",
                                value: function () {
                                    document.addEventListener(
                                        "click",
                                        function (e) {
                                            var t = e.target.closest("[" + this.config.linkAttributeName + "]");
                                            if (!this._isMoved && t) {
                                                e.preventDefault(), (this.starter = t);
                                                var n = this.starter.getAttribute(this.config.linkAttributeName);
                                                return (this._nextWindows = document.querySelector(n)), void this.open();
                                            }
                                            this.config.closeOnButton && e.target.closest("[data-hystclose]") && this.close();
                                        }.bind(this)
                                    ),
                                    this.config.closeOnOverlay &&
                                    (document.addEventListener(
                                        "mousedown",
                                        function (e) {
                                            (!this._isMoved && e.target instanceof Element && !e.target.classList.contains("hystmodal__wrap")) || (this._overlayChecker = !0);
                                        }.bind(this)
                                    ),
                                        document.addEventListener(
                                            "mouseup",
                                            function (e) {
                                                if (!this._isMoved && e.target instanceof Element && this._overlayChecker && e.target.classList.contains("hystmodal__wrap"))
                                                    return e.preventDefault(), this._overlayChecker, void this.close();
                                                this._overlayChecker = !1;
                                            }.bind(this)
                                        )),
                                        window.addEventListener(
                                            "keydown",
                                            function (e) {
                                                if (!this._isMoved && this.config.closeOnEsc && 27 == e.which && this.isOpened) return e.preventDefault(), void this.close();
                                                !this._isMoved && this.config.catchFocus && 9 == e.which && this.isOpened && this.focusCatcher(e);
                                            }.bind(this)
                                        );
                                },
                            },
                            {
                                key: "open",
                                value: function (t) {
                                    if ((t && (this._nextWindows = "string" == typeof t ? document.querySelector(t) : t), this._nextWindows)) {
                                        if (this.isOpened) return (this._reopenTrigger = !0), void this.close();
                                        (this.openedWindow = this._nextWindows),
                                            (this._modalBlock = this.openedWindow.querySelector(".hystmodal__window")),
                                            this.config.beforeOpen(this),
                                            this._bodyScrollControl(),
                                            e._shadow.classList.add("hystmodal__shadow--show"),
                                            this.openedWindow.classList.add("hystmodal--active"),
                                            this.openedWindow.setAttribute("aria-hidden", "false"),
                                        this.config.catchFocus && this.focusContol(),
                                            (this.isOpened = !0);
                                    } else console.log("Warinig: hustModal selector is not found");
                                },
                            },
                            {
                                key: "close",
                                value: function () {
                                    this.isOpened &&
                                    (this.config.waitTransitions
                                        ? (this.openedWindow.classList.add("hystmodal--moved"),
                                            (this._isMoved = !0),
                                            this.openedWindow.addEventListener("transitionend", this._closeAfterTransition),
                                            this.openedWindow.classList.remove("hystmodal--active"))
                                        : (this.openedWindow.classList.remove("hystmodal--active"), this._closeAfterTransition()));
                                },
                            },
                            {
                                key: "_closeAfterTransition",
                                value: function () {
                                    this.openedWindow.classList.remove("hystmodal--moved"),
                                        this.openedWindow.removeEventListener("transitionend", this._closeAfterTransition),
                                        (this._isMoved = !1),
                                        e._shadow.classList.remove("hystmodal__shadow--show"),
                                        this.openedWindow.setAttribute("aria-hidden", "true"),
                                    this.config.catchFocus && this.focusContol(),
                                        this._bodyScrollControl(),
                                        (this.isOpened = !1),
                                        (this.openedWindow.scrollTop = 0),
                                        this.config.afterClose(this),
                                    this._reopenTrigger && ((this._reopenTrigger = !1), this.open());
                                },
                            },
                            {
                                key: "focusContol",
                                value: function () {
                                    var e = this.openedWindow.querySelectorAll(this._focusElements);
                                    this.isOpened && this.starter ? this.starter.focus() : e.length && e[0].focus();
                                },
                            },
                            {
                                key: "focusCatcher",
                                value: function (e) {
                                    var t = this.openedWindow.querySelectorAll(this._focusElements),
                                        n = Array.prototype.slice.call(t);
                                    if (this.openedWindow.contains(document.activeElement)) {
                                        var o = n.indexOf(document.activeElement);
                                        console.log(o), e.shiftKey && 0 === o && (n[n.length - 1].focus(), e.preventDefault()), e.shiftKey || o !== n.length - 1 || (n[0].focus(), e.preventDefault());
                                    } else n[0].focus(), e.preventDefault();
                                },
                            },
                            {
                                key: "_bodyScrollControl",
                                value: function () {
                                    if (this.config.backscroll) {
                                        var e = Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors)),
                                            t = document.documentElement;
                                        if (!0 === this.isOpened)
                                            return (
                                                t.classList.remove("hystmodal__opened"),
                                                    (t.style.marginRight = ""),
                                                    e.map(function (e) {
                                                        e.style.marginRight = "";
                                                    }),
                                                    window.scrollTo(0, this._scrollPosition),
                                                    void (t.style.top = "")
                                            );
                                        this._scrollPosition = window.pageYOffset;
                                        var n = window.innerWidth - t.clientWidth;
                                        (t.style.top = -this._scrollPosition + "px"),
                                        n &&
                                        ((t.style.marginRight = n + "px"),
                                            e.map(function (e) {
                                                e.style.marginRight = parseInt(getComputedStyle(e).marginRight) + n + "px";
                                            })),
                                            t.classList.add("hystmodal__opened");
                                    }
                                },
                            },
                        ]) && i(t.prototype, n),
                            e
                    );
                })();
            (s = "_shadow") in (r = a) ? Object.defineProperty(r, s, { value: false, enumerable: !0, configurable: !0, writable: !0 }) : (r[s] = false);
        },
        function (e, t, n) {
            n.r(t),
                function (e) {
                    var t = n(0);
                    n(3), n(4), (e.HystModal = t.a);
                }.call(this, n(2));
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
            (Element.prototype.closest = function (e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode;
                } while (null !== t && 1 === t.nodeType);
                return null;
            });
        },
        function (e, t, n) {},
    ]),
        (l = new HystModal({
            linkAttributeName: "data-popup",
            beforeOpen: function (e) {
                o(`#${e.openedWindow.id}`);
            },
            afterClose: function (e) {
                o(window.location.href.split("#")[0]);
            },
        })),
    n() && document.querySelector(`#${n()}`) && l.open(`#${n()}`);
    new HystModal({ linkAttributeName: "data-hystmodal" });
    $(document).ready(function () {
        $(".send-in__btn").click(function (e) {
            setTimeout(function () {
                $(".send-in__row input").hasClass("_error") && $(".validate").addClass("validate__show");
            }, 100);
        }),
            $(".send-in__row input").click(function (e) {
                $(".send-in__row input").hasClass("_focus") && $(".validate").removeClass("validate__show");
            }),
            $(".validate__close").click(function (e) {
                e.preventDefault(), $(".validate").removeClass("validate__show");
            }),
            $(".order-pop__btn").click(function (e) {
                setTimeout(function () {
                    $(".order-pop__row input").hasClass("_error") && $(".order-pop__massage").addClass("order-pop__show");
                }, 100);
            }),
            $(".footer__btn-up").click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1e3);
            }),
            $(".menu").hasClass("_active") ? $('<div class="overlay">&nbsp;</div>').prependTo($("body")) : $(".overlay").remove();
    });
    const u = document.querySelectorAll("a");
    if (u.length) {
        function e(e) {
            this.getAttribute("href").length > 2 &&
            (e.preventDefault(),
                document.documentElement.classList.add("leave"),
                document.querySelector(".wrapper").addEventListener("transitionend", () => {
                    document.location.href = this.getAttribute("href");
                }));
        }
        u.forEach((t) => {
            t.addEventListener("click", e);
        });
    }
    const p = document.querySelectorAll("[data-menu]");
    p.length &&
    p.forEach((e) => {
        const t = e.dataset.menu,
            n = document.querySelector(`#${t}`);
        n &&
        e.addEventListener("click", () => {
            s &&
            ("open" == e.dataset.type
                ? (c(300), e.classList.add("_active"), n.classList.add("_active"))
                : "close" == e.dataset.type
                    ? (a(300), e.classList.remove("_active"), n.classList.remove("_active"))
                    : (((e = 500) => {
                        document.documentElement.classList.contains("lock") ? a(e) : c(e);
                    })(300),
                        e.classList.toggle("_active"),
                        n.classList.toggle("_active")));
        });
    }),
        document.addEventListener("click", function (e) {
            if (!e.target.closest(".menu") && !e.target.closest(".header__burger") && !e.target.closest(".header__click")) {
                a(300);
                document.querySelector(".menu").classList.remove("_active");
            }
        });
    let h = [];
    const f = document.querySelectorAll("[data-section]");
    function m() {
        h.length > 0 &&
        (function (e) {
            e.forEach((e) => {
                if (scrollY + document.documentElement.offsetHeight < e.top) e.element.style.cssText = "opacity:0;";
                else if (scrollY + document.documentElement.offsetHeight >= e.top && scrollY + document.documentElement.offsetHeight <= e.top + e.height * e.part) {
                    let t = (scrollY + document.documentElement.offsetHeight - e.top) / (e.height * e.part);
                    e.element.style.cssText = `\n\t\t\t\topacity: ${t};\n\t\t\t`;
                } else scrollY + document.documentElement.offsetHeight > e.top && (e.element.style.cssText = "opacity:1;");
            });
        })(h);
    }
    function g(e) {
        var t = e.getBoundingClientRect(),
            n = window.pageXOffset || document.documentElement.scrollLeft,
            o = window.pageYOffset || document.documentElement.scrollTop;
        return { top: t.top + o, left: t.left + n };
    }
    f.length &&
    f.forEach((e) => {
        const t = { element: e, top: g(e).top, height: e.offsetHeight, part: Number(e.dataset.section) ? Number(e.dataset.section) : 1 };
        h.push(t);
    }),
        m(),
        window.addEventListener("scroll", m),
        (function (e) {
            let t = new Image();
            (t.onload = t.onerror = function () {
                e(2 == t.height);
            }),
                (t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
            let t = !0 === e ? "webp" : "no-webp";
            document.documentElement.classList.add(t);
        }),
    t.any() && document.documentElement.classList.add("touch"),
        window.addEventListener("load", function () {
            setTimeout(function () {
                document.documentElement.classList.add("loaded");
            }, 0);
        }),
        (function () {
            const e = document.querySelectorAll("[data-spollers]");
            if (e.length > 0) {
                const t = Array.from(e).filter(function (e, t, n) {
                    return !e.dataset.spollers.split(",")[0];
                });
                t.length > 0 && o(t);
                const n = Array.from(e).filter(function (e, t, n) {
                    return e.dataset.spollers.split(",")[0];
                });
                if (n.length > 0) {
                    const e = [];
                    n.forEach((t) => {
                        const n = {},
                            o = t.dataset.spollers.split(",");
                        (n.value = o[0]), (n.type = o[1] ? o[1].trim() : "max"), (n.item = t), e.push(n);
                    });
                    let t = e.map(function (e) {
                        return "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type;
                    });
                    (t = t.filter(function (e, t, n) {
                        return n.indexOf(e) === t;
                    })),
                        t.forEach((t) => {
                            const n = t.split(","),
                                i = n[1],
                                r = n[2],
                                s = window.matchMedia(n[0]),
                                a = e.filter(function (e) {
                                    if (e.value === i && e.type === r) return !0;
                                });
                            s.addEventListener("change", function () {
                                o(a, s);
                            }),
                                o(a, s);
                        });
                }
                function o(e, t = !1) {
                    e.forEach((e) => {
                        (e = t ? e.item : e), t.matches || !t ? (e.classList.add("_init"), s(e), e.addEventListener("click", a)) : (e.classList.remove("_init"), s(e, !1), e.removeEventListener("click", a));
                    });
                }
                function s(e, t = !0) {
                    const n = e.querySelectorAll("[data-spoller]");
                    n.length > 0 &&
                    n.forEach((e) => {
                        t ? (e.removeAttribute("tabindex"), e.classList.contains("_active") || (e.nextElementSibling.hidden = !0)) : (e.setAttribute("tabindex", "-1"), (e.nextElementSibling.hidden = !1));
                    });
                }
                function a(e) {
                    const t = e.target;
                    if (t.hasAttribute("data-spoller") || t.closest("[data-spoller]")) {
                        const n = t.hasAttribute("data-spoller") ? t : t.closest("[data-spoller]"),
                            o = n.closest("[data-spollers]"),
                            s = !!o.hasAttribute("data-one-spoller");
                        o.querySelectorAll("._slide").length ||
                        (s && !n.classList.contains("_active") && c(o),
                            n.classList.toggle("_active"),
                            ((e, t = 500) => {
                                e.hidden ? r(e, t) : i(e, t);
                            })(n.nextElementSibling, 500)),
                            e.preventDefault();
                    }
                }
                function c(e) {
                    const t = e.querySelector("[data-spoller]._active");
                    t && (t.classList.remove("_active"), i(t.nextElementSibling, 500));
                }
            }
        })(),
        (function () {
            const e = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            e.length &&
            e.forEach((e) => {
                e.dataset.placeholder = e.placeholder;
            }),
                document.body.addEventListener("focusin", function (e) {
                    const t = e.target;
                    ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) || (t.dataset.placeholder && (t.placeholder = ""), t.classList.add("_focus"), t.parentElement.classList.add("_focus"), d.removeError(t));
                }),
                document.body.addEventListener("focusout", function (e) {
                    const t = e.target;
                    ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                    (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder), t.classList.remove("_focus"), t.parentElement.classList.remove("_focus"), t.hasAttribute("data-validate") && d.validateInput(t));
                });
        })(),
        (function (e) {
            const t = document.forms;
            if (t.length) for (const e of t) e.addEventListener("submit", n);
            async function n(t) {
                const n = t.target;
                if (0 === (e ? d.getErrors(n) : 0)) {
                    const e = n.getAttribute("data-message");
                    if (n.hasAttribute("data-ajax")) {
                        t.preventDefault();
                        const o = n.getAttribute("action") ? n.getAttribute("action").trim() : "#",
                            i = n.getAttribute("method") ? n.getAttribute("method").trim() : "GET",
                            r = new FormData(n);
                        n.classList.add("_sending");
                        const s = await fetch(o, { method: i, body: r });
                        if (s.ok) {
                            await s.json();
                            n.classList.remove("_sending"), e && popupItem.open(`#${e}`), d.formClean(n);
                        } else alert("Ошибка"), n.classList.remove("_sending");
                    }
                    n.hasAttribute("data-test") && (t.preventDefault(), e && popupItem.open(`#${e}`), d.formClean(n));
                } else {
                    const e = n.querySelector("._error");
                    e && n.hasAttribute("data-goto-error") && gotoBlock(e, 1e3, 50), t.preventDefault();
                }
            }
        })(!0);
})();
