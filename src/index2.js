"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var _button = require("antd/es/button"),
  _button2 = _interopRequireDefault(_button),
  _badge = require("antd/es/badge"),
  _badge2 = _interopRequireDefault(_badge),
  _tag = require("antd/es/tag"),
  _tag2 = _interopRequireDefault(_tag),
  _icon = require("antd/es/icon"),
  _icon2 = _interopRequireDefault(_icon),
  _version2 = require("antd/es/version"),
  _version3 = _interopRequireDefault(_version2);
require("antd/es/button/style"),
  require("antd/es/badge/style"),
  require("antd/es/tag/style"),
  require("antd/es/icon/style"),
  require("antd/es/version/style");
var _react = require("react"),
  _react2 = _interopRequireDefault(_react),
  _reactRouterDom = require("react-router-dom"),
  _propTypes = require("prop-types"),
  _propTypes2 = _interopRequireDefault(_propTypes),
  _antd = require("antd"),
  _reactRouterCacheRoute = require("react-router-cache-route"),
  _pathToRegexp = require("path-to-regexp"),
  _pathToRegexp2 = _interopRequireDefault(_pathToRegexp),
  _store = require("../../util/store"),
  _index = require("./../../constant/index"),
  _index2 = _interopRequireDefault(_index),
  _scroll = require("../../util/scroll"),
  _scroll2 = _interopRequireDefault(_scroll),
  _tabRouter = require("../../util/tabRouter");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var r = [],
      a = !0,
      n = !1,
      o = void 0;
    try {
      for (
        var l, i = e[Symbol.iterator]();
        !(a = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t);
        a = !0
      );
    } catch (e) {
      (n = !0), (o = e);
    } finally {
      try {
        a || null == i.return || i.return();
      } finally {
        if (n) throw o;
      }
    }
    return r;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var r;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (r = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (e) {
          throw e;
        },
        f: n,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
    l = !0,
    i = !1;
  return {
    s: function () {
      r = e[Symbol.iterator]();
    },
    n: function () {
      var e = r.next();
      return (l = e.done), e;
    },
    e: function (e) {
      (i = !0), (o = e);
    },
    f: function () {
      try {
        l || null == r.return || r.return();
      } finally {
        if (i) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === r && e.constructor && (r = e.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(e)
        : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, r) {
  return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(r) {
  var a = _isNativeReflectConstruct();
  return function () {
    var e,
      t = _getPrototypeOf(r);
    return _possibleConstructorReturn(
      this,
      a
        ? ((e = _getPrototypeOf(this).constructor), Reflect.construct(t, arguments, e))
        : t.apply(this, arguments)
    );
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" !== _typeof(t) && "function" != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _defineProperty(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
require("./index.less");
var TabNav = (function () {
  _inherits(f, _react.Component);
  var s = _createSuper(f);
  function f(e) {
    var c;
    _classCallCheck(this, f),
      _defineProperty(_assertThisInitialized((c = s.call(this, e))), "getCurrentNav", function (
        e,
        t
      ) {
        var r,
          a = null,
          n = _createForOfIteratorHelper(e);
        try {
          for (n.s(); !(r = n.n()).done; ) {
            var o = r.value;
            if (o.path && (0, _pathToRegexp2.default)(o.path).exec(t)) {
              a = o;
              break;
            }
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return a;
      }),
      _defineProperty(_assertThisInitialized(c), "indexOfTabs", function (e) {
        for (var t = c.state.tabs, r = 0; r < t.length; r++) {
          var a = t[r];
          if (a.key && a.key == e) return r;
        }
        return -1;
      }),
      _defineProperty(_assertThisInitialized(c), "addTab", function (e) {
        var t = e.key,
          r = _store.navStore.get(_index2.default.TABS);
        "string" == typeof r && (r = JSON.parse(r)),
          c.indexOfTabs(t) < 0 && ("M0000000000000000001" == t ? r.unshift(e) : r.push(e)),
          c.setState({ tabKeySelected: t, tabs: r }),
          _store.navStore.set(_index2.default.TABS, r);
      }),
      _defineProperty(_assertThisInitialized(c), "handleClickTag", function (e, t) {
        var r = _slicedToArray(e, 1)[0];
        c.setState({ tabKeySelected: r.key }),
          c.props.handleTabNavStyle && c.props.handleTabNavStyle();
      }),
      _defineProperty(_assertThisInitialized(c), "handleCloseTag", function (e, t) {
        var r = _slicedToArray(e, 1)[0];
        t.stopPropagation(), t.preventDefault();
        _assertThisInitialized(c);
        var a,
          n,
          o,
          l,
          i,
          u = r.key,
          s = c.indexOfTabs(u);
        1 < c.state.tabs.length &&
          ((a = c.state.tabs),
          (n = (0, _tabRouter.pathConvertToCacheKey)(r.path)),
          (0, _reactRouterCacheRoute.dropByCacheKey)(n),
          a.splice(s, 1),
          -1 != n.indexOf("processManager.mytodotask.tdetail") &&
            ((o = n.lastIndexOf(".")),
            (l = n.substring(o + 1)),
            _store.authStore.remove(_index2.default.CACHE_USERTASK_ELEMENTLIST + l)),
          u === c.state.tabKeySelected && 0 < s
            ? (a[s - 1].key,
              (i = t.currentTarget.parentElement.parentElement.previousElementSibling)
                ? i.firstElementChild.firstElementChild.click()
                : t.currentTarget.parentElement.previousElementSibling.firstElementChild.click())
            : c.setState({ tabs: a }),
          _store.navStore.set(_index2.default.TABS, a));
      }),
      _defineProperty(_assertThisInitialized(c), "handleCloseAllTags", function () {
        var e,
          r,
          t = _store.navStore.get(_index2.default.TABS),
          a = [],
          n = [];
        t.map(function (e) {
          "true" === e.unclosable ? a.push(e) : n.push(e);
        }),
          0 < a.length
            ? ((e = a[a.length - 1]),
              c.setState({ tabKeySelected: e.key }),
              c.props.history.replace(e.path),
              _store.navStore.set(_index2.default.TABS, a),
              c.setState({ tabs: a }))
            : ((r = []),
              n.map(function (e) {
                var t;
                "M0000000000000000001" === e.key &&
                  ((t = { key: e.key, name: e.name, path: e.path, unclosable: e.unclosable }),
                  r.push(t));
              }),
              _store.navStore.set(_index2.default.TABS, r),
              c.setState({ tabs: r, tabKeySelected: "M0000000000000000001" }),
              c.props.history.replace(r[0].path)),
          c.state.cacheKeyArray.forEach(function (e) {
            (0, _reactRouterCacheRoute.dropByCacheKey)(e);
          });
        var o = c.state.defaultCacheKey ? [c.state.defaultCacheKey] : [];
        c.setState({ cacheKeyArray: o });
      });
    var t = e.location,
      r = _store.navStore.get(_index2.default.NAV_LIST);
    if (null === r || 0 === r.length) return _possibleConstructorReturn(c, !1);
    var a = t.pathname,
      n = c.getCurrentNav(r, a),
      o = "M0000000000000000001",
      l = [];
    r.map(function (e) {
      e.key === o && l.push(e);
    }),
      n &&
        n.key != o &&
        ((o = n.key), l.push({ key: n.key, path: a, name: n.name, unclosable: n.unclosable }));
    var i = "",
      u = l[l.length - 1];
    return (
      !u ||
        (null !== u.unclosable && "false" !== u.unclosable && void 0 !== u.unclosable) ||
        (i = (0, _tabRouter.pathConvertToCacheKey)(u.path)),
      (c.state = { tabKeySelected: o, tabs: l, defaultCacheKey: i, cacheKeyArray: i ? [i] : [] }),
      _store.navStore.set(_index2.default.TABS, l),
      c
    );
  }
  return (
    _createClass(f, [
      {
        key: "componentWillReceiveProps",
        value: function (e) {
          var r,
            t,
            a,
            n,
            o = _store.navStore.get(_index2.default.NAV_LIST);
          if (null === o || 0 === o.length) return !1;
          e.location.pathname != this.props.location.pathname &&
            ((r = e.location.pathname),
            (t = this.getCurrentNav(o, r)) &&
              ((a = { key: t.key, path: t.path, name: t.name, unclosable: t.unclosable }),
              this.addTab(a)),
            (n = this.state.cacheKeyArray),
            o.forEach(function (e) {
              var t;
              r !== e.path ||
                ("false" !== e.unclosable && null !== e.unclosable && void 0 !== e.unclosable) ||
                ((t = (0, _tabRouter.pathConvertToCacheKey)(r)), n.includes(t) || n.push(t));
            }),
            this.setState({ cacheKeyArray: n }));
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          var e = document.querySelector(".tabNav-left"),
            t = document.querySelector("#navScrollLine");
          this.scrollWheel = _scroll2.default && (0, _scroll2.default)(e, t);
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.scrollWheel && this.scrollWheel();
        },
      },
      {
        key: "render",
        value: function () {
          var r = this,
            e = _store.navStore.get(_index2.default.NAV_LIST);
          if (e && 0 !== e.length) {
            var t = this.state,
              a = t.tabKeySelected,
              n = t.tabs,
              o = _store.navStore.get(_index2.default.TABS);
            "string" == typeof o && (o = JSON.parse(o)),
              "string" == typeof n && (n = JSON.parse(n));
            var l = [];
            o.map(function (e) {
              ("false" !== e.unclosable && null !== e.unclosable && void 0 !== e.unclosable) ||
                l.push(e);
            });
            var i = l.length,
              u = _version3.default.split(".")[0];
            return _react2.default.createElement(
              "div",
              { className: "tabNav" },
              _react2.default.createElement(
                "div",
                {
                  className: "tabNav-left",
                  style: {
                    marginRight:
                      _index2.default.ISSHOW_CLOSE_ALLTAGS_BTN &&
                      _index2.default.CLOSABLE_TAGS_NUMBER <= i
                        ? 125
                        : 0,
                  },
                },
                n &&
                  n.map(function (e, t) {
                    return r.props.changeTabnavStyle &&
                      r.props.changeTabnavStyle.isNeedChange &&
                      r.props.changeTabnavStyle.key === e.path &&
                      r.props.changeTabnavStyle.key !== r.props.location.pathname
                      ? _react2.default.createElement(
                          _badge2.default,
                          { dot: !0, className: "3" <= u ? "tabnav-dot3" : "tabnav-dot2", key: t },
                          _react2.default.createElement(
                            _tag2.default,
                            { key: t, className: e.key === a ? "tag-self tag-select" : "tag-self" },
                            _react2.default.createElement(
                              _reactRouterDom.Link,
                              { onClick: r.handleClickTag.bind(r, [e]), to: e.path },
                              e.name,
                              " "
                            ),
                            "false" === e.unclosable ||
                              null === e.unclosable ||
                              void 0 === e.unclosable
                              ? _react2.default.createElement(_icon2.default, {
                                  onClick: r.handleCloseTag.bind(r, [e]),
                                  type: "close",
                                })
                              : ""
                          )
                        )
                      : _react2.default.createElement(
                          _tag2.default,
                          { key: t, className: e.key === a ? "tag-self tag-select" : "tag-self" },
                          _react2.default.createElement(
                            _reactRouterDom.Link,
                            { onClick: r.handleClickTag.bind(r, [e]), to: e.path },
                            e.name,
                            " "
                          ),
                          "false" === e.unclosable ||
                            null === e.unclosable ||
                            void 0 === e.unclosable
                            ? _react2.default.createElement(_icon2.default, {
                                onClick: r.handleCloseTag.bind(r, [e]),
                                type: "close",
                              })
                            : ""
                        );
                  })
              ),
              _react2.default.createElement("div", {
                id: "navScrollLine",
                className: "navScrollLine",
                style: { display: "none" },
              }),
              _react2.default.createElement(
                _button2.default,
                {
                  className: "tabNav-right",
                  onClick: this.handleCloseAllTags,
                  style: {
                    display:
                      _index2.default.ISSHOW_CLOSE_ALLTAGS_BTN &&
                      _index2.default.CLOSABLE_TAGS_NUMBER <= i
                        ? "block"
                        : "none",
                  },
                },
                "关闭全部页签"
              )
            );
          }
          return _react2.default.createElement(
            "div",
            { className: "tabNav" },
            _react2.default.createElement("div", { className: "tabNav-left tabNav-empty" }),
            _react2.default.createElement("div", {
              id: "navScrollLine",
              className: "navScrollLine",
              style: { display: "none" },
            })
          );
        },
      },
    ]),
    f
  );
})();
_defineProperty(TabNav, "propTypes", {
  changeTabnavStyle: _propTypes2.default.object,
  handleTabNavStyle: _propTypes2.default.func,
}),
  (exports.default = (0, _reactRouterDom.withRouter)(TabNav)),
  (module.exports = exports.default);
