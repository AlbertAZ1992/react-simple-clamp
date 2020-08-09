(function (l, r) {
  if (l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd
    ? define(['react', 'react-dom'], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(global.React, global.ReactDOM));
})(this, function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest()
    );
  }

  var slicedToArray = _slicedToArray;

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function createCommonjsModule(fn, basedir, module) {
    return (
      (module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return commonjsRequire(path, base === undefined || base === null ? module.path : base);
        },
      }),
      fn(module, module.exports),
      module.exports
    );
  }

  function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] != 7
    );
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f = NASHORN_BUG
    ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      }
    : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
    f: f,
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value,
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function (it) {
        return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
      }
    : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings

  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject((val = fn.call(input)))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject((val = fn.call(input)))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject((val = fn.call(input))))
      return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine =
    !descriptors &&
    !fails(function () {
      return (
        Object.defineProperty(documentCreateElement('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a != 7
      );
    });

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$1 = descriptors
    ? nativeGetOwnPropertyDescriptor
    : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (ie8DomDefine)
          try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) {
            /* empty */
          }
        if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
      };

  var objectGetOwnPropertyDescriptor = {
    f: f$1,
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }
    return it;
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f$2 = descriptors
    ? nativeDefineProperty
    : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine)
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {
            /* empty */
          }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };

  var objectDefineProperty = {
    f: f$2,
  };

  var createNonEnumerableProperty = descriptors
    ? function (object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
      }
    : function (object, key, value) {
        object[key] = value;
        return object;
      };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }
    return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store;

  var functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    });
  });

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };

  if (nativeWeakMap) {
    var store$1 = new WeakMap$1();
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor,
  };

  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
      if (O === global_1) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;
      else createNonEnumerableProperty(O, key, value);
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return (typeof this == 'function' && getInternalState(this).source) || inspectSource(this);
    });
  });

  var path = global_1;

  var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2
      ? aFunction(path[namespace]) || aFunction(global_1[namespace])
      : (path[namespace] && path[namespace][method]) || (global_1[namespace] && global_1[namespace][method]);
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN((argument = +argument)) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        }
      else
        for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false),
  };

  var indexOf = arrayIncludes.indexOf;

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i)
      if (has(O, (key = names[i++]))) {
        ~indexOf(result, key) || result.push(key);
      }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var f$3 =
    Object.getOwnPropertyNames ||
    function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys$1);
    };

  var objectGetOwnPropertyNames = {
    f: f$3,
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
    f: f$4,
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys =
    getBuiltIn('Reflect', 'ownKeys') ||
    function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL
      ? true
      : value == NATIVE
      ? false
      : typeof detection == 'function'
      ? fails(detection)
      : !!detection;
  };

  var normalize = (isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  });

  var data = (isForced.data = {});
  var NATIVE = (isForced.NATIVE = 'N');
  var POLYFILL = (isForced.POLYFILL = 'P');

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target)
      for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        // extend global
        redefine(target, key, sourceProperty, options);
      }
  };

  var nativeSymbol =
    !!Object.getOwnPropertySymbols &&
    !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });

  var useSymbolAsUid =
    nativeSymbol &&
    // eslint-disable-next-line no-undef
    !Symbol.sham &&
    // eslint-disable-next-line no-undef
    typeof Symbol.iterator == 'symbol';

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray =
    Array.isArray ||
    function isArray(arg) {
      return classofRaw(arg) == 'Array';
    };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  var objectKeys =
    Object.keys ||
    function keys(O) {
      return objectKeysInternal(O, enumBugKeys);
    };

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors
    ? Object.defineProperties
    : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) objectDefineProperty.f(O, (key = keys[index++]), Properties[key]);
        return O;
      };

  var html = getBuiltIn('document', 'documentElement');

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () {
    /* empty */
  };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  var objectCreate =
    Object.create ||
    function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

  var toString$1 = {}.toString;

  var windowNames =
    typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames(it);
    } catch (error) {
      return windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
      ? getWindowNames(it)
      : nativeGetOwnPropertyNames(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
    f: f$5,
  };

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : (Symbol$1 && Symbol$1.withoutSetter) || uid;

  var wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name)) {
      if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
      else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };

  var f$6 = wellKnownSymbol;

  var wellKnownSymbolWrapped = {
    f: f$6,
  };

  var defineProperty = objectDefineProperty.f;

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has(Symbol, NAME))
      defineProperty(Symbol, NAME, {
        value: wellKnownSymbolWrapped.f(NAME),
      });
  };

  var defineProperty$1 = objectDefineProperty.f;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
      defineProperty$1(it, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var aFunction$1 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }
    return it;
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var SPECIES = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);
          if (TYPE) {
            if (IS_MAP) target[index] = result;
            // map
            else if (result)
              switch (TYPE) {
                case 3:
                  return true; // some
                case 5:
                  return value; // find
                case 6:
                  return index; // findIndex
                case 2:
                  push.call(target, value); // filter
              }
            else if (IS_EVERY) return false; // every
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
  };

  var $forEach = arrayIteration.forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE$1];
  var $Symbol = global_1.Symbol;
  var $stringify = getBuiltIn('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty$1 = objectDefineProperty.f;
  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore$1 = shared('wks');
  var QObject = global_1.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor =
    descriptors &&
    fails(function () {
      return (
        objectCreate(
          nativeDefineProperty$1({}, 'a', {
            get: function () {
              return nativeDefineProperty$1(this, 'a', { value: 7 }).a;
            },
          }),
        ).a != 7
      );
    })
      ? function (O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
          if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
          nativeDefineProperty$1(O, P, Attributes);
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
          }
        }
      : nativeDefineProperty$1;

  var wrap = function (tag, description) {
    var symbol = (AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]));
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description,
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var isSymbol = useSymbolAsUid
    ? function (it) {
        return typeof it == 'symbol';
      }
    : function (it) {
        return Object(it) instanceof $Symbol;
      };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);
    if (has(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
      }
      return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable$1.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || (has(this, HIDDEN) && this[HIDDEN][P])
      ? enumerable
      : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor
  if (!nativeSymbol) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState(this).tag;
    });

    redefine($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    wellKnownSymbolWrapped.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        },
      });
      {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
      }
    }
  }

  _export(
    { global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol },
    {
      Symbol: $Symbol,
    },
  );

  $forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name);
  });

  _export(
    { target: SYMBOL, stat: true, forced: !nativeSymbol },
    {
      // `Symbol.for` method
      // https://tc39.github.io/ecma262/#sec-symbol.for
      for: function (key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      },
      // `Symbol.keyFor` method
      // https://tc39.github.io/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
      },
      useSetter: function () {
        USE_SETTER = true;
      },
      useSimple: function () {
        USE_SETTER = false;
      },
    },
  );

  _export(
    { target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors },
    {
      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    },
  );

  _export(
    { target: 'Object', stat: true, forced: !nativeSymbol },
    {
      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
      // `Object.getOwnPropertySymbols` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
      getOwnPropertySymbols: $getOwnPropertySymbols,
    },
  );

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  _export(
    {
      target: 'Object',
      stat: true,
      forced: fails(function () {
        objectGetOwnPropertySymbols.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return objectGetOwnPropertySymbols.f(toObject(it));
      },
    },
  );

  // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY =
      !nativeSymbol ||
      fails(function () {
        var symbol = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        return (
          $stringify([symbol]) != '[null]' ||
          // WebKit converts symbol values to JSON as null
          $stringify({ a: symbol }) != '{}' ||
          // V8 throws on boxed symbols
          $stringify(Object(symbol)) != '{}'
        );
      });

    _export(
      { target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY },
      {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
          var args = [it];
          var index = 1;
          var $replacer;
          while (arguments.length > index) args.push(arguments[index++]);
          $replacer = replacer;
          if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
          if (!isArray(replacer))
            replacer = function (key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
          args[1] = replacer;
          return $stringify.apply(null, args);
        },
      },
    );
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
    createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return (
      engineV8Version >= 51 ||
      !fails(function () {
        var array = [];
        var constructor = (array.constructor = {});
        constructor[SPECIES$1] = function () {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      })
    );
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1fffffffffffff;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT =
    engineV8Version >= 51 ||
    !fails(function () {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export(
    { target: 'Array', proto: true, forced: FORCED },
    {
      concat: function concat(arg) {
        // eslint-disable-line no-unused-vars
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = toLength(E.length);
            if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
          } else {
            if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            createProperty(A, n++, E);
          }
        }
        A.length = n;
        return A;
      },
    },
  );

  var defineProperty$2 = Object.defineProperty;
  var cache = {};

  var thrower = function (it) {
    throw it;
  };

  var arrayMethodUsesToLength = function (METHOD_NAME, options) {
    if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
    if (!options) options = {};
    var method = [][METHOD_NAME];
    var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
    var argument0 = has(options, 0) ? options[0] : thrower;
    var argument1 = has(options, 1) ? options[1] : undefined;

    return (cache[METHOD_NAME] =
      !!method &&
      !fails(function () {
        if (ACCESSORS && !descriptors) return true;
        var O = { length: -1 };

        if (ACCESSORS) defineProperty$2(O, 1, { enumerable: true, get: thrower });
        else O[1] = 1;

        method.call(O, argument0, argument1);
      }));
  };

  var $filter = arrayIteration.filter;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
  // Edge 14- issue
  var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export(
    { target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH },
    {
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
    },
  );

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return (
      !!method &&
      fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal
        method.call(
          null,
          argument ||
            function () {
              throw 1;
            },
          1,
        );
      })
    );
  };

  var $forEach$1 = arrayIteration.forEach;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');
  var USES_TO_LENGTH$1 = arrayMethodUsesToLength('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach =
    !STRICT_METHOD || !USES_TO_LENGTH$1
      ? function forEach(callbackfn /* , thisArg */) {
          return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      : [].forEach;

  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  _export(
    { target: 'Array', proto: true, forced: [].forEach != arrayForEach },
    {
      forEach: arrayForEach,
    },
  );

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
  var USES_TO_LENGTH$2 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export(
    { target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 },
    {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          // cross-realm fallback
          if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
            Constructor = undefined;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES$2];
            if (Constructor === null) Constructor = undefined;
          }
          if (Constructor === Array || Constructor === undefined) {
            return nativeSlice.call(O, k, fin);
          }
        }
        result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
        for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
      },
    },
  );

  var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;

  var FAILS_ON_PRIMITIVES = fails(function () {
    nativeGetOwnPropertyDescriptor$2(1);
  });
  var FORCED$1 = !descriptors || FAILS_ON_PRIMITIVES;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  _export(
    { target: 'Object', stat: true, forced: FORCED$1, sham: !descriptors },
    {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
      },
    },
  );

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  _export(
    { target: 'Object', stat: true, sham: !descriptors },
    {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIndexedObject(object);
        var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
        var keys = ownKeys(O);
        var result = {};
        var index = 0;
        var key, descriptor;
        while (keys.length > index) {
          descriptor = getOwnPropertyDescriptor(O, (key = keys[index++]));
          if (descriptor !== undefined) createProperty(result, key, descriptor);
        }
        return result;
      },
    },
  );

  var FAILS_ON_PRIMITIVES$1 = fails(function () {
    objectKeys(1);
  });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  _export(
    { target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 },
    {
      keys: function keys(it) {
        return objectKeys(toObject(it));
      },
    },
  );

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach)
      try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
      } catch (error) {
        CollectionPrototype.forEach = arrayForEach;
      }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty$3 = _defineProperty;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties = _objectWithoutProperties;

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }
    return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
            /* empty */
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER) setter.call(O, proto);
            else O.__proto__ = proto;
            return O;
          };
        })()
      : undefined);

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject((NewTargetPrototype = NewTarget.prototype)) &&
      NewTargetPrototype !== Wrapper.prototype
    )
      objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces =
    '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$2 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3),
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$4 = objectDefineProperty.f;
  var trim = stringTrim.trim;

  var NUMBER = 'Number';
  var NativeNumber = global_1[NUMBER];
  var NumberPrototype = NativeNumber.prototype;

  // Opera ~12 has broken Object#toString
  var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

  // `ToNumber` abstract operation
  // https://tc39.github.io/ecma262/#sec-tonumber
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;
    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = it.charCodeAt(0);
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break; // fast equal of /^0b[01]+$/i
          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break; // fast equal of /^0o[0-7]+$/i
          default:
            return +it;
        }
        digits = it.slice(2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }
        return parseInt(digits, radix);
      }
    }
    return +it;
  };

  // `Number` constructor
  // https://tc39.github.io/ecma262/#sec-number-constructor
  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var dummy = this;
      return dummy instanceof NumberWrapper &&
        // check on 1..constructor(foo) case
        (BROKEN_CLASSOF
          ? fails(function () {
              NumberPrototype.valueOf.call(dummy);
            })
          : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper)
        : toNumber(it);
    };
    for (
      var keys$1 = descriptors
          ? getOwnPropertyNames(NativeNumber)
          : // ES3:
            (
              'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
              // ES2015 (in case, if modules with ES2015 Number statics required before):
              'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
              'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
            ).split(','),
        j = 0,
        key;
      keys$1.length > j;
      j++
    ) {
      if (has(NativeNumber, (key = keys$1[j])) && !has(NumberWrapper, key)) {
        defineProperty$4(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
      }
    }
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global_1, NUMBER, NumberWrapper);
  }

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    UNSUPPORTED_Y: UNSUPPORTED_Y,
    BROKEN_CARET: BROKEN_CARET,
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || (re.multiline && str[re.lastIndex - 1] !== '\n'))) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  _export(
    { target: 'RegExp', proto: true, forced: /./.exec !== regexpExec },
    {
      exec: regexpExec,
    },
  );

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var SPECIES$3 = wellKnownSymbol('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE = wellKnownSymbol('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC =
      DELEGATES_TO_SYMBOL &&
      !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {};
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {};
          re.constructor[SPECIES$3] = function () {
            return re;
          };
          re.flags = '';
          re[SYMBOL] = /./[SYMBOL];
        }

        re.exec = function () {
          execCalled = true;
          return null;
        };

        re[SYMBOL]('');
        return !execCalled;
      });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' &&
        !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(
        SYMBOL,
        ''[KEY],
        function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        },
        {
          REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        },
      );
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(
        RegExp.prototype,
        SYMBOL,
        length == 2
          ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            function (string, arg) {
              return regexMethod.call(string, this, arg);
            }
          : // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            function (string) {
              return regexMethod.call(string, this);
            },
      );
    }

    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$3 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xd800 ||
        first > 0xdbff ||
        position + 1 === size ||
        (second = S.charCodeAt(position + 1)) < 0xdc00 ||
        second > 0xdfff
        ? CONVERT_TO_STRING
          ? S.charAt(position)
          : first
        : CONVERT_TO_STRING
        ? S.slice(position, position + 2)
        : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true),
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var max$2 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (
          (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
          (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
        ) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$2(min$2(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      },
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return matched;
          case '`':
            return str.slice(0, position);
          case "'":
            return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles$1 = _arrayWithHoles$1;

  function _iterableToArrayLimit$1(arr, i) {
    if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit$1 = _iterableToArrayLimit$1;

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray$1 = _arrayLikeToArray$1;

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1(o, minLen);
  }

  var unsupportedIterableToArray$1 = _unsupportedIterableToArray$1;

  function _nonIterableRest$1() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  var nonIterableRest$1 = _nonIterableRest$1;

  function _slicedToArray$1(arr, i) {
    return (
      arrayWithHoles$1(arr) ||
      iterableToArrayLimit$1(arr, i) ||
      unsupportedIterableToArray$1(arr, i) ||
      nonIterableRest$1()
    );
  }

  var slicedToArray$1 = _slicedToArray$1;

  var _this = undefined;

  var _jsxFileName = '/Users/albertaz/Documents/github/react-simple-clamp/src/clamp.tsx';
  var RENDER_STATE = {
    START: 'START',
    DONE: 'DONE',
  };
  var RENDER_LOCATE_STATE = {
    START: 'START',
    DONE: 'DONE',
    ADD: 'ADD',
  };
  var RENDER_FILL_STATE = {
    ASCEND: 'ASCEND ',
    DESCEND: 'DESCEND ',
    DONE: 'DONE',
  };

  function getMaxHeightValue(screenMaxHeight) {
    return Number(screenMaxHeight.replace('px', ''));
  }

  function isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) {
    var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;

    if (!maxLines && screenMaxHeight === 'none') {
      return false;
    }

    if (maxLines && contentLines > maxLines) {
      return true;
    }

    if (
      screenMaxHeight !== 'none' &&
      tagRef.current &&
      tagRef.current.scrollHeight > getMaxHeightValue(screenMaxHeight)
    ) {
      return true;
    }

    return false;
  }

  function useScreenMaxHeight(internalExpanded, maxHeight) {
    var _useState = React.useState('none'),
      _useState2 = slicedToArray$1(_useState, 2),
      screenMaxHeight = _useState2[0],
      setScreenMaxHeight = _useState2[1];

    React.useEffect(
      function () {
        if (internalExpanded) {
          setScreenMaxHeight('none');
        } else if (!maxHeight) {
          setScreenMaxHeight('none');
        } else {
          setScreenMaxHeight(typeof maxHeight === 'number' ? ''.concat(maxHeight, 'px') : maxHeight);
        }
      },
      [internalExpanded, maxHeight],
    );
    return screenMaxHeight;
  }

  function useScreenContent(
    content,
    renderContent,
    renderClampedContent,
    offset,
    contentLength,
    ellipsis,
    internalExpanded,
  ) {
    var _useState3 = React.useState(function () {
        return renderContent();
      }),
      _useState4 = slicedToArray$1(_useState3, 2),
      screenContent = _useState4[0],
      setScreenContent = _useState4[1];

    React.useEffect(
      function () {
        if (!contentLength || internalExpanded) {
          setScreenContent(renderContent());
        } else if (offset !== contentLength) {
          setScreenContent(renderClampedContent(offset, ellipsis));
        }
      },
      [content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded],
    );
    return screenContent;
  }

  function useSetExpand(expanded) {
    var _useState5 = React.useState(expanded),
      _useState6 = slicedToArray$1(_useState5, 2),
      internalExpanded = _useState6[0],
      setInternalExpanded = _useState6[1];

    React.useEffect(
      function () {
        setInternalExpanded(expanded);
      },
      [expanded],
    );
    return internalExpanded;
  }

  var ReactSimpleClamp = function ReactSimpleClamp(properties) {
    var _properties$ellipsis = properties.ellipsis,
      ellipsis = _properties$ellipsis === void 0 ? '...' : _properties$ellipsis,
      content = properties.content,
      maxHeight = properties.maxHeight,
      maxLines = properties.maxLines,
      _properties$expanded = properties.expanded,
      expanded = _properties$expanded === void 0 ? false : _properties$expanded,
      renderContent = properties.renderContent,
      renderClampedContent = properties.renderClampedContent,
      _properties$className = properties.className,
      className = _properties$className === void 0 ? '' : _properties$className;
    var contentLength = content.length || 0;
    var tagRef = React.useRef();
    var contentRef = React.useRef();
    var offsetRef = React.useRef(contentLength);

    var _useState7 = React.useState(contentLength),
      _useState8 = slicedToArray$1(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

    var _useState9 = React.useState(RENDER_STATE.DONE),
      _useState10 = slicedToArray$1(_useState9, 2),
      renderState = _useState10[0],
      setRenderState = _useState10[1];

    var _useState11 = React.useState(RENDER_LOCATE_STATE.DONE),
      _useState12 = slicedToArray$1(_useState11, 2),
      renderLocateState = _useState12[0],
      setRenderLocateState = _useState12[1];

    var _useState13 = React.useState(RENDER_FILL_STATE.DONE),
      _useState14 = slicedToArray$1(_useState13, 2),
      renderFillState = _useState14[0],
      setRenderFillState = _useState14[1];

    var _useState15 = React.useState(true),
      _useState16 = slicedToArray$1(_useState15, 2),
      needLocationAdd = _useState16[0],
      setNeedLocationAdd = _useState16[1];

    var internalExpanded = useSetExpand(expanded);
    var screenContent = useScreenContent(
      content,
      renderContent,
      renderClampedContent,
      offset,
      contentLength,
      ellipsis,
      internalExpanded,
    );
    var screenMaxHeight = useScreenMaxHeight(internalExpanded, maxHeight);
    /** start rendering * */

    React.useEffect(
      function () {
        if (
          !internalExpanded &&
          isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) &&
          renderState === RENDER_STATE.DONE
        ) {
          setRenderState(RENDER_STATE.START);
        }
      },
      [maxLines, maxHeight, ellipsis, internalExpanded, renderState, screenMaxHeight],
    );
    /** start locating * */

    React.useEffect(
      function () {
        if (renderState === RENDER_STATE.START) {
          setRenderLocateState(RENDER_LOCATE_STATE.START);
        }
      },
      [renderState, contentLength],
    );
    /** locating process，find the locate position before clamp position as soon as posible * */

    React.useEffect(
      function () {
        var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
        var screenHeightHasSpace = tagRef.current && tagRef.current.scrollHeight <= getMaxHeightValue(screenMaxHeight);

        if (renderLocateState === RENDER_LOCATE_STATE.START || renderLocateState === RENDER_LOCATE_STATE.ADD) {
          if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef)) {
            // need dec
            if (renderLocateState === RENDER_LOCATE_STATE.ADD) {
              // is cycle render
              setNeedLocationAdd(false);
              setOffset(function (prevOffset) {
                return ~~(prevOffset - offsetRef.current);
              });
            } else {
              setOffset(function (prevOffset) {
                return ~~(prevOffset / 2);
              });
              offsetRef.current /= 2;
            }
          } else if (
            needLocationAdd &&
            ((screenMaxHeight !== 'none' && screenHeightHasSpace) || (maxLines && contentLines < maxLines))
          ) {
            // need add to reach max-height
            // need add to reach max-lines
            setRenderLocateState(RENDER_LOCATE_STATE.ADD);
            setOffset(function (prevOffset) {
              return ~~(prevOffset + offsetRef.current / 2);
            });
            offsetRef.current /= 2;
          } else {
            setRenderLocateState(RENDER_LOCATE_STATE.DONE);
            setRenderFillState(RENDER_FILL_STATE.ASCEND);
          }
        }
      },
      [renderLocateState, maxLines, contentRef, screenMaxHeight, screenContent, needLocationAdd],
    );
    /** filling process, fill the gap between locate position and clamp position * */

    React.useEffect(
      function () {
        var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;

        if (renderFillState === RENDER_FILL_STATE.ASCEND) {
          if (
            (!isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) || contentLines < 2) &&
            offset < contentLength
          ) {
            setOffset(offset + 1); // console.log(RENDER_FILL_STATE.ASCEND);
          } else {
            setRenderFillState(RENDER_FILL_STATE.DESCEND);
          }
        } else if (renderFillState === RENDER_FILL_STATE.DESCEND) {
          if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) && contentLines > 1 && offset > 0) {
            setOffset(offset - 1); // console.log(RENDER_FILL_STATE.DESCEND);
          } else {
            setRenderFillState(RENDER_FILL_STATE.DONE);
            setRenderState(RENDER_STATE.DONE);
            offsetRef.current = contentLength;
          }
        }
      },
      [renderFillState, contentLength, offset, contentRef, maxLines, screenMaxHeight],
    );
    var contentWrapper = /*#__PURE__*/ React__default.createElement(
      'span',
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
        },
      },
      screenContent,
    );
    var linesWrapper = /*#__PURE__*/ React__default.createElement(
      'span',
      {
        ref: contentRef,
        style: {
          boxShadow: 'transparent 0 0',
          wordBreak: 'break-all',
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
        },
      },
      contentWrapper,
    );
    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'react-simple-clamp '.concat(className),
        ref: tagRef,
        style: {
          overflow: 'hidden',
          maxHeight: screenMaxHeight,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
        },
      },
      linesWrapper,
    );
  };

  var _this$1 = undefined;

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          defineProperty$3(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }

  var _jsxFileName$1 = '/Users/albertaz/Documents/github/react-simple-clamp/src/ClampText.tsx';

  var ClampText = function ClampText(properties) {
    var content = properties.content,
      _properties$renderAft = properties.renderAfter,
      renderAfter =
        _properties$renderAft === void 0
          ? function () {
              return /*#__PURE__*/ React__default.createElement(React.Fragment, {
                __self: _this$1,
                __source: {
                  fileName: _jsxFileName$1,
                  lineNumber: 16,
                },
              });
            }
          : _properties$renderAft,
      restProps = objectWithoutProperties(properties, ['content', 'renderAfter']);

    var renderClampedContent = function renderClampedContent(offset, ellipsis) {
      return /*#__PURE__*/ React__default.createElement(
        'span',
        {
          __self: _this$1,
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 20,
          },
        },
        ''.concat(content.slice(0, offset)).concat(ellipsis),
        renderAfter(true),
      );
    };

    var renderContent = function renderContent() {
      return /*#__PURE__*/ React__default.createElement(
        'span',
        {
          __self: _this$1,
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 29,
          },
        },
        content,
        renderAfter(false),
      );
    };

    return /*#__PURE__*/ React__default.createElement(
      ReactSimpleClamp,
      _objectSpread(
        _objectSpread(
          {
            content: content,
            renderContent: renderContent,
            renderClampedContent: renderClampedContent,
          },
          restProps,
        ),
        {},
        {
          __self: _this$1,
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 37,
          },
        },
      ),
    );
  };

  var HTMLDOMPropertyConfig = {
    Properties: {
      autoFocus: 4,
      accept: 0,
      acceptCharset: 0,
      accessKey: 0,
      action: 0,
      allowFullScreen: 4,
      allowTransparency: 0,
      alt: 0,
      as: 0,
      async: 4,
      autoComplete: 0,
      autoPlay: 4,
      capture: 4,
      cellPadding: 0,
      cellSpacing: 0,
      charSet: 0,
      challenge: 0,
      checked: 5,
      cite: 0,
      classID: 0,
      className: 0,
      cols: 24,
      colSpan: 0,
      content: 0,
      contentEditable: 0,
      contextMenu: 0,
      controls: 4,
      controlsList: 0,
      coords: 0,
      crossOrigin: 0,
      data: 0,
      dateTime: 0,
      default: 4,
      defer: 4,
      dir: 0,
      disabled: 4,
      download: 32,
      draggable: 0,
      encType: 0,
      form: 0,
      formAction: 0,
      formEncType: 0,
      formMethod: 0,
      formNoValidate: 4,
      formTarget: 0,
      frameBorder: 0,
      headers: 0,
      height: 0,
      hidden: 4,
      high: 0,
      href: 0,
      hrefLang: 0,
      htmlFor: 0,
      httpEquiv: 0,
      icon: 0,
      id: 0,
      inputMode: 0,
      integrity: 0,
      is: 0,
      keyParams: 0,
      keyType: 0,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: 4,
      low: 0,
      manifest: 0,
      marginHeight: 0,
      marginWidth: 0,
      max: 0,
      maxLength: 0,
      media: 0,
      mediaGroup: 0,
      method: 0,
      min: 0,
      minLength: 0,
      multiple: 5,
      muted: 5,
      name: 0,
      nonce: 0,
      noValidate: 4,
      open: 4,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      playsInline: 4,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 0,
      readOnly: 4,
      referrerPolicy: 0,
      rel: 0,
      required: 4,
      reversed: 4,
      role: 0,
      rows: 24,
      rowSpan: 8,
      sandbox: 0,
      scope: 0,
      scoped: 4,
      scrolling: 0,
      seamless: 4,
      selected: 5,
      shape: 0,
      size: 24,
      sizes: 0,
      span: 24,
      spellCheck: 0,
      src: 0,
      srcDoc: 0,
      srcLang: 0,
      srcSet: 0,
      start: 8,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 0,
      target: 0,
      title: 0,
      type: 0,
      useMap: 0,
      value: 0,
      width: 0,
      wmode: 0,
      wrap: 0,
      about: 0,
      datatype: 0,
      inlist: 0,
      prefix: 0,
      property: 0,
      resource: 0,
      typeof: 0,
      vocab: 0,
      autoCapitalize: 0,
      autoCorrect: 0,
      autoSave: 0,
      color: 0,
      itemProp: 0,
      itemScope: 4,
      itemType: 0,
      itemID: 0,
      itemRef: 0,
      results: 0,
      security: 0,
      unselectable: 0,
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv',
    },
  };

  var SVGDOMPropertyConfig = {
    Properties: {
      accentHeight: 0,
      accumulate: 0,
      additive: 0,
      alignmentBaseline: 0,
      allowReorder: 0,
      alphabetic: 0,
      amplitude: 0,
      arabicForm: 0,
      ascent: 0,
      attributeName: 0,
      attributeType: 0,
      autoReverse: 0,
      azimuth: 0,
      baseFrequency: 0,
      baseProfile: 0,
      baselineShift: 0,
      bbox: 0,
      begin: 0,
      bias: 0,
      by: 0,
      calcMode: 0,
      capHeight: 0,
      clip: 0,
      clipPath: 0,
      clipRule: 0,
      clipPathUnits: 0,
      colorInterpolation: 0,
      colorInterpolationFilters: 0,
      colorProfile: 0,
      colorRendering: 0,
      contentScriptType: 0,
      contentStyleType: 0,
      cursor: 0,
      cx: 0,
      cy: 0,
      d: 0,
      decelerate: 0,
      descent: 0,
      diffuseConstant: 0,
      direction: 0,
      display: 0,
      divisor: 0,
      dominantBaseline: 0,
      dur: 0,
      dx: 0,
      dy: 0,
      edgeMode: 0,
      elevation: 0,
      enableBackground: 0,
      end: 0,
      exponent: 0,
      externalResourcesRequired: 0,
      fill: 0,
      fillOpacity: 0,
      fillRule: 0,
      filter: 0,
      filterRes: 0,
      filterUnits: 0,
      floodColor: 0,
      floodOpacity: 0,
      focusable: 0,
      fontFamily: 0,
      fontSize: 0,
      fontSizeAdjust: 0,
      fontStretch: 0,
      fontStyle: 0,
      fontVariant: 0,
      fontWeight: 0,
      format: 0,
      from: 0,
      fx: 0,
      fy: 0,
      g1: 0,
      g2: 0,
      glyphName: 0,
      glyphOrientationHorizontal: 0,
      glyphOrientationVertical: 0,
      glyphRef: 0,
      gradientTransform: 0,
      gradientUnits: 0,
      hanging: 0,
      horizAdvX: 0,
      horizOriginX: 0,
      ideographic: 0,
      imageRendering: 0,
      in: 0,
      in2: 0,
      intercept: 0,
      k: 0,
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
      kernelMatrix: 0,
      kernelUnitLength: 0,
      kerning: 0,
      keyPoints: 0,
      keySplines: 0,
      keyTimes: 0,
      lengthAdjust: 0,
      letterSpacing: 0,
      lightingColor: 0,
      limitingConeAngle: 0,
      local: 0,
      markerEnd: 0,
      markerMid: 0,
      markerStart: 0,
      markerHeight: 0,
      markerUnits: 0,
      markerWidth: 0,
      mask: 0,
      maskContentUnits: 0,
      maskUnits: 0,
      mathematical: 0,
      mode: 0,
      numOctaves: 0,
      offset: 0,
      opacity: 0,
      operator: 0,
      order: 0,
      orient: 0,
      orientation: 0,
      origin: 0,
      overflow: 0,
      overlinePosition: 0,
      overlineThickness: 0,
      paintOrder: 0,
      panose1: 0,
      pathLength: 0,
      patternContentUnits: 0,
      patternTransform: 0,
      patternUnits: 0,
      pointerEvents: 0,
      points: 0,
      pointsAtX: 0,
      pointsAtY: 0,
      pointsAtZ: 0,
      preserveAlpha: 0,
      preserveAspectRatio: 0,
      primitiveUnits: 0,
      r: 0,
      radius: 0,
      refX: 0,
      refY: 0,
      renderingIntent: 0,
      repeatCount: 0,
      repeatDur: 0,
      requiredExtensions: 0,
      requiredFeatures: 0,
      restart: 0,
      result: 0,
      rotate: 0,
      rx: 0,
      ry: 0,
      scale: 0,
      seed: 0,
      shapeRendering: 0,
      slope: 0,
      spacing: 0,
      specularConstant: 0,
      specularExponent: 0,
      speed: 0,
      spreadMethod: 0,
      startOffset: 0,
      stdDeviation: 0,
      stemh: 0,
      stemv: 0,
      stitchTiles: 0,
      stopColor: 0,
      stopOpacity: 0,
      strikethroughPosition: 0,
      strikethroughThickness: 0,
      string: 0,
      stroke: 0,
      strokeDasharray: 0,
      strokeDashoffset: 0,
      strokeLinecap: 0,
      strokeLinejoin: 0,
      strokeMiterlimit: 0,
      strokeOpacity: 0,
      strokeWidth: 0,
      surfaceScale: 0,
      systemLanguage: 0,
      tableValues: 0,
      targetX: 0,
      targetY: 0,
      textAnchor: 0,
      textDecoration: 0,
      textRendering: 0,
      textLength: 0,
      to: 0,
      transform: 0,
      u1: 0,
      u2: 0,
      underlinePosition: 0,
      underlineThickness: 0,
      unicode: 0,
      unicodeBidi: 0,
      unicodeRange: 0,
      unitsPerEm: 0,
      vAlphabetic: 0,
      vHanging: 0,
      vIdeographic: 0,
      vMathematical: 0,
      values: 0,
      vectorEffect: 0,
      version: 0,
      vertAdvY: 0,
      vertOriginX: 0,
      vertOriginY: 0,
      viewBox: 0,
      viewTarget: 0,
      visibility: 0,
      widths: 0,
      wordSpacing: 0,
      writingMode: 0,
      x: 0,
      xHeight: 0,
      x1: 0,
      x2: 0,
      xChannelSelector: 0,
      xlinkActuate: 0,
      xlinkArcrole: 0,
      xlinkHref: 0,
      xlinkRole: 0,
      xlinkShow: 0,
      xlinkTitle: 0,
      xlinkType: 0,
      xmlBase: 0,
      xmlns: 0,
      xmlnsXlink: 0,
      xmlLang: 0,
      xmlSpace: 0,
      y: 0,
      y1: 0,
      y2: 0,
      yChannelSelector: 0,
      z: 0,
      zoomAndPan: 0,
    },
    DOMAttributeNames: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDasharray: 'stroke-dasharray',
      strokeDashoffset: 'stroke-dashoffset',
      strokeLinecap: 'stroke-linecap',
      strokeLinejoin: 'stroke-linejoin',
      strokeMiterlimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      xlinkActuate: 'xlink:actuate',
      xlinkArcrole: 'xlink:arcrole',
      xlinkHref: 'xlink:href',
      xlinkRole: 'xlink:role',
      xlinkShow: 'xlink:show',
      xlinkTitle: 'xlink:title',
      xlinkType: 'xlink:type',
      xmlBase: 'xml:base',
      xmlnsXlink: 'xmlns:xlink',
      xmlLang: 'xml:lang',
      xmlSpace: 'xml:space',
    },
  };

  var injection = {
    MUST_USE_PROPERTY: 1,
    HAS_BOOLEAN_VALUE: 4,
    HAS_NUMERIC_VALUE: 8,
    HAS_POSITIVE_NUMERIC_VALUE: 24,
    HAS_OVERLOADED_BOOLEAN_VALUE: 32,
  };

  var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
  var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;

  /**
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L14-L16
   *
   * @param  {Number}  value
   * @param  {Number}  bitmask
   * @return {Boolean}
   */
  function checkMask(value, bitmask) {
    return (value & bitmask) === bitmask;
  }

  /**
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L57
   *
   * @param {Object}  domPropertyConfig - HTMLDOMPropertyConfig or SVGDOMPropertyConfig
   * @param {Object}  config            - The object to be mutated
   * @param {Boolean} isSVG             - Whether the injected config is HTML or SVG (it assumes the default is HTML)
   */
  function injectDOMPropertyConfig(domPropertyConfig, config, isSVG) {
    var Properties = domPropertyConfig.Properties;
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames;
    var attributeName;
    var propertyName;
    var propConfig;

    for (propertyName in Properties) {
      attributeName = DOMAttributeNames[propertyName] || (isSVG ? propertyName : propertyName.toLowerCase());
      propConfig = Properties[propertyName];

      config[attributeName] = {
        attributeName: attributeName,
        propertyName: propertyName,
        mustUseProperty: checkMask(propConfig, MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, HAS_OVERLOADED_BOOLEAN_VALUE),
      };
    }
  }

  /**
   * HTML properties config.
   *
   * @type {Object}
   */
  var html$1 = {};
  injectDOMPropertyConfig(HTMLDOMPropertyConfig, html$1);

  /**
   * SVG properties config.
   *
   * @type {Object}
   */
  var svg = {};
  injectDOMPropertyConfig(SVGDOMPropertyConfig, svg, true);

  /**
   * HTML and SVG properties config.
   *
   * @type {Object}
   */
  var properties = {};
  injectDOMPropertyConfig(HTMLDOMPropertyConfig, properties);
  injectDOMPropertyConfig(SVGDOMPropertyConfig, properties, true);

  var ATTRIBUTE_NAME_START_CHAR =
    ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
  var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

  var reactProperty = {
    html: html$1,
    svg: svg,
    properties: properties,

    /**
     * Checks whether a property name is a custom attribute.
     *
     * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
     *
     * @param {String}
     * @return {Boolean}
     */
    isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')),
  };

  // http://www.w3.org/TR/CSS21/grammar.html
  // https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
  var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

  var NEWLINE_REGEX = /\n/g;
  var WHITESPACE_REGEX = /^\s*/;

  // declaration
  var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var COLON_REGEX = /^:\s*/;
  var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var SEMICOLON_REGEX = /^[;\s]*/;

  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
  var TRIM_REGEX = /^\s+|\s+$/g;

  // strings
  var NEWLINE = '\n';
  var FORWARD_SLASH = '/';
  var ASTERISK = '*';
  var EMPTY_STRING = '';

  // types
  var TYPE_COMMENT = 'comment';
  var TYPE_DECLARATION = 'declaration';

  /**
   * @param {String} style
   * @param {Object} [options]
   * @return {Object[]}
   * @throws {TypeError}
   * @throws {Error}
   */
  var inlineStyleParser = function (style, options) {
    if (typeof style !== 'string') {
      throw new TypeError('First argument must be a string');
    }

    if (!style) return [];

    options = options || {};

    /**
     * Positional.
     */
    var lineno = 1;
    var column = 1;

    /**
     * Update lineno and column based on `str`.
     *
     * @param {String} str
     */
    function updatePosition(str) {
      var lines = str.match(NEWLINE_REGEX);
      if (lines) lineno += lines.length;
      var i = str.lastIndexOf(NEWLINE);
      column = ~i ? str.length - i : column + str.length;
    }

    /**
     * Mark position and patch `node.position`.
     *
     * @return {Function}
     */
    function position() {
      var start = { line: lineno, column: column };
      return function (node) {
        node.position = new Position(start);
        whitespace();
        return node;
      };
    }

    /**
     * Store position information for a node.
     *
     * @constructor
     * @property {Object} start
     * @property {Object} end
     * @property {undefined|String} source
     */
    function Position(start) {
      this.start = start;
      this.end = { line: lineno, column: column };
      this.source = options.source;
    }

    /**
     * Non-enumerable source string.
     */
    Position.prototype.content = style;

    /**
     * Error `msg`.
     *
     * @param {String} msg
     * @throws {Error}
     */
    function error(msg) {
      var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
      err.reason = msg;
      err.filename = options.source;
      err.line = lineno;
      err.column = column;
      err.source = style;

      if (options.silent);
      else {
        throw err;
      }
    }

    /**
     * Match `re` and return captures.
     *
     * @param {RegExp} re
     * @return {undefined|Array}
     */
    function match(re) {
      var m = re.exec(style);
      if (!m) return;
      var str = m[0];
      updatePosition(str);
      style = style.slice(str.length);
      return m;
    }

    /**
     * Parse whitespace.
     */
    function whitespace() {
      match(WHITESPACE_REGEX);
    }

    /**
     * Parse comments.
     *
     * @param {Object[]} [rules]
     * @return {Object[]}
     */
    function comments(rules) {
      var c;
      rules = rules || [];
      while ((c = comment())) {
        if (c !== false) {
          rules.push(c);
        }
      }
      return rules;
    }

    /**
     * Parse comment.
     *
     * @return {Object}
     * @throws {Error}
     */
    function comment() {
      var pos = position();
      if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

      var i = 2;
      while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
        ++i;
      }
      i += 2;

      if (EMPTY_STRING === style.charAt(i - 1)) {
        return error('End of comment missing');
      }

      var str = style.slice(2, i - 2);
      column += 2;
      updatePosition(str);
      style = style.slice(i);
      column += 2;

      return pos({
        type: TYPE_COMMENT,
        comment: str,
      });
    }

    /**
     * Parse declaration.
     *
     * @return {Object}
     * @throws {Error}
     */
    function declaration() {
      var pos = position();

      // prop
      var prop = match(PROPERTY_REGEX);
      if (!prop) return;
      comment();

      // :
      if (!match(COLON_REGEX)) return error("property missing ':'");

      // val
      var val = match(VALUE_REGEX);

      var ret = pos({
        type: TYPE_DECLARATION,
        property: trim$1(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
        value: val ? trim$1(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING,
      });

      // ;
      match(SEMICOLON_REGEX);

      return ret;
    }

    /**
     * Parse declarations.
     *
     * @return {Object[]}
     */
    function declarations() {
      var decls = [];

      comments(decls);

      // declarations
      var decl;
      while ((decl = declaration())) {
        if (decl !== false) {
          decls.push(decl);
          comments(decls);
        }
      }

      return decls;
    }

    whitespace();
    return declarations();
  };

  /**
   * Trim `str`.
   *
   * @param {String} str
   * @return {String}
   */
  function trim$1(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
  }

  /**
   * Parses inline style to object.
   *
   * @example
   * // returns { 'line-height': '42' }
   * StyleToObject('line-height: 42;');
   *
   * @param  {String}      style      - The inline style.
   * @param  {Function}    [iterator] - The iterator function.
   * @return {null|Object}
   */
  function StyleToObject(style, iterator) {
    var output = null;
    if (!style || typeof style !== 'string') {
      return output;
    }

    var declaration;
    var declarations = inlineStyleParser(style);
    var hasIterator = typeof iterator === 'function';
    var property;
    var value;

    for (var i = 0, len = declarations.length; i < len; i++) {
      declaration = declarations[i];
      property = declaration.property;
      value = declaration.value;

      if (hasIterator) {
        iterator(property, value, declaration);
      } else if (value) {
        output || (output = {});
        output[property] = value;
      }
    }

    return output;
  }

  var styleToObject = StyleToObject;

  var hyphenPatternRegex = /-([a-z])/g;
  var CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX = /^--[a-zA-Z0-9-]+$|^[^-]+$/;

  /**
   * Converts a string to camelCase.
   *
   * @param  {String} string - The string.
   * @return {String}
   */
  function camelCase(string) {
    if (typeof string !== 'string') {
      throw new TypeError('First argument must be a string');
    }

    // custom property or no hyphen found
    if (CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX.test(string)) {
      return string;
    }

    // convert to camelCase
    return string.toLowerCase().replace(hyphenPatternRegex, function (_, character) {
      return character.toUpperCase();
    });
  }

  /**
   * Swap key with value in an object.
   *
   * @param  {Object}   obj        - The object.
   * @param  {Function} [override] - The override method.
   * @return {Object}              - The inverted object.
   */
  function invertObject(obj, override) {
    if (!obj || typeof obj !== 'object') {
      throw new TypeError('First argument must be an object');
    }

    var key;
    var value;
    var isOverridePresent = typeof override === 'function';
    var overrides = {};
    var result = {};

    for (key in obj) {
      value = obj[key];

      if (isOverridePresent) {
        overrides = override(key, value);
        if (overrides && overrides.length === 2) {
          result[overrides[0]] = overrides[1];
          continue;
        }
      }

      if (typeof value === 'string') {
        result[value] = key;
      }
    }

    return result;
  }

  /**
   * Check if a given tag is a custom component.
   *
   * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
   *
   * @param {string} tagName - The name of the html tag.
   * @param {Object} props   - The props being passed to the element.
   * @return {boolean}
   */
  function isCustomComponent(tagName, props) {
    if (tagName.indexOf('-') === -1) {
      return props && typeof props.is === 'string';
    }

    switch (tagName) {
      // These are reserved SVG and MathML elements.
      // We don't mind this whitelist too much because we expect it to never grow.
      // The alternative is to track the namespace in a few places which is convoluted.
      // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return false;
      default:
        return true;
    }
  }

  /**
   * @constant {Boolean}
   * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
   */
  var PRESERVE_CUSTOM_ATTRIBUTES = React__default.version.split('.')[0] >= 16;

  var utilities = {
    PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
    camelCase: camelCase,
    invertObject: invertObject,
    isCustomComponent: isCustomComponent,
  };

  var camelCase$1 = utilities.camelCase;

  var htmlProperties = reactProperty.html;
  var svgProperties = reactProperty.svg;
  var isCustomAttribute = reactProperty.isCustomAttribute;

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  /**
   * Converts HTML/SVG DOM attributes to React props.
   *
   * @param  {Object} [attributes={}] - The HTML/SVG DOM attributes.
   * @return {Object}                 - The React props.
   */
  function attributesToProps(attributes) {
    attributes = attributes || {};

    var attributeName;
    var attributeNameLowerCased;
    var attributeValue;
    var property;
    var props = {};

    for (attributeName in attributes) {
      attributeValue = attributes[attributeName];

      // ARIA (aria-*) or custom data (data-*) attribute
      if (isCustomAttribute(attributeName)) {
        props[attributeName] = attributeValue;
        continue;
      }

      // convert HTML attribute to React prop
      attributeNameLowerCased = attributeName.toLowerCase();
      if (hasOwnProperty$1.call(htmlProperties, attributeNameLowerCased)) {
        property = htmlProperties[attributeNameLowerCased];
        props[property.propertyName] =
          property.hasBooleanValue || (property.hasOverloadedBooleanValue && !attributeValue) ? true : attributeValue;
        continue;
      }

      // convert SVG attribute to React prop
      if (hasOwnProperty$1.call(svgProperties, attributeName)) {
        property = svgProperties[attributeName];
        props[property.propertyName] = attributeValue;
        continue;
      }

      // preserve custom attribute if React >=16
      if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
        props[attributeName] = attributeValue;
      }
    }

    // convert inline style to object
    if (attributes.style != null) {
      props.style = cssToJs(attributes.style);
    }

    return props;
  }

  /**
   * Converts inline CSS style to POJO (Plain Old JavaScript Object).
   *
   * @param  {String} style - The inline CSS style.
   * @return {Object}       - The style object.
   */
  function cssToJs(style) {
    var styleObject = {};

    if (style) {
      styleToObject(style, function (property, value) {
        // skip CSS comment
        if (property && value) {
          styleObject[camelCase$1(property)] = value;
        }
      });
    }

    return styleObject;
  }

  var attributesToProps_1 = attributesToProps;

  /**
   * Converts DOM nodes to React elements.
   *
   * @param {DomElement[]} nodes - The DOM nodes.
   * @param {Object} [options={}] - The additional options.
   * @param {Function} [options.replace] - The replacer.
   * @param {Object} [options.library] - The library (React, Preact, etc.).
   * @return {String|ReactElement|ReactElement[]}
   */
  function domToReact(nodes, options) {
    options = options || {};

    var React$1 = options.library || React__default;
    var cloneElement = React$1.cloneElement;
    var createElement = React$1.createElement;
    var isValidElement = React$1.isValidElement;

    var result = [];
    var node;
    var hasReplace = typeof options.replace === 'function';
    var replaceElement;
    var props;
    var children;
    var data;
    var trim = options.trim;

    for (var i = 0, len = nodes.length; i < len; i++) {
      node = nodes[i];

      // replace with custom React element (if present)
      if (hasReplace) {
        replaceElement = options.replace(node);

        if (isValidElement(replaceElement)) {
          // set "key" prop for sibling elements
          // https://fb.me/react-warning-keys
          if (len > 1) {
            replaceElement = cloneElement(replaceElement, {
              key: replaceElement.key || i,
            });
          }
          result.push(replaceElement);
          continue;
        }
      }

      if (node.type === 'text') {
        // if trim option is enabled, skip whitespace text nodes
        if (trim) {
          data = node.data.trim();
          if (data) {
            result.push(node.data);
          }
        } else {
          result.push(node.data);
        }
        continue;
      }

      props = node.attribs;
      if (!shouldPassAttributesUnaltered(node)) {
        props = attributesToProps_1(node.attribs);
      }

      children = null;

      switch (node.type) {
        case 'script':
        case 'style':
          // prevent text in <script> or <style> from being escaped
          // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
          if (node.children[0]) {
            props.dangerouslySetInnerHTML = {
              __html: node.children[0].data,
            };
          }
          break;

        case 'tag':
          // setting textarea value in children is an antipattern in React
          // https://reactjs.org/docs/forms.html#the-textarea-tag
          if (node.name === 'textarea' && node.children[0]) {
            props.defaultValue = node.children[0].data;
          } else if (node.children && node.children.length) {
            // continue recursion of creating React elements (if applicable)
            children = domToReact(node.children, options);
          }
          break;

        // skip all other cases (e.g., comment)
        default:
          continue;
      }

      // set "key" prop for sibling elements
      // https://fb.me/react-warning-keys
      if (len > 1) {
        props.key = i;
      }

      result.push(createElement(node.name, props, children));
    }

    return result.length === 1 ? result[0] : result;
  }

  /**
   * Determines whether attributes should be altered or not.
   *
   * @param {React.ReactElement} node
   * @return {Boolean}
   */
  function shouldPassAttributesUnaltered(node) {
    return (
      utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
      node.type === 'tag' &&
      utilities.isCustomComponent(node.name, node.attribs)
    );
  }

  var domToReact_1 = domToReact;

  /**
   * SVG elements are case-sensitive.
   *
   * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
   */
  var CASE_SENSITIVE_TAG_NAMES = [
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussainBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'linearGradient',
    'radialGradient',
    'textPath',
  ];

  var constants = {
    CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES,
  };

  var CASE_SENSITIVE_TAG_NAMES$1 = constants.CASE_SENSITIVE_TAG_NAMES;

  var caseSensitiveTagNamesMap = {};
  var tagName;
  for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES$1.length; i < len; i++) {
    tagName = CASE_SENSITIVE_TAG_NAMES$1[i];
    caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
  }

  /**
   * Gets case-sensitive tag name.
   *
   * @param  {String}           tagName - The lowercase tag name.
   * @return {String|undefined}
   */
  function getCaseSensitiveTagName(tagName) {
    return caseSensitiveTagNamesMap[tagName];
  }

  /**
   * Formats DOM attributes to a hash map.
   *
   * @param  {NamedNodeMap} attributes - The list of attributes.
   * @return {Object}                  - A map of attribute name to value.
   */
  function formatAttributes(attributes) {
    var result = {};
    var attribute;
    // `NamedNodeMap` is array-like
    for (var i = 0, len = attributes.length; i < len; i++) {
      attribute = attributes[i];
      result[attribute.name] = attribute.value;
    }
    return result;
  }

  /**
   * Corrects the tag name if it is case-sensitive (SVG).
   * Otherwise, returns the lowercase tag name (HTML).
   *
   * @param  {String} tagName - The lowercase tag name.
   * @return {String}         - The formatted tag name.
   */
  function formatTagName(tagName) {
    tagName = tagName.toLowerCase();
    var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
    if (caseSensitiveTagName) {
      return caseSensitiveTagName;
    }
    return tagName;
  }

  /**
   * Formats the browser DOM nodes to mimic the output of `htmlparser2.parseDOM()`.
   *
   * @param  {NodeList} nodes        - The DOM nodes.
   * @param  {Object}   [parentObj]  - The formatted parent node.
   * @param  {String}   [directive]  - The directive.
   * @return {Object[]}              - The formatted DOM object.
   */
  function formatDOM(nodes, parentObj, directive) {
    parentObj = parentObj || null;

    var result = [];
    var node;
    var prevNode;
    var nodeObj;

    // `NodeList` is array-like
    for (var i = 0, len = nodes.length; i < len; i++) {
      node = nodes[i];
      // reset
      nodeObj = {
        next: null,
        prev: result[i - 1] || null,
        parent: parentObj,
      };

      // set the next node for the previous node (if applicable)
      prevNode = result[i - 1];
      if (prevNode) {
        prevNode.next = nodeObj;
      }

      // set the node name if it's not "#text" or "#comment"
      // e.g., "div"
      if (node.nodeName[0] !== '#') {
        nodeObj.name = formatTagName(node.nodeName);
        // also, nodes of type "tag" have "attribs"
        nodeObj.attribs = {}; // default
        if (node.attributes && node.attributes.length) {
          nodeObj.attribs = formatAttributes(node.attributes);
        }
      }

      // set the node type
      // e.g., "tag"
      switch (node.nodeType) {
        // 1 = element
        case 1:
          if (nodeObj.name === 'script' || nodeObj.name === 'style') {
            nodeObj.type = nodeObj.name;
          } else {
            nodeObj.type = 'tag';
          }
          // recursively format the children
          nodeObj.children = formatDOM(node.childNodes, nodeObj);
          break;
        // 2 = attribute
        // 3 = text
        case 3:
          nodeObj.type = 'text';
          nodeObj.data = node.nodeValue;
          break;
        // 8 = comment
        case 8:
          nodeObj.type = 'comment';
          nodeObj.data = node.nodeValue;
          break;
      }

      result.push(nodeObj);
    }

    if (directive) {
      result.unshift({
        name: directive.substring(0, directive.indexOf(' ')).toLowerCase(),
        data: directive,
        type: 'directive',
        next: result[0] ? result[0] : null,
        prev: null,
        parent: parentObj,
      });

      if (result[1]) {
        result[1].prev = result[0];
      }
    }

    return result;
  }

  /**
   * Detects IE with or without version.
   *
   * @param  {Number}  [version] - The IE version to detect.
   * @return {Boolean}           - Whether IE or the version has been detected.
   */
  function isIE(version) {
    if (version) {
      return document.documentMode === version;
    }
    return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
  }

  var utilities$1 = {
    formatAttributes: formatAttributes,
    formatDOM: formatDOM,
    isIE: isIE,
  };

  // constants
  var HTML = 'html';
  var HEAD = 'head';
  var BODY = 'body';
  var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
  var HEAD_TAG_REGEX = /<head.*>/i;
  var BODY_TAG_REGEX = /<body.*>/i;
  // http://www.w3.org/TR/html/syntax.html#void-elements
  var VOID_ELEMENTS_REGEX = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi;

  // detect IE browser
  var isIE9 = utilities$1.isIE(9);
  var isIE$1 = isIE9 || utilities$1.isIE();

  // falls back to `parseFromString` if `createHTMLDocument` cannot be used
  var parseFromDocument = function () {
    throw new Error('This browser does not support `document.implementation.createHTMLDocument`');
  };

  var parseFromString = function () {
    throw new Error('This browser does not support `DOMParser.prototype.parseFromString`');
  };

  /**
   * DOMParser (performance: slow).
   *
   * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
   */
  if (typeof window.DOMParser === 'function') {
    var domParser = new window.DOMParser();

    // IE9 does not support 'text/html' MIME type
    // https://msdn.microsoft.com/en-us/library/ff975278(v=vs.85).aspx
    var mimeType = isIE9 ? 'text/xml' : 'text/html';

    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param  {string} html      - The HTML string.
     * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
     * @return {HTMLDocument}
     */
    parseFromString = function (html, tagName) {
      if (tagName) {
        html = '<' + tagName + '>' + html + '</' + tagName + '>';
      }

      // because IE9 only supports MIME type 'text/xml', void elements need to be self-closed
      if (isIE9) {
        html = html.replace(VOID_ELEMENTS_REGEX, '<$1$2$3/>');
      }

      return domParser.parseFromString(html, mimeType);
    };

    parseFromDocument = parseFromString;
  }

  /**
   * DOMImplementation (performance: fair).
   *
   * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
   */
  if (document.implementation) {
    // title parameter is required in IE
    // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
    var doc = document.implementation.createHTMLDocument(isIE$1 ? 'html-dom-parser' : undefined);

    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param  {string} html      - The HTML string.
     * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
     * @return {HTMLDocument}
     */
    parseFromDocument = function (html, tagName) {
      if (tagName) {
        doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
        return doc;
      }

      try {
        doc.documentElement.innerHTML = html;
        return doc;
        // fallback when certain elements in `documentElement` are read-only (IE9)
      } catch (err) {
        if (parseFromString) {
          return parseFromString(html);
        }
      }
    };
  }

  /**
   * Template (performance: fast).
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
   */
  var template = document.createElement('template');
  var parseFromTemplate;

  if (template.content) {
    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param  {string} html - The HTML string.
     * @return {NodeList}
     */
    parseFromTemplate = function (html) {
      template.innerHTML = html;
      return template.content.childNodes;
    };
  }

  /**
   * Parses HTML string to DOM nodes.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList|Array}
   */
  function domparser(html) {
    var firstTagName;
    var match = html.match(FIRST_TAG_REGEX);

    if (match && match[1]) {
      firstTagName = match[1].toLowerCase();
    }

    var doc;
    var element;
    var elements;

    switch (firstTagName) {
      case HTML:
        doc = parseFromString(html);

        // the created document may come with filler head/body elements,
        // so make sure to remove them if they don't actually exist
        if (!HEAD_TAG_REGEX.test(html)) {
          element = doc.getElementsByTagName(HEAD)[0];
          if (element) {
            element.parentNode.removeChild(element);
          }
        }

        if (!BODY_TAG_REGEX.test(html)) {
          element = doc.getElementsByTagName(BODY)[0];
          if (element) {
            element.parentNode.removeChild(element);
          }
        }

        return doc.getElementsByTagName(HTML);

      case HEAD:
      case BODY:
        elements = parseFromDocument(html).getElementsByTagName(firstTagName);

        // if there's a sibling element, then return both elements
        if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
          return elements[0].parentNode.childNodes;
        }
        return elements;

      // low-level tag or text
      default:
        if (parseFromTemplate) {
          return parseFromTemplate(html);
        }

        return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0].childNodes;
    }
  }

  var domparser_1 = domparser;

  var formatDOM$1 = utilities$1.formatDOM;
  var isIE9$1 = utilities$1.isIE(9);

  var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

  /**
   * Parses HTML and reformats DOM nodes output.
   *
   * @param  {String} html - The HTML string.
   * @return {Array}       - The formatted DOM nodes.
   */
  function parseDOM(html) {
    if (typeof html !== 'string') {
      throw new TypeError('First argument must be a string');
    }

    if (!html) {
      return [];
    }

    // match directive
    var match = html.match(DIRECTIVE_REGEX);
    var directive;

    if (match && match[1]) {
      directive = match[1];

      // remove directive in IE9 because DOMParser uses
      // MIME type 'text/xml' instead of 'text/html'
      if (isIE9$1) {
        html = html.replace(match[0], '');
      }
    }

    return formatDOM$1(domparser_1(html), null, directive);
  }

  var htmlToDomClient = parseDOM;

  // decode HTML entities by default for `htmlparser2`
  var domParserOptions = { decodeEntities: true, lowerCaseAttributeNames: false };

  /**
   * Converts HTML string to React elements.
   *
   * @param  {String}   html                    - HTML string.
   * @param  {Object}   [options]               - Parser options.
   * @param  {Object}   [options.htmlparser2]   - htmlparser2 options.
   * @param  {Object}   [options.library]       - Library for React, Preact, etc.
   * @param  {Function} [options.replace]       - Replace method.
   * @return {JSX.Element|JSX.Element[]|String} - React element(s), empty array, or string.
   */
  function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
      throw new TypeError('First argument must be a string');
    }
    if (html === '') {
      return [];
    }
    options = options || {};
    return domToReact_1(htmlToDomClient(html, options.htmlparser2 || domParserOptions), options);
  }

  HTMLReactParser.domToReact = domToReact_1;
  HTMLReactParser.htmlToDOM = htmlToDomClient;

  // support CommonJS and ES Modules
  var htmlReactParser = HTMLReactParser;
  var _default = HTMLReactParser;
  htmlReactParser.default = _default;

  var _this$2 = undefined;

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function (key) {
          defineProperty$3(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }

  var _jsxFileName$2 = '/Users/albertaz/Documents/github/react-simple-clamp/src/ClampHtml.tsx';

  var ClampInlineHtml = function ClampInlineHtml(properties) {
    var content = properties.content,
      _properties$renderAft = properties.renderAfter,
      renderAfter =
        _properties$renderAft === void 0
          ? function () {
              return /*#__PURE__*/ React__default.createElement(React.Fragment, {
                __self: _this$2,
                __source: {
                  fileName: _jsxFileName$2,
                  lineNumber: 17,
                },
              });
            }
          : _properties$renderAft,
      restProps = objectWithoutProperties(properties, ['content', 'renderAfter']);

    var renderClampedContent = function renderClampedContent(offset, ellipsis) {
      var count = 0;
      var finished = false;
      return /*#__PURE__*/ React__default.createElement(
        React.Fragment,
        {
          __self: _this$2,
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 23,
          },
        },
        htmlReactParser(content, {
          replace: function replace(domNode) {
            if (domNode.type === 'text') {
              if (count === offset || finished) {
                return /*#__PURE__*/ React__default.createElement(React.Fragment, {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName$2,
                    lineNumber: 28,
                  },
                });
              }

              if (count + domNode.data.length <= offset) {
                count += domNode.data.length;
                return;
              }

              var gap = offset - (count + domNode.data.length - offset);
              finished = true;
              return /*#__PURE__*/ React__default.createElement(
                React.Fragment,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName$2,
                    lineNumber: 36,
                  },
                },
                domNode.data.slice(0, gap),
              );
            }
          },
        }),
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            __self: _this$2,
            __source: {
              fileName: _jsxFileName$2,
              lineNumber: 40,
            },
          },
          ellipsis,
        ),
        renderAfter(true),
      );
    };

    var renderContent = function renderContent() {
      return /*#__PURE__*/ React__default.createElement(
        React.Fragment,
        {
          __self: _this$2,
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 48,
          },
        },
        htmlReactParser(content),
        renderAfter(false),
      );
    };

    return /*#__PURE__*/ React__default.createElement(
      ReactSimpleClamp,
      _objectSpread$1(
        _objectSpread$1(
          {
            content: content,
            renderContent: renderContent,
            renderClampedContent: renderClampedContent,
          },
          restProps,
        ),
        {},
        {
          __self: _this$2,
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 56,
          },
        },
      ),
    );
  };

  var _this$3 = undefined;

  var _jsxFileName$3 = '/Users/albertaz/Documents/github/react-simple-clamp/example/demo.jsx';
  var text =
    'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
  var html$2 =
    'helloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld';

  var App = function App() {
    var _useState = React.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpended = _useState2[1];

    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        __self: _this$3,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 10,
        },
      },
      /*#__PURE__*/ React__default.createElement(
        'h2',
        {
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 11,
          },
        },
        'Clamp Text',
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            width: 200,
            background: '#f5f5f5',
            marginBottom: 30,
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 12,
          },
        },
        /*#__PURE__*/ React__default.createElement(ClampText, {
          content: text,
          maxHeight: 60,
          maxLines: 2,
          expanded: expanded,
          renderAfter: function renderAfter(clamped) {
            return /*#__PURE__*/ React__default.createElement(
              'span',
              {
                style: {
                  background: '#61dafb',
                  padding: '0 4px',
                },
                onClick: function onClick() {
                  setExpended(!!clamped);
                },
                __self: _this$3,
                __source: {
                  fileName: _jsxFileName$3,
                  lineNumber: 19,
                },
              },
              clamped ? 'open' : 'close',
            );
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 13,
          },
        }),
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            width: 200,
            background: '#f5f5f5',
            marginBottom: 30,
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 24,
          },
        },
        /*#__PURE__*/ React__default.createElement(ClampText, {
          content: text,
          maxHeight: 120,
          expanded: expanded,
          renderAfter: function renderAfter(clamped) {
            return /*#__PURE__*/ React__default.createElement(
              'span',
              {
                style: {
                  background: '#61dafb',
                  padding: '0 4px',
                },
                onClick: function onClick() {
                  setExpended(!!clamped);
                },
                __self: _this$3,
                __source: {
                  fileName: _jsxFileName$3,
                  lineNumber: 30,
                },
              },
              clamped ? 'open' : 'close',
            );
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 25,
          },
        }),
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            width: 200,
            background: '#f5f5f5',
            marginBottom: 30,
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 35,
          },
        },
        /*#__PURE__*/ React__default.createElement(ClampText, {
          content: text,
          maxLines: 3,
          expanded: expanded,
          renderAfter: function renderAfter(clamped) {
            return /*#__PURE__*/ React__default.createElement(
              'span',
              {
                style: {
                  background: '#61dafb',
                  padding: '0 4px',
                },
                onClick: function onClick() {
                  setExpended(!!clamped);
                },
                __self: _this$3,
                __source: {
                  fileName: _jsxFileName$3,
                  lineNumber: 41,
                },
              },
              clamped ? 'open' : 'close',
            );
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 36,
          },
        }),
      ),
      /*#__PURE__*/ React__default.createElement(
        'h2',
        {
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 46,
          },
        },
        'Clamp Html',
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: {
            width: 200,
            background: '#f5f5f5',
            marginBottom: 30,
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 47,
          },
        },
        /*#__PURE__*/ React__default.createElement(ClampInlineHtml, {
          content: html$2,
          maxLines: 3,
          expanded: expanded,
          renderAfter: function renderAfter(clamped) {
            return /*#__PURE__*/ React__default.createElement(
              'span',
              {
                style: {
                  background: '#61dafb',
                  padding: '0 4px',
                },
                onClick: function onClick() {
                  setExpended(!!clamped);
                },
                __self: _this$3,
                __source: {
                  fileName: _jsxFileName$3,
                  lineNumber: 53,
                },
              },
              clamped ? 'open' : 'close',
            );
          },
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 48,
          },
        }),
      ),
    );
  };

  ReactDOM.render(
    /*#__PURE__*/ React__default.createElement(App, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 62,
      },
    }),
    document.querySelector('#app'),
  );
});
//# sourceMappingURL=index.js.map
