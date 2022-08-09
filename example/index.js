
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM));
})(this, (function (t, ReactDOM) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var t__default = /*#__PURE__*/_interopDefaultLegacy(t);
	var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var functionBindNative = !fails(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var FunctionPrototype$2 = Function.prototype;
	var apply = FunctionPrototype$2.apply;
	var call$2 = FunctionPrototype$2.call;

	// eslint-disable-next-line es-x/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call$2.bind(apply) : function () {
	  return call$2.apply(apply, arguments);
	});

	var FunctionPrototype$1 = Function.prototype;
	var bind$1 = FunctionPrototype$1.bind;
	var call$1 = FunctionPrototype$1.call;
	var uncurryThis = functionBindNative && bind$1.bind(call$1, call$1);

	var functionUncurryThis = functionBindNative ? function (fn) {
	  return fn && uncurryThis(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$1.apply(fn, arguments);
	  };
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable = function (argument) {
	  return typeof argument == 'function';
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call = Function.prototype.call;

	var functionCall = functionBindNative ? call.bind(call) : function () {
	  return call.apply(call, arguments);
	};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$8 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var objectPropertyIsEnumerable = {
		f: f$8
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$1 = functionUncurryThis({}.toString);
	var stringSlice$1 = functionUncurryThis(''.slice);

	var classofRaw = function (it) {
	  return stringSlice$1(toString$1(it), 8, -1);
	};

	var $Object$4 = Object;
	var split = functionUncurryThis(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	var $TypeError$8 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw $TypeError$8("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable(it);
	};

	var path = {};

	var aFunction = function (variable) {
	  return isCallable(variable) ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var Deno = global_1.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es-x/no-symbol -- required for testing */



	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version && engineV8Version < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */


	var useSymbolAsUid = nativeSymbol
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var $Object$3 = Object;

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$3(it));
	};

	var $String$3 = String;

	var tryToString = function (argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var $TypeError$7 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw $TypeError$7(tryToString(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var $TypeError$6 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  throw $TypeError$6("Can't convert object to primitive value");
	};

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;

	var defineGlobalProperty = function (key, value) {
	  try {
	    defineProperty$2(global_1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});

	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.24.1',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	});

	var $Object$2 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return $Object$2(requireObjectCoercible(argument));
	};

	var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject(it), key);
	};

	var id = 0;
	var postfix = Math.random();
	var toString = functionUncurryThis(1.0.toString);

	var uid = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
	};

	var WellKnownSymbolsStore$1 = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!hasOwnProperty_1(WellKnownSymbolsStore$1, name) || !(nativeSymbol || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$1[name];
	    } else if (useSymbolAsUid && symbolFor) {
	      WellKnownSymbolsStore$1[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore$1[name];
	};

	var $TypeError$5 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = functionCall(exoticToPrim, input, pref);
	    if (!isObject(result) || isSymbol(result)) return result;
	    throw $TypeError$5("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$7 = descriptors ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$7
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var bind = functionUncurryThis(functionUncurryThis.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : functionBindNative ? bind(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = descriptors && fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var $String$2 = String;
	var $TypeError$4 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw $TypeError$4($String$2(argument) + ' is not an object');
	};

	var $TypeError$3 = TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$6 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$6
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return functionApply(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwnProperty_1(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable(sourceProperty)) resultProperty = functionUncurryThis(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwnProperty_1(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$6 = Array.isArray || function isArray(argument) {
	  return classofRaw(argument) == 'Array';
	};

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	_export({ target: 'Array', stat: true }, {
	  isArray: isArray$6
	});

	var isArray$5 = path.Array.isArray;

	var isArray$4 = isArray$5;

	var isArray$3 = isArray$4;

	var isArray$2 = isArray$3;

	var isArray$1 = isArray$2;

	var isArray = isArray$1;

	var arrayWithHoles = createCommonjsModule(function (module) {
	function _arrayWithHoles(arr) {
	  if (isArray(arr)) return arr;
	}

	module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es-x/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : mathTrunc(number);
	};

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};

	var $TypeError$2 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
	  return it;
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var $Object$1 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
	};

	var functionToString = functionUncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(sharedStore.inspectSource)) {
	  sharedStore.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = functionUncurryThis(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor = !construct || fails(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var SPECIES$2 = wellKnownSymbol('species');
	var $Array$3 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor = function (originalArray) {
	  var C;
	  if (isArray$6(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array$3 || isArray$6(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$3 : C;
	};

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};

	var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike(E);
	        doesNotExceedSafeInteger(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var $String$1 = String;

	var toString_1 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var max$2 = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max$2(integer + length, 0) : min(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var hiddenKeys$1 = {};

	var indexOf = arrayIncludes.indexOf;


	var push$2 = functionUncurryThis([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$2(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
	    ~indexOf(result, key) || push$2(result, key);
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
	  'valueOf'
	];

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es-x/no-object-keys -- safe
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	var f$5 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var objectDefineProperties = {
		f: f$5
	};

	var html$1 = getBuiltIn('document', 'documentElement');

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	/* global ActiveXObject -- old IE, WSH */








	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

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
	  html$1.appendChild(iframe);
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
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
	};

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$4
	};

	var $Array$2 = Array;
	var max$1 = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = $Array$2(max$1(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	/* eslint-disable es-x/no-object-getownpropertynames -- safe */


	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;


	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySliceSimple(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$3 = function getOwnPropertyNames(it) {
	  return windowNames && classofRaw(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$3
	};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	var f$2 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$2
	};

	var defineBuiltIn = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	  return target;
	};

	var f$1 = wellKnownSymbol;

	var wellKnownSymbolWrapped = {
		f: f$1
	};

	var defineProperty$1 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!hasOwnProperty_1(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return functionCall(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty = objectDefineProperty.f;





	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwnProperty_1(target, TO_STRING_TAG$1)) {
	      defineProperty(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$2 = global_1.TypeError;
	var WeakMap = global_1.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap || sharedStore.state) {
	  var store = sharedStore.state || (sharedStore.state = new WeakMap());
	  var wmget = functionUncurryThis(store.get);
	  var wmhas = functionUncurryThis(store.has);
	  var wmset = functionUncurryThis(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwnProperty_1(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwnProperty_1(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var push$1 = functionUncurryThis([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that);
	    var length = lengthOfArrayLike(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$1(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$1(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$1(7)
	};

	var $forEach = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';

	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(SYMBOL);

	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global_1.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$1 = global_1.TypeError;
	var QObject = global_1.QObject;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty = objectDefineProperty.f;
	var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
	var push = functionUncurryThis([].push);

	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var WellKnownSymbolsStore = shared('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate(SymbolPrototype);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPropertyKey(P);
	  anObject(Attributes);
	  if (hasOwnProperty_1(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!descriptors || functionCall($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey(V);
	  var enumerable = functionCall(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$1 && hasOwnProperty_1(AllSymbols, P) && !hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwnProperty_1(this, P) || !hasOwnProperty_1(AllSymbols, P) || hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype$1 && hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwnProperty_1(AllSymbols, key) && !(hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys$1, key)) push(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype$1, key))) {
	      push(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (objectIsPrototypeOf(SymbolPrototype, this)) throw TypeError$1('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) functionCall(setter, ObjectPrototypeSymbols, value);
	      if (hasOwnProperty_1(this, HIDDEN) && hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];

	  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });

	  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectDefineProperties.f = $defineProperties;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  wellKnownSymbolWrapped.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });
	  }
	}

	_export({ global: true, constructor: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	symbolDefineToPrimitive();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys$1[HIDDEN] = true;

	/* eslint-disable es-x/no-symbol -- safe */
	var nativeSymbolRegistry = nativeSymbol && !!Symbol['for'] && !!Symbol.keyFor;

	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	_export({ target: 'Symbol', stat: true, forced: !nativeSymbolRegistry }, {
	  'for': function (key) {
	    var string = toString_1(key);
	    if (hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var SymbolToStringRegistry = shared('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	_export({ target: 'Symbol', stat: true, forced: !nativeSymbolRegistry }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
	    if (hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var arraySlice = functionUncurryThis([].slice);

	var $stringify = getBuiltIn('JSON', 'stringify');
	var exec = functionUncurryThis(/./.exec);
	var charAt$2 = functionUncurryThis(''.charAt);
	var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
	var replace = functionUncurryThis(''.replace);
	var numberToString = functionUncurryThis(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi$1 = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !nativeSymbol || fails(function () {
	  var symbol = getBuiltIn('Symbol')();
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) != '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) != '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) != '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice(arguments);
	  var $replacer = replacer;
	  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	  if (!isArray$6(replacer)) replacer = function (key, value) {
	    if (isCallable($replacer)) value = functionCall($replacer, this, key, value);
	    if (!isSymbol(value)) return value;
	  };
	  args[1] = replacer;
	  return functionApply($stringify, null, args);
	};

	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt$2(string, offset - 1);
	  var next = charAt$2(string, offset + 1);
	  if ((exec(low, match) && !exec(hi$1, next)) || (exec(hi$1, match) && !exec(low, prev))) {
	    return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
	  } return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  _export({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice(arguments);
	      var result = functionApply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED = !nativeSymbol || fails(function () { objectGetOwnPropertySymbols.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	_export({ target: 'Object', stat: true, forced: FORCED }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
	  }
	});

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol('asyncIterator');

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol('hasInstance');

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol('isConcatSpreadable');

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol('match');

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol('matchAll');

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol('replace');

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol('search');

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol('species');

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol('split');

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	symbolDefineToPrimitive();

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag(getBuiltIn('Symbol'), 'Symbol');

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol('unscopables');

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag(global_1.JSON, 'JSON', true);

	var symbol$5 = path.Symbol;

	var iterators = {};

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = correctPrototypeGetter ? $Object.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object ? ObjectPrototype : null;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es-x/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = objectCreate(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable(IteratorPrototype$1[ITERATOR$4])) {
	  defineBuiltIn(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $String = String;
	var $TypeError$1 = TypeError;

	var aPossiblePrototype = function (argument) {
	  if (typeof argument == 'object' || isCallable(argument)) return argument;
	  throw $TypeError$1("Can't set " + $String(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */




	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
	Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var PROPER_FUNCTION_NAME = functionName.PROPER;
	var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return functionCall(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
	  }
	  iterators[NAME] = defaultIterator;

	  return methods;
	};

	objectDefineProperty.f;




	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

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
	  TouchList: 0
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var symbol$4 = symbol$5;

	var symbol$3 = symbol$4;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('asyncDispose');

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('dispose');

	// `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('matcher');

	// `Symbol.metadataKey` well-known symbol
	// https://github.com/tc39/proposal-decorator-metadata
	defineWellKnownSymbol('metadataKey');

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol('observable');

	// TODO: Remove from `core-js@4`


	// `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators
	defineWellKnownSymbol('metadata');

	// TODO: remove from `core-js@4`


	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('patternMatch');

	// TODO: remove from `core-js@4`


	defineWellKnownSymbol('replaceAll');

	// TODO: Remove from `core-js@4`




	var symbol$2 = symbol$3;

	var symbol$1 = symbol$2;

	var symbol = symbol$1;

	var charAt$1 = functionUncurryThis(''.charAt);
	var charCodeAt = functionUncurryThis(''.charCodeAt);
	var stringSlice = functionUncurryThis(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString_1(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$1(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var charAt = stringMultibyte.charAt;




	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString_1(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var ITERATOR$2 = wellKnownSymbol('iterator');

	var getIteratorMethod$5 = function (it) {
	  if (it != undefined) return getMethod(it, ITERATOR$2)
	    || getMethod(it, '@@iterator')
	    || iterators[classof(it)];
	};

	var getIteratorMethod_1 = getIteratorMethod$5;

	var getIteratorMethod$4 = getIteratorMethod_1;

	var getIteratorMethod$3 = getIteratorMethod$4;

	var getIteratorMethod$2 = getIteratorMethod$3;

	var getIteratorMethod$1 = getIteratorMethod$2;

	var getIteratorMethod = getIteratorMethod$1;

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof symbol !== "undefined" && getIteratorMethod(arr) || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

	var SPECIES = wellKnownSymbol('species');
	var $Array$1 = Array;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$6(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor(Constructor) && (Constructor === $Array$1 || isArray$6(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return arraySlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var slice$6 = entryVirtual('Array').slice;

	var ArrayPrototype$1 = Array.prototype;

	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$1 || (objectIsPrototypeOf(ArrayPrototype$1, it) && own === ArrayPrototype$1.slice) ? slice$6 : own;
	};

	var slice$4 = slice$5;

	var slice$3 = slice$4;

	var slice$2 = slice$3;

	var slice$1 = slice$2;

	var slice = slice$1;

	var iteratorClose = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = functionCall(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject(innerResult);
	  return value;
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var ITERATOR$1 = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
	};

	var $TypeError = TypeError;

	var getIterator = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$5(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
	  throw $TypeError(tryToString(argument) + ' is not iterable');
	};

	var $Array = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod$5(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = functionCall(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es-x/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: arrayFrom
	});

	var from_1$5 = path.Array.from;

	var from_1$4 = from_1$5;

	var from_1$3 = from_1$4;

	var from_1$2 = from_1$3;

	var from_1$1 = from_1$2;

	var from_1 = from_1$1;

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);

	  var n = slice(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from_1(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var nonIterableRest = createCommonjsModule(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var slicedToArray = createCommonjsModule(function (module) {
	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}function c(t){return t&&t.default||t}var l,s,f=function(t){return t&&t.Math==Math&&t},p=f("object"==typeof globalThis&&globalThis)||f("object"==typeof window&&window)||f("object"==typeof self&&self)||f("object"==typeof a&&a)||function(){return this}()||Function("return this")(),d=function(t){try{return !!t()}catch(t){return !0}},h=!d((function(){var t=function(){}.bind();return "function"!=typeof t||t.hasOwnProperty("prototype")})),m=Function.prototype,y=m.apply,g=m.call,v="object"==typeof Reflect&&Reflect.apply||(h?g.bind(y):function(){return g.apply(y,arguments)}),b=Function.prototype,x=b.bind,w=b.call,O=h&&x.bind(w,w),S=h?function(t){return t&&O(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},k=function(t){return "function"==typeof t},A=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),E=Function.prototype.call,T=h?E.bind(E):function(){return E.apply(E,arguments)},j={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor,C={f:P&&!j.call({1:2},1)?function(t){var e=P(this,t);return !!e&&e.enumerable}:j},F=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},M=S({}.toString),_=S("".slice),L=function(t){return _(M(t),8,-1)},R=Object,D=S("".split),N=d((function(){return !R("z").propertyIsEnumerable(0)}))?function(t){return "String"==L(t)?D(t,""):R(t)}:R,I=TypeError,z=function(t){if(null==t)throw I("Can't call method on "+t);return t},B=function(t){return N(z(t))},H=function(t){return "object"==typeof t?null!==t:k(t)},V={},U=function(t){return k(t)?t:void 0},G=function(t,e){return arguments.length<2?U(V[t])||U(p[t]):V[t]&&V[t][e]||p[t]&&p[t][e]},q=S({}.isPrototypeOf),X=G("navigator","userAgent")||"",W=p.process,Y=p.Deno,$=W&&W.versions||Y&&Y.version,Z=$&&$.v8;Z&&(s=(l=Z.split("."))[0]>0&&l[0]<4?1:+(l[0]+l[1])),!s&&X&&(!(l=X.match(/Edge\/(\d+)/))||l[1]>=74)&&(l=X.match(/Chrome\/(\d+)/))&&(s=+l[1]);var J=s,K=!!Object.getOwnPropertySymbols&&!d((function(){var t=Symbol();return !String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&J&&J<41})),Q=K&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,tt=Object,et=Q?function(t){return "symbol"==typeof t}:function(t){var e=G("Symbol");return k(e)&&q(e.prototype,tt(t))},rt=String,nt=function(t){try{return rt(t)}catch(t){return "Object"}},ot=TypeError,it=function(t){if(k(t))return t;throw ot(nt(t)+" is not a function")},at=function(t,e){var r=t[e];return null==r?void 0:it(r)},ut=TypeError,ct=Object.defineProperty,lt=p["__core-js_shared__"]||function(t,e){try{ct(p,t,{value:e,configurable:!0,writable:!0});}catch(r){p[t]=e;}return e}("__core-js_shared__",{}),st=u((function(t){(t.exports=function(t,e){return lt[t]||(lt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});})),ft=Object,pt=function(t){return ft(z(t))},dt=S({}.hasOwnProperty),ht=Object.hasOwn||function(t,e){return dt(pt(t),e)},mt=0,yt=Math.random(),gt=S(1..toString),vt=function(t){return "Symbol("+(void 0===t?"":t)+")_"+gt(++mt+yt,36)},bt=st("wks"),xt=p.Symbol,wt=xt&&xt.for,Ot=Q?xt:xt&&xt.withoutSetter||vt,St=function(t){if(!ht(bt,t)||!K&&"string"!=typeof bt[t]){var e="Symbol."+t;K&&ht(xt,t)?bt[t]=xt[t]:bt[t]=Q&&wt?wt(e):Ot(e);}return bt[t]},kt=TypeError,At=St("toPrimitive"),Et=function(t,e){if(!H(t)||et(t))return t;var r,n=at(t,At);if(n){if(void 0===e&&(e="default"),r=T(n,t,e),!H(r)||et(r))return r;throw kt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var r,n;if("string"===e&&k(r=t.toString)&&!H(n=T(r,t)))return n;if(k(r=t.valueOf)&&!H(n=T(r,t)))return n;if("string"!==e&&k(r=t.toString)&&!H(n=T(r,t)))return n;throw ut("Can't convert object to primitive value")}(t,e)},Tt=function(t){var e=Et(t,"string");return et(e)?e:e+""},jt=p.document,Pt=H(jt)&&H(jt.createElement),Ct=function(t){return Pt?jt.createElement(t):{}},Ft=!A&&!d((function(){return 7!=Object.defineProperty(Ct("div"),"a",{get:function(){return 7}}).a})),Mt=Object.getOwnPropertyDescriptor,_t={f:A?Mt:function(t,e){if(t=B(t),e=Tt(e),Ft)try{return Mt(t,e)}catch(t){}if(ht(t,e))return F(!T(C.f,t,e),t[e])}},Lt=/#|\.prototype\./,Rt=function(t,e){var r=Nt[Dt(t)];return r==zt||r!=It&&(k(e)?d(e):!!e)},Dt=Rt.normalize=function(t){return String(t).replace(Lt,".").toLowerCase()},Nt=Rt.data={},It=Rt.NATIVE="N",zt=Rt.POLYFILL="P",Bt=Rt,Ht=S(S.bind),Vt=function(t,e){return it(t),void 0===e?t:h?Ht(t,e):function(){return t.apply(e,arguments)}},Ut=A&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Gt=String,qt=TypeError,Xt=function(t){if(H(t))return t;throw qt(Gt(t)+" is not an object")},Wt=TypeError,Yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Zt={f:A?Ut?function(t,e,r){if(Xt(t),e=Tt(e),Xt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=$t(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1});}return Yt(t,e,r)}:Yt:function(t,e,r){if(Xt(t),e=Tt(e),Xt(r),Ft)try{return Yt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Wt("Accessors not supported");return "value"in r&&(t[e]=r.value),t}},Jt=A?function(t,e,r){return Zt.f(t,e,F(1,r))}:function(t,e,r){return t[e]=r,t},Kt=_t.f,Qt=function(t){var e=function(r,n,o){if(this instanceof e){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,n)}return new t(r,n,o)}return v(t,this,arguments)};return e.prototype=t.prototype,e},te=function(t,e){var r,n,o,i,a,u,c,l,s=t.target,f=t.global,d=t.stat,h=t.proto,m=f?p:d?p[s]:(p[s]||{}).prototype,y=f?V:V[s]||Jt(V,s,{})[s],g=y.prototype;for(o in e)r=!Bt(f?o:s+(d?".":"#")+o,t.forced)&&m&&ht(m,o),a=y[o],r&&(u=t.dontCallGetSet?(l=Kt(m,o))&&l.value:m[o]),i=r&&u?u:e[o],r&&typeof a==typeof i||(c=t.bind&&r?Vt(i,p):t.wrap&&r?Qt(i):h&&k(i)?S(i):i,(t.sham||i&&i.sham||a&&a.sham)&&Jt(c,"sham",!0),Jt(y,o,c),h&&(ht(V,n=s+"Prototype")||Jt(V,n,{}),Jt(V[n],o,i),t.real&&g&&!g[o]&&Jt(g,o,i)));},ee=Math.ceil,re=Math.floor,ne=Math.trunc||function(t){var e=+t;return (e>0?re:ee)(e)},oe=function(t){var e=+t;return e!=e||0===e?0:ne(e)},ie=Math.max,ae=Math.min,ue=function(t,e){var r=oe(t);return r<0?ie(r+e,0):ae(r,e)},ce=Math.min,le=function(t){return (e=t.length)>0?ce(oe(e),9007199254740991):0;var e;},se=function(t){return function(e,r,n){var o,i=B(e),a=le(i),u=ue(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return !0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return !t&&-1}},fe={includes:se(!0),indexOf:se(!1)},pe={},de=fe.indexOf,he=S([].push),me=function(t,e){var r,n=B(t),o=0,i=[];for(r in n)!ht(pe,r)&&ht(n,r)&&he(i,r);for(;e.length>o;)ht(n,r=e[o++])&&(~de(i,r)||he(i,r));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=Object.keys||function(t){return me(t,ye)},ve={f:Object.getOwnPropertySymbols},be=Object.assign,xe=Object.defineProperty,we=S([].concat),Oe=!be||d((function(){if(A&&1!==be({b:1},be(xe({},"a",{enumerable:!0,get:function(){xe(this,"b",{value:3,enumerable:!1});}}),{b:2})).b)return !0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t;})),7!=be({},t)[r]||"abcdefghijklmnopqrst"!=ge(be({},e)).join("")}))?function(t,e){for(var r=pt(t),n=arguments.length,o=1,i=ve.f,a=C.f;n>o;)for(var u,c=N(arguments[o++]),l=i?we(ge(c),i(c)):ge(c),s=l.length,f=0;s>f;)u=l[f++],A&&!T(a,c,u)||(r[u]=c[u]);return r}:be;te({target:"Object",stat:!0,arity:2,forced:Object.assign!==Oe},{assign:Oe});var Se=V.Object.assign,ke=S([].slice),Ae=Function,Ee=S([].concat),Te=S([].join),je={},Pe=function(t,e,r){if(!ht(je,e)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";je[e]=Ae("C,a","return new C("+Te(n,",")+")");}return je[e](t,r)},Ce=h?Ae.bind:function(t){var e=it(this),r=e.prototype,n=ke(arguments,1),o=function(){var r=Ee(n,ke(arguments));return this instanceof o?Pe(e,r.length,r):e.apply(t,r)};return H(r)&&(o.prototype=r),o};te({target:"Function",proto:!0,forced:Function.bind!==Ce},{bind:Ce});var Fe=function(t){return V[t+"Prototype"]},Me=Fe("Function").bind,_e=Function.prototype,Le=function(t){var e=t.bind;return t===_e||q(_e,t)&&e===_e.bind?Me:e},Re=u((function(t){function e(){var r;return t.exports=e=Se?Le(r=Se).call(r):function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports;})),De={};De[St("toStringTag")]="z";var Ne,Ie="[object z]"===String(De),ze=St("toStringTag"),Be=Object,He="Arguments"==L(function(){return arguments}()),Ve=Ie?L:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Be(t),ze))?r:He?L(e):"Object"==(n=L(e))&&k(e.callee)?"Arguments":n},Ue=String,Ge=function(t){if("Symbol"===Ve(t))throw TypeError("Cannot convert a Symbol value to a string");return Ue(t)},qe={f:A&&!Ut?Object.defineProperties:function(t,e){Xt(t);for(var r,n=B(e),o=ge(e),i=o.length,a=0;i>a;)Zt.f(t,r=o[a++],n[r]);return t}},Xe=G("document","documentElement"),We=st("keys"),Ye=function(t){return We[t]||(We[t]=vt(t))},$e=Ye("IE_PROTO"),Ze=function(){},Je=function(t){return "<script>"+t+"<\/script>"},Ke=function(t){t.write(Je("")),t.close();var e=t.parentWindow.Object;return t=null,e},Qe=function(){try{Ne=new ActiveXObject("htmlfile");}catch(t){}var t,e;Qe="undefined"!=typeof document?document.domain&&Ne?Ke(Ne):((e=Ct("iframe")).style.display="none",Xe.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Je("document.F=Object")),t.close(),t.F):Ke(Ne);for(var r=ye.length;r--;)delete Qe.prototype[ye[r]];return Qe()};pe[$e]=!0;var tr=Object.create||function(t,e){var r;return null!==t?(Ze.prototype=Xt(t),r=new Ze,Ze.prototype=null,r[$e]=t):r=Qe(),void 0===e?r:qe.f(r,e)},er=ye.concat("length","prototype"),rr={f:Object.getOwnPropertyNames||function(t){return me(t,er)}},nr=function(t,e,r){var n=Tt(e);n in t?Zt.f(t,n,F(0,r)):t[n]=r;},or=Array,ir=Math.max,ar=rr.f,ur="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],cr=function(t){try{return ar(t)}catch(t){return function(t,e,r){for(var n=le(t),o=ue(e,n),i=ue(void 0===r?n:r,n),a=or(ir(i-o,0)),u=0;o<i;o++,u++)nr(a,u,t[o]);return a.length=u,a}(ur)}},lr={f:function(t){return ur&&"Window"==L(t)?cr(t):ar(B(t))}},sr=function(t,e,r,n){return n&&n.enumerable?t[e]=r:Jt(t,e,r),t},fr={f:St},pr=Zt.f,dr=function(t){var e=V.Symbol||(V.Symbol={});ht(e,t)||pr(e,t,{value:fr.f(t)});},hr=function(){var t=G("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,n=St("toPrimitive");e&&!e[n]&&sr(e,n,(function(t){return T(r,this)}),{arity:1});},mr=Ie?{}.toString:function(){return "[object "+Ve(this)+"]"},yr=Zt.f,gr=St("toStringTag"),vr=function(t,e,r,n){if(t){var o=r?t:t.prototype;ht(o,gr)||yr(o,gr,{configurable:!0,value:e}),n&&!Ie&&Jt(o,"toString",mr);}},br=S(Function.toString);k(lt.inspectSource)||(lt.inspectSource=function(t){return br(t)});var xr,wr,Or,Sr=lt.inspectSource,kr=p.WeakMap,Ar=k(kr)&&/native code/.test(Sr(kr)),Er=p.TypeError,Tr=p.WeakMap;if(Ar||lt.state){var jr=lt.state||(lt.state=new Tr),Pr=S(jr.get),Cr=S(jr.has),Fr=S(jr.set);xr=function(t,e){if(Cr(jr,t))throw new Er("Object already initialized");return e.facade=t,Fr(jr,t,e),e},wr=function(t){return Pr(jr,t)||{}},Or=function(t){return Cr(jr,t)};}else {var Mr=Ye("state");pe[Mr]=!0,xr=function(t,e){if(ht(t,Mr))throw new Er("Object already initialized");return e.facade=t,Jt(t,Mr,e),e},wr=function(t){return ht(t,Mr)?t[Mr]:{}},Or=function(t){return ht(t,Mr)};}var _r={set:xr,get:wr,has:Or,enforce:function(t){return Or(t)?wr(t):xr(t,{})},getterFor:function(t){return function(e){var r;if(!H(e)||(r=wr(e)).type!==t)throw Er("Incompatible receiver, "+t+" required");return r}}},Lr=Array.isArray||function(t){return "Array"==L(t)},Rr=function(){},Dr=[],Nr=G("Reflect","construct"),Ir=/^\s*(?:class|function)\b/,zr=S(Ir.exec),Br=!Ir.exec(Rr),Hr=function(t){if(!k(t))return !1;try{return Nr(Rr,Dr,t),!0}catch(t){return !1}},Vr=function(t){if(!k(t))return !1;switch(Ve(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return !1}try{return Br||!!zr(Ir,Sr(t))}catch(t){return !0}};Vr.sham=!0;var Ur=!Nr||d((function(){var t;return Hr(Hr.call)||!Hr(Object)||!Hr((function(){t=!0;}))||t}))?Vr:Hr,Gr=St("species"),qr=Array,Xr=function(t,e){return new(function(t){var e;return Lr(t)&&(e=t.constructor,(Ur(e)&&(e===qr||Lr(e.prototype))||H(e)&&null===(e=e[Gr]))&&(e=void 0)),void 0===e?qr:e}(t))(0===e?0:e)},Wr=S([].push),Yr=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,l,s,f){for(var p,d,h=pt(c),m=N(h),y=Vt(l,s),g=le(m),v=0,b=f||Xr,x=e?b(c,g):r||a?b(c,0):void 0;g>v;v++)if((u||v in m)&&(d=y(p=m[v],v,h),t))if(e)x[v]=d;else if(d)switch(t){case 3:return !0;case 5:return p;case 6:return v;case 2:Wr(x,p);}else switch(t){case 4:return !1;case 7:Wr(x,p);}return i?-1:n||o?o:x}},$r={forEach:Yr(0),map:Yr(1),filter:Yr(2),some:Yr(3),every:Yr(4),find:Yr(5),findIndex:Yr(6),filterReject:Yr(7)}.forEach,Zr=Ye("hidden"),Jr=_r.set,Kr=_r.getterFor("Symbol"),Qr=Object.prototype,tn=p.Symbol,en=tn&&tn.prototype,rn=p.TypeError,nn=p.QObject,on=_t.f,an=Zt.f,un=lr.f,cn=C.f,ln=S([].push),sn=st("symbols"),fn=st("op-symbols"),pn=st("wks"),dn=!nn||!nn.prototype||!nn.prototype.findChild,hn=A&&d((function(){return 7!=tr(an({},"a",{get:function(){return an(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=on(Qr,e);n&&delete Qr[e],an(t,e,r),n&&t!==Qr&&an(Qr,e,n);}:an,mn=function(t,e){var r=sn[t]=tr(en);return Jr(r,{type:"Symbol",tag:t,description:e}),A||(r.description=e),r},yn=function(t,e,r){t===Qr&&yn(fn,e,r),Xt(t);var n=Tt(e);return Xt(r),ht(sn,n)?(r.enumerable?(ht(t,Zr)&&t[Zr][n]&&(t[Zr][n]=!1),r=tr(r,{enumerable:F(0,!1)})):(ht(t,Zr)||an(t,Zr,F(1,{})),t[Zr][n]=!0),hn(t,n,r)):an(t,n,r)},gn=function(t,e){Xt(t);var r=B(e),n=ge(r).concat(wn(r));return $r(n,(function(e){A&&!T(vn,r,e)||yn(t,e,r[e]);})),t},vn=function(t){var e=Tt(t),r=T(cn,this,e);return !(this===Qr&&ht(sn,e)&&!ht(fn,e))&&(!(r||!ht(this,e)||!ht(sn,e)||ht(this,Zr)&&this[Zr][e])||r)},bn=function(t,e){var r=B(t),n=Tt(e);if(r!==Qr||!ht(sn,n)||ht(fn,n)){var o=on(r,n);return !o||!ht(sn,n)||ht(r,Zr)&&r[Zr][n]||(o.enumerable=!0),o}},xn=function(t){var e=un(B(t)),r=[];return $r(e,(function(t){ht(sn,t)||ht(pe,t)||ln(r,t);})),r},wn=function(t){var e=t===Qr,r=un(e?fn:B(t)),n=[];return $r(r,(function(t){!ht(sn,t)||e&&!ht(Qr,t)||ln(n,sn[t]);})),n};K||(en=(tn=function(){if(q(en,this))throw rn("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?Ge(arguments[0]):void 0,e=vt(t),r=function(t){this===Qr&&T(r,fn,t),ht(this,Zr)&&ht(this[Zr],e)&&(this[Zr][e]=!1),hn(this,e,F(1,t));};return A&&dn&&hn(Qr,e,{configurable:!0,set:r}),mn(e,t)}).prototype,sr(en,"toString",(function(){return Kr(this).tag})),sr(tn,"withoutSetter",(function(t){return mn(vt(t),t)})),C.f=vn,Zt.f=yn,qe.f=gn,_t.f=bn,rr.f=lr.f=xn,ve.f=wn,fr.f=function(t){return mn(St(t),t)},A&&an(en,"description",{configurable:!0,get:function(){return Kr(this).description}})),te({global:!0,constructor:!0,wrap:!0,forced:!K,sham:!K},{Symbol:tn}),$r(ge(pn),(function(t){dr(t);})),te({target:"Symbol",stat:!0,forced:!K},{useSetter:function(){dn=!0;},useSimple:function(){dn=!1;}}),te({target:"Object",stat:!0,forced:!K,sham:!A},{create:function(t,e){return void 0===e?tr(t):gn(tr(t),e)},defineProperty:yn,defineProperties:gn,getOwnPropertyDescriptor:bn}),te({target:"Object",stat:!0,forced:!K},{getOwnPropertyNames:xn}),hr(),vr(tn,"Symbol"),pe[Zr]=!0;var On=K&&!!Symbol.for&&!!Symbol.keyFor,Sn=st("string-to-symbol-registry"),kn=st("symbol-to-string-registry");te({target:"Symbol",stat:!0,forced:!On},{for:function(t){var e=Ge(t);if(ht(Sn,e))return Sn[e];var r=G("Symbol")(e);return Sn[e]=r,kn[r]=e,r}});var An=st("symbol-to-string-registry");te({target:"Symbol",stat:!0,forced:!On},{keyFor:function(t){if(!et(t))throw TypeError(nt(t)+" is not a symbol");if(ht(An,t))return An[t]}});var En=G("JSON","stringify"),Tn=S(/./.exec),jn=S("".charAt),Pn=S("".charCodeAt),Cn=S("".replace),Fn=S(1..toString),Mn=/[\uD800-\uDFFF]/g,_n=/^[\uD800-\uDBFF]$/,Ln=/^[\uDC00-\uDFFF]$/,Rn=!K||d((function(){var t=G("Symbol")();return "[null]"!=En([t])||"{}"!=En({a:t})||"{}"!=En(Object(t))})),Dn=d((function(){return '"\\udf06\\ud834"'!==En("\udf06\ud834")||'"\\udead"'!==En("\udead")})),Nn=function(t,e){var r=ke(arguments),n=e;if((H(e)||void 0!==t)&&!et(t))return Lr(e)||(e=function(t,e){if(k(n)&&(e=T(n,this,t,e)),!et(e))return e}),r[1]=e,v(En,null,r)},In=function(t,e,r){var n=jn(r,e-1),o=jn(r,e+1);return Tn(_n,t)&&!Tn(Ln,o)||Tn(Ln,t)&&!Tn(_n,n)?"\\u"+Fn(Pn(t,0),16):t};En&&te({target:"JSON",stat:!0,arity:3,forced:Rn||Dn},{stringify:function(t,e,r){var n=ke(arguments),o=v(Rn?Nn:En,null,n);return Dn&&"string"==typeof o?Cn(o,Mn,In):o}});var zn=!K||d((function(){ve.f(1);}));te({target:"Object",stat:!0,forced:zn},{getOwnPropertySymbols:function(t){var e=ve.f;return e?e(pt(t)):[]}});var Bn,Hn,Vn=V.Object.getOwnPropertySymbols,Un=fe.indexOf,Gn=S([].indexOf),qn=!!Gn&&1/Gn([1],1,-0)<0,Xn=!!(Hn=[]["indexOf"])&&d((function(){Hn.call(null,Bn||function(){return 1},1);}));te({target:"Array",proto:!0,forced:qn||!Xn},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return qn?Gn(this,t,e)||0:Un(this,t,e)}});var Wn=Fe("Array").indexOf,Yn=Array.prototype,$n=function(t){var e=t.indexOf;return t===Yn||q(Yn,t)&&e===Yn.indexOf?Wn:e},Zn=d((function(){ge(1);}));te({target:"Object",stat:!0,forced:Zn},{keys:function(t){return ge(pt(t))}});var Jn=V.Object.keys,Kn=u((function(t){t.exports=function(t,e){if(null==t)return {};var r,n,o={},i=Jn(t);for(n=0;n<i.length;n++)r=i[n],$n(e).call(e,r)>=0||(o[r]=t[r]);return o},t.exports.__esModule=!0,t.exports.default=t.exports;})),Qn=u((function(t){t.exports=function(t,e){if(null==t)return {};var r,n,o=Kn(t,e);if(Vn){var i=Vn(t);for(n=0;n<i.length;n++)r=i[n],$n(e).call(e,r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r]);}return o},t.exports.__esModule=!0,t.exports.default=t.exports;})),to=TypeError,eo=function(t){if(t>9007199254740991)throw to("Maximum allowed index exceeded");return t},ro=St("species"),no=function(t){return J>=51||!d((function(){var e=[];return (e.constructor={})[ro]=function(){return {foo:1}},1!==e[t](Boolean).foo}))},oo=St("isConcatSpreadable"),io=J>=51||!d((function(){var t=[];return t[oo]=!1,t.concat()[0]!==t})),ao=no("concat"),uo=function(t){if(!H(t))return !1;var e=t[oo];return void 0!==e?!!e:Lr(t)};te({target:"Array",proto:!0,arity:1,forced:!io||!ao},{concat:function(t){var e,r,n,o,i,a=pt(this),u=Xr(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(uo(i=-1===e?a:arguments[e]))for(o=le(i),eo(c+o),r=0;r<o;r++,c++)r in i&&nr(u,c,i[r]);else eo(c+1),nr(u,c++,i);return u.length=c,u}});var co=Fe("Array").concat,lo=Array.prototype,so=function(t){var e=t.concat;return t===lo||q(lo,t)&&e===lo.concat?co:e},fo=no("slice"),po=St("species"),ho=Array,mo=Math.max;te({target:"Array",proto:!0,forced:!fo},{slice:function(t,e){var r,n,o,i=B(this),a=le(i),u=ue(t,a),c=ue(void 0===e?a:e,a);if(Lr(i)&&(r=i.constructor,(Ur(r)&&(r===ho||Lr(r.prototype))||H(r)&&null===(r=r[po]))&&(r=void 0),r===ho||void 0===r))return ke(i,u,c);for(n=new(void 0===r?ho:r)(mo(c-u,0)),o=0;u<c;u++,o++)u in i&&nr(n,o,i[u]);return n.length=o,n}});var yo=Fe("Array").slice,go=Array.prototype,vo=function(t){var e=t.slice;return t===go||q(go,t)&&e===go.slice?yo:e};te({target:"Array",stat:!0},{isArray:Lr});var bo=V.Array.isArray,xo=u((function(t){t.exports=function(t){if(bo(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports;})),wo=Object.freeze({__proto__:null});dr("asyncIterator");var Oo=Object.freeze({__proto__:null});dr("hasInstance"),dr("isConcatSpreadable"),dr("iterator"),dr("match"),dr("matchAll"),dr("replace"),dr("search"),dr("species"),dr("split"),dr("toPrimitive"),hr(),dr("toStringTag"),vr(G("Symbol"),"Symbol"),dr("unscopables"),vr(p.JSON,"JSON",!0);var So=Object.freeze({__proto__:null}),ko=Object.freeze({__proto__:null});c(wo),c(Oo),c(So),c(ko);var Ao,Eo,To,jo=V.Symbol,Po={},Co=Function.prototype,Fo=A&&Object.getOwnPropertyDescriptor,Mo=ht(Co,"name"),_o={EXISTS:Mo,PROPER:Mo&&"something"===function(){}.name,CONFIGURABLE:Mo&&(!A||A&&Fo(Co,"name").configurable)},Lo=!d((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ro=Ye("IE_PROTO"),Do=Object,No=Do.prototype,Io=Lo?Do.getPrototypeOf:function(t){var e=pt(t);if(ht(e,Ro))return e[Ro];var r=e.constructor;return k(r)&&e instanceof r?r.prototype:e instanceof Do?No:null},zo=St("iterator"),Bo=!1;[].keys&&("next"in(To=[].keys())?(Eo=Io(Io(To)))!==Object.prototype&&(Ao=Eo):Bo=!0);var Ho=null==Ao||d((function(){var t={};return Ao[zo].call(t)!==t}));Ao=Ho?{}:tr(Ao),k(Ao[zo])||sr(Ao,zo,(function(){return this}));var Vo={IteratorPrototype:Ao,BUGGY_SAFARI_ITERATORS:Bo},Uo=Vo.IteratorPrototype,Go=function(){return this};Object.setPrototypeOf||"__proto__"in{}&&function(){var t,e=!1,r={};try{(t=S(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array;}catch(t){}}();var qo=_o.PROPER,Xo=Vo.BUGGY_SAFARI_ITERATORS,Wo=St("iterator"),Yo=function(){return this},$o=function(t,e,r,n,o,i,a){!function(t,e,r,n){var o=e+" Iterator";t.prototype=tr(Uo,{next:F(+!n,r)}),vr(t,o,!1,!0),Po[o]=Go;}(r,e,n);var u,c,l,s=function(t){if(t===o&&m)return m;if(!Xo&&t in d)return d[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},f=e+" Iterator",p=!1,d=t.prototype,h=d[Wo]||d["@@iterator"]||o&&d[o],m=!Xo&&h||s(o),y="Array"==e&&d.entries||h;if(y&&(u=Io(y.call(new t)))!==Object.prototype&&u.next&&(vr(u,f,!0,!0),Po[f]=Yo),qo&&"values"==o&&h&&"values"!==h.name&&(p=!0,m=function(){return T(h,this)}),o)if(c={values:s("values"),keys:i?m:s("keys"),entries:s("entries")},a)for(l in c)(Xo||p||!(l in d))&&sr(d,l,c[l]);else te({target:e,proto:!0,forced:Xo||p},c);return a&&d[Wo]!==m&&sr(d,Wo,m,{name:o}),Po[e]=m,c};Zt.f;var Zo=_r.set,Jo=_r.getterFor("Array Iterator");$o(Array,"Array",(function(t,e){Zo(this,{type:"Array Iterator",target:B(t),index:0,kind:e});}),(function(){var t=Jo(this),e=t.target,r=t.kind,n=t.index++;return !e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),Po.Arguments=Po.Array;var Ko=St("toStringTag");for(var Qo in {CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ti=p[Qo],ei=ti&&ti.prototype;ei&&Ve(ei)!==Ko&&Jt(ei,Ko,Qo),Po[Qo]=Po.Array;}var ri=jo;dr("asyncDispose"),dr("dispose"),dr("matcher"),dr("metadataKey"),dr("observable"),dr("metadata"),dr("patternMatch"),dr("replaceAll");var ni=ri,oi=S("".charAt),ii=S("".charCodeAt),ai=S("".slice),ui=function(t){return function(e,r){var n,o,i=Ge(z(e)),a=oe(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=ii(i,a))<55296||n>56319||a+1===u||(o=ii(i,a+1))<56320||o>57343?t?oi(i,a):n:t?ai(i,a,a+2):o-56320+(n-55296<<10)+65536}},ci={codeAt:ui(!1),charAt:ui(!0)}.charAt,li=_r.set,si=_r.getterFor("String Iterator");$o(String,"String",(function(t){li(this,{type:"String Iterator",string:Ge(t),index:0});}),(function(){var t,e=si(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=ci(r,n),e.index+=t.length,{value:t,done:!1})}));var fi=St("iterator"),pi=function(t){if(null!=t)return at(t,fi)||at(t,"@@iterator")||Po[Ve(t)]},di=pi,hi=u((function(t){t.exports=function(t,e){var r=null==t?null:void 0!==ni&&di(t)||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t;}finally{try{a||null==r.return||r.return();}finally{if(u)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports;})),mi=function(t,e,r,n){try{return n?e(Xt(r)[0],r[1]):e(r)}catch(e){!function(t,e,r){var n,o;Xt(t);try{if(!(n=at(t,"return"))){if("throw"===e)throw r;return r}n=T(n,t);}catch(t){o=!0,n=t;}if("throw"===e)throw r;if(o)throw n;Xt(n);}(t,"throw",e);}},yi=St("iterator"),gi=Array.prototype,vi=function(t){return void 0!==t&&(Po.Array===t||gi[yi]===t)},bi=TypeError,xi=function(t,e){var r=arguments.length<2?pi(t):e;if(it(r))return Xt(T(r,t));throw bi(nt(t)+" is not iterable")},wi=Array,Oi=St("iterator"),Si=!1;try{var ki=0,Ai={next:function(){return {done:!!ki++}},return:function(){Si=!0;}};Ai[Oi]=function(){return this},Array.from(Ai,(function(){throw 2}));}catch(t){}var Ei=!function(t,e){if(!e&&!Si)return !1;var r=!1;try{var n={};n[Oi]=function(){return {next:function(){return {done:r=!0}}}},t(n);}catch(t){}return r}((function(t){Array.from(t);}));te({target:"Array",stat:!0,forced:Ei},{from:function(t){var e=pt(t),r=Ur(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=Vt(o,n>2?arguments[2]:void 0));var a,u,c,l,s,f,p=pi(e),d=0;if(!p||this===wi&&vi(p))for(a=le(e),u=r?new this(a):wi(a);a>d;d++)f=i?o(e[d],d):e[d],nr(u,d,f);else for(s=(l=xi(e,p)).next,u=r?new this:[];!(c=T(s,l)).done;d++)f=i?mi(l,o,[c.value,d],!0):c.value,nr(u,d,f);return u.length=d,u}});var Ti=V.Array.from,ji=u((function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports;})),Pi=u((function(t){t.exports=function(t,e){var r;if(t){if("string"==typeof t)return ji(t,e);var n=vo(r=Object.prototype.toString.call(t)).call(r,8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Ti(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ji(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports;})),Ci=u((function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports;})),Fi=u((function(t){t.exports=function(t,e){return xo(t)||hi(t,e)||Pi(t,e)||Ci()},t.exports.__esModule=!0,t.exports.default=t.exports;})),Mi="START",_i="DONE",Li="START",Ri="DONE",Di="ADD",Ni="ASCEND ",Ii="DESCEND ",zi="DONE";function Bi(t){return Number(t.replace("px",""))}function Hi(t,e,r,n){var o=n.current?n.current.getClientRects().length:0;return !(!t&&"none"===e)&&(!!(t&&o>t)||!!("none"!==e&&r.current&&r.current.scrollHeight>Bi(e)))}var Vi=function(i){var a=i.ellipsis,u=void 0===a?"...":a,c=i.content,l=i.maxHeight,s=i.maxLines,f=i.expanded,p=void 0!==f&&f,d=i.renderContent,h=i.renderClampedContent,m=i.className,y=void 0===m?"":m,g=c.length||0,v=t.useRef(),b=t.useRef(),x=t.useRef(g),w=t.useState(g),O=Fi(w,2),S=O[0],k=O[1],A=t.useState(_i),E=Fi(A,2),T=E[0],j=E[1],P=t.useState(Ri),C=Fi(P,2),F=C[0],M=C[1],_=t.useState(zi),L=Fi(_,2),R=L[0],D=L[1],N=t.useState(!0),I=Fi(N,2),z=I[0],B=I[1],H=function(t$1){var e=t.useState(t$1),n=Fi(e,2),i=n[0],a=n[1];return t.useEffect((function(){a(t$1);}),[t$1]),i}(p),V=function(t$1,e,o,i,a,u,c){var l=t.useState((function(){return e()})),s=Fi(l,2),f=s[0],p=s[1];return t.useLayoutEffect((function(){!a||c?p(e()):i!==a&&p(o(i,u));}),[t$1,e,o,i,a,u,c]),f}(c,d,h,S,g,u,H),U=function(t$1,e){var o=t.useState("none"),i=Fi(o,2),a=i[0],u=i[1];return t.useLayoutEffect((function(){u(t$1?"none":e?"number"==typeof e?"".concat(e,"px"):e:"none");}),[t$1,e]),a}(H,l);t.useLayoutEffect((function(){!H&&Hi(s,U,v,b)&&T===_i&&j(Mi);}),[s,l,u,H,T,U]),t.useLayoutEffect((function(){T===Mi&&M(Li);}),[T,g]),t.useLayoutEffect((function(){var t=b.current?b.current.getClientRects().length:0,e=v.current&&v.current.scrollHeight<=Bi(U);F!==Li&&F!==Di||(Hi(s,U,v,b)?F===Di?(B(!1),k((function(t){return ~~(t-x.current)}))):(k((function(t){return ~~(t/2)})),x.current/=2):z&&("none"!==U&&e||s&&t<s)?(M(Di),k((function(t){return ~~(t+x.current/2)})),x.current/=2):(M(Ri),D(Ni)));}),[F,s,b,U,V,z]),t.useLayoutEffect((function(){var t=b.current?b.current.getClientRects().length:0;R===Ni?(!Hi(s,U,v,b)||t<2)&&S<g?k(S+1):D(Ii):R===Ii&&(Hi(s,U,v,b)&&t>1&&S>0?k(S-1):(D(zi),j(_i),x.current=g));}),[R,g,S,b,s,U]);var G=t__default["default"].createElement("span",null,V),q=t__default["default"].createElement("span",{ref:b,style:{boxShadow:"transparent 0 0",wordBreak:"break-all"}},G);return t__default["default"].createElement("div",{className:"react-simple-clamp ".concat(y),ref:v,style:{overflow:"hidden",maxHeight:U}},q)};Vi.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};var Ui=["content","renderAfter"],Gi=function(e){var r=e.content,n=void 0===r?"":r,o=e.renderAfter,a=void 0===o?function(){return t__default["default"].createElement(t.Fragment,null)}:o,u=Qn(e,Ui);return t__default["default"].createElement(Vi,Re({content:n,renderContent:function(){return t__default["default"].createElement("span",null,n,a(!1))},renderClampedContent:function(e,r){var o;return t__default["default"].createElement("span",null,so(o="".concat(vo(n).call(n,0,e))).call(o,r),a(!0))}},u))};Gi.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};var qi={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}},Xi={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}},Wi=1,Yi=4,$i=8,Zi=24,Ji=32;function Ki(t,e){return (t&e)===e}function Qi(t,e,r){var n,o,i,a=t.Properties,u=t.DOMAttributeNames;for(o in a)n=u[o]||(r?o:o.toLowerCase()),i=a[o],e[n]={attributeName:n,propertyName:o,mustUseProperty:Ki(i,Wi),hasBooleanValue:Ki(i,Yi),hasNumericValue:Ki(i,$i),hasPositiveNumericValue:Ki(i,Zi),hasOverloadedBooleanValue:Ki(i,Ji)};}var ta={};Qi(qi,ta);var ea={};Qi(Xi,ea,!0);var ra={};Qi(qi,ra),Qi(Xi,ra,!0);var na={html:ta,svg:ea,properties:ra,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))},oa=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ia=/\n/g,aa=/^\s*/,ua=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ca=/^:\s*/,la=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sa=/^[;\s]*/,fa=/^\s+|\s+$/g;function pa(t){return t?t.replace(fa,""):""}var da=function(t,e){var r,n=null;if(!t||"string"!=typeof t)return n;for(var o,i,a=function(t,e){if("string"!=typeof t)throw new TypeError("First argument must be a string");if(!t)return [];e=e||{};var r=1,n=1;function o(t){var e=t.match(ia);e&&(r+=e.length);var o=t.lastIndexOf("\n");n=~o?t.length-o:n+t.length;}function i(){var t={line:r,column:n};return function(e){return e.position=new a(t),l(),e}}function a(t){this.start=t,this.end={line:r,column:n},this.source=e.source;}function u(o){var i=new Error(e.source+":"+r+":"+n+": "+o);if(i.reason=o,i.filename=e.source,i.line=r,i.column=n,i.source=t,!e.silent)throw i}function c(e){var r=e.exec(t);if(r){var n=r[0];return o(n),t=t.slice(n.length),r}}function l(){c(aa);}function s(t){var e;for(t=t||[];e=f();)!1!==e&&t.push(e);return t}function f(){var e=i();if("/"==t.charAt(0)&&"*"==t.charAt(1)){for(var r=2;""!=t.charAt(r)&&("*"!=t.charAt(r)||"/"!=t.charAt(r+1));)++r;if(r+=2,""===t.charAt(r-1))return u("End of comment missing");var a=t.slice(2,r-2);return n+=2,o(a),t=t.slice(r),n+=2,e({type:"comment",comment:a})}}function p(){var t=i(),e=c(ua);if(e){if(f(),!c(ca))return u("property missing ':'");var r=c(la),n=t({type:"declaration",property:pa(e[0].replace(oa,"")),value:r?pa(r[0].replace(oa,"")):""});return c(sa),n}}return a.prototype.content=t,l(),function(){var t,e=[];for(s(e);t=p();)!1!==t&&(e.push(t),s(e));return e}()}(t),u="function"==typeof e,c=0,l=a.length;c<l;c++)o=(r=a[c]).property,i=r.value,u?e(o,i,r):i&&(n||(n={}),n[o]=i);return n},ha=/-([a-z])/g,ma=/^--[a-zA-Z0-9-]+$|^[^-]+$/;var ya={PRESERVE_CUSTOM_ATTRIBUTES:t__default["default"].version.split(".")[0]>=16,camelCase:function(t){if("string"!=typeof t)throw new TypeError("First argument must be a string");return ma.test(t)?t:t.toLowerCase().replace(ha,(function(t,e){return e.toUpperCase()}))},invertObject:function(t,e){if(!t||"object"!=typeof t)throw new TypeError("First argument must be an object");var r,n,o="function"==typeof e,i={},a={};for(r in t)n=t[r],o&&(i=e(r,n))&&2===i.length?a[i[0]]=i[1]:"string"==typeof n&&(a[n]=r);return a},isCustomComponent:function(t,e){if(-1===t.indexOf("-"))return e&&"string"==typeof e.is;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return !1;default:return !0}}},ga=ya.camelCase,va=na.html,ba=na.svg,xa=na.isCustomAttribute,wa=Object.prototype.hasOwnProperty;var Oa=function(t){var e,r,n,o;t=t||{};var i={};for(e in t)n=t[e],xa(e)?i[e]=n:(r=e.toLowerCase(),wa.call(va,r)?i[(o=va[r]).propertyName]=!!(o.hasBooleanValue||o.hasOverloadedBooleanValue&&!n)||n:wa.call(ba,e)?i[(o=ba[e]).propertyName]=n:ya.PRESERVE_CUSTOM_ATTRIBUTES&&(i[e]=n));return null!=t.style&&(i.style=function(t){var e={};t&&da(t,(function(t,r){t&&r&&(e[ga(t)]=r);}));return e}(t.style)),i};function Sa(t){return ya.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===t.type&&ya.isCustomComponent(t.name,t.attribs)}for(var ka,Aa=function e(r,n){for(var o,i,a,u,c=(n=n||{}).library||t__default["default"],l=c.cloneElement,s=c.createElement,f=c.isValidElement,p=[],d="function"==typeof n.replace,h=n.trim,m=0,y=r.length;m<y;m++)if(o=r[m],d&&f(i=n.replace(o)))y>1&&(i=l(i,{key:i.key||m})),p.push(i);else if("text"!==o.type){switch(a=o.attribs,Sa(o)||(a=Oa(o.attribs)),u=null,o.type){case"script":case"style":o.children[0]&&(a.dangerouslySetInnerHTML={__html:o.children[0].data});break;case"tag":"textarea"===o.name&&o.children[0]?a.defaultValue=o.children[0].data:o.children&&o.children.length&&(u=e(o.children,n));break;default:continue}y>1&&(a.key=m),p.push(s(o.name,a,u));}else h?o.data.trim()&&p.push(o.data):p.push(o.data);return 1===p.length?p[0]:p},Ea=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],Ta={},ja=0,Pa=Ea.length;ja<Pa;ja++)Ta[(ka=Ea[ja]).toLowerCase()]=ka;function Ca(t){for(var e,r={},n=0,o=t.length;n<o;n++)r[(e=t[n]).name]=e.value;return r}function Fa(t){var e=function(t){return Ta[t]}(t=t.toLowerCase());return e||t}var Ma={formatAttributes:Ca,formatDOM:function t(e,r,n){r=r||null;for(var o,i,a,u=[],c=0,l=e.length;c<l;c++){switch(o=e[c],a={next:null,prev:u[c-1]||null,parent:r},(i=u[c-1])&&(i.next=a),"#"!==o.nodeName[0]&&(a.name=Fa(o.nodeName),a.attribs={},o.attributes&&o.attributes.length&&(a.attribs=Ca(o.attributes))),o.nodeType){case 1:"script"===a.name||"style"===a.name?a.type=a.name:a.type="tag",a.children=t(o.childNodes,a);break;case 3:a.type="text",a.data=o.nodeValue;break;case 8:a.type="comment",a.data=o.nodeValue;}u.push(a);}return n&&(u.unshift({name:n.substring(0,n.indexOf(" ")).toLowerCase(),data:n,type:"directive",next:u[0]?u[0]:null,prev:null,parent:r}),u[1]&&(u[1].prev=u[0])),u},isIE:function(t){return t?document.documentMode===t:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}},_a=/<([a-zA-Z]+[0-9]?)/,La=/<head.*>/i,Ra=/<body.*>/i,Da=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,Na=Ma.isIE(9),Ia=Na||Ma.isIE(),za=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Ba=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var Ha=new window.DOMParser,Va=Na?"text/xml":"text/html";za=Ba=function(t,e){return e&&(t="<"+e+">"+t+"</"+e+">"),Na&&(t=t.replace(Da,"<$1$2$3/>")),Ha.parseFromString(t,Va)};}if(document.implementation){var Ua=document.implementation.createHTMLDocument(Ia?"html-dom-parser":void 0);za=function(t,e){if(e)return Ua.documentElement.getElementsByTagName(e)[0].innerHTML=t,Ua;try{return Ua.documentElement.innerHTML=t,Ua}catch(e){if(Ba)return Ba(t)}};}var Ga,qa=document.createElement("template");qa.content&&(Ga=function(t){return qa.innerHTML=t,qa.content.childNodes});var Xa=function(t){var e,r,n,o,i=t.match(_a);switch(i&&i[1]&&(e=i[1].toLowerCase()),e){case"html":return r=Ba(t),La.test(t)||(n=r.getElementsByTagName("head")[0])&&n.parentNode.removeChild(n),Ra.test(t)||(n=r.getElementsByTagName("body")[0])&&n.parentNode.removeChild(n),r.getElementsByTagName("html");case"head":case"body":return o=za(t).getElementsByTagName(e),Ra.test(t)&&La.test(t)?o[0].parentNode.childNodes:o;default:return Ga?Ga(t):za(t,"body").getElementsByTagName("body")[0].childNodes}},Wa=Ma.formatDOM,Ya=Ma.isIE(9),$a=/<(![a-zA-Z\s]+)>/;var Za=function(t){if("string"!=typeof t)throw new TypeError("First argument must be a string");if(!t)return [];var e,r=t.match($a);return r&&r[1]&&(e=r[1],Ya&&(t=t.replace(r[0],""))),Wa(Xa(t),null,e)},Ja={decodeEntities:!0,lowerCaseAttributeNames:!1};function Ka(t,e){if("string"!=typeof t)throw new TypeError("First argument must be a string");return ""===t?[]:Aa(Za(t,(e=e||{}).htmlparser2||Ja),e)}Ka.domToReact=Aa,Ka.htmlToDOM=Za;var Qa=Ka,tu=Ka;Qa.default=tu;var eu=["content","renderAfter"],ru=function(e){var r=e.content,n=void 0===r?"":r,o=e.renderAfter,a=void 0===o?function(){return t__default["default"].createElement(t.Fragment,null)}:o,u=Qn(e,eu);return t__default["default"].createElement(Vi,Re({content:n,renderContent:function(){return t__default["default"].createElement(t.Fragment,null,Qa(n),a(!1))},renderClampedContent:function(e,r){var o=0,u=!1;return t__default["default"].createElement(t.Fragment,null,Qa(n,{replace:function(r){if("text"===r.type){var n;if(o===e||u)return t__default["default"].createElement(t.Fragment,null);if(o+r.data.length<=e)return void(o+=r.data.length);var a=e-(o+r.data.length-e);return u=!0,t__default["default"].createElement(t.Fragment,null,vo(n=r.data).call(n,0,a))}}}),t__default["default"].createElement("span",null,r),a(!0))}},u))};ru.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};

	var _this = undefined;

	var _jsxFileName = "/Users/albert/Documents/Code/github/react-simple-clamp/example/demo.jsx";
	var text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
	var html = 'hellohellohellhellohellohellhellohellohellhellohellohellhellohellohellhelloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld';

	var App = function App() {
	  var _useState = t.useState(false),
	      _useState2 = slicedToArray(_useState, 2),
	      expanded = _useState2[0],
	      setExpended = _useState2[1];

	  return /*#__PURE__*/t__default["default"].createElement('div', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 10
	    }
	  }, /*#__PURE__*/t__default["default"].createElement('h2', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 11
	    }
	  }, "Clamp Text"), /*#__PURE__*/t__default["default"].createElement('div', {
	    style: {
	      width: 400,
	      background: '#f5f5f5',
	      marginBottom: 30
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 12
	    }
	  }, /*#__PURE__*/t__default["default"].createElement(Gi, {
	    content: text,
	    maxHeight: 60,
	    maxLines: 2,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/t__default["default"].createElement('span', {
	        style: {
	          background: '#61dafb',
	          padding: '0 4px'
	        },
	        onClick: function onClick() {
	          setExpended(!!clamped);
	        },
	        __self: _this,
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 19
	        }
	      }, clamped ? 'open' : 'close');
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 13
	    }
	  })), /*#__PURE__*/t__default["default"].createElement('div', {
	    style: {
	      width: 200,
	      background: '#f5f5f5',
	      marginBottom: 30
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 24
	    }
	  }, /*#__PURE__*/t__default["default"].createElement(Gi, {
	    content: text,
	    maxHeight: 120,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/t__default["default"].createElement('span', {
	        style: {
	          background: '#61dafb',
	          padding: '0 4px'
	        },
	        onClick: function onClick() {
	          setExpended(!!clamped);
	        },
	        __self: _this,
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 30
	        }
	      }, clamped ? 'open' : 'close');
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 25
	    }
	  })), /*#__PURE__*/t__default["default"].createElement('div', {
	    style: {
	      width: 200,
	      background: '#f5f5f5',
	      marginBottom: 30
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 35
	    }
	  }, /*#__PURE__*/t__default["default"].createElement(Gi, {
	    content: text,
	    maxLines: 3,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/t__default["default"].createElement('span', {
	        style: {
	          background: '#61dafb',
	          padding: '0 4px'
	        },
	        onClick: function onClick() {
	          setExpended(!!clamped);
	        },
	        __self: _this,
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 41
	        }
	      }, clamped ? 'open' : 'close');
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 36
	    }
	  })), /*#__PURE__*/t__default["default"].createElement('h2', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 46
	    }
	  }, "Clamp Html"), /*#__PURE__*/t__default["default"].createElement('div', {
	    style: {
	      width: 200,
	      background: '#f5f5f5',
	      marginBottom: 30
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 47
	    }
	  }, /*#__PURE__*/t__default["default"].createElement(ru, {
	    content: html,
	    maxLines: 3,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/t__default["default"].createElement('span', {
	        style: {
	          background: '#61dafb',
	          padding: '0 4px'
	        },
	        onClick: function onClick() {
	          setExpended(!!clamped);
	        },
	        __self: _this,
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 53
	        }
	      }, clamped ? 'open' : 'close');
	    },
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 48
	    }
	  })));
	};

	ReactDOM__default["default"].render( /*#__PURE__*/t__default["default"].createElement(App, {
	  __self: undefined,
	  __source: {
	    fileName: _jsxFileName,
	    lineNumber: 62
	  }
	}), document.querySelector('#app'));

}));
//# sourceMappingURL=index.js.map
