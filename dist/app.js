(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/tiny-emitter@2.1.0/node_modules/tiny-emitter/index.js
  var require_tiny_emitter = __commonJS({
    "node_modules/.pnpm/tiny-emitter@2.1.0/node_modules/tiny-emitter/index.js"(exports, module) {
      function E() {
      }
      E.prototype = {
        on: function(name, callback, ctx) {
          var e2 = this.e || (this.e = {});
          (e2[name] || (e2[name] = [])).push({
            fn: callback,
            ctx
          });
          return this;
        },
        once: function(name, callback, ctx) {
          var self = this;
          function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
          }
          ;
          listener._ = callback;
          return this.on(name, listener, ctx);
        },
        emit: function(name) {
          var data = [].slice.call(arguments, 1);
          var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
          var i2 = 0;
          var len = evtArr.length;
          for (i2; i2 < len; i2++) {
            evtArr[i2].fn.apply(evtArr[i2].ctx, data);
          }
          return this;
        },
        off: function(name, callback) {
          var e2 = this.e || (this.e = {});
          var evts = e2[name];
          var liveEvents = [];
          if (evts && callback) {
            for (var i2 = 0, len = evts.length; i2 < len; i2++) {
              if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                liveEvents.push(evts[i2]);
            }
          }
          liveEvents.length ? e2[name] = liveEvents : delete e2[name];
          return this;
        }
      };
      module.exports = E;
      module.exports.TinyEmitter = E;
    }
  });

  // src/util/device.js
  var isTablet = function() {
    let check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      ))
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  // src/util/observe.js
  var import_tiny_emitter = __toESM(require_tiny_emitter(), 1);
  var Observe = class extends import_tiny_emitter.default {
    /**
     * Creates an instance of Observe.
     * @param {Object} options - The options object.
     * @param {HTMLElement} options.element - The element to observe.
     * @param {Object} [options.config] - The IntersectionObserver configuration options.
     * @param {HTMLElement} [options.config.root=null] - The element that is used as the viewport for checking visibility of the target.
     * @param {string} [options.config.margin='10px'] - Margin around the root element.
     * @param {number} [options.config.threshold=0] - A threshold of 0.0 means that the target will be visible when it intersects with the root element.
     * @param {boolean} [options.config.autoStart=false] - Whether to start observing the element automatically.
     * @param {string} [options.addClass] - The CSS class to add to the element when it is in view.
     * @param {Object} [options.cb] - The callback functions to execute when the element is in or out of view.
     * @param {Function} [options.cb.in] - The function to execute when the element is in view.
     * @param {Function} [options.cb.out] - The function to execute when the element is out of view.
     */
    constructor({ element, config: config3, addClass, cb }) {
      super();
      this.element = element;
      this.config = {
        root: config3?.root || null,
        margin: config3?.margin || "10px",
        threshold: config3?.threshold || 0,
        autoStart: config3?.autoStart || false
      };
      if (cb)
        this.cb = cb;
      if (addClass !== void 0)
        this.addClass = addClass;
      this.init();
      if (this.config.autoStart)
        this.start();
    }
    init() {
      this.in = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isIn();
            }
          });
        },
        {
          root: this.config.root,
          rootMargin: this.config.margin,
          threshold: this.config.threshold
        }
      );
      this.out = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              this.isOut();
            }
          });
        },
        {
          root: this.config.root,
          rootMargin: "0px",
          threshold: 0
        }
      );
    }
    start() {
      this.in.observe(this.element);
      this.out.observe(this.element);
    }
    stop() {
      this.in.unobserve(this.element);
      this.out.unobserve(this.element);
      this.off("IN");
      this.off("OUT");
    }
    isIn() {
      this.emit("IN");
      if (this.cb?.in)
        this.cb.in();
      if (this.addClass)
        this.element.classList.add(this.addClass);
    }
    isOut() {
      this.emit("OUT");
      if (this.cb?.out)
        this.cb.out();
      if (this.addClass)
        this.element.classList.remove(this.addClass);
    }
  };

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l; ) {
    }
    return i2 < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l; i2++) {
      tween = a[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n2 = parseFloat(value);
    return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy6 = {}, p;
    for (p in obj) {
      p in excluding || (copy6[p] = obj[p]);
    }
    return copy6;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t2;
    if (sortBy) {
      t2 = child[sortBy];
      while (prev && prev[sortBy] > t2) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t2;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
        child.render(t2, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t2 = timeline2;
        while (t2._dp) {
          t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
          t2 = t2._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i2, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n2 = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n2 - n2 % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x;
          dy = snapTo[i2].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i2;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s2 = "", i2, nums, end, isArray;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i2 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i2, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i2 = 1; i2 < l; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i3 = Math.min(il, ~~p2);
          return interpolators[i3](p2 - i3);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance2, label;
    for (p in labels) {
      distance2 = labels[p] - fromTime;
      if (distance2 < 0 === !!backward && distance2 && min > (distance2 = Math.abs(distance2))) {
        label = p;
        min = distance2;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (_windowExists() && config3) {
      config3 = !config3.name && config3["default"] || config3;
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      config3 && _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r2, g, b, h, s2, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r2 = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r2 + r2 + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s2 = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s2 + 1) : l + s2 - l * s2;
          r2 = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r2, g);
          a[1] = _hue(h, r2, g);
          a[2] = _hue(h - 1 / 3, r2, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r2 = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r2, g, b);
      min = Math.min(r2, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s2 = 0;
      } else {
        d = max - min;
        s2 = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r2 ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s2 * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i2 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i2 += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c, shell, d, l;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s2);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i2 < l; i2++) {
          result += shell[i2] + (~c.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l = shell.length - 1;
      for (; i2 < l; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s2 += "|" + p + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add4(callback, once, prioritize) {
        var func = once ? function(t2, d, f, v) {
          callback(t2, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i2) {
        ~(i2 = _listeners2.indexOf(callback)) && _listeners2.splice(i2, 1) && _i >= i2 && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l = split.length, index, val, parsedVal;
    for (; i2 < l; i2++) {
      val = split[i2];
      index = i2 !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n2, c) {
    var n1 = 1 / c, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n2 * p * p : p < n22 ? n2 * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n2 * (p -= 2.25 / c) * p + 0.9375 : n2 * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set6(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add4(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t2.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t2, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy6 = {}, p;
    for (p in vars) {
      copy6[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy6;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i2;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i2 = tween._targets.length;
      while (i2--) {
        pt = lookup[i2][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i2 = ptCache.length;
    while (i2--) {
      rootPT = ptCache[i2];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy6, p, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy6 = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy6) {
        aliases = propertyAliases[p].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy6[aliases[i2]] = copy6[p];
        }
      }
    }
    return copy6;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i2) {
        return a.push({
          t: i2 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy6, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i2 = 0; i2 < l; i2++) {
            copy6 = _copyExcluding(vars, _staggerPropsToSkip);
            copy6.stagger = 0;
            yoyoEase && (copy6.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy6, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy6.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy6.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy6.delay) {
              _this3._delay = delay = copy6.delay;
              _this3._start += delay;
              copy6.delay = 0;
            }
            tl.to(curTarget, copy6, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy6 = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy6, keyframes.easeEach);
            }
            for (p in copy6) {
              a = copy6[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i2 = 0; i2 < a.length; i2++) {
                kf = a[i2];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i2 ? a[i2 - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i2;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set6(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt) {
        s2 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s2;
        pt = pt._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add4(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e2) {
        return e2 instanceof Context2 ? a.push.apply(a, e2.getTweens()) : e2 instanceof Tween && !(e2.parent && e2.parent.data === "nested") && a.push(e2);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function(t2) {
          if (t2.data === "isFlip") {
            t2.revert();
            t2.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function(t2) {
          return {
            g: t2.globalTime(0),
            t: t2
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o2) {
          return o2.t.revert(revert);
        });
        this.data.forEach(function(e2) {
          return !(e2 instanceof Tween) && e2.revert && e2.revert(revert);
        });
        this._r.forEach(function(f) {
          return f(revert, _this4);
        });
        this.isReverted = true;
      } else {
        this.data.forEach(function(e2) {
          return e2.kill && e2.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i2 = _media.length;
        while (i2--) {
          _media[i2].id === this.id && _media.splice(i2, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add4(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3);
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t2) {
          return gsap.quickSetter(t2, property, unit);
        }), l = setters.length;
        return function(value) {
          var i2 = l;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i2 = a && a.indexOf(callback);
      i2 >= 0 && a.splice(i2, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i2, pt;
    for (p in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt = tween._ptLookup[i2][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i2], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init5(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.2";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i2, p;
    for (i2 = 0; i2 < props.length; i2 += 3) {
      props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i2 = _reverting2();
      if ((!i2 || !i2.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e2 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e2.style ? e2 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e2 = element || _tempDiv, s2 = e2.style, i2 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s2)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e2) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e2) {
    return !!(e2.getCTM && (!e2.parentNode || e2.ownerSVGElement) && _getBBox(e2));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s2 = p && _getComputedProperty(target, p, 1);
      if (s2 && s2 !== start) {
        prop = p;
        start = s2;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant2, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant2 = a * d - b * c)) {
      x = xOrigin * (d / determinant2) + yOrigin * (-c / determinant2) + (c * ty - d * tx) / determinant2;
      y = xOrigin * (-b / determinant2) + yOrigin * (a / determinant2) - (a * ty - b * tx) / determinant2;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective2, xOrigin, yOrigin, matrix, angle2, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective2 = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle2 = _atan2(a32, a33);
        rotationX = angle2 * _RAD2DEG;
        if (angle2) {
          cos = Math.cos(-angle2);
          sin = Math.sin(-angle2);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle2 = _atan2(-c, a33);
        rotationY = angle2 * _RAD2DEG;
        if (angle2) {
          cos = Math.cos(-angle2);
          sin = Math.sin(-angle2);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle2 = _atan2(b, a);
        rotation = angle2 * _RAD2DEG;
        if (angle2) {
          cos = Math.cos(angle2);
          sin = Math.sin(angle2);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle2 = _atan2(a12, a22);
        skewX = Math.abs(angle2) > 2e-4 ? angle2 * _RAD2DEG : 0;
        perspective2 = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective2 + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle2 = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle2), a33 = Math.cos(angle2), cos;
      angle2 = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle2);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle2) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t2 = "Top", r2 = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t2, r2, b, l] : [t2 + l, t2 + r2, b + r2, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i2) {
        return vars[prop] = a[i2] = a[i2] || a[(i2 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/utils/strings.js
  var _trimExp = /(?:^\s+|\s+$)/g;
  var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(e2) {
    var type = e2.nodeType, result = "";
    if (type === 1 || type === 9 || type === 11) {
      if (typeof e2.textContent === "string") {
        return e2.textContent;
      } else {
        for (e2 = e2.firstChild; e2; e2 = e2.nextSibling) {
          result += getText(e2);
        }
      }
    } else if (type === 3 || type === 4) {
      return e2.nodeValue;
    }
    return result;
  }
  function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
    text += "";
    trim && (text = text.trim ? text.trim() : text.replace(_trimExp, ""));
    if (delimiter && delimiter !== "") {
      return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
    }
    var result = [], l = text.length, i2 = 0, j, character;
    for (; i2 < l; i2++) {
      character = text.charAt(i2);
      if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
        j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
        character = text.substr(i2, j);
        result.emoji = 1;
        i2 += j - 1;
      }
      result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i2 - 1) === " " || text.charAt(i2 + 1) === " ") ? "&nbsp;" : character);
    }
    return result;
  }

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/SplitText.js
  var _doc3;
  var _win3;
  var _coreInitted2;
  var gsap2;
  var _context2;
  var _toArray;
  var _stripExp = /(?:\r|\n|\t\t)/g;
  var _multipleSpacesExp = /(?:\s\s+)/g;
  var _initCore3 = function _initCore4(core) {
    _doc3 = document;
    _win3 = window;
    gsap2 = gsap2 || core || _win3.gsap || console.warn("Please gsap.registerPlugin(SplitText)");
    if (gsap2) {
      _toArray = gsap2.utils.toArray;
      _context2 = gsap2.core.context || function() {
      };
      _coreInitted2 = 1;
    }
  };
  var _bonusValidated = 1;
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win3.getComputedStyle(element);
  };
  var _isAbsolute = function _isAbsolute2(vars) {
    return vars.position === "absolute" || vars.absolute === true;
  };
  var _findSpecialChars = function _findSpecialChars2(text, chars) {
    var i2 = chars.length, s2;
    while (--i2 > -1) {
      s2 = chars[i2];
      if (text.substr(0, s2.length) === s2) {
        return s2.length;
      }
    }
  };
  var _divStart = " style='position:relative;display:inline-block;'";
  var _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
    if (cssClass === void 0) {
      cssClass = "";
    }
    var iterate = ~cssClass.indexOf("++"), num = 1;
    if (iterate) {
      cssClass = cssClass.split("++").join("");
    }
    return function() {
      return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
    };
  };
  var _swapText = function _swapText2(element, oldText, newText) {
    var type = element.nodeType;
    if (type === 1 || type === 9 || type === 11) {
      for (element = element.firstChild; element; element = element.nextSibling) {
        _swapText2(element, oldText, newText);
      }
    } else if (type === 3 || type === 4) {
      element.nodeValue = element.nodeValue.split(oldText).join(newText);
    }
  };
  var _pushReversed = function _pushReversed2(a, merge) {
    var i2 = merge.length;
    while (--i2 > -1) {
      a.push(merge[i2]);
    }
  };
  var _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e2, root, wordDelimiter) {
    var next;
    while (e2 && e2 !== root) {
      next = e2._next || e2.nextSibling;
      if (next) {
        return next.textContent.charAt(0) === wordDelimiter;
      }
      e2 = e2.parentNode || e2._parent;
    }
  };
  var _deWordify = function _deWordify2(e2) {
    var children = _toArray(e2.childNodes), l = children.length, i2, child;
    for (i2 = 0; i2 < l; i2++) {
      child = children[i2];
      if (child._isSplit) {
        _deWordify2(child);
      } else {
        if (i2 && child.previousSibling && child.previousSibling.nodeType === 3) {
          child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
          e2.removeChild(child);
        } else if (child.nodeType !== 3) {
          e2.insertBefore(child.firstChild, child);
          e2.removeChild(child);
        }
      }
    }
  };
  var _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
    return parseFloat(computedStyle[name]) || 0;
  };
  var _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
    var cs = _getComputedStyle(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i2, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
    iterateLine && (linesClass = linesClass.split("++").join(""));
    isFlex && (element.style.display = "block");
    j = element.getElementsByTagName("*");
    l = j.length;
    nodes = [];
    for (i2 = 0; i2 < l; i2++) {
      nodes[i2] = j[i2];
    }
    if (lines || absolute) {
      for (i2 = 0; i2 < l; i2++) {
        node = nodes[i2];
        isChild = node.parentNode === element;
        if (isChild || absolute || chars && !words) {
          offset = node.offsetTop;
          if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i2 === 0)) {
            curLine = [];
            lines.push(curLine);
            lineOffsetY = offset;
          }
          if (absolute) {
            node._x = node.offsetLeft;
            node._y = offset;
            node._w = node.offsetWidth;
            node._h = node.offsetHeight;
          }
          if (lines) {
            if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
              curLine.push(node);
              node._x -= paddingLeft;
              if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                node._wordEnd = true;
              }
            }
            if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i2 === 0)) {
              lines.push([]);
            }
          }
        }
      }
    }
    for (i2 = 0; i2 < l; i2++) {
      node = nodes[i2];
      isChild = node.parentNode === element;
      if (node.nodeName === "BR") {
        if (lines || absolute) {
          node.parentNode && node.parentNode.removeChild(node);
          nodes.splice(i2--, 1);
          l--;
        } else if (!words) {
          element.appendChild(node);
        }
        continue;
      }
      if (absolute) {
        style = node.style;
        if (!words && !isChild) {
          node._x += node.parentNode._x;
          node._y += node.parentNode._y;
        }
        style.left = node._x + "px";
        style.top = node._y + "px";
        style.position = "absolute";
        style.display = "block";
        style.width = node._w + 1 + "px";
        style.height = node._h + "px";
      }
      if (!words && chars) {
        if (node._isSplit) {
          node._next = j = node.nextSibling;
          node.parentNode.appendChild(node);
          while (j && j.nodeType === 3 && j.textContent === " ") {
            node._next = j.nextSibling;
            node.parentNode.appendChild(j);
            j = j.nextSibling;
          }
        } else if (node.parentNode._isSplit) {
          node._parent = node.parentNode;
          if (!node.previousSibling && node.firstChild) {
            node.firstChild._isFirst = true;
          }
          if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
            spaceNodesToRemove.push(node.nextSibling);
          }
          node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
          node.parentNode.removeChild(node);
          nodes.splice(i2--, 1);
          l--;
        } else if (!isChild) {
          offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
          node.parentNode._parent && node.parentNode._parent.appendChild(node);
          offset && node.parentNode.appendChild(_doc3.createTextNode(" "));
          if (tag === "span") {
            node.style.display = "inline";
          }
          charArray.push(node);
        }
      } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
        wordArray.push(node);
      } else if (chars && !node._isSplit) {
        if (tag === "span") {
          node.style.display = "inline";
        }
        charArray.push(node);
      }
    }
    i2 = spaceNodesToRemove.length;
    while (--i2 > -1) {
      spaceNodesToRemove[i2].parentNode.removeChild(spaceNodesToRemove[i2]);
    }
    if (lines) {
      if (absolute) {
        lineNode = _doc3.createElement(tag);
        element.appendChild(lineNode);
        lineWidth = lineNode.offsetWidth + "px";
        offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
        element.removeChild(lineNode);
      }
      style = element.style.cssText;
      element.style.cssText = "display:none;";
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
      for (i2 = 0; i2 < lines.length; i2++) {
        curLine = lines[i2];
        lineNode = _doc3.createElement(tag);
        lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
        if (linesClass) {
          lineNode.className = linesClass + (iterateLine ? i2 + 1 : "");
        }
        lineArray.push(lineNode);
        l = curLine.length;
        for (j = 0; j < l; j++) {
          if (curLine[j].nodeName !== "BR") {
            node = curLine[j];
            lineNode.appendChild(node);
            addWordSpaces && node._wordEnd && lineNode.appendChild(_doc3.createTextNode(" "));
            if (absolute) {
              if (j === 0) {
                lineNode.style.top = node._y + "px";
                lineNode.style.left = paddingLeft + offset + "px";
              }
              node.style.top = "0px";
              if (offset) {
                node.style.left = node._x - offset + "px";
              }
            }
          }
        }
        if (l === 0) {
          lineNode.innerHTML = "&nbsp;";
        } else if (!words && !chars) {
          _deWordify(lineNode);
          _swapText(lineNode, String.fromCharCode(160), " ");
        }
        if (absolute) {
          lineNode.style.width = lineWidth;
          lineNode.style.height = node._h + "px";
        }
        element.appendChild(lineNode);
      }
      element.style.cssText = style;
    }
    if (absolute) {
      if (origHeight > element.clientHeight) {
        element.style.height = origHeight - padTopAndBottom + "px";
        if (element.clientHeight < origHeight) {
          element.style.height = origHeight + borderTopAndBottom + "px";
        }
      }
      if (origWidth > element.clientWidth) {
        element.style.width = origWidth - padLeftAndRight + "px";
        if (element.clientWidth < origWidth) {
          element.style.width = origWidth + borderLeftAndRight + "px";
        }
      }
    }
    isFlex && (prevInlineDisplay ? element.style.display = prevInlineDisplay : element.style.removeProperty("display"));
    _pushReversed(allChars, charArray);
    words && _pushReversed(allWords, wordArray);
    _pushReversed(allLines, lineArray);
  };
  var _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
    var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i2, j, l, character, hasTagStart, testResult, container = _doc3.createElement("div"), parent = element.parentNode;
    parent.insertBefore(container, element);
    container.textContent = element.nodeValue;
    parent.removeChild(element);
    element = container;
    text = getText(element);
    hasTagStart = text.indexOf("<") !== -1;
    if (vars.reduceWhiteSpace !== false) {
      text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
    }
    if (hasTagStart) {
      text = text.split("<").join("{{LT}}");
    }
    l = text.length;
    splitText = (text.charAt(0) === " " ? space : "") + wordStart();
    for (i2 = 0; i2 < l; i2++) {
      character = text.charAt(i2);
      if (specialChars && (testResult = specialChars(text.substr(i2), vars.specialChars))) {
        character = text.substr(i2, testResult || 1);
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
        i2 += testResult - 1;
      } else if (character === wordDelimiter && text.charAt(i2 - 1) !== wordDelimiter && i2) {
        splitText += wordIsOpen ? wordEnd : "";
        wordIsOpen = 0;
        while (text.charAt(i2 + 1) === wordDelimiter) {
          splitText += space;
          i2++;
        }
        if (i2 === l - 1) {
          splitText += space;
        } else if (text.charAt(i2 + 1) !== ")") {
          splitText += space + wordStart();
          wordIsOpen = 1;
        }
      } else if (character === "{" && text.substr(i2, 6) === "{{LT}}") {
        splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
        i2 += 5;
      } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
        j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
        splitText += chars && character !== " " ? charStart() + text.substr(i2, j) + "</" + tag + ">" : text.substr(i2, j);
        i2 += j - 1;
      } else {
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      }
    }
    element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
    hasTagStart && _swapText(parent, "{{LT}}", "<");
  };
  var _split = function _split2(element, vars, wordStart, charStart) {
    var children = _toArray(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i2, child;
    if (element.nodeType !== 3 || l > 1) {
      vars.absolute = false;
      for (i2 = 0; i2 < l; i2++) {
        child = children[i2];
        child._next = child._isFirst = child._parent = child._wordEnd = null;
        if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
          if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
            child.style.display = "inline-block";
            child.style.position = "relative";
          }
          child._isSplit = true;
          _split2(child, vars, wordStart, charStart);
        }
      }
      vars.absolute = absolute;
      element._isSplit = true;
      return;
    }
    _splitRawText(element, vars, wordStart, charStart);
  };
  var SplitText = /* @__PURE__ */ function() {
    function SplitText2(element, vars) {
      _coreInitted2 || _initCore3();
      this.elements = _toArray(element);
      this.chars = [];
      this.words = [];
      this.lines = [];
      this._originals = [];
      this.vars = vars || {};
      _context2(this);
      _bonusValidated && this.split(vars);
    }
    var _proto = SplitText2.prototype;
    _proto.split = function split(vars) {
      this.isSplit && this.revert();
      this.vars = vars = vars || this.vars;
      this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      var i2 = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e2;
      while (--i2 > -1) {
        e2 = this.elements[i2];
        this._originals[i2] = e2.innerHTML;
        origHeight = e2.clientHeight;
        origWidth = e2.clientWidth;
        _split(e2, vars, wordStart, charStart);
        _setPositionsAfterSplit(e2, vars, this.chars, this.words, this.lines, origWidth, origHeight);
      }
      this.chars.reverse();
      this.words.reverse();
      this.lines.reverse();
      this.isSplit = true;
      return this;
    };
    _proto.revert = function revert() {
      var originals = this._originals;
      if (!originals) {
        throw "revert() call wasn't scoped properly.";
      }
      this.elements.forEach(function(e2, i2) {
        return e2.innerHTML = originals[i2];
      });
      this.chars = [];
      this.words = [];
      this.lines = [];
      this.isSplit = false;
      return this;
    };
    SplitText2.create = function create(element, vars) {
      return new SplitText2(element, vars);
    };
    return SplitText2;
  }();
  SplitText.version = "3.12.2";
  SplitText.register = _initCore3;

  // src/modules/animation/text.js
  gsapWithCSS.registerPlugin(SplitText);
  var Text = class extends Observe {
    constructor({ element, anim, params, once = false }) {
      super({
        element,
        config: {
          root: null,
          margin: "0px",
          threshold: 0.5,
          autoStart: false
        },
        addClass: "active"
      });
      this.anim = {
        duration: 1.2,
        ease: "expo.out",
        delay: window.isMobile ? 0 : 0.1,
        stagger: {
          each: 0.05,
          from: "start"
        },
        ...anim
      };
      this.params = {
        in: {
          y: "0%"
        },
        out: {
          y: element.dataset.y || "150%"
        },
        ...params
      };
      this.once = once;
      if (element.dataset.a === "lines")
        this.revertTo = this.element.textContent;
      this.create(element);
      this.setOut();
    }
    create(element) {
      this.element = element;
      this.animated = returnSplit(this.element);
    }
    resize() {
      if (!this.revertTo)
        return;
      this.element.textContent = this.revertTo;
      this.create();
      this.animateIn();
    }
    isIn() {
      this.animateIn();
      if (this.anim.once)
        this.stop();
    }
    isOut() {
      this.setOut();
    }
    animateIn() {
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.in,
        ...this.anim
      });
    }
    animateOut() {
      this.stop();
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.in,
        ...this.anim,
        delay: 0
      });
    }
    setIn() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.in });
    }
    setOut() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.out });
    }
  };
  function returnSplit(element) {
    switch (element.dataset.a) {
      case "char":
        return splitChar(element);
        break;
      case "word":
        return splitWord(element);
        break;
      case "line":
        return splitLine(element);
        break;
      default:
        return splitChar(element);
    }
  }
  function splitChar(el) {
    return new SplitText(splitLine(el), {
      type: "chars"
    }).chars;
  }
  function splitWord(el) {
    return new SplitText(splitLine(el), {
      type: "words"
    }).words;
  }
  function splitLine(el) {
    const split = new SplitText(el, {
      type: "lines"
    });
    split.lines.forEach((line) => wrapEl(line));
    return split.lines;
  }
  function wrapEl(el) {
    const wrapper = document.createElement("div");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  // src/modules/form.js
  var FormHandler = class {
    constructor() {
      this.form = document.querySelector("[data-dom='form']");
      if (this.form) {
        this.initEvents();
      }
    }
    initEvents() {
      const obs = new MutationObserver((mutationsList, observer) => {
        if (window.umami)
          window.umami.track("Signup Success");
        window.app.gl.scene.cube.animateFormSuccess();
      });
      obs.observe(this.form.querySelector("[data-listen='success']"), {
        attributes: true,
        attributeFilter: ["style"]
      });
      const field = this.form.querySelector("[data-validate='email']");
      this.submitBtn = this.form.querySelector("[data-form='submit']");
      this.fields = [...this.form.querySelectorAll("input")].map((el, i2) => {
        el.addEventListener("input", () => {
          this.isValid();
        });
        return el;
      });
    }
    isValid() {
      let valid = true;
      this.fields.forEach((field, i2) => {
        if (field.type === "email") {
          if (validateEmail(field.value) == false) {
            valid = false;
          }
        } else {
          if (!field.checkValidity()) {
            valid = false;
          }
        }
      });
      if (valid) {
        this.submitBtn.classList.remove("lock");
        this.submitBtn.style.pointerEvents = "auto";
      } else {
        this.submitBtn.classList.add("lock");
        this.submitBtn.style.pointerEvents = "none";
      }
    }
  };
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  // src/modules/animation/alpha.js
  var Alpha = class extends Observe {
    constructor({ element, anim, params, once = false }) {
      super({
        element,
        config: {
          root: null,
          margin: "0px",
          threshold: 0.5
        }
      });
      this.anim = {
        duration: 1.2,
        ease: "expo.out",
        delay: 0.1,
        stagger: {
          each: 0.05,
          from: "start"
        },
        ...anim
      };
      this.params = {
        in: {
          autoAlpha: 1
        },
        out: {
          autoAlpha: 0
        },
        ...params
      };
      this.once = once;
      this.element = element;
      this.animated = this.element;
    }
    isIn() {
      this.animateIn();
      if (this.once)
        this.stop();
    }
    isOut() {
      this.setOut();
    }
    animateIn() {
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.in,
        ...this.anim
      });
    }
    animateOut() {
      this.stop();
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.out,
        ...this.anim
      });
    }
    setIn() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.in });
    }
    setOut() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.out });
    }
  };

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/ScrambleTextPlugin.js
  var CharSet = /* @__PURE__ */ function() {
    function CharSet2(chars) {
      this.chars = emojiSafeSplit(chars);
      this.sets = [];
      this.length = 50;
      for (var i2 = 0; i2 < 20; i2++) {
        this.sets[i2] = _scrambleText(80, this.chars);
      }
    }
    var _proto = CharSet2.prototype;
    _proto.grow = function grow(newLength) {
      for (var i2 = 0; i2 < 20; i2++) {
        this.sets[i2] += _scrambleText(newLength - this.length, this.chars);
      }
      this.length = newLength;
    };
    return CharSet2;
  }();
  var gsap3;
  var _coreInitted3;
  var _getGSAP = function _getGSAP2() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _bonusValidated2 = 1;
  var _spacesExp = /\s+/g;
  var _scrambleText = function _scrambleText2(length3, chars) {
    var l = chars.length, s2 = "";
    while (--length3 > -1) {
      s2 += chars[~~(Math.random() * l)];
    }
    return s2;
  };
  var _upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var _lower = _upper.toLowerCase();
  var _charsLookup = {
    upperCase: new CharSet(_upper),
    lowerCase: new CharSet(_lower),
    upperAndLowerCase: new CharSet(_upper + _lower)
  };
  var _initCore5 = function _initCore6() {
    _coreInitted3 = gsap3 = _getGSAP();
  };
  var ScrambleTextPlugin = {
    version: "3.12.2",
    name: "scrambleText",
    register: function register(core, Plugin, propTween) {
      gsap3 = core;
      _initCore5();
    },
    init: function init4(target, value, tween, index, targets) {
      _coreInitted3 || _initCore5();
      this.prop = "innerHTML" in target ? "innerHTML" : "textContent" in target ? "textContent" : 0;
      if (!this.prop) {
        return;
      }
      this.target = target;
      if (typeof value !== "object") {
        value = {
          text: value
        };
      }
      var text = value.text || value.value || "", trim = value.trim !== false, data = this, delim, maxLength, charset, splitByChars;
      data.delimiter = delim = value.delimiter || "";
      data.original = emojiSafeSplit(getText(target).replace(_spacesExp, " ").split("&nbsp;").join(""), delim, trim);
      if (text === "{original}" || text === true || text == null) {
        text = data.original.join(delim);
      }
      data.text = emojiSafeSplit((text || "").replace(_spacesExp, " "), delim, trim);
      data.hasClass = !!(value.newClass || value.oldClass);
      data.newClass = value.newClass;
      data.oldClass = value.oldClass;
      splitByChars = delim === "";
      data.textHasEmoji = splitByChars && !!data.text.emoji;
      data.charsHaveEmoji = !!value.chars && !!emojiSafeSplit(value.chars).emoji;
      data.length = splitByChars ? data.original.length : data.original.join(delim).length;
      data.lengthDif = (splitByChars ? data.text.length : data.text.join(delim).length) - data.length;
      data.fillChar = value.fillChar || value.chars && ~value.chars.indexOf(" ") ? "&nbsp;" : "";
      data.charSet = charset = _charsLookup[value.chars || "upperCase"] || new CharSet(value.chars);
      data.speed = 0.05 / (value.speed || 1);
      data.prevScrambleTime = 0;
      data.setIndex = Math.random() * 20 | 0;
      maxLength = data.length + Math.max(data.lengthDif, 0);
      if (maxLength > charset.length) {
        charset.grow(maxLength);
      }
      data.chars = charset.sets[data.setIndex];
      data.revealDelay = value.revealDelay || 0;
      data.tweenLength = value.tweenLength !== false;
      data.tween = tween;
      data.rightToLeft = !!value.rightToLeft;
      data._props.push("scrambleText", "text");
      return _bonusValidated2;
    },
    render: function render3(ratio, data) {
      var target = data.target, prop = data.prop, text = data.text, delimiter = data.delimiter, tween = data.tween, prevScrambleTime = data.prevScrambleTime, revealDelay = data.revealDelay, setIndex = data.setIndex, chars = data.chars, charSet = data.charSet, length3 = data.length, textHasEmoji = data.textHasEmoji, charsHaveEmoji = data.charsHaveEmoji, lengthDif = data.lengthDif, tweenLength = data.tweenLength, oldClass = data.oldClass, newClass = data.newClass, rightToLeft = data.rightToLeft, fillChar = data.fillChar, speed = data.speed, original = data.original, hasClass = data.hasClass, l = text.length, time = tween._time, timeDif = time - prevScrambleTime, i2, i22, startText, endText, applyNew, applyOld, str, startClass, endClass, position, r2;
      if (revealDelay) {
        if (tween._from) {
          time = tween._dur - time;
        }
        ratio = time === 0 ? 0 : time < revealDelay ? 1e-6 : time === tween._dur ? 1 : tween._ease((time - revealDelay) / (tween._dur - revealDelay));
      }
      if (ratio < 0) {
        ratio = 0;
      } else if (ratio > 1) {
        ratio = 1;
      }
      if (rightToLeft) {
        ratio = 1 - ratio;
      }
      i2 = ~~(ratio * l + 0.5);
      if (ratio) {
        if (timeDif > speed || timeDif < -speed) {
          data.setIndex = setIndex = (setIndex + (Math.random() * 19 | 0)) % 20;
          data.chars = charSet.sets[setIndex];
          data.prevScrambleTime += timeDif;
        }
        endText = chars;
      } else {
        endText = original.join(delimiter);
      }
      r2 = tween._from ? ratio : 1 - ratio;
      position = length3 + (tweenLength ? tween._from ? r2 * r2 * r2 : 1 - r2 * r2 * r2 : 1) * lengthDif;
      if (rightToLeft) {
        if (ratio === 1 && (tween._from || tween.data === "isFromStart")) {
          startText = "";
          endText = original.join(delimiter);
        } else {
          str = text.slice(i2).join(delimiter);
          if (charsHaveEmoji) {
            startText = emojiSafeSplit(endText).slice(0, position - (textHasEmoji ? emojiSafeSplit(str) : str).length + 0.5 | 0).join("");
          } else {
            startText = endText.substr(0, position - (textHasEmoji ? emojiSafeSplit(str) : str).length + 0.5 | 0);
          }
          endText = str;
        }
      } else {
        startText = text.slice(0, i2).join(delimiter);
        i22 = (textHasEmoji ? emojiSafeSplit(startText) : startText).length;
        if (charsHaveEmoji) {
          endText = emojiSafeSplit(endText).slice(i22, position + 0.5 | 0).join("");
        } else {
          endText = endText.substr(i22, position - i22 + 0.5 | 0);
        }
      }
      if (hasClass) {
        startClass = rightToLeft ? oldClass : newClass;
        endClass = rightToLeft ? newClass : oldClass;
        applyNew = startClass && i2 !== 0;
        applyOld = endClass && i2 !== l;
        str = (applyNew ? "<span class='" + startClass + "'>" : "") + startText + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + endClass + "'>" : "") + delimiter + endText + (applyOld ? "</span>" : "");
      } else {
        str = startText + delimiter + endText;
      }
      target[prop] = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
    }
  };
  ScrambleTextPlugin.emojiSafeSplit = emojiSafeSplit;
  ScrambleTextPlugin.getText = getText;
  _getGSAP() && gsap3.registerPlugin(ScrambleTextPlugin);

  // src/modules/animation/scramble.js
  gsapWithCSS.registerPlugin(ScrambleTextPlugin);
  var chars2 = "\u2596\u2597 \u2598 \u2599 \u259A \u259B \u259C \u259D \u259E \u259F";
  var Scramble = class extends Alpha {
    constructor({ element }) {
      super({ element });
      this.text = this.element.textContent;
    }
    animateIn() {
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.in,
        ...this.anim
      });
      if (this.scAnimation)
        this.scAnimation.kill();
      this.scAnimation = gsapWithCSS.to(this.animated, {
        duration: 0.6 + Math.random() * 0.3,
        delay: 0,
        scrambleText: {
          chars: chars2,
          revealDelay: 0.3,
          text: this.text,
          speed: 1,
          delimiter: "",
          rightToLeft: false
        }
      });
    }
    //   animateOut() {
    //     this.stop();
    //     if (this.animation) this.animation.kill();
    //     this.animation = gsap.to(this.animated, {
    //       ...this.params.out,
    //       ...this.anim,
    //     });
    //   }
    //   setIn() {
    //     if (this.animation) this.animation.kill();
    //     gsap.set(this.animated, { ...this.params.in });
    //   }
    setOut() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.out });
    }
  };

  // src/modules/animation/scale.js
  var Scale = class extends Alpha {
    constructor({ element }) {
      super({ element });
      this.anim = {
        duration: 1.2 + Math.random() * 0.2,
        ease: "expo.out",
        delay: 0.1,
        transformOrigin: this.element.dataset.origin || "right center",
        stagger: {
          each: 0.05,
          from: "start"
        }
      };
      this.params = getDirection(this.element.dataset.a);
    }
    animateIn() {
      if (this.animation)
        this.animation.kill();
      this.animation = gsapWithCSS.to(this.animated, {
        ...this.params.in,
        ...this.anim
      });
    }
    setOut() {
      if (this.animation)
        this.animation.kill();
      gsapWithCSS.set(this.animated, { ...this.params.out });
    }
  };
  function getDirection(data) {
    switch (data) {
      case "sx":
        return {
          in: {
            scaleX: 1,
            scaleY: 1
          },
          out: {
            scaleX: 0,
            scaleY: 1
          }
        };
      case "sy":
        return {
          in: {
            scaleX: 1,
            scaleY: 1
          },
          out: {
            scaleX: 1,
            scaleY: 0
          }
        };
      case "s":
        return {
          in: {
            scaleX: 1,
            scaleY: 1
          },
          out: {
            scaleX: 0,
            scaleY: 0
          }
        };
      default:
        return 0;
    }
  }

  // src/modules/dom.js
  var Dom = class {
    constructor() {
      this.hidden = document.querySelector("[data-start='hidden']");
      this.create();
    }
    resize() {
    }
    render(t2) {
    }
    prep() {
      document.querySelectorAll("[data-ca]").forEach((el) => {
        el.setAttribute("data-a", el.getAttribute("data-ca"));
        el.removeAttribute("data-ca");
      });
    }
    create() {
      this.prep();
      this.texts = [
        ...document.querySelectorAll(
          '[data-a="char"],[data-a="word"],[data-a="line"]'
        )
      ].map((el) => new Text({ element: el }));
      this.alphas = [...document.querySelectorAll('[data-a="alpha"]')].map(
        (el) => new Alpha({ element: el })
      );
      this.scrambles = [...document.querySelectorAll('[data-a="scramble"]')].map(
        (el) => new Scramble({ element: el })
      );
      this.scales = [
        ...document.querySelectorAll('[data-a="s"],[data-a="sx"],[data-a="sy"]')
      ].map((el) => new Scale({ element: el }));
      this.form = new FormHandler();
      this.start();
    }
    start() {
      gsapWithCSS.to(this.hidden, {
        autoAlpha: 1,
        duration: 1,
        delay: 0.2
      });
      this.texts?.forEach((text) => text.start());
      this.alphas?.forEach((alpha) => alpha.start());
      this.scrambles?.forEach((scramble) => scramble.start());
      this.scales?.forEach((scale5) => scale5.start());
    }
    destroy() {
      this.texts.forEach((text) => text.animateOut());
    }
    /* --  Pages */
    transitionOut(page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 100);
      });
    }
    transitionIn(page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 100);
      });
    }
  };

  // src/modules/viewport.js
  var Viewport = class {
    constructor() {
      this.resize();
    }
    resize() {
      document.documentElement.style.setProperty(
        "--100vh",
        `${window.innerHeight}px`
      );
    }
  };

  // node_modules/.pnpm/@studio-freight+lenis@1.0.26/node_modules/@studio-freight/lenis/dist/lenis.modern.mjs
  function t() {
    return t = Object.assign ? Object.assign.bind() : function(t2) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var e2 = arguments[i2];
        for (var s2 in e2)
          Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
      }
      return t2;
    }, t.apply(this, arguments);
  }
  function i(t2, i2, e2) {
    return Math.max(t2, Math.min(i2, e2));
  }
  var e = class {
    advance(t2) {
      var e2;
      if (!this.isRunning)
        return;
      let s2 = false;
      if (this.lerp)
        this.value = (o2 = this.value, n2 = this.to, (1 - (r2 = 1 - Math.exp(-60 * this.lerp * t2))) * o2 + r2 * n2), Math.round(this.value) === this.to && (this.value = this.to, s2 = true);
      else {
        this.currentTime += t2;
        const e3 = i(0, this.currentTime / this.duration, 1);
        s2 = e3 >= 1;
        const o3 = s2 ? 1 : this.easing(e3);
        this.value = this.from + (this.to - this.from) * o3;
      }
      var o2, n2, r2;
      null == (e2 = this.onUpdate) || e2.call(this, this.value, s2), s2 && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t2, i2, { lerp: e2 = 0.1, duration: s2 = 1, easing: o2 = (t3) => t3, onStart: n2, onUpdate: r2 }) {
      this.from = this.value = t2, this.to = i2, this.lerp = e2, this.duration = s2, this.easing = o2, this.currentTime = 0, this.isRunning = true, null == n2 || n2(), this.onUpdate = r2;
    }
  };
  var s = class {
    constructor({ wrapper: t2, content: i2, autoResize: e2 = true } = {}) {
      if (this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }, this.onWrapperResize = () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      }, this.onContentResize = () => {
        this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth;
      }, this.wrapper = t2, this.content = i2, e2) {
        const t3 = function(t4, i3) {
          let e3;
          return function() {
            let i4 = arguments, s2 = this;
            clearTimeout(e3), e3 = setTimeout(function() {
              t4.apply(s2, i4);
            }, 250);
          };
        }(this.resize);
        this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t3), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(t3), this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      var t2, i2;
      null == (t2 = this.wrapperResizeObserver) || t2.disconnect(), null == (i2 = this.contentResizeObserver) || i2.disconnect();
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var o = class {
    constructor() {
      this.events = {};
    }
    emit(t2, ...i2) {
      let e2 = this.events[t2] || [];
      for (let t3 = 0, s2 = e2.length; t3 < s2; t3++)
        e2[t3](...i2);
    }
    on(t2, i2) {
      var e2;
      return (null == (e2 = this.events[t2]) ? void 0 : e2.push(i2)) || (this.events[t2] = [i2]), () => {
        var e3;
        this.events[t2] = null == (e3 = this.events[t2]) ? void 0 : e3.filter((t3) => i2 !== t3);
      };
    }
    off(t2, i2) {
      var e2;
      this.events[t2] = null == (e2 = this.events[t2]) ? void 0 : e2.filter((t3) => i2 !== t3);
    }
    destroy() {
      this.events = {};
    }
  };
  var n = class {
    constructor(t2, { wheelMultiplier: e2 = 1, touchMultiplier: s2 = 2, normalizeWheel: n2 = false }) {
      this.onTouchStart = (t3) => {
        const { clientX: i2, clientY: e3 } = t3.targetTouches ? t3.targetTouches[0] : t3;
        this.touchStart.x = i2, this.touchStart.y = e3, this.lastDelta = { x: 0, y: 0 };
      }, this.onTouchMove = (t3) => {
        const { clientX: i2, clientY: e3 } = t3.targetTouches ? t3.targetTouches[0] : t3, s3 = -(i2 - this.touchStart.x) * this.touchMultiplier, o2 = -(e3 - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = i2, this.touchStart.y = e3, this.lastDelta = { x: s3, y: o2 }, this.emitter.emit("scroll", { deltaX: s3, deltaY: o2, event: t3 });
      }, this.onTouchEnd = (t3) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t3 });
      }, this.onWheel = (t3) => {
        let { deltaX: e3, deltaY: s3 } = t3;
        this.normalizeWheel && (e3 = i(-100, e3, 100), s3 = i(-100, s3, 100)), e3 *= this.wheelMultiplier, s3 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: e3, deltaY: s3, event: t3 });
      }, this.element = t2, this.wheelMultiplier = e2, this.touchMultiplier = s2, this.normalizeWheel = n2, this.touchStart = { x: null, y: null }, this.emitter = new o(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t2, i2) {
      return this.emitter.on(t2, i2);
    }
    destroy() {
      this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
  };
  var r = class {
    constructor({ wrapper: i2 = window, content: r2 = document.documentElement, wheelEventsTarget: l = i2, eventsTarget: h = l, smoothWheel: a = true, smoothTouch: c = false, syncTouch: u = false, syncTouchLerp: p = 0.1, __iosNoInertiaSyncTouchLerp: d = 0.4, touchInertiaMultiplier: m = 35, duration: v, easing: g = (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)), lerp: S = !v && 0.1, infinite: w = false, orientation: f = "vertical", gestureOrientation: y = "vertical", touchMultiplier: T = 1, wheelMultiplier: z = 1, normalizeWheel: M = false, autoResize: b = true } = {}) {
      this.onVirtualScroll = ({ deltaX: i3, deltaY: e2, event: s2 }) => {
        if (s2.ctrlKey)
          return;
        const o2 = s2.type.includes("touch"), n2 = s2.type.includes("wheel");
        if ("both" === this.options.gestureOrientation && 0 === i3 && 0 === e2 || "vertical" === this.options.gestureOrientation && 0 === e2 || "horizontal" === this.options.gestureOrientation && 0 === i3 || o2 && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && e2 <= 0)
          return;
        let r3 = s2.composedPath();
        if (r3 = r3.slice(0, r3.indexOf(this.rootElement)), r3.find((t2) => {
          var i4;
          return (null == t2.hasAttribute ? void 0 : t2.hasAttribute("data-lenis-prevent")) || o2 && (null == t2.hasAttribute ? void 0 : t2.hasAttribute("data-lenis-prevent-touch")) || n2 && (null == t2.hasAttribute ? void 0 : t2.hasAttribute("data-lenis-prevent-wheel")) || (null == (i4 = t2.classList) ? void 0 : i4.contains("lenis"));
        }))
          return;
        if (this.isStopped || this.isLocked)
          return void s2.preventDefault();
        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && o2 || this.options.smoothWheel && n2, !this.isSmooth)
          return this.isScrolling = false, void this.animate.stop();
        s2.preventDefault();
        let l2 = e2;
        "both" === this.options.gestureOrientation ? l2 = Math.abs(e2) > Math.abs(i3) ? e2 : i3 : "horizontal" === this.options.gestureOrientation && (l2 = i3);
        const h2 = o2 && this.options.syncTouch, a2 = o2 && "touchend" === s2.type && Math.abs(l2) > 1;
        a2 && (l2 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + l2, t({ programmatic: false }, h2 && { lerp: a2 ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp }));
      }, this.onScroll = () => {
        if (!this.isScrolling) {
          const t2 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t2), this.emit();
        }
      }, window.lenisVersion = "1.0.26", i2 !== document.documentElement && i2 !== document.body || (i2 = window), this.options = { wrapper: i2, content: r2, wheelEventsTarget: l, eventsTarget: h, smoothWheel: a, smoothTouch: c, syncTouch: u, syncTouchLerp: p, __iosNoInertiaSyncTouchLerp: d, touchInertiaMultiplier: m, duration: v, easing: g, lerp: S, infinite: w, gestureOrientation: y, orientation: f, touchMultiplier: T, wheelMultiplier: z, normalizeWheel: M, autoResize: b }, this.animate = new e(), this.emitter = new o(), this.dimensions = new s({ wrapper: i2, content: r2, autoResize: b }), this.toggleClass("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = u || a || c, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onScroll, { passive: false }), this.virtualScroll = new n(h, { touchMultiplier: T, wheelMultiplier: z, normalizeWheel: M }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, { passive: false }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", false), this.toggleClass("lenis-smooth", false), this.toggleClass("lenis-scrolling", false), this.toggleClass("lenis-stopped", false);
    }
    on(t2, i2) {
      return this.emitter.on(t2, i2);
    }
    off(t2, i2) {
      return this.emitter.off(t2, i2);
    }
    setScroll(t2) {
      this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped = false, this.reset();
    }
    stop() {
      this.isStopped = true, this.animate.stop(), this.reset();
    }
    raf(t2) {
      const i2 = t2 - (this.time || t2);
      this.time = t2, this.animate.advance(1e-3 * i2);
    }
    scrollTo(t2, { offset: e2 = 0, immediate: s2 = false, lock: o2 = false, duration: n2 = this.options.duration, easing: r2 = this.options.easing, lerp: l = !n2 && this.options.lerp, onComplete: h = null, force: a = false, programmatic: c = true } = {}) {
      if (!this.isStopped && !this.isLocked || a) {
        if (["top", "left", "start"].includes(t2))
          t2 = 0;
        else if (["bottom", "right", "end"].includes(t2))
          t2 = this.limit;
        else {
          var u;
          let i2;
          if ("string" == typeof t2 ? i2 = document.querySelector(t2) : null != (u = t2) && u.nodeType && (i2 = t2), i2) {
            if (this.options.wrapper !== window) {
              const t3 = this.options.wrapper.getBoundingClientRect();
              e2 -= this.isHorizontal ? t3.left : t3.top;
            }
            const s3 = i2.getBoundingClientRect();
            t2 = (this.isHorizontal ? s3.left : s3.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t2) {
          if (t2 += e2, t2 = Math.round(t2), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t2 = i(0, t2, this.limit), s2)
            return this.animatedScroll = this.targetScroll = t2, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
          if (!c) {
            if (t2 === this.targetScroll)
              return;
            this.targetScroll = t2;
          }
          this.animate.fromTo(this.animatedScroll, t2, { duration: n2, easing: r2, lerp: l, onStart: () => {
            o2 && (this.isLocked = true), this.isScrolling = true;
          }, onUpdate: (t3, i2) => {
            this.isScrolling = true, this.velocity = t3 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t3, this.setScroll(this.scroll), c && (this.targetScroll = t3), i2 || this.emit(), i2 && requestAnimationFrame(() => {
              this.reset(), this.emit(), null == h || h(this);
            });
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? this.options.content : this.options.wrapper;
    }
    get limit() {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (this.animatedScroll % (t2 = this.limit) + t2) % t2 : this.animatedScroll;
      var t2;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t2) {
      this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClass("lenis-smooth", t2));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t2) {
      this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClass("lenis-scrolling", t2));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t2) {
      this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClass("lenis-stopped", t2));
    }
    get className() {
      let t2 = "lenis";
      return this.isStopped && (t2 += " lenis-stopped"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
    }
    toggleClass(t2, i2) {
      this.rootElement.classList.toggle(t2, i2), this.emitter.emit("className change", this);
    }
  };

  // src/util/easings.js
  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  // src/util/math.js
  function lerp(v0, v1, t2) {
    return v0 * (1 - t2) + v1 * t2;
  }

  // src/modules/scroll.js
  var lenisBase = (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2));
  var Scroll = class extends r {
    a = {
      lp: 0
    };
    constructor() {
      super({
        duration: 1.2,
        smoothWheel: true,
        easing: lenisBase,
        orientation: "vertical",
        smoothTouch: false,
        touchMultiplier: 2
      });
      this.isActive = true;
      this.callbacks = [];
      this.init();
      window.sscroll = this;
    }
    init() {
      this.y = window.scrollY;
      this.max = window.innerHeight;
      this.speed = 0;
      this.percent = this.y / (document.body.scrollHeight - window.innerHeight);
      this.on("scroll", ({ scroll, limit, velocity, progress }) => {
        this.y = scroll || 0;
        this.max = limit || window.innerHeight;
        this.speed = velocity || 0;
        this.percent = progress || 0;
        this.callbackRaf();
      });
    }
    to(target) {
      this.scrollTo(target, {
        offset: 0,
        duration: 0.8,
        easing: easeOutExpo,
        immediate: false
      });
    }
    resize() {
    }
    render(t2) {
      if (!this.isActive)
        return;
      this.a.lp = lerp(this.a.lp, this.percent, 0.1);
      this.raf(t2);
    }
    set active(value) {
      this.isActive = value;
    }
    callbackRaf() {
      this.callbacks.forEach((cb) => cb());
    }
    subscribe(callback) {
      this.callbacks.push(callback);
    }
    unsubscribe(callback) {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    }
    unsunbscribeAll() {
      this.callbacks = [];
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/Vec3Func.js
  function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  function distance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  function squaredDistance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  function squaredLength(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return x * x + y * y + z * z;
  }
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
  }
  function normalize3(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2];
    let bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  function lerp2(out, a, b, t2) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    out[0] = ax + t2 * (b[0] - ax);
    out[1] = ay + t2 * (b[1] - ay);
    out[2] = az + t2 * (b[2] - az);
    return out;
  }
  function transformMat4(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  function scaleRotateMat4(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
    return out;
  }
  function transformMat3(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  function transformQuat(out, a, q) {
    let x = a[0], y = a[1], z = a[2];
    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  var angle = function() {
    const tempA = [0, 0, 0];
    const tempB = [0, 0, 0];
    return function(a, b) {
      copy(tempA, a);
      copy(tempB, b);
      normalize3(tempA, tempA);
      normalize3(tempB, tempB);
      let cosine = dot(tempA, tempB);
      if (cosine > 1) {
        return 0;
      } else if (cosine < -1) {
        return Math.PI;
      } else {
        return Math.acos(cosine);
      }
    };
  }();
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Vec3.js
  var Vec3 = class _Vec3 extends Array {
    constructor(x = 0, y = x, z = x) {
      super(x, y, z);
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(v) {
      this[0] = v;
    }
    set y(v) {
      this[1] = v;
    }
    set z(v) {
      this[2] = v;
    }
    set(x, y = x, z = x) {
      if (x.length)
        return this.copy(x);
      set(this, x, y, z);
      return this;
    }
    copy(v) {
      copy(this, v);
      return this;
    }
    add(va, vb) {
      if (vb)
        add(this, va, vb);
      else
        add(this, this, va);
      return this;
    }
    sub(va, vb) {
      if (vb)
        subtract(this, va, vb);
      else
        subtract(this, this, va);
      return this;
    }
    multiply(v) {
      if (v.length)
        multiply(this, this, v);
      else
        scale(this, this, v);
      return this;
    }
    divide(v) {
      if (v.length)
        divide(this, this, v);
      else
        scale(this, this, 1 / v);
      return this;
    }
    inverse(v = this) {
      inverse(this, v);
      return this;
    }
    // Can't use 'length' as Array.prototype uses it
    len() {
      return length(this);
    }
    distance(v) {
      if (v)
        return distance(this, v);
      else
        return length(this);
    }
    squaredLen() {
      return squaredLength(this);
    }
    squaredDistance(v) {
      if (v)
        return squaredDistance(this, v);
      else
        return squaredLength(this);
    }
    negate(v = this) {
      negate(this, v);
      return this;
    }
    cross(va, vb) {
      if (vb)
        cross(this, va, vb);
      else
        cross(this, this, va);
      return this;
    }
    scale(v) {
      scale(this, this, v);
      return this;
    }
    normalize() {
      normalize3(this, this);
      return this;
    }
    dot(v) {
      return dot(this, v);
    }
    equals(v) {
      return exactEquals(this, v);
    }
    applyMatrix3(mat3) {
      transformMat3(this, this, mat3);
      return this;
    }
    applyMatrix4(mat4) {
      transformMat4(this, this, mat4);
      return this;
    }
    scaleRotateMatrix4(mat4) {
      scaleRotateMat4(this, this, mat4);
      return this;
    }
    applyQuaternion(q) {
      transformQuat(this, this, q);
      return this;
    }
    angle(v) {
      return angle(this, v);
    }
    lerp(v, t2) {
      lerp2(this, this, v, t2);
      return this;
    }
    clone() {
      return new _Vec3(this[0], this[1], this[2]);
    }
    fromArray(a, o2 = 0) {
      this[0] = a[o2];
      this[1] = a[o2 + 1];
      this[2] = a[o2 + 2];
      return this;
    }
    toArray(a = [], o2 = 0) {
      a[o2] = this[0];
      a[o2 + 1] = this[1];
      a[o2 + 2] = this[2];
      return a;
    }
    transformDirection(mat4) {
      const x = this[0];
      const y = this[1];
      const z = this[2];
      this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
      this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
      this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
      return this.normalize();
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Geometry.js
  var tempVec3 = new Vec3();
  var ID = 1;
  var ATTR_ID = 1;
  var isBoundsWarned = false;
  var Geometry = class {
    constructor(gl, attributes = {}) {
      if (!gl.canvas)
        console.error("gl not passed as first argument to Geometry");
      this.gl = gl;
      this.attributes = attributes;
      this.id = ID++;
      this.VAOs = {};
      this.drawRange = { start: 0, count: 0 };
      this.instancedCount = 0;
      this.gl.renderer.bindVertexArray(null);
      this.gl.renderer.currentGeometry = null;
      this.glState = this.gl.renderer.state;
      for (let key in attributes) {
        this.addAttribute(key, attributes[key]);
      }
    }
    addAttribute(key, attr) {
      this.attributes[key] = attr;
      attr.id = ATTR_ID++;
      attr.size = attr.size || 1;
      attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT);
      attr.target = key === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
      attr.normalized = attr.normalized || false;
      attr.stride = attr.stride || 0;
      attr.offset = attr.offset || 0;
      attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
      attr.divisor = attr.instanced || 0;
      attr.needsUpdate = false;
      attr.usage = attr.usage || this.gl.STATIC_DRAW;
      if (!attr.buffer) {
        this.updateAttribute(attr);
      }
      if (attr.divisor) {
        this.isInstanced = true;
        if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
          console.warn("geometry has multiple instanced buffers of different length");
          return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
        }
        this.instancedCount = attr.count * attr.divisor;
      } else if (key === "index") {
        this.drawRange.count = attr.count;
      } else if (!this.attributes.index) {
        this.drawRange.count = Math.max(this.drawRange.count, attr.count);
      }
    }
    updateAttribute(attr) {
      const isNewBuffer = !attr.buffer;
      if (isNewBuffer)
        attr.buffer = this.gl.createBuffer();
      if (this.glState.boundBuffer !== attr.buffer) {
        this.gl.bindBuffer(attr.target, attr.buffer);
        this.glState.boundBuffer = attr.buffer;
      }
      if (isNewBuffer) {
        this.gl.bufferData(attr.target, attr.data, attr.usage);
      } else {
        this.gl.bufferSubData(attr.target, 0, attr.data);
      }
      attr.needsUpdate = false;
    }
    setIndex(value) {
      this.addAttribute("index", value);
    }
    setDrawRange(start, count) {
      this.drawRange.start = start;
      this.drawRange.count = count;
    }
    setInstancedCount(value) {
      this.instancedCount = value;
    }
    createVAO(program) {
      this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.bindAttributes(program);
    }
    bindAttributes(program) {
      program.attributeLocations.forEach((location, { name, type }) => {
        if (!this.attributes[name]) {
          console.warn(`active attribute ${name} not being supplied`);
          return;
        }
        const attr = this.attributes[name];
        this.gl.bindBuffer(attr.target, attr.buffer);
        this.glState.boundBuffer = attr.buffer;
        let numLoc = 1;
        if (type === 35674)
          numLoc = 2;
        if (type === 35675)
          numLoc = 3;
        if (type === 35676)
          numLoc = 4;
        const size = attr.size / numLoc;
        const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
        const offset = numLoc === 1 ? 0 : numLoc * 4;
        for (let i2 = 0; i2 < numLoc; i2++) {
          this.gl.vertexAttribPointer(location + i2, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i2 * offset);
          this.gl.enableVertexAttribArray(location + i2);
          this.gl.renderer.vertexAttribDivisor(location + i2, attr.divisor);
        }
      });
      if (this.attributes.index)
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
    }
    draw({ program, mode = this.gl.TRIANGLES }) {
      if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
        if (!this.VAOs[program.attributeOrder])
          this.createVAO(program);
        this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
        this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
      }
      program.attributeLocations.forEach((location, { name }) => {
        const attr = this.attributes[name];
        if (attr.needsUpdate)
          this.updateAttribute(attr);
      });
      let indexBytesPerElement = 2;
      if (this.attributes.index?.type === this.gl.UNSIGNED_INT)
        indexBytesPerElement = 4;
      if (this.isInstanced) {
        if (this.attributes.index) {
          this.gl.renderer.drawElementsInstanced(
            mode,
            this.drawRange.count,
            this.attributes.index.type,
            this.attributes.index.offset + this.drawRange.start * indexBytesPerElement,
            this.instancedCount
          );
        } else {
          this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
        }
      } else {
        if (this.attributes.index) {
          this.gl.drawElements(
            mode,
            this.drawRange.count,
            this.attributes.index.type,
            this.attributes.index.offset + this.drawRange.start * indexBytesPerElement
          );
        } else {
          this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
        }
      }
    }
    getPosition() {
      const attr = this.attributes.position;
      if (attr.data)
        return attr;
      if (isBoundsWarned)
        return;
      console.warn("No position buffer data found to compute bounds");
      return isBoundsWarned = true;
    }
    computeBoundingBox(attr) {
      if (!attr)
        attr = this.getPosition();
      const array = attr.data;
      const stride = attr.size;
      if (!this.bounds) {
        this.bounds = {
          min: new Vec3(),
          max: new Vec3(),
          center: new Vec3(),
          scale: new Vec3(),
          radius: Infinity
        };
      }
      const min = this.bounds.min;
      const max = this.bounds.max;
      const center = this.bounds.center;
      const scale5 = this.bounds.scale;
      min.set(Infinity);
      max.set(-Infinity);
      for (let i2 = 0, l = array.length; i2 < l; i2 += stride) {
        const x = array[i2];
        const y = array[i2 + 1];
        const z = array[i2 + 2];
        min.x = Math.min(x, min.x);
        min.y = Math.min(y, min.y);
        min.z = Math.min(z, min.z);
        max.x = Math.max(x, max.x);
        max.y = Math.max(y, max.y);
        max.z = Math.max(z, max.z);
      }
      scale5.sub(max, min);
      center.add(min, max).divide(2);
    }
    computeBoundingSphere(attr) {
      if (!attr)
        attr = this.getPosition();
      const array = attr.data;
      const stride = attr.size;
      if (!this.bounds)
        this.computeBoundingBox(attr);
      let maxRadiusSq = 0;
      for (let i2 = 0, l = array.length; i2 < l; i2 += stride) {
        tempVec3.fromArray(array, i2);
        maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
      }
      this.bounds.radius = Math.sqrt(maxRadiusSq);
    }
    remove() {
      for (let key in this.VAOs) {
        this.gl.renderer.deleteVertexArray(this.VAOs[key]);
        delete this.VAOs[key];
      }
      for (let key in this.attributes) {
        this.gl.deleteBuffer(this.attributes[key].buffer);
        delete this.attributes[key];
      }
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Program.js
  var ID2 = 1;
  var arrayCacheF32 = {};
  var Program = class {
    constructor(gl, {
      vertex: vertex2,
      fragment: fragment2,
      uniforms = {},
      transparent = false,
      cullFace = gl.BACK,
      frontFace = gl.CCW,
      depthTest = true,
      depthWrite = true,
      depthFunc = gl.LESS
    } = {}) {
      if (!gl.canvas)
        console.error("gl not passed as first argument to Program");
      this.gl = gl;
      this.uniforms = uniforms;
      this.id = ID2++;
      if (!vertex2)
        console.warn("vertex shader not supplied");
      if (!fragment2)
        console.warn("fragment shader not supplied");
      this.transparent = transparent;
      this.cullFace = cullFace;
      this.frontFace = frontFace;
      this.depthTest = depthTest;
      this.depthWrite = depthWrite;
      this.depthFunc = depthFunc;
      this.blendFunc = {};
      this.blendEquation = {};
      if (this.transparent && !this.blendFunc.src) {
        if (this.gl.renderer.premultipliedAlpha)
          this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        else
          this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      }
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertex2);
      gl.compileShader(vertexShader);
      if (gl.getShaderInfoLog(vertexShader) !== "") {
        console.warn(`${gl.getShaderInfoLog(vertexShader)}
Vertex Shader
${addLineNumbers(vertex2)}`);
      }
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragment2);
      gl.compileShader(fragmentShader);
      if (gl.getShaderInfoLog(fragmentShader) !== "") {
        console.warn(`${gl.getShaderInfoLog(fragmentShader)}
Fragment Shader
${addLineNumbers(fragment2)}`);
      }
      this.program = gl.createProgram();
      gl.attachShader(this.program, vertexShader);
      gl.attachShader(this.program, fragmentShader);
      gl.linkProgram(this.program);
      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        return console.warn(gl.getProgramInfoLog(this.program));
      }
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      this.uniformLocations = /* @__PURE__ */ new Map();
      let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
      for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
        let uniform = gl.getActiveUniform(this.program, uIndex);
        this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));
        const split = uniform.name.match(/(\w+)/g);
        uniform.uniformName = split[0];
        uniform.nameComponents = split.slice(1);
      }
      this.attributeLocations = /* @__PURE__ */ new Map();
      const locations = [];
      const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
      for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
        const attribute = gl.getActiveAttrib(this.program, aIndex);
        const location = gl.getAttribLocation(this.program, attribute.name);
        if (location === -1)
          continue;
        locations[location] = attribute.name;
        this.attributeLocations.set(attribute, location);
      }
      this.attributeOrder = locations.join("");
    }
    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
      this.blendFunc.src = src;
      this.blendFunc.dst = dst;
      this.blendFunc.srcAlpha = srcAlpha;
      this.blendFunc.dstAlpha = dstAlpha;
      if (src)
        this.transparent = true;
    }
    setBlendEquation(modeRGB, modeAlpha) {
      this.blendEquation.modeRGB = modeRGB;
      this.blendEquation.modeAlpha = modeAlpha;
    }
    applyState() {
      if (this.depthTest)
        this.gl.renderer.enable(this.gl.DEPTH_TEST);
      else
        this.gl.renderer.disable(this.gl.DEPTH_TEST);
      if (this.cullFace)
        this.gl.renderer.enable(this.gl.CULL_FACE);
      else
        this.gl.renderer.disable(this.gl.CULL_FACE);
      if (this.blendFunc.src)
        this.gl.renderer.enable(this.gl.BLEND);
      else
        this.gl.renderer.disable(this.gl.BLEND);
      if (this.cullFace)
        this.gl.renderer.setCullFace(this.cullFace);
      this.gl.renderer.setFrontFace(this.frontFace);
      this.gl.renderer.setDepthMask(this.depthWrite);
      this.gl.renderer.setDepthFunc(this.depthFunc);
      if (this.blendFunc.src)
        this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
      this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }
    use({ flipFaces = false } = {}) {
      let textureUnit = -1;
      const programActive = this.gl.renderer.state.currentProgram === this.id;
      if (!programActive) {
        this.gl.useProgram(this.program);
        this.gl.renderer.state.currentProgram = this.id;
      }
      this.uniformLocations.forEach((location, activeUniform) => {
        let uniform = this.uniforms[activeUniform.uniformName];
        for (const component of activeUniform.nameComponents) {
          if (!uniform)
            break;
          if (component in uniform) {
            uniform = uniform[component];
          } else if (Array.isArray(uniform.value)) {
            break;
          } else {
            uniform = void 0;
            break;
          }
        }
        if (!uniform) {
          return warn(`Active uniform ${activeUniform.name} has not been supplied`);
        }
        if (uniform && uniform.value === void 0) {
          return warn(`${activeUniform.name} uniform is missing a value parameter`);
        }
        if (uniform.value.texture) {
          textureUnit = textureUnit + 1;
          uniform.value.update(textureUnit);
          return setUniform(this.gl, activeUniform.type, location, textureUnit);
        }
        if (uniform.value.length && uniform.value[0].texture) {
          const textureUnits = [];
          uniform.value.forEach((value) => {
            textureUnit = textureUnit + 1;
            value.update(textureUnit);
            textureUnits.push(textureUnit);
          });
          return setUniform(this.gl, activeUniform.type, location, textureUnits);
        }
        setUniform(this.gl, activeUniform.type, location, uniform.value);
      });
      this.applyState();
      if (flipFaces)
        this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
    }
    remove() {
      this.gl.deleteProgram(this.program);
    }
  };
  function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = gl.renderer.state.uniformLocations.get(location);
    if (value.length) {
      if (setValue === void 0 || setValue.length !== value.length) {
        gl.renderer.state.uniformLocations.set(location, value.slice(0));
      } else {
        if (arraysEqual(setValue, value))
          return;
        setValue.set ? setValue.set(value) : setArray(setValue, value);
        gl.renderer.state.uniformLocations.set(location, setValue);
      }
    } else {
      if (setValue === value)
        return;
      gl.renderer.state.uniformLocations.set(location, value);
    }
    switch (type) {
      case 5126:
        return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
      case 35664:
        return gl.uniform2fv(location, value);
      case 35665:
        return gl.uniform3fv(location, value);
      case 35666:
        return gl.uniform4fv(location, value);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
      case 35671:
      case 35667:
        return gl.uniform2iv(location, value);
      case 35672:
      case 35668:
        return gl.uniform3iv(location, value);
      case 35673:
      case 35669:
        return gl.uniform4iv(location, value);
      case 35674:
        return gl.uniformMatrix2fv(location, false, value);
      case 35675:
        return gl.uniformMatrix3fv(location, false, value);
      case 35676:
        return gl.uniformMatrix4fv(location, false, value);
    }
  }
  function addLineNumbers(string) {
    let lines = string.split("\n");
    for (let i2 = 0; i2 < lines.length; i2++) {
      lines[i2] = i2 + 1 + ": " + lines[i2];
    }
    return lines.join("\n");
  }
  function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === void 0)
      return a;
    const length3 = arrayLen * valueLen;
    let value = arrayCacheF32[length3];
    if (!value)
      arrayCacheF32[length3] = value = new Float32Array(length3);
    for (let i2 = 0; i2 < arrayLen; i2++)
      value.set(a[i2], i2 * valueLen);
    return value;
  }
  function arraysEqual(a, b) {
    if (a.length !== b.length)
      return false;
    for (let i2 = 0, l = a.length; i2 < l; i2++) {
      if (a[i2] !== b[i2])
        return false;
    }
    return true;
  }
  function setArray(a, b) {
    for (let i2 = 0, l = a.length; i2 < l; i2++) {
      a[i2] = b[i2];
    }
  }
  var warnCount = 0;
  function warn(message) {
    if (warnCount > 100)
      return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100)
      console.warn("More than 100 program warnings - stopping logs.");
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Renderer.js
  var tempVec32 = new Vec3();
  var ID3 = 1;
  var Renderer = class {
    constructor({
      canvas = document.createElement("canvas"),
      width = 300,
      height = 150,
      dpr = 1,
      alpha = false,
      depth = true,
      stencil = false,
      antialias = false,
      premultipliedAlpha = false,
      preserveDrawingBuffer = false,
      powerPreference = "default",
      autoClear = true,
      webgl = 2
    } = {}) {
      const attributes = { alpha, depth, stencil, antialias, premultipliedAlpha, preserveDrawingBuffer, powerPreference };
      this.dpr = dpr;
      this.alpha = alpha;
      this.color = true;
      this.depth = depth;
      this.stencil = stencil;
      this.premultipliedAlpha = premultipliedAlpha;
      this.autoClear = autoClear;
      this.id = ID3++;
      if (webgl === 2)
        this.gl = canvas.getContext("webgl2", attributes);
      this.isWebgl2 = !!this.gl;
      if (!this.gl)
        this.gl = canvas.getContext("webgl", attributes);
      if (!this.gl)
        console.error("unable to create webgl context");
      this.gl.renderer = this;
      this.setSize(width, height);
      this.state = {};
      this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
      this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
      this.state.cullFace = null;
      this.state.frontFace = this.gl.CCW;
      this.state.depthMask = true;
      this.state.depthFunc = this.gl.LESS;
      this.state.premultiplyAlpha = false;
      this.state.flipY = false;
      this.state.unpackAlignment = 4;
      this.state.framebuffer = null;
      this.state.viewport = { x: 0, y: 0, width: null, height: null };
      this.state.textureUnits = [];
      this.state.activeTextureUnit = 0;
      this.state.boundBuffer = null;
      this.state.uniformLocations = /* @__PURE__ */ new Map();
      this.state.currentProgram = null;
      this.extensions = {};
      if (this.isWebgl2) {
        this.getExtension("EXT_color_buffer_float");
        this.getExtension("OES_texture_float_linear");
      } else {
        this.getExtension("OES_texture_float");
        this.getExtension("OES_texture_float_linear");
        this.getExtension("OES_texture_half_float");
        this.getExtension("OES_texture_half_float_linear");
        this.getExtension("OES_element_index_uint");
        this.getExtension("OES_standard_derivatives");
        this.getExtension("EXT_sRGB");
        this.getExtension("WEBGL_depth_texture");
        this.getExtension("WEBGL_draw_buffers");
      }
      this.getExtension("WEBGL_compressed_texture_astc");
      this.getExtension("EXT_texture_compression_bptc");
      this.getExtension("WEBGL_compressed_texture_s3tc");
      this.getExtension("WEBGL_compressed_texture_etc1");
      this.getExtension("WEBGL_compressed_texture_pvrtc");
      this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
      this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE");
      this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE");
      this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE");
      this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES");
      this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES");
      this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
      this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL");
      this.parameters = {};
      this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      this.gl.canvas.width = width * this.dpr;
      this.gl.canvas.height = height * this.dpr;
      if (!this.gl.canvas.style)
        return;
      Object.assign(this.gl.canvas.style, {
        width: width + "px",
        height: height + "px"
      });
    }
    setViewport(width, height, x = 0, y = 0) {
      if (this.state.viewport.width === width && this.state.viewport.height === height)
        return;
      this.state.viewport.width = width;
      this.state.viewport.height = height;
      this.state.viewport.x = x;
      this.state.viewport.y = y;
      this.gl.viewport(x, y, width, height);
    }
    setScissor(width, height, x = 0, y = 0) {
      this.gl.scissor(x, y, width, height);
    }
    enable(id) {
      if (this.state[id] === true)
        return;
      this.gl.enable(id);
      this.state[id] = true;
    }
    disable(id) {
      if (this.state[id] === false)
        return;
      this.gl.disable(id);
      this.state[id] = false;
    }
    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
      if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha)
        return;
      this.state.blendFunc.src = src;
      this.state.blendFunc.dst = dst;
      this.state.blendFunc.srcAlpha = srcAlpha;
      this.state.blendFunc.dstAlpha = dstAlpha;
      if (srcAlpha !== void 0)
        this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
      else
        this.gl.blendFunc(src, dst);
    }
    setBlendEquation(modeRGB, modeAlpha) {
      modeRGB = modeRGB || this.gl.FUNC_ADD;
      if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha)
        return;
      this.state.blendEquation.modeRGB = modeRGB;
      this.state.blendEquation.modeAlpha = modeAlpha;
      if (modeAlpha !== void 0)
        this.gl.blendEquationSeparate(modeRGB, modeAlpha);
      else
        this.gl.blendEquation(modeRGB);
    }
    setCullFace(value) {
      if (this.state.cullFace === value)
        return;
      this.state.cullFace = value;
      this.gl.cullFace(value);
    }
    setFrontFace(value) {
      if (this.state.frontFace === value)
        return;
      this.state.frontFace = value;
      this.gl.frontFace(value);
    }
    setDepthMask(value) {
      if (this.state.depthMask === value)
        return;
      this.state.depthMask = value;
      this.gl.depthMask(value);
    }
    setDepthFunc(value) {
      if (this.state.depthFunc === value)
        return;
      this.state.depthFunc = value;
      this.gl.depthFunc(value);
    }
    activeTexture(value) {
      if (this.state.activeTextureUnit === value)
        return;
      this.state.activeTextureUnit = value;
      this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }
    bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
      if (this.state.framebuffer === buffer)
        return;
      this.state.framebuffer = buffer;
      this.gl.bindFramebuffer(target, buffer);
    }
    getExtension(extension, webgl2Func, extFunc) {
      if (webgl2Func && this.gl[webgl2Func])
        return this.gl[webgl2Func].bind(this.gl);
      if (!this.extensions[extension]) {
        this.extensions[extension] = this.gl.getExtension(extension);
      }
      if (!webgl2Func)
        return this.extensions[extension];
      if (!this.extensions[extension])
        return null;
      return this.extensions[extension][extFunc].bind(this.extensions[extension]);
    }
    sortOpaque(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      } else if (a.program.id !== b.program.id) {
        return a.program.id - b.program.id;
      } else if (a.zDepth !== b.zDepth) {
        return a.zDepth - b.zDepth;
      } else {
        return b.id - a.id;
      }
    }
    sortTransparent(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      }
      if (a.zDepth !== b.zDepth) {
        return b.zDepth - a.zDepth;
      } else {
        return b.id - a.id;
      }
    }
    sortUI(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      } else if (a.program.id !== b.program.id) {
        return a.program.id - b.program.id;
      } else {
        return b.id - a.id;
      }
    }
    getRenderList({ scene, camera, frustumCull, sort }) {
      let renderList = [];
      if (camera && frustumCull)
        camera.updateFrustum();
      scene.traverse((node) => {
        if (!node.visible)
          return true;
        if (!node.draw)
          return;
        if (frustumCull && node.frustumCulled && camera) {
          if (!camera.frustumIntersectsMesh(node))
            return;
        }
        renderList.push(node);
      });
      if (sort) {
        const opaque = [];
        const transparent = [];
        const ui = [];
        renderList.forEach((node) => {
          if (!node.program.transparent) {
            opaque.push(node);
          } else if (node.program.depthTest) {
            transparent.push(node);
          } else {
            ui.push(node);
          }
          node.zDepth = 0;
          if (node.renderOrder !== 0 || !node.program.depthTest || !camera)
            return;
          node.worldMatrix.getTranslation(tempVec32);
          tempVec32.applyMatrix4(camera.projectionViewMatrix);
          node.zDepth = tempVec32.z;
        });
        opaque.sort(this.sortOpaque);
        transparent.sort(this.sortTransparent);
        ui.sort(this.sortUI);
        renderList = opaque.concat(transparent, ui);
      }
      return renderList;
    }
    render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
      if (target === null) {
        this.bindFramebuffer();
        this.setViewport(this.width * this.dpr, this.height * this.dpr);
      } else {
        this.bindFramebuffer(target);
        this.setViewport(target.width, target.height);
      }
      if (clear || this.autoClear && clear !== false) {
        if (this.depth && (!target || target.depth)) {
          this.enable(this.gl.DEPTH_TEST);
          this.setDepthMask(true);
        }
        this.gl.clear(
          (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
        );
      }
      if (update)
        scene.updateMatrixWorld();
      if (camera)
        camera.updateMatrixWorld();
      const renderList = this.getRenderList({ scene, camera, frustumCull, sort });
      renderList.forEach((node) => {
        node.draw({ camera });
      });
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/Vec4Func.js
  function copy2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  function set2(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  function scale2(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
  }
  function normalize4(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
  }
  function dot2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/QuatFunc.js
  function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }
  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s2 = Math.sin(rad);
    out[0] = s2 * axis[0];
    out[1] = s2 * axis[1];
    out[2] = s2 * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }
  function multiply2(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  function rotateX(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }
  function rotateY(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }
  function rotateZ(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }
  function slerp(out, a, b, t2) {
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];
    let omega, cosom, sinom, scale0, scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if (1 - cosom > 1e-6) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1 - t2) * omega) / sinom;
      scale1 = Math.sin(t2 * omega) / sinom;
    } else {
      scale0 = 1 - t2;
      scale1 = t2;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }
  function invert(out, a) {
    let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    let dot4 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    let invDot = dot4 ? 1 / dot4 : 0;
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
  }
  function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
  }
  function fromMat3(out, m) {
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;
    if (fTrace > 0) {
      fRoot = Math.sqrt(fTrace + 1);
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      let i2 = 0;
      if (m[4] > m[0])
        i2 = 1;
      if (m[8] > m[i2 * 3 + i2])
        i2 = 2;
      let j = (i2 + 1) % 3;
      let k = (i2 + 2) % 3;
      fRoot = Math.sqrt(m[i2 * 3 + i2] - m[j * 3 + j] - m[k * 3 + k] + 1);
      out[i2] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i2] + m[i2 * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i2] + m[i2 * 3 + k]) * fRoot;
    }
    return out;
  }
  function fromEuler(out, euler, order = "YXZ") {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);
    if (order === "XYZ") {
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "YXZ") {
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === "ZXY") {
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "ZYX") {
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === "YZX") {
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "XZY") {
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
    }
    return out;
  }
  var copy3 = copy2;
  var set3 = set2;
  var dot3 = dot2;
  var normalize5 = normalize4;

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Quat.js
  var Quat = class extends Array {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      super(x, y, z, w);
      this.onChange = () => {
      };
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    get w() {
      return this[3];
    }
    set x(v) {
      this[0] = v;
      this.onChange();
    }
    set y(v) {
      this[1] = v;
      this.onChange();
    }
    set z(v) {
      this[2] = v;
      this.onChange();
    }
    set w(v) {
      this[3] = v;
      this.onChange();
    }
    identity() {
      identity(this);
      this.onChange();
      return this;
    }
    set(x, y, z, w) {
      if (x.length)
        return this.copy(x);
      set3(this, x, y, z, w);
      this.onChange();
      return this;
    }
    rotateX(a) {
      rotateX(this, this, a);
      this.onChange();
      return this;
    }
    rotateY(a) {
      rotateY(this, this, a);
      this.onChange();
      return this;
    }
    rotateZ(a) {
      rotateZ(this, this, a);
      this.onChange();
      return this;
    }
    inverse(q = this) {
      invert(this, q);
      this.onChange();
      return this;
    }
    conjugate(q = this) {
      conjugate(this, q);
      this.onChange();
      return this;
    }
    copy(q) {
      copy3(this, q);
      this.onChange();
      return this;
    }
    normalize(q = this) {
      normalize5(this, q);
      this.onChange();
      return this;
    }
    multiply(qA, qB) {
      if (qB) {
        multiply2(this, qA, qB);
      } else {
        multiply2(this, this, qA);
      }
      this.onChange();
      return this;
    }
    dot(v) {
      return dot3(this, v);
    }
    fromMatrix3(matrix3) {
      fromMat3(this, matrix3);
      this.onChange();
      return this;
    }
    fromEuler(euler) {
      fromEuler(this, euler, euler.order);
      return this;
    }
    fromAxisAngle(axis, a) {
      setAxisAngle(this, axis, a);
      this.onChange();
      return this;
    }
    slerp(q, t2) {
      slerp(this, this, q, t2);
      this.onChange();
      return this;
    }
    fromArray(a, o2 = 0) {
      this[0] = a[o2];
      this[1] = a[o2 + 1];
      this[2] = a[o2 + 2];
      this[3] = a[o2 + 3];
      this.onChange();
      return this;
    }
    toArray(a = [], o2 = 0) {
      a[o2] = this[0];
      a[o2 + 1] = this[1];
      a[o2 + 2] = this[2];
      a[o2 + 3] = this[3];
      return a;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/Mat4Func.js
  var EPSILON = 1e-6;
  function copy4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function set4(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function identity2(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function invert2(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  function determinant(a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  function multiply3(out, a, b) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function translate(out, a, v) {
    let x = v[0], y = v[1], z = v[2];
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
  }
  function scale3(out, a, v) {
    let x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.hypot(x, y, z);
    let s2, c, t2;
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    let b00, b01, b02;
    let b10, b11, b12;
    let b20, b21, b22;
    if (Math.abs(len) < EPSILON) {
      return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s2 = Math.sin(rad);
    c = Math.cos(rad);
    t2 = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    b00 = x * x * t2 + c;
    b01 = y * x * t2 + z * s2;
    b02 = z * x * t2 - y * s2;
    b10 = x * y * t2 - z * s2;
    b11 = y * y * t2 + c;
    b12 = z * y * t2 + x * s2;
    b20 = x * z * t2 + y * s2;
    b21 = y * z * t2 - x * s2;
    b22 = z * z * t2 + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  function getScaling(out, mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  function getMaxScaleOnAxis(mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];
    const x = m11 * m11 + m12 * m12 + m13 * m13;
    const y = m21 * m21 + m22 * m22 + m23 * m23;
    const z = m31 * m31 + m32 * m32 + m33 * m33;
    return Math.sqrt(Math.max(x, y, z));
  }
  var getRotation = function() {
    const temp = [1, 1, 1];
    return function(out, mat) {
      let scaling = temp;
      getScaling(scaling, mat);
      let is1 = 1 / scaling[0];
      let is2 = 1 / scaling[1];
      let is3 = 1 / scaling[2];
      let sm11 = mat[0] * is1;
      let sm12 = mat[1] * is2;
      let sm13 = mat[2] * is3;
      let sm21 = mat[4] * is1;
      let sm22 = mat[5] * is2;
      let sm23 = mat[6] * is3;
      let sm31 = mat[8] * is1;
      let sm32 = mat[9] * is2;
      let sm33 = mat[10] * is3;
      let trace = sm11 + sm22 + sm33;
      let S = 0;
      if (trace > 0) {
        S = Math.sqrt(trace + 1) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
      } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
      } else if (sm22 > sm33) {
        S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
      } else {
        S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
      }
      return out;
    };
  }();
  function fromRotationTranslationScale(out, q, v, s2) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let xy = x * y2;
    let xz = x * z2;
    let yy = y * y2;
    let yz = y * z2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    let sx = s2[0];
    let sy = s2[1];
    let sz = s2[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromQuat(out, q) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function perspective(out, fovy, aspect, near, far) {
    let f = 1 / Math.tan(fovy / 2);
    let nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
  }
  function ortho(out, left, right, bottom, top, near, far) {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  function targetTo(out, eye, target, up) {
    let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len === 0) {
      z2 = 1;
    } else {
      len = 1 / Math.sqrt(len);
      z0 *= len;
      z1 *= len;
      z2 *= len;
    }
    let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len === 0) {
      if (upz) {
        upx += 1e-6;
      } else if (upy) {
        upz += 1e-6;
      } else {
        upy += 1e-6;
      }
      x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
      len = x0 * x0 + x1 * x1 + x2 * x2;
    }
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  function add3(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
  }
  function subtract2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
  }
  function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Mat4.js
  var Mat4 = class extends Array {
    constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
      super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      return this;
    }
    get x() {
      return this[12];
    }
    get y() {
      return this[13];
    }
    get z() {
      return this[14];
    }
    get w() {
      return this[15];
    }
    set x(v) {
      this[12] = v;
    }
    set y(v) {
      this[13] = v;
    }
    set z(v) {
      this[14] = v;
    }
    set w(v) {
      this[15] = v;
    }
    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      if (m00.length)
        return this.copy(m00);
      set4(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      return this;
    }
    translate(v, m = this) {
      translate(this, m, v);
      return this;
    }
    rotate(v, axis, m = this) {
      rotate(this, m, v, axis);
      return this;
    }
    scale(v, m = this) {
      scale3(this, m, typeof v === "number" ? [v, v, v] : v);
      return this;
    }
    add(ma, mb) {
      if (mb)
        add3(this, ma, mb);
      else
        add3(this, this, ma);
      return this;
    }
    sub(ma, mb) {
      if (mb)
        subtract2(this, ma, mb);
      else
        subtract2(this, this, ma);
      return this;
    }
    multiply(ma, mb) {
      if (!ma.length) {
        multiplyScalar(this, this, ma);
      } else if (mb) {
        multiply3(this, ma, mb);
      } else {
        multiply3(this, this, ma);
      }
      return this;
    }
    identity() {
      identity2(this);
      return this;
    }
    copy(m) {
      copy4(this, m);
      return this;
    }
    fromPerspective({ fov, aspect, near, far } = {}) {
      perspective(this, fov, aspect, near, far);
      return this;
    }
    fromOrthogonal({ left, right, bottom, top, near, far }) {
      ortho(this, left, right, bottom, top, near, far);
      return this;
    }
    fromQuaternion(q) {
      fromQuat(this, q);
      return this;
    }
    setPosition(v) {
      this.x = v[0];
      this.y = v[1];
      this.z = v[2];
      return this;
    }
    inverse(m = this) {
      invert2(this, m);
      return this;
    }
    compose(q, pos, scale5) {
      fromRotationTranslationScale(this, q, pos, scale5);
      return this;
    }
    getRotation(q) {
      getRotation(q, this);
      return this;
    }
    getTranslation(pos) {
      getTranslation(pos, this);
      return this;
    }
    getScaling(scale5) {
      getScaling(scale5, this);
      return this;
    }
    getMaxScaleOnAxis() {
      return getMaxScaleOnAxis(this);
    }
    lookAt(eye, target, up) {
      targetTo(this, eye, target, up);
      return this;
    }
    determinant() {
      return determinant(this);
    }
    fromArray(a, o2 = 0) {
      this[0] = a[o2];
      this[1] = a[o2 + 1];
      this[2] = a[o2 + 2];
      this[3] = a[o2 + 3];
      this[4] = a[o2 + 4];
      this[5] = a[o2 + 5];
      this[6] = a[o2 + 6];
      this[7] = a[o2 + 7];
      this[8] = a[o2 + 8];
      this[9] = a[o2 + 9];
      this[10] = a[o2 + 10];
      this[11] = a[o2 + 11];
      this[12] = a[o2 + 12];
      this[13] = a[o2 + 13];
      this[14] = a[o2 + 14];
      this[15] = a[o2 + 15];
      return this;
    }
    toArray(a = [], o2 = 0) {
      a[o2] = this[0];
      a[o2 + 1] = this[1];
      a[o2 + 2] = this[2];
      a[o2 + 3] = this[3];
      a[o2 + 4] = this[4];
      a[o2 + 5] = this[5];
      a[o2 + 6] = this[6];
      a[o2 + 7] = this[7];
      a[o2 + 8] = this[8];
      a[o2 + 9] = this[9];
      a[o2 + 10] = this[10];
      a[o2 + 11] = this[11];
      a[o2 + 12] = this[12];
      a[o2 + 13] = this[13];
      a[o2 + 14] = this[14];
      a[o2 + 15] = this[15];
      return a;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/EulerFunc.js
  function fromRotationMatrix(out, m, order = "YXZ") {
    if (order === "XYZ") {
      out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
      if (Math.abs(m[8]) < 0.99999) {
        out[0] = Math.atan2(-m[9], m[10]);
        out[2] = Math.atan2(-m[4], m[0]);
      } else {
        out[0] = Math.atan2(m[6], m[5]);
        out[2] = 0;
      }
    } else if (order === "YXZ") {
      out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
      if (Math.abs(m[9]) < 0.99999) {
        out[1] = Math.atan2(m[8], m[10]);
        out[2] = Math.atan2(m[1], m[5]);
      } else {
        out[1] = Math.atan2(-m[2], m[0]);
        out[2] = 0;
      }
    } else if (order === "ZXY") {
      out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
      if (Math.abs(m[6]) < 0.99999) {
        out[1] = Math.atan2(-m[2], m[10]);
        out[2] = Math.atan2(-m[4], m[5]);
      } else {
        out[1] = 0;
        out[2] = Math.atan2(m[1], m[0]);
      }
    } else if (order === "ZYX") {
      out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
      if (Math.abs(m[2]) < 0.99999) {
        out[0] = Math.atan2(m[6], m[10]);
        out[2] = Math.atan2(m[1], m[0]);
      } else {
        out[0] = 0;
        out[2] = Math.atan2(-m[4], m[5]);
      }
    } else if (order === "YZX") {
      out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
      if (Math.abs(m[1]) < 0.99999) {
        out[0] = Math.atan2(-m[9], m[5]);
        out[1] = Math.atan2(-m[2], m[0]);
      } else {
        out[0] = 0;
        out[1] = Math.atan2(m[8], m[10]);
      }
    } else if (order === "XZY") {
      out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
      if (Math.abs(m[4]) < 0.99999) {
        out[0] = Math.atan2(m[6], m[5]);
        out[1] = Math.atan2(m[8], m[0]);
      } else {
        out[0] = Math.atan2(-m[9], m[10]);
        out[1] = 0;
      }
    }
    return out;
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Euler.js
  var tmpMat4 = new Mat4();
  var Euler = class extends Array {
    constructor(x = 0, y = x, z = x, order = "YXZ") {
      super(x, y, z);
      this.order = order;
      this.onChange = () => {
      };
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(v) {
      this[0] = v;
      this.onChange();
    }
    set y(v) {
      this[1] = v;
      this.onChange();
    }
    set z(v) {
      this[2] = v;
      this.onChange();
    }
    set(x, y = x, z = x) {
      if (x.length)
        return this.copy(x);
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this.onChange();
      return this;
    }
    copy(v) {
      this[0] = v[0];
      this[1] = v[1];
      this[2] = v[2];
      this.onChange();
      return this;
    }
    reorder(order) {
      this.order = order;
      this.onChange();
      return this;
    }
    fromRotationMatrix(m, order = this.order) {
      fromRotationMatrix(this, m, order);
      this.onChange();
      return this;
    }
    fromQuaternion(q, order = this.order) {
      tmpMat4.fromQuaternion(q);
      return this.fromRotationMatrix(tmpMat4, order);
    }
    fromArray(a, o2 = 0) {
      this[0] = a[o2];
      this[1] = a[o2 + 1];
      this[2] = a[o2 + 2];
      return this;
    }
    toArray(a = [], o2 = 0) {
      a[o2] = this[0];
      a[o2 + 1] = this[1];
      a[o2 + 2] = this[2];
      return a;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Transform.js
  var Transform = class {
    constructor() {
      this.parent = null;
      this.children = [];
      this.visible = true;
      this.matrix = new Mat4();
      this.worldMatrix = new Mat4();
      this.matrixAutoUpdate = true;
      this.worldMatrixNeedsUpdate = false;
      this.position = new Vec3();
      this.quaternion = new Quat();
      this.scale = new Vec3(1);
      this.rotation = new Euler();
      this.up = new Vec3(0, 1, 0);
      this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
      this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
    }
    setParent(parent, notifyParent = true) {
      if (this.parent && parent !== this.parent)
        this.parent.removeChild(this, false);
      this.parent = parent;
      if (notifyParent && parent)
        parent.addChild(this, false);
    }
    addChild(child, notifyChild = true) {
      if (!~this.children.indexOf(child))
        this.children.push(child);
      if (notifyChild)
        child.setParent(this, false);
    }
    removeChild(child, notifyChild = true) {
      if (!!~this.children.indexOf(child))
        this.children.splice(this.children.indexOf(child), 1);
      if (notifyChild)
        child.setParent(null, false);
    }
    updateMatrixWorld(force) {
      if (this.matrixAutoUpdate)
        this.updateMatrix();
      if (this.worldMatrixNeedsUpdate || force) {
        if (this.parent === null)
          this.worldMatrix.copy(this.matrix);
        else
          this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
        this.worldMatrixNeedsUpdate = false;
        force = true;
      }
      for (let i2 = 0, l = this.children.length; i2 < l; i2++) {
        this.children[i2].updateMatrixWorld(force);
      }
    }
    updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale);
      this.worldMatrixNeedsUpdate = true;
    }
    traverse(callback) {
      if (callback(this))
        return;
      for (let i2 = 0, l = this.children.length; i2 < l; i2++) {
        this.children[i2].traverse(callback);
      }
    }
    decompose() {
      this.matrix.getTranslation(this.position);
      this.matrix.getRotation(this.quaternion);
      this.matrix.getScaling(this.scale);
      this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(target, invert4 = false) {
      if (invert4)
        this.matrix.lookAt(this.position, target, this.up);
      else
        this.matrix.lookAt(target, this.position, this.up);
      this.matrix.getRotation(this.quaternion);
      this.rotation.fromQuaternion(this.quaternion);
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Camera.js
  var tempMat4 = new Mat4();
  var tempVec3a = new Vec3();
  var tempVec3b = new Vec3();
  var Camera = class extends Transform {
    constructor(gl, { near = 0.1, far = 100, fov = 45, aspect = 1, left, right, bottom, top, zoom = 1 } = {}) {
      super();
      Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });
      this.projectionMatrix = new Mat4();
      this.viewMatrix = new Mat4();
      this.projectionViewMatrix = new Mat4();
      this.worldPosition = new Vec3();
      this.type = left || right ? "orthographic" : "perspective";
      if (this.type === "orthographic")
        this.orthographic();
      else
        this.perspective();
    }
    perspective({ near = this.near, far = this.far, fov = this.fov, aspect = this.aspect } = {}) {
      Object.assign(this, { near, far, fov, aspect });
      this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
      this.type = "perspective";
      return this;
    }
    orthographic({
      near = this.near,
      far = this.far,
      left = this.left || -1,
      right = this.right || 1,
      bottom = this.bottom || -1,
      top = this.top || 1,
      zoom = this.zoom
    } = {}) {
      Object.assign(this, { near, far, left, right, bottom, top, zoom });
      left /= zoom;
      right /= zoom;
      bottom /= zoom;
      top /= zoom;
      this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
      this.type = "orthographic";
      return this;
    }
    updateMatrixWorld() {
      super.updateMatrixWorld();
      this.viewMatrix.inverse(this.worldMatrix);
      this.worldMatrix.getTranslation(this.worldPosition);
      this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
      return this;
    }
    lookAt(target) {
      super.lookAt(target, true);
      return this;
    }
    // Project 3D coordinate to 2D point
    project(v) {
      v.applyMatrix4(this.viewMatrix);
      v.applyMatrix4(this.projectionMatrix);
      return this;
    }
    // Unproject 2D point to 3D coordinate
    unproject(v) {
      v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
      v.applyMatrix4(this.worldMatrix);
      return this;
    }
    updateFrustum() {
      if (!this.frustum) {
        this.frustum = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
      }
      const m = this.projectionViewMatrix;
      this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12];
      this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12];
      this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13];
      this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13];
      this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14];
      this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14];
      for (let i2 = 0; i2 < 6; i2++) {
        const invLen = 1 / this.frustum[i2].distance();
        this.frustum[i2].multiply(invLen);
        this.frustum[i2].constant *= invLen;
      }
    }
    frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
      if (!node.geometry.attributes.position)
        return true;
      if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity)
        node.geometry.computeBoundingSphere();
      if (!node.geometry.bounds)
        return true;
      const center = tempVec3a;
      center.copy(node.geometry.bounds.center);
      center.applyMatrix4(worldMatrix);
      const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();
      return this.frustumIntersectsSphere(center, radius);
    }
    frustumIntersectsSphere(center, radius) {
      const normal = tempVec3b;
      for (let i2 = 0; i2 < 6; i2++) {
        const plane = this.frustum[i2];
        const distance2 = normal.copy(plane).dot(center) + plane.constant;
        if (distance2 < -radius)
          return false;
      }
      return true;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/functions/Mat3Func.js
  function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
  }
  function fromQuat2(out, q) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
  }
  function copy5(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  function set5(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
  }
  function identity3(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }
  function invert3(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2];
    let a10 = a[3], a11 = a[4], a12 = a[5];
    let a20 = a[6], a21 = a[7], a22 = a[8];
    let b01 = a22 * a11 - a12 * a21;
    let b11 = -a22 * a10 + a12 * a20;
    let b21 = a21 * a10 - a11 * a20;
    let det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
  }
  function multiply4(out, a, b) {
    let a00 = a[0], a01 = a[1], a02 = a[2];
    let a10 = a[3], a11 = a[4], a12 = a[5];
    let a20 = a[6], a21 = a[7], a22 = a[8];
    let b00 = b[0], b01 = b[1], b02 = b[2];
    let b10 = b[3], b11 = b[4], b12 = b[5];
    let b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
  }
  function translate2(out, a, v) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
  }
  function rotate2(out, a, rad) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s2 = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s2 * a10;
    out[1] = c * a01 + s2 * a11;
    out[2] = c * a02 + s2 * a12;
    out[3] = c * a10 - s2 * a00;
    out[4] = c * a11 - s2 * a01;
    out[5] = c * a12 - s2 * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
  }
  function scale4(out, a, v) {
    let x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  function normalFromMat4(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Mat3.js
  var Mat3 = class extends Array {
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
      super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      return this;
    }
    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      if (m00.length)
        return this.copy(m00);
      set5(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
      return this;
    }
    translate(v, m = this) {
      translate2(this, m, v);
      return this;
    }
    rotate(v, m = this) {
      rotate2(this, m, v);
      return this;
    }
    scale(v, m = this) {
      scale4(this, m, v);
      return this;
    }
    multiply(ma, mb) {
      if (mb) {
        multiply4(this, ma, mb);
      } else {
        multiply4(this, this, ma);
      }
      return this;
    }
    identity() {
      identity3(this);
      return this;
    }
    copy(m) {
      copy5(this, m);
      return this;
    }
    fromMatrix4(m) {
      fromMat4(this, m);
      return this;
    }
    fromQuaternion(q) {
      fromQuat2(this, q);
      return this;
    }
    fromBasis(vec3a, vec3b, vec3c) {
      this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
      return this;
    }
    inverse(m = this) {
      invert3(this, m);
      return this;
    }
    getNormalMatrix(m) {
      normalFromMat4(this, m);
      return this;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Mesh.js
  var ID4 = 0;
  var Mesh = class extends Transform {
    constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
      super();
      if (!gl.canvas)
        console.error("gl not passed as first argument to Mesh");
      this.gl = gl;
      this.id = ID4++;
      this.geometry = geometry;
      this.program = program;
      this.mode = mode;
      this.frustumCulled = frustumCulled;
      this.renderOrder = renderOrder;
      this.modelViewMatrix = new Mat4();
      this.normalMatrix = new Mat3();
      this.beforeRenderCallbacks = [];
      this.afterRenderCallbacks = [];
    }
    onBeforeRender(f) {
      this.beforeRenderCallbacks.push(f);
      return this;
    }
    onAfterRender(f) {
      this.afterRenderCallbacks.push(f);
      return this;
    }
    draw({ camera } = {}) {
      if (camera) {
        if (!this.program.uniforms.modelMatrix) {
          Object.assign(this.program.uniforms, {
            modelMatrix: { value: null },
            viewMatrix: { value: null },
            modelViewMatrix: { value: null },
            normalMatrix: { value: null },
            projectionMatrix: { value: null },
            cameraPosition: { value: null }
          });
        }
        this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
        this.program.uniforms.cameraPosition.value = camera.worldPosition;
        this.program.uniforms.viewMatrix.value = camera.viewMatrix;
        this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
        this.program.uniforms.modelMatrix.value = this.worldMatrix;
        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
        this.program.uniforms.normalMatrix.value = this.normalMatrix;
      }
      this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
      let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({ flipFaces });
      this.geometry.draw({ mode: this.mode, program: this.program });
      this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/core/Texture.js
  var emptyPixel = new Uint8Array(4);
  function isPowerOf2(value) {
    return (value & value - 1) === 0;
  }
  var ID5 = 1;
  var Texture = class {
    constructor(gl, {
      image,
      target = gl.TEXTURE_2D,
      type = gl.UNSIGNED_BYTE,
      format = gl.RGBA,
      internalFormat = format,
      wrapS = gl.CLAMP_TO_EDGE,
      wrapT = gl.CLAMP_TO_EDGE,
      generateMipmaps = true,
      minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
      magFilter = gl.LINEAR,
      premultiplyAlpha = false,
      unpackAlignment = 4,
      flipY = target == gl.TEXTURE_2D ? true : false,
      anisotropy = 0,
      level = 0,
      width,
      // used for RenderTargets or Data Textures
      height = width
    } = {}) {
      this.gl = gl;
      this.id = ID5++;
      this.image = image;
      this.target = target;
      this.type = type;
      this.format = format;
      this.internalFormat = internalFormat;
      this.minFilter = minFilter;
      this.magFilter = magFilter;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.generateMipmaps = generateMipmaps;
      this.premultiplyAlpha = premultiplyAlpha;
      this.unpackAlignment = unpackAlignment;
      this.flipY = flipY;
      this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
      this.level = level;
      this.width = width;
      this.height = height;
      this.texture = this.gl.createTexture();
      this.store = {
        image: null
      };
      this.glState = this.gl.renderer.state;
      this.state = {};
      this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
      this.state.magFilter = this.gl.LINEAR;
      this.state.wrapS = this.gl.REPEAT;
      this.state.wrapT = this.gl.REPEAT;
      this.state.anisotropy = 0;
    }
    bind() {
      if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id)
        return;
      this.gl.bindTexture(this.target, this.texture);
      this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
    }
    update(textureUnit = 0) {
      const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);
      if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
        this.gl.renderer.activeTexture(textureUnit);
        this.bind();
      }
      if (!needsUpdate)
        return;
      this.needsUpdate = false;
      if (this.flipY !== this.glState.flipY) {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
        this.glState.flipY = this.flipY;
      }
      if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
        this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        this.glState.premultiplyAlpha = this.premultiplyAlpha;
      }
      if (this.unpackAlignment !== this.glState.unpackAlignment) {
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
        this.glState.unpackAlignment = this.unpackAlignment;
      }
      if (this.minFilter !== this.state.minFilter) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
        this.state.minFilter = this.minFilter;
      }
      if (this.magFilter !== this.state.magFilter) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
        this.state.magFilter = this.magFilter;
      }
      if (this.wrapS !== this.state.wrapS) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
        this.state.wrapS = this.wrapS;
      }
      if (this.wrapT !== this.state.wrapT) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
        this.state.wrapT = this.wrapT;
      }
      if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
        this.gl.texParameterf(
          this.target,
          this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,
          this.anisotropy
        );
        this.state.anisotropy = this.anisotropy;
      }
      if (this.image) {
        if (this.image.width) {
          this.width = this.image.width;
          this.height = this.image.height;
        }
        if (this.target === this.gl.TEXTURE_CUBE_MAP) {
          for (let i2 = 0; i2 < 6; i2++) {
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i2,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image[i2]
            );
          }
        } else if (ArrayBuffer.isView(this.image)) {
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
        } else if (this.image.isCompressedTexture) {
          for (let level = 0; level < this.image.length; level++) {
            this.gl.compressedTexImage2D(
              this.target,
              level,
              this.internalFormat,
              this.image[level].width,
              this.image[level].height,
              0,
              this.image[level].data
            );
          }
        } else {
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
        }
        if (this.generateMipmaps) {
          if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
            this.generateMipmaps = false;
            this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
            this.minFilter = this.gl.LINEAR;
          } else {
            this.gl.generateMipmap(this.target);
          }
        }
        this.onUpdate && this.onUpdate();
      } else {
        if (this.target === this.gl.TEXTURE_CUBE_MAP) {
          for (let i2 = 0; i2 < 6; i2++) {
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i2,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              emptyPixel
            );
          }
        } else if (this.width) {
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
        } else {
          this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
      }
      this.store.image = this.image;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/math/Vec4.js
  var Vec4 = class extends Array {
    constructor(x = 0, y = x, z = x, w = x) {
      super(x, y, z, w);
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    get w() {
      return this[3];
    }
    set x(v) {
      this[0] = v;
    }
    set y(v) {
      this[1] = v;
    }
    set z(v) {
      this[2] = v;
    }
    set w(v) {
      this[3] = v;
    }
    set(x, y = x, z = x, w = x) {
      if (x.length)
        return this.copy(x);
      set2(this, x, y, z, w);
      return this;
    }
    copy(v) {
      copy2(this, v);
      return this;
    }
    normalize() {
      normalize4(this, this);
      return this;
    }
    multiply(v) {
      scale2(this, this, v);
      return this;
    }
    dot(v) {
      return dot2(this, v);
    }
    fromArray(a, o2 = 0) {
      this[0] = a[o2];
      this[1] = a[o2 + 1];
      this[2] = a[o2 + 2];
      this[3] = a[o2 + 3];
      return this;
    }
    toArray(a = [], o2 = 0) {
      a[o2] = this[0];
      a[o2 + 1] = this[1];
      a[o2 + 2] = this[2];
      a[o2 + 3] = this[3];
      return a;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/extras/NormalProgram.js
  var vertex = (
    /* glsl */
    `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
  );
  var fragment = (
    /* glsl */
    `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`
  );
  function NormalProgram(gl) {
    return new Program(gl, {
      vertex,
      fragment,
      cullFace: null
    });
  }

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/extras/GLTFAnimation.js
  var tmpVec3A = new Vec3();
  var tmpVec3B = new Vec3();
  var tmpVec3C = new Vec3();
  var tmpVec3D = new Vec3();
  var tmpQuatA = new Quat();
  var tmpQuatB = new Quat();
  var tmpQuatC = new Quat();
  var tmpQuatD = new Quat();
  var GLTFAnimation = class {
    constructor(data, weight = 1) {
      this.data = data;
      this.elapsed = 0;
      this.weight = weight;
      this.loop = true;
      this.startTime = data.reduce((a, { times }) => Math.min(a, times[0]), Infinity);
      this.endTime = data.reduce((a, { times }) => Math.max(a, times[times.length - 1]), 0);
      this.duration = this.endTime - this.startTime;
    }
    update(totalWeight = 1, isSet) {
      const weight = isSet ? 1 : this.weight / totalWeight;
      const elapsed = !this.duration ? 0 : (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - 1e-3)) + this.startTime;
      this.data.forEach(({ node, transform, interpolation, times, values }) => {
        if (!this.duration) {
          let val = tmpVec3A;
          let size2 = 3;
          if (transform === "quaternion") {
            val = tmpQuatA;
            size2 = 4;
          }
          val.fromArray(values, 0);
          if (size2 === 4)
            node[transform].slerp(val, weight);
          else
            node[transform].lerp(val, weight);
          return;
        }
        const prevIndex = Math.max(
          1,
          times.findIndex((t2) => t2 > elapsed)
        ) - 1;
        const nextIndex = prevIndex + 1;
        let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
        if (interpolation === "STEP")
          alpha = 0;
        let prevVal = tmpVec3A;
        let prevTan = tmpVec3B;
        let nextTan = tmpVec3C;
        let nextVal = tmpVec3D;
        let size = 3;
        if (transform === "quaternion") {
          prevVal = tmpQuatA;
          prevTan = tmpQuatB;
          nextTan = tmpQuatC;
          nextVal = tmpQuatD;
          size = 4;
        }
        if (interpolation === "CUBICSPLINE") {
          prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
          prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
          nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
          nextVal.fromArray(values, nextIndex * size * 3 + size * 1);
          prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
          if (size === 4)
            prevVal.normalize();
        } else {
          prevVal.fromArray(values, prevIndex * size);
          nextVal.fromArray(values, nextIndex * size);
          if (size === 4)
            prevVal.slerp(nextVal, alpha);
          else
            prevVal.lerp(nextVal, alpha);
        }
        if (size === 4)
          node[transform].slerp(prevVal, weight);
        else
          node[transform].lerp(prevVal, weight);
      });
    }
    cubicSplineInterpolate(t2, prevVal, prevTan, nextTan, nextVal) {
      const t22 = t2 * t2;
      const t3 = t22 * t2;
      const s2 = 3 * t22 - 2 * t3;
      const s3 = t3 - t22;
      const s0 = 1 - s2;
      const s1 = s3 - t22 + t2;
      for (let i2 = 0; i2 < prevVal.length; i2++) {
        prevVal[i2] = s0 * prevVal[i2] + s1 * (1 - t2) * prevTan[i2] + s2 * nextVal[i2] + s3 * t2 * nextTan[i2];
      }
      return prevVal;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/extras/GLTFSkin.js
  var tempMat42 = new Mat4();
  var identity4 = new Mat4();
  var GLTFSkin = class extends Mesh {
    constructor(gl, { skeleton, geometry, program, mode = gl.TRIANGLES } = {}) {
      super(gl, { geometry, program, mode });
      this.skeleton = skeleton;
      this.program = program;
      this.createBoneTexture();
    }
    createBoneTexture() {
      if (!this.skeleton.joints.length)
        return;
      const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
      this.boneMatrices = new Float32Array(size * size * 4);
      this.boneTextureSize = size;
      this.boneTexture = new Texture(this.gl, {
        image: this.boneMatrices,
        generateMipmaps: false,
        type: this.gl.FLOAT,
        internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
        minFilter: this.gl.NEAREST,
        magFilter: this.gl.NEAREST,
        flipY: false,
        width: size
      });
    }
    // addAnimation(data) {
    //     const animation = new Animation({ objects: this.bones, data });
    //     this.animations.push(animation);
    //     return animation;
    // }
    // updateAnimations() {
    //     // Calculate combined animation weight
    //     let total = 0;
    //     this.animations.forEach((animation) => (total += animation.weight));
    //     this.animations.forEach((animation, i) => {
    //         // force first animation to set in order to reset frame
    //         animation.update(total, i === 0);
    //     });
    // }
    updateUniforms() {
      this.skeleton.joints.forEach((bone, i2) => {
        tempMat42.multiply(bone.worldMatrix, bone.bindInverse);
        this.boneMatrices.set(tempMat42, i2 * 16);
      });
      if (this.boneTexture)
        this.boneTexture.needsUpdate = true;
    }
    draw({ camera } = {}) {
      if (!this.program.uniforms.boneTexture) {
        Object.assign(this.program.uniforms, {
          boneTexture: { value: this.boneTexture },
          boneTextureSize: { value: this.boneTextureSize }
        });
      }
      this.updateUniforms();
      const _worldMatrix = this.worldMatrix;
      this.worldMatrix = identity4;
      super.draw({ camera });
      this.worldMatrix = _worldMatrix;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/extras/InstancedMesh.js
  var InstancedMesh = class extends Mesh {
    constructor(...args) {
      super(...args);
      this.frustumCulled = false;
      this.isInstancedMesh = true;
    }
    addFrustumCull() {
      this.instanceTransforms = null;
      this.instanceLightmapScaleOffset = null;
      this.totalInstanceCount = 0;
      this.frustumCullFunction = null;
      this.instanceRenderList = null;
      if (!this.geometry.attributes.instanceMatrix)
        console.error(`mesh ${this.name ? `"${this.name}" ` : ``}missing instanceMatrix attribute; unable to frustum cull`);
      const matrixData = this.geometry.attributes.instanceMatrix.data;
      this.instanceTransforms = [];
      for (let i2 = 0, j = 0; i2 < matrixData.length; i2 += 16, j++) {
        const transform = new Transform();
        transform.index = j;
        transform.matrix.fromArray(matrixData, i2);
        transform.decompose();
        this.instanceTransforms.push(transform);
        transform.setParent(this.parent);
      }
      this.totalInstanceCount = this.instanceTransforms.length;
      if (!!this.geometry.attributes.lightmapScaleOffset) {
        const lightmapData = this.geometry.attributes.lightmapScaleOffset.data;
        for (let i2 = 0, j = 0; i2 < lightmapData.length; i2 += 4, j++) {
          this.instanceTransforms[j].lightmapData = new Vec4().fromArray(lightmapData, i2);
        }
      }
      this.frustumCullFunction = ({ camera }) => {
        this.instanceRenderList = [];
        this.instanceTransforms.forEach((transform) => {
          if (!camera.frustumIntersectsMesh(this, transform.worldMatrix))
            return;
          this.instanceRenderList.push(transform);
        });
        this.instanceRenderList.forEach((transform, i2) => {
          transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i2 * 16);
          if (transform.lightmapData) {
            transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i2 * 4);
            this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
          }
        });
        this.geometry.instancedCount = this.instanceRenderList.length;
        this.geometry.attributes.instanceMatrix.needsUpdate = true;
      };
      this.onBeforeRender(this.frustumCullFunction);
    }
    removeFrustumCull() {
      this.offBeforeRender(this.frustumCullFunction);
      this.geometry.instancedCount = this.totalInstanceCount;
      this.instanceTransforms.forEach((transform, i2) => {
        transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i2 * 16);
        if (transform.lightmapData) {
          transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i2 * 4);
          this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
        }
      });
      this.geometry.attributes.instanceMatrix.needsUpdate = true;
    }
  };

  // node_modules/.pnpm/ogl@1.0.1/node_modules/ogl/src/extras/GLTFLoader.js
  var TYPE_ARRAY = {
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
    "image/jpeg": Uint8Array,
    "image/png": Uint8Array
  };
  var TYPE_SIZE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  };
  var ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  };
  var TRANSFORMS = {
    translation: "position",
    rotation: "quaternion",
    scale: "scale"
  };
  var GLTFLoader = class {
    static setBasisManager(manager) {
      this.basisManager = manager;
    }
    static async load(gl, src) {
      const dir = src.split("/").slice(0, -1).join("/") + "/";
      const desc = await this.parseDesc(src);
      return await this.parse(gl, desc, dir);
    }
    static async parse(gl, desc, dir) {
      if (desc.asset === void 0 || desc.asset.version[0] < 2)
        console.warn("Only GLTF >=2.0 supported. Attempting to parse.");
      if (desc.extensionsRequired?.includes("KHR_texture_basisu") && !this.basisManager)
        console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");
      const buffers = await this.loadBuffers(desc, dir);
      gl.renderer.bindVertexArray(null);
      const bufferViews = this.parseBufferViews(gl, desc, buffers);
      const images = await this.parseImages(gl, desc, dir, bufferViews);
      const textures = this.parseTextures(gl, desc, images);
      const materials = this.parseMaterials(gl, desc, textures);
      const skins = this.parseSkins(gl, desc, bufferViews);
      const meshes = this.parseMeshes(gl, desc, bufferViews, materials, skins);
      const nodes = this.parseNodes(gl, desc, meshes, skins, images);
      this.populateSkins(skins, nodes);
      const animations = this.parseAnimations(gl, desc, nodes, bufferViews);
      const scenes = this.parseScenes(desc, nodes);
      const scene = scenes[desc.scene];
      const lights = this.parseLights(gl, desc, nodes, scenes);
      for (let i2 = nodes.length; i2 >= 0; i2--)
        if (!nodes[i2])
          nodes.splice(i2, 1);
      return {
        json: desc,
        buffers,
        bufferViews,
        images,
        textures,
        materials,
        meshes,
        nodes,
        lights,
        animations,
        scenes,
        scene
      };
    }
    static async parseDesc(src) {
      if (!src.match(/\.glb/)) {
        return await fetch(src).then((res) => res.json());
      } else {
        return await fetch(src).then((res) => res.arrayBuffer()).then((glb) => this.unpackGLB(glb));
      }
    }
    // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
    static unpackGLB(glb) {
      const header = new Uint32Array(glb, 0, 3);
      if (header[0] !== 1179937895) {
        throw new Error("Invalid glTF asset.");
      } else if (header[1] !== 2) {
        throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
      }
      const jsonChunkHeader = new Uint32Array(glb, 12, 2);
      const jsonByteOffset = 20;
      const jsonByteLength = jsonChunkHeader[0];
      if (jsonChunkHeader[1] !== 1313821514) {
        throw new Error("Unexpected GLB layout.");
      }
      const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
      const json = JSON.parse(jsonText);
      if (jsonByteOffset + jsonByteLength === glb.byteLength)
        return json;
      const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
      if (binaryChunkHeader[1] !== 5130562) {
        throw new Error("Unexpected GLB layout.");
      }
      const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
      const binaryByteLength = binaryChunkHeader[0];
      const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
      json.buffers[0].binary = binary;
      return json;
    }
    // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
    static resolveURI(uri, dir) {
      if (typeof uri !== "string" || uri === "")
        return "";
      if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
        dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
      }
      if (/^(https?:)?\/\//i.test(uri))
        return uri;
      if (/^data:.*,.*$/i.test(uri))
        return uri;
      if (/^blob:.*$/i.test(uri))
        return uri;
      return dir + uri;
    }
    static async loadBuffers(desc, dir) {
      if (!desc.buffers)
        return null;
      return await Promise.all(
        desc.buffers.map((buffer) => {
          if (buffer.binary)
            return buffer.binary;
          const uri = this.resolveURI(buffer.uri, dir);
          return fetch(uri).then((res) => res.arrayBuffer());
        })
      );
    }
    static parseBufferViews(gl, desc, buffers) {
      if (!desc.bufferViews)
        return null;
      const bufferViews = desc.bufferViews.map((o2) => Object.assign({}, o2));
      desc.meshes && desc.meshes.forEach(({ primitives }) => {
        primitives.forEach(({ attributes, indices }) => {
          for (let attr in attributes)
            bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;
          if (indices === void 0)
            return;
          bufferViews[desc.accessors[indices].bufferView].isAttribute = true;
          bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
        });
      });
      desc.accessors.forEach(({ bufferView: i2, componentType }) => {
        bufferViews[i2].componentType = componentType;
      });
      desc.images && desc.images.forEach(({ uri, bufferView: i2, mimeType }) => {
        if (i2 === void 0)
          return;
        bufferViews[i2].mimeType = mimeType;
      });
      bufferViews.forEach(
        ({
          buffer: bufferIndex,
          // required
          byteOffset = 0,
          // optional
          byteLength,
          // required
          byteStride,
          // optional
          target = gl.ARRAY_BUFFER,
          // optional, added above for elements
          name,
          // optional
          extensions,
          // optional
          extras,
          // optional
          componentType,
          // optional, added from accessor above
          mimeType,
          // optional, added from images above
          isAttribute
        }, i2) => {
          bufferViews[i2].data = buffers[bufferIndex].slice(byteOffset, byteOffset + byteLength);
          if (!isAttribute)
            return;
          const buffer = gl.createBuffer();
          gl.bindBuffer(target, buffer);
          gl.renderer.state.boundBuffer = buffer;
          gl.bufferData(target, bufferViews[i2].data, gl.STATIC_DRAW);
          bufferViews[i2].buffer = buffer;
        }
      );
      return bufferViews;
    }
    static async parseImages(gl, desc, dir, bufferViews) {
      if (!desc.images)
        return null;
      return await Promise.all(
        desc.images.map(async ({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
          if (mimeType === "image/ktx2") {
            const { data } = bufferViews[bufferViewIndex];
            const image2 = await this.basisManager.parseTexture(data);
            return image2;
          }
          const image = new Image();
          image.name = name;
          if (uri) {
            image.src = this.resolveURI(uri, dir);
          } else if (bufferViewIndex !== void 0) {
            const { data } = bufferViews[bufferViewIndex];
            const blob = new Blob([data], { type: mimeType });
            image.src = URL.createObjectURL(blob);
          }
          image.ready = new Promise((res) => {
            image.onload = () => res();
          });
          return image;
        })
      );
    }
    static parseTextures(gl, desc, images) {
      if (!desc.textures)
        return null;
      return desc.textures.map((textureInfo) => this.createTexture(gl, desc, images, textureInfo));
    }
    static createTexture(gl, desc, images, { sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) {
      if (sourceIndex === void 0 && !!extensions) {
        if (extensions.KHR_texture_basisu)
          sourceIndex = extensions.KHR_texture_basisu.source;
      }
      const image = images[sourceIndex];
      if (image.texture)
        return image.texture;
      const options = {
        flipY: false,
        wrapS: gl.REPEAT,
        // Repeat by default, opposed to OGL's clamp by default
        wrapT: gl.REPEAT
      };
      const sampler = samplerIndex !== void 0 ? desc.samplers[samplerIndex] : null;
      if (sampler) {
        ["magFilter", "minFilter", "wrapS", "wrapT"].forEach((prop) => {
          if (sampler[prop])
            options[prop] = sampler[prop];
        });
      }
      if (image.isBasis) {
        options.image = image;
        options.internalFormat = image.internalFormat;
        if (image.isCompressedTexture) {
          options.generateMipmaps = false;
          if (image.length > 1)
            this.minFilter = gl.NEAREST_MIPMAP_LINEAR;
        }
        const texture2 = new Texture(gl, options);
        texture2.name = name;
        image.texture = texture2;
        return texture2;
      }
      const texture = new Texture(gl, options);
      texture.name = name;
      image.texture = texture;
      image.ready.then(() => {
        texture.image = image;
      });
      return texture;
    }
    static parseMaterials(gl, desc, textures) {
      if (!desc.materials)
        return null;
      return desc.materials.map(
        ({
          name,
          extensions,
          extras,
          pbrMetallicRoughness = {},
          normalTexture,
          occlusionTexture,
          emissiveTexture,
          emissiveFactor = [0, 0, 0],
          alphaMode = "OPAQUE",
          alphaCutoff = 0.5,
          doubleSided = false
        }) => {
          const {
            baseColorFactor = [1, 1, 1, 1],
            baseColorTexture,
            metallicFactor = 1,
            roughnessFactor = 1,
            metallicRoughnessTexture
            //   extensions,
            //   extras,
          } = pbrMetallicRoughness;
          if (baseColorTexture) {
            baseColorTexture.texture = textures[baseColorTexture.index];
          }
          if (normalTexture) {
            normalTexture.texture = textures[normalTexture.index];
          }
          if (metallicRoughnessTexture) {
            metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
          }
          if (occlusionTexture) {
            occlusionTexture.texture = textures[occlusionTexture.index];
          }
          if (emissiveTexture) {
            emissiveTexture.texture = textures[emissiveTexture.index];
          }
          return {
            name,
            extensions,
            extras,
            baseColorFactor,
            baseColorTexture,
            metallicFactor,
            roughnessFactor,
            metallicRoughnessTexture,
            normalTexture,
            occlusionTexture,
            emissiveTexture,
            emissiveFactor,
            alphaMode,
            alphaCutoff,
            doubleSided
          };
        }
      );
    }
    static parseSkins(gl, desc, bufferViews) {
      if (!desc.skins)
        return null;
      return desc.skins.map(
        ({
          inverseBindMatrices,
          // optional
          skeleton,
          // optional
          joints
          // required
          // name,
          // extensions,
          // extras,
        }) => {
          return {
            inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
            skeleton,
            joints
          };
        }
      );
    }
    static parseMeshes(gl, desc, bufferViews, materials, skins) {
      if (!desc.meshes)
        return null;
      return desc.meshes.map(
        ({
          primitives,
          // required
          weights,
          // optional
          name,
          // optional
          extensions,
          // optional
          extras
          // optional
        }, meshIndex) => {
          let numInstances = 0;
          let skinIndices = [];
          let isLightmap = false;
          desc.nodes && desc.nodes.forEach(({ mesh, skin, extras: extras2 }) => {
            if (mesh === meshIndex) {
              numInstances++;
              if (skin !== void 0)
                skinIndices.push(skin);
              if (extras2 && extras2.lightmap_scale_offset)
                isLightmap = true;
            }
          });
          let isSkin = !!skinIndices.length;
          if (isSkin) {
            primitives = skinIndices.map((skinIndex) => {
              return this.parsePrimitives(gl, primitives, desc, bufferViews, materials, 1, isLightmap).map(
                ({ geometry, program, mode }) => {
                  const mesh = new GLTFSkin(gl, { skeleton: skins[skinIndex], geometry, program, mode });
                  mesh.name = name;
                  mesh.frustumCulled = false;
                  return mesh;
                }
              );
            });
            primitives.instanceCount = 0;
            primitives.numInstances = numInstances;
          } else {
            primitives = this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap).map(
              ({ geometry, program, mode }) => {
                const meshConstructor = geometry.attributes.instanceMatrix ? InstancedMesh : Mesh;
                const mesh = new meshConstructor(gl, { geometry, program, mode });
                mesh.name = name;
                mesh.numInstances = numInstances;
                return mesh;
              }
            );
          }
          return {
            primitives,
            weights,
            name
          };
        }
      );
    }
    static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap) {
      return primitives.map(
        ({
          attributes,
          // required
          indices,
          // optional
          material: materialIndex,
          // optional
          mode = 4,
          // optional
          targets,
          // optional
          extensions,
          // optional
          extras
          // optional
        }) => {
          const program = new NormalProgram(gl);
          if (materialIndex !== void 0) {
            program.gltfMaterial = materials[materialIndex];
          }
          const geometry = new Geometry(gl);
          for (let attr in attributes) {
            geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
          }
          if (indices !== void 0) {
            geometry.addAttribute("index", this.parseAccessor(indices, desc, bufferViews));
          }
          if (numInstances > 1) {
            geometry.addAttribute("instanceMatrix", {
              instanced: 1,
              size: 16,
              data: new Float32Array(numInstances * 16)
            });
          }
          if (isLightmap) {
            geometry.addAttribute("lightmapScaleOffset", {
              instanced: 1,
              size: 4,
              data: new Float32Array(numInstances * 4)
            });
          }
          return {
            geometry,
            program,
            mode
          };
        }
      );
    }
    static parseAccessor(index, desc, bufferViews) {
      const {
        bufferView: bufferViewIndex,
        // optional
        byteOffset = 0,
        // optional
        componentType,
        // required
        normalized = false,
        // optional
        count,
        // required
        type,
        // required
        min,
        // optional
        max,
        // optional
        sparse
        // optional
        // name, // optional
        // extensions, // optional
        // extras, // optional
      } = desc.accessors[index];
      const {
        data,
        // attached in parseBufferViews
        buffer,
        // replaced to be the actual GL buffer
        byteOffset: bufferByteOffset = 0,
        // byteLength, // applied in parseBufferViews
        byteStride = 0,
        target
        // name,
        // extensions,
        // extras,
      } = bufferViews[bufferViewIndex];
      const size = TYPE_SIZE[type];
      const TypeArray = TYPE_ARRAY[componentType];
      const elementBytes = TypeArray.BYTES_PER_ELEMENT;
      const componentStride = byteStride / elementBytes;
      const isInterleaved = !!byteStride && componentStride !== size;
      let filteredData;
      if (isInterleaved) {
        const typedData = new TypeArray(data, byteOffset);
        filteredData = new TypeArray(count * size);
        for (let i2 = 0; i2 < count; i2++) {
          const start = componentStride * i2;
          const end = start + size;
          filteredData.set(typedData.slice(start, end), i2 * size);
        }
      } else {
        filteredData = new TypeArray(data, byteOffset, count * size);
      }
      return {
        data: filteredData,
        size,
        type: componentType,
        normalized,
        buffer,
        stride: byteStride,
        offset: byteOffset,
        count,
        min,
        max
      };
    }
    static parseNodes(gl, desc, meshes, skins, images) {
      if (!desc.nodes)
        return null;
      const nodes = desc.nodes.map(
        ({
          camera,
          // optional
          children,
          // optional
          skin: skinIndex,
          // optional
          matrix,
          // optional
          mesh: meshIndex,
          // optional
          rotation,
          // optional
          scale: scale5,
          // optional
          translation,
          // optional
          weights,
          // optional
          name,
          // optional
          extensions,
          // optional
          extras
          // optional
        }) => {
          const node = new Transform();
          if (name)
            node.name = name;
          node.extras = extras;
          node.extensions = extensions;
          if (extras && extras.lightmapTexture !== void 0) {
            extras.lightmapTexture.texture = this.createTexture(gl, desc, images, { source: extras.lightmapTexture.index });
          }
          if (matrix) {
            node.matrix.copy(matrix);
            node.decompose();
          } else {
            if (rotation)
              node.quaternion.copy(rotation);
            if (scale5)
              node.scale.copy(scale5);
            if (translation)
              node.position.copy(translation);
            node.updateMatrix();
          }
          let isInstanced = false;
          let isFirstInstance = true;
          let isInstancedMatrix = false;
          let isSkin = skinIndex !== void 0;
          if (meshIndex !== void 0) {
            if (isSkin) {
              meshes[meshIndex].primitives[meshes[meshIndex].primitives.instanceCount].forEach((mesh) => {
                mesh.extras = extras;
                mesh.setParent(node);
              });
              meshes[meshIndex].primitives.instanceCount++;
              if (meshes[meshIndex].primitives.instanceCount === meshes[meshIndex].primitives.numInstances) {
                delete meshes[meshIndex].primitives.numInstances;
                delete meshes[meshIndex].primitives.instanceCount;
              }
            } else {
              meshes[meshIndex].primitives.forEach((mesh) => {
                mesh.extras = extras;
                if (mesh.geometry.isInstanced) {
                  isInstanced = true;
                  if (!mesh.instanceCount) {
                    mesh.instanceCount = 0;
                  } else {
                    isFirstInstance = false;
                  }
                  if (mesh.geometry.attributes.instanceMatrix) {
                    isInstancedMatrix = true;
                    node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
                  }
                  if (mesh.geometry.attributes.lightmapScaleOffset) {
                    mesh.geometry.attributes.lightmapScaleOffset.data.set(extras.lightmap_scale_offset, mesh.instanceCount * 4);
                  }
                  mesh.instanceCount++;
                  if (mesh.instanceCount === mesh.numInstances) {
                    delete mesh.numInstances;
                    delete mesh.instanceCount;
                    if (mesh.geometry.attributes.instanceMatrix) {
                      mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
                    }
                    if (mesh.geometry.attributes.lightmapScaleOffset) {
                      mesh.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
                    }
                  }
                }
                if (isInstanced) {
                  if (isFirstInstance)
                    mesh.setParent(node);
                } else {
                  mesh.setParent(node);
                }
              });
            }
          }
          if (isInstancedMatrix) {
            if (!isFirstInstance)
              return null;
            node.matrix.identity();
            node.decompose();
          }
          return node;
        }
      );
      desc.nodes.forEach(({ children = [] }, i2) => {
        children.forEach((childIndex) => {
          if (!nodes[childIndex])
            return;
          nodes[childIndex].setParent(nodes[i2]);
        });
      });
      meshes.forEach(({ primitives }, i2) => {
        primitives.forEach((primitive, i3) => {
          if (primitive.isInstancedMesh)
            primitive.addFrustumCull();
        });
      });
      return nodes;
    }
    static populateSkins(skins, nodes) {
      if (!skins)
        return;
      skins.forEach((skin) => {
        skin.joints = skin.joints.map((i2, index) => {
          const joint = nodes[i2];
          joint.skin = skin;
          joint.bindInverse = new Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
          return joint;
        });
        if (skin.skeleton)
          skin.skeleton = nodes[skin.skeleton];
      });
    }
    static parseAnimations(gl, desc, nodes, bufferViews) {
      if (!desc.animations)
        return null;
      return desc.animations.map(
        ({
          channels,
          // required
          samplers,
          // required
          name
          // optional
          // extensions, // optional
          // extras,  // optional
        }, animationIndex) => {
          const data = channels.map(
            ({
              sampler: samplerIndex,
              // required
              target
              // required
              // extensions, // optional
              // extras, // optional
            }) => {
              const {
                input: inputIndex,
                // required
                interpolation = "LINEAR",
                output: outputIndex
                // required
                // extensions, // optional
                // extras, // optional
              } = samplers[samplerIndex];
              const {
                node: nodeIndex,
                // optional - TODO: when is it not included?
                path
                // required
                // extensions, // optional
                // extras, // optional
              } = target;
              const node = nodes[nodeIndex];
              const transform = TRANSFORMS[path];
              const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
              const values = this.parseAccessor(outputIndex, desc, bufferViews).data;
              if (!node.animations)
                node.animations = [];
              if (!node.animations.includes(animationIndex))
                node.animations.push(animationIndex);
              return {
                node,
                transform,
                interpolation,
                times,
                values
              };
            }
          );
          return {
            name,
            animation: new GLTFAnimation(data)
          };
        }
      );
    }
    static parseScenes(desc, nodes) {
      if (!desc.scenes)
        return null;
      return desc.scenes.map(
        ({
          nodes: nodesIndices = [],
          name,
          // optional
          extensions,
          extras
        }) => {
          const scene = nodesIndices.reduce((map2, i2) => {
            if (nodes[i2])
              map2.push(nodes[i2]);
            return map2;
          }, []);
          scene.extras = extras;
          return scene;
        }
      );
    }
    static parseLights(gl, desc, nodes, scenes) {
      const lights = {
        directional: [],
        point: [],
        spot: []
      };
      scenes.forEach((scene) => scene.forEach((node) => node.updateMatrixWorld()));
      const lightsDescArray = desc.extensions?.KHR_lights_punctual?.lights || [];
      nodes.forEach((node) => {
        if (!node?.extensions?.KHR_lights_punctual)
          return;
        const lightIndex = node.extensions.KHR_lights_punctual.light;
        const lightDesc = lightsDescArray[lightIndex];
        const light = {
          name: lightDesc.name || "",
          color: { value: new Vec3().set(lightDesc.color || 1) }
        };
        if (lightDesc.intensity !== void 0)
          light.color.value.multiply(lightDesc.intensity);
        switch (lightDesc.type) {
          case "directional":
            light.direction = { value: new Vec3(0, 0, 1).transformDirection(node.worldMatrix) };
            break;
          case "point":
            light.position = { value: new Vec3().applyMatrix4(node.worldMatrix) };
            light.distance = { value: lightDesc.range };
            light.decay = { value: 2 };
            break;
          case "spot":
            Object.assign(light, lightDesc);
            break;
        }
        lights[lightDesc.type].push(light);
      });
      return lights;
    }
  };

  // src/gl/_camera.js
  var camera_default = class extends Camera {
    constructor(gl, { fov = 25 }) {
      super();
      this.gl = gl;
      this.fov = fov;
    }
    get fovInRad() {
      return this.fov * Math.PI / 180;
    }
    getViewSize(ratio) {
      const height = Math.abs(this.position.z * Math.tan(this.fovInRad / 2) * 2);
      return { w: height * ratio, h: height };
    }
  };

  // src/assets/index.js
  var isLocal = false;
  var mtc = isLocal ? "http://localhost:8000/asset/mtc16.png" : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637d3fc6e06242f0d7c95_mtc16.webp";
  var mtc2 = isLocal ? "http://localhost:8000/asset/mtc3.png" : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637d30b73cf212f61b644_mtc3.webp";
  var cube = isLocal ? "http://localhost:8000/asset/cube8.glb" : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637ab023b9146c71771e3_cube8.glb.txt";
  var col_map = isLocal ? "http://localhost:8000/asset/col_map.jpg" : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/6558b79dde12de54c5a514a9_col_map.webp";
  var ASSETS = {
    mtc,
    mtc2,
    col_map,
    cube
  };

  // src/gl/util/texture-loader.js
  async function loadTexture(gl, path) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = path;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const texture = new Texture(gl, { image: img });
        resolve(texture);
      };
    });
  }

  // src/gl/util/model-loader.js
  async function loadModel(gl, path) {
    return GLTFLoader.load(gl, path);
  }

  // src/gl/util/loader.js
  var Loader = class {
    constructor(gl) {
      this.gl = gl;
    }
    async load() {
      let [mtc3, mtc22, col_map2, cube2] = await Promise.all([
        loadTexture(this.gl, ASSETS.mtc),
        loadTexture(this.gl, ASSETS.mtc2),
        loadTexture(this.gl, ASSETS.col_map),
        loadModel(this.gl, ASSETS.cube)
      ]);
      col_map2.flipY = false;
      cube2 = cube2.scene[0];
      return {
        mtc: mtc3,
        mtc2: mtc22,
        col_map: col_map2,
        cube: cube2
      };
    }
  };

  // src/gl/mat/cube/vertex.vert
  var vertex_default = "#define MPI 3.1415926538\n#define MTAU 6.28318530718\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float u_time;\n\nvarying vec3 v_normal;\nvarying vec3 v_view;\nvarying vec2 v_uv;\n\n\nvoid main() {\n  vec3 pos = position;\n\n  vec4 transformed = modelViewMatrix * vec4(pos, 1.0);\n  v_view = normalize(- transformed.xyz);\n  gl_Position = projectionMatrix * transformed;\n\n  v_normal = normalize(normalMatrix * normal);\n  v_uv = uv;\n}\n";

  // src/gl/mat/cube/fragment.frag
  var fragment_default = "precision highp float;\n\nvarying vec3 v_normal;\nvarying vec2 v_uv;\nvarying vec4 v_color;\nvarying vec3 v_view;\nuniform float u_time;\n\nuniform sampler2D u_mtc1;\nuniform sampler2D u_mtc2;\nuniform sampler2D u_col_map;\n\nvec3 COL_BG = vec3(0.058823529411764705, 0.058823529411764705, 0.058823529411764705);\n\n\nuniform float u_a_hover;\nuniform float u_a_solved;\n// uniform vec2 u_a_mouse;\n\nvoid main() {\n    vec3 color_map = texture2D(u_col_map, v_uv).rgb;\n\n    // (FRAGMENT)\n    vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));\n    vec3 y = cross(v_view, x);\n    vec2 fakeUv = vec2(dot(x, v_normal), dot(y, v_normal)) * .495 + .5;\n    vec3 mtc1 = texture2D(u_mtc1, fakeUv).rgb;\n    vec3 mtc2 = texture2D(u_mtc2, fakeUv).rgb;\n\n    \n    float split = 1. - step(v_uv.y, .5);\n    float mixing_value = (1. - fakeUv.y);\n    vec3 mtc = mix(mtc1, mtc2, split);\n    mtc = mix(mtc, mtc2, split * mixing_value);\n    mtc = mix(COL_BG * .9, vec3(1.), mtc);\n\n    vec3 col = mtc;\n\n    // * hover \n    float rev_split = 1. - split;\n    col = mix(\n        mtc, \n        mtc * .1, \n        rev_split * u_a_hover\n    ); \n\n    // mix w/ color map\n    col = mix(\n        col, \n        // mtc / (1. + color_map * 1.), \n        col + color_map * .1, \n        rev_split * u_a_hover\n    ); \n\n    col = mix(\n        col, \n        col + color_map, \n        rev_split * u_a_solved\n    );\n    \n\n\n\n    \n\n\n    gl_FragColor.rgb = col;\n    // gl_FragColor.rgb = vec3(color_map);\n    gl_FragColor.a = 1.0;\n}\n\n\n    // + lights\n    // float ptl = dot(normalize(vec3(u_a_mouse.x, u_a_mouse.y, 1.)), v_normal);\n    // col *= ptl * .5;";

  // src/gl/mat/cube/index.js
  var cube_default = class extends Program {
    a = {
      hover: 0,
      solved: 0
    };
    constructor(gl, options = {}) {
      super(gl, {
        vertex: vertex_default,
        fragment: fragment_default,
        transparent: true,
        cullFace: null
      });
      this.uniforms = {
        u_time: { value: 0 },
        u_mtc1: { value: options.mtc1 },
        u_mtc2: { value: options.mtc2 },
        u_col_map: { value: window.app.gl.scene.asset.col_map },
        u_a_hover: { value: 0 },
        u_a_mouse: { value: [0, 0] },
        u_a_solved: { value: 0 }
      };
    }
    set time(t2) {
      this.uniforms.u_time.value = t2;
      this.uniforms.u_a_hover.value = this.a.hover;
    }
    set hover(v) {
    }
  };

  // src/gl/util/spinner.js
  var Spinner = class {
    spin = { x: 0, y: 0, mult: 0.8 };
    velocity = { x: 0.05, y: 0.05 };
    pointerDown = false;
    pointer = {
      x: 0,
      y: 0
    };
    constructor() {
      this.addEvents();
    }
    addEvents() {
      if ("ontouchmove" in window) {
        window.addEventListener("touchstart", this.mouseDown.bind(this));
        window.addEventListener("touchmove", this.mouseMove.bind(this));
        window.addEventListener("touchend", this.mouseUp.bind(this));
      } else {
        window.addEventListener("mousedown", this.mouseDown.bind(this));
        window.addEventListener("mousemove", this.mouseMove.bind(this));
        window.addEventListener("mouseup", this.mouseUp.bind(this));
        window.addEventListener("mouseleave", this.mouseUp.bind(this));
      }
    }
    mouseDown(e2) {
      this.pointerDown = true;
      this.spin.mult = 1;
      this.pointer.x = e2.touches ? e2.touches[0].clientX : e2.clientX;
      this.pointer.y = e2.touches ? e2.touches[0].clientY : e2.clientY;
    }
    mouseMove(e2) {
      const x = e2.touches ? e2.touches[0].clientX : e2.clientX;
      const y = e2.touches ? e2.touches[0].clientY : e2.clientY;
      this.velocity.x += (x - this.pointer.x) * 2e-3 * this.spin.mult;
      this.velocity.y += (y - this.pointer.y) * 2e-3 * this.spin.mult;
      this.pointer.x = x;
      this.pointer.y = y;
    }
    mouseUp() {
      this.pointerDown = false;
      this.spin.mult = 0.8;
    }
    render() {
      this.velocity.x *= 0.97;
      this.velocity.y *= 0.97;
      this.spin.x += this.velocity.x + Math.sign(this.velocity.x) * 5e-3 * (1 - Number(this.pointerDown));
      this.spin.y += this.velocity.y + Math.sign(this.velocity.y) * 5e-3 * (1 - Number(this.pointerDown));
    }
  };

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/utils/paths.js
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG2 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _roundingNum = 1e5;
  var _round3 = function _round4(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  function transformRawPath(rawPath, a, b, c, d, tx, ty) {
    var j = rawPath.length, segment, l, i2, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i2 = 0; i2 < l; i2 += 2) {
        x = segment[i2];
        y = segment[i2 + 1];
        segment[i2] = x * a + y * c + tx;
        segment[i2 + 1] = x * b + y * d + ty;
      }
    }
    rawPath._dirty = 1;
    return rawPath;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle2, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs(rx);
    ry = _abs(ry);
    var angleRad = angle2 % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i2;
    for (i2 = 0; i2 < segments; i2++) {
      angle2 = angleStart + i2 * angleIncrement;
      x1 = _cos2(angle2);
      y1 = _sin2(angle2);
      ux = _cos2(angle2 += angleIncrement);
      uy = _sin2(angle2);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i2 = 0; i2 < rawPath.length; i2 += 2) {
      x1 = rawPath[i2];
      y1 = rawPath[i2 + 1];
      rawPath[i2] = x1 * ma + y1 * mc + cx;
      rawPath[i2 + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i2 - 2] = x;
    rawPath[i2 - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n2 = +m;
      return n2 < 1e-4 && n2 > -1e-4 ? 0 : n2;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i2, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i2 = 0; i2 < elements; i2++) {
      prevCommand = command;
      if (isNaN(a[i2])) {
        command = a[i2].toUpperCase();
        isRelative = command !== a[i2];
      } else {
        i2--;
      }
      x = +a[i2 + 1];
      y = +a[i2 + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i2) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i2 += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i2 + 3] * 1, relativeY + a[i2 + 4] * 1, relativeX += a[i2 + 5] * 1, relativeY += a[i2 + 6] * 1);
        i2 += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i2 + 3] * 1, relativeY += a[i2 + 4] * 1);
        i2 += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i2 + 3] * 1;
        relativeY += a[i2 + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i2 += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i2 += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i2 += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i2 += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i2 += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i2 + 4];
        flag2 = a[i2 + 5];
        difX = a[i2 + 6];
        difY = a[i2 + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i2 + 1], +a[i2 + 2], +a[i2 + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i2 += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i2 = segment.length;
    if (i2 < 6) {
      path.pop();
      i2 = 0;
    } else if (segment[0] === segment[i2 - 2] && segment[1] === segment[i2 - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i2;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s2, i2, segment;
    for (s2 = 0; s2 < l; s2++) {
      segment = rawPath[s2];
      result += "M" + _round3(segment[0]) + "," + _round3(segment[1]) + " C";
      sl = segment.length;
      for (i2 = 2; i2 < sl; i2++) {
        result += _round3(segment[i2++]) + "," + _round3(segment[i2++]) + " " + _round3(segment[i2++]) + "," + _round3(segment[i2++]) + " " + _round3(segment[i2++]) + "," + _round3(segment[i2]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/.pnpm/@gsap+shockingly@3.12.2/node_modules/@gsap/shockingly/CustomEase.js
  var gsap4;
  var _coreInitted4;
  var _getGSAP3 = function _getGSAP4() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _initCore7 = function _initCore8() {
    gsap4 = _getGSAP3();
    if (gsap4) {
      gsap4.registerEase("_CE", CustomEase.create);
      _coreInitted4 = 1;
    } else {
      console.warn("Please gsap.registerPlugin(CustomEase)");
    }
  };
  var _bigNum3 = 1e20;
  var _round5 = function _round6(value) {
    return ~~(value * 1e3 + (value < 0 ? -0.5 : 0.5)) / 1e3;
  };
  var _bonusValidated3 = 1;
  var _numExp2 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi;
  var _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g;
  var _findMinimum = function _findMinimum2(values) {
    var l = values.length, min = _bigNum3, i2;
    for (i2 = 1; i2 < l; i2 += 6) {
      +values[i2] < min && (min = +values[i2]);
    }
    return min;
  };
  var _normalize = function _normalize2(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }
    var tx = +values[0] * -1, ty = -originY, l = values.length, sx = 1 / (+values[l - 2] + tx), sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty), i2;
    if (sy) {
      sy = 1 / sy;
    } else {
      sy = -sx;
    }
    for (i2 = 0; i2 < l; i2 += 2) {
      values[i2] = (+values[i2] + tx) * sx;
      values[i2 + 1] = (+values[i2 + 1] + ty) * sy;
    }
  };
  var _bezierToPoints = function _bezierToPoints2(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
    var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length3;
    if (!points) {
      points = [{
        x: x1,
        y: y1
      }, {
        x: x4,
        y: y4
      }];
      index = 1;
    }
    points.splice(index || points.length - 1, 0, {
      x: x1234,
      y: y1234
    });
    if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
      length3 = points.length;
      _bezierToPoints2(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
      _bezierToPoints2(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length3));
    }
    return points;
  };
  var CustomEase = /* @__PURE__ */ function() {
    function CustomEase2(id, data, config3) {
      _coreInitted4 || _initCore7();
      this.id = id;
      _bonusValidated3 && this.setData(data, config3);
    }
    var _proto = CustomEase2.prototype;
    _proto.setData = function setData(data, config3) {
      config3 = config3 || {};
      data = data || "0,0,1,1";
      var values = data.match(_numExp2), closest = 1, points = [], lookup = [], precision = config3.precision || 1, fast = precision <= 1, l, a1, a2, i2, inc, j, point, prevPoint, p;
      this.data = data;
      if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
        values = stringToRawPath(data)[0];
      }
      l = values.length;
      if (l === 4) {
        values.unshift(0, 0);
        values.push(1, 1);
        l = 8;
      } else if ((l - 2) % 6) {
        throw "Invalid CustomEase";
      }
      if (+values[0] !== 0 || +values[l - 2] !== 1) {
        _normalize(values, config3.height, config3.originY);
      }
      this.segment = values;
      for (i2 = 2; i2 < l; i2 += 6) {
        a1 = {
          x: +values[i2 - 2],
          y: +values[i2 - 1]
        };
        a2 = {
          x: +values[i2 + 4],
          y: +values[i2 + 5]
        };
        points.push(a1, a2);
        _bezierToPoints(a1.x, a1.y, +values[i2], +values[i2 + 1], +values[i2 + 2], +values[i2 + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
      }
      l = points.length;
      for (i2 = 0; i2 < l; i2++) {
        point = points[i2];
        prevPoint = points[i2 - 1] || point;
        if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
          prevPoint.cx = point.x - prevPoint.x;
          prevPoint.cy = point.y - prevPoint.y;
          prevPoint.n = point;
          prevPoint.nx = point.x;
          if (fast && i2 > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i2 - 2].cy / points[i2 - 2].cx) > 2) {
            fast = 0;
          }
          if (prevPoint.cx < closest) {
            if (!prevPoint.cx) {
              prevPoint.cx = 1e-3;
              if (i2 === l - 1) {
                prevPoint.x -= 1e-3;
                closest = Math.min(closest, 1e-3);
                fast = 0;
              }
            } else {
              closest = prevPoint.cx;
            }
          }
        } else {
          points.splice(i2--, 1);
          l--;
        }
      }
      l = 1 / closest + 1 | 0;
      inc = 1 / l;
      j = 0;
      point = points[0];
      if (fast) {
        for (i2 = 0; i2 < l; i2++) {
          p = i2 * inc;
          if (point.nx < p) {
            point = points[++j];
          }
          a1 = point.y + (p - point.x) / point.cx * point.cy;
          lookup[i2] = {
            x: p,
            cx: inc,
            y: a1,
            cy: 0,
            nx: 9
          };
          if (i2) {
            lookup[i2 - 1].cy = a1 - lookup[i2 - 1].y;
          }
        }
        lookup[l - 1].cy = points[points.length - 1].y - a1;
      } else {
        for (i2 = 0; i2 < l; i2++) {
          if (point.nx < i2 * inc) {
            point = points[++j];
          }
          lookup[i2] = point;
        }
        if (j < points.length - 1) {
          lookup[i2 - 1] = points[points.length - 2];
        }
      }
      this.ease = function(p2) {
        var point2 = lookup[p2 * l | 0] || lookup[l - 1];
        if (point2.nx < p2) {
          point2 = point2.n;
        }
        return point2.y + (p2 - point2.x) / point2.cx * point2.cy;
      };
      this.ease.custom = this;
      this.id && gsap4 && gsap4.registerEase(this.id, this.ease);
      return this;
    };
    _proto.getSVGData = function getSVGData(config3) {
      return CustomEase2.getSVGData(this, config3);
    };
    CustomEase2.create = function create(id, data, config3) {
      return new CustomEase2(id, data, config3).ease;
    };
    CustomEase2.register = function register2(core) {
      gsap4 = core;
      _initCore7();
    };
    CustomEase2.get = function get(id) {
      return gsap4.parseEase(id);
    };
    CustomEase2.getSVGData = function getSVGData(ease, config3) {
      config3 = config3 || {};
      var width = config3.width || 100, height = config3.height || 100, x = config3.x || 0, y = (config3.y || 0) + height, e2 = gsap4.utils.toArray(config3.path)[0], a, slope, i2, inc, tx, ty, precision, threshold, prevX, prevY;
      if (config3.invert) {
        height = -height;
        y = 0;
      }
      if (typeof ease === "string") {
        ease = gsap4.parseEase(ease);
      }
      if (ease.custom) {
        ease = ease.custom;
      }
      if (ease instanceof CustomEase2) {
        a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
      } else {
        a = [x, y];
        precision = Math.max(5, (config3.precision || 1) * 200);
        inc = 1 / precision;
        precision += 2;
        threshold = 5 / precision;
        prevX = _round5(x + inc * width);
        prevY = _round5(y + ease(inc) * -height);
        slope = (prevY - y) / (prevX - x);
        for (i2 = 2; i2 < precision; i2++) {
          tx = _round5(x + i2 * inc * width);
          ty = _round5(y + ease(i2 * inc) * -height);
          if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i2 === precision - 1) {
            a.push(prevX, prevY);
            slope = (ty - prevY) / (tx - prevX);
          }
          prevX = tx;
          prevY = ty;
        }
        a = "M" + a.join(",");
      }
      e2 && e2.setAttribute("d", a);
      return a;
    };
    return CustomEase2;
  }();
  _getGSAP3() && gsap4.registerPlugin(CustomEase);
  CustomEase.version = "3.12.2";

  // src/util/ease.js
  gsapWithCSS.registerPlugin(CustomEase);
  var bounceEase = CustomEase.create(
    "custom",
    "M0,0 C0.126,0.382 0.18,0.726 0.241,0.726 0.397,0.726 0.482,-0.234 0.619,-0.234 0.746,-0.234 0.768,0 1,0 "
  );

  // src/gl/cube.js
  var Cube = class extends Transform {
    start = 0;
    a = {
      mx: 0,
      my: 0,
      scale: 0.1,
      lspeed: 0,
      initial: 3,
      c_hover: 0,
      click: 0
    };
    cb = {
      isSolved: false,
      rotateAxis: true
    };
    constructor(gl, { mesh, mtc1, mtc2: mtc22 } = {}) {
      super();
      this.gl = gl;
      this.ctrl = new Transform();
      this.ctrl.setParent(this);
      this.mat = new cube_default(this.gl, {
        mtc1,
        mtc2: mtc22
      });
      this.mesh = mesh;
      this.mesh.children.forEach((m) => m.children[0].program = this.mat);
      this.mesh.setParent(this.ctrl);
      const scale5 = this.a.scale;
      this.mesh.scale.set(scale5, scale5, scale5);
      this.spinner = new Spinner();
      gsapWithCSS.to(this.a, {
        initial: 0,
        ease: "back.out",
        duration: 1.2
      });
      this.startInterval();
      this.initEvents();
    }
    startInterval(start = true) {
      let d = 0.8;
      if (start) {
        this.interval = setInterval(() => this.scramble(d), d * 2100);
      } else {
        this.shouldReset = true;
        clearInterval(this.interval);
      }
    }
    resetCube() {
      this.shouldReset = false;
      this.mesh.children.forEach((m) => m.rotation.y = 0);
      this.ctrl.rotation.x = 0;
      this.ctrl.rotation.z = 0;
    }
    scramble(dur) {
      this.start++;
      if (this.start > 2)
        this.start = 0;
      const base = this.mesh.children[this.start].rotation.y;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const amount = Math.random() > 0.5 ? Math.PI / 2 : Math.PI;
      const ease = Math.random() > 0.5 ? "slow.out" : "back.inOut";
      gsapWithCSS.to(this.mesh.children[this.start].rotation, {
        y: base + amount * direction,
        duration: dur,
        ease,
        onComplete: () => {
          if (this.shouldReset) {
            this.resetCube();
          } else {
            if (!this.cb.rotateAxis)
              return;
            Math.random() > 0.5 ? this.ctrl.rotation.z = this.ctrl.rotation.z + Math.PI / 2 : this.ctrl.rotation.x = this.ctrl.rotation.x + Math.PI / 2;
          }
        }
      });
    }
    render(t2) {
      this.a.lspeed = lerp(this.a.lspeed, window.sscroll.speed * 0.015, 0.05);
      this.spinner.render(t2);
      const rt = t2 * 0.01;
      let rx = this.spinner.spin.y * 0.1 + rt;
      let ry = this.spinner.spin.x * 0.1 + rt;
      if (!window.isMobile) {
        this.a.mx = lerp(this.a.mx, this.spinner.velocity.x, 0.1);
        this.a.my = lerp(this.a.my, -this.spinner.velocity.y, 0.1);
        this.position.x = this.a.mx * 0.5;
      }
      let z = 0;
      let y = 0;
      if (!window.isDebug) {
        y = window.sscroll.percent * 0.45 + // move up on percent
        this.a.lspeed + // move on speed
        this.a.initial;
        this.a.scale = 0.1 + window.sscroll.percent * (window.isMobile ? 0 : 0.05) + this.mat.a.hover * 0.02;
        rx += window.sscroll.a.lp * 5;
        ry += window.sscroll.a.lp * 5;
        z = Math.abs(Math.sin(this.position.x)) - Math.abs(Math.sin(this.position.y));
      }
      this.mesh.scale.set(this.a.scale, this.a.scale, this.a.scale);
      this.position.z = -z - this.a.click;
      this.position.y = y + this.a.my * 1;
      this.rotation.x = rx + this.a.click * 0.2;
      this.rotation.y = ry + this.a.click * 0.2;
      this.mat.time = t2;
    }
    resize() {
    }
    /** Init Events */
    initEvents() {
      if (!window.isMobile) {
        [...document.querySelectorAll("[data-a='cta']")].forEach((el) => {
          el.addEventListener("mouseenter", () => this.mouseCta(1));
          el.addEventListener("mouseleave", () => this.mouseCta(0));
        });
        document.addEventListener("keydown", (e2) => {
          if (e2.key === "!") {
            this.solveCube();
          }
        });
      }
      let locked = false;
      document.addEventListener("click", () => {
        if (locked)
          return;
        locked = true;
        gsapWithCSS.to(this.a, {
          click: 5,
          duration: 1.6,
          ease: bounceEase,
          onComplete: () => locked = false
        });
      });
    }
    /** Animations */
    mouseCta(val = 0) {
      if (this.cb.isSolved)
        return;
      val > 0.5 ? this.cb.rotateAxis = false : null;
      if (this.mouseCtaAnimation)
        this.mouseCtaAnimation.kill();
      this.mouseCtaAnimation = gsapWithCSS.to(this.mat.a, {
        hover: val,
        ease: "expo.out",
        duration: 1.2,
        onComplete: () => {
          if (val < 0.5) {
            this.startInterval(false);
            this.startInterval();
          }
        }
      });
    }
    animateFormSuccess() {
      this.solveCube();
    }
    solveCube() {
      this.cb.isSolved = true;
      this.startInterval(false);
      this.animateBg();
      gsapWithCSS.to(this.mat.uniforms.u_a_solved, {
        value: 1,
        duration: 1.8,
        delay: 0.4,
        ease: "elastic.out",
        onComplete: () => {
          setTimeout(() => {
            this.cb.rotateAxis = false;
            this.startInterval();
          }, 1e3);
        }
      });
    }
    animateBg() {
      const black = getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      );
      const colors = ["#b71234", "#0046ad"];
      gsapWithCSS.to("html", {
        "--black": colors[Math.floor(Math.random() * colors.length)],
        duration: 1.2,
        delay: 0.4,
        ease: "elastic.out",
        onComplete: () => {
          gsapWithCSS.to("html", {
            "--black": black,
            duration: 1.2,
            delay: 0.4,
            ease: "slow.inOut"
          });
        }
      });
    }
  };

  // src/gl/_scene.js
  var scene_default = class extends Transform {
    constructor(gl, data = {}) {
      super();
      this.gl = gl;
      this.isOn = true;
      this.load();
    }
    async load() {
      this.loader = new Loader(this.gl);
      this.asset = await this.loader.load();
      this.create();
    }
    create() {
      this.g = new Transform();
      this.cube = new Cube(this.gl, {
        mesh: this.asset.cube,
        mtc1: this.asset.mtc,
        mtc2: this.asset.mtc2
      });
      this.cube.setParent(this.g);
      this.g.setParent(this);
      if (!window.isDebug)
        this.g.position.y -= 0.5;
    }
    render(t2) {
      if (!this.isOn)
        return;
      this.cube?.render(t2);
    }
    resize(vp) {
      this.vp = vp;
      if (this.quad)
        this.quad.resize(vp);
    }
  };

  // src/gl/gl.js
  var gl_default = class {
    constructor() {
      this.wrapper = document.querySelector("[data-gl='c']");
      this.vp = {
        dpr: Math.min(window.devicePixelRatio, 2)
      };
      this.renderer = new Renderer({ dpr: 2, antialias: true, alpha: true });
      this.gl = this.renderer.gl;
      this.gl.clearColor(0, 0, 0, 0);
      this.wrapper.appendChild(this.gl.canvas);
      this.camera = new camera_default(this.gl, {});
      this.camera.position.set(0, 0, 5);
      this.scene = new scene_default(this.gl);
      this.time = 0;
      this.m = {
        x: 0,
        y: 0,
        mx: 0,
        my: 0,
        mex: 0,
        mey: 0,
        ex: 0,
        ey: 0
      };
      this.initEvents();
      this.render();
    }
    render(scroll = 0) {
      this.time += 0.5;
      this.m.ex = lerp(this.m.ex, this.m.x, 0.05);
      this.m.ey = lerp(this.m.ey, this.m.y, 0.05);
      this.m.mex = lerp(this.m.mex, this.m.mx, 0.03);
      this.controls?.update();
      this.scene?.render(this.time);
      window.requestAnimationFrame(this.render.bind(this));
      this.renderer.render({
        scene: this.scene,
        camera: this.camera
      });
    }
    initEvents() {
      new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(
        this.wrapper
      );
      window.addEventListener("mousemove", (e2) => {
        this.m.x = e2.clientX / this.vp.w * 2 - 1;
        this.m.y = e2.clientY / this.vp.h * -2 + 1;
        this.m.mx = (Math.abs(e2.movementX) + Math.abs(e2.movementY)) * 0.1;
      });
    }
    resize(entry) {
      const cw = entry ? entry.width : this.wrapper.clientWidth;
      const ch = entry ? entry.height : this.wrapper.clientHeight;
      this.vp.w = cw;
      this.vp.h = ch;
      this.vp.ratio = cw / ch;
      this.vp.viewSize = this.camera.getViewSize(this.vp.ratio);
      this.vp.viewRatio = this.vp.viewSize.w / this.vp.w;
      this.renderer.setSize(this.vp.w, this.vp.h);
      this.camera.perspective({
        aspect: this.vp.ratio
      });
      this.scene.resize(this.vp);
    }
  };

  // src/app.js
  var App = class {
    constructor() {
      this.body = document.querySelector("body");
      this.viewport = new Viewport();
      this.time = 0;
      this.resize();
      this.init();
    }
    init() {
      this.scroll = new Scroll();
      this.dom = new Dom();
      this.gl = new gl_default();
      this.initEvents();
      this.render();
    }
    initEvents() {
      new ResizeObserver((entry) => this.resize(entry[0])).observe(this.body);
    }
    resize({ contentRect } = {}) {
      window.isMobile = isTablet();
      this.viewport?.resize();
      this.dom?.resize();
    }
    render(t2) {
      this.scroll?.render(t2);
      this.dom?.render();
      window.requestAnimationFrame(this.render.bind(this));
    }
    /* Events */
  };
  window.isDebug = window.location.pathname === "/webgl";
  window.app = new App();
  (() => {
    setTimeout(() => {
      console.log(
        "%c%s",
        "font-size:10px; color:#fff; background:#000; padding: 10px 10px; margin: 20px 0px;",
        "CC HTTPS://FEDERIC.OOO \u{1F440}"
      );
    }, 1e3);
  })();
})();
/*! Bundled license information:

@gsap/shockingly/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/utils/strings.js:
  (*!
   * strings: 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/SplitText.js:
  (*!
   * SplitText: 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/ScrambleTextPlugin.js:
  (*!
   * ScrambleTextPlugin 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/utils/paths.js:
  (*!
   * paths 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@gsap/shockingly/CustomEase.js:
  (*!
   * CustomEase 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=app.js.map
