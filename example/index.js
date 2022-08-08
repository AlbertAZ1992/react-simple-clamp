
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM));
})(this, (function (React, ReactDOM) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
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
	var f$7 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var objectPropertyIsEnumerable = {
		f: f$7
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

	var hasOwnProperty$1 = functionUncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$1(toObject(it), key);
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
	var f$6 = descriptors ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$6
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
	var f$5 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
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
		f: f$5
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
	var f$4 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
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
		f: f$4
	};

	var html$2 = getBuiltIn('document', 'documentElement');

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
	  html$2.appendChild(iframe);
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
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
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
	var f$2 = function getOwnPropertyNames(it) {
	  return windowNames && classofRaw(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$2
	};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	var f$1 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$1
	};

	var defineBuiltIn = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	  return target;
	};

	var f = wellKnownSymbol;

	var wellKnownSymbolWrapped = {
		f: f
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
	var hi = /^[\uDC00-\uDFFF]$/;

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
	  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
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

	var ArrayPrototype$2 = Array.prototype;

	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$2 || (objectIsPrototypeOf(ArrayPrototype$2, it) && own === ArrayPrototype$2.slice) ? slice$6 : own;
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
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$1] === it);
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

	var concat$6 = entryVirtual('Array').concat;

	var ArrayPrototype = Array.prototype;

	var concat$5 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype || (objectIsPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? concat$6 : own;
	};

	var concat$4 = concat$5;

	var concat$3 = concat$4;

	var concat$2 = concat$3;

	var concat$1 = concat$2;

	var concat = concat$1;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	var defaultProps$2 = {
	  autoresize: false,
	  ellipsis: '',
	  expanded: false,
	  className: ''
	};
	var RENDER_STATE = {
	  START: 'START',
	  DONE: 'DONE'
	};
	var RENDER_LOCATE_STATE = {
	  START: 'START',
	  DONE: 'DONE',
	  ADD: 'ADD'
	};
	var RENDER_FILL_STATE = {
	  ASCEND: 'ASCEND ',
	  DESCEND: 'DESCEND ',
	  DONE: 'DONE'
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

	  if (screenMaxHeight !== 'none' && tagRef.current && tagRef.current.scrollHeight > getMaxHeightValue(screenMaxHeight)) {
	    return true;
	  }

	  return false;
	}

	function useScreenMaxHeight(internalExpanded, maxHeight) {
	  var _a = React.useState('none'),
	      screenMaxHeight = _a[0],
	      setScreenMaxHeight = _a[1];

	  React.useEffect(function () {
	    if (internalExpanded) {
	      setScreenMaxHeight('none');
	    } else if (!maxHeight) {
	      setScreenMaxHeight('none');
	    } else {
	      setScreenMaxHeight(typeof maxHeight === 'number' ? "".concat(maxHeight, "px") : maxHeight);
	    }
	  }, [internalExpanded, maxHeight]);
	  return screenMaxHeight;
	}

	function useScreenContent(content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded) {
	  var _a = React.useState(function () {
	    return renderContent();
	  }),
	      screenContent = _a[0],
	      setScreenContent = _a[1];

	  React.useEffect(function () {
	    if (!contentLength || internalExpanded) {
	      setScreenContent(renderContent());
	    } else if (offset !== contentLength) {
	      setScreenContent(renderClampedContent(offset, ellipsis));
	    }
	  }, [content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded]);
	  return screenContent;
	}

	function useSetExpand(expanded) {
	  var _a = React.useState(expanded),
	      internalExpanded = _a[0],
	      setInternalExpanded = _a[1];

	  React.useEffect(function () {
	    setInternalExpanded(expanded);
	  }, [expanded]);
	  return internalExpanded;
	}

	var ReactSimpleClamp = function ReactSimpleClamp(properties) {
	  var _a = properties.ellipsis,
	      ellipsis = _a === void 0 ? '...' : _a,
	      content = properties.content,
	      maxHeight = properties.maxHeight,
	      maxLines = properties.maxLines,
	      _b = properties.expanded,
	      expanded = _b === void 0 ? false : _b,
	      renderContent = properties.renderContent,
	      renderClampedContent = properties.renderClampedContent,
	      _c = properties.className,
	      className = _c === void 0 ? '' : _c;
	  var contentLength = content.length || 0;
	  var tagRef = React.useRef();
	  var contentRef = React.useRef();
	  var offsetRef = React.useRef(contentLength);

	  var _d = React.useState(contentLength),
	      offset = _d[0],
	      setOffset = _d[1];

	  var _e = React.useState(RENDER_STATE.DONE),
	      renderState = _e[0],
	      setRenderState = _e[1];

	  var _f = React.useState(RENDER_LOCATE_STATE.DONE),
	      renderLocateState = _f[0],
	      setRenderLocateState = _f[1];

	  var _g = React.useState(RENDER_FILL_STATE.DONE),
	      renderFillState = _g[0],
	      setRenderFillState = _g[1];

	  var _h = React.useState(true),
	      needLocationAdd = _h[0],
	      setNeedLocationAdd = _h[1];

	  var internalExpanded = useSetExpand(expanded);
	  var screenContent = useScreenContent(content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded);
	  var screenMaxHeight = useScreenMaxHeight(internalExpanded, maxHeight);
	  React.useEffect(function () {
	    if (!internalExpanded && isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) && renderState === RENDER_STATE.DONE) {
	      setRenderState(RENDER_STATE.START);
	    }
	  }, [maxLines, maxHeight, ellipsis, internalExpanded, renderState, screenMaxHeight]);
	  React.useEffect(function () {
	    if (renderState === RENDER_STATE.START) {
	      setRenderLocateState(RENDER_LOCATE_STATE.START);
	    }
	  }, [renderState, contentLength]);
	  React.useEffect(function () {
	    var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
	    var screenHeightHasSpace = tagRef.current && tagRef.current.scrollHeight <= getMaxHeightValue(screenMaxHeight);

	    if (renderLocateState === RENDER_LOCATE_STATE.START || renderLocateState === RENDER_LOCATE_STATE.ADD) {
	      if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef)) {
	        if (renderLocateState === RENDER_LOCATE_STATE.ADD) {
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
	      } else if (needLocationAdd && (screenMaxHeight !== 'none' && screenHeightHasSpace || maxLines && contentLines < maxLines)) {
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
	  }, [renderLocateState, maxLines, contentRef, screenMaxHeight, screenContent, needLocationAdd]);
	  React.useEffect(function () {
	    var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;

	    if (renderFillState === RENDER_FILL_STATE.ASCEND) {
	      if ((!isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) || contentLines < 2) && offset < contentLength) {
	        setOffset(offset + 1);
	      } else {
	        setRenderFillState(RENDER_FILL_STATE.DESCEND);
	      }
	    } else if (renderFillState === RENDER_FILL_STATE.DESCEND) {
	      if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) && contentLines > 1 && offset > 0) {
	        setOffset(offset - 1);
	      } else {
	        setRenderFillState(RENDER_FILL_STATE.DONE);
	        setRenderState(RENDER_STATE.DONE);
	        offsetRef.current = contentLength;
	      }
	    }
	  }, [renderFillState, contentLength, offset, contentRef, maxLines, screenMaxHeight]);
	  var contentWrapper = /*#__PURE__*/React__default["default"].createElement("span", null, screenContent);
	  var linesWrapper = /*#__PURE__*/React__default["default"].createElement("span", {
	    ref: contentRef,
	    style: {
	      boxShadow: 'transparent 0 0',
	      wordBreak: 'break-all'
	    }
	  }, contentWrapper);
	  return /*#__PURE__*/React__default["default"].createElement("div", {
	    className: "react-simple-clamp ".concat(className),
	    ref: tagRef,
	    style: {
	      overflow: 'hidden',
	      maxHeight: screenMaxHeight
	    }
	  }, linesWrapper);
	};

	ReactSimpleClamp.defaultProps = defaultProps$2;

	var defaultProps$1 = {
	  autoresize: false,
	  ellipsis: '',
	  expanded: false,
	  className: ''
	};

	var ClampText = function ClampText(properties) {
	  var content = properties.content,
	      _a = properties.renderAfter,
	      renderAfter = _a === void 0 ? function () {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null);
	  } : _a,
	      restProps = __rest(properties, ["content", "renderAfter"]);

	  var renderClampedContent = function renderClampedContent(offset, ellipsis) {
	    var _context;

	    return /*#__PURE__*/React__default["default"].createElement("span", null, concat(_context = "".concat(slice(content).call(content, 0, offset))).call(_context, ellipsis), renderAfter(true));
	  };

	  var renderContent = function renderContent() {
	    return /*#__PURE__*/React__default["default"].createElement("span", null, content, renderAfter(false));
	  };

	  return /*#__PURE__*/React__default["default"].createElement(ReactSimpleClamp, __assign({
	    content: content,
	    renderContent: renderContent,
	    renderClampedContent: renderClampedContent
	  }, restProps));
	};

	ClampText.defaultProps = defaultProps$1;

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
	    unselectable: 0
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  }
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
	    zoomAndPan: 0
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
	    xmlSpace: 'xml:space'
	  }
	};

	var injection = {
	  MUST_USE_PROPERTY: 1,
	  HAS_BOOLEAN_VALUE: 4,
	  HAS_NUMERIC_VALUE: 8,
	  HAS_POSITIVE_NUMERIC_VALUE: 24,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 32
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
	    attributeName =
	      DOMAttributeNames[propertyName] ||
	      (isSVG ? propertyName : propertyName.toLowerCase());
	    propConfig = Properties[propertyName];

	    config[attributeName] = {
	      attributeName: attributeName,
	      propertyName: propertyName,
	      mustUseProperty: checkMask(propConfig, MUST_USE_PROPERTY),
	      hasBooleanValue: checkMask(propConfig, HAS_BOOLEAN_VALUE),
	      hasNumericValue: checkMask(propConfig, HAS_NUMERIC_VALUE),
	      hasPositiveNumericValue: checkMask(
	        propConfig,
	        HAS_POSITIVE_NUMERIC_VALUE
	      ),
	      hasOverloadedBooleanValue: checkMask(
	        propConfig,
	        HAS_OVERLOADED_BOOLEAN_VALUE
	      )
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
	var ATTRIBUTE_NAME_CHAR =
	  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

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
	  isCustomAttribute: RegExp.prototype.test.bind(
	    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
	  )
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
	var inlineStyleParser = function(style, options) {
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
	    return function(node) {
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
	    var err = new Error(
	      options.source + ':' + lineno + ':' + column + ': ' + msg
	    );
	    err.reason = msg;
	    err.filename = options.source;
	    err.line = lineno;
	    err.column = column;
	    err.source = style;

	    if (options.silent) ; else {
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
	    while (
	      EMPTY_STRING != style.charAt(i) &&
	      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
	    ) {
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
	      comment: str
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
	      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
	      value: val
	        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
	        : EMPTY_STRING
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
	function trim(str) {
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
	function camelCase$1(string) {
	  if (typeof string !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }

	  // custom property or no hyphen found
	  if (CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX.test(string)) {
	    return string;
	  }

	  // convert to camelCase
	  return string
	    .toLowerCase()
	    .replace(hyphenPatternRegex, function (_, character) {
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
	var PRESERVE_CUSTOM_ATTRIBUTES = React__default["default"].version.split('.')[0] >= 16;

	var utilities$1 = {
	  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
	  camelCase: camelCase$1,
	  invertObject: invertObject,
	  isCustomComponent: isCustomComponent
	};

	var camelCase = utilities$1.camelCase;

	var htmlProperties = reactProperty.html;
	var svgProperties = reactProperty.svg;
	var isCustomAttribute = reactProperty.isCustomAttribute;

	var hasOwnProperty = Object.prototype.hasOwnProperty;

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
	    if (hasOwnProperty.call(htmlProperties, attributeNameLowerCased)) {
	      property = htmlProperties[attributeNameLowerCased];
	      props[property.propertyName] =
	        property.hasBooleanValue ||
	        (property.hasOverloadedBooleanValue && !attributeValue)
	          ? true
	          : attributeValue;
	      continue;
	    }

	    // convert SVG attribute to React prop
	    if (hasOwnProperty.call(svgProperties, attributeName)) {
	      property = svgProperties[attributeName];
	      props[property.propertyName] = attributeValue;
	      continue;
	    }

	    // preserve custom attribute if React >=16
	    if (utilities$1.PRESERVE_CUSTOM_ATTRIBUTES) {
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
	        styleObject[camelCase(property)] = value;
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

	  var React = options.library || React__default["default"];
	  var cloneElement = React.cloneElement;
	  var createElement = React.createElement;
	  var isValidElement = React.isValidElement;

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
	            key: replaceElement.key || i
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
	            __html: node.children[0].data
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
	    utilities$1.PRESERVE_CUSTOM_ATTRIBUTES &&
	    node.type === 'tag' &&
	    utilities$1.isCustomComponent(node.name, node.attribs)
	  );
	}

	var domToReact_1 = domToReact;

	/**
	 * SVG elements are case-sensitive.
	 *
	 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
	 */
	var CASE_SENSITIVE_TAG_NAMES$1 = [
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
	  'textPath'
	];

	var constants = {
	  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES$1
	};

	var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

	var caseSensitiveTagNamesMap = {};
	var tagName;
	for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
	  tagName = CASE_SENSITIVE_TAG_NAMES[i];
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
	function formatDOM$1(nodes, parentObj, directive) {
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
	      parent: parentObj
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
	        nodeObj.children = formatDOM$1(node.childNodes, nodeObj);
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
	      parent: parentObj
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
	function isIE$1(version) {
	  if (version) {
	    return document.documentMode === version;
	  }
	  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
	}

	var utilities = {
	  formatAttributes: formatAttributes,
	  formatDOM: formatDOM$1,
	  isIE: isIE$1
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
	var isIE9$1 = utilities.isIE(9);
	var isIE = isIE9$1 || utilities.isIE();

	// falls back to `parseFromString` if `createHTMLDocument` cannot be used
	var parseFromDocument = function () {
	  throw new Error(
	    'This browser does not support `document.implementation.createHTMLDocument`'
	  );
	};

	var parseFromString = function () {
	  throw new Error(
	    'This browser does not support `DOMParser.prototype.parseFromString`'
	  );
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
	  var mimeType = isIE9$1 ? 'text/xml' : 'text/html';

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
	    if (isIE9$1) {
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
	  var doc = document.implementation.createHTMLDocument(
	    isIE ? 'html-dom-parser' : undefined
	  );

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

	      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
	        .childNodes;
	  }
	}

	var domparser_1 = domparser;

	var formatDOM = utilities.formatDOM;
	var isIE9 = utilities.isIE(9);

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
	    if (isIE9) {
	      html = html.replace(match[0], '');
	    }
	  }

	  return formatDOM(domparser_1(html), null, directive);
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
	  return domToReact_1(
	    htmlToDomClient(html, options.htmlparser2 || domParserOptions),
	    options
	  );
	}

	HTMLReactParser.domToReact = domToReact_1;
	HTMLReactParser.htmlToDOM = htmlToDomClient;

	// support CommonJS and ES Modules
	var htmlReactParser = HTMLReactParser;
	var _default = HTMLReactParser;
	htmlReactParser.default = _default;

	var defaultProps = {
	  autoresize: false,
	  ellipsis: '',
	  expanded: false,
	  className: ''
	};

	var ClampInlineHtml = function ClampInlineHtml(properties) {
	  var content = properties.content,
	      _a = properties.renderAfter,
	      renderAfter = _a === void 0 ? function () {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null);
	  } : _a,
	      restProps = __rest(properties, ["content", "renderAfter"]);

	  var renderClampedContent = function renderClampedContent(offset, ellipsis) {
	    var count = 0;
	    var finished = false;
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, htmlReactParser(content, {
	      replace: function replace(domNode) {
	        if (domNode.type === 'text') {
	          var _context;

	          if (count === offset || finished) {
	            return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null);
	          }

	          if (count + domNode.data.length <= offset) {
	            count += domNode.data.length;
	            return;
	          }

	          var gap = offset - (count + domNode.data.length - offset);
	          finished = true;
	          return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, slice(_context = domNode.data).call(_context, 0, gap));
	        }
	      }
	    }), /*#__PURE__*/React__default["default"].createElement("span", null, ellipsis), renderAfter(true));
	  };

	  var renderContent = function renderContent() {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, htmlReactParser(content), renderAfter(false));
	  };

	  return /*#__PURE__*/React__default["default"].createElement(ReactSimpleClamp, __assign({
	    content: content,
	    renderContent: renderContent,
	    renderClampedContent: renderClampedContent
	  }, restProps));
	};

	ClampInlineHtml.defaultProps = defaultProps;

	var _this = undefined;

	var _jsxFileName = "/Users/albert/Documents/Code/github/react-simple-clamp/example/demo.jsx";
	var text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
	var html = 'helloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld';

	var App = function App() {
	  var _useState = React.useState(false),
	      _useState2 = slicedToArray(_useState, 2),
	      expanded = _useState2[0],
	      setExpended = _useState2[1];

	  return /*#__PURE__*/React__default["default"].createElement('div', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 10
	    }
	  }, /*#__PURE__*/React__default["default"].createElement('h2', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 11
	    }
	  }, "Clamp Text"), /*#__PURE__*/React__default["default"].createElement('div', {
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
	  }, /*#__PURE__*/React__default["default"].createElement(ClampText, {
	    content: text,
	    maxHeight: 60,
	    maxLines: 2,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/React__default["default"].createElement('span', {
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
	  })), /*#__PURE__*/React__default["default"].createElement('div', {
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
	  }, /*#__PURE__*/React__default["default"].createElement(ClampText, {
	    content: text,
	    maxHeight: 120,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/React__default["default"].createElement('span', {
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
	  })), /*#__PURE__*/React__default["default"].createElement('div', {
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
	  }, /*#__PURE__*/React__default["default"].createElement(ClampText, {
	    content: text,
	    maxLines: 3,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/React__default["default"].createElement('span', {
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
	  })), /*#__PURE__*/React__default["default"].createElement('h2', {
	    __self: _this,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 46
	    }
	  }, "Clamp Html"), /*#__PURE__*/React__default["default"].createElement('div', {
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
	  }, /*#__PURE__*/React__default["default"].createElement(ClampInlineHtml, {
	    content: html,
	    maxLines: 3,
	    expanded: expanded,
	    renderAfter: function renderAfter(clamped) {
	      return /*#__PURE__*/React__default["default"].createElement('span', {
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

	ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, {
	  __self: undefined,
	  __source: {
	    fileName: _jsxFileName,
	    lineNumber: 62
	  }
	}), document.querySelector('#app'));

}));
//# sourceMappingURL=index.js.map
