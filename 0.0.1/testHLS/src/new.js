!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
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
    n((n.s = 158));
})([
  function (e, t) {
    var n = (e.exports = { version: "2.5.7" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t, n) {
    var r = n(48)("wks"),
      i = n(33),
      _ = n(1).Symbol,
      a = "function" == typeof _;
    (e.exports = function (e) {
      return r[e] || (r[e] = (a && _[e]) || (a ? _ : i)("Symbol." + e));
    }).store = r;
  },
  function (e, t, n) {
    var r = n(1),
      i = n(0),
      _ = n(7),
      a = n(9),
      o = n(10),
      s = function (e, t, n) {
        var E,
          u,
          c,
          A = e & s.F,
          l = e & s.G,
          f = e & s.S,
          O = e & s.P,
          T = e & s.B,
          I = e & s.W,
          h = l ? i : i[t] || (i[t] = {}),
          D = h.prototype,
          S = l ? r : f ? r[t] : (r[t] || {}).prototype;
        for (E in (l && (n = t), n))
          ((u = !A && S && void 0 !== S[E]) && o(h, E)) ||
            ((c = u ? S[E] : n[E]),
            (h[E] =
              l && "function" != typeof S[E]
                ? n[E]
                : T && u
                ? _(c, r)
                : I && S[E] == c
                ? (function (e) {
                    var t = function (t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(c)
                : O && "function" == typeof c
                ? _(Function.call, c)
                : c),
            O &&
              (((h.virtual || (h.virtual = {}))[E] = c),
              e & s.R && D && !D[E] && a(D, E, c)));
      };
    (s.F = 1),
      (s.G = 2),
      (s.S = 4),
      (s.P = 8),
      (s.B = 16),
      (s.W = 32),
      (s.U = 64),
      (s.R = 128),
      (e.exports = s);
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    e.exports = !n(12)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    var r = n(8),
      i = n(44),
      _ = n(43),
      a = Object.defineProperty;
    t.f = n(5)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = _(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(16);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(6),
      i = n(21);
    e.exports = n(5)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var r = n(38),
      i = n(28);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(7),
      i = n(66),
      _ = n(67),
      a = n(8),
      o = n(22),
      s = n(40),
      E = {},
      u = {};
    ((t = e.exports =
      function (e, t, n, c, A) {
        var l,
          f,
          O,
          T,
          I = A
            ? function () {
                return e;
              }
            : s(e),
          h = r(n, c, t ? 2 : 1),
          D = 0;
        if ("function" != typeof I) throw TypeError(e + " is not iterable!");
        if (_(I)) {
          for (l = o(e.length); l > D; D++)
            if ((T = t ? h(a((f = e[D]))[0], f[1]) : h(e[D])) === E || T === u)
              return T;
        } else
          for (O = I.call(e); !(f = O.next()).done; )
            if ((T = i(O, h, f.value, t)) === E || T === u) return T;
      }).BREAK = E),
      (t.RETURN = u);
  },
  function (e, t, n) {
    var r = n(28);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(92)(!0);
    n(34)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t, n) {
    var r = n(6).f,
      i = n(10),
      _ = n(2)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), _) &&
        r(e, _, { configurable: !0, value: t });
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    var r = n(30),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t, n) {
    var r = n(15),
      i = n(2)("toStringTag"),
      _ =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, a;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), i))
        ? n
        : _
        ? r(t)
        : "Object" == (a = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : a;
    };
  },
  function (e, t, n) {
    var r = n(72),
      i = n(46);
    e.exports = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var _ = i && r ? r(e, n) : {};
            _.get || _.set ? i(t, n, _) : (t[n] = e[n]);
          }
      return (t.default = e), t;
    };
  },
  function (e, t, n) {
    n(86);
    for (
      var r = n(1),
        i = n(9),
        _ = n(13),
        a = n(2)("toStringTag"),
        o =
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ","
          ),
        s = 0;
      s < o.length;
      s++
    ) {
      var E = o[s],
        u = r[E],
        c = u && u.prototype;
      c && !c[a] && i(c, a, E), (_[E] = _.Array);
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.VIDEO_NV12 =
        t.VIDEO_I420 =
        t.VIDEO_RGBA =
        t.VIDEO_INVALID =
        t.SET_INTERVAL_MODE =
        t.RQUEST_ANIMATION_MODE =
        t.serverHeartbeatMaxTimeoutSeconds =
        t.INTERPRETATION_SET_INTERPRETER =
        t.INTERPRETATION_MUTE =
        t.INTERPRETATION_SET_LANG =
        t.INTERPRETATION_ENABLE =
        t.UPDATE_ENCRYPTION_GCM_MODEL_KEY =
        t.VB_PTHREAD_MODEL_ALL_READY =
        t.FIRST_SHARING_FRAME_FOR_MOBILE =
        t.UNSUPPORTED_VIDEO_FORMAT =
        t.UNSUPPORTED_SHARING_FORMAT =
        t.SHARING_CAPTURE_FRAME_COUNT_STATISTIC =
        t.VIDEO_CAPTURE_FRAME_COUNT_STATISTIC =
        t.VIDEO_CAPTURER_RESOLUTION_CHANGE =
        t.SHARING_FIRST_DECODE_FRAME_RECEIVED =
        t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT =
        t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT =
        t.CURRENT_DECODE_VIDEO_QUALITY =
        t.CURRENT_SSRC_TIME =
        t.AES_GCM_IV_CALLBACK_FROM_WASM =
        t.AES_GCM_IV_TO_WASM =
        t.SHARING_GET_IMAGE_DATA_WRONG =
        t.SHARING_RENDER_MONITOR_LOG =
        t.Sharing_Width_And_Height_Info =
        t.VIDEO_RENDER_MONITOR_LOG =
        t.CURRENT_VIDEO_RESOLUTION =
        t.VIDEO_CAPTURER_RESOLUTION_720P =
        t.VIDEO_CAPTURER_RESOLUTION_360P =
        t.MEDIA_NTP_UPDATE =
        t.MEDIA_VIDEO_RTCP =
        t.MEDIA_VIDEO_DATA =
        t.MEDIA_AUDIO_RTCP =
        t.MEDIA_AUDIO_DATA =
        t.MEDIA_S2C_KEEPALIVE =
        t.MEDIA_VIDEO_REPORT_DROP_RATIO =
        t.MULTIVIEW_WEBGL_CONTEXT_LOST =
        t.AUDIO_CLIPPING =
        t.Sharing_Dec_WebSocket_FAILED =
        t.Sharing_Handle_FAILED =
        t.Audio_Mute =
        t.Sharing_Dec_WASM_FAILED =
        t.Video_Enc_Handle_FAILED =
        t.Video_Enc_WASM_FAILED =
        t.Video_Dec_WebSocket_FAILED =
        t.Video_Dec_Handle_FAILED =
        t.Video_Dec_WASM_FAILED =
        t.Audio_Enc_Handle_FAILED =
        t.Audio_Enc_WASM_FAILED =
        t.Audio_Dec_WebSocket_FAILED =
        t.Audio_Dec_Handle_FAILED =
        t.Audio_Dec_WASM_FAILED =
        t.AUDIO_MONITOR_LOG =
        t.WASMPTR =
        t.THREAD_ENCODE_BUFFER =
        t.THREAD_STATE_CREATED =
        t.THREAD_STATE_CREATING =
        t.THREAD_STATE_IDLE =
        t.AUDIO_ENCODED_DATA =
        t.VIDEO_DATA_DROP_RATIO =
        t.VIDEO_DROP_RATIO_FROM_WCL =
        t.VIDEO_ENCODED_DATA =
        t.SHARING_DECODE_MESSAGE =
        t.MOUSE_DATA_VIDEO_MODE =
        t.SHARING_DATA_VIDEO_MODE =
        t.WCL_TROUBLESHOOTING_INFO =
        t.DELTA_S =
        t.DELTA_C =
        t.DELTA_D =
        t.APP_TROUBLESHOOTING_INFO =
        t.DOWNLOAD_WASM_FROM_MAIN_THREAD =
        t.QOS_DEFAULT_POLLING_INTERVAL =
        t.QOS_MONITORING =
        t.CONNECT_WEBTRANSPORT_OK =
        t.WORKER_MAIN_VIDEO_DECODE_RINGBUFFER_TICK =
        t.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK =
        t.WORKER_MAIN_VIDEO_ENCODE_RINGBUFFER_TICK =
        t.MONITOR_MESSAGE =
        t.Video_Capture_Tick =
        t.DECODE_MESSAGE =
        t.Sharing_Data =
        t.Sharing_Handle_OK =
        t.Sharing_Dec_WebSocket_OK =
        t.AUDIO_DELAY =
        t.Sharing_Dec_PICTURE =
        t.Sharing_Dec_WASM_OK =
        t.Video_Enc_Handle_OK =
        t.Video_Enc_WASM_OK =
        t.Video_Dec_WebSocket_OK =
        t.Video_Dec_Handle_OK =
        t.Video_Dec_WASM_OK =
        t.Audio_Enc_Handle_OK =
        t.Audio_Enc_WASM_OK =
        t.Audio_Dec_WebSocket_OK =
        t.Audio_Dec_Handle_OK =
        t.Audio_Dec_WASM_OK =
          void 0),
      (t.WORKER_STATUS =
        t.GALLERY_VIEW_MAX_NUMB_THREADS =
        t.WEBCODEC_ENCODE_OPEN_FLAG =
        t.WEBCODEC_HEIGHT =
        t.WEBCODEC_WIDTH =
        t.EVENT_CACHE_SIZE =
        t.EVENT_CAPTURE_DATA =
        t.EVENT_NEEDMORE_DATA =
        t.EVENT_ROLLBACK_BUFFER =
          void 0);
    t.Audio_Dec_WASM_OK = 1;
    t.Audio_Dec_Handle_OK = 2;
    t.Audio_Dec_WebSocket_OK = 3;
    t.Audio_Enc_WASM_OK = 4;
    t.Audio_Enc_Handle_OK = 5;
    t.Video_Dec_WASM_OK = 7;
    t.Video_Dec_Handle_OK = 8;
    t.Video_Dec_WebSocket_OK = 9;
    t.Video_Enc_WASM_OK = 10;
    t.Video_Enc_Handle_OK = 11;
    t.Sharing_Dec_WASM_OK = 12;
    t.Sharing_Dec_PICTURE = 13;
    t.AUDIO_DELAY = 14;
    t.Sharing_Dec_WebSocket_OK = 15;
    t.Sharing_Handle_OK = 16;
    t.Sharing_Data = 17;
    t.DECODE_MESSAGE = 18;
    t.Video_Capture_Tick = 20;
    t.MONITOR_MESSAGE = 21;
    t.WORKER_MAIN_VIDEO_ENCODE_RINGBUFFER_TICK = 22;
    t.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK = 23;
    t.WORKER_MAIN_VIDEO_DECODE_RINGBUFFER_TICK = 24;
    t.CONNECT_WEBTRANSPORT_OK = 25;
    t.QOS_MONITORING = "QosMonitoring";
    t.QOS_DEFAULT_POLLING_INTERVAL = 1e3;
    t.DOWNLOAD_WASM_FROM_MAIN_THREAD = 30;
    t.APP_TROUBLESHOOTING_INFO = 31;
    t.DELTA_D = 32;
    t.DELTA_C = 33;
    t.DELTA_S = 34;
    t.WCL_TROUBLESHOOTING_INFO = 35;
    t.SHARING_DATA_VIDEO_MODE = 36;
    t.MOUSE_DATA_VIDEO_MODE = 37;
    t.SHARING_DECODE_MESSAGE = 38;
    t.VIDEO_ENCODED_DATA = 39;
    t.VIDEO_DROP_RATIO_FROM_WCL = 40;
    t.VIDEO_DATA_DROP_RATIO = 41;
    t.AUDIO_ENCODED_DATA = 42;
    t.THREAD_STATE_IDLE = 43;
    t.THREAD_STATE_CREATING = 44;
    t.THREAD_STATE_CREATED = 45;
    t.THREAD_ENCODE_BUFFER = 46;
    t.WASMPTR = 47;
    t.AUDIO_MONITOR_LOG = 48;
    t.Audio_Dec_WASM_FAILED = -1;
    t.Audio_Dec_Handle_FAILED = -2;
    t.Audio_Dec_WebSocket_FAILED = -3;
    t.Audio_Enc_WASM_FAILED = -4;
    t.Audio_Enc_Handle_FAILED = -5;
    t.Video_Dec_WASM_FAILED = -7;
    t.Video_Dec_Handle_FAILED = -8;
    t.Video_Dec_WebSocket_FAILED = -9;
    t.Video_Enc_WASM_FAILED = -10;
    t.Video_Enc_Handle_FAILED = -11;
    t.Sharing_Dec_WASM_FAILED = -12;
    t.Audio_Mute = -13;
    t.Sharing_Handle_FAILED = -14;
    t.Sharing_Dec_WebSocket_FAILED = -15;
    t.AUDIO_CLIPPING = -23;
    t.MULTIVIEW_WEBGL_CONTEXT_LOST = -26;
    t.MEDIA_VIDEO_REPORT_DROP_RATIO = 100;
    t.MEDIA_S2C_KEEPALIVE = 0;
    t.MEDIA_AUDIO_DATA = 1;
    t.MEDIA_AUDIO_RTCP = 6;
    t.MEDIA_VIDEO_DATA = 2;
    t.MEDIA_VIDEO_RTCP = 7;
    t.MEDIA_NTP_UPDATE = 9;
    t.VIDEO_CAPTURER_RESOLUTION_360P = 10;
    t.VIDEO_CAPTURER_RESOLUTION_720P = 11;
    t.CURRENT_VIDEO_RESOLUTION = 50;
    t.VIDEO_RENDER_MONITOR_LOG = 51;
    t.Sharing_Width_And_Height_Info = 52;
    t.SHARING_RENDER_MONITOR_LOG = 53;
    t.SHARING_GET_IMAGE_DATA_WRONG = 54;
    t.AES_GCM_IV_TO_WASM = 55;
    t.AES_GCM_IV_CALLBACK_FROM_WASM = 56;
    t.CURRENT_SSRC_TIME = 57;
    t.CURRENT_DECODE_VIDEO_QUALITY = 66.5;
    t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT = 67;
    t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT = 68;
    t.SHARING_FIRST_DECODE_FRAME_RECEIVED = 69;
    t.VIDEO_CAPTURER_RESOLUTION_CHANGE = 71;
    t.VIDEO_CAPTURE_FRAME_COUNT_STATISTIC = 72;
    t.SHARING_CAPTURE_FRAME_COUNT_STATISTIC = 73;
    t.UNSUPPORTED_SHARING_FORMAT = 75;
    t.UNSUPPORTED_VIDEO_FORMAT = 76;
    t.FIRST_SHARING_FRAME_FOR_MOBILE = 78;
    t.VB_PTHREAD_MODEL_ALL_READY = 95;
    t.UPDATE_ENCRYPTION_GCM_MODEL_KEY = 102;
    t.INTERPRETATION_ENABLE = 0;
    t.INTERPRETATION_SET_LANG = 1;
    t.INTERPRETATION_MUTE = 2;
    t.INTERPRETATION_SET_INTERPRETER = 3;
    t.serverHeartbeatMaxTimeoutSeconds = 65;
    t.RQUEST_ANIMATION_MODE = 0;
    t.SET_INTERVAL_MODE = 1;
    t.VIDEO_INVALID = -1;
    t.VIDEO_RGBA = 0;
    t.VIDEO_I420 = 1;
    t.VIDEO_NV12 = 2;
    t.EVENT_ROLLBACK_BUFFER = 0;
    t.EVENT_NEEDMORE_DATA = 1;
    t.EVENT_CAPTURE_DATA = 2;
    t.EVENT_CACHE_SIZE = 3;
    t.WEBCODEC_WIDTH = 1280;
    t.WEBCODEC_HEIGHT = 720;
    t.WEBCODEC_ENCODE_OPEN_FLAG = !1;
    t.GALLERY_VIEW_MAX_NUMB_THREADS = 12;
    t.WORKER_STATUS = {
      startAsking: "startAsking",
      finishAsking: "finishAsking",
      startExiting: "startExiting",
      finishExiting: "finishExiting",
    };
  },
  function (e, t, n) {
    e.exports = n(101);
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(1).document,
      _ = r(i) && r(i.createElement);
    e.exports = function (e) {
      return _ ? i.createElement(e) : {};
    };
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(48)("keys"),
      i = n(33);
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function (e, t) {
    e.exports = !0;
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(32),
      i = n(3),
      _ = n(88),
      a = n(9),
      o = n(13),
      s = n(89),
      E = n(20),
      u = n(91),
      c = n(2)("iterator"),
      A = !([].keys && "next" in [].keys()),
      l = function () {
        return this;
      };
    e.exports = function (e, t, n, f, O, T, I) {
      s(n, t, f);
      var h,
        D,
        S,
        R = function (e) {
          if (!A && e in C) return C[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        d = t + " Iterator",
        N = "values" == O,
        p = !1,
        C = e.prototype,
        v = C[c] || C["@@iterator"] || (O && C[O]),
        M = v || R(O),
        b = O ? (N ? R("entries") : M) : void 0,
        m = ("Array" == t && C.entries) || v;
      if (
        (m &&
          (S = u(m.call(new e()))) !== Object.prototype &&
          S.next &&
          (E(S, d, !0), r || "function" == typeof S[c] || a(S, c, l)),
        N &&
          v &&
          "values" !== v.name &&
          ((p = !0),
          (M = function () {
            return v.call(this);
          })),
        (r && !I) || (!A && !p && C[c]) || a(C, c, M),
        (o[t] = M),
        (o[d] = l),
        O)
      )
        if (
          ((h = {
            values: N ? M : R("values"),
            keys: T ? M : R("keys"),
            entries: b,
          }),
          I)
        )
          for (D in h) D in C || _(C, D, h[D]);
        else i(i.P + i.F * (A || p), t, h);
      return h;
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(16);
    function i(e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = r(t)),
        (this.reject = r(n));
    }
    e.exports.f = function (e) {
      return new i(e);
    };
  },
  function (e, t, n) {
    var r = n(9);
    e.exports = function (e, t, n) {
      for (var i in t) n && e[i] ? (e[i] = t[i]) : r(e, i, t[i]);
      return e;
    };
  },
  function (e, t, n) {
    var r = n(15);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t, n) {
    var r = n(80),
      i = n(49);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(23),
      i = n(2)("iterator"),
      _ = n(13);
    e.exports = n(0).getIteratorMethod = function (e) {
      if (null != e) return e[i] || e["@@iterator"] || _[r(e)];
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    };
  },
  function (e, t, n) {
    var r = n(46);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          r(e, i.key, i);
      }
    }
    e.exports = function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    e.exports =
      !n(5) &&
      !n(12)(function () {
        return (
          7 !=
          Object.defineProperty(n(29)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(3),
      i = n(0),
      _ = n(12);
    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        r(
          r.S +
            r.F *
              _(function () {
                n(1);
              }),
          "Object",
          a
        );
    };
  },
  function (e, t, n) {
    e.exports = n(76);
  },
  function (e, t, n) {
    e.exports = n(78);
  },
  function (e, t, n) {
    var r = n(0),
      i = n(1),
      _ = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return _[e] || (_[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(32) ? "pure" : "global",
      copyright: "???? 2018 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t, n) {
    e.exports = n(83);
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(90),
      _ = n(49),
      a = n(31)("IE_PROTO"),
      o = function () {},
      s = function () {
        var e,
          t = n(29)("iframe"),
          r = _.length;
        for (
          t.style.display = "none",
            n(53).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            s = e.F;
          r--;

        )
          delete s.prototype[_[r]];
        return s();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((o.prototype = r(e)),
              (n = new o()),
              (o.prototype = null),
              (n[a] = e))
            : (n = s()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  function (e, t, n) {
    var r = n(1).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    var r = n(55);
    function i(e, t, n, i, _, a, o) {
      try {
        var s = e[a](o),
          E = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(E) : r.resolve(E).then(i, _);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          n = arguments;
        return new r(function (r, _) {
          var a = e.apply(t, n);
          function o(e) {
            i(a, r, _, o, s, "next", e);
          }
          function s(e) {
            i(a, r, _, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    };
  },
  function (e, t, n) {
    e.exports = n(94);
  },
  function (e, t) {},
  function (e, t, n) {
    var r = n(8),
      i = n(16),
      _ = n(2)("species");
    e.exports = function (e, t) {
      var n,
        a = r(e).constructor;
      return void 0 === a || null == (n = r(a)[_]) ? t : i(n);
    };
  },
  function (e, t, n) {
    var r,
      i,
      _,
      a = n(7),
      o = n(96),
      s = n(53),
      E = n(29),
      u = n(1),
      c = u.process,
      A = u.setImmediate,
      l = u.clearImmediate,
      f = u.MessageChannel,
      O = u.Dispatch,
      T = 0,
      I = {},
      h = function () {
        var e = +this;
        if (I.hasOwnProperty(e)) {
          var t = I[e];
          delete I[e], t();
        }
      },
      D = function (e) {
        h.call(e.data);
      };
    (A && l) ||
      ((A = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (I[++T] = function () {
            o("function" == typeof e ? e : Function(e), t);
          }),
          r(T),
          T
        );
      }),
      (l = function (e) {
        delete I[e];
      }),
      "process" == n(15)(c)
        ? (r = function (e) {
            c.nextTick(a(h, e, 1));
          })
        : O && O.now
        ? (r = function (e) {
            O.now(a(h, e, 1));
          })
        : f
        ? ((_ = (i = new f()).port2),
          (i.port1.onmessage = D),
          (r = a(_.postMessage, _, 1)))
        : u.addEventListener &&
          "function" == typeof postMessage &&
          !u.importScripts
        ? ((r = function (e) {
            u.postMessage(e + "", "*");
          }),
          u.addEventListener("message", D, !1))
        : (r =
            "onreadystatechange" in E("script")
              ? function (e) {
                  s.appendChild(E("script")).onreadystatechange = function () {
                    s.removeChild(this), h.call(e);
                  };
                }
              : function (e) {
                  setTimeout(a(h, e, 1), 0);
                })),
      (e.exports = { set: A, clear: l });
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(4),
      _ = n(36);
    e.exports = function (e, t) {
      if ((r(e), i(t) && t.constructor === e)) return t;
      var n = _.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(0),
      _ = n(6),
      a = n(5),
      o = n(2)("species");
    e.exports = function (e) {
      var t = "function" == typeof i[e] ? i[e] : r[e];
      a &&
        t &&
        !t[o] &&
        _.f(t, o, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t, n) {
    var r = n(33)("meta"),
      i = n(4),
      _ = n(10),
      a = n(6).f,
      o = 0,
      s =
        Object.isExtensible ||
        function () {
          return !0;
        },
      E = !n(12)(function () {
        return s(Object.preventExtensions({}));
      }),
      u = function (e) {
        a(e, r, { value: { i: "O" + ++o, w: {} } });
      },
      c = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!_(e, r)) {
            if (!s(e)) return "F";
            if (!t) return "E";
            u(e);
          }
          return e[r].i;
        },
        getWeak: function (e, t) {
          if (!_(e, r)) {
            if (!s(e)) return !0;
            if (!t) return !1;
            u(e);
          }
          return e[r].w;
        },
        onFreeze: function (e) {
          return E && c.NEED && s(e) && !_(e, r) && u(e), e;
        },
      });
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t) {
      if (!r(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  ,
  function (e, t, n) {
    var r = n(8);
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var _ = e.return;
        throw (void 0 !== _ && r(_.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(13),
      i = n(2)("iterator"),
      _ = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || _[i] === e);
    };
  },
  function (e, t, n) {
    var r = n(2)("iterator"),
      i = !1;
    try {
      var _ = [7][r]();
      (_.return = function () {
        i = !0;
      }),
        Array.from(_, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var _ = [7],
          a = _[r]();
        (a.next = function () {
          return { done: (n = !0) };
        }),
          (_[r] = function () {
            return a;
          }),
          e(_);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.add_monitor = c),
      (t.add_audio_monitor_log = function (e) {
        postMessage({ status: u.AUDIO_MONITOR_LOG, data: e });
      }),
      (t.multiview_webgl_monitor = function () {
        postMessage({ status: u.MULTIVIEW_WEBGL_CONTEXT_LOST });
      }),
      (t.instantiateCachedURL = function (e, t, n) {
        var r = self.wasmSuccessEvent,
          i = self.wasmFailEvent,
          _ = self.databaseName,
          a = self.databaseDataType;
        function o(e, t) {
          return (function (e) {
            var t = self;
            return new E.default(function (n, r) {
              t.addEventListener("message", function (e) {
                var t = e.data;
                "DOWNLOAD_WASM_FROM_MAIN_THREAD_OK" === t.command &&
                  (c("DE"), n(t.data)),
                  "DOWNLOAD_WASM_FROM_MAIN_THREAD_FAILED" === t.command && r();
              }),
                c("DS"),
                postMessage({
                  status: u.DOWNLOAD_WASM_FROM_MAIN_THREAD,
                  url: e,
                });
            });
          })(e);
        }
        function s(e) {
          !(function (e, t) {
            var n = e.exports;
            (Module.asm = n),
              (wasmTable = Module.asm.__indirect_function_table),
              (wasmModule = t),
              ENVIRONMENT_IS_PTHREAD || removeRunDependency("wasm-instantiate");
          })(e.instance, e.module);
        }
        return (function (t) {
          return new E.default(function (r, i) {
            try {
              if (indexedDB) {
                var s,
                  E =
                    void 0 === IDBTransaction.READ_WRITE
                      ? "readwrite"
                      : IDBTransaction.READ_WRITE,
                  u = indexedDB.open(_, e);
                (u.onerror = function (e) {
                  var i = indexedDB.deleteDatabase(_);
                  (i.onerror = function (e) {
                    console.log("Error deleting database");
                  }),
                    (i.onsuccess = function (e) {
                      console.log("Database deleted successfully");
                    }),
                    r(
                      o(t, n).then(function (e) {
                        c("CS");
                        var t = WebAssembly.instantiate(e, n);
                        return c("CE"), t;
                      })
                    );
                }),
                  (u.onsuccess = function (e) {
                    if (
                      (s = e.target.result).objectStoreNames.contains("file")
                    ) {
                      var i = s.transaction(["file"], E).objectStore("file"),
                        u = i.get(a);
                      (u.onsuccess = function (e) {
                        if (u.result) {
                          var i = e.target.result;
                          c("CS");
                          var _ = WebAssembly.instantiate(i, n);
                          return c("CE"), r(_);
                        }
                        r(
                          o(t, n).then(function (e) {
                            s
                              .transaction(["file"], E)
                              .objectStore("file")
                              .put(e, a),
                              c("CS");
                            var t = WebAssembly.instantiate(e, n);
                            return c("CE"), t;
                          })
                        );
                      }),
                        (u.onerror = function (e) {
                          r(
                            o(t, n).then(function (e) {
                              c("CS");
                              var t = WebAssembly.instantiate(e, n);
                              return c("CE"), t;
                            })
                          );
                        });
                    } else
                      r(
                        o(t, n).then(function (e) {
                          c("CS");
                          var t = WebAssembly.instantiate(e, n);
                          c("CE");
                          try {
                            s.objectStoreNames.contains("file") ||
                              indexedDB.deleteDatabase(_);
                          } catch (e) {}
                          return t;
                        })
                      );
                  }),
                  (u.onupgradeneeded = function (e) {
                    !(function (e) {
                      e.objectStoreNames.contains("file") &&
                        e.deleteObjectStore("file");
                      e.createObjectStore("file");
                    })(e.target.result);
                  });
              } else
                r(
                  o(t, n).then(function (e) {
                    c("CS");
                    var t = WebAssembly.instantiate(e, n);
                    return c("CE"), t;
                  })
                );
            } catch (e) {
              r(
                o(t, n).then(function (e) {
                  c("CS");
                  var t = WebAssembly.instantiate(e, n);
                  return c("CE"), t;
                })
              );
            }
          });
        })(t)
          .then(function (e) {
            t.includes("video.mt")
              ? s(e)
              : (function (e, t) {
                  var n = e.exports;
                  (Module.asm = n),
                    (wasmMemory = Module.asm.memory),
                    updateGlobalBufferAndViews(wasmMemory.buffer),
                    (wasmTable = Module.asm.__indirect_function_table),
                    removeRunDependency("wasm-instantiate");
                })(e.instance),
              (self.Fetch_WASM_OK = !0),
              postMessage({ status: r });
          })
          .catch(function (e) {
            console.log(e), postMessage({ status: i });
          });
      }),
      (t.str2uint8s = function (e) {
        if (!e) return null;
        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
          t[n] = e.charCodeAt(n);
        return t;
      }),
      (t.Deferred = A),
      (t.observeVideoQuality = function (e, t) {
        var n = e.width,
          r = e.height,
          i = (e.ssrc >> 10) << 10,
          _ = I.reduce(function (e, t) {
            return Math.abs(e - r) > Math.abs(t - r) ? t : e;
          }, I[0]),
          a = I.findIndex(function (e) {
            return e === _;
          });
        if (!T.get(i) || T.get(i).quality !== a) {
          var o = { width: n, height: r, ssrc: i, quality: a };
          T.set(i, o),
            t
              ? t(o)
              : postMessage({
                  status: u.CURRENT_DECODE_VIDEO_QUALITY,
                  data: o,
                });
        }
      }),
      (t.WebTransportUtil = t.YuvWrap = t.SharedBufferList = void 0);
    var i = r(n(27)),
      _ = r(n(50)),
      a = r(n(54)),
      o = r(n(41)),
      s = r(n(42)),
      E = r(n(55)),
      u = n(26);
    function c(e) {
      postMessage({ status: u.WCL_TROUBLESHOOTING_INFO, data: e });
    }
    function A() {
      var e = this;
      this.promise = new E.default(function (t, n) {
        (e.reject = n), (e.resolve = t);
      });
    }
    var l = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 15e5;
        (0, o.default)(this, e),
          (this.uint8Map = {}),
          (this.availableIndex = []),
          (this.capacity = t),
          (this.bytesPerElement = n),
          (this.avaiableIndexMap = {}),
          (this.deferedList = []);
        for (var r = 0; r < t; r++)
          (this.uint8Map[r] = new Uint8Array(n)),
            this.availableIndex.push(r),
            (this.avaiableIndexMap[r] = !0);
      }
      return (
        (0, s.default)(e, [
          {
            key: "increaseBufferSize",
            value: function (e) {
              var t = this.bytesPerElement + e;
              this.bytesPerElement = t;
              for (var n = 0; n < this.capacity; n++) {
                var r = this.uint8Map[n],
                  i = new Uint8Array(t);
                i.set(r, 0), (this.uint8Map[n] = i);
              }
            },
          },
          {
            key: "getCapacity",
            value: function () {
              return this.capacity;
            },
          },
          {
            key: "get",
            value: function () {
              var e = this;
              if (this.availableIndex.length > 0) {
                var t = this.availableIndex.shift();
                return (
                  (this.avaiableIndexMap[t] = !1),
                  new E.default(function (n, r) {
                    n({ index: t, uint8s: e.uint8Map[t] });
                  })
                );
              }
              var n = new A();
              return this.deferedList.push(n), n.promise;
            },
          },
          {
            key: "getSync",
            value: function () {
              if (this.availableIndex.length > 0) {
                var e = this.availableIndex.shift();
                return (
                  (this.avaiableIndexMap[e] = !1),
                  { index: e, uint8s: this.uint8Map[e] }
                );
              }
              return null;
            },
          },
          {
            key: "recycle",
            value: function (e) {
              !0 !== this.avaiableIndexMap[e] &&
                ((this.avaiableIndexMap[e] = !0),
                this.availableIndex.push(e),
                this.deferedList.length > 0 &&
                  this.deferedList.shift().resolve(this.get()));
            },
          },
        ]),
        e
      );
    })();
    t.SharedBufferList = l;
    var f = (function () {
      function e(t) {
        (0, o.default)(this, e), (this.sharedBufferList = t);
      }
      return (
        (0, s.default)(e, [
          {
            key: "storeFlexible",
            value: function (e, t) {
              var n = e.byteLength - this.sharedBufferList.bytesPerElement;
              if (n > 0) {
                var r = Math.floor(0.1 * this.sharedBufferList.bytesPerElement),
                  i = n > r ? n : r;
                if (i + this.sharedBufferList.bytesPerElement > t)
                  return E.default.reject(
                    "too big, more than maxBytesPerElement"
                  );
                this.sharedBufferList.increaseBufferSize(i);
              }
              return this.store(e);
            },
          },
          {
            key: "store",
            value: function (e) {
              var t = this;
              return this.sharedBufferList.get().then(function (n) {
                try {
                  return (
                    (t.obj = n),
                    n.uint8s.set(e, 0),
                    (t.yuvdata = new Uint8Array(
                      n.uint8s.buffer,
                      0,
                      e.byteLength
                    )),
                    !0
                  );
                } catch (e) {
                  throw e;
                } finally {
                  t.autoRecycle();
                }
              });
            },
          },
          {
            key: "storeSync",
            value: function (e) {
              var t = this.sharedBufferList.getSync();
              return (
                null !== t &&
                ((this.obj = t),
                t.uint8s.set(e, 0),
                (this.yuvdata = new Uint8Array(
                  t.uint8s.buffer,
                  0,
                  e.byteLength
                )),
                !0)
              );
            },
          },
          {
            key: "autoRecycle",
            value: function () {
              var e = this;
              this.autoRecycleInterval = setTimeout(function () {
                console.log("autoRecycle", e.obj.index), e.recycle();
              }, 5e3);
            },
          },
          {
            key: "recycle",
            value: function () {
              try {
                this.autoRecycleInterval &&
                  clearInterval(this.autoRecycleInterval),
                  this.sharedBufferList.recycle(this.obj.index);
              } catch (e) {
                console.error(e);
              }
            },
          },
        ]),
        e
      );
    })();
    t.YuvWrap = f;
    var O = (function () {
      function e(t) {
        (0, o.default)(this, e),
          (this.params = t),
          (this.label = this.params.label || ""),
          (this.successfulConnectedCount = 0),
          (this.connectIndex = 0),
          (this.heartbeat = new Uint8Array([
            104, 101, 97, 114, 116, 98, 101, 97, 116,
          ])),
          (this.transport = null),
          (this.transport_ready = !1);
      }
      var t, n, r, i, u;
      return (
        (0, s.default)(e, [
          {
            key: "connect",
            value:
              ((u = (0, a.default)(
                _.default.mark(function e() {
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this.reconnect();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return u.apply(this, arguments);
              }),
          },
          {
            key: "reconnect",
            value:
              ((i = (0, a.default)(
                _.default.mark(function e() {
                  var t,
                    n = this;
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.isReconnectNow && !this.isTimerExist) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            (this.isReconnectNow = !0),
                              (this.isTimerExist = !0),
                              (t = Math.pow(2, this.connectIndex) - 1),
                              (this.connectIndex += 1),
                              setTimeout(
                                (0, a.default)(
                                  _.default.mark(function e() {
                                    var t, r;
                                    return _.default.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n.isTimerExist = !1),
                                                (t = n.params.url),
                                                (r = new WebTransport(t)),
                                                (n.transport = r),
                                                r.closed
                                                  .then(function () {
                                                    (n.transport_ready = !1),
                                                      console.log(
                                                        n.localTime() +
                                                          "WT_LOG WebTransportUtil closed "
                                                            .concat(
                                                              n.connectIndex,
                                                              " to "
                                                            )
                                                            .concat(t)
                                                      ),
                                                      n.params.onclose &&
                                                        n.params.onclose(
                                                          n,
                                                          n.successfulConnectedCount
                                                        );
                                                  })
                                                  .catch(function (e) {
                                                    (n.transport_ready = !1),
                                                      console.error(e),
                                                      console.log(
                                                        n.localTime() +
                                                          "WT_LOG WebTransportUtil error is " +
                                                          e
                                                      ),
                                                      console.log(
                                                        n.localTime() +
                                                          "WT_LOG WebTransportUtil error closed "
                                                            .concat(
                                                              n.connectIndex,
                                                              " to "
                                                            )
                                                            .concat(t)
                                                      ),
                                                      n.params.onerror &&
                                                        n.params.onerror(e),
                                                      n.connectIndex < 8
                                                        ? (console.log(
                                                            n.localTime() +
                                                              "WT_LOG WebTransportUtil reconnect "
                                                                .concat(
                                                                  n.connectIndex,
                                                                  " to "
                                                                )
                                                                .concat(t)
                                                          ),
                                                          n.reconnect())
                                                        : (console.log(
                                                            n.localTime() +
                                                              "NetWork is Bad, WebTransport won't reconnect to serer!"
                                                          ),
                                                          n.params.onclose &&
                                                            n.params.onclose(
                                                              n
                                                            ));
                                                  }),
                                                (e.prev = 5),
                                                (n.isReconnectNow = !1),
                                                (e.next = 9),
                                                r.ready
                                              );
                                            case 9:
                                              (n.transport_ready = !0),
                                                n.successfulConnectedCount++,
                                                (r.datagrams.incomingMaxAge = 3e4),
                                                (r.datagrams.outgoingMaxAge = 3e4),
                                                (r.datagrams.incomingHighWaterMark = 1e4),
                                                (r.datagrams.outgoingHighWaterMark = 1e4),
                                                (r.datagrams.writable.maxAge = 3e4),
                                                (r.datagrams.readable.maxAge = 3e4),
                                                n.params.onopen(n),
                                                (e.next = 26);
                                              break;
                                            case 20:
                                              return (
                                                (e.prev = 20),
                                                (e.t0 = e.catch(5)),
                                                n.params.onerror &&
                                                  n.params.onerror(e.t0),
                                                console.error(
                                                  n.localTime() +
                                                    "Connection failed. " +
                                                    e.t0
                                                ),
                                                n.close(),
                                                e.abrupt("return")
                                              );
                                            case 26:
                                              (n.writer =
                                                r.datagrams.writable.getWriter()),
                                                (n.reader =
                                                  r.datagrams.readable.getReader()),
                                                n.startHeartbeat(),
                                                n.read();
                                            case 30:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      this,
                                      [[5, 20]]
                                    );
                                  })
                                ),
                                1e3 * t
                              );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "send",
            value: function (e) {
              this.writer.write(e);
            },
          },
          {
            key: "sendAwaitReady",
            value:
              ((r = (0, a.default)(
                _.default.mark(function e(t) {
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.writer.ready;
                          case 2:
                            return (e.next = 4), this.writer.write(t);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "startHeartbeat",
            value:
              ((n = (0, a.default)(
                _.default.mark(function e() {
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 3), this.sleep(3e3);
                          case 3:
                            return (
                              (e.next = 5), this.sendAwaitReady(this.heartbeat)
                            );
                          case 5:
                            e.next = 0;
                            break;
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "isHeartBeat",
            value: function (e) {
              if (e.byteLength != this.heartbeat.byteLength) return !1;
              for (var t = 0; t != e.byteLength; t++)
                if (e[t] != this.heartbeat[t]) return !1;
              return !0;
            },
          },
          {
            key: "sleep",
            value: function (e) {
              return new E.default(function (t) {
                return setTimeout(t, e);
              });
            },
          },
          {
            key: "localTime",
            value: function () {
              var e = new Date();
              return (
                "local time : " +
                e.getDate() +
                "/" +
                (e.getMonth() + 1) +
                "/" +
                e.getFullYear() +
                " @ " +
                e.getHours() +
                ":" +
                e.getMinutes() +
                ":" +
                e.getSeconds() +
                " "
              );
            },
          },
          {
            key: "close",
            value: function () {
              (this.transport_ready = !1),
                this.transport && this.transport.close();
            },
          },
          {
            key: "read",
            value:
              ((t = (0, a.default)(
                _.default.mark(function e() {
                  var t, n, r;
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t = this.reader;
                          case 1:
                            return (e.next = 4), t.read();
                          case 4:
                            if (((n = e.sent), (r = n.value), !n.done)) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("break", 14);
                          case 9:
                            if (!this.isHeartBeat(r)) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("continue", 1);
                          case 11:
                            this.params.onmessage(r), (e.next = 1);
                            break;
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
        ]),
        e
      );
    })();
    t.WebTransportUtil = O;
    var T = new i.default(),
      I = [90, 180, 360, 720];
  },
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK =
        t.WORKER_MAIN_VIDEO_ENCODE_RINGBUFFER_TICK =
        t.MONITOR_MESSAGE =
        t.Video_Capture_Tick =
        t.Video_Enc_WebSocket_OK =
        t.DECODE_MESSAGE =
        t.Sharing_Data =
        t.Sharing_Handle_OK =
        t.Sharing_Dec_WebSocket_OK =
        t.AUDIO_DELAY =
        t.Sharing_Dec_PICTURE =
        t.Sharing_Dec_WASM_OK =
        t.Video_Enc_Handle_OK =
        t.Video_Enc_WASM_OK =
        t.Video_Dec_WebSocket_OK =
        t.Video_Dec_Handle_OK =
        t.Video_Dec_WASM_OK =
        t.Audio_Enc_Handle_OK =
        t.Audio_Enc_WASM_OK =
        t.Audio_Dec_WebSocket_OK =
        t.Audio_Dec_Handle_OK =
        t.Audio_Dec_WASM_OK =
        t.VB_MODEL_PRELOADING_OK =
        t.VB_MODEL_PRELOADING_10S =
        t.VB_MODEL_PRELOADING_3S =
        t.SWITCH_MASK_AND_VB =
        t.START_VIDEO_STREAM_IN_VB_SETTING_SUCCESS =
        t.STOP_VIDEO_VB_SETTING =
        t.UPDATE_VIDEO_VB_BG_IMAGE =
        t.START_VIDEO_VB_SETTING =
        t.SWITCH_WATER_MARK_FLAG =
        t.ENABLE_SHARE_TO_BO =
        t.BUILD_MA_CHANNEL_IN_BO =
        t.BUILD_MS_CHANNEL_IN_BO =
        t.SHARING_REMOVE_REV_CHANNEL_TYPE =
        t.SHARING_ADD_REV_CHANNEL_TYPE =
        t.UPDATE_MEDIA_PARAMS =
        t.USER_NODE_LIST_IN_MAIN_SESSION =
        t.MIRROR_MY_VIDEO =
        t.SET_DESKTOP_VOLUME =
        t.LEAVE_DESKTOP_AUDIO =
        t.JOIN_DESKTOP_AUDIO =
        t.VIDEO_ENABLE_ENCODE_HW =
        t.VIDEO_ENABLE_DECODE_HW =
        t.START_VIDEO_STREAM_IN_MASK_SETTING_SUCCESS =
        t.FINISH_MASK_SETTING =
        t.UPDATE_MASK_INFO =
        t.UPDATE_BG_IMAGE =
        t.VIDEO_MASK_SETTING =
        t.AUDIO_INTERPRETATION_ENABLE =
        t.AUDIO_INTERPRETATION_LIST_INFO =
        t.AUDIO_INTERPRETATION_SELECT_LANGUAGE =
        t.AUIOD_INTERPRETATION_MUTE =
        t.AUDIO_CC_SELECT_LANGUAGE =
        t.ZOOM_RENDER =
        t.CLEAR_CANVAS =
        t.UPDATE_CANVAS_SIZE =
        t.PAUSE_OR_RESUME_AUDIO_DECODE =
        t.UPDATE_SHARING_DECODE_PARAM =
        t.USER_NODE_LIST =
        t.AES_GCM_IV_VALUE =
        t.RESEND_REMOTE_CONTROL_POSITION_PDU =
        t.COMMAND_SOCKET_MESSAGE_NOTIFY =
        t.CHANGE_CURRENT_SHARING_ACTIVE_SSRC =
        t.SWITCH_CANVAS_FOR_SHARING_CAPTURE =
        t.CHECK_CHROME_SHARING_EXTENSION =
        t.RESUME_DESKTOP_SHARING =
        t.PAUSE_DESKTOP_SHARING =
        t.STOP_DESKTOP_SHARING =
        t.START_DESKTOP_SHARING =
        t.UPDATE_SUBSCRIBE_VIDEO =
        t.CANCEL_REMOTE_CONTROL =
        t.UPDATE_REMOTE_CONTROL_PROPERTIES =
        t.START_REMOTE_CONTROL =
        t.SWITCH_CANVAS_FOR_VIDEO_CAPTURE =
        t.STOP_SHARING =
        t.START_SHARING =
        t.JOIN_COMPUTER_AUDIO =
        t.LEAVE_COMPUTER_AUDIO =
        t.REMOVE_RENDER_AUDIO =
        t.WEBRTC_RESTART =
        t.CHANGE_AUDIO_MIC =
        t.END_MEDIA =
        t.MEETING_FAIL_OVER =
        t.LEAVE_MEETING =
        t.REMOVE_AUDIO_CAPTURE =
        t.CHANGE_CURRENT_ACTIVE_SSRC =
        t.CHANGE_VIDEO_CAPTURE_DEVICE =
        t.CHANGE_AUDIO_SPEAKER =
        t.CHANGE_VIDEO_RESOLUTION =
        t.CHANGE_FRAME_RATE =
        t.MUTE_AUDIO =
        t.UNMUTE_AUDIO =
        t.STOP_RENDER_AUDIO =
        t.ADD_RENDER_AUDIO =
        t.STOP_CAPTURE_VIDEO =
        t.START_CAPTURE_VIDEO =
        t.STOP_RENDER_VIDEO =
        t.ADD_RENDER_VIDEO =
        t.START_MEDIA =
          void 0),
      (t.WCL_SIP_HUNGUP_FAILED =
        t.AUDIO_AUTO_PLAY_FAILED =
        t.AUDIO_CLIPPING =
        t.DESKTOP_SHARING_SYSTEM_ERROR =
        t.AUDIO_SPEAKER_SET_ERROR =
        t.DESKTOP_SHARING_ERROR =
        t.DESKTOP_SHARING_TIME_OUT =
        t.DESKTOP_SHARING_PERMISSION_DENIED =
        t.DESKTOP_SHARING_CHROME_EXTENSION_UNINSTALLED =
        t.USER_CANCEL_PERMISSION_REQUEST =
        t.USER_STOP_DESKTOP_SHARING =
        t.REMOTE_CONTROL_PASTE_TEXT_LENGTH_OVERFLOW =
        t.CANCEL_REMOTE_CONTROL_FAILED =
        t.START_REMOTE_CONTROL_FAILED =
        t.STOP_VIDEO_CAPTURE_FAILED =
        t.USER_CAMERA_IS_TAKEN_BY_OTHER_PROGRAMS =
        t.USER_FORBIDDED_CAPTURE_VIDEO =
        t.AUDIO_CTX_SAMPLERATE =
        t.AUDIO_ZERO_DATA =
        t.SHARING_DEC_THREAD_FAILED =
        t.VIDEO_WEBSOCKET_BROKEN =
        t.AUDIO_WEBSOCKET_BROKEN =
        t.USER_FORBIDDED_CAPTURE_AUDIO =
        t.INIT_FAILED_SHARING =
        t.INIT_FAILED_AUDIO =
        t.INIT_FAILED_VIDEO =
        t.INIT_FAILED =
        t.LEAVE_DESKTOP_AUDIO_COMPLETE =
        t.LEAVE_COMPUTER_AUDIO_COMPLETE =
        t.JOIN_DESKTOP_AUDIO_COMPLETE =
        t.JOIN_COMPUTER_AUDIO_COMPLETE =
        t.FIRST_IOS_FRAME =
        t.SHARING_DESKTOP_STREAM_HAVE_AUDIO =
        t.WCL_SIP_CREATE_SUCCESS =
        t.AES_GCM_IV_RESPONSE =
        t.SEND_MESSAGE_TO_RWG =
        t.REQUEST_AUDIO_BRIDGE_TOKEN =
        t.SHARING_DECODE_MAX_SIZE =
        t.CHECK_CHROME_SHARING_EXTENSION_RESPONSE =
        t.DESKTOP_SHARING_CAPTURE_SUCCESS =
        t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT =
        t.MONITOR_LOG =
        t.REMOTE_CONTROL_COPIED_TEXT_NOTIFY =
        t.CANCEL_REMOTE_CONTROL_SUCCESS =
        t.START_REMOTE_CONTROL_SUCCESS =
        t.STOP_VIDEO_CAPTURE_SUCCESS =
        t.START_VIDEO_CAPTURE_SUCCESS =
        t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT =
        t.VIDEO_DECODE_MAX_SIZE =
        t.SHARING_MORE_INFO =
        t.SHARING_PARA =
        t.SHARING_DATA =
        t.SHARING_DEC_THREAD_OK =
        t.CURRENT_VIDEO_RESOLUTION =
        t.USER_GRANT_CAPTURE_AUDIO =
        t.INIT_SUCCESS_SHARING =
        t.INIT_SUCCESS_AUDIO =
        t.INIT_SUCCESS_VIDEO =
        t.INIT_SUCCESS =
        t.MULTIVIEW_WEBGL_CONTEXT_LOST =
        t.Video_Enc_WebSocket_FAILED =
        t.Sharing_Dec_WebSocket_FAILED =
        t.Sharing_Handle_FAILED =
        t.Audio_Mute =
        t.Sharing_Dec_WASM_FAILED =
        t.Video_Enc_Handle_FAILED =
        t.Video_Enc_WASM_FAILED =
        t.Video_Dec_WebSocket_FAILED =
        t.Video_Dec_Handle_FAILED =
        t.Video_Dec_WASM_FAILED =
        t.Audio_Enc_Handle_FAILED =
        t.Audio_Enc_WASM_FAILED =
        t.Audio_Dec_WebSocket_FAILED =
        t.Audio_Dec_Handle_FAILED =
        t.Audio_Dec_WASM_FAILED =
        t.CURRENT_SSRC_TIME =
        t.AES_GCM_IV_CALLBACK_FROM_WASM =
        t.AES_GCM_IV_TO_WASM =
        t.SHARING_GET_IMAGE_DATA_WRONG =
        t.SHARING_RENDER_MONITOR_LOG =
        t.Sharing_Width_And_Height_Info =
        t.VIDEO_RENDER_MONITOR_LOG =
        t.VIDEO_RESOLUTION_UPDATE =
        t.AUDIO_MONITOR_LOG =
        t.WASMPTR =
        t.THREAD_ENCODE_BUFFER =
        t.AUDIO_ENCODED_DATA =
        t.VIDEO_DATA_DROP_RATIO =
        t.VIDEO_DROP_RATIO_FROM_WCL =
        t.VIDEO_ENCODED_DATA =
        t.SHARING_DECODE_MESSAGE =
        t.MOUSE_DATA_VIDEO_MODE =
        t.SHARING_DATA_VIDEO_MODE =
        t.WCL_TROUBLESHOOTING_INFO =
        t.DELTA_S =
        t.DELTA_C =
        t.DELTA_D =
        t.APP_TROUBLESHOOTING_INFO =
        t.DOWNLOAD_WASM_FROM_MAIN_THREAD =
        t.WORKER_MAIN_VIDEO_DECODE_RINGBUFFER_TICK =
          void 0),
      (t.CURRENT_DECODE_VIDEO_QUALITY =
        t.sdkIvTypeKeyEnum =
        t.VIDEO_QOS_DATA =
        t.AUDIO_QOS_DATA =
        t.RWG_WCL_PDU_QOS_DATA_VIDEO =
        t.RWG_WCL_PDU_QOS_DATA =
        t.DATA_DIRECTION_FROM_SEND =
        t.DATA_DIRECTION_FROM_RECEIVE =
        t.HAVE_WATERMARK =
        t.HAVE_NO_WATERMARK =
        t.SET_INTERVAL_MODE =
        t.RQUEST_ANIMATION_MODE =
        t.MEDIA_VIDEO_REPORT_RTT =
        t.MEDIA_VIDEO_REPORT_DROP_RATIO =
        t.FIRST_SHARING_FRAME_FOR_MOBILE =
        t.UNSUPPORTED_VIDEO_FORMAT =
        t.UNSUPPORTED_SHARING_FORMAT =
        t.SHARING_CAPTURE_FRAME_COUNT_STATISTIC =
        t.VIDEO_CAPTURE_FRAME_COUNT_STATISTIC =
        t.VIDEO_CAPTURER_RESOLUTION_CHANGE =
        t.SHARING_FIRST_DECODE_FRAME_RECEIVED_SSRC =
        t.SHARING_FIRST_DECODE_FRAME_RECEIVED =
        t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT_FROM_WORKER =
        t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT_FROM_WORKER =
        t.PUBSUB_EVT =
        t.WS_CONF_AB_TOKEN_RES =
        t.WS_CONF_AB_TOKEN_REQ =
        t.EVT_TYPE_WS_VIDEO_DATACHANNEL_ANSWER =
        t.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT =
        t.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT =
        t.ZOOM_CONNECTION_VIDEO_OFFER_EVT =
        t.VIDEO_ENCODE_DATA_FROM_WORKER =
        t.AUDIO_DATA_FROM_WORKER =
        t.VIDEO_DATA_FROM_WORKER =
        t.SHARING_PARAM_INFO_FROM_SOCKET =
        t.AUDIO_ILLEGAL =
        t.AUDIO_REMOVE =
        t.AUDIO_START =
        t.AUDIO_STOP =
        t.VIDEO_VB_SETTING_PARA_ERROR =
        t.MASK_SETTING_PARA_ERROR =
        t.WEBGL_LOST_IN_MULTI_VIEW =
        t.WCL_SIP_REJECT_INVITE =
        t.WCL_AUDIO_BRIDGE_RECONNECT_END =
        t.WCL_AUDIO_BRIDGE_RECONNECT_START =
        t.SHARING_DESKTOP_STREAM_HAVE_NO_AUDIO =
        t.WCL_SIP_WEBSOCKET_CONNECT_ERROR =
        t.WCL_SIP_WEBSOCKET_DISCONNECTED =
          void 0);
    t.START_MEDIA = 0;
    t.ADD_RENDER_VIDEO = 1;
    t.STOP_RENDER_VIDEO = 2;
    t.START_CAPTURE_VIDEO = 3;
    t.STOP_CAPTURE_VIDEO = 4;
    t.ADD_RENDER_AUDIO = 5;
    t.STOP_RENDER_AUDIO = 6;
    t.UNMUTE_AUDIO = 7;
    t.MUTE_AUDIO = 8;
    t.CHANGE_FRAME_RATE = 9;
    t.CHANGE_VIDEO_RESOLUTION = 10;
    t.CHANGE_AUDIO_SPEAKER = 11;
    t.CHANGE_VIDEO_CAPTURE_DEVICE = 12;
    t.CHANGE_CURRENT_ACTIVE_SSRC = 13;
    t.REMOVE_AUDIO_CAPTURE = 14;
    t.LEAVE_MEETING = 15;
    t.MEETING_FAIL_OVER = 16;
    t.END_MEDIA = 17;
    t.CHANGE_AUDIO_MIC = 18;
    t.WEBRTC_RESTART = 19;
    t.REMOVE_RENDER_AUDIO = 20;
    t.LEAVE_COMPUTER_AUDIO = 21;
    t.JOIN_COMPUTER_AUDIO = 22;
    t.START_SHARING = 23;
    t.STOP_SHARING = 24;
    t.SWITCH_CANVAS_FOR_VIDEO_CAPTURE = 25;
    t.START_REMOTE_CONTROL = 26;
    t.UPDATE_REMOTE_CONTROL_PROPERTIES = 27;
    t.CANCEL_REMOTE_CONTROL = 28;
    t.UPDATE_SUBSCRIBE_VIDEO = 29;
    t.START_DESKTOP_SHARING = 30;
    t.STOP_DESKTOP_SHARING = 31;
    t.PAUSE_DESKTOP_SHARING = 32;
    t.RESUME_DESKTOP_SHARING = 33;
    t.CHECK_CHROME_SHARING_EXTENSION = 34;
    t.SWITCH_CANVAS_FOR_SHARING_CAPTURE = 35;
    t.CHANGE_CURRENT_SHARING_ACTIVE_SSRC = 36;
    t.COMMAND_SOCKET_MESSAGE_NOTIFY = 40;
    t.RESEND_REMOTE_CONTROL_POSITION_PDU = 41;
    t.AES_GCM_IV_VALUE = 42;
    t.USER_NODE_LIST = 43;
    t.UPDATE_SHARING_DECODE_PARAM = 44;
    t.PAUSE_OR_RESUME_AUDIO_DECODE = 45;
    t.UPDATE_CANVAS_SIZE = 46;
    t.CLEAR_CANVAS = 47;
    t.ZOOM_RENDER = 48;
    t.AUDIO_CC_SELECT_LANGUAGE = 57;
    t.AUIOD_INTERPRETATION_MUTE = 58;
    t.AUDIO_INTERPRETATION_SELECT_LANGUAGE = 59;
    t.AUDIO_INTERPRETATION_LIST_INFO = 60;
    t.AUDIO_INTERPRETATION_ENABLE = 61;
    t.VIDEO_MASK_SETTING = 62;
    t.UPDATE_BG_IMAGE = 63;
    t.UPDATE_MASK_INFO = 64;
    t.FINISH_MASK_SETTING = 65;
    t.START_VIDEO_STREAM_IN_MASK_SETTING_SUCCESS = 66;
    t.VIDEO_ENABLE_DECODE_HW = 70;
    t.VIDEO_ENABLE_ENCODE_HW = 71;
    t.JOIN_DESKTOP_AUDIO = 72;
    t.LEAVE_DESKTOP_AUDIO = 73;
    t.SET_DESKTOP_VOLUME = 74;
    t.MIRROR_MY_VIDEO = 75;
    t.USER_NODE_LIST_IN_MAIN_SESSION = 80;
    t.UPDATE_MEDIA_PARAMS = 81;
    t.SHARING_ADD_REV_CHANNEL_TYPE = 82;
    t.SHARING_REMOVE_REV_CHANNEL_TYPE = 83;
    t.BUILD_MS_CHANNEL_IN_BO = 84;
    t.BUILD_MA_CHANNEL_IN_BO = 85;
    t.ENABLE_SHARE_TO_BO = 86;
    t.SWITCH_WATER_MARK_FLAG = 90;
    t.START_VIDEO_VB_SETTING = 91;
    t.UPDATE_VIDEO_VB_BG_IMAGE = 92;
    t.STOP_VIDEO_VB_SETTING = 93;
    t.START_VIDEO_STREAM_IN_VB_SETTING_SUCCESS = 94;
    t.SWITCH_MASK_AND_VB = 95;
    t.VB_MODEL_PRELOADING_3S = 96;
    t.VB_MODEL_PRELOADING_10S = 97;
    t.VB_MODEL_PRELOADING_OK = 98;
    t.Audio_Dec_WASM_OK = 1;
    t.Audio_Dec_Handle_OK = 2;
    t.Audio_Dec_WebSocket_OK = 3;
    t.Audio_Enc_WASM_OK = 4;
    t.Audio_Enc_Handle_OK = 5;
    t.Video_Dec_WASM_OK = 7;
    t.Video_Dec_Handle_OK = 8;
    t.Video_Dec_WebSocket_OK = 9;
    t.Video_Enc_WASM_OK = 10;
    t.Video_Enc_Handle_OK = 11;
    t.Sharing_Dec_WASM_OK = 12;
    t.Sharing_Dec_PICTURE = 13;
    t.AUDIO_DELAY = 14;
    t.Sharing_Dec_WebSocket_OK = 15;
    t.Sharing_Handle_OK = 16;
    t.Sharing_Data = 17;
    t.DECODE_MESSAGE = 18;
    t.Video_Enc_WebSocket_OK = 19;
    t.Video_Capture_Tick = 20;
    t.MONITOR_MESSAGE = 21;
    t.WORKER_MAIN_VIDEO_ENCODE_RINGBUFFER_TICK = 22;
    t.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK = 23;
    t.WORKER_MAIN_VIDEO_DECODE_RINGBUFFER_TICK = 24;
    t.DOWNLOAD_WASM_FROM_MAIN_THREAD = 30;
    t.APP_TROUBLESHOOTING_INFO = 31;
    t.DELTA_D = 32;
    t.DELTA_C = 33;
    t.DELTA_S = 34;
    t.WCL_TROUBLESHOOTING_INFO = 35;
    t.SHARING_DATA_VIDEO_MODE = 36;
    t.MOUSE_DATA_VIDEO_MODE = 37;
    t.SHARING_DECODE_MESSAGE = 38;
    t.VIDEO_ENCODED_DATA = 39;
    t.VIDEO_DROP_RATIO_FROM_WCL = 40;
    t.VIDEO_DATA_DROP_RATIO = 41;
    t.AUDIO_ENCODED_DATA = 42;
    t.THREAD_ENCODE_BUFFER = 46;
    t.WASMPTR = 47;
    t.AUDIO_MONITOR_LOG = 48;
    t.VIDEO_RESOLUTION_UPDATE = 50;
    t.VIDEO_RENDER_MONITOR_LOG = 51;
    t.Sharing_Width_And_Height_Info = 52;
    t.SHARING_RENDER_MONITOR_LOG = 53;
    t.SHARING_GET_IMAGE_DATA_WRONG = 54;
    t.AES_GCM_IV_TO_WASM = 55;
    t.AES_GCM_IV_CALLBACK_FROM_WASM = 56;
    t.CURRENT_SSRC_TIME = 57;
    t.Audio_Dec_WASM_FAILED = -1;
    t.Audio_Dec_Handle_FAILED = -2;
    t.Audio_Dec_WebSocket_FAILED = -3;
    t.Audio_Enc_WASM_FAILED = -4;
    t.Audio_Enc_Handle_FAILED = -5;
    t.Video_Dec_WASM_FAILED = -7;
    t.Video_Dec_Handle_FAILED = -8;
    t.Video_Dec_WebSocket_FAILED = -9;
    t.Video_Enc_WASM_FAILED = -10;
    t.Video_Enc_Handle_FAILED = -11;
    t.Sharing_Dec_WASM_FAILED = -12;
    t.Audio_Mute = -13;
    t.Sharing_Handle_FAILED = -14;
    t.Sharing_Dec_WebSocket_FAILED = -15;
    t.Video_Enc_WebSocket_FAILED = -16;
    t.MULTIVIEW_WEBGL_CONTEXT_LOST = -26;
    t.INIT_SUCCESS = 1;
    t.INIT_SUCCESS_VIDEO = 1.1;
    t.INIT_SUCCESS_AUDIO = 1.2;
    t.INIT_SUCCESS_SHARING = 1.3;
    t.USER_GRANT_CAPTURE_AUDIO = 2;
    t.CURRENT_VIDEO_RESOLUTION = 3;
    t.SHARING_DEC_THREAD_OK = 4;
    t.SHARING_DATA = 5;
    t.SHARING_PARA = 6;
    t.SHARING_MORE_INFO = 6.1;
    t.VIDEO_DECODE_MAX_SIZE = 7;
    t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT = 8;
    t.START_VIDEO_CAPTURE_SUCCESS = 9;
    t.STOP_VIDEO_CAPTURE_SUCCESS = 10;
    t.START_REMOTE_CONTROL_SUCCESS = 11;
    t.CANCEL_REMOTE_CONTROL_SUCCESS = 12;
    t.REMOTE_CONTROL_COPIED_TEXT_NOTIFY = 13;
    t.MONITOR_LOG = 14;
    t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT = 15;
    t.DESKTOP_SHARING_CAPTURE_SUCCESS = 16;
    t.CHECK_CHROME_SHARING_EXTENSION_RESPONSE = 17;
    t.SHARING_DECODE_MAX_SIZE = 18;
    t.REQUEST_AUDIO_BRIDGE_TOKEN = 19;
    t.SEND_MESSAGE_TO_RWG = 20;
    t.AES_GCM_IV_RESPONSE = 21;
    t.WCL_SIP_CREATE_SUCCESS = 22;
    t.SHARING_DESKTOP_STREAM_HAVE_AUDIO = 23;
    t.FIRST_IOS_FRAME = 24;
    t.JOIN_COMPUTER_AUDIO_COMPLETE = 24;
    t.JOIN_DESKTOP_AUDIO_COMPLETE = 25;
    t.LEAVE_COMPUTER_AUDIO_COMPLETE = 26;
    t.LEAVE_DESKTOP_AUDIO_COMPLETE = 27;
    t.INIT_FAILED = -1;
    t.INIT_FAILED_VIDEO = -1.1;
    t.INIT_FAILED_AUDIO = -1.2;
    t.INIT_FAILED_SHARING = -1.3;
    t.USER_FORBIDDED_CAPTURE_AUDIO = -2;
    t.AUDIO_WEBSOCKET_BROKEN = -3;
    t.VIDEO_WEBSOCKET_BROKEN = -4;
    t.SHARING_DEC_THREAD_FAILED = -5;
    t.AUDIO_ZERO_DATA = -6;
    t.AUDIO_CTX_SAMPLERATE = -7;
    t.USER_FORBIDDED_CAPTURE_VIDEO = -8;
    t.USER_CAMERA_IS_TAKEN_BY_OTHER_PROGRAMS = -9;
    t.STOP_VIDEO_CAPTURE_FAILED = -10;
    t.START_REMOTE_CONTROL_FAILED = -11;
    t.CANCEL_REMOTE_CONTROL_FAILED = -12;
    t.REMOTE_CONTROL_PASTE_TEXT_LENGTH_OVERFLOW = -14;
    t.USER_STOP_DESKTOP_SHARING = -15;
    t.USER_CANCEL_PERMISSION_REQUEST = -16;
    t.DESKTOP_SHARING_CHROME_EXTENSION_UNINSTALLED = -17;
    t.DESKTOP_SHARING_PERMISSION_DENIED = -18;
    t.DESKTOP_SHARING_TIME_OUT = -19;
    t.DESKTOP_SHARING_ERROR = -20;
    t.AUDIO_SPEAKER_SET_ERROR = -21;
    t.DESKTOP_SHARING_SYSTEM_ERROR = -22;
    t.AUDIO_CLIPPING = -23;
    t.AUDIO_AUTO_PLAY_FAILED = -24;
    t.WCL_SIP_HUNGUP_FAILED = -25;
    t.WCL_SIP_WEBSOCKET_DISCONNECTED = -26;
    t.WCL_SIP_WEBSOCKET_CONNECT_ERROR = -28;
    t.SHARING_DESKTOP_STREAM_HAVE_NO_AUDIO = -27;
    t.WCL_AUDIO_BRIDGE_RECONNECT_START = -29;
    t.WCL_AUDIO_BRIDGE_RECONNECT_END = -31;
    t.WCL_SIP_REJECT_INVITE = -30;
    t.WEBGL_LOST_IN_MULTI_VIEW = -32;
    t.MASK_SETTING_PARA_ERROR = -33;
    t.VIDEO_VB_SETTING_PARA_ERROR = -34;
    t.AUDIO_STOP = 0;
    t.AUDIO_START = 1;
    t.AUDIO_REMOVE = 2;
    t.AUDIO_ILLEGAL = -1;
    t.SHARING_PARAM_INFO_FROM_SOCKET = "SHARING_PARAM_INFO_FROM_SOCKET";
    t.VIDEO_DATA_FROM_WORKER = "VIDEO_DATA_FROM_WORKER";
    t.AUDIO_DATA_FROM_WORKER = "AUDIO_DATA_FROM_WORKER";
    t.VIDEO_ENCODE_DATA_FROM_WORKER = "VIDEO_ENCODE_DATA_FROM_WORKER";
    t.ZOOM_CONNECTION_VIDEO_OFFER_EVT = 24321;
    t.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT = 24322;
    t.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT = 24322;
    t.EVT_TYPE_WS_VIDEO_DATACHANNEL_ANSWER = 24322;
    t.WS_CONF_AB_TOKEN_REQ = 4300;
    t.WS_CONF_AB_TOKEN_RES = 4299;
    t.PUBSUB_EVT = {
      ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT:
        "ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT",
      ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT:
        "ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT",
      END_MEDIA: "END_MEDIA",
      DESTROY: "DESTROY",
      VIDEO_DATACHANNEL_SPEED: "VIDEO_DATACHANNEL_SPEED",
      DC_COMING_MESSAGE: "DC_COMING_MESSAGE",
      AUDIO_BRIDGE_WS_TOKEN: "AUDIO_BRIDGE_WS_TOKEN",
    };
    t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT_FROM_WORKER = 67;
    t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT_FROM_WORKER = 68;
    t.SHARING_FIRST_DECODE_FRAME_RECEIVED = 69;
    t.SHARING_FIRST_DECODE_FRAME_RECEIVED_SSRC = 70;
    t.VIDEO_CAPTURER_RESOLUTION_CHANGE = 71;
    t.VIDEO_CAPTURE_FRAME_COUNT_STATISTIC = 72;
    t.SHARING_CAPTURE_FRAME_COUNT_STATISTIC = 73;
    t.UNSUPPORTED_SHARING_FORMAT = 75;
    t.UNSUPPORTED_VIDEO_FORMAT = 76;
    t.FIRST_SHARING_FRAME_FOR_MOBILE = 78;
    t.MEDIA_VIDEO_REPORT_DROP_RATIO = 100;
    t.MEDIA_VIDEO_REPORT_RTT = 101;
    t.RQUEST_ANIMATION_MODE = 0;
    t.SET_INTERVAL_MODE = 1;
    t.HAVE_NO_WATERMARK = !1;
    t.HAVE_WATERMARK = !0;
    t.DATA_DIRECTION_FROM_RECEIVE = 0;
    t.DATA_DIRECTION_FROM_SEND = 1;
    t.RWG_WCL_PDU_QOS_DATA = 108;
    t.RWG_WCL_PDU_QOS_DATA_VIDEO = 104;
    t.AUDIO_QOS_DATA = "AUDIO_QOS_DATA";
    t.VIDEO_QOS_DATA = "VIDEO_QOS_DATA";
    t.sdkIvTypeKeyEnum = {
      VIDEO_ENCODE: "0",
      VIDEO_DECODE: "1",
      AUDIO_ENCODE: "2",
      AUDIO_DECODE: "3",
      SHARING_ENCODE: "4",
      SHARING_DECODE: "5",
    };
    t.CURRENT_DECODE_VIDEO_QUALITY = 66.5;
  },
  function (e, t, n) {
    e.exports = n(73);
  },
  function (e, t, n) {
    n(74);
    var r = n(0).Object;
    e.exports = function (e, t) {
      return r.getOwnPropertyDescriptor(e, t);
    };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(75).f;
    n(45)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return i(r(e), t);
      };
    });
  },
  function (e, t, n) {
    var r = n(64),
      i = n(21),
      _ = n(14),
      a = n(43),
      o = n(10),
      s = n(44),
      E = Object.getOwnPropertyDescriptor;
    t.f = n(5)
      ? E
      : function (e, t) {
          if (((e = _(e)), (t = a(t, !0)), s))
            try {
              return E(e, t);
            } catch (e) {}
          if (o(e, t)) return i(!r.f.call(e, t), e[t]);
        };
  },
  function (e, t, n) {
    n(77);
    var r = n(0).Object;
    e.exports = function (e, t, n) {
      return r.defineProperty(e, t, n);
    };
  },
  function (e, t, n) {
    var r = n(3);
    r(r.S + r.F * !n(5), "Object", { defineProperty: n(6).f });
  },
  function (e, t, n) {
    n(79), (e.exports = n(0).Object.keys);
  },
  function (e, t, n) {
    var r = n(18),
      i = n(39);
    n(45)("keys", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  function (e, t, n) {
    var r = n(10),
      i = n(14),
      _ = n(81)(!1),
      a = n(31)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        o = i(e),
        s = 0,
        E = [];
      for (n in o) n != a && r(o, n) && E.push(n);
      for (; t.length > s; ) r(o, (n = t[s++])) && (~_(E, n) || E.push(n));
      return E;
    };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(22),
      _ = n(82);
    e.exports = function (e) {
      return function (t, n, a) {
        var o,
          s = r(t),
          E = i(s.length),
          u = _(a, E);
        if (e && n != n) {
          for (; E > u; ) if ((o = s[u++]) != o) return !0;
        } else
          for (; E > u; u++)
            if ((e || u in s) && s[u] === n) return e || u || 0;
        return !e && -1;
      };
    };
  },
  function (e, t, n) {
    var r = n(30),
      i = Math.max,
      _ = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : _(e, t);
    };
  },
  function (e, t, n) {
    var r =
        (function () {
          return this;
        })() || Function("return this")(),
      i =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      _ = i && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (e.exports = n(84)), i))
      r.regeneratorRuntime = _;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (e) {
        r.regeneratorRuntime = void 0;
      }
  },
  function (e, t) {
    !(function (t) {
      "use strict";
      var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        _ = "function" == typeof Symbol ? Symbol : {},
        a = _.iterator || "@@iterator",
        o = _.asyncIterator || "@@asyncIterator",
        s = _.toStringTag || "@@toStringTag",
        E = "object" == typeof e,
        u = t.regeneratorRuntime;
      if (u) E && (e.exports = u);
      else {
        (u = t.regeneratorRuntime = E ? e.exports : {}).wrap = S;
        var c = "suspendedStart",
          A = "suspendedYield",
          l = "executing",
          f = "completed",
          O = {},
          T = {};
        T[a] = function () {
          return this;
        };
        var I = Object.getPrototypeOf,
          h = I && I(I(L([])));
        h && h !== r && i.call(h, a) && (T = h);
        var D = (p.prototype = d.prototype = Object.create(T));
        (N.prototype = D.constructor = p),
          (p.constructor = N),
          (p[s] = N.displayName = "GeneratorFunction"),
          (u.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === N || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (u.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s in e || (e[s] = "GeneratorFunction")),
              (e.prototype = Object.create(D)),
              e
            );
          }),
          (u.awrap = function (e) {
            return { __await: e };
          }),
          C(v.prototype),
          (v.prototype[o] = function () {
            return this;
          }),
          (u.AsyncIterator = v),
          (u.async = function (e, t, n, r) {
            var i = new v(S(e, t, n, r));
            return u.isGeneratorFunction(t)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          C(D),
          (D[s] = "Generator"),
          (D[a] = function () {
            return this;
          }),
          (D.toString = function () {
            return "[object Generator]";
          }),
          (u.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (u.values = L),
          (y.prototype = {
            constructor: y,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(m),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    i.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(r, i) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  i && ((t.method = "next"), (t.arg = n)),
                  !!i
                );
              }
              for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
                var a = this.tryEntries[_],
                  o = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var s = i.call(a, "catchLoc"),
                    E = i.call(a, "finallyLoc");
                  if (s && E) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!E)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var _ = r;
                  break;
                }
              }
              _ &&
                ("break" === e || "continue" === e) &&
                _.tryLoc <= t &&
                t <= _.finallyLoc &&
                (_ = null);
              var a = _ ? _.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                _
                  ? ((this.method = "next"), (this.next = _.finallyLoc), O)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                O
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), m(n), O;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    m(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: L(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                O
              );
            },
          });
      }
      function S(e, t, n, r) {
        var i = t && t.prototype instanceof d ? t : d,
          _ = Object.create(i.prototype),
          a = new y(r || []);
        return (
          (_._invoke = (function (e, t, n) {
            var r = c;
            return function (i, _) {
              if (r === l) throw new Error("Generator is already running");
              if (r === f) {
                if ("throw" === i) throw _;
                return U();
              }
              for (n.method = i, n.arg = _; ; ) {
                var a = n.delegate;
                if (a) {
                  var o = M(a, n);
                  if (o) {
                    if (o === O) continue;
                    return o;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === c) throw ((r = f), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = l;
                var s = R(e, t, n);
                if ("normal" === s.type) {
                  if (((r = n.done ? f : A), s.arg === O)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((r = f), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          })(e, n, a)),
          _
        );
      }
      function R(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function d() {}
      function N() {}
      function p() {}
      function C(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function v(e) {
        var t;
        this._invoke = function (n, r) {
          function _() {
            return new Promise(function (t, _) {
              !(function t(n, r, _, a) {
                var o = R(e[n], e, r);
                if ("throw" !== o.type) {
                  var s = o.arg,
                    E = s.value;
                  return E && "object" == typeof E && i.call(E, "__await")
                    ? Promise.resolve(E.__await).then(
                        function (e) {
                          t("next", e, _, a);
                        },
                        function (e) {
                          t("throw", e, _, a);
                        }
                      )
                    : Promise.resolve(E).then(
                        function (e) {
                          (s.value = e), _(s);
                        },
                        function (e) {
                          return t("throw", e, _, a);
                        }
                      );
                }
                a(o.arg);
              })(n, r, t, _);
            });
          }
          return (t = t ? t.then(_, _) : _());
        };
      }
      function M(e, t) {
        var r = e.iterator[t.method];
        if (r === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = n),
              M(e, t),
              "throw" === t.method)
            )
              return O;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return O;
        }
        var i = R(r, e.iterator, t.arg);
        if ("throw" === i.type)
          return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), O;
        var _ = i.arg;
        return _
          ? _.done
            ? ((t[e.resultName] = _.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = n)),
              (t.delegate = null),
              O)
            : _
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            O);
      }
      function b(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function m(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function y(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(b, this),
          this.reset(!0);
      }
      function L(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              _ = function t() {
                for (; ++r < e.length; )
                  if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (_.next = _);
          }
        }
        return { next: U };
      }
      function U() {
        return { value: n, done: !0 };
      }
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(87),
      i = n(51),
      _ = n(13),
      a = n(14);
    (e.exports = n(34)(
      Array,
      "Array",
      function (e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (_.Arguments = _.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t, n) {
    e.exports = n(9);
  },
  function (e, t, n) {
    "use strict";
    var r = n(52),
      i = n(21),
      _ = n(20),
      a = {};
    n(9)(a, n(2)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(a, { next: i(1, n) })), _(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(6),
      i = n(8),
      _ = n(39);
    e.exports = n(5)
      ? Object.defineProperties
      : function (e, t) {
          i(e);
          for (var n, a = _(t), o = a.length, s = 0; o > s; )
            r.f(e, (n = a[s++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(18),
      _ = n(31)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, _)
            ? e[_]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function (e, t, n) {
    var r = n(30),
      i = n(28);
    e.exports = function (e) {
      return function (t, n) {
        var _,
          a,
          o = String(i(t)),
          s = r(n),
          E = o.length;
        return s < 0 || s >= E
          ? e
            ? ""
            : void 0
          : (_ = o.charCodeAt(s)) < 55296 ||
            _ > 56319 ||
            s + 1 === E ||
            (a = o.charCodeAt(s + 1)) < 56320 ||
            a > 57343
          ? e
            ? o.charAt(s)
            : _
          : e
          ? o.slice(s, s + 2)
          : a - 56320 + ((_ - 55296) << 10) + 65536;
      };
    };
  },
  ,
  function (e, t, n) {
    n(56), n(19), n(25), n(95), n(99), n(100), (e.exports = n(0).Promise);
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      _,
      a,
      o = n(32),
      s = n(1),
      E = n(7),
      u = n(23),
      c = n(3),
      A = n(4),
      l = n(16),
      f = n(35),
      O = n(17),
      T = n(57),
      I = n(58).set,
      h = n(97)(),
      D = n(36),
      S = n(59),
      R = n(98),
      d = n(60),
      N = s.TypeError,
      p = s.process,
      C = p && p.versions,
      v = (C && C.v8) || "",
      M = s.Promise,
      b = "process" == u(p),
      m = function () {},
      y = (i = D.f),
      L = !!(function () {
        try {
          var e = M.resolve(1),
            t = ((e.constructor = {})[n(2)("species")] = function (e) {
              e(m, m);
            });
          return (
            (b || "function" == typeof PromiseRejectionEvent) &&
            e.then(m) instanceof t &&
            0 !== v.indexOf("6.6") &&
            -1 === R.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      U = function (e) {
        var t;
        return !(!A(e) || "function" != typeof (t = e.then)) && t;
      },
      g = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          h(function () {
            for (
              var r = e._v,
                i = 1 == e._s,
                _ = 0,
                a = function (t) {
                  var n,
                    _,
                    a,
                    o = i ? t.ok : t.fail,
                    s = t.resolve,
                    E = t.reject,
                    u = t.domain;
                  try {
                    o
                      ? (i || (2 == e._h && V(e), (e._h = 1)),
                        !0 === o
                          ? (n = r)
                          : (u && u.enter(),
                            (n = o(r)),
                            u && (u.exit(), (a = !0))),
                        n === t.promise
                          ? E(N("Promise-chain cycle"))
                          : (_ = U(n))
                          ? _.call(n, s, E)
                          : s(n))
                      : E(r);
                  } catch (e) {
                    u && !a && u.exit(), E(e);
                  }
                };
              n.length > _;

            )
              a(n[_++]);
            (e._c = []), (e._n = !1), t && !e._h && P(e);
          });
        }
      },
      P = function (e) {
        I.call(s, function () {
          var t,
            n,
            r,
            i = e._v,
            _ = H(e);
          if (
            (_ &&
              ((t = S(function () {
                b
                  ? p.emit("unhandledRejection", i, e)
                  : (n = s.onunhandledrejection)
                  ? n({ promise: e, reason: i })
                  : (r = s.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", i);
              })),
              (e._h = b || H(e) ? 2 : 1)),
            (e._a = void 0),
            _ && t.e)
          )
            throw t.v;
        });
      },
      H = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      V = function (e) {
        I.call(s, function () {
          var t;
          b
            ? p.emit("rejectionHandled", e)
            : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      G = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          g(t, !0));
      },
      w = function (e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw N("Promise can't be resolved itself");
            (t = U(e))
              ? h(function () {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, E(w, r, 1), E(G, r, 1));
                  } catch (e) {
                    G.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), g(n, !1));
          } catch (e) {
            G.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    L ||
      ((M = function (e) {
        f(this, M, "Promise", "_h"), l(e), r.call(this);
        try {
          e(E(w, this, 1), E(G, this, 1));
        } catch (e) {
          G.call(this, e);
        }
      }),
      ((r = function (e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(37)(M.prototype, {
        then: function (e, t) {
          var n = y(T(this, M));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = b ? p.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && g(this, !1),
            n.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (_ = function () {
        var e = new r();
        (this.promise = e),
          (this.resolve = E(w, e, 1)),
          (this.reject = E(G, e, 1));
      }),
      (D.f = y =
        function (e) {
          return e === M || e === a ? new _(e) : i(e);
        })),
      c(c.G + c.W + c.F * !L, { Promise: M }),
      n(20)(M, "Promise"),
      n(61)("Promise"),
      (a = n(0).Promise),
      c(c.S + c.F * !L, "Promise", {
        reject: function (e) {
          var t = y(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      c(c.S + c.F * (o || !L), "Promise", {
        resolve: function (e) {
          return d(o && this === a ? M : this, e);
        },
      }),
      c(
        c.S +
          c.F *
            !(
              L &&
              n(68)(function (e) {
                M.all(e).catch(m);
              })
            ),
        "Promise",
        {
          all: function (e) {
            var t = this,
              n = y(t),
              r = n.resolve,
              i = n.reject,
              _ = S(function () {
                var n = [],
                  _ = 0,
                  a = 1;
                O(e, !1, function (e) {
                  var o = _++,
                    s = !1;
                  n.push(void 0),
                    a++,
                    t.resolve(e).then(function (e) {
                      s || ((s = !0), (n[o] = e), --a || r(n));
                    }, i);
                }),
                  --a || r(n);
              });
            return _.e && i(_.v), n.promise;
          },
          race: function (e) {
            var t = this,
              n = y(t),
              r = n.reject,
              i = S(function () {
                O(e, !1, function (e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          },
        }
      );
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(58).set,
      _ = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      o = r.Promise,
      s = "process" == n(15)(a);
    e.exports = function () {
      var e,
        t,
        n,
        E = function () {
          var r, i;
          for (s && (r = a.domain) && r.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (s)
        n = function () {
          a.nextTick(E);
        };
      else if (!_ || (r.navigator && r.navigator.standalone))
        if (o && o.resolve) {
          var u = o.resolve(void 0);
          n = function () {
            u.then(E);
          };
        } else
          n = function () {
            i.call(r, E);
          };
      else {
        var c = !0,
          A = document.createTextNode("");
        new _(E).observe(A, { characterData: !0 }),
          (n = function () {
            A.data = c = !c;
          });
      }
      return function (r) {
        var i = { fn: r, next: void 0 };
        t && (t.next = i), e || ((e = i), n()), (t = i);
      };
    };
  },
  function (e, t, n) {
    var r = n(1).navigator;
    e.exports = (r && r.userAgent) || "";
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = n(0),
      _ = n(1),
      a = n(57),
      o = n(60);
    r(r.P + r.R, "Promise", {
      finally: function (e) {
        var t = a(this, i.Promise || _.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function (n) {
                return o(t, e()).then(function () {
                  return n;
                });
              }
            : e,
          n
            ? function (n) {
                return o(t, e()).then(function () {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = n(36),
      _ = n(59);
    r(r.S, "Promise", {
      try: function (e) {
        var t = i.f(this),
          n = _(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
      },
    });
  },
  function (e, t, n) {
    n(56), n(19), n(25), n(102), n(109), n(112), n(114), (e.exports = n(0).Map);
  },
  function (e, t, n) {
    "use strict";
    var r = n(103),
      i = n(63);
    e.exports = n(104)(
      "Map",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function (e) {
          var t = r.getEntry(i(this, "Map"), e);
          return t && t.v;
        },
        set: function (e, t) {
          return r.def(i(this, "Map"), 0 === e ? 0 : e, t);
        },
      },
      r,
      !0
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(6).f,
      i = n(52),
      _ = n(37),
      a = n(7),
      o = n(35),
      s = n(17),
      E = n(34),
      u = n(51),
      c = n(61),
      A = n(5),
      l = n(62).fastKey,
      f = n(63),
      O = A ? "_s" : "size",
      T = function (e, t) {
        var n,
          r = l(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
      };
    e.exports = {
      getConstructor: function (e, t, n, E) {
        var u = e(function (e, r) {
          o(e, u, t, "_i"),
            (e._t = t),
            (e._i = i(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[O] = 0),
            null != r && s(r, n, e[E], e);
        });
        return (
          _(u.prototype, {
            clear: function () {
              for (var e = f(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[O] = 0);
            },
            delete: function (e) {
              var n = f(this, t),
                r = T(n, e);
              if (r) {
                var i = r.n,
                  _ = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  _ && (_.n = i),
                  i && (i.p = _),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = _),
                  n[O]--;
              }
              return !!r;
            },
            forEach: function (e) {
              f(this, t);
              for (
                var n,
                  r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function (e) {
              return !!T(f(this, t), e);
            },
          }),
          A &&
            r(u.prototype, "size", {
              get: function () {
                return f(this, t)[O];
              },
            }),
          u
        );
      },
      def: function (e, t, n) {
        var r,
          i,
          _ = T(e, t);
        return (
          _
            ? (_.v = n)
            : ((e._l = _ =
                {
                  i: (i = l(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
              e._f || (e._f = _),
              r && (r.n = _),
              e[O]++,
              "F" !== i && (e._i[i] = _)),
          e
        );
      },
      getEntry: T,
      setStrong: function (e, t, n) {
        E(
          e,
          t,
          function (e, n) {
            (this._t = f(e, t)), (this._k = n), (this._l = void 0);
          },
          function () {
            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f)
              ? u(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
              : ((this._t = void 0), u(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          c(t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(3),
      _ = n(62),
      a = n(12),
      o = n(9),
      s = n(37),
      E = n(17),
      u = n(35),
      c = n(4),
      A = n(20),
      l = n(6).f,
      f = n(105)(0),
      O = n(5);
    e.exports = function (e, t, n, T, I, h) {
      var D = r[e],
        S = D,
        R = I ? "set" : "add",
        d = S && S.prototype,
        N = {};
      return (
        O &&
        "function" == typeof S &&
        (h ||
          (d.forEach &&
            !a(function () {
              new S().entries().next();
            })))
          ? ((S = t(function (t, n) {
              u(t, S, e, "_c"), (t._c = new D()), null != n && E(n, I, t[R], t);
            })),
            f(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ","
              ),
              function (e) {
                var t = "add" == e || "set" == e;
                e in d &&
                  (!h || "clear" != e) &&
                  o(S.prototype, e, function (n, r) {
                    if ((u(this, S, e), !t && h && !c(n)))
                      return "get" == e && void 0;
                    var i = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : i;
                  });
              }
            ),
            h ||
              l(S.prototype, "size", {
                get: function () {
                  return this._c.size;
                },
              }))
          : ((S = T.getConstructor(t, e, I, R)),
            s(S.prototype, n),
            (_.NEED = !0)),
        A(S, e),
        (N[e] = S),
        i(i.G + i.W + i.F, N),
        h || T.setStrong(S, e, I),
        S
      );
    };
  },
  function (e, t, n) {
    var r = n(7),
      i = n(38),
      _ = n(18),
      a = n(22),
      o = n(106);
    e.exports = function (e, t) {
      var n = 1 == e,
        s = 2 == e,
        E = 3 == e,
        u = 4 == e,
        c = 6 == e,
        A = 5 == e || c,
        l = t || o;
      return function (t, o, f) {
        for (
          var O,
            T,
            I = _(t),
            h = i(I),
            D = r(o, f, 3),
            S = a(h.length),
            R = 0,
            d = n ? l(t, S) : s ? l(t, 0) : void 0;
          S > R;
          R++
        )
          if ((A || R in h) && ((T = D((O = h[R]), R, I)), e))
            if (n) d[R] = T;
            else if (T)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return O;
                case 6:
                  return R;
                case 2:
                  d.push(O);
              }
            else if (u) return !1;
        return c ? -1 : E || u ? u : d;
      };
    };
  },
  function (e, t, n) {
    var r = n(107);
    e.exports = function (e, t) {
      return new (r(e))(t);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(108),
      _ = n(2)("species");
    e.exports = function (e) {
      var t;
      return (
        i(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[_]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function (e, t, n) {
    var r = n(15);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  function (e, t, n) {
    var r = n(3);
    r(r.P + r.R, "Map", { toJSON: n(110)("Map") });
  },
  function (e, t, n) {
    var r = n(23),
      i = n(111);
    e.exports = function (e) {
      return function () {
        if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return i(this);
      };
    };
  },
  function (e, t, n) {
    var r = n(17);
    e.exports = function (e, t) {
      var n = [];
      return r(e, !1, n.push, n, t), n;
    };
  },
  function (e, t, n) {
    n(113)("Map");
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function (e) {
      r(r.S, e, {
        of: function () {
          for (var e = arguments.length, t = new Array(e); e--; )
            t[e] = arguments[e];
          return new this(t);
        },
      });
    };
  },
  function (e, t, n) {
    n(115)("Map");
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = n(16),
      _ = n(7),
      a = n(17);
    e.exports = function (e) {
      r(r.S, e, {
        from: function (e) {
          var t,
            n,
            r,
            o,
            s = arguments[1];
          return (
            i(this),
            (t = void 0 !== s) && i(s),
            null == e
              ? new this()
              : ((n = []),
                t
                  ? ((r = 0),
                    (o = _(s, arguments[2], 2)),
                    a(e, !1, function (e) {
                      n.push(o(e, r++));
                    }))
                  : a(e, !1, n.push, n),
                new this(n))
          );
        },
      });
    };
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.AudioStatus =
        t.MessageEnum =
        t.MAIN_WORKER_COMMAND =
        t.WORKER_TYPE =
        t.workerStartTypeToDevToolWorkerNameEnum =
        t.OS_ENUM =
        t.ConnectionType =
        t.EncodeDecodeEnum =
        t.ZOOM_CONNECTION_TYPE =
          void 0);
    t.ZOOM_CONNECTION_TYPE = {
      ZOOM_CONNECTION_COMMAND: 0,
      ZOOM_CONNECTION_AUDIO: 1,
      ZOOM_CONNECTION_VIDEO: 2,
      ZOOM_CONNECTION_SHARING_JPEG: 3,
      ZOOM_CONNECTION_SHARING_VIDEO: 4,
      ZOOM_CONNECTION_MEDIA_LOG: 5,
      ZOOM_CONNECTION_SHARING_REMOTE_CONTROL: 6,
      ZOOM_CONNECTION_UNKNOW: 7,
    };
    t.EncodeDecodeEnum = { encode: 1, decode: 2 };
    t.ConnectionType = { AUDIO: 1, SHARING: 2, VIDEO: 3 };
    t.OS_ENUM = {
      UNKNOWN: 0,
      WIN: 1,
      MAC: 2,
      PAD: 3,
      MOBILE: 4,
      CALL_IN: 5,
      LINUX: 6,
      WEB: 7,
      CHROME: 8,
    };
    t.workerStartTypeToDevToolWorkerNameEnum = {
      0: "27D10C2BC0312F11BE79BF9AA0668220",
      1: "D5AC365D95ACF72EE1E8D0FED594C0CD",
      2: "AEF36FC5C22CE7AAF5DC05913633EDF7",
      3: "BD3DF97B715748F6B6A5F59271A2D1A0",
      4: "D0AEDC804599C31391A946904C74595F",
      5: "65DEAF0AA73F220ED401B90CFFCDFF23",
    };
    t.WORKER_TYPE = {
      VIDEO_ENCODE: "0",
      VIDEO_DECODE: "1",
      AUDIO_ENCODE: "2",
      AUDIO_DECODE: "3",
      SHARING_ENCODE: "4",
      SHARING_DECODE: "5",
    };
    t.MAIN_WORKER_COMMAND = { SET_USER_NODE_LIST: "SET_USER_NODE_LIST" };
    t.MessageEnum = {
      CLOSE: "CLOSE",
      CLOSE_SUCCESS: "CLOSE_SUCCESS",
      CLOSE_FAIL: "CLOSE_FAIL",
      IS_CLOSED: "IS_CLOSED",
      START_SHARING_IE: "START_SHARING_IE",
      START_SHARING_IE_CALLBACK: "START_SHARING_IE_CALLBACK",
      SHARING_PARAM_DATA_IE_CALLBACK: "SHARING_PARAM_DATA_IE_CALLBACK",
      SHARING_MORE_INFO_DATA_IE_CALLBACK: "SHARING_MORE_INFO_DATA_IE_CALLBACK",
      SHARING_BINARY_CURSOR_DATA_AND_POS_INDICATION_TYPE:
        "SHARING_BINARY_CURSOR_DATA_AND_POS_INDICATION_TYPE",
      SHARING_BINARY_CONTENT_DATA_AND_POS_INDICATION_TYPE:
        "SHARING_BINARY_CONTENT_DATA_AND_POS_INDICATION_TYPE",
    };
    t.AudioStatus = {
      ComputerAudio_Null: 0,
      ComputerAudio_Connecting: 1,
      ComputerAudio_Connected: 2,
      DesktopAudio_Null: 0,
      DesktopAudio_Connecting: 1,
      DesktopAudio_Connected: 2,
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(11);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.VideoDecodeOBJXBuffer = t.ConsumeRB = t.RingBuffer = void 0);
    var i = r(n(41)),
      _ = r(n(42)),
      a = 1500,
      o = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            _ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (0, i.default)(this, e),
            (this._BYTES_PER_ELEMENT = n),
            (this.capacity = (t.byteLength - 8) / n),
            (this.usableCapacity = this.capacity - 1),
            (this.buf = t),
            (this.write_ptr = new Uint32Array(this.buf, 0, 1)),
            (this.read_ptr = new Uint32Array(this.buf, 4, 1)),
            (this.storageUint8sByteOffset = 8),
            (this.storageUint8s = new Uint8Array(
              this.buf,
              this.storageUint8sByteOffset
            )),
            (this.byteLength = t.byteLength),
            (this.label = r),
            (this.usingOneElementBuffer = _),
            _ && (this.oneElementBuffer = new ArrayBuffer(n));
        }
        return (
          (0, _.default)(e, null, [
            {
              key: "getStorageForCapacity",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 30,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : a;
                return new SharedArrayBuffer(8 + (e + 1) * t);
              },
            },
          ]),
          (0, _.default)(e, [
            {
              key: "enqueue",
              value: function (e) {
                return this.push(e);
              },
            },
            {
              key: "push",
              value: function (e) {
                return e instanceof Array ? this._pushArray(e) : this._push(e);
              },
            },
            {
              key: "_pushArray",
              value: function (e) {
                var t = this,
                  n = Atomics.load(this.read_ptr, 0),
                  r = Atomics.load(this.write_ptr, 0);
                if ((r + 1) % this.capacity == n) return 0;
                var i = 0;
                e.forEach(function (e) {
                  t.storageUint8s.set(e, r * t._BYTES_PER_ELEMENT + 8 + 4 + i),
                    (i += e.byteLength);
                }),
                  (new Uint32Array(
                    this.buf,
                    r * this._BYTES_PER_ELEMENT + 8,
                    1
                  )[0] = i);
                var _ = (r + 1) % this.capacity;
                return Atomics.store(this.write_ptr, 0, _), { rd: n, wr: _ };
              },
            },
            {
              key: "_push",
              value: function (e) {
                var t = Atomics.load(this.read_ptr, 0),
                  n = Atomics.load(this.write_ptr, 0);
                if ((n + 1) % this.capacity == t) return 0;
                this.storageUint8s.set(
                  e,
                  n * this._BYTES_PER_ELEMENT + 8 + 4,
                  e.byteLength
                ),
                  (new Uint32Array(
                    this.buf,
                    n * this._BYTES_PER_ELEMENT + 8,
                    1
                  )[0] = e.byteLength);
                var r = (n + 1) % this.capacity;
                return Atomics.store(this.write_ptr, 0, r), { rd: t, wr: r };
              },
            },
            {
              key: "addReadPtr",
              value: function () {
                var e = Atomics.load(this.read_ptr, 0);
                Atomics.store(this.read_ptr, 0, (e + 1) % this.capacity);
              },
            },
            {
              key: "dequeue",
              value: function () {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = Atomics.load(this.read_ptr, 0),
                  n = Atomics.load(this.write_ptr, 0);
                if (this._available_read(t, n) <= 0) return null;
                var r,
                  i,
                  _,
                  a = new Uint32Array(
                    this.buf,
                    t * this._BYTES_PER_ELEMENT + 8,
                    1
                  );
                if (e) {
                  r = this.oneElementBuffer
                    ? new Uint8Array(this.oneElementBuffer, 0, a[0])
                    : new Uint8Array(a[0]);
                  var o = new Uint8Array(
                    this.storageUint8s.buffer,
                    t * this._BYTES_PER_ELEMENT +
                      8 +
                      4 +
                      this.storageUint8sByteOffset,
                    r.byteLength
                  );
                  r.set(o, 0);
                } else
                  (r = this.storageUint8s.subarray(
                    t * this._BYTES_PER_ELEMENT + 8 + 4,
                    t * this._BYTES_PER_ELEMENT + 8 + 4 + a[0]
                  )),
                    (i =
                      t * this._BYTES_PER_ELEMENT +
                      8 +
                      4 +
                      this.storageUint8sByteOffset),
                    (_ =
                      t * this._BYTES_PER_ELEMENT +
                      8 +
                      4 +
                      a[0] +
                      this.storageUint8sByteOffset);
                return (
                  e && Atomics.store(this.read_ptr, 0, (t + 1) % this.capacity),
                  e ? r : { bCopyData: e, uint8s: r, begin: i, end: _ }
                );
              },
            },
            {
              key: "available_read",
              value: function () {
                var e = Atomics.load(this.read_ptr, 0),
                  t = Atomics.load(this.write_ptr, 0);
                return this._available_read(e, t);
              },
            },
            {
              key: "available_write",
              value: function () {
                var e = Atomics.load(this.read_ptr, 0),
                  t = Atomics.load(this.write_ptr, 0);
                return this._available_write(e, t);
              },
            },
            {
              key: "is_available_write",
              value: function () {
                var e = Atomics.load(this.read_ptr, 0),
                  t = Atomics.load(this.write_ptr, 0);
                return this._is_available_write(e, t);
              },
            },
            {
              key: "_available_read",
              value: function (e, t) {
                return t > e ? t - e - 1 : t + this.usableCapacity - e;
              },
            },
            {
              key: "_available_write",
              value: function (e, t) {
                var n = e - t - 1;
                return t >= e && (n += this.capacity), n;
              },
            },
            {
              key: "_is_available_write",
              value: function (e, t) {
                return (t + 1) % this.capacity == e ? 0 : 1;
              },
            },
            {
              key: "_storage_capacity",
              value: function () {
                return this.capacity;
              },
            },
          ]),
          e
        );
      })();
    t.RingBuffer = o;
    var s = (function () {
      function e(t, n) {
        if (((0, i.default)(this, e), !(t instanceof o)))
          throw new Error("RingBuffer required");
        (this.rb = t),
          (this.dataCallback = n),
          (this.interval = null),
          (this.requestID = null);
      }
      return (
        (0, _.default)(e, [
          {
            key: "consume",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
              this.interval ||
                ((this.bCopyData = n),
                (this.interval = setInterval(function () {
                  e._dequeue();
                }, t)),
                console.log("consume interval ".concat(this.interval)));
            },
          },
          {
            key: "consumeAll",
            value: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              (this.bCopyData = e), this._dequeue();
            },
          },
          {
            key: "_dequeue",
            value: function () {
              for (; this.rb.available_read() > 0; ) {
                var e = this.rb.dequeue(this.bCopyData);
                this.dataCallback(e), this.bCopyData || this.rb.addReadPtr();
              }
            },
          },
          {
            key: "_consumeForAnimationFrame",
            value: function () {
              this._dequeue(),
                (this.requestID = requestAnimationFrame(
                  this._consumeForAnimationFrame.bind(this)
                ));
            },
          },
          {
            key: "consumeUsingRequestAnimationFrame",
            value: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              this.requestID ||
                ((this.bCopyData = e), this._consumeForAnimationFrame());
            },
          },
          {
            key: "cancelConsume",
            value: function () {
              console.log(
                "cancelConsume interval "
                  .concat(this.interval, " requestID ")
                  .concat(this.requestID)
              ),
                clearInterval(this.interval),
                this.requestID && cancelAnimationFrame(this.requestID),
                (this.interval = null),
                (this.requestID = null);
            },
          },
        ]),
        e
      );
    })();
    t.ConsumeRB = s;
    var E = (function () {
      function e() {
        (0, i.default)(this, e),
          (this.timeStampKey = "video_timestamp"),
          (this.keysList = [
            "video_ssrc",
            "video_width",
            "video_height",
            "rendering_x",
            "rendering_y",
            "rendering_w",
            "rendering_h",
            "rotation",
            "yuv_limited",
          ]),
          (this.bCopyData = null),
          (this.begin = null),
          (this.end = null);
      }
      return (
        (0, _.default)(e, [
          {
            key: "setOBJ",
            value: function (e) {
              (this.obj = e), (this.yuvUint8s = e.data);
            },
          },
          {
            key: "setBuffer",
            value: function (e) {
              !1 === e.bCopyData
                ? ((this.objUint8s = e.uint8s),
                  (this.bCopyData = e.bCopyData),
                  (this.begin = e.begin),
                  (this.end = e.end))
                : ((this.objUint8s = e),
                  (this.bCopyData = !0),
                  (this.begin = 0),
                  (this.end = e.byteLength));
            },
          },
          {
            key: "buffer2Obj",
            value: function () {
              var e = new Uint32Array(this.objUint8s.buffer, this.begin, 9),
                t = new DataView(this.objUint8s.buffer, this.begin + 40, 16),
                n = {};
              this.keysList.forEach(function (t, r) {
                n[t] = e[r];
              }),
                (n[this.timeStampKey] = Number(t.getBigUint64(0, !0)));
              var r,
                i = Number(t.getBigUint64(8, !0)),
                _ = new Uint8Array(
                  this.objUint8s.buffer,
                  this.begin + 40 + 8 + 8,
                  i
                );
              return (r = (this.bCopyData, _)), (n.data = r), n;
            },
          },
          {
            key: "obj2buffer",
            value: function () {
              var e = this,
                t = new Uint8Array(56),
                n = this.keysList,
                r = new Uint32Array(t.buffer, 0, 9),
                i = new DataView(t.buffer, 40, 16);
              return (
                n.forEach(function (t, n) {
                  r[n] = e.obj[t];
                }),
                i.setBigUint64(0, BigInt(this.obj[this.timeStampKey]), !0),
                i.setBigUint64(8, BigInt(this.yuvUint8s.byteLength), !0),
                [t, this.yuvUint8s]
              );
            },
          },
        ]),
        e
      );
    })();
    t.VideoDecodeOBJXBuffer = E;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(24),
      i = n(11);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.JsSocket_Log = k),
      (t.Channel_Agent = He),
      (t.responseAudioQosData = function (e, t, n, r, i) {
        var _ = { sample_rate: e, rtt: t, jitter: n, avg_loss: r, max_loss: i };
        postMessage({ status: T.AUDIO_QOS_DATA, data: _ });
      }),
      (t.Open_Audio_WebSocket_Connect = Ve),
      (t.audio_websocket_on_open = we),
      (t.audio_websocket_on_message = Ye),
      (t.audio_data_message_from_main_thread_datachannel = Ze),
      (t.audio_websocket_on_close = Xe),
      (t.audio_websocket_on_error = Qe),
      (t.Put_Audio_Frame_Buffer = function (e) {
        Dt &&
          0 == Rt &&
          (St || (St = 20),
          ce && (console.log("set aec delay" + St), C(ce, St)));
        ++Rt == a.default && (Rt = 21);
        if (Dt && Rt % 8e3 == 0) {
          var t = p(ce);
          t > 0 && postMessage({ status: AUDIO_DELAY, delay: t });
        }
        if (ce) {
          if (
            ((De && De.length == e.length) || (De = new Int16Array(e.length)),
            ++Tt % ht == 0)
          ) {
            Se = new Int32Array(e.buffer);
            for (var n = 0; n < Se.length; n++)
              if (0 != Se[n]) {
                It = 0;
                break;
              }
            n == Se.length &&
              ++It == ht &&
              (postMessage({ status: Audio_Mute }), (It = 0));
          }
          if (ce) {
            var r = de.append(e);
            r(
              function () {},
              function (e) {}
            );
          }
        }
      }),
      (t.frame_aec_callback = function (e, t, n, r) {
        var i = new Uint8Array(2 * r),
          _ = Module.HEAP8.subarray(e + 0, e + 2 * r);
        i.set(_, 0, 2 * r), Ft({ data: i, channels: n, sampleHZ: t });
      }),
      (t.frame_callback_SAB = Je),
      (t.update_play_time = function (e, t) {
        if (!t) return;
        var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
        n.set(r), tt && tt.postMessage({ status: 1, data: n }, [n.buffer]);
      }),
      (t.frame_callback = function (e, t, n, r, i, _, a, o) {
        if (F && Et) return Je(e, t, n, r, i, _, a, o);
        var s = Module.HEAP8.subarray(e + 0, e + 4 * t),
          E = new Uint8Array(4 * t);
        E.set(s, 0, 4 * t);
        var u,
          c = new Float32Array(E.buffer);
        if (!Le) {
          u = new Uint8Array(2 * o);
          var A = Module.HEAP8.subarray(i + 0, i + 2 * o);
          u.set(A, 0, 2 * o);
        }
        var l, f;
        if (0 != r) {
          var O = new Uint8Array(r),
            T = Module.HEAP8.subarray(n + 0, n + r);
          O.set(T, 0, r), Wt(O);
        }
        if (
          ((f = Le
            ? [
                (l = { status: 0, data: c, channels: a, sampleHz: _ }).data
                  .buffer,
              ]
            : [
                (l = { status: 0, data: c, aec: u, channels: a, sampleHz: _ })
                  .data.buffer,
                l.aec.buffer,
              ]),
          et ? et.postMessage(l, f) : postMessage(l, f),
          (Lt += 1) >= Ut && ((Lt = 0), mt))
        ) {
          var I = kt(mt);
          tt
            ? tt.postMessage({ status: 0, data: I })
            : postMessage({ status: CURRENT_SSRC_TIME, data: I });
        }
      }),
      (t.wcl_trace_log = function (e, t) {
        var n = new Uint8Array(t + 1),
          r = Module.HEAP8.subarray(e + 0, e + t);
        if ((n.set(r, 0, t), (n[t] = 10), xt && 1 == xt.readyState)) {
          var i = new Date();
          xt.send(i.toString() + "  "), xt.send(n);
        }
      }),
      (t.audio_encode_frame_callback = $e),
      (t.Get_Mixed_Audio_Interval = Pt),
      (t.Get_Mixed_Audio_Interval_SAB = Vt),
      (t.Encode_Audio_Data = Gt),
      (t.Encode_Audio_Data_SAB = wt),
      (t.send_data = function (e, t) {
        var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
        n.set(r, 0, t), Ae && 1 === Ae.socket.readyState && Ae.send(n);
        gt || (le && 1 === le.socket.readyState && le.send(n));
      }),
      (t.LOG_OUT = function (e, t) {
        var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
        n.set(r, 0, t), xt && 1 === xt.readyState && xt.send(n);
      }),
      (t.put_aec_data = Ft),
      (t.TURN_DOWN_VOLUME = function () {
        postMessage({ status: AUDIO_CLIPPING });
      }),
      (t.Get_ExternalRecord = function (e, t, n) {
        return;
      }),
      (t.Update_SSRC_Time = Wt),
      (t.Get_SSRC_Latest_Time = kt),
      (t.SAVE_IV = function (e, t) {
        ie ||
          (ie = setInterval(function () {
            ce && L(ce);
          }, 6e4));
        var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
        n.set(r, 0, t),
          (oe = n),
          postMessage({ status: l.AES_GCM_IV_CALLBACK_FROM_WASM, data: n }, [
            n.buffer,
          ]);
      }),
      (t.getWasmMemory = Bt),
      (t.freeWasmMemory = Kt);
    var _ = i(n(50)),
      a = i(n(150)),
      o = i(n(27)),
      s = i(n(54)),
      E = i(n(41)),
      u = i(n(42)),
      c = i(n(47)),
      A = n(69),
      l = r(n(26)),
      f = n(118),
      O = n(143),
      T = n(71);
    (0, c.default)(l).forEach(function (e) {
      return (self[e] = l[e]);
    }),
      (WebAssembly.instantiateStreaming = !1),
      (self.wasmSuccessEvent = l.Audio_Dec_WASM_OK),
      (self.wasmFailEvent = l.Audio_Dec_WASM_FAILED),
      (self.databaseName = "AUDIO_FILE"),
      (self.databaseDataType = "audio"),
      (self.instantiateCachedURL = A.instantiateCachedURL);
    var I,
      h,
      D,
      S,
      R,
      d,
      N,
      p,
      C,
      v,
      M,
      b,
      m,
      y,
      L,
      U,
      g,
      P,
      H,
      V,
      G = 1,
      w = (function () {
        function e(t, n, r) {
          if (
            ((0, E.default)(this, e),
            (this.STATE_READ_READY = 0),
            (this.STATE_READ_INDEX = 1),
            (this.STATE_WRITE_READY = 2),
            (this.STATE_WRITE_INDEX = 3),
            (this.STATE_DATA_COUNT = 4),
            (this.STATE_CACHE_SIZE = 5),
            (this.STATY_READY_NO = 0),
            (this.STATY_READY_YES = 1),
            (this.sabState = new Uint32Array(t)),
            (this.sabBuffer = new Float32Array(n)),
            (this.perFrameLength = r),
            (this.bufferLen = this.sabBuffer.length),
            (this.supportSpecialOptimization = this.bufferLen % r == 0),
            (this.bufferIndex = null),
            this.supportSpecialOptimization)
          ) {
            var i = this.bufferLen / r;
            this.bufferIndex = [];
            for (var _ = 0; _ < i; _++)
              this.bufferIndex.push(this.sabBuffer.subarray(_ * r, _ * r + r));
          }
          (this.placeBuffer = new Float32Array(this.perFrameLength)),
            (this.QUANTUM_SIZE = 128),
            (this.CACHE_SIZE_MAX_VALUE = Math.floor(
              Math.floor(this.bufferLen / this.QUANTUM_SIZE) / 2
            )),
            (this.CACHE_SIZE_MIN_VALUE = 6),
            this.CACHE_SIZE_MAX_VALUE < this.CACHE_SIZE_MIN_VALUE &&
              (this.CACHE_SIZE_MAX_VALUE = this.CACHE_SIZE_MIN_VALUE),
            this.setCacheSize(this.CACHE_SIZE_MIN_VALUE),
            (this._counter = 0);
        }
        return (
          (0, u.default)(e, [
            {
              key: "getCacheSize",
              value: function () {
                return Atomics.load(this.sabState, this.STATE_CACHE_SIZE);
              },
            },
            {
              key: "setCacheSize",
              value: function (e) {
                e > this.CACHE_SIZE_MAX_VALUE &&
                  (e = this.CACHE_SIZE_MAX_VALUE),
                  e < this.CACHE_SIZE_MIN_VALUE &&
                    (e = this.CACHE_SIZE_MIN_VALUE),
                  Atomics.store(this.sabState, this.STATE_CACHE_SIZE, e);
              },
            },
            {
              key: "setQuantumSize",
              value: function (e) {
                (this.QUANTUM_SIZE = e),
                  (this.CACHE_SIZE_MAX_VALUE = Math.floor(
                    Math.floor(this.bufferLen / this.QUANTUM_SIZE) / 2
                  )),
                  this.CACHE_SIZE_MAX_VALUE < this.CACHE_SIZE_MIN_VALUE &&
                    (this.CACHE_SIZE_MAX_VALUE = this.CACHE_SIZE_MIN_VALUE);
              },
            },
            {
              key: "isNeedMoreData",
              value: function () {
                var e = Atomics.load(this.sabState, this.STATE_CACHE_SIZE);
                return (
                  Atomics.load(this.sabState, this.STATE_DATA_COUNT) <
                  e * this.QUANTUM_SIZE
                );
              },
            },
            {
              key: "shouldAdjustCacheBuffer",
              value: function () {
                this._counter > 0 && this.setCacheSize(this.getCacheSize() + 1);
              },
            },
            {
              key: "clear",
              value: function () {
                this.sabState &&
                  ((this.sabState[this.STATE_READ_READY] = 0),
                  (this.sabState[this.STATE_READ_INDEX] = 0),
                  (this.sabState[this.STATE_WRITE_READY] = 0),
                  (this.sabState[this.STATE_WRITE_INDEX] = 0),
                  (this.sabState[this.STATE_DATA_COUNT] = 0)),
                  (this._counter = 0);
              },
            },
            {
              key: "setWriteReady",
              value: function () {
                this.sabState[this.STATE_WRITE_READY] = this.STATY_READY_YES;
              },
            },
            {
              key: "isReady",
              value: function () {
                return (
                  this.sabState[this.STATE_WRITE_READY] &&
                  this.sabState[this.STATE_READ_READY]
                );
              },
            },
            {
              key: "getDataCount",
              value: function () {
                return Atomics.load(this.sabState, this.STATE_DATA_COUNT);
              },
            },
            {
              key: "write",
              value: function (e) {
                if (e.length === this.perFrameLength) {
                  var t = this.sabState[this.STATE_READ_READY];
                  if (
                    (this.sabState[this.STATE_WRITE_READY] ||
                      ((this.sabState[this.STATE_WRITE_READY] =
                        this.STATY_READY_YES),
                      (this.sabState[this.STATE_WRITE_INDEX] = 0)),
                    t)
                  )
                    return this.supportSpecialOptimization
                      ? this.writeSpecial(e)
                      : this.writeNormal(e);
                }
              },
            },
            {
              key: "writeNormal",
              value: function (e) {
                var t = this.sabState[this.STATE_WRITE_INDEX];
                if (this.bufferLen - t >= this.perFrameLength)
                  this.sabBuffer.set(e, t);
                else {
                  var n = e.subarray(0, this.bufferLen - t),
                    r = e.subarray(n.length);
                  this.sabBuffer.set(n, t), this.sabBuffer.set(r);
                }
                (t += this.perFrameLength) >= this.bufferLen &&
                  (t -= this.bufferLen),
                  (this.sabState[this.STATE_WRITE_INDEX] = t),
                  Atomics.add(
                    this.sabState,
                    this.STATE_DATA_COUNT,
                    this.perFrameLength
                  );
              },
            },
            {
              key: "writeSpecial",
              value: function (e) {
                var t = this.sabState[this.STATE_WRITE_INDEX];
                this.bufferIndex[t].set(e),
                  (t = (t + 1) % this.bufferIndex.length),
                  (this.sabState[this.STATE_WRITE_INDEX] = t),
                  Atomics.add(
                    this.sabState,
                    this.STATE_DATA_COUNT,
                    this.perFrameLength
                  );
              },
            },
            {
              key: "read",
              value: function () {
                var e = this.sabState[this.STATE_READ_READY],
                  t = this.sabState[this.STATE_WRITE_READY];
                if (
                  (e ||
                    ((this.sabState[this.STATE_READ_READY] =
                      this.STATY_READY_YES),
                    (this.sabState[this.STATE_READ_INDEX] = 0)),
                  !t)
                )
                  return null;
                var n = this.supportSpecialOptimization
                  ? this.readSpecial()
                  : this.readNormal();
                return (
                  null === n ? this.shouldAdjustCacheBuffer() : this._counter++,
                  n
                );
              },
            },
            {
              key: "readNormal",
              value: function () {
                var e = this.sabState[this.STATE_READ_INDEX],
                  t = Atomics.load(this.sabState, this.STATE_DATA_COUNT);
                if (t < this.perFrameLength) return null;
                if (t > this.bufferLen) {
                  var n =
                    Math.ceil((t - this.bufferLen) / this.perFrameLength) + 1;
                  (e = (n * this.perFrameLength + e) % this.bufferLen),
                    Atomics.sub(
                      this.sabState,
                      this.STATE_DATA_COUNT,
                      n * this.perFrameLength
                    );
                }
                var r = null;
                if (this.bufferLen - e >= this.perFrameLength)
                  r = this.sabBuffer.subarray(e, e + this.perFrameLength);
                else {
                  var i = this.sabBuffer.subarray(e),
                    _ = this.sabBuffer.subarray(
                      0,
                      this.perFrameLength - i.length
                    );
                  (r = this.placeBuffer).set(i), r.set(_, i.length);
                }
                return (
                  (e += this.perFrameLength) >= this.bufferLen &&
                    (e -= this.bufferLen),
                  (this.sabState[this.STATE_READ_INDEX] = e),
                  Atomics.sub(
                    this.sabState,
                    this.STATE_DATA_COUNT,
                    this.perFrameLength
                  ),
                  r
                );
              },
            },
            {
              key: "readSpecial",
              value: function () {
                var e = this.sabState[this.STATE_READ_INDEX],
                  t = Atomics.load(this.sabState, this.STATE_DATA_COUNT);
                if (t < this.perFrameLength) return null;
                if (t > this.bufferLen) {
                  var n =
                    Math.ceil((t - this.bufferLen) / this.perFrameLength) + 1;
                  (e = (n + e) % this.bufferIndex.length),
                    Atomics.sub(
                      this.sabState,
                      this.STATE_DATA_COUNT,
                      n * this.perFrameLength
                    );
                }
                var r = this.bufferIndex[e];
                return (
                  (e = (e + 1) % this.bufferIndex.length),
                  (this.sabState[this.STATE_READ_INDEX] = e),
                  Atomics.sub(
                    this.sabState,
                    this.STATE_DATA_COUNT,
                    this.perFrameLength
                  ),
                  r
                );
              },
            },
          ]),
          e
        );
      })(),
      F = "undefined" != typeof SharedArrayBuffer;
    function W() {
      (this.a = []), (this.b = 0), (this.residue = null);
    }
    function k(e) {
      console.log(e);
    }
    (W.prototype.getLength = function () {
      return this.a.length - this.b;
    }),
      (W.prototype.isEmpty = function () {
        return 0 == this.a.length;
      }),
      (W.prototype.enqueue = function (e) {
        this.a.push(e);
      }),
      (W.prototype.dequeue = function () {
        if (0 != this.a.length) {
          var e = this.a[this.b];
          return (
            2 * ++this.b >= this.a.length &&
              ((this.a = this.a.slice(this.b)), (this.b = 0)),
            e
          );
        }
        return null;
      }),
      (W.prototype.peek = function () {
        return 0 < this.a.length ? this.a[this.b] : void 0;
      });
    var B,
      K,
      x,
      j,
      Y,
      Z,
      X,
      Q,
      q,
      z,
      J,
      $,
      ee,
      te,
      ne = !1,
      re = null;
    self.onWasmModuleReady = function () {
      (I = Module.cwrap("_Audio_Init", "number", [
        "number",
        "string",
        "string",
        "number",
        "number",
        "boolean",
        "boolean",
        "boolean",
        "number",
      ])),
        (h = Module.cwrap("_Audio_UnInit", "number", ["number"])),
        (D = Module.cwrap("_Audio_Encode", "number", [
          "number",
          "number",
          "number",
          "number",
          "number",
        ])),
        (S = Module.cwrap("_Audio_Decode", "number", [
          "number",
          "number",
          "array",
          "number",
        ])),
        (R = Module.cwrap("_Get_Mixed_Audio", "number", [
          "number",
          "number",
          "number",
          "number",
        ])),
        (d = Module.cwrap("_Put_Pre_Aec_Data", "number", [
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
        ])),
        (N = Module.cwrap("_Put_Pre_Aec_Data", "number", [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ])),
        (p = Module.cwrap("_Get_Aec_Delay", "number", ["number"])),
        (C = Module.cwrap("_Set_Aec_Delay", "number", ["number", "number"])),
        (v = Module.cwrap("_ReSet_Aec", "number", ["number"])),
        (M = Module.cwrap("_Audio_Set_Data_Encryption", "number", [
          "number",
          "number",
        ])),
        (b = Module.cwrap("_Add_Cooker_info", "number", [
          "number",
          "number",
          "number",
          "number",
        ])),
        (L = Module.cwrap("_Get_Audio_Meat_Weight", "number", ["number"])),
        (m = Module.cwrap("_Remove_Cooker_Info", "number", [
          "number",
          "number",
        ])),
        (y = Module.cwrap("_Change_Aec_Flag", "number", ["number", "boolean"])),
        (U = Module.cwrap("_Change_Connect_Type", "number", [
          "number",
          "number",
        ])),
        (g = Module.cwrap("_Interpretation_Configure", "number", [
          "number",
          "number",
          "number",
          "number",
        ])),
        (H = Module.cwrap("_Request_Audio_Qos_Data", "number", ["number"])),
        (V = Module._malloc(40)),
        (P = Module.HEAPU32.subarray(V / 4, V / 4 + 10)),
        (B = Module.cwrap("_Start_Audio_Share", "number", [
          "number",
          "number",
        ])),
        (K = Module.cwrap("_InsertShareData", "number", [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ])),
        (Y = Module.cwrap("_Set_Share_Volume_Level", "number", [
          "number",
          "number",
          "number",
        ])),
        (Z = Module.cwrap("_Update_Monitor_Send_Audio_Info", "number", [
          "number",
          "number",
          "number",
        ])),
        (X = Module.cwrap("_Update_Monitor_Receive_Audio_Info", "number", [
          "number",
          "number",
          "number",
        ])),
        (Q = Module.cwrap("_Cc_Set_Lang", "number", ["number", "number"])),
        (z = Module._malloc(4)),
        (q = Module.HEAPU32.subarray(z / 4, z / 4 + 1)),
        (J = Module.cwrap("_Set_Audio_Encryption_Key_Directly", "number", [
          "number",
          "number",
          "number",
          "number",
        ])),
        ($ = Module.cwrap("_Add_Roster_Info_Directly", "number", [
          "number",
          "number",
          "number",
          "number",
        ])),
        (ee = Module.cwrap("_Enable_Share_To_Bo", "number", [
          "number",
          "boolean",
        ])),
        (te = Module.cwrap("_Set_Audio_Pipe_To_Bo", "number", [
          "number",
          "number",
        ]));
    };
    var ie,
      _e,
      ae,
      oe,
      se,
      Ee,
      ue,
      ce = null,
      Ae = null,
      le = null,
      fe = !1,
      Oe = null,
      Te = null,
      Ie = null,
      he = !1,
      De = null,
      Se = null,
      Re = 0,
      de = null,
      Ne = !1,
      pe = !1,
      Ce = !1,
      ve = null,
      Me = !1,
      be = !1,
      me = !1,
      ye = !1,
      Le = !0,
      Ue = !1,
      ge = null,
      Pe = (function () {
        function e(e) {
          (this.wpos = 0),
            (this.rpos = 0),
            (this.remaining_write_data = null),
            (this.buf = e);
        }
        return (
          (e.prototype.append = function (e) {
            var t = this;
            return function (n, r) {
              if (t.remaining_write_data) r();
              else {
                var i = t._append_some(e);
                i != e.length
                  ? (t.remaining_write_data = [e.subarray(i), n])
                  : n();
              }
            };
          }),
          (e.prototype.read_some = function (e) {
            var t = this._read_some(e);
            return (
              this.remaining_write_data &&
                (this._append_remaining_data(),
                t < e.length && (t += this._read_some(e.subarray(t)))),
              t
            );
          }),
          (e.prototype._append_some = function (e) {
            var t = Math.min(e.length, this.available());
            if (0 == t) return 0;
            var n = this.wpos % this.buf.length,
              r = Math.min(t, this.buf.length - n);
            return (
              this.buf.set(e.subarray(0, r), n),
              r < t && this.buf.set(e.subarray(r, t), 0),
              (this.wpos += t),
              t
            );
          }),
          (e.prototype._append_remaining_data = function () {
            var e = this.remaining_write_data[0],
              t = this.remaining_write_data[1];
            this.remaining_write_data = null;
            var n = this._append_some(e);
            n == e.length
              ? t()
              : (this.remaining_write_data = [e.subarray(n), t]);
          }),
          (e.prototype._read_some = function (e) {
            var t = Math.min(e.length, this.size());
            if (t < e.length) return 0;
            if (0 == t) return 0;
            var n = this.rpos % this.buf.length,
              r = Math.min(t, this.buf.length - n);
            return (
              e.set(this.buf.subarray(n, n + r), 0),
              r < t && e.set(this.buf.subarray(0, t - r), r),
              (this.rpos += t),
              t
            );
          }),
          (e.prototype.clear = function () {
            (this.rpos = this.wpos = 0), (this.remaining_write_data = null);
          }),
          (e.prototype.capacity = function () {
            return this.buf.length;
          }),
          (e.prototype.size = function () {
            return this.wpos - this.rpos;
          }),
          (e.prototype.available = function () {
            return this.capacity() - this.size();
          }),
          (e.MAX_POS = 65536),
          e
        );
      })();
    function He() {
      function e(e) {
        var t = null,
          n = l.serverHeartbeatMaxTimeoutSeconds,
          r = 1,
          i = null,
          _ = e.onmessage,
          a = e.onopen,
          o = e.onclose;
        (e.onmessage = function (n) {
          (t = new Date().getTime()), _.call(e, n);
        }),
          (e.onopen = function (_) {
            (t = new Date().getTime()),
              (function () {
                if (i) return;
                i = setInterval(function () {
                  new Date().getTime() - t >= 1e3 * n &&
                    (clearInterval(i),
                    (i = null),
                    console.error("sdk network is not available!"),
                    e.socket.close());
                }, 1e3 * r);
              })(),
              a.call(e, _, e);
          }),
          (e.onclose = function (t) {
            try {
              clearInterval(i);
            } catch (e) {
              console.error("ins.onclose", e);
            }
            o.call(e, t, e);
          });
      }
      (this.socket = null),
        (this.onopen = null),
        (this.onmessage = null),
        (this.onerror = null),
        (this.onclose = null),
        (this.websocketaddress = null),
        (this.startwebsocketreconnecttime = null),
        (this.reconnect = null),
        (this.connectIndex = 0),
        (this.activeclosewebsocket = !1),
        (this.init = function (t, n, r, i, _) {
          (this.websocketaddress = t),
            (this.onopen = n),
            (this.onmessage = r),
            (this.onerror = i),
            (this.onclose = _),
            e(this);
        }),
        (this.connect = function (e, t, n, r, i) {
          var _ = this;
          (0, A.add_monitor)("SB"),
            _.init(e, t, n, r, i),
            (_.reconnect = function () {
              var e = this;
              if (!_.isReconnectNow && !_.isTimerExist) {
                (_.isReconnectNow = !0), (_.isTimerExist = !0);
                var t = Math.pow(2, _.connectIndex) - 1;
                _.connectIndex++,
                  setTimeout(function () {
                    _.activeclosewebsocket ||
                      ((_.isTimerExist = !1),
                      (_.startwebsocketreconnecttime = null),
                      (_.socket = new WebSocket(e.websocketaddress)),
                      (_.socket.binaryType = "arraybuffer"),
                      (_.socket.onopen = function (e) {
                        (_.isReconnectNow = !1),
                          (0, A.add_monitor)("SE"),
                          (_.startwebsocketreconnecttime =
                            new Date().getTime() / 1e3),
                          _.onopen(e);
                      }),
                      (_.socket.onmessage = function (e) {
                        _.onmessage(e);
                      }),
                      (_.socket.onerror = function (e) {
                        (0, A.add_monitor)("SERR"), _.socket.close();
                      }),
                      (_.socket.onclose = function (e) {
                        (0, A.add_monitor)("SCLOSE"),
                          (_.isReconnectNow = !1),
                          _.onclose(e),
                          _.activeclosewebsocket ||
                            (_.connectIndex < 10
                              ? _.reconnect()
                              : (postMessage({
                                  status: Audio_Dec_WebSocket_FAILED,
                                }),
                                console.log(
                                  "NetWork is Bad, Don't to reconnect the serer!"
                                )));
                      }));
                  }, 1e3 * t);
              }
            }),
            _.reconnect();
        }),
        (this.send = function (e) {
          1 === this.socket.readyState && this.socket.send(e);
        }),
        (this.close = function () {
          try {
            (this.activeclosewebsocket = !0), this.socket.close();
          } catch (e) {
            console.warn("force close", e);
          }
        });
    }
    function Ve(e, t, n, r, i) {
      k("Open_Audio_WebSocket_Connect");
      var _ = new He();
      return _.connect(e, t, n, r, i), _;
    }
    function Ge() {
      return (Ge = (0, s.default)(
        _.default.mark(function e(t) {
          var n;
          return _.default.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      k("Open_WebTransport_Connect"),
                      (n = new A.WebTransportUtil(t)),
                      (e.next = 4),
                      n.connect()
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      )).apply(this, arguments);
    }
    function we() {
      var e;
      if (gt) for (Ue = !0; ge && (e = ge.dequeue()); ) $e(e.data, 0, e.c, !0);
      postMessage({ status: Audio_Dec_WebSocket_OK });
    }
    function Fe(e) {
      e.params.url.includes("mode=2") && ((ve = e), (Ce = !0)),
        postMessage({ status: l.CONNECT_WEBTRANSPORT_OK });
    }
    function We(e) {
      e.params.url.includes("mode=2") && ((Ce = !1), (ve = null));
    }
    var ke = new o.default(),
      Be = [];
    (self.seqMap = ke), (self.seqList = Be);
    var Ke = new ((function () {
      function e() {
        (0, E.default)(this, e),
          (this.channel = null),
          (this.audioHandle = null);
      }
      return (
        (0, u.default)(e, [
          {
            key: "open",
            value: function (e) {
              var t = e.wsUrl;
              this.channel = Ve(
                t,
                this._onOpen.bind(this),
                this._onMessage.bind(this),
                this._onError.bind(this),
                this._onClose.bind(this)
              );
            },
          },
          {
            key: "createHandle",
            value: function (e) {
              var t = e.userId,
                n = e.meetingNumber,
                r = e.meetingId;
              this.audioHandle = I(t, n, r, 0, 0, Le, !1, gt, 1);
            },
          },
          {
            key: "pipeTo",
            value: function (e) {
              e && this.audioHandle
                ? te(this.audioHandle, e)
                : console.warn(
                    new Error("audio handle not ready when pipe audio to bo")
                  );
            },
          },
          { key: "_onOpen", value: function (e) {} },
          { key: "_onError", value: function (e) {} },
          { key: "_onClose", value: function (e) {} },
          {
            key: "_onMessage",
            value: function (e) {
              if (e && e.data) {
                var t = new Uint8Array(e.data);
                0 !== t.length &&
                  (t[0] === l.MEDIA_S2C_KEEPALIVE
                    ? this.channel &&
                      1 === this.channel.socket.readyState &&
                      this.channel.send(t)
                    : t[0] !== l.UPDATE_ENCRYPTION_GCM_MODEL_KEY &&
                      this.decode(t));
              }
            },
          },
          {
            key: "close",
            value: function () {
              this.channel.close(), (this.channel = null);
            },
          },
          {
            key: "setAudioEncryptionKey",
            value: function (e, t) {
              var n = Bt(e);
              J(this.audioHandle, n, e.length, t), Kt(n);
            },
          },
          {
            key: "updateRosterInfo",
            value: function (e) {
              var t = this,
                n = e.add;
              e.remove;
              n &&
                n.forEach(function (e) {
                  var n = e.sn,
                    r = e.userid,
                    i = Bt(n);
                  $(t.audioHandle, r, i, n.length), Kt(i);
                });
            },
          },
          {
            key: "decode",
            value: function (e) {
              this.audioHandle &&
                e[0] !== l.MEDIA_AUDIO_DATA &&
                S(this.audioHandle, 0, e, e.length);
            },
          },
          {
            key: "isShareToBoAudio",
            value: function (e) {
              return (
                0 === e[2] &&
                0 === e[3] &&
                ![
                  l.UPDATE_ENCRYPTION_GCM_MODEL_KEY,
                  l.MEDIA_S2C_KEEPALIVE,
                  l.MEDIA_NTP_UPDATE,
                ].includes(e[0])
              );
            },
          },
        ]),
        e
      );
    })())();
    function xe(e, t) {
      Ke.isShareToBoAudio(e)
        ? Ke.decode(e)
        : (Me && e[0] === l.MEDIA_AUDIO_DATA) || S(ce, 0, e, e.length);
    }
    function je(e) {
      null !== ce && xe(e);
    }
    function Ye(e) {
      var t = new Uint8Array(e.data);
      if (102 == t[0]) {
        if (ne) return;
        (ne = !0), (re = new Uint8Array(t));
      }
      null !== ce && xe(t);
    }
    function Ze(e) {
      null !== ce && xe(new Uint8Array(e));
    }
    function Xe(e) {
      gt && (Ue = !1);
    }
    function Qe(e) {}
    var qe = null,
      ze = null;
    function Je(e, t, n, r, i, _, a, o) {
      if (
        ((ze === e && qe.length == t) ||
          ((qe = Module.HEAPF32.subarray(e / 4, e / 4 + t)), (ze = e)),
        ut.write(qe),
        0 != r)
      ) {
        var s = new Uint8Array(r),
          E = Module.HEAP8.subarray(n + 0, n + r);
        s.set(E, 0, r), Wt(s);
      }
      if ((Lt += 1) >= Ut && ((Lt = 0), mt)) {
        var u = kt(mt);
        tt
          ? tt.postMessage({ status: 0, data: u })
          : postMessage({ status: CURRENT_SSRC_TIME, data: u });
      }
    }
    function $e(e, t, n, r) {
      if (gt) {
        if (r) a = e;
        else if (Ue) a = Module.HEAP8.subarray(e + 0, e + t);
        else {
          a = new Uint8Array(t);
          var i = Module.HEAP8.subarray(e + 0, e + t);
          a.set(i, 0, t);
        }
        if (!Ue)
          return ge || (ge = new W()), void ge.enqueue({ data: a, c: n });
        if (n && (1 == ft || !me) && Ce && ve && ve.transport_ready)
          return void ve.send(a);
        if (
          (null === Ae ||
            !Ae.socket ||
            1 !== Ae.socket.readyState ||
            ((1 != ft || be) && n && me) ||
            (Ae.send(a),
            a.length < 12 && console.error("Data Length is too short!!")),
          n && (1 == ft || !me) && pe)
        )
          if (me && self.audioEncodeMain2WorkerRingbuffer)
            self.audioEncodeMain2WorkerRingbuffer.enqueue(a),
              self.bAudioEncodeMainThreadConsumerIntervalEnable ||
                postMessage({
                  status: l.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK,
                });
          else {
            var _ = new Uint8Array(t);
            _.set(a, 0, t),
              self.postMessage({ status: l.AUDIO_ENCODED_DATA, data: _ }, [
                _.buffer,
              ]);
          }
      } else {
        var a = (i = Module.HEAP8.subarray(e + 0, e + t));
        if ((1 == ft || !me) && Ce && ve && ve.transport_ready)
          return void ve.send(a);
        if (
          (null !== Ae &&
          Ae.socket &&
          1 === Ae.socket.readyState &&
          1 == ft &&
          Rt > 20 &&
          0 == fe
            ? ((fe = !0),
              Ae.send(a),
              a.length < 12 && console.error("Data Length is too short!!"))
            : null !== le &&
              le.socket &&
              1 === le.socket.readyState &&
              1 == ft &&
              Rt > 20 &&
              1 == fe &&
              ((fe = !1),
              le.send(a),
              a.length < 12 && console.error("Data Length is too short!!")),
          1 === ft && pe)
        )
          if (self.audioEncodeMain2WorkerRingbuffer)
            self.audioEncodeMain2WorkerRingbuffer.enqueue(a);
          else {
            var o = new Uint8Array(t);
            o.set(a, 0, t),
              self.postMessage({ status: l.AUDIO_ENCODED_DATA, data: o }, [
                o.buffer,
              ]);
          }
      }
    }
    var et,
      tt,
      nt,
      rt,
      it,
      _t = null,
      at = 0,
      ot = !1,
      st = null,
      Et = null,
      ut = null,
      ct = null,
      At = null,
      lt = !1,
      ft = -1,
      Ot = 30,
      Tt = 0,
      It = 0,
      ht = 100,
      Dt = !1,
      St = 0,
      Rt = 0,
      dt = 0,
      Nt = null,
      pt = 9,
      Ct = 0,
      vt = new W(),
      Mt = !1,
      bt = !1,
      mt = 0,
      yt = new o.default(),
      Lt = 0,
      Ut = 15,
      gt = !1;
    function Pt() {
      if (F && Et) return Vt();
      if (et) R(ce, Oe / 100, 0, Oe);
      else if (
        (Nt || (Nt = new Date().getTime()),
        _t || (_t = new Date().getTime()),
        Ct || (Ct = new Date().getTime()),
        at++,
        dt++,
        null !== ce)
      )
        if (Re > 0) Re--;
        else {
          if (dt >= pt) {
            var e = new Date().getTime();
            (Mt || 1 == pt || e - Nt > 10 * dt) && (ot = !0),
              (dt = 0),
              (Nt = null);
          }
          if (
            (0,
            R(ce, Oe / 100, 0, Oe),
            ot && (0, R(ce, Oe / 100, 0, Oe)),
            (ot = !1),
            at >= 1e3)
          ) {
            var t = new Date().getTime() - _t;
            if (((_t = null), t > 1e4 && t < 2e4)) {
              var n = (10 * at) / (t - 1e4);
              pt = Math.floor(n);
            } else pt = 9;
            at = 0;
          }
        }
    }
    var Ht = !1;
    function Vt() {
      if (self.audioDecodeMain2WorkerRingbuffer)
        for (; self.audioDecodeMain2WorkerRingbuffer.available_read() > 0; ) {
          var e = self.audioDecodeMain2WorkerRingbuffer.dequeue(Ht);
          Ht
            ? xe(e)
            : (xe(e.uint8s),
              self.audioDecodeMain2WorkerRingbuffer.addReadPtr());
        }
      if (ut && ut.isReady())
        for (; ut.isNeedMoreData(); ) R(ce, Oe / 100, 0, Oe);
    }
    function Gt(e) {
      if (F && Et) return wt();
      if (nt && e) return rt.set(e), void D(ce, it, Oe / 100, 0, Oe);
      for (var t = 0; ce && t < 20 && de.read_some(rt) > 0; ) {
        if (Et && st) {
          var n = new Uint16Array(Et);
          if ((st.lock(), lt)) {
            if (0 != n[2])
              for (var r = n[2], i = 3; r > 0; ) {
                r--, n[2]--;
                var _ = n[i],
                  a = i + 2;
                (i += n[i + 1]), (i += 2);
                var o = new Uint16Array(n.subarray(a, i)),
                  s = new Uint8Array(o.buffer);
                ce && d(ce, s, _, 1, o.length, 0);
              }
          } else (n[2] = 0), (lt = !0);
          st.unlock();
        }
        for (; vt.getLength() > 0; ) {
          var E = vt.dequeue();
          d(ce, E.data, E.sampleHz, 1, E.data.length / 2, 0);
        }
        t++, D(ce, it, Oe / 100, 0, Oe);
      }
    }
    function wt(e) {
      if (ct && ft === G) {
        var t = null;
        if (!Le)
          for (; null !== (t = At.read()); )
            rt.set(t), N(ce, it, Oe, 1, t.length, 1);
        for (; null !== (t = ct.read()); )
          rt.set(t),
            x ? K(ce, it, j, 1, j / 100, 0) : D(ce, it, Oe / 100, 0, Oe);
        gt ||
          self.bAudioEncodeMainThreadConsumerIntervalEnable ||
          postMessage({ status: l.WORKER_MAIN_AUDIO_ENCODE_RINGBUFFER_TICK });
      }
    }
    function Ft(e) {
      if (
        -1 != ft &&
        2 != ft &&
        Et &&
        st &&
        null != e &&
        !(e.data.length > 960)
      ) {
        var t = new Uint16Array(Et);
        if ((st.lock(), t[2] < Ot)) {
          for (var n = 3, r = t[2]; r > 0; ) r--, (n += t[n + 1]), (n += 2);
          if (e) {
            var i = new Uint16Array(e.data.buffer);
            t[2]++,
              (t[n] = e.sampleHZ),
              (t[n + 1] = i.length),
              (n += 2),
              t.set(i, n);
          }
        } else console.log("too many data in sharebuffer!"), (t[2] = 0);
        st.unlock();
      }
    }
    function Wt(e) {
      if (e) {
        var t = e.length / 12,
          n = 0,
          r = 0;
        for (n = 0; n < t; n++) {
          var i = 0;
          for (r = 12 * n + 0; r < 12 * n + 4; r++)
            i += e[r] * Math.pow(256, r - 12 * n);
          i >>= 10;
          var _ = 0;
          for (r = 12 * n + 4; r < 12 * n + 12; r++)
            _ += e[r] * Math.pow(256, r - 12 * n - 4);
          yt.set(i, _);
        }
      }
    }
    function kt(e) {
      e >>= 10;
      var t = yt.get(e);
      return t ? (yt.set(e, 0), t) : 0;
    }
    function Bt(e) {
      if (!e) return 0;
      var t = Module._malloc(e.length);
      return Module.HEAPU8.subarray(t, t + e.length).set(e, 0, e.length), t;
    }
    function Kt(e) {
      e && Module._free(e);
    }
    var xt,
      jt,
      Yt,
      Zt = new ((function () {
        function e() {
          (0, E.default)(this, e),
            (this.interval = 1e3),
            (this.monitorLength = 1024),
            (this.timer = null);
        }
        return (
          (0, u.default)(e, [
            {
              key: "setWorkerType",
              value: function (e) {
                this.isEncode = e;
              },
            },
            {
              key: "open",
              value: function () {
                var e = this;
                this.close(),
                  this.monitorInfoPtr ||
                    (this.monitorInfoPtr = Module._malloc(this.monitorLength)),
                  (this.timer = setInterval(function () {
                    var t = e.isEncode ? Z : X;
                    if (t && ce && e.monitorInfoPtr && void 0 !== e.isEncode) {
                      var n = t(ce, e.monitorInfoPtr, e.monitorLength),
                        r = Module.HEAPU8.subarray(
                          e.monitorInfoPtr,
                          e.monitorInfoPtr + n
                        );
                      if (n > 0) {
                        var i = String.fromCharCode.apply(null, r);
                        i && (0, A.add_audio_monitor_log)(i);
                      }
                      r.fill(0, 0, e.monitorLength);
                    }
                  }, this.interval));
              },
            },
            {
              key: "close",
              value: function () {
                this.timer && (clearInterval(this.timer), (this.timer = null)),
                  this.monitorInfoPtr &&
                    (Kt(this.monitorInfoPtr), (this.monitorInfoPtr = null));
              },
            },
          ]),
          e
        );
      })())();
    (Yt = self),
      console.log("ready to start!"),
      Yt.addEventListener("message", function (e) {
        var t = e.data;
        switch (t.command) {
          case "startMedia":
            try {
              if (
                (console.log("JsAudioDec.js receive startMedia"), null == ce)
              ) {
                Zt.setWorkerType(!!t.encode),
                  (Oe = t.sampleRate),
                  (bt = t.isFirefox),
                  F && !bt && (Oe = 16e3),
                  (de = new Pe(new Float32Array((10 * Oe * 4) / 100)));
                var n,
                  r,
                  i = t.iv;
                i && (i = new Uint8Array(i)),
                  i ? ((oe = i), (n = i.length)) : (n = 0),
                  (r = Bt(i)),
                  (ue = t.meetingid),
                  (Ee = t.meetingnumb + ""),
                  (ye = !0),
                  (gt = t.qoson),
                  t.encode ||
                    (t.videodecodethreadnumb,
                    t.isSupportMultiThread,
                    (ce = I(t.userid, Ee, ue, r, n, Le, me, gt, 1))),
                  Kt(r),
                  (it = Module._malloc((4 * Oe) / 100)),
                  (rt = Module.HEAPF32.subarray(it / 4, it / 4 + Oe / 100)),
                  Date.now(),
                  null != ce || t.encode
                    ? (postMessage({ status: Audio_Dec_Handle_OK }),
                      t.decode && ((Te = !0), (Mt = t.isEdge)),
                      t.encode &&
                        ((me = !0), (se = !0), (_e = t.userid), (Ie = !0)),
                      t.webtransportURL &&
                        (function (e) {
                          Ge.apply(this, arguments);
                        })({
                          url: t.webtransportURL,
                          label: "audio",
                          onmessage: je,
                          onopen: Fe,
                          onclose: We,
                        }),
                      (Ae = Ve(t.websocket_ip_address, we, Ye, Qe, Xe)),
                      gt || (le = Ve(t.websocket_ip_address, we, Ye, Qe, Xe)))
                    : postMessage({ status: Audio_Dec_Handle_FAILED });
              }
            } catch (e) {
              console.log(e);
            }
            break;
          case "EncodedAudioFrame":
            Ae && 1 === Ae.socket.readyState && Ae.send(t.data);
            break;
          case "closeMedia":
            if ((Ae && Ae.close(), le && le.close(), Ie && Rt > 4e3)) {
              var _ = p(ce);
              console.log("Store Delay: " + _),
                _ > 0 && postMessage({ status: AUDIO_DELAY, delay: _ });
            }
            clearInterval(Te),
              clearInterval(Ie),
              h(ce),
              (ce = null),
              (Te = null),
              (Ie = null),
              (Ae = null),
              (le = null),
              close();
            break;
          case "delay":
            Re++;
            break;
          case "failover":
            Ae &&
              (Ae.close(), (Ae = Ve(t.websocket_ip_address, we, Ye, Qe, Xe))),
              le &&
                (le.close(), (le = Ve(t.websocket_ip_address, we, Ye, Qe, Xe)));
            break;
          case "EncodeAudioFrame":
            if (
              (Dt &&
                0 == Rt &&
                (St || (St = 20),
                ce && (console.log("set aec delay" + St), C(ce, St))),
              ++Rt == a.default && (Rt = 21),
              Dt &&
                Rt % 8e3 == 0 &&
                (_ = p(ce)) > 0 &&
                postMessage({ status: AUDIO_DELAY, delay: _ }),
              ce)
            ) {
              if (
                ((De && De.length == t.data.length) ||
                  (De = new Int16Array(t.data.length)),
                ++Tt % ht == 0)
              ) {
                Se = new Int32Array(t.data.buffer);
                for (var o = 0; o < Se.length; o++)
                  if (0 != Se[o]) {
                    It = 0;
                    break;
                  }
                o == Se.length &&
                  ++It == ht &&
                  (postMessage({ status: Audio_Mute }), (It = 0));
              }
              for (var s = 0; s < t.data.length; s++)
                null == De && (De = new Int16Array(t.data.length)),
                  (t.data[s] = 32768 * t.data[s]),
                  t.data[s] > 32767
                    ? (t.data[s] = 32767)
                    : t.data[s] < -32768 && (t.data[s] = -32768),
                  (De[s] = t.data[s]);
              var E = new Uint8Array(De.buffer);
              ce &&
                de.append(E)(
                  function () {},
                  function (e) {}
                );
            }
            break;
          case "sharedBuffer":
            if (F) {
              var u = t.data;
              (Et = u) &&
                ((ct = new w(Et.inputState, Et.inputBuffer, Oe / 100)),
                (ut = new w(Et.outputState, Et.outputBuffer, Oe / 100)),
                me
                  ? ((At = new w(Et.aecState, Et.aecBuffer, Oe / 100)),
                    ct.clear(),
                    At.clear())
                  : ut.clear(),
                (Rt = 21));
            }
            break;
          case "modifySampleRate":
            if (Oe === t.sampleRate) break;
            de.clear(),
              (de = null),
              (de = new Pe(new Float32Array((10 * t.sampleRate * 4) / 100))),
              it && Module._free(it),
              (it = Module._malloc((4 * t.sampleRate) / 100)),
              (rt = Module.HEAPF32.subarray(
                it / 4,
                it / 4 + t.sampleRate / 100
              )),
              (Oe = t.sampleRate),
              Et &&
                ((ct = new w(Et.inputState, Et.inputBuffer, Oe / 100)),
                (ut = new w(Et.outputState, Et.outputBuffer, Oe / 100)),
                me
                  ? ((At = new w(Et.aecState, Et.aecBuffer, Oe / 100)),
                    ct.clear(),
                    At.clear())
                  : ut.clear());
            break;
          case "mute":
            (ft = t.bOn) != G || he
              ? 2 == ft
                ? (et && !t.fakeLeave && (et.close(), (et = null)),
                  (he = !1),
                  Te && (ut && ut.clear(), clearInterval(Te)),
                  Ie &&
                    (ct && ct.clear(),
                    clearInterval(Ie),
                    clearInterval(ie),
                    (ie = null)),
                  Zt.close())
                : 0 === ft && ct && ct.clear()
              : ((he = !0),
                Te &&
                  (ut && (ut.clear(), ut.setWriteReady()),
                  (!F && et) || (Te = setInterval(Pt, 9))),
                Ie &&
                  (ce && !se && L(ce),
                  (se = !1),
                  ct && ct.clear(),
                  (F || !nt) &&
                    (Ie = setInterval(
                      function () {
                        Gt();
                      },
                      Oe > 16e3 && F ? 5 : 20
                    ))),
                Zt.open());
            break;
          case "resetAec":
            ce && v(ce), (Rt = 0), F && Et && (Rt = 21);
            break;
          case "SetAECDelay":
            (Dt = !0), (St = t.delay);
            break;
          case "EchoCancel":
            if (ce) {
              if (-1 == ft || 2 == ft) return;
              vt.enqueue({ data: t.data, sampleHz: t.sampleHz });
            }
            break;
          case "decodeAudioPort":
            F || clearInterval(Te),
              et && et.close(),
              ((et = e.ports[0]).onmessage = function (e) {
                var t = e.data,
                  n = t.status,
                  r = t.cacheSize,
                  i = t.isSAB;
                switch (n) {
                  case "delay":
                    Re++;
                    break;
                  case l.EVENT_NEEDMORE_DATA:
                    Pt();
                    break;
                  case l.EVENT_CACHE_SIZE:
                    (0, A.add_monitor)(
                      "".concat(i ? "ACSS" : "ACS").concat(r || "")
                    );
                }
              });
            break;
          case "encodeAudioPort":
            F || clearInterval(Ie),
              nt && nt.close(),
              ((nt = e.ports[0]).onmessage = function (e) {
                if (ce)
                  switch (e.data.command) {
                    case "EchoCancel":
                      if (ce) {
                        if (-1 == ft || 2 == ft) return;
                        vt.enqueue({
                          data: e.data.data,
                          sampleHz: e.data.sampleHz,
                        });
                      }
                      break;
                    case l.EVENT_CAPTURE_DATA:
                      ce && Gt(e.data.buffer);
                  }
              });
            break;
          case "updateCurrentSSRC":
            mt = t.SSRC;
            break;
          case "ENCRYPT":
            (Ne = t.encrypt), ce && M(ce, Ne ? 1 : 0);
            break;
          case "SOCKET_RECONNECT":
            self.IS_DISABLE_SOCKET_RECONNECT = !0 === t.disable;
            break;
          case "UPDATE_DATACHANNEL_STATUS":
            (pe = t.data.isDataChannelOpen),
              ce && !be && gt && U(ce, pe || Ce ? 0 : 2),
              !be && pe && (be = !0);
            break;
          case "PUSH_MESSAGE_FROM_MAIN_TO_WORKER":
            Ze(t.data);
            break;
          case f.MAIN_WORKER_COMMAND.SET_USER_NODE_LIST:
            var c = t.data.userNodeList;
            c &&
              c.forEach(function (e) {
                var t = parseInt(e.userid);
                if (e.bremove) ce && m(ce, t);
                else {
                  var n = e.sn;
                  if (16 == n.length || 32 == n.length) {
                    var r = Bt(n);
                    if (ce) {
                      var i = !1;
                      (me && _e != t) || (i = !0), i && b(ce, t, r, n.length);
                    }
                    me && _e == t && (ae = n), Kt(r);
                  }
                }
              });
            break;
          case "decodeAudioPort2":
            tt && tt.close(), (tt = e.ports[0]);
            break;
          case "startAudioEncode":
            if (ye && t.ssid) {
              ye = !1;
              var T,
                D,
                R = oe;
              if (
                ((T = R ? R.length : 0),
                (D = Bt(R)),
                (ce = I(t.ssid, Ee, ue, D, T, Le, me, gt, 1)) &&
                  gt &&
                  U(ce, pe || Ce ? 0 : 2),
                Kt(D),
                re && S(ce, 0, re, re.length),
                ae)
              ) {
                var d = Bt(ae);
                b(ce, _e, d, ae.length), Kt(d);
              }
            }
            if (!ce) return;
            (x = t.isSharing ? 1 : 0), (j = t.samplerate), B(ce, x);
            break;
          case "AecFlag":
            (Le = t.flag), ce && y(ce, Le);
            break;
          case "audioDecodeSAB":
            var N = t.data.buffer,
              W = t.data.bytesPerEle;
            self.audioDecodeMain2WorkerRingbuffer = new O.RingBuffer(N, W);
            break;
          case "audioEncodeSAB":
            var k = t.data.buffer,
              K = t.data.bytesPerEle;
            (self.bAudioEncodeMainThreadConsumerIntervalEnable =
              t.data.bAudioEncodeMainThreadConsumerIntervalEnable),
              (self.audioEncodeMain2WorkerRingbuffer = new O.RingBuffer(k, K));
            break;
          case "PAUSE_OR_RESUME_AUDIO_DECODE":
            var Z = t.data.bPause;
            Me = Z;
            break;
          case "cc_set_lang":
            (q[0] = t.lang), Q(ce, z);
            break;
          case "interpretation_enable":
            (P[0] = t.enable ? 1 : 0), g(ce, l.INTERPRETATION_ENABLE, V, 1);
            break;
          case "interpretation_set_lang":
            (P[0] = t.lang), g(ce, l.INTERPRETATION_SET_LANG, V, 1);
            break;
          case "interpretation_mute_origin":
            (P[0] = t.mute ? 1 : 0), g(ce, l.INTERPRETATION_MUTE, V, 1);
            break;
          case "interpretation_set_interpreter":
            var X = P,
              J = V;
            t.interpreterList.length >= 10 &&
              (console.error(
                "interpreter list is larger than",
                9,
                "please help to make sure that is true?"
              ),
              (J = Module._malloc(4 * t.interpreterList.length)),
              (X = Module.HEAPU32.subarray(
                J / 4,
                J / 4 + t.interpreterList.length
              )));
            for (var $ = 0; $ < t.interpreterList.length; $++)
              X[$] = t.interpreterList[$];
            g(
              ce,
              l.INTERPRETATION_SET_INTERPRETER,
              J,
              t.interpreterList.length
            ),
              t.interpreterList.length >= 10 && Module._free(J);
            break;
          case "startAudioShare":
            if (!ce) return;
            (x = t.isStart), (j = t.samplerate), B(ce, x);
            break;
          case l.QOS_MONITORING:
            jt && clearInterval(jt),
              t.data.enable &&
                (jt = setInterval(function () {
                  H(ce);
                }, t.data.pollingInterval || l.QOS_DEFAULT_POLLING_INTERVAL));
            break;
          case "setShareVolumeLevel":
            if (!ce) return;
            Y(
              t.isFromMainSession ? Ke.audioHandle : ce,
              t.userid,
              t.shareVolume
            );
            break;
          case "BUILD_MA_CHANNEL_IN_BO":
            Ke.open({ wsUrl: t.data });
            break;
          case "UPDATE_MEDIA_PARAMS":
            var te = t.data;
            if (te.isFromMainSession) {
              var ne = te.updateParams,
                fe = ne.encryptKey,
                ve = ne.encryptType,
                Ue = ne.userId,
                ge = ne.meetingNumber,
                He = ne.confId;
              Ke.createHandle({
                userId: Ue,
                meetingNumber: ge + "",
                meetingId: He,
              }),
                Ke.pipeTo(ce),
                Ke.setAudioEncryptionKey(fe, ve);
            }
            break;
          case "USER_NODE_LIST_IN_MAIN_SESSION":
            var ke = t.data;
            ke.isFromMainSession && Ke.updateRosterInfo(ke.body);
            break;
          case "ENABLE_SHARE_TO_BO":
            if (!ce) return;
            ee(ce, t.data);
        }
      });
  },
  function (e, t, n) {
    e.exports = n(151);
  },
  function (e, t, n) {
    n(152), (e.exports = 9007199254740991);
  },
  function (e, t, n) {
    var r = n(3);
    r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(24),
      i = n(11)(n(47)),
      _ = r(n(149));
    (self.databaseDataType = "audiosimd"),
      (0, i.default)(_).forEach(function (e) {
        return (self[e] = _[e]);
      });
  },
]);
self.__wasmCodeDataEndFlag = 1;
var Module = typeof Module !== "undefined" ? Module : {};
Module["onRuntimeInitialized"] = function () {
  self.onWasmModuleReady();
};
var Module = typeof Module !== "undefined" ? Module : {};
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = function (status, toThrow) {
  throw toThrow;
};
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === "object";
ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
ENVIRONMENT_IS_NODE =
  typeof process === "object" &&
  typeof process.versions === "object" &&
  typeof process.versions.node === "string";
ENVIRONMENT_IS_SHELL =
  !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
var scriptDirectory = "";
function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var read_, readAsync, readBinary, setWindowTitle;
var nodeFS;
var nodePath;
if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require("path").dirname(scriptDirectory) + "/";
  } else {
    scriptDirectory = __dirname + "/";
  }
  read_ = function shell_read(filename, binary) {
    if (!nodeFS) nodeFS = require("fs");
    if (!nodePath) nodePath = require("path");
    filename = nodePath["normalize"](filename);
    return nodeFS["readFileSync"](filename, binary ? null : "utf8");
  };
  readBinary = function readBinary(filename) {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };
  if (process["argv"].length > 1) {
    thisProgram = process["argv"][1].replace(/\\/g, "/");
  }
  arguments_ = process["argv"].slice(2);
  if (typeof module !== "undefined") {
    module["exports"] = Module;
  }
  process["on"]("uncaughtException", function (ex) {
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  process["on"]("unhandledRejection", abort);
  quit_ = function (status) {
    process["exit"](status);
  };
  Module["inspect"] = function () {
    return "[Emscripten Module object]";
  };
} else if (ENVIRONMENT_IS_SHELL) {
  if (typeof read != "undefined") {
    read_ = function shell_read(f) {
      return read(f);
    };
  }
  readBinary = function readBinary(f) {
    var data;
    if (typeof readbuffer === "function") {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, "binary");
    assert(typeof data === "object");
    return data;
  };
  if (typeof scriptArgs != "undefined") {
    arguments_ = scriptArgs;
  } else if (typeof arguments != "undefined") {
    arguments_ = arguments;
  }
  if (typeof quit === "function") {
    quit_ = function (status) {
      quit(status);
    };
  }
  if (typeof print !== "undefined") {
    if (typeof console === "undefined") console = {};
    console.log = print;
    console.warn = console.error =
      typeof printErr !== "undefined" ? printErr : print;
  }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = self.location.href;
  } else if (typeof document !== "undefined" && document.currentScript) {
    scriptDirectory = document.currentScript.src;
  }
  if (scriptDirectory.indexOf("blob:") !== 0) {
    scriptDirectory = scriptDirectory.substr(
      0,
      scriptDirectory.lastIndexOf("/") + 1
    );
  } else {
    scriptDirectory = "";
  }
  {
    read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function xhr_onload() {
        if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
  }
  setWindowTitle = function (title) {
    document.title = title;
  };
} else {
}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var STACK_ALIGN = 16;
function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN;
  return Math.ceil(size / factor) * factor;
}
function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}
function convertJsFunctionToWasm(func, sig) {
  if (typeof WebAssembly.Function === "function") {
    var typeNames = { i: "i32", j: "i64", f: "f32", d: "f64" };
    var type = {
      parameters: [],
      results: sig[0] == "v" ? [] : [typeNames[sig[0]]],
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }
  var typeSection = [1, 0, 1, 96];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = { i: 127, j: 126, f: 125, d: 124 };
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }
  if (sigRet == "v") {
    typeSection.push(0);
  } else {
    typeSection = typeSection.concat([1, typeCodes[sigRet]]);
  }
  typeSection[1] = typeSection.length - 2;
  var bytes = new Uint8Array(
    [0, 97, 115, 109, 1, 0, 0, 0].concat(
      typeSection,
      [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]
    )
  );
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, { e: { f: func } });
  var wrappedFunc = instance.exports["f"];
  return wrappedFunc;
}
var freeTableIndexes = [];
var functionsInTableMap;
function getEmptyTableSlot() {
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
  }
  return wasmTable.length - 1;
}
function addFunctionWasm(func, sig) {
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }
  var ret = getEmptyTableSlot();
  try {
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }
  functionsInTableMap.set(func, ret);
  return ret;
}
var tempRet0 = 0;
var setTempRet0 = function (value) {
  tempRet0 = value;
};
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
var noExitRuntime;
if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
if (typeof WebAssembly !== "object") {
  abort("no native wasm support detected");
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort("Assertion failed: " + text);
  }
}
function getCFunc(ident) {
  var func = Module["_" + ident];
  assert(
    func,
    "Cannot call unknown function " + ident + ", make sure it is exported"
  );
  return func;
}
function ccall(ident, returnType, argTypes, args, opts) {
  var toC = {
    string: function (str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    array: function (arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === "string") return UTF8ToString(ret);
    if (returnType === "boolean") return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  var numericArgs = argTypes.every(function (type) {
    return type === "number";
  });
  var numericRet = returnType !== "string";
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function () {
    return ccall(ident, returnType, argTypes, arguments, opts);
  };
}
var ALLOC_STACK = 1;
var UTF8Decoder =
  typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = "";
    while (idx < endPtr) {
      var u0 = heap[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      var u1 = heap[idx++] & 63;
      if ((u0 & 224) == 192) {
        str += String.fromCharCode(((u0 & 31) << 6) | u1);
        continue;
      }
      var u2 = heap[idx++] & 63;
      if ((u0 & 240) == 224) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 65536;
        str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
      }
    }
  }
  return str;
}
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | (u >> 6);
      heap[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | (u >> 12);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 240 | (u >> 18);
      heap[outIdx++] = 128 | ((u >> 12) & 63);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    }
  }
  heap[outIdx] = 0;
  return outIdx - startIdx;
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343)
      u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
    if (u <= 127) ++len;
    else if (u <= 2047) len += 2;
    else if (u <= 65535) len += 3;
    else len += 4;
  }
  return len;
}
var UTF16Decoder =
  typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}
function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[buffer++ >> 0] = str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module["HEAP8"] = HEAP8 = new Int8Array(buf);
  Module["HEAP16"] = HEAP16 = new Int16Array(buf);
  Module["HEAP32"] = HEAP32 = new Int32Array(buf);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}
var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 67108864;
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
var runtimeExited = false;
function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function")
      Module["preRun"] = [Module["preRun"]];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
  TTY.init();
  PIPEFS.root = FS.mount(PIPEFS, {}, null);
  SOCKFS.root = FS.mount(SOCKFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  runtimeExited = true;
}
function postRun() {
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function")
      Module["postRun"] = [Module["postRun"]];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function getUniqueRunDependency(id) {
  return id;
}
function addRunDependency(id) {
  runDependencies++;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
}
function removeRunDependency(id) {
  runDependencies--;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}
Module["preloadedImages"] = {};
Module["preloadedAudios"] = {};
function abort(what) {
  if (Module["onAbort"]) {
    Module["onAbort"](what);
  }
  what += "";
  err(what);
  ABORT = true;
  EXITSTATUS = 1;
  what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
function hasPrefix(str, prefix) {
  return String.prototype.startsWith
    ? str.startsWith(prefix)
    : str.indexOf(prefix) === 0;
}
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}
var fileURIPrefix = "file://";
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}
var wasmBinaryFile = "audio.simd.wasm";
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}
function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  } catch (err) {
    abort(err);
  }
}
function getBinaryPromise() {
  if (
    !wasmBinary &&
    (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
    typeof fetch === "function" &&
    !isFileURI(wasmBinaryFile)
  ) {
    return fetch(wasmBinaryFile, { credentials: "same-origin" })
      .then(function (response) {
        if (!response["ok"]) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response["arrayBuffer"]();
      })
      .catch(function () {
        return getBinary();
      });
  }
  return Promise.resolve().then(getBinary);
}
function createWasm() {
  var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module["asm"] = exports;
    wasmMemory = Module["asm"]["memory"];
    updateGlobalBufferAndViews(wasmMemory.buffer);
    wasmTable = Module["asm"]["__indirect_function_table"];
    removeRunDependency("wasm-instantiate");
  }
  addRunDependency("wasm-instantiate");
  function receiveInstantiatedSource(output) {
    receiveInstance(output["instance"]);
  }
  function instantiateArrayBuffer(receiver) {
    return instantiateCachedURL(560, wasmUrl, info);
    return {};
    getBinaryPromise()
      .then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      })
      .then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
  }
  function instantiateAsync() {
    if (
      !wasmBinary &&
      typeof WebAssembly.instantiateStreaming === "function" &&
      !isDataURI(wasmBinaryFile) &&
      !isFileURI(wasmBinaryFile) &&
      typeof fetch === "function"
    ) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
        function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiatedSource, function (reason) {
            err("wasm streaming compile failed: " + reason);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
        }
      );
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  if (Module["instantiateWasm"]) {
    try {
      var exports = Module["instantiateWasm"](info, receiveInstance);
      return exports;
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: " + e);
      return false;
    }
  }
  instantiateAsync();
  return {};
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
  1096: function ($0, $1) {
    send_data($0, $1);
  },
  1122: function ($0, $1) {
    SAVE_IV($0, $1);
  },
  1143: function ($0, $1, $2) {
    audio_encode_frame_callback($0, $1, $2);
  },
  1192: function ($0, $1, $2) {
    Get_ExternalRecord($0, $1, $2);
  },
  1232: function () {
    return Date.now();
  },
  1256: function ($0, $1) {
    update_play_time($0, $1);
  },
  1303: function ($0, $1, $2, $3, $4, $5) {
    responseAudioQosData($0, $1, $2, $3, $4, $5);
  },
  1358: function ($0, $1, $2, $3, $4, $5, $6, $7) {
    frame_callback($0, $1, $2, $3, $4, $5, $6, $7);
  },
  1441: function ($0, $1) {
    get_edition($0, $1);
  },
  6454: function ($0, $1, $2, $3) {
    LOG_OUT_WEBRTC($0, $1, $2, $3);
  },
};
function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == "function") {
      callback(Module);
      continue;
    }
    var func = callback.func;
    if (typeof func === "number") {
      if (callback.arg === undefined) {
        wasmTable.get(func)();
      } else {
        wasmTable.get(func)(callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
function demangle(func) {
  demangle.recursionGuard = (demangle.recursionGuard | 0) + 1;
  if (demangle.recursionGuard > 1) return func;
  var __cxa_demangle_func =
    Module["___cxa_demangle"] || Module["__cxa_demangle"];
  assert(__cxa_demangle_func);
  var stackTop = stackSave();
  try {
    var s = func;
    if (s.startsWith("__Z")) s = s.substr(1);
    var len = lengthBytesUTF8(s) + 1;
    var buf = stackAlloc(len);
    stringToUTF8(s, buf, len);
    var status = stackAlloc(4);
    var ret = __cxa_demangle_func(buf, 0, 0, status);
    if (HEAP32[status >> 2] === 0 && ret) {
      return UTF8ToString(ret);
    }
  } catch (e) {
  } finally {
    _free(ret);
    stackRestore(stackTop);
    if (demangle.recursionGuard < 2) --demangle.recursionGuard;
  }
  return func;
}
function demangleAll(text) {
  var regex = /\b_Z[\w\d_]+/g;
  return text.replace(regex, function (x) {
    var y = demangle(x);
    return x === y ? x : y + " [" + x + "]";
  });
}
function jsStackTrace() {
  var error = new Error();
  if (!error.stack) {
    try {
      throw new Error();
    } catch (e) {
      error = e;
    }
    if (!error.stack) {
      return "(no stack trace available)";
    }
  }
  return error.stack.toString();
}
function _SKP_Silk_LPC_synthesis_order16_sse41() {
  err("missing function: SKP_Silk_LPC_synthesis_order16_sse41");
  abort(-1);
}
function _SKP_Silk_MA_Prediction_sse2() {
  err("missing function: SKP_Silk_MA_Prediction_sse2");
  abort(-1);
}
function _SKP_Silk_MA_Prediction_sse41() {
  err("missing function: SKP_Silk_MA_Prediction_sse41");
  abort(-1);
}
function _SKP_Silk_NLSF_MSVQ_decode_sse41() {
  err("missing function: SKP_Silk_NLSF_MSVQ_decode_sse41");
  abort(-1);
}
function _SKP_Silk_NLSF_VQ_sum_error_FIX_sse41() {
  err("missing function: SKP_Silk_NLSF_VQ_sum_error_FIX_sse41");
  abort(-1);
}
function _SKP_Silk_NSQ_del_dec_sse41() {
  err("missing function: SKP_Silk_NSQ_del_dec_sse41");
  abort(-1);
}
function _SKP_Silk_PLC_conceal_sse41() {
  err("missing function: SKP_Silk_PLC_conceal_sse41");
  abort(-1);
}
function _SKP_Silk_decode_core_sse41() {
  err("missing function: SKP_Silk_decode_core_sse41");
  abort(-1);
}
function _SKP_Silk_inner_prod_aligned_sse2() {
  err("missing function: SKP_Silk_inner_prod_aligned_sse2");
  abort(-1);
}
function _SKP_Silk_int16_array_maxabs_sse41() {
  err("missing function: SKP_Silk_int16_array_maxabs_sse41");
  abort(-1);
}
function _SKP_Silk_resampler_private_IIR_FIR_INTERPOL_sse2() {
  err("missing function: SKP_Silk_resampler_private_IIR_FIR_INTERPOL_sse2");
  abort(-1);
}
function _SKP_Silk_resampler_private_up2_HQ_sse41() {
  err("missing function: SKP_Silk_resampler_private_up2_HQ_sse41");
  abort(-1);
}
function _SKP_Silk_warped_LPC_analysis_filter_FIX_sse41() {
  err("missing function: SKP_Silk_warped_LPC_analysis_filter_FIX_sse41");
  abort(-1);
}
function _SKP_Silk_warped_autocorrelation_FIX_sse2() {
  err("missing function: SKP_Silk_warped_autocorrelation_FIX_sse2");
  abort(-1);
}
function _SKP_Silk_warped_autocorrelation_FIX_sse41() {
  err("missing function: SKP_Silk_warped_autocorrelation_FIX_sse41");
  abort(-1);
}
function ___assert_fail(condition, filename, line, func) {
  abort(
    "Assertion failed: " +
      UTF8ToString(condition) +
      ", at: " +
      [
        filename ? UTF8ToString(filename) : "unknown filename",
        line,
        func ? UTF8ToString(func) : "unknown function",
      ]
  );
}
var ExceptionInfoAttrs = {
  DESTRUCTOR_OFFSET: 0,
  REFCOUNT_OFFSET: 4,
  TYPE_OFFSET: 8,
  CAUGHT_OFFSET: 12,
  RETHROWN_OFFSET: 13,
  SIZE: 16,
};
function ___cxa_allocate_exception(size) {
  return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
}
function _atexit(func, arg) {}
function ___cxa_atexit(a0, a1) {
  return _atexit(a0, a1);
}
function ExceptionInfo(excPtr) {
  this.excPtr = excPtr;
  this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  this.set_type = function (type) {
    HEAP32[(this.ptr + ExceptionInfoAttrs.TYPE_OFFSET) >> 2] = type;
  };
  this.get_type = function () {
    return HEAP32[(this.ptr + ExceptionInfoAttrs.TYPE_OFFSET) >> 2];
  };
  this.set_destructor = function (destructor) {
    HEAP32[(this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET) >> 2] = destructor;
  };
  this.get_destructor = function () {
    return HEAP32[(this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET) >> 2];
  };
  this.set_refcount = function (refcount) {
    HEAP32[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2] = refcount;
  };
  this.set_caught = function (caught) {
    caught = caught ? 1 : 0;
    HEAP8[(this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET) >> 0] = caught;
  };
  this.get_caught = function () {
    return HEAP8[(this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET) >> 0] != 0;
  };
  this.set_rethrown = function (rethrown) {
    rethrown = rethrown ? 1 : 0;
    HEAP8[(this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET) >> 0] = rethrown;
  };
  this.get_rethrown = function () {
    return HEAP8[(this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET) >> 0] != 0;
  };
  this.init = function (type, destructor) {
    this.set_type(type);
    this.set_destructor(destructor);
    this.set_refcount(0);
    this.set_caught(false);
    this.set_rethrown(false);
  };
  this.add_ref = function () {
    var value = HEAP32[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2];
    HEAP32[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2] = value + 1;
  };
  this.release_ref = function () {
    var prev = HEAP32[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2];
    HEAP32[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2] = prev - 1;
    return prev === 1;
  };
}
var exceptionLast = 0;
var uncaughtExceptionCount = 0;
function ___cxa_throw(ptr, type, destructor) {
  var info = new ExceptionInfo(ptr);
  info.init(type, destructor);
  exceptionLast = ptr;
  uncaughtExceptionCount++;
  throw ptr;
}
function _gmtime_r(time, tmPtr) {
  var date = new Date(HEAP32[time >> 2] * 1e3);
  HEAP32[tmPtr >> 2] = date.getUTCSeconds();
  HEAP32[(tmPtr + 4) >> 2] = date.getUTCMinutes();
  HEAP32[(tmPtr + 8) >> 2] = date.getUTCHours();
  HEAP32[(tmPtr + 12) >> 2] = date.getUTCDate();
  HEAP32[(tmPtr + 16) >> 2] = date.getUTCMonth();
  HEAP32[(tmPtr + 20) >> 2] = date.getUTCFullYear() - 1900;
  HEAP32[(tmPtr + 24) >> 2] = date.getUTCDay();
  HEAP32[(tmPtr + 36) >> 2] = 0;
  HEAP32[(tmPtr + 32) >> 2] = 0;
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
  var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
  HEAP32[(tmPtr + 40) >> 2] = _gmtime_r.GMTString;
  return tmPtr;
}
function ___gmtime_r(a0, a1) {
  return _gmtime_r(a0, a1);
}
function _tzset() {
  if (_tzset.called) return;
  _tzset.called = true;
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  HEAP32[__get_timezone() >> 2] = stdTimezoneOffset * 60;
  HEAP32[__get_daylight() >> 2] = Number(winterOffset != summerOffset);
  function extractZone(date) {
    var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
    return match ? match[1] : "GMT";
  }
  var winterName = extractZone(winter);
  var summerName = extractZone(summer);
  var winterNamePtr = allocateUTF8(winterName);
  var summerNamePtr = allocateUTF8(summerName);
  if (summerOffset < winterOffset) {
    HEAP32[__get_tzname() >> 2] = winterNamePtr;
    HEAP32[(__get_tzname() + 4) >> 2] = summerNamePtr;
  } else {
    HEAP32[__get_tzname() >> 2] = summerNamePtr;
    HEAP32[(__get_tzname() + 4) >> 2] = winterNamePtr;
  }
}
function _localtime_r(time, tmPtr) {
  _tzset();
  var date = new Date(HEAP32[time >> 2] * 1e3);
  HEAP32[tmPtr >> 2] = date.getSeconds();
  HEAP32[(tmPtr + 4) >> 2] = date.getMinutes();
  HEAP32[(tmPtr + 8) >> 2] = date.getHours();
  HEAP32[(tmPtr + 12) >> 2] = date.getDate();
  HEAP32[(tmPtr + 16) >> 2] = date.getMonth();
  HEAP32[(tmPtr + 20) >> 2] = date.getFullYear() - 1900;
  HEAP32[(tmPtr + 24) >> 2] = date.getDay();
  var start = new Date(date.getFullYear(), 0, 1);
  var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  HEAP32[(tmPtr + 36) >> 2] = -(date.getTimezoneOffset() * 60);
  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dst =
    (summerOffset != winterOffset &&
      date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
  HEAP32[(tmPtr + 32) >> 2] = dst;
  var zonePtr = HEAP32[(__get_tzname() + (dst ? 4 : 0)) >> 2];
  HEAP32[(tmPtr + 40) >> 2] = zonePtr;
  return tmPtr;
}
function ___localtime_r(a0, a1) {
  return _localtime_r(a0, a1);
}
var PATH = {
  splitPath: function (filename) {
    var splitPathRe =
      /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: function (parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift("..");
      }
    }
    return parts;
  },
  normalize: function (path) {
    var isAbsolute = path.charAt(0) === "/",
      trailingSlash = path.substr(-1) === "/";
    path = PATH.normalizeArray(
      path.split("/").filter(function (p) {
        return !!p;
      }),
      !isAbsolute
    ).join("/");
    if (!path && !isAbsolute) {
      path = ".";
    }
    if (path && trailingSlash) {
      path += "/";
    }
    return (isAbsolute ? "/" : "") + path;
  },
  dirname: function (path) {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return ".";
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  },
  basename: function (path) {
    if (path === "/") return "/";
    path = PATH.normalize(path);
    path = path.replace(/\/$/, "");
    var lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return path;
    return path.substr(lastSlash + 1);
  },
  extname: function (path) {
    return PATH.splitPath(path)[3];
  },
  join: function () {
    var paths = Array.prototype.slice.call(arguments, 0);
    return PATH.normalize(paths.join("/"));
  },
  join2: function (l, r) {
    return PATH.normalize(l + "/" + r);
  },
};
function getRandomDevice() {
  if (
    typeof crypto === "object" &&
    typeof crypto["getRandomValues"] === "function"
  ) {
    var randomBuffer = new Uint8Array(1);
    return function () {
      crypto.getRandomValues(randomBuffer);
      return randomBuffer[0];
    };
  } else if (ENVIRONMENT_IS_NODE) {
    try {
      var crypto_module = require("crypto");
      return function () {
        return crypto_module["randomBytes"](1)[0];
      };
    } catch (e) {}
  }
  return function () {
    abort("randomDevice");
  };
}
var PATH_FS = {
  resolve: function () {
    var resolvedPath = "",
      resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : FS.cwd();
      if (typeof path !== "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path) {
        return "";
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charAt(0) === "/";
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split("/").filter(function (p) {
        return !!p;
      }),
      !resolvedAbsolute
    ).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  },
  relative: function (from, to) {
    from = PATH_FS.resolve(from).substr(1);
    to = PATH_FS.resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== "") break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== "") break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  },
};
var TTY = {
  ttys: [],
  init: function () {},
  shutdown: function () {},
  register: function (dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops: ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open: function (stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close: function (stream) {
      stream.tty.ops.flush(stream.tty);
    },
    flush: function (stream) {
      stream.tty.ops.flush(stream.tty);
    },
    read: function (stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    },
    write: function (stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char: function (tty) {
      if (!tty.input.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          var BUFSIZE = 256;
          var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
          var bytesRead = 0;
          try {
            bytesRead = nodeFS.readSync(
              process.stdin.fd,
              buf,
              0,
              BUFSIZE,
              null
            );
          } catch (e) {
            if (e.toString().indexOf("EOF") != -1) bytesRead = 0;
            else throw e;
          }
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString("utf-8");
          } else {
            result = null;
          }
        } else if (
          typeof window != "undefined" &&
          typeof window.prompt == "function"
        ) {
          result = window.prompt("Input: ");
          if (result !== null) {
            result += "\n";
          }
        } else if (typeof readline == "function") {
          result = readline();
          if (result !== null) {
            result += "\n";
          }
        }
        if (!result) {
          return null;
        }
        tty.input = intArrayFromString(result, true);
      }
      return tty.input.shift();
    },
    put_char: function (tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    flush: function (tty) {
      if (tty.output && tty.output.length > 0) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
  },
  default_tty1_ops: {
    put_char: function (tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    flush: function (tty) {
      if (tty.output && tty.output.length > 0) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
  },
};
function mmapAlloc(size) {
  var alignedSize = alignMemory(size, 16384);
  var ptr = _malloc(alignedSize);
  while (size < alignedSize) HEAP8[ptr + size++] = 0;
  return ptr;
}
var MEMFS = {
  ops_table: null,
  mount: function (mount) {
    return MEMFS.createNode(null, "/", 16384 | 511, 0);
  },
  createNode: function (parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    if (!MEMFS.ops_table) {
      MEMFS.ops_table = {
        dir: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            lookup: MEMFS.node_ops.lookup,
            mknod: MEMFS.node_ops.mknod,
            rename: MEMFS.node_ops.rename,
            unlink: MEMFS.node_ops.unlink,
            rmdir: MEMFS.node_ops.rmdir,
            readdir: MEMFS.node_ops.readdir,
            symlink: MEMFS.node_ops.symlink,
          },
          stream: { llseek: MEMFS.stream_ops.llseek },
        },
        file: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: {
            llseek: MEMFS.stream_ops.llseek,
            read: MEMFS.stream_ops.read,
            write: MEMFS.stream_ops.write,
            allocate: MEMFS.stream_ops.allocate,
            mmap: MEMFS.stream_ops.mmap,
            msync: MEMFS.stream_ops.msync,
          },
        },
        link: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            readlink: MEMFS.node_ops.readlink,
          },
          stream: {},
        },
        chrdev: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: FS.chrdev_stream_ops,
        },
      };
    }
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
    }
    return node;
  },
  getFileDataAsRegularArray: function (node) {
    if (node.contents && node.contents.subarray) {
      var arr = [];
      for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
      return arr;
    }
    return node.contents;
  },
  getFileDataAsTypedArray: function (node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage: function (node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
    return;
  },
  resizeFileStorage: function (node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
      return;
    }
    if (!node.contents || node.contents.subarray) {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes))
        );
      }
      node.usedBytes = newSize;
      return;
    }
    if (!node.contents) node.contents = [];
    if (node.contents.length > newSize) node.contents.length = newSize;
    else while (node.contents.length < newSize) node.contents.push(0);
    node.usedBytes = newSize;
  },
  node_ops: {
    getattr: function (node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr: function (node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup: function (parent, name) {
      throw FS.genericErrors[44];
    },
    mknod: function (parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename: function (old_node, new_dir, new_name) {
      if (FS.isDir(old_node.mode)) {
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (new_node) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
      }
      delete old_node.parent.contents[old_node.name];
      old_node.name = new_name;
      new_dir.contents[new_name] = old_node;
      old_node.parent = new_dir;
    },
    unlink: function (parent, name) {
      delete parent.contents[name];
    },
    rmdir: function (parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
    },
    readdir: function (node) {
      var entries = [".", ".."];
      for (var key in node.contents) {
        if (!node.contents.hasOwnProperty(key)) {
          continue;
        }
        entries.push(key);
      }
      return entries;
    },
    symlink: function (parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink: function (node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    },
  },
  stream_ops: {
    read: function (stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write: function (stream, buffer, offset, length, position, canOwn) {
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    allocate: function (stream, offset, length) {
      MEMFS.expandFileStorage(stream.node, offset + length);
      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
    },
    mmap: function (stream, address, length, position, prot, flags) {
      assert(address === 0);
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (!(flags & 2) && contents.buffer === buffer) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        if (position > 0 || position + length < contents.length) {
          if (contents.subarray) {
            contents = contents.subarray(position, position + length);
          } else {
            contents = Array.prototype.slice.call(
              contents,
              position,
              position + length
            );
          }
        }
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        HEAP8.set(contents, ptr);
      }
      return { ptr: ptr, allocated: allocated };
    },
    msync: function (stream, buffer, offset, length, mmapFlags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      if (mmapFlags & 2) {
        return 0;
      }
      var bytesWritten = MEMFS.stream_ops.write(
        stream,
        buffer,
        0,
        length,
        offset,
        false
      );
      return 0;
    },
  },
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: "/",
  initialized: false,
  ignorePermissions: true,
  trackingDelegate: {},
  tracking: { openFlags: { READ: 1, WRITE: 2 } },
  ErrnoError: null,
  genericErrors: {},
  filesystems: null,
  syncFSRequests: 0,
  lookupPath: function (path, opts) {
    path = PATH_FS.resolve(FS.cwd(), path);
    opts = opts || {};
    if (!path) return { path: "", node: null };
    var defaults = { follow_mount: true, recurse_count: 0 };
    for (var key in defaults) {
      if (opts[key] === undefined) {
        opts[key] = defaults[key];
      }
    }
    if (opts.recurse_count > 8) {
      throw new FS.ErrnoError(32);
    }
    var parts = PATH.normalizeArray(
      path.split("/").filter(function (p) {
        return !!p;
      }),
      false
    );
    var current = FS.root;
    var current_path = "/";
    for (var i = 0; i < parts.length; i++) {
      var islast = i === parts.length - 1;
      if (islast && opts.parent) {
        break;
      }
      current = FS.lookupNode(current, parts[i]);
      current_path = PATH.join2(current_path, parts[i]);
      if (FS.isMountpoint(current)) {
        if (!islast || (islast && opts.follow_mount)) {
          current = current.mounted.root;
        }
      }
      if (!islast || opts.follow) {
        var count = 0;
        while (FS.isLink(current.mode)) {
          var link = FS.readlink(current_path);
          current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
          var lookup = FS.lookupPath(current_path, {
            recurse_count: opts.recurse_count,
          });
          current = lookup.node;
          if (count++ > 40) {
            throw new FS.ErrnoError(32);
          }
        }
      }
    }
    return { path: current_path, node: current };
  },
  getPath: function (node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== "/"
          ? mount + "/" + path
          : mount + path;
      }
      path = path ? node.name + "/" + path : node.name;
      node = node.parent;
    }
  },
  hashName: function (parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode: function (node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode: function (node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode: function (parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode, parent);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode: function (parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode: function (node) {
    FS.hashRemoveNode(node);
  },
  isRoot: function (node) {
    return node === node.parent;
  },
  isMountpoint: function (node) {
    return !!node.mounted;
  },
  isFile: function (mode) {
    return (mode & 61440) === 32768;
  },
  isDir: function (mode) {
    return (mode & 61440) === 16384;
  },
  isLink: function (mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev: function (mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev: function (mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO: function (mode) {
    return (mode & 61440) === 4096;
  },
  isSocket: function (mode) {
    return (mode & 49152) === 49152;
  },
  flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
  modeStringToFlags: function (str) {
    var flags = FS.flagModes[str];
    if (typeof flags === "undefined") {
      throw new Error("Unknown file open mode: " + str);
    }
    return flags;
  },
  flagsToPermissionString: function (flag) {
    var perms = ["r", "w", "rw"][flag & 3];
    if (flag & 512) {
      perms += "w";
    }
    return perms;
  },
  nodePermissions: function (node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
      return 2;
    } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
      return 2;
    } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup: function (dir) {
    var errCode = FS.nodePermissions(dir, "x");
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate: function (dir, name) {
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, "wx");
  },
  mayDelete: function (dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, "wx");
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen: function (node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  MAX_OPEN_FDS: 4096,
  nextfd: function (fd_start, fd_end) {
    fd_start = fd_start || 0;
    fd_end = fd_end || FS.MAX_OPEN_FDS;
    for (var fd = fd_start; fd <= fd_end; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStream: function (fd) {
    return FS.streams[fd];
  },
  createStream: function (stream, fd_start, fd_end) {
    if (!FS.FSStream) {
      FS.FSStream = function () {};
      FS.FSStream.prototype = {
        object: {
          get: function () {
            return this.node;
          },
          set: function (val) {
            this.node = val;
          },
        },
        isRead: {
          get: function () {
            return (this.flags & 2097155) !== 1;
          },
        },
        isWrite: {
          get: function () {
            return (this.flags & 2097155) !== 0;
          },
        },
        isAppend: {
          get: function () {
            return this.flags & 1024;
          },
        },
      };
    }
    var newStream = new FS.FSStream();
    for (var p in stream) {
      newStream[p] = stream[p];
    }
    stream = newStream;
    var fd = FS.nextfd(fd_start, fd_end);
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream: function (fd) {
    FS.streams[fd] = null;
  },
  chrdev_stream_ops: {
    open: function (stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      if (stream.stream_ops.open) {
        stream.stream_ops.open(stream);
      }
    },
    llseek: function () {
      throw new FS.ErrnoError(70);
    },
  },
  major: function (dev) {
    return dev >> 8;
  },
  minor: function (dev) {
    return dev & 255;
  },
  makedev: function (ma, mi) {
    return (ma << 8) | mi;
  },
  registerDevice: function (dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: function (dev) {
    return FS.devices[dev];
  },
  getMounts: function (mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push.apply(check, m.mounts);
    }
    return mounts;
  },
  syncfs: function (populate, callback) {
    if (typeof populate === "function") {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(
        "warning: " +
          FS.syncFSRequests +
          " FS.syncfs operations in flight at once, probably just doing extra work"
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    mounts.forEach(function (mount) {
      if (!mount.type.syncfs) {
        return done(null);
      }
      mount.type.syncfs(mount, populate, done);
    });
  },
  mount: function (type, opts, mountpoint) {
    var root = mountpoint === "/";
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type: type, opts: opts, mountpoint: mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount: function (mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    Object.keys(FS.nameTable).forEach(function (hash) {
      var current = FS.nameTable[hash];
      while (current) {
        var next = current.name_next;
        if (mounts.indexOf(current.mount) !== -1) {
          FS.destroyNode(current);
        }
        current = next;
      }
    });
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup: function (parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod: function (path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name || name === "." || name === "..") {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  create: function (path, mode) {
    mode = mode !== undefined ? mode : 438;
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir: function (path, mode) {
    mode = mode !== undefined ? mode : 511;
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree: function (path, mode) {
    var dirs = path.split("/");
    var d = "";
    for (var i = 0; i < dirs.length; ++i) {
      if (!dirs[i]) continue;
      d += "/" + dirs[i];
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev: function (path, mode, dev) {
    if (typeof dev === "undefined") {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink: function (oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename: function (old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, "w");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    try {
      if (FS.trackingDelegate["willMovePath"]) {
        FS.trackingDelegate["willMovePath"](old_path, new_path);
      }
    } catch (e) {
      err(
        "FS.trackingDelegate['willMovePath']('" +
          old_path +
          "', '" +
          new_path +
          "') threw an exception: " +
          e.message
      );
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
    try {
      if (FS.trackingDelegate["onMovePath"])
        FS.trackingDelegate["onMovePath"](old_path, new_path);
    } catch (e) {
      err(
        "FS.trackingDelegate['onMovePath']('" +
          old_path +
          "', '" +
          new_path +
          "') threw an exception: " +
          e.message
      );
    }
  },
  rmdir: function (path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    try {
      if (FS.trackingDelegate["willDeletePath"]) {
        FS.trackingDelegate["willDeletePath"](path);
      }
    } catch (e) {
      err(
        "FS.trackingDelegate['willDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message
      );
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
    try {
      if (FS.trackingDelegate["onDeletePath"])
        FS.trackingDelegate["onDeletePath"](path);
    } catch (e) {
      err(
        "FS.trackingDelegate['onDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message
      );
    }
  },
  readdir: function (path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    if (!node.node_ops.readdir) {
      throw new FS.ErrnoError(54);
    }
    return node.node_ops.readdir(node);
  },
  unlink: function (path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    try {
      if (FS.trackingDelegate["willDeletePath"]) {
        FS.trackingDelegate["willDeletePath"](path);
      }
    } catch (e) {
      err(
        "FS.trackingDelegate['willDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message
      );
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
    try {
      if (FS.trackingDelegate["onDeletePath"])
        FS.trackingDelegate["onDeletePath"](path);
    } catch (e) {
      err(
        "FS.trackingDelegate['onDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message
      );
    }
  },
  readlink: function (path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return PATH_FS.resolve(
      FS.getPath(link.parent),
      link.node_ops.readlink(link)
    );
  },
  stat: function (path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (!node.node_ops.getattr) {
      throw new FS.ErrnoError(63);
    }
    return node.node_ops.getattr(node);
  },
  lstat: function (path) {
    return FS.stat(path, true);
  },
  chmod: function (path, mode, dontFollow) {
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      timestamp: Date.now(),
    });
  },
  lchmod: function (path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod: function (fd, mode) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    FS.chmod(stream.node, mode);
  },
  chown: function (path, uid, gid, dontFollow) {
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, { timestamp: Date.now() });
  },
  lchown: function (path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown: function (fd, uid, gid) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    FS.chown(stream.node, uid, gid);
  },
  truncate: function (path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, "w");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
  },
  ftruncate: function (fd, len) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.truncate(stream.node, len);
  },
  utime: function (path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
  },
  open: function (path, flags, mode, fd_start, fd_end) {
    if (path === "") {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
    mode = typeof mode === "undefined" ? 438 : mode;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    if (typeof path === "object") {
      node = path;
    } else {
      path = PATH.normalize(path);
      try {
        var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
        node = lookup.node;
      } catch (e) {}
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else {
        node = FS.mknod(path, mode, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream(
      {
        node: node,
        path: FS.getPath(node),
        flags: flags,
        seekable: true,
        position: 0,
        stream_ops: node.stream_ops,
        ungotten: [],
        error: false,
      },
      fd_start,
      fd_end
    );
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (Module["logReadFiles"] && !(flags & 1)) {
      if (!FS.readFiles) FS.readFiles = {};
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
        err("FS.trackingDelegate error on read file: " + path);
      }
    }
    try {
      if (FS.trackingDelegate["onOpenFile"]) {
        var trackingFlags = 0;
        if ((flags & 2097155) !== 1) {
          trackingFlags |= FS.tracking.openFlags.READ;
        }
        if ((flags & 2097155) !== 0) {
          trackingFlags |= FS.tracking.openFlags.WRITE;
        }
        FS.trackingDelegate["onOpenFile"](path, trackingFlags);
      }
    } catch (e) {
      err(
        "FS.trackingDelegate['onOpenFile']('" +
          path +
          "', flags) threw an exception: " +
          e.message
      );
    }
    return stream;
  },
  close: function (stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed: function (stream) {
    return stream.fd === null;
  },
  llseek: function (stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read: function (stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position !== "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write: function (stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position !== "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn
    );
    if (!seeking) stream.position += bytesWritten;
    try {
      if (stream.path && FS.trackingDelegate["onWriteToFile"])
        FS.trackingDelegate["onWriteToFile"](stream.path);
    } catch (e) {
      err(
        "FS.trackingDelegate['onWriteToFile']('" +
          stream.path +
          "') threw an exception: " +
          e.message
      );
    }
    return bytesWritten;
  },
  allocate: function (stream, offset, length) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (offset < 0 || length <= 0) {
      throw new FS.ErrnoError(28);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (!stream.stream_ops.allocate) {
      throw new FS.ErrnoError(138);
    }
    stream.stream_ops.allocate(stream, offset, length);
  },
  mmap: function (stream, address, length, position, prot, flags) {
    if (
      (prot & 2) !== 0 &&
      (flags & 2) === 0 &&
      (stream.flags & 2097155) !== 2
    ) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    return stream.stream_ops.mmap(
      stream,
      address,
      length,
      position,
      prot,
      flags
    );
  },
  msync: function (stream, buffer, offset, length, mmapFlags) {
    if (!stream || !stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  munmap: function (stream) {
    return 0;
  },
  ioctl: function (stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile: function (path, opts) {
    opts = opts || {};
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || "binary";
    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
      throw new Error('Invalid encoding type "' + opts.encoding + '"');
    }
    var ret;
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === "utf8") {
      ret = UTF8ArrayToString(buf, 0);
    } else if (opts.encoding === "binary") {
      ret = buf;
    }
    FS.close(stream);
    return ret;
  },
  writeFile: function (path, data, opts) {
    opts = opts || {};
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data === "string") {
      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
      FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
    } else if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      throw new Error("Unsupported data type");
    }
    FS.close(stream);
  },
  cwd: function () {
    return FS.currentPath;
  },
  chdir: function (path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, "x");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories: function () {
    FS.mkdir("/tmp");
    FS.mkdir("/home");
    FS.mkdir("/home/web_user");
  },
  createDefaultDevices: function () {
    FS.mkdir("/dev");
    FS.registerDevice(FS.makedev(1, 3), {
      read: function () {
        return 0;
      },
      write: function (stream, buffer, offset, length, pos) {
        return length;
      },
    });
    FS.mkdev("/dev/null", FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev("/dev/tty", FS.makedev(5, 0));
    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var random_device = getRandomDevice();
    FS.createDevice("/dev", "random", random_device);
    FS.createDevice("/dev", "urandom", random_device);
    FS.mkdir("/dev/shm");
    FS.mkdir("/dev/shm/tmp");
  },
  createSpecialDirectories: function () {
    FS.mkdir("/proc");
    FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd");
    FS.mount(
      {
        mount: function () {
          var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
          node.node_ops = {
            lookup: function (parent, name) {
              var fd = +name;
              var stream = FS.getStream(fd);
              if (!stream) throw new FS.ErrnoError(8);
              var ret = {
                parent: null,
                mount: { mountpoint: "fake" },
                node_ops: {
                  readlink: function () {
                    return stream.path;
                  },
                },
              };
              ret.parent = ret;
              return ret;
            },
          };
          return node;
        },
      },
      {},
      "/proc/self/fd"
    );
  },
  createStandardStreams: function () {
    if (Module["stdin"]) {
      FS.createDevice("/dev", "stdin", Module["stdin"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdin");
    }
    if (Module["stdout"]) {
      FS.createDevice("/dev", "stdout", null, Module["stdout"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdout");
    }
    if (Module["stderr"]) {
      FS.createDevice("/dev", "stderr", null, Module["stderr"]);
    } else {
      FS.symlink("/dev/tty1", "/dev/stderr");
    }
    var stdin = FS.open("/dev/stdin", 0);
    var stdout = FS.open("/dev/stdout", 1);
    var stderr = FS.open("/dev/stderr", 1);
  },
  ensureErrnoError: function () {
    if (FS.ErrnoError) return;
    FS.ErrnoError = function ErrnoError(errno, node) {
      this.node = node;
      this.setErrno = function (errno) {
        this.errno = errno;
      };
      this.setErrno(errno);
      this.message = "FS error";
    };
    FS.ErrnoError.prototype = new Error();
    FS.ErrnoError.prototype.constructor = FS.ErrnoError;
    [44].forEach(function (code) {
      FS.genericErrors[code] = new FS.ErrnoError(code);
      FS.genericErrors[code].stack = "<generic error, no stack>";
    });
  },
  staticInit: function () {
    FS.ensureErrnoError();
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, "/");
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { MEMFS: MEMFS };
  },
  init: function (input, output, error) {
    FS.init.initialized = true;
    FS.ensureErrnoError();
    Module["stdin"] = input || Module["stdin"];
    Module["stdout"] = output || Module["stdout"];
    Module["stderr"] = error || Module["stderr"];
    FS.createStandardStreams();
  },
  quit: function () {
    FS.init.initialized = false;
    var fflush = Module["_fflush"];
    if (fflush) fflush(0);
    for (var i = 0; i < FS.streams.length; i++) {
      var stream = FS.streams[i];
      if (!stream) {
        continue;
      }
      FS.close(stream);
    }
  },
  getMode: function (canRead, canWrite) {
    var mode = 0;
    if (canRead) mode |= 292 | 73;
    if (canWrite) mode |= 146;
    return mode;
  },
  findObject: function (path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (ret.exists) {
      return ret.object;
    } else {
      return null;
    }
  },
  analyzePath: function (path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === "/";
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath: function (parent, path, canRead, canWrite) {
    parent = typeof parent === "string" ? parent : FS.getPath(parent);
    var parts = path.split("/").reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {}
      parent = current;
    }
    return current;
  },
  createFile: function (parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name
    );
    var mode = FS.getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile: function (parent, name, data, canRead, canWrite, canOwn) {
    var path = name
      ? PATH.join2(
          typeof parent === "string" ? parent : FS.getPath(parent),
          name
        )
      : parent;
    var mode = FS.getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data === "string") {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
    return node;
  },
  createDevice: function (parent, name, input, output) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name
    );
    var mode = FS.getMode(!!input, !!output);
    if (!FS.createDevice.major) FS.createDevice.major = 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open: function (stream) {
        stream.seekable = false;
      },
      close: function (stream) {
        if (output && output.buffer && output.buffer.length) {
          output(10);
        }
      },
      read: function (stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.timestamp = Date.now();
        }
        return bytesRead;
      },
      write: function (stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.timestamp = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile: function (obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (typeof XMLHttpRequest !== "undefined") {
      throw new Error(
        "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
      );
    } else if (read_) {
      try {
        obj.contents = intArrayFromString(read_(obj.url), true);
        obj.usedBytes = obj.contents.length;
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    } else {
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
  },
  createLazyFile: function (parent, name, url, canRead, canWrite) {
    function LazyUint8Array() {
      this.lengthKnown = false;
      this.chunks = [];
    }
    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
      if (idx > this.length - 1 || idx < 0) {
        return undefined;
      }
      var chunkOffset = idx % this.chunkSize;
      var chunkNum = (idx / this.chunkSize) | 0;
      return this.getter(chunkNum)[chunkOffset];
    };
    LazyUint8Array.prototype.setDataGetter =
      function LazyUint8Array_setDataGetter(getter) {
        this.getter = getter;
      };
    LazyUint8Array.prototype.cacheLength =
      function LazyUint8Array_cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
        var datalength = Number(xhr.getResponseHeader("Content-length"));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader("Accept-Ranges")) &&
          header === "bytes";
        var usesGzip =
          (header = xhr.getResponseHeader("Content-Encoding")) &&
          header === "gzip";
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = function (from, to) {
          if (from > to)
            throw new Error(
              "invalid range (" + from + ", " + to + ") or no bytes requested!"
            );
          if (to > datalength - 1)
            throw new Error(
              "only " + datalength + " bytes available! programmer error!"
            );
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
          if (typeof Uint8Array != "undefined")
            xhr.responseType = "arraybuffer";
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          } else {
            return intArrayFromString(xhr.responseText || "", true);
          }
        };
        var lazyArray = this;
        lazyArray.setDataGetter(function (chunkNum) {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] === "undefined") {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] === "undefined")
            throw new Error("doXHR failed!");
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out(
            "LazyFiles on gzip forces download of the whole file when length is accessed"
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      };
    if (typeof XMLHttpRequest !== "undefined") {
      if (!ENVIRONMENT_IS_WORKER)
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var lazyArray = new LazyUint8Array();
      Object.defineProperties(lazyArray, {
        length: {
          get: function () {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          },
        },
        chunkSize: {
          get: function () {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          },
        },
      });
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url: url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    var keys = Object.keys(node.stream_ops);
    keys.forEach(function (key) {
      var fn = node.stream_ops[key];
      stream_ops[key] = function forceLoadLazyFile() {
        FS.forceLoadFile(node);
        return fn.apply(null, arguments);
      };
    });
    stream_ops.read = function stream_ops_read(
      stream,
      buffer,
      offset,
      length,
      position
    ) {
      FS.forceLoadFile(node);
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    };
    node.stream_ops = stream_ops;
    return node;
  },
  createPreloadedFile: function (
    parent,
    name,
    url,
    canRead,
    canWrite,
    onload,
    onerror,
    dontCreateFile,
    canOwn,
    preFinish
  ) {
    Browser.init();
    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
    var dep = getUniqueRunDependency("cp " + fullname);
    function processData(byteArray) {
      function finish(byteArray) {
        if (preFinish) preFinish();
        if (!dontCreateFile) {
          FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
        }
        if (onload) onload();
        removeRunDependency(dep);
      }
      var handled = false;
      Module["preloadPlugins"].forEach(function (plugin) {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
          plugin["handle"](byteArray, fullname, finish, function () {
            if (onerror) onerror();
            removeRunDependency(dep);
          });
          handled = true;
        }
      });
      if (!handled) finish(byteArray);
    }
    addRunDependency(dep);
    if (typeof url == "string") {
      Browser.asyncLoad(
        url,
        function (byteArray) {
          processData(byteArray);
        },
        onerror
      );
    } else {
      processData(url);
    }
  },
  indexedDB: function () {
    return (
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB
    );
  },
  DB_NAME: function () {
    return "EM_FS_" + window.location.pathname;
  },
  DB_VERSION: 20,
  DB_STORE_NAME: "FILE_DATA",
  saveFilesToDB: function (paths, onload, onerror) {
    onload = onload || function () {};
    onerror = onerror || function () {};
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
      out("creating db");
      var db = openRequest.result;
      db.createObjectStore(FS.DB_STORE_NAME);
    };
    openRequest.onsuccess = function openRequest_onsuccess() {
      var db = openRequest.result;
      var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0,
        fail = 0,
        total = paths.length;
      function finish() {
        if (fail == 0) onload();
        else onerror();
      }
      paths.forEach(function (path) {
        var putRequest = files.put(FS.analyzePath(path).object.contents, path);
        putRequest.onsuccess = function putRequest_onsuccess() {
          ok++;
          if (ok + fail == total) finish();
        };
        putRequest.onerror = function putRequest_onerror() {
          fail++;
          if (ok + fail == total) finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  },
  loadFilesFromDB: function (paths, onload, onerror) {
    onload = onload || function () {};
    onerror = onerror || function () {};
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = onerror;
    openRequest.onsuccess = function openRequest_onsuccess() {
      var db = openRequest.result;
      try {
        var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
      } catch (e) {
        onerror(e);
        return;
      }
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0,
        fail = 0,
        total = paths.length;
      function finish() {
        if (fail == 0) onload();
        else onerror();
      }
      paths.forEach(function (path) {
        var getRequest = files.get(path);
        getRequest.onsuccess = function getRequest_onsuccess() {
          if (FS.analyzePath(path).exists) {
            FS.unlink(path);
          }
          FS.createDataFile(
            PATH.dirname(path),
            PATH.basename(path),
            getRequest.result,
            true,
            true,
            true
          );
          ok++;
          if (ok + fail == total) finish();
        };
        getRequest.onerror = function getRequest_onerror() {
          fail++;
          if (ok + fail == total) finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  },
};
var SYSCALLS = {
  mappings: {},
  DEFAULT_POLLMASK: 5,
  umask: 511,
  calculateAt: function (dirfd, path) {
    if (path[0] !== "/") {
      var dir;
      if (dirfd === -100) {
        dir = FS.cwd();
      } else {
        var dirstream = FS.getStream(dirfd);
        if (!dirstream) throw new FS.ErrnoError(8);
        dir = dirstream.path;
      }
      path = PATH.join2(dir, path);
    }
    return path;
  },
  doStat: function (func, path, buf) {
    try {
      var stat = func(path);
    } catch (e) {
      if (
        e &&
        e.node &&
        PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))
      ) {
        return -54;
      }
      throw e;
    }
    HEAP32[buf >> 2] = stat.dev;
    HEAP32[(buf + 4) >> 2] = 0;
    HEAP32[(buf + 8) >> 2] = stat.ino;
    HEAP32[(buf + 12) >> 2] = stat.mode;
    HEAP32[(buf + 16) >> 2] = stat.nlink;
    HEAP32[(buf + 20) >> 2] = stat.uid;
    HEAP32[(buf + 24) >> 2] = stat.gid;
    HEAP32[(buf + 28) >> 2] = stat.rdev;
    HEAP32[(buf + 32) >> 2] = 0;
    (tempI64 = [
      stat.size >>> 0,
      ((tempDouble = stat.size),
      +Math.abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[(buf + 40) >> 2] = tempI64[0]),
      (HEAP32[(buf + 44) >> 2] = tempI64[1]);
    HEAP32[(buf + 48) >> 2] = 4096;
    HEAP32[(buf + 52) >> 2] = stat.blocks;
    HEAP32[(buf + 56) >> 2] = (stat.atime.getTime() / 1e3) | 0;
    HEAP32[(buf + 60) >> 2] = 0;
    HEAP32[(buf + 64) >> 2] = (stat.mtime.getTime() / 1e3) | 0;
    HEAP32[(buf + 68) >> 2] = 0;
    HEAP32[(buf + 72) >> 2] = (stat.ctime.getTime() / 1e3) | 0;
    HEAP32[(buf + 76) >> 2] = 0;
    (tempI64 = [
      stat.ino >>> 0,
      ((tempDouble = stat.ino),
      +Math.abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[(buf + 80) >> 2] = tempI64[0]),
      (HEAP32[(buf + 84) >> 2] = tempI64[1]);
    return 0;
  },
  doMsync: function (addr, stream, len, flags, offset) {
    var buffer = HEAPU8.slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  doMkdir: function (path, mode) {
    path = PATH.normalize(path);
    if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
    FS.mkdir(path, mode, 0);
    return 0;
  },
  doMknod: function (path, mode, dev) {
    switch (mode & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -28;
    }
    FS.mknod(path, mode, dev);
    return 0;
  },
  doReadlink: function (path, buf, bufsize) {
    if (bufsize <= 0) return -28;
    var ret = FS.readlink(path);
    var len = Math.min(bufsize, lengthBytesUTF8(ret));
    var endChar = HEAP8[buf + len];
    stringToUTF8(ret, buf, bufsize + 1);
    HEAP8[buf + len] = endChar;
    return len;
  },
  doAccess: function (path, amode) {
    if (amode & ~7) {
      return -28;
    }
    var node;
    var lookup = FS.lookupPath(path, { follow: true });
    node = lookup.node;
    if (!node) {
      return -44;
    }
    var perms = "";
    if (amode & 4) perms += "r";
    if (amode & 2) perms += "w";
    if (amode & 1) perms += "x";
    if (perms && FS.nodePermissions(node, perms)) {
      return -2;
    }
    return 0;
  },
  doDup: function (path, flags, suggestFD) {
    var suggest = FS.getStream(suggestFD);
    if (suggest) FS.close(suggest);
    return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
  },
  doReadv: function (stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[(iov + i * 8) >> 2];
      var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
      var curr = FS.read(stream, HEAP8, ptr, len, offset);
      if (curr < 0) return -1;
      ret += curr;
      if (curr < len) break;
    }
    return ret;
  },
  doWritev: function (stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[(iov + i * 8) >> 2];
      var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
      var curr = FS.write(stream, HEAP8, ptr, len, offset);
      if (curr < 0) return -1;
      ret += curr;
    }
    return ret;
  },
  varargs: undefined,
  get: function () {
    SYSCALLS.varargs += 4;
    var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
    return ret;
  },
  getStr: function (ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
  getStreamFromFD: function (fd) {
    var stream = FS.getStream(fd);
    if (!stream) throw new FS.ErrnoError(8);
    return stream;
  },
  get64: function (low, high) {
    return low;
  },
};
function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {
  try {
    var total = 0;
    var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0,
      srcReadHigh = readfds ? HEAP32[(readfds + 4) >> 2] : 0;
    var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0,
      srcWriteHigh = writefds ? HEAP32[(writefds + 4) >> 2] : 0;
    var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0,
      srcExceptHigh = exceptfds ? HEAP32[(exceptfds + 4) >> 2] : 0;
    var dstReadLow = 0,
      dstReadHigh = 0;
    var dstWriteLow = 0,
      dstWriteHigh = 0;
    var dstExceptLow = 0,
      dstExceptHigh = 0;
    var allLow =
      (readfds ? HEAP32[readfds >> 2] : 0) |
      (writefds ? HEAP32[writefds >> 2] : 0) |
      (exceptfds ? HEAP32[exceptfds >> 2] : 0);
    var allHigh =
      (readfds ? HEAP32[(readfds + 4) >> 2] : 0) |
      (writefds ? HEAP32[(writefds + 4) >> 2] : 0) |
      (exceptfds ? HEAP32[(exceptfds + 4) >> 2] : 0);
    var check = function (fd, low, high, val) {
      return fd < 32 ? low & val : high & val;
    };
    for (var fd = 0; fd < nfds; fd++) {
      var mask = 1 << fd % 32;
      if (!check(fd, allLow, allHigh, mask)) {
        continue;
      }
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      var flags = SYSCALLS.DEFAULT_POLLMASK;
      if (stream.stream_ops.poll) {
        flags = stream.stream_ops.poll(stream);
      }
      if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
        fd < 32
          ? (dstReadLow = dstReadLow | mask)
          : (dstReadHigh = dstReadHigh | mask);
        total++;
      }
      if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
        fd < 32
          ? (dstWriteLow = dstWriteLow | mask)
          : (dstWriteHigh = dstWriteHigh | mask);
        total++;
      }
      if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
        fd < 32
          ? (dstExceptLow = dstExceptLow | mask)
          : (dstExceptHigh = dstExceptHigh | mask);
        total++;
      }
    }
    if (readfds) {
      HEAP32[readfds >> 2] = dstReadLow;
      HEAP32[(readfds + 4) >> 2] = dstReadHigh;
    }
    if (writefds) {
      HEAP32[writefds >> 2] = dstWriteLow;
      HEAP32[(writefds + 4) >> 2] = dstWriteHigh;
    }
    if (exceptfds) {
      HEAP32[exceptfds >> 2] = dstExceptLow;
      HEAP32[(exceptfds + 4) >> 2] = dstExceptHigh;
    }
    return total;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function setErrNo(value) {
  HEAP32[___errno_location() >> 2] = value;
  return value;
}
function ___sys_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0: {
        var arg = SYSCALLS.get();
        if (arg < 0) {
          return -28;
        }
        var newStream;
        newStream = FS.open(stream.path, stream.flags, 0, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = SYSCALLS.get();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = SYSCALLS.get();
        var offset = 0;
        HEAP16[(arg + offset) >> 1] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        setErrNo(28);
        return -1;
      default: {
        return -28;
      }
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_fstat64(fd, buf) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    return SYSCALLS.doStat(FS.stat, stream.path, buf);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_getcwd(buf, size) {
  try {
    if (size === 0) return -28;
    var cwd = FS.cwd();
    var cwdLengthInBytes = lengthBytesUTF8(cwd);
    if (size < cwdLengthInBytes + 1) return -68;
    stringToUTF8(cwd, buf, size);
    return buf;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_getpid() {
  return 42;
}
function ___sys_getegid32() {
  return 0;
}
function ___sys_getuid32() {
  return ___sys_getegid32();
}
function ___sys_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509:
      case 21505: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -59;
        var argp = SYSCALLS.get();
        HEAP32[argp >> 2] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -59;
        return -28;
      }
      case 21531: {
        var argp = SYSCALLS.get();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -59;
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -59;
        return 0;
      }
      default:
        abort("bad ioctl syscall " + op);
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_open(path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var pathname = SYSCALLS.getStr(path);
    var mode = SYSCALLS.get();
    var stream = FS.open(pathname, flags, mode);
    return stream.fd;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
var ERRNO_CODES = {
  EPERM: 63,
  ENOENT: 44,
  ESRCH: 71,
  EINTR: 27,
  EIO: 29,
  ENXIO: 60,
  E2BIG: 1,
  ENOEXEC: 45,
  EBADF: 8,
  ECHILD: 12,
  EAGAIN: 6,
  EWOULDBLOCK: 6,
  ENOMEM: 48,
  EACCES: 2,
  EFAULT: 21,
  ENOTBLK: 105,
  EBUSY: 10,
  EEXIST: 20,
  EXDEV: 75,
  ENODEV: 43,
  ENOTDIR: 54,
  EISDIR: 31,
  EINVAL: 28,
  ENFILE: 41,
  EMFILE: 33,
  ENOTTY: 59,
  ETXTBSY: 74,
  EFBIG: 22,
  ENOSPC: 51,
  ESPIPE: 70,
  EROFS: 69,
  EMLINK: 34,
  EPIPE: 64,
  EDOM: 18,
  ERANGE: 68,
  ENOMSG: 49,
  EIDRM: 24,
  ECHRNG: 106,
  EL2NSYNC: 156,
  EL3HLT: 107,
  EL3RST: 108,
  ELNRNG: 109,
  EUNATCH: 110,
  ENOCSI: 111,
  EL2HLT: 112,
  EDEADLK: 16,
  ENOLCK: 46,
  EBADE: 113,
  EBADR: 114,
  EXFULL: 115,
  ENOANO: 104,
  EBADRQC: 103,
  EBADSLT: 102,
  EDEADLOCK: 16,
  EBFONT: 101,
  ENOSTR: 100,
  ENODATA: 116,
  ETIME: 117,
  ENOSR: 118,
  ENONET: 119,
  ENOPKG: 120,
  EREMOTE: 121,
  ENOLINK: 47,
  EADV: 122,
  ESRMNT: 123,
  ECOMM: 124,
  EPROTO: 65,
  EMULTIHOP: 36,
  EDOTDOT: 125,
  EBADMSG: 9,
  ENOTUNIQ: 126,
  EBADFD: 127,
  EREMCHG: 128,
  ELIBACC: 129,
  ELIBBAD: 130,
  ELIBSCN: 131,
  ELIBMAX: 132,
  ELIBEXEC: 133,
  ENOSYS: 52,
  ENOTEMPTY: 55,
  ENAMETOOLONG: 37,
  ELOOP: 32,
  EOPNOTSUPP: 138,
  EPFNOSUPPORT: 139,
  ECONNRESET: 15,
  ENOBUFS: 42,
  EAFNOSUPPORT: 5,
  EPROTOTYPE: 67,
  ENOTSOCK: 57,
  ENOPROTOOPT: 50,
  ESHUTDOWN: 140,
  ECONNREFUSED: 14,
  EADDRINUSE: 3,
  ECONNABORTED: 13,
  ENETUNREACH: 40,
  ENETDOWN: 38,
  ETIMEDOUT: 73,
  EHOSTDOWN: 142,
  EHOSTUNREACH: 23,
  EINPROGRESS: 26,
  EALREADY: 7,
  EDESTADDRREQ: 17,
  EMSGSIZE: 35,
  EPROTONOSUPPORT: 66,
  ESOCKTNOSUPPORT: 137,
  EADDRNOTAVAIL: 4,
  ENETRESET: 39,
  EISCONN: 30,
  ENOTCONN: 53,
  ETOOMANYREFS: 141,
  EUSERS: 136,
  EDQUOT: 19,
  ESTALE: 72,
  ENOTSUP: 138,
  ENOMEDIUM: 148,
  EILSEQ: 25,
  EOVERFLOW: 61,
  ECANCELED: 11,
  ENOTRECOVERABLE: 56,
  EOWNERDEAD: 62,
  ESTRPIPE: 135,
};
var PIPEFS = {
  BUCKET_BUFFER_SIZE: 8192,
  mount: function (mount) {
    return FS.createNode(null, "/", 16384 | 511, 0);
  },
  createPipe: function () {
    var pipe = { buckets: [] };
    pipe.buckets.push({
      buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
      offset: 0,
      roffset: 0,
    });
    var rName = PIPEFS.nextname();
    var wName = PIPEFS.nextname();
    var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
    var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
    rNode.pipe = pipe;
    wNode.pipe = pipe;
    var readableStream = FS.createStream({
      path: rName,
      node: rNode,
      flags: 0,
      seekable: false,
      stream_ops: PIPEFS.stream_ops,
    });
    rNode.stream = readableStream;
    var writableStream = FS.createStream({
      path: wName,
      node: wNode,
      flags: 1,
      seekable: false,
      stream_ops: PIPEFS.stream_ops,
    });
    wNode.stream = writableStream;
    return { readable_fd: readableStream.fd, writable_fd: writableStream.fd };
  },
  stream_ops: {
    poll: function (stream) {
      var pipe = stream.node.pipe;
      if ((stream.flags & 2097155) === 1) {
        return 256 | 4;
      } else {
        if (pipe.buckets.length > 0) {
          for (var i = 0; i < pipe.buckets.length; i++) {
            var bucket = pipe.buckets[i];
            if (bucket.offset - bucket.roffset > 0) {
              return 64 | 1;
            }
          }
        }
      }
      return 0;
    },
    ioctl: function (stream, request, varargs) {
      return ERRNO_CODES.EINVAL;
    },
    fsync: function (stream) {
      return ERRNO_CODES.EINVAL;
    },
    read: function (stream, buffer, offset, length, position) {
      var pipe = stream.node.pipe;
      var currentLength = 0;
      for (var i = 0; i < pipe.buckets.length; i++) {
        var bucket = pipe.buckets[i];
        currentLength += bucket.offset - bucket.roffset;
      }
      assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
      var data = buffer.subarray(offset, offset + length);
      if (length <= 0) {
        return 0;
      }
      if (currentLength == 0) {
        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
      }
      var toRead = Math.min(currentLength, length);
      var totalRead = toRead;
      var toRemove = 0;
      for (var i = 0; i < pipe.buckets.length; i++) {
        var currBucket = pipe.buckets[i];
        var bucketSize = currBucket.offset - currBucket.roffset;
        if (toRead <= bucketSize) {
          var tmpSlice = currBucket.buffer.subarray(
            currBucket.roffset,
            currBucket.offset
          );
          if (toRead < bucketSize) {
            tmpSlice = tmpSlice.subarray(0, toRead);
            currBucket.roffset += toRead;
          } else {
            toRemove++;
          }
          data.set(tmpSlice);
          break;
        } else {
          var tmpSlice = currBucket.buffer.subarray(
            currBucket.roffset,
            currBucket.offset
          );
          data.set(tmpSlice);
          data = data.subarray(tmpSlice.byteLength);
          toRead -= tmpSlice.byteLength;
          toRemove++;
        }
      }
      if (toRemove && toRemove == pipe.buckets.length) {
        toRemove--;
        pipe.buckets[toRemove].offset = 0;
        pipe.buckets[toRemove].roffset = 0;
      }
      pipe.buckets.splice(0, toRemove);
      return totalRead;
    },
    write: function (stream, buffer, offset, length, position) {
      var pipe = stream.node.pipe;
      assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
      var data = buffer.subarray(offset, offset + length);
      var dataLen = data.byteLength;
      if (dataLen <= 0) {
        return 0;
      }
      var currBucket = null;
      if (pipe.buckets.length == 0) {
        currBucket = {
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0,
        };
        pipe.buckets.push(currBucket);
      } else {
        currBucket = pipe.buckets[pipe.buckets.length - 1];
      }
      assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
      var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
      if (freeBytesInCurrBuffer >= dataLen) {
        currBucket.buffer.set(data, currBucket.offset);
        currBucket.offset += dataLen;
        return dataLen;
      } else if (freeBytesInCurrBuffer > 0) {
        currBucket.buffer.set(
          data.subarray(0, freeBytesInCurrBuffer),
          currBucket.offset
        );
        currBucket.offset += freeBytesInCurrBuffer;
        data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
      }
      var numBuckets = (data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE) | 0;
      var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
      for (var i = 0; i < numBuckets; i++) {
        var newBucket = {
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: PIPEFS.BUCKET_BUFFER_SIZE,
          roffset: 0,
        };
        pipe.buckets.push(newBucket);
        newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
        data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
      }
      if (remElements > 0) {
        var newBucket = {
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: data.byteLength,
          roffset: 0,
        };
        pipe.buckets.push(newBucket);
        newBucket.buffer.set(data);
      }
      return dataLen;
    },
    close: function (stream) {
      var pipe = stream.node.pipe;
      pipe.buckets = null;
    },
  },
  nextname: function () {
    if (!PIPEFS.nextname.current) {
      PIPEFS.nextname.current = 0;
    }
    return "pipe[" + PIPEFS.nextname.current++ + "]";
  },
};
function ___sys_pipe(fdPtr) {
  try {
    if (fdPtr == 0) {
      throw new FS.ErrnoError(21);
    }
    var res = PIPEFS.createPipe();
    HEAP32[fdPtr >> 2] = res.readable_fd;
    HEAP32[(fdPtr + 4) >> 2] = res.writable_fd;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_poll(fds, nfds, timeout) {
  try {
    var nonzero = 0;
    for (var i = 0; i < nfds; i++) {
      var pollfd = fds + 8 * i;
      var fd = HEAP32[pollfd >> 2];
      var events = HEAP16[(pollfd + 4) >> 1];
      var mask = 32;
      var stream = FS.getStream(fd);
      if (stream) {
        mask = SYSCALLS.DEFAULT_POLLMASK;
        if (stream.stream_ops.poll) {
          mask = stream.stream_ops.poll(stream);
        }
      }
      mask &= events | 8 | 16;
      if (mask) nonzero++;
      HEAP16[(pollfd + 6) >> 1] = mask;
    }
    return nonzero;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_prlimit64(pid, resource, new_limit, old_limit) {
  try {
    if (old_limit) {
      HEAP32[old_limit >> 2] = -1;
      HEAP32[(old_limit + 4) >> 2] = -1;
      HEAP32[(old_limit + 8) >> 2] = -1;
      HEAP32[(old_limit + 12) >> 2] = -1;
    }
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_setrlimit(varargs) {
  return 0;
}
var SOCKFS = {
  mount: function (mount) {
    Module["websocket"] =
      Module["websocket"] && "object" === typeof Module["websocket"]
        ? Module["websocket"]
        : {};
    Module["websocket"]._callbacks = {};
    Module["websocket"]["on"] = function (event, callback) {
      if ("function" === typeof callback) {
        this._callbacks[event] = callback;
      }
      return this;
    };
    Module["websocket"].emit = function (event, param) {
      if ("function" === typeof this._callbacks[event]) {
        this._callbacks[event].call(this, param);
      }
    };
    return FS.createNode(null, "/", 16384 | 511, 0);
  },
  createSocket: function (family, type, protocol) {
    type &= ~526336;
    var streaming = type == 1;
    if (protocol) {
      assert(streaming == (protocol == 6));
    }
    var sock = {
      family: family,
      type: type,
      protocol: protocol,
      server: null,
      error: null,
      peers: {},
      pending: [],
      recv_queue: [],
      sock_ops: SOCKFS.websocket_sock_ops,
    };
    var name = SOCKFS.nextname();
    var node = FS.createNode(SOCKFS.root, name, 49152, 0);
    node.sock = sock;
    var stream = FS.createStream({
      path: name,
      node: node,
      flags: 2,
      seekable: false,
      stream_ops: SOCKFS.stream_ops,
    });
    sock.stream = stream;
    return sock;
  },
  getSocket: function (fd) {
    var stream = FS.getStream(fd);
    if (!stream || !FS.isSocket(stream.node.mode)) {
      return null;
    }
    return stream.node.sock;
  },
  stream_ops: {
    poll: function (stream) {
      var sock = stream.node.sock;
      return sock.sock_ops.poll(sock);
    },
    ioctl: function (stream, request, varargs) {
      var sock = stream.node.sock;
      return sock.sock_ops.ioctl(sock, request, varargs);
    },
    read: function (stream, buffer, offset, length, position) {
      var sock = stream.node.sock;
      var msg = sock.sock_ops.recvmsg(sock, length);
      if (!msg) {
        return 0;
      }
      buffer.set(msg.buffer, offset);
      return msg.buffer.length;
    },
    write: function (stream, buffer, offset, length, position) {
      var sock = stream.node.sock;
      return sock.sock_ops.sendmsg(sock, buffer, offset, length);
    },
    close: function (stream) {
      var sock = stream.node.sock;
      sock.sock_ops.close(sock);
    },
  },
  nextname: function () {
    if (!SOCKFS.nextname.current) {
      SOCKFS.nextname.current = 0;
    }
    return "socket[" + SOCKFS.nextname.current++ + "]";
  },
  websocket_sock_ops: {
    createPeer: function (sock, addr, port) {
      var ws;
      if (typeof addr === "object") {
        ws = addr;
        addr = null;
        port = null;
      }
      if (ws) {
        if (ws._socket) {
          addr = ws._socket.remoteAddress;
          port = ws._socket.remotePort;
        } else {
          var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
          if (!result) {
            throw new Error(
              "WebSocket URL must be in the format ws(s)://address:port"
            );
          }
          addr = result[1];
          port = parseInt(result[2], 10);
        }
      } else {
        try {
          var runtimeConfig =
            Module["websocket"] && "object" === typeof Module["websocket"];
          var url = "ws:#".replace("#", "//");
          if (runtimeConfig) {
            if ("string" === typeof Module["websocket"]["url"]) {
              url = Module["websocket"]["url"];
            }
          }
          if (url === "ws://" || url === "wss://") {
            var parts = addr.split("/");
            url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
          }
          var subProtocols = "binary";
          if (runtimeConfig) {
            if ("string" === typeof Module["websocket"]["subprotocol"]) {
              subProtocols = Module["websocket"]["subprotocol"];
            }
          }
          var opts = undefined;
          if (subProtocols !== "null") {
            subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
            opts = ENVIRONMENT_IS_NODE
              ? { protocol: subProtocols.toString() }
              : subProtocols;
          }
          if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
            subProtocols = "null";
            opts = undefined;
          }
          var WebSocketConstructor;
          if (ENVIRONMENT_IS_NODE) {
            WebSocketConstructor = require("ws");
          } else {
            WebSocketConstructor = WebSocket;
          }
          ws = new WebSocketConstructor(url, opts);
          ws.binaryType = "arraybuffer";
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
        }
      }
      var peer = { addr: addr, port: port, socket: ws, dgram_send_queue: [] };
      SOCKFS.websocket_sock_ops.addPeer(sock, peer);
      SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
      if (sock.type === 2 && typeof sock.sport !== "undefined") {
        peer.dgram_send_queue.push(
          new Uint8Array([
            255,
            255,
            255,
            255,
            "p".charCodeAt(0),
            "o".charCodeAt(0),
            "r".charCodeAt(0),
            "t".charCodeAt(0),
            (sock.sport & 65280) >> 8,
            sock.sport & 255,
          ])
        );
      }
      return peer;
    },
    getPeer: function (sock, addr, port) {
      return sock.peers[addr + ":" + port];
    },
    addPeer: function (sock, peer) {
      sock.peers[peer.addr + ":" + peer.port] = peer;
    },
    removePeer: function (sock, peer) {
      delete sock.peers[peer.addr + ":" + peer.port];
    },
    handlePeerEvents: function (sock, peer) {
      var first = true;
      var handleOpen = function () {
        Module["websocket"].emit("open", sock.stream.fd);
        try {
          var queued = peer.dgram_send_queue.shift();
          while (queued) {
            peer.socket.send(queued);
            queued = peer.dgram_send_queue.shift();
          }
        } catch (e) {
          peer.socket.close();
        }
      };
      function handleMessage(data) {
        if (typeof data === "string") {
          var encoder = new TextEncoder();
          data = encoder.encode(data);
        } else {
          assert(data.byteLength !== undefined);
          if (data.byteLength == 0) {
            return;
          } else {
            data = new Uint8Array(data);
          }
        }
        var wasfirst = first;
        first = false;
        if (
          wasfirst &&
          data.length === 10 &&
          data[0] === 255 &&
          data[1] === 255 &&
          data[2] === 255 &&
          data[3] === 255 &&
          data[4] === "p".charCodeAt(0) &&
          data[5] === "o".charCodeAt(0) &&
          data[6] === "r".charCodeAt(0) &&
          data[7] === "t".charCodeAt(0)
        ) {
          var newport = (data[8] << 8) | data[9];
          SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          peer.port = newport;
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          return;
        }
        sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
        Module["websocket"].emit("message", sock.stream.fd);
      }
      if (ENVIRONMENT_IS_NODE) {
        peer.socket.on("open", handleOpen);
        peer.socket.on("message", function (data, flags) {
          if (!flags.binary) {
            return;
          }
          handleMessage(new Uint8Array(data).buffer);
        });
        peer.socket.on("close", function () {
          Module["websocket"].emit("close", sock.stream.fd);
        });
        peer.socket.on("error", function (error) {
          sock.error = ERRNO_CODES.ECONNREFUSED;
          Module["websocket"].emit("error", [
            sock.stream.fd,
            sock.error,
            "ECONNREFUSED: Connection refused",
          ]);
        });
      } else {
        peer.socket.onopen = handleOpen;
        peer.socket.onclose = function () {
          Module["websocket"].emit("close", sock.stream.fd);
        };
        peer.socket.onmessage = function peer_socket_onmessage(event) {
          handleMessage(event.data);
        };
        peer.socket.onerror = function (error) {
          sock.error = ERRNO_CODES.ECONNREFUSED;
          Module["websocket"].emit("error", [
            sock.stream.fd,
            sock.error,
            "ECONNREFUSED: Connection refused",
          ]);
        };
      }
    },
    poll: function (sock) {
      if (sock.type === 1 && sock.server) {
        return sock.pending.length ? 64 | 1 : 0;
      }
      var mask = 0;
      var dest =
        sock.type === 1
          ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport)
          : null;
      if (
        sock.recv_queue.length ||
        !dest ||
        (dest && dest.socket.readyState === dest.socket.CLOSING) ||
        (dest && dest.socket.readyState === dest.socket.CLOSED)
      ) {
        mask |= 64 | 1;
      }
      if (!dest || (dest && dest.socket.readyState === dest.socket.OPEN)) {
        mask |= 4;
      }
      if (
        (dest && dest.socket.readyState === dest.socket.CLOSING) ||
        (dest && dest.socket.readyState === dest.socket.CLOSED)
      ) {
        mask |= 16;
      }
      return mask;
    },
    ioctl: function (sock, request, arg) {
      switch (request) {
        case 21531:
          var bytes = 0;
          if (sock.recv_queue.length) {
            bytes = sock.recv_queue[0].data.length;
          }
          HEAP32[arg >> 2] = bytes;
          return 0;
        default:
          return ERRNO_CODES.EINVAL;
      }
    },
    close: function (sock) {
      if (sock.server) {
        try {
          sock.server.close();
        } catch (e) {}
        sock.server = null;
      }
      var peers = Object.keys(sock.peers);
      for (var i = 0; i < peers.length; i++) {
        var peer = sock.peers[peers[i]];
        try {
          peer.socket.close();
        } catch (e) {}
        SOCKFS.websocket_sock_ops.removePeer(sock, peer);
      }
      return 0;
    },
    bind: function (sock, addr, port) {
      if (
        typeof sock.saddr !== "undefined" ||
        typeof sock.sport !== "undefined"
      ) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      sock.saddr = addr;
      sock.sport = port;
      if (sock.type === 2) {
        if (sock.server) {
          sock.server.close();
          sock.server = null;
        }
        try {
          sock.sock_ops.listen(sock, 0);
        } catch (e) {
          if (!(e instanceof FS.ErrnoError)) throw e;
          if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
        }
      }
    },
    connect: function (sock, addr, port) {
      if (sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
      }
      if (
        typeof sock.daddr !== "undefined" &&
        typeof sock.dport !== "undefined"
      ) {
        var dest = SOCKFS.websocket_sock_ops.getPeer(
          sock,
          sock.daddr,
          sock.dport
        );
        if (dest) {
          if (dest.socket.readyState === dest.socket.CONNECTING) {
            throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
          } else {
            throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
          }
        }
      }
      var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
      sock.daddr = peer.addr;
      sock.dport = peer.port;
      throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
    },
    listen: function (sock, backlog) {
      if (!ENVIRONMENT_IS_NODE) {
        throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
      }
      if (sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      var WebSocketServer = require("ws").Server;
      var host = sock.saddr;
      sock.server = new WebSocketServer({ host: host, port: sock.sport });
      Module["websocket"].emit("listen", sock.stream.fd);
      sock.server.on("connection", function (ws) {
        if (sock.type === 1) {
          var newsock = SOCKFS.createSocket(
            sock.family,
            sock.type,
            sock.protocol
          );
          var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
          newsock.daddr = peer.addr;
          newsock.dport = peer.port;
          sock.pending.push(newsock);
          Module["websocket"].emit("connection", newsock.stream.fd);
        } else {
          SOCKFS.websocket_sock_ops.createPeer(sock, ws);
          Module["websocket"].emit("connection", sock.stream.fd);
        }
      });
      sock.server.on("closed", function () {
        Module["websocket"].emit("close", sock.stream.fd);
        sock.server = null;
      });
      sock.server.on("error", function (error) {
        sock.error = ERRNO_CODES.EHOSTUNREACH;
        Module["websocket"].emit("error", [
          sock.stream.fd,
          sock.error,
          "EHOSTUNREACH: Host is unreachable",
        ]);
      });
    },
    accept: function (listensock) {
      if (!listensock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      var newsock = listensock.pending.shift();
      newsock.stream.flags = listensock.stream.flags;
      return newsock;
    },
    getname: function (sock, peer) {
      var addr, port;
      if (peer) {
        if (sock.daddr === undefined || sock.dport === undefined) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
        }
        addr = sock.daddr;
        port = sock.dport;
      } else {
        addr = sock.saddr || 0;
        port = sock.sport || 0;
      }
      return { addr: addr, port: port };
    },
    sendmsg: function (sock, buffer, offset, length, addr, port) {
      if (sock.type === 2) {
        if (addr === undefined || port === undefined) {
          addr = sock.daddr;
          port = sock.dport;
        }
        if (addr === undefined || port === undefined) {
          throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
        }
      } else {
        addr = sock.daddr;
        port = sock.dport;
      }
      var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
      if (sock.type === 1) {
        if (
          !dest ||
          dest.socket.readyState === dest.socket.CLOSING ||
          dest.socket.readyState === dest.socket.CLOSED
        ) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
        } else if (dest.socket.readyState === dest.socket.CONNECTING) {
          throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        }
      }
      if (ArrayBuffer.isView(buffer)) {
        offset += buffer.byteOffset;
        buffer = buffer.buffer;
      }
      var data;
      data = buffer.slice(offset, offset + length);
      if (sock.type === 2) {
        if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
          if (
            !dest ||
            dest.socket.readyState === dest.socket.CLOSING ||
            dest.socket.readyState === dest.socket.CLOSED
          ) {
            dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          }
          dest.dgram_send_queue.push(data);
          return length;
        }
      }
      try {
        dest.socket.send(data);
        return length;
      } catch (e) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
    },
    recvmsg: function (sock, length) {
      if (sock.type === 1 && sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
      }
      var queued = sock.recv_queue.shift();
      if (!queued) {
        if (sock.type === 1) {
          var dest = SOCKFS.websocket_sock_ops.getPeer(
            sock,
            sock.daddr,
            sock.dport
          );
          if (!dest) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          } else if (
            dest.socket.readyState === dest.socket.CLOSING ||
            dest.socket.readyState === dest.socket.CLOSED
          ) {
            return null;
          } else {
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
          }
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        }
      }
      var queuedLength = queued.data.byteLength || queued.data.length;
      var queuedOffset = queued.data.byteOffset || 0;
      var queuedBuffer = queued.data.buffer || queued.data;
      var bytesRead = Math.min(length, queuedLength);
      var res = {
        buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
        addr: queued.addr,
        port: queued.port,
      };
      if (sock.type === 1 && bytesRead < queuedLength) {
        var bytesRemaining = queuedLength - bytesRead;
        queued.data = new Uint8Array(
          queuedBuffer,
          queuedOffset + bytesRead,
          bytesRemaining
        );
        sock.recv_queue.unshift(queued);
      }
      return res;
    },
  },
};
function __inet_pton4_raw(str) {
  var b = str.split(".");
  for (var i = 0; i < 4; i++) {
    var tmp = Number(b[i]);
    if (isNaN(tmp)) return null;
    b[i] = tmp;
  }
  return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
}
function jstoi_q(str) {
  return parseInt(str);
}
function __inet_pton6_raw(str) {
  var words;
  var w, offset, z;
  var valid6regx =
    /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
  var parts = [];
  if (!valid6regx.test(str)) {
    return null;
  }
  if (str === "::") {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (str.indexOf("::") === 0) {
    str = str.replace("::", "Z:");
  } else {
    str = str.replace("::", ":Z:");
  }
  if (str.indexOf(".") > 0) {
    str = str.replace(new RegExp("[.]", "g"), ":");
    words = str.split(":");
    words[words.length - 4] =
      jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
    words[words.length - 3] =
      jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
    words = words.slice(0, words.length - 2);
  } else {
    words = str.split(":");
  }
  offset = 0;
  z = 0;
  for (w = 0; w < words.length; w++) {
    if (typeof words[w] === "string") {
      if (words[w] === "Z") {
        for (z = 0; z < 8 - words.length + 1; z++) {
          parts[w + z] = 0;
        }
        offset = z - 1;
      } else {
        parts[w + offset] = _htons(parseInt(words[w], 16));
      }
    } else {
      parts[w + offset] = words[w];
    }
  }
  return [
    (parts[1] << 16) | parts[0],
    (parts[3] << 16) | parts[2],
    (parts[5] << 16) | parts[4],
    (parts[7] << 16) | parts[6],
  ];
}
var DNS = {
  address_map: { id: 1, addrs: {}, names: {} },
  lookup_name: function (name) {
    var res = __inet_pton4_raw(name);
    if (res !== null) {
      return name;
    }
    res = __inet_pton6_raw(name);
    if (res !== null) {
      return name;
    }
    var addr;
    if (DNS.address_map.addrs[name]) {
      addr = DNS.address_map.addrs[name];
    } else {
      var id = DNS.address_map.id++;
      assert(id < 65535, "exceeded max address mappings of 65535");
      addr = "172.29." + (id & 255) + "." + (id & 65280);
      DNS.address_map.names[addr] = name;
      DNS.address_map.addrs[name] = addr;
    }
    return addr;
  },
  lookup_addr: function (addr) {
    if (DNS.address_map.names[addr]) {
      return DNS.address_map.names[addr];
    }
    return null;
  },
};
function __inet_ntop4_raw(addr) {
  return (
    (addr & 255) +
    "." +
    ((addr >> 8) & 255) +
    "." +
    ((addr >> 16) & 255) +
    "." +
    ((addr >> 24) & 255)
  );
}
function __inet_ntop6_raw(ints) {
  var str = "";
  var word = 0;
  var longest = 0;
  var lastzero = 0;
  var zstart = 0;
  var len = 0;
  var i = 0;
  var parts = [
    ints[0] & 65535,
    ints[0] >> 16,
    ints[1] & 65535,
    ints[1] >> 16,
    ints[2] & 65535,
    ints[2] >> 16,
    ints[3] & 65535,
    ints[3] >> 16,
  ];
  var hasipv4 = true;
  var v4part = "";
  for (i = 0; i < 5; i++) {
    if (parts[i] !== 0) {
      hasipv4 = false;
      break;
    }
  }
  if (hasipv4) {
    v4part = __inet_ntop4_raw(parts[6] | (parts[7] << 16));
    if (parts[5] === -1) {
      str = "::ffff:";
      str += v4part;
      return str;
    }
    if (parts[5] === 0) {
      str = "::";
      if (v4part === "0.0.0.0") v4part = "";
      if (v4part === "0.0.0.1") v4part = "1";
      str += v4part;
      return str;
    }
  }
  for (word = 0; word < 8; word++) {
    if (parts[word] === 0) {
      if (word - lastzero > 1) {
        len = 0;
      }
      lastzero = word;
      len++;
    }
    if (len > longest) {
      longest = len;
      zstart = word - longest + 1;
    }
  }
  for (word = 0; word < 8; word++) {
    if (longest > 1) {
      if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
        if (word === zstart) {
          str += ":";
          if (zstart === 0) str += ":";
        }
        continue;
      }
    }
    str += Number(_ntohs(parts[word] & 65535)).toString(16);
    str += word < 7 ? ":" : "";
  }
  return str;
}
function __read_sockaddr(sa, salen) {
  var family = HEAP16[sa >> 1];
  var port = _ntohs(HEAPU16[(sa + 2) >> 1]);
  var addr;
  switch (family) {
    case 2:
      if (salen !== 16) {
        return { errno: 28 };
      }
      addr = HEAP32[(sa + 4) >> 2];
      addr = __inet_ntop4_raw(addr);
      break;
    case 10:
      if (salen !== 28) {
        return { errno: 28 };
      }
      addr = [
        HEAP32[(sa + 8) >> 2],
        HEAP32[(sa + 12) >> 2],
        HEAP32[(sa + 16) >> 2],
        HEAP32[(sa + 20) >> 2],
      ];
      addr = __inet_ntop6_raw(addr);
      break;
    default:
      return { errno: 5 };
  }
  return { family: family, addr: addr, port: port };
}
function __write_sockaddr(sa, family, addr, port) {
  switch (family) {
    case 2:
      addr = __inet_pton4_raw(addr);
      HEAP16[sa >> 1] = family;
      HEAP32[(sa + 4) >> 2] = addr;
      HEAP16[(sa + 2) >> 1] = _htons(port);
      break;
    case 10:
      addr = __inet_pton6_raw(addr);
      HEAP32[sa >> 2] = family;
      HEAP32[(sa + 8) >> 2] = addr[0];
      HEAP32[(sa + 12) >> 2] = addr[1];
      HEAP32[(sa + 16) >> 2] = addr[2];
      HEAP32[(sa + 20) >> 2] = addr[3];
      HEAP16[(sa + 2) >> 1] = _htons(port);
      HEAP32[(sa + 4) >> 2] = 0;
      HEAP32[(sa + 24) >> 2] = 0;
      break;
    default:
      return { errno: 5 };
  }
  return {};
}
function ___sys_socketcall(call, socketvararg) {
  try {
    SYSCALLS.varargs = socketvararg;
    var getSocketFromFD = function () {
      var socket = SOCKFS.getSocket(SYSCALLS.get());
      if (!socket) throw new FS.ErrnoError(8);
      return socket;
    };
    var getSocketAddress = function (allowNull) {
      var addrp = SYSCALLS.get(),
        addrlen = SYSCALLS.get();
      if (allowNull && addrp === 0) return null;
      var info = __read_sockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    };
    switch (call) {
      case 1: {
        var domain = SYSCALLS.get(),
          type = SYSCALLS.get(),
          protocol = SYSCALLS.get();
        var sock = SOCKFS.createSocket(domain, type, protocol);
        return sock.stream.fd;
      }
      case 2: {
        var sock = getSocketFromFD(),
          info = getSocketAddress();
        sock.sock_ops.bind(sock, info.addr, info.port);
        return 0;
      }
      case 3: {
        var sock = getSocketFromFD(),
          info = getSocketAddress();
        sock.sock_ops.connect(sock, info.addr, info.port);
        return 0;
      }
      case 4: {
        var sock = getSocketFromFD(),
          backlog = SYSCALLS.get();
        sock.sock_ops.listen(sock, backlog);
        return 0;
      }
      case 5: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var newsock = sock.sock_ops.accept(sock);
        if (addr) {
          var res = __write_sockaddr(
            addr,
            newsock.family,
            DNS.lookup_name(newsock.daddr),
            newsock.dport
          );
        }
        return newsock.stream.fd;
      }
      case 6: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var res = __write_sockaddr(
          addr,
          sock.family,
          DNS.lookup_name(sock.saddr || "0.0.0.0"),
          sock.sport
        );
        return 0;
      }
      case 7: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        if (!sock.daddr) {
          return -53;
        }
        var res = __write_sockaddr(
          addr,
          sock.family,
          DNS.lookup_name(sock.daddr),
          sock.dport
        );
        return 0;
      }
      case 11: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          length = SYSCALLS.get(),
          flags = SYSCALLS.get(),
          dest = getSocketAddress(true);
        if (!dest) {
          return FS.write(sock.stream, HEAP8, message, length);
        } else {
          return sock.sock_ops.sendmsg(
            sock,
            HEAP8,
            message,
            length,
            dest.addr,
            dest.port
          );
        }
      }
      case 12: {
        var sock = getSocketFromFD(),
          buf = SYSCALLS.get(),
          len = SYSCALLS.get(),
          flags = SYSCALLS.get(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var msg = sock.sock_ops.recvmsg(sock, len);
        if (!msg) return 0;
        if (addr) {
          var res = __write_sockaddr(
            addr,
            sock.family,
            DNS.lookup_name(msg.addr),
            msg.port
          );
        }
        HEAPU8.set(msg.buffer, buf);
        return msg.buffer.byteLength;
      }
      case 14: {
        return -50;
      }
      case 15: {
        var sock = getSocketFromFD(),
          level = SYSCALLS.get(),
          optname = SYSCALLS.get(),
          optval = SYSCALLS.get(),
          optlen = SYSCALLS.get();
        if (level === 1) {
          if (optname === 4) {
            HEAP32[optval >> 2] = sock.error;
            HEAP32[optlen >> 2] = 4;
            sock.error = null;
            return 0;
          }
        }
        return -50;
      }
      case 16: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          flags = SYSCALLS.get();
        var iov = HEAP32[(message + 8) >> 2];
        var num = HEAP32[(message + 12) >> 2];
        var addr, port;
        var name = HEAP32[message >> 2];
        var namelen = HEAP32[(message + 4) >> 2];
        if (name) {
          var info = __read_sockaddr(name, namelen);
          if (info.errno) return -info.errno;
          port = info.port;
          addr = DNS.lookup_addr(info.addr) || info.addr;
        }
        var total = 0;
        for (var i = 0; i < num; i++) {
          total += HEAP32[(iov + (8 * i + 4)) >> 2];
        }
        var view = new Uint8Array(total);
        var offset = 0;
        for (var i = 0; i < num; i++) {
          var iovbase = HEAP32[(iov + (8 * i + 0)) >> 2];
          var iovlen = HEAP32[(iov + (8 * i + 4)) >> 2];
          for (var j = 0; j < iovlen; j++) {
            view[offset++] = HEAP8[(iovbase + j) >> 0];
          }
        }
        return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
      }
      case 17: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          flags = SYSCALLS.get();
        var iov = HEAP32[(message + 8) >> 2];
        var num = HEAP32[(message + 12) >> 2];
        var total = 0;
        for (var i = 0; i < num; i++) {
          total += HEAP32[(iov + (8 * i + 4)) >> 2];
        }
        var msg = sock.sock_ops.recvmsg(sock, total);
        if (!msg) return 0;
        var name = HEAP32[message >> 2];
        if (name) {
          var res = __write_sockaddr(
            name,
            sock.family,
            DNS.lookup_name(msg.addr),
            msg.port
          );
        }
        var bytesRead = 0;
        var bytesRemaining = msg.buffer.byteLength;
        for (var i = 0; bytesRemaining > 0 && i < num; i++) {
          var iovbase = HEAP32[(iov + (8 * i + 0)) >> 2];
          var iovlen = HEAP32[(iov + (8 * i + 4)) >> 2];
          if (!iovlen) {
            continue;
          }
          var length = Math.min(iovlen, bytesRemaining);
          var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
          HEAPU8.set(buf, iovbase + bytesRead);
          bytesRead += length;
          bytesRemaining -= length;
        }
        return bytesRead;
      }
      default: {
        return -52;
      }
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_stat64(path, buf) {
  try {
    path = SYSCALLS.getStr(path);
    return SYSCALLS.doStat(FS.stat, path, buf);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___sys_ugetrlimit(resource, rlim) {
  try {
    HEAP32[rlim >> 2] = -1;
    HEAP32[(rlim + 4) >> 2] = -1;
    HEAP32[(rlim + 8) >> 2] = -1;
    HEAP32[(rlim + 12) >> 2] = -1;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function _abort() {
  abort();
}
var _emscripten_get_now;
if (ENVIRONMENT_IS_NODE) {
  _emscripten_get_now = function () {
    var t = process["hrtime"]();
    return t[0] * 1e3 + t[1] / 1e6;
  };
} else if (typeof dateNow !== "undefined") {
  _emscripten_get_now = dateNow;
} else
  _emscripten_get_now = function () {
    return performance.now();
  };
var _emscripten_get_now_is_monotonic = true;
function _clock_gettime(clk_id, tp) {
  var now;
  if (clk_id === 0) {
    now = Date.now();
  } else if (
    (clk_id === 1 || clk_id === 4) &&
    _emscripten_get_now_is_monotonic
  ) {
    now = _emscripten_get_now();
  } else {
    setErrNo(28);
    return -1;
  }
  HEAP32[tp >> 2] = (now / 1e3) | 0;
  HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
  return 0;
}
function _emscripten_asm_const_int(code, sigPtr, argbuf) {
  var args = readAsmConstArgs(sigPtr, argbuf);
  return ASM_CONSTS[code].apply(null, args);
}
function _emscripten_memcpy_big(dest, src, num) {
  HEAPU8.copyWithin(dest, src, src + num);
}
function abortOnCannotGrowMemory(requestedSize) {
  abort("OOM");
}
function _emscripten_resize_heap(requestedSize) {
  requestedSize = requestedSize >>> 0;
  abortOnCannotGrowMemory(requestedSize);
}
function _emscripten_thread_sleep(msecs) {
  var start = _emscripten_get_now();
  while (_emscripten_get_now() - start < msecs) {}
}
var ENV = {};
function getExecutableName() {
  return thisProgram || "./this.program";
}
function getEnvStrings() {
  if (!getEnvStrings.strings) {
    var lang =
      (
        (typeof navigator === "object" &&
          navigator.languages &&
          navigator.languages[0]) ||
        "C"
      ).replace("-", "_") + ".UTF-8";
    var env = {
      USER: "web_user",
      LOGNAME: "web_user",
      PATH: "/",
      PWD: "/",
      HOME: "/home/web_user",
      LANG: lang,
      _: getExecutableName(),
    };
    for (var x in ENV) {
      env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(x + "=" + env[x]);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
}
function _environ_get(__environ, environ_buf) {
  try {
    var bufSize = 0;
    getEnvStrings().forEach(function (string, i) {
      var ptr = environ_buf + bufSize;
      HEAP32[(__environ + i * 4) >> 2] = ptr;
      writeAsciiToMemory(string, ptr);
      bufSize += string.length + 1;
    });
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  try {
    var strings = getEnvStrings();
    HEAP32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function (string) {
      bufSize += string.length + 1;
    });
    HEAP32[penviron_buf_size >> 2] = bufSize;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _epoll_create() {
  err("missing function: epoll_create");
  abort(-1);
}
function _epoll_ctl() {
  err("missing function: epoll_ctl");
  abort(-1);
}
function _epoll_wait() {
  err("missing function: epoll_wait");
  abort(-1);
}
function _fd_close(fd) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _fd_fdstat_get(fd, pbuf) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var type = stream.tty
      ? 2
      : FS.isDir(stream.mode)
      ? 3
      : FS.isLink(stream.mode)
      ? 7
      : 4;
    HEAP8[pbuf >> 0] = type;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _fd_read(fd, iov, iovcnt, pnum) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = SYSCALLS.doReadv(stream, iov, iovcnt);
    HEAP32[pnum >> 2] = num;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var HIGH_OFFSET = 4294967296;
    var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
    var DOUBLE_LIMIT = 9007199254740992;
    if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
      return -61;
    }
    FS.llseek(stream, offset, whence);
    (tempI64 = [
      stream.position >>> 0,
      ((tempDouble = stream.position),
      +Math.abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[newOffset >> 2] = tempI64[0]),
      (HEAP32[(newOffset + 4) >> 2] = tempI64[1]);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _fd_write(fd, iov, iovcnt, pnum) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = SYSCALLS.doWritev(stream, iov, iovcnt);
    HEAP32[pnum >> 2] = num;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
}
function _gettimeofday(ptr) {
  var now = Date.now();
  HEAP32[ptr >> 2] = (now / 1e3) | 0;
  HEAP32[(ptr + 4) >> 2] = ((now % 1e3) * 1e3) | 0;
  return 0;
}
function _prctl() {
  err("missing function: prctl");
  abort(-1);
}
function _pthread_create() {
  return 6;
}
function _pthread_join() {
  return 28;
}
function _pthread_setschedparam() {
  err("missing function: pthread_setschedparam");
  abort(-1);
}
function _sched_get_priority_max() {
  err("missing function: sched_get_priority_max");
  abort(-1);
}
function _sched_get_priority_min() {
  err("missing function: sched_get_priority_min");
  abort(-1);
}
function _sched_setaffinity() {
  err("missing function: sched_setaffinity");
  abort(-1);
}
function _setTempRet0($i) {
  setTempRet0($i | 0);
}
function __isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function __arraySum(array, index) {
  var sum = 0;
  for (var i = 0; i <= index; sum += array[i++]) {}
  return sum;
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function __addDays(date, days) {
  var newDate = new Date(date.getTime());
  while (days > 0) {
    var leap = __isLeapYear(newDate.getFullYear());
    var currentMonth = newDate.getMonth();
    var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[
      currentMonth
    ];
    if (days > daysInCurrentMonth - newDate.getDate()) {
      days -= daysInCurrentMonth - newDate.getDate() + 1;
      newDate.setDate(1);
      if (currentMonth < 11) {
        newDate.setMonth(currentMonth + 1);
      } else {
        newDate.setMonth(0);
        newDate.setFullYear(newDate.getFullYear() + 1);
      }
    } else {
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    }
  }
  return newDate;
}
function _strftime(s, maxsize, format, tm) {
  var tm_zone = HEAP32[(tm + 40) >> 2];
  var date = {
    tm_sec: HEAP32[tm >> 2],
    tm_min: HEAP32[(tm + 4) >> 2],
    tm_hour: HEAP32[(tm + 8) >> 2],
    tm_mday: HEAP32[(tm + 12) >> 2],
    tm_mon: HEAP32[(tm + 16) >> 2],
    tm_year: HEAP32[(tm + 20) >> 2],
    tm_wday: HEAP32[(tm + 24) >> 2],
    tm_yday: HEAP32[(tm + 28) >> 2],
    tm_isdst: HEAP32[(tm + 32) >> 2],
    tm_gmtoff: HEAP32[(tm + 36) >> 2],
    tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
  };
  var pattern = UTF8ToString(format);
  var EXPANSION_RULES_1 = {
    "%c": "%a %b %d %H:%M:%S %Y",
    "%D": "%m/%d/%y",
    "%F": "%Y-%m-%d",
    "%h": "%b",
    "%r": "%I:%M:%S %p",
    "%R": "%H:%M",
    "%T": "%H:%M:%S",
    "%x": "%m/%d/%y",
    "%X": "%H:%M:%S",
    "%Ec": "%c",
    "%EC": "%C",
    "%Ex": "%m/%d/%y",
    "%EX": "%H:%M:%S",
    "%Ey": "%y",
    "%EY": "%Y",
    "%Od": "%d",
    "%Oe": "%e",
    "%OH": "%H",
    "%OI": "%I",
    "%Om": "%m",
    "%OM": "%M",
    "%OS": "%S",
    "%Ou": "%u",
    "%OU": "%U",
    "%OV": "%V",
    "%Ow": "%w",
    "%OW": "%W",
    "%Oy": "%y",
  };
  for (var rule in EXPANSION_RULES_1) {
    pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
  }
  var WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function leadingSomething(value, digits, character) {
    var str = typeof value === "number" ? value.toString() : value || "";
    while (str.length < digits) {
      str = character[0] + str;
    }
    return str;
  }
  function leadingNulls(value, digits) {
    return leadingSomething(value, digits, "0");
  }
  function compareByDay(date1, date2) {
    function sgn(value) {
      return value < 0 ? -1 : value > 0 ? 1 : 0;
    }
    var compare;
    if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
      if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
        compare = sgn(date1.getDate() - date2.getDate());
      }
    }
    return compare;
  }
  function getFirstWeekStartDate(janFourth) {
    switch (janFourth.getDay()) {
      case 0:
        return new Date(janFourth.getFullYear() - 1, 11, 29);
      case 1:
        return janFourth;
      case 2:
        return new Date(janFourth.getFullYear(), 0, 3);
      case 3:
        return new Date(janFourth.getFullYear(), 0, 2);
      case 4:
        return new Date(janFourth.getFullYear(), 0, 1);
      case 5:
        return new Date(janFourth.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(janFourth.getFullYear() - 1, 11, 30);
    }
  }
  function getWeekBasedYear(date) {
    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
    var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
    var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
    var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
    var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
    if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
      if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
        return thisDate.getFullYear() + 1;
      } else {
        return thisDate.getFullYear();
      }
    } else {
      return thisDate.getFullYear() - 1;
    }
  }
  var EXPANSION_RULES_2 = {
    "%a": function (date) {
      return WEEKDAYS[date.tm_wday].substring(0, 3);
    },
    "%A": function (date) {
      return WEEKDAYS[date.tm_wday];
    },
    "%b": function (date) {
      return MONTHS[date.tm_mon].substring(0, 3);
    },
    "%B": function (date) {
      return MONTHS[date.tm_mon];
    },
    "%C": function (date) {
      var year = date.tm_year + 1900;
      return leadingNulls((year / 100) | 0, 2);
    },
    "%d": function (date) {
      return leadingNulls(date.tm_mday, 2);
    },
    "%e": function (date) {
      return leadingSomething(date.tm_mday, 2, " ");
    },
    "%g": function (date) {
      return getWeekBasedYear(date).toString().substring(2);
    },
    "%G": function (date) {
      return getWeekBasedYear(date);
    },
    "%H": function (date) {
      return leadingNulls(date.tm_hour, 2);
    },
    "%I": function (date) {
      var twelveHour = date.tm_hour;
      if (twelveHour == 0) twelveHour = 12;
      else if (twelveHour > 12) twelveHour -= 12;
      return leadingNulls(twelveHour, 2);
    },
    "%j": function (date) {
      return leadingNulls(
        date.tm_mday +
          __arraySum(
            __isLeapYear(date.tm_year + 1900)
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            date.tm_mon - 1
          ),
        3
      );
    },
    "%m": function (date) {
      return leadingNulls(date.tm_mon + 1, 2);
    },
    "%M": function (date) {
      return leadingNulls(date.tm_min, 2);
    },
    "%n": function () {
      return "\n";
    },
    "%p": function (date) {
      if (date.tm_hour >= 0 && date.tm_hour < 12) {
        return "AM";
      } else {
        return "PM";
      }
    },
    "%S": function (date) {
      return leadingNulls(date.tm_sec, 2);
    },
    "%t": function () {
      return "\t";
    },
    "%u": function (date) {
      return date.tm_wday || 7;
    },
    "%U": function (date) {
      var janFirst = new Date(date.tm_year + 1900, 0, 1);
      var firstSunday =
        janFirst.getDay() === 0
          ? janFirst
          : __addDays(janFirst, 7 - janFirst.getDay());
      var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
      if (compareByDay(firstSunday, endDate) < 0) {
        var februaryFirstUntilEndMonth =
          __arraySum(
            __isLeapYear(endDate.getFullYear())
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            endDate.getMonth() - 1
          ) - 31;
        var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
        var days =
          firstSundayUntilEndJanuary +
          februaryFirstUntilEndMonth +
          endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
    },
    "%V": function (date) {
      var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
      var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
      var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
      var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
      var endDate = __addDays(
        new Date(date.tm_year + 1900, 0, 1),
        date.tm_yday
      );
      if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
        return "53";
      }
      if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
        return "01";
      }
      var daysDifference;
      if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
        daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
      } else {
        daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
      }
      return leadingNulls(Math.ceil(daysDifference / 7), 2);
    },
    "%w": function (date) {
      return date.tm_wday;
    },
    "%W": function (date) {
      var janFirst = new Date(date.tm_year, 0, 1);
      var firstMonday =
        janFirst.getDay() === 1
          ? janFirst
          : __addDays(
              janFirst,
              janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1
            );
      var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
      if (compareByDay(firstMonday, endDate) < 0) {
        var februaryFirstUntilEndMonth =
          __arraySum(
            __isLeapYear(endDate.getFullYear())
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            endDate.getMonth() - 1
          ) - 31;
        var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
        var days =
          firstMondayUntilEndJanuary +
          februaryFirstUntilEndMonth +
          endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
    },
    "%y": function (date) {
      return (date.tm_year + 1900).toString().substring(2);
    },
    "%Y": function (date) {
      return date.tm_year + 1900;
    },
    "%z": function (date) {
      var off = date.tm_gmtoff;
      var ahead = off >= 0;
      off = Math.abs(off) / 60;
      off = (off / 60) * 100 + (off % 60);
      return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
    },
    "%Z": function (date) {
      return date.tm_zone;
    },
    "%%": function () {
      return "%";
    },
  };
  for (var rule in EXPANSION_RULES_2) {
    if (pattern.indexOf(rule) >= 0) {
      pattern = pattern.replace(
        new RegExp(rule, "g"),
        EXPANSION_RULES_2[rule](date)
      );
    }
  }
  var bytes = intArrayFromString(pattern, false);
  if (bytes.length > maxsize) {
    return 0;
  }
  writeArrayToMemory(bytes, s);
  return bytes.length - 1;
}
function _strftime_l(s, maxsize, format, tm) {
  return _strftime(s, maxsize, format, tm);
}
function _time(ptr) {
  var ret = (Date.now() / 1e3) | 0;
  if (ptr) {
    HEAP32[ptr >> 2] = ret;
  }
  return ret;
}
var readAsmConstArgsArray = [];
function readAsmConstArgs(sigPtr, buf) {
  readAsmConstArgsArray.length = 0;
  var ch;
  buf >>= 2;
  while ((ch = HEAPU8[sigPtr++])) {
    var double = ch < 105;
    if (double && buf & 1) buf++;
    readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
    ++buf;
  }
  return readAsmConstArgsArray;
}
var FSNode = function (parent, name, mode, rdev) {
  if (!parent) {
    parent = this;
  }
  this.parent = parent;
  this.mount = parent.mount;
  this.mounted = null;
  this.id = FS.nextInode++;
  this.name = name;
  this.mode = mode;
  this.node_ops = {};
  this.stream_ops = {};
  this.rdev = rdev;
};
var readMode = 292 | 73;
var writeMode = 146;
Object.defineProperties(FSNode.prototype, {
  read: {
    get: function () {
      return (this.mode & readMode) === readMode;
    },
    set: function (val) {
      val ? (this.mode |= readMode) : (this.mode &= ~readMode);
    },
  },
  write: {
    get: function () {
      return (this.mode & writeMode) === writeMode;
    },
    set: function (val) {
      val ? (this.mode |= writeMode) : (this.mode &= ~writeMode);
    },
  },
  isFolder: {
    get: function () {
      return FS.isDir(this.mode);
    },
  },
  isDevice: {
    get: function () {
      return FS.isChrdev(this.mode);
    },
  },
});
FS.FSNode = FSNode;
FS.staticInit();
var ASSERTIONS = false;
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
__ATINIT__.push({
  func: function () {
    ___wasm_call_ctors();
  },
});
var asmLibraryArg = {
  SKP_Silk_LPC_synthesis_order16_sse41: _SKP_Silk_LPC_synthesis_order16_sse41,
  SKP_Silk_MA_Prediction_sse2: _SKP_Silk_MA_Prediction_sse2,
  SKP_Silk_MA_Prediction_sse41: _SKP_Silk_MA_Prediction_sse41,
  SKP_Silk_NLSF_MSVQ_decode_sse41: _SKP_Silk_NLSF_MSVQ_decode_sse41,
  SKP_Silk_NLSF_VQ_sum_error_FIX_sse41: _SKP_Silk_NLSF_VQ_sum_error_FIX_sse41,
  SKP_Silk_NSQ_del_dec_sse41: _SKP_Silk_NSQ_del_dec_sse41,
  SKP_Silk_PLC_conceal_sse41: _SKP_Silk_PLC_conceal_sse41,
  SKP_Silk_decode_core_sse41: _SKP_Silk_decode_core_sse41,
  SKP_Silk_inner_prod_aligned_sse2: _SKP_Silk_inner_prod_aligned_sse2,
  SKP_Silk_int16_array_maxabs_sse41: _SKP_Silk_int16_array_maxabs_sse41,
  SKP_Silk_resampler_private_IIR_FIR_INTERPOL_sse2:
    _SKP_Silk_resampler_private_IIR_FIR_INTERPOL_sse2,
  SKP_Silk_resampler_private_up2_HQ_sse41:
    _SKP_Silk_resampler_private_up2_HQ_sse41,
  SKP_Silk_warped_LPC_analysis_filter_FIX_sse41:
    _SKP_Silk_warped_LPC_analysis_filter_FIX_sse41,
  SKP_Silk_warped_autocorrelation_FIX_sse2:
    _SKP_Silk_warped_autocorrelation_FIX_sse2,
  SKP_Silk_warped_autocorrelation_FIX_sse41:
    _SKP_Silk_warped_autocorrelation_FIX_sse41,
  __assert_fail: ___assert_fail,
  __cxa_allocate_exception: ___cxa_allocate_exception,
  __cxa_atexit: ___cxa_atexit,
  __cxa_throw: ___cxa_throw,
  __gmtime_r: ___gmtime_r,
  __localtime_r: ___localtime_r,
  __sys__newselect: ___sys__newselect,
  __sys_fcntl64: ___sys_fcntl64,
  __sys_fstat64: ___sys_fstat64,
  __sys_getcwd: ___sys_getcwd,
  __sys_getpid: ___sys_getpid,
  __sys_getuid32: ___sys_getuid32,
  __sys_ioctl: ___sys_ioctl,
  __sys_open: ___sys_open,
  __sys_pipe: ___sys_pipe,
  __sys_poll: ___sys_poll,
  __sys_prlimit64: ___sys_prlimit64,
  __sys_setrlimit: ___sys_setrlimit,
  __sys_socketcall: ___sys_socketcall,
  __sys_stat64: ___sys_stat64,
  __sys_ugetrlimit: ___sys_ugetrlimit,
  abort: _abort,
  clock_gettime: _clock_gettime,
  emscripten_asm_const_int: _emscripten_asm_const_int,
  emscripten_memcpy_big: _emscripten_memcpy_big,
  emscripten_resize_heap: _emscripten_resize_heap,
  emscripten_thread_sleep: _emscripten_thread_sleep,
  environ_get: _environ_get,
  environ_sizes_get: _environ_sizes_get,
  epoll_create: _epoll_create,
  epoll_ctl: _epoll_ctl,
  epoll_wait: _epoll_wait,
  fd_close: _fd_close,
  fd_fdstat_get: _fd_fdstat_get,
  fd_read: _fd_read,
  fd_seek: _fd_seek,
  fd_write: _fd_write,
  gettimeofday: _gettimeofday,
  prctl: _prctl,
  pthread_create: _pthread_create,
  pthread_join: _pthread_join,
  pthread_setschedparam: _pthread_setschedparam,
  sched_get_priority_max: _sched_get_priority_max,
  sched_get_priority_min: _sched_get_priority_min,
  sched_setaffinity: _sched_setaffinity,
  setTempRet0: _setTempRet0,
  strftime: _strftime,
  strftime_l: _strftime_l,
  time: _time,
};
var asm = createWasm();
var ___wasm_call_ctors = (Module["___wasm_call_ctors"] = function () {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] =
    Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
});
var _memcpy = (Module["_memcpy"] = function () {
  return (_memcpy = Module["_memcpy"] = Module["asm"]["memcpy"]).apply(
    null,
    arguments
  );
});
var __Audio_Init = (Module["__Audio_Init"] = function () {
  return (__Audio_Init = Module["__Audio_Init"] =
    Module["asm"]["_Audio_Init"]).apply(null, arguments);
});
var __Audio_UnInit = (Module["__Audio_UnInit"] = function () {
  return (__Audio_UnInit = Module["__Audio_UnInit"] =
    Module["asm"]["_Audio_UnInit"]).apply(null, arguments);
});
var __Audio_Encode = (Module["__Audio_Encode"] = function () {
  return (__Audio_Encode = Module["__Audio_Encode"] =
    Module["asm"]["_Audio_Encode"]).apply(null, arguments);
});
var __Audio_Decode = (Module["__Audio_Decode"] = function () {
  return (__Audio_Decode = Module["__Audio_Decode"] =
    Module["asm"]["_Audio_Decode"]).apply(null, arguments);
});
var __Put_Pre_Aec_Data = (Module["__Put_Pre_Aec_Data"] = function () {
  return (__Put_Pre_Aec_Data = Module["__Put_Pre_Aec_Data"] =
    Module["asm"]["_Put_Pre_Aec_Data"]).apply(null, arguments);
});
var __Set_Aec_Delay = (Module["__Set_Aec_Delay"] = function () {
  return (__Set_Aec_Delay = Module["__Set_Aec_Delay"] =
    Module["asm"]["_Set_Aec_Delay"]).apply(null, arguments);
});
var __ReSet_Aec = (Module["__ReSet_Aec"] = function () {
  return (__ReSet_Aec = Module["__ReSet_Aec"] =
    Module["asm"]["_ReSet_Aec"]).apply(null, arguments);
});
var __Get_Aec_Delay = (Module["__Get_Aec_Delay"] = function () {
  return (__Get_Aec_Delay = Module["__Get_Aec_Delay"] =
    Module["asm"]["_Get_Aec_Delay"]).apply(null, arguments);
});
var __Request_Audio_Qos_Data = (Module["__Request_Audio_Qos_Data"] =
  function () {
    return (__Request_Audio_Qos_Data = Module["__Request_Audio_Qos_Data"] =
      Module["asm"]["_Request_Audio_Qos_Data"]).apply(null, arguments);
  });
var __Get_Mixed_Audio = (Module["__Get_Mixed_Audio"] = function () {
  return (__Get_Mixed_Audio = Module["__Get_Mixed_Audio"] =
    Module["asm"]["_Get_Mixed_Audio"]).apply(null, arguments);
});
var __Get_Audio_Edition = (Module["__Get_Audio_Edition"] = function () {
  return (__Get_Audio_Edition = Module["__Get_Audio_Edition"] =
    Module["asm"]["_Get_Audio_Edition"]).apply(null, arguments);
});
var __Audio_Set_Data_Encryption = (Module["__Audio_Set_Data_Encryption"] =
  function () {
    return (__Audio_Set_Data_Encryption = Module[
      "__Audio_Set_Data_Encryption"
    ] =
      Module["asm"]["_Audio_Set_Data_Encryption"]).apply(null, arguments);
  });
var __Add_Cooker_info = (Module["__Add_Cooker_info"] = function () {
  return (__Add_Cooker_info = Module["__Add_Cooker_info"] =
    Module["asm"]["_Add_Cooker_info"]).apply(null, arguments);
});
var __Remove_Cooker_Info = (Module["__Remove_Cooker_Info"] = function () {
  return (__Remove_Cooker_Info = Module["__Remove_Cooker_Info"] =
    Module["asm"]["_Remove_Cooker_Info"]).apply(null, arguments);
});
var __Get_Audio_Meat_Weight = (Module["__Get_Audio_Meat_Weight"] = function () {
  return (__Get_Audio_Meat_Weight = Module["__Get_Audio_Meat_Weight"] =
    Module["asm"]["_Get_Audio_Meat_Weight"]).apply(null, arguments);
});
var __Change_Aec_Flag = (Module["__Change_Aec_Flag"] = function () {
  return (__Change_Aec_Flag = Module["__Change_Aec_Flag"] =
    Module["asm"]["_Change_Aec_Flag"]).apply(null, arguments);
});
var __Change_Connect_Type = (Module["__Change_Connect_Type"] = function () {
  return (__Change_Connect_Type = Module["__Change_Connect_Type"] =
    Module["asm"]["_Change_Connect_Type"]).apply(null, arguments);
});
var __Cc_Set_Lang = (Module["__Cc_Set_Lang"] = function () {
  return (__Cc_Set_Lang = Module["__Cc_Set_Lang"] =
    Module["asm"]["_Cc_Set_Lang"]).apply(null, arguments);
});
var __Interpretation_Configure = (Module["__Interpretation_Configure"] =
  function () {
    return (__Interpretation_Configure = Module["__Interpretation_Configure"] =
      Module["asm"]["_Interpretation_Configure"]).apply(null, arguments);
  });
var __Start_Audio_Share = (Module["__Start_Audio_Share"] = function () {
  return (__Start_Audio_Share = Module["__Start_Audio_Share"] =
    Module["asm"]["_Start_Audio_Share"]).apply(null, arguments);
});
var __InsertShareData = (Module["__InsertShareData"] = function () {
  return (__InsertShareData = Module["__InsertShareData"] =
    Module["asm"]["_InsertShareData"]).apply(null, arguments);
});
var __Set_Share_Volume_Level = (Module["__Set_Share_Volume_Level"] =
  function () {
    return (__Set_Share_Volume_Level = Module["__Set_Share_Volume_Level"] =
      Module["asm"]["_Set_Share_Volume_Level"]).apply(null, arguments);
  });
var __Update_Monitor_Send_Audio_Info = (Module[
  "__Update_Monitor_Send_Audio_Info"
] = function () {
  return (__Update_Monitor_Send_Audio_Info = Module[
    "__Update_Monitor_Send_Audio_Info"
  ] =
    Module["asm"]["_Update_Monitor_Send_Audio_Info"]).apply(null, arguments);
});
var __Update_Monitor_Receive_Audio_Info = (Module[
  "__Update_Monitor_Receive_Audio_Info"
] = function () {
  return (__Update_Monitor_Receive_Audio_Info = Module[
    "__Update_Monitor_Receive_Audio_Info"
  ] =
    Module["asm"]["_Update_Monitor_Receive_Audio_Info"]).apply(null, arguments);
});
var __Set_Audio_Encryption_Key_Directly = (Module[
  "__Set_Audio_Encryption_Key_Directly"
] = function () {
  return (__Set_Audio_Encryption_Key_Directly = Module[
    "__Set_Audio_Encryption_Key_Directly"
  ] =
    Module["asm"]["_Set_Audio_Encryption_Key_Directly"]).apply(null, arguments);
});
var __Add_Roster_Info_Directly = (Module["__Add_Roster_Info_Directly"] =
  function () {
    return (__Add_Roster_Info_Directly = Module["__Add_Roster_Info_Directly"] =
      Module["asm"]["_Add_Roster_Info_Directly"]).apply(null, arguments);
  });
var __Enable_Share_To_Bo = (Module["__Enable_Share_To_Bo"] = function () {
  return (__Enable_Share_To_Bo = Module["__Enable_Share_To_Bo"] =
    Module["asm"]["_Enable_Share_To_Bo"]).apply(null, arguments);
});
var __Set_Audio_Pipe_To_Bo = (Module["__Set_Audio_Pipe_To_Bo"] = function () {
  return (__Set_Audio_Pipe_To_Bo = Module["__Set_Audio_Pipe_To_Bo"] =
    Module["asm"]["_Set_Audio_Pipe_To_Bo"]).apply(null, arguments);
});
var ___errno_location = (Module["___errno_location"] = function () {
  return (___errno_location = Module["___errno_location"] =
    Module["asm"]["__errno_location"]).apply(null, arguments);
});
var _malloc = (Module["_malloc"] = function () {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(
    null,
    arguments
  );
});
var _free = (Module["_free"] = function () {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(
    null,
    arguments
  );
});
var _ntohs = (Module["_ntohs"] = function () {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(
    null,
    arguments
  );
});
var _htons = (Module["_htons"] = function () {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(
    null,
    arguments
  );
});
var _htonl = (Module["_htonl"] = function () {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(
    null,
    arguments
  );
});
var __get_tzname = (Module["__get_tzname"] = function () {
  return (__get_tzname = Module["__get_tzname"] =
    Module["asm"]["_get_tzname"]).apply(null, arguments);
});
var __get_daylight = (Module["__get_daylight"] = function () {
  return (__get_daylight = Module["__get_daylight"] =
    Module["asm"]["_get_daylight"]).apply(null, arguments);
});
var __get_timezone = (Module["__get_timezone"] = function () {
  return (__get_timezone = Module["__get_timezone"] =
    Module["asm"]["_get_timezone"]).apply(null, arguments);
});
var _emscripten_main_thread_process_queued_calls = (Module[
  "_emscripten_main_thread_process_queued_calls"
] = function () {
  return (_emscripten_main_thread_process_queued_calls = Module[
    "_emscripten_main_thread_process_queued_calls"
  ] =
    Module["asm"]["emscripten_main_thread_process_queued_calls"]).apply(
    null,
    arguments
  );
});
var stackSave = (Module["stackSave"] = function () {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(
    null,
    arguments
  );
});
var stackRestore = (Module["stackRestore"] = function () {
  return (stackRestore = Module["stackRestore"] =
    Module["asm"]["stackRestore"]).apply(null, arguments);
});
var stackAlloc = (Module["stackAlloc"] = function () {
  return (stackAlloc = Module["stackAlloc"] =
    Module["asm"]["stackAlloc"]).apply(null, arguments);
});
var _setThrew = (Module["_setThrew"] = function () {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(
    null,
    arguments
  );
});
var ___cxa_demangle = (Module["___cxa_demangle"] = function () {
  return (___cxa_demangle = Module["___cxa_demangle"] =
    Module["asm"]["__cxa_demangle"]).apply(null, arguments);
});
var dynCall_iiij = (Module["dynCall_iiij"] = function () {
  return (dynCall_iiij = Module["dynCall_iiij"] =
    Module["asm"]["dynCall_iiij"]).apply(null, arguments);
});
var dynCall_iij = (Module["dynCall_iij"] = function () {
  return (dynCall_iij = Module["dynCall_iij"] =
    Module["asm"]["dynCall_iij"]).apply(null, arguments);
});
var dynCall_viijii = (Module["dynCall_viijii"] = function () {
  return (dynCall_viijii = Module["dynCall_viijii"] =
    Module["asm"]["dynCall_viijii"]).apply(null, arguments);
});
var dynCall_viij = (Module["dynCall_viij"] = function () {
  return (dynCall_viij = Module["dynCall_viij"] =
    Module["asm"]["dynCall_viij"]).apply(null, arguments);
});
var dynCall_jiii = (Module["dynCall_jiii"] = function () {
  return (dynCall_jiii = Module["dynCall_jiii"] =
    Module["asm"]["dynCall_jiii"]).apply(null, arguments);
});
var dynCall_vij = (Module["dynCall_vij"] = function () {
  return (dynCall_vij = Module["dynCall_vij"] =
    Module["asm"]["dynCall_vij"]).apply(null, arguments);
});
var dynCall_jiji = (Module["dynCall_jiji"] = function () {
  return (dynCall_jiji = Module["dynCall_jiji"] =
    Module["asm"]["dynCall_jiji"]).apply(null, arguments);
});
var dynCall_iiiiij = (Module["dynCall_iiiiij"] = function () {
  return (dynCall_iiiiij = Module["dynCall_iiiiij"] =
    Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
});
var dynCall_iiiiijj = (Module["dynCall_iiiiijj"] = function () {
  return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] =
    Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
});
var dynCall_iiiiiijj = (Module["dynCall_iiiiiijj"] = function () {
  return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] =
    Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
});
Module["cwrap"] = cwrap;
var calledRun;
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}
dependenciesFulfilled = function runCaller() {
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller;
};
function run(args) {
  args = args || arguments_;
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) return;
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module["run"] = run;
if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function")
    Module["preInit"] = [Module["preInit"]];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}
noExitRuntime = true;
run();
