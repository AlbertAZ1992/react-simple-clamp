
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
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

	function _arrayWithHoles(arr) {
	  if (isArray(arr)) return arr;
	}

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

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

	  var n = slice(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from_1(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}function u(t){return t&&t.default||t}var s,l,f=function(t){return t&&t.Math==Math&&t},p=f("object"==typeof globalThis&&globalThis)||f("object"==typeof window&&window)||f("object"==typeof self&&self)||f("object"==typeof a&&a)||function(){return this}()||Function("return this")(),d=function(t){try{return !!t()}catch(t){return !0}},h=!d((function(){var t=function(){}.bind();return "function"!=typeof t||t.hasOwnProperty("prototype")})),v=Function.prototype,g=v.apply,y=v.call,m="object"==typeof Reflect&&Reflect.apply||(h?y.bind(g):function(){return y.apply(g,arguments)}),b=Function.prototype,w=b.bind,x=b.call,S=h&&w.bind(x,x),k=h?function(t){return t&&S(t)}:function(t){return t&&function(){return x.apply(t,arguments)}},O=function(t){return "function"==typeof t},E=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),A=Function.prototype.call,T=h?A.bind(A):function(){return A.apply(A,arguments)},C={}.propertyIsEnumerable,I=Object.getOwnPropertyDescriptor,j={f:I&&!C.call({1:2},1)?function(t){var e=I(this,t);return !!e&&e.enumerable}:C},P=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},R=k({}.toString),N=k("".slice),F=function(t){return N(R(t),8,-1)},L=Object,D=k("".split),M=d((function(){return !L("z").propertyIsEnumerable(0)}))?function(t){return "String"==F(t)?D(t,""):L(t)}:L,_=TypeError,z=function(t){if(null==t)throw _("Can't call method on "+t);return t},H=function(t){return M(z(t))},B=function(t){return "object"==typeof t?null!==t:O(t)},U={},V=function(t){return O(t)?t:void 0},q=function(t,e){return arguments.length<2?V(U[t])||V(p[t]):U[t]&&U[t][e]||p[t]&&p[t][e]},G=k({}.isPrototypeOf),W=q("navigator","userAgent")||"",X=p.process,Y=p.Deno,$=X&&X.versions||Y&&Y.version,K=$&&$.v8;K&&(l=(s=K.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!l&&W&&(!(s=W.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=W.match(/Chrome\/(\d+)/))&&(l=+s[1]);var Z=l,J=!!Object.getOwnPropertySymbols&&!d((function(){var t=Symbol();return !String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Z&&Z<41})),Q=J&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,tt=Object,et=Q?function(t){return "symbol"==typeof t}:function(t){var e=q("Symbol");return O(e)&&G(e.prototype,tt(t))},rt=String,nt=function(t){try{return rt(t)}catch(t){return "Object"}},ot=TypeError,it=function(t){if(O(t))return t;throw ot(nt(t)+" is not a function")},at=function(t,e){var r=t[e];return null==r?void 0:it(r)},ct=TypeError,ut=Object.defineProperty,st=p["__core-js_shared__"]||function(t,e){try{ut(p,t,{value:e,configurable:!0,writable:!0});}catch(r){p[t]=e;}return e}("__core-js_shared__",{}),lt=c((function(t){(t.exports=function(t,e){return st[t]||(st[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});})),ft=Object,pt=function(t){return ft(z(t))},dt=k({}.hasOwnProperty),ht=Object.hasOwn||function(t,e){return dt(pt(t),e)},vt=0,gt=Math.random(),yt=k(1..toString),mt=function(t){return "Symbol("+(void 0===t?"":t)+")_"+yt(++vt+gt,36)},bt=lt("wks"),wt=p.Symbol,xt=wt&&wt.for,St=Q?wt:wt&&wt.withoutSetter||mt,kt=function(t){if(!ht(bt,t)||!J&&"string"!=typeof bt[t]){var e="Symbol."+t;J&&ht(wt,t)?bt[t]=wt[t]:bt[t]=Q&&xt?xt(e):St(e);}return bt[t]},Ot=TypeError,Et=kt("toPrimitive"),At=function(t,e){if(!B(t)||et(t))return t;var r,n=at(t,Et);if(n){if(void 0===e&&(e="default"),r=T(n,t,e),!B(r)||et(r))return r;throw Ot("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var r,n;if("string"===e&&O(r=t.toString)&&!B(n=T(r,t)))return n;if(O(r=t.valueOf)&&!B(n=T(r,t)))return n;if("string"!==e&&O(r=t.toString)&&!B(n=T(r,t)))return n;throw ct("Can't convert object to primitive value")}(t,e)},Tt=function(t){var e=At(t,"string");return et(e)?e:e+""},Ct=p.document,It=B(Ct)&&B(Ct.createElement),jt=function(t){return It?Ct.createElement(t):{}},Pt=!E&&!d((function(){return 7!=Object.defineProperty(jt("div"),"a",{get:function(){return 7}}).a})),Rt=Object.getOwnPropertyDescriptor,Nt={f:E?Rt:function(t,e){if(t=H(t),e=Tt(e),Pt)try{return Rt(t,e)}catch(t){}if(ht(t,e))return P(!T(j.f,t,e),t[e])}},Ft=/#|\.prototype\./,Lt=function(t,e){var r=Mt[Dt(t)];return r==zt||r!=_t&&(O(e)?d(e):!!e)},Dt=Lt.normalize=function(t){return String(t).replace(Ft,".").toLowerCase()},Mt=Lt.data={},_t=Lt.NATIVE="N",zt=Lt.POLYFILL="P",Ht=Lt,Bt=k(k.bind),Ut=function(t,e){return it(t),void 0===e?t:h?Bt(t,e):function(){return t.apply(e,arguments)}},Vt=E&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),qt=String,Gt=TypeError,Wt=function(t){if(B(t))return t;throw Gt(qt(t)+" is not an object")},Xt=TypeError,Yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Kt={f:E?Vt?function(t,e,r){if(Wt(t),e=Tt(e),Wt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=$t(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1});}return Yt(t,e,r)}:Yt:function(t,e,r){if(Wt(t),e=Tt(e),Wt(r),Pt)try{return Yt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Xt("Accessors not supported");return "value"in r&&(t[e]=r.value),t}},Zt=E?function(t,e,r){return Kt.f(t,e,P(1,r))}:function(t,e,r){return t[e]=r,t},Jt=Nt.f,Qt=function(t){var e=function(r,n,o){if(this instanceof e){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,n)}return new t(r,n,o)}return m(t,this,arguments)};return e.prototype=t.prototype,e},te=function(t,e){var r,n,o,i,a,c,u,s,l=t.target,f=t.global,d=t.stat,h=t.proto,v=f?p:d?p[l]:(p[l]||{}).prototype,g=f?U:U[l]||Zt(U,l,{})[l],y=g.prototype;for(o in e)r=!Ht(f?o:l+(d?".":"#")+o,t.forced)&&v&&ht(v,o),a=g[o],r&&(c=t.dontCallGetSet?(s=Jt(v,o))&&s.value:v[o]),i=r&&c?c:e[o],r&&typeof a==typeof i||(u=t.bind&&r?Ut(i,p):t.wrap&&r?Qt(i):h&&O(i)?k(i):i,(t.sham||i&&i.sham||a&&a.sham)&&Zt(u,"sham",!0),Zt(g,o,u),h&&(ht(U,n=l+"Prototype")||Zt(U,n,{}),Zt(U[n],o,i),t.real&&y&&!y[o]&&Zt(y,o,i)));},ee=Math.ceil,re=Math.floor,ne=Math.trunc||function(t){var e=+t;return (e>0?re:ee)(e)},oe=function(t){var e=+t;return e!=e||0===e?0:ne(e)},ie=Math.max,ae=Math.min,ce=function(t,e){var r=oe(t);return r<0?ie(r+e,0):ae(r,e)},ue=Math.min,se=function(t){return (e=t.length)>0?ue(oe(e),9007199254740991):0;var e;},le=function(t){return function(e,r,n){var o,i=H(e),a=se(i),c=ce(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return !0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return !t&&-1}},fe={includes:le(!0),indexOf:le(!1)},pe={},de=fe.indexOf,he=k([].push),ve=function(t,e){var r,n=H(t),o=0,i=[];for(r in n)!ht(pe,r)&&ht(n,r)&&he(i,r);for(;e.length>o;)ht(n,r=e[o++])&&(~de(i,r)||he(i,r));return i},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=Object.keys||function(t){return ve(t,ge)},me={f:Object.getOwnPropertySymbols},be=Object.assign,we=Object.defineProperty,xe=k([].concat),Se=!be||d((function(){if(E&&1!==be({b:1},be(we({},"a",{enumerable:!0,get:function(){we(this,"b",{value:3,enumerable:!1});}}),{b:2})).b)return !0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t;})),7!=be({},t)[r]||"abcdefghijklmnopqrst"!=ye(be({},e)).join("")}))?function(t,e){for(var r=pt(t),n=arguments.length,o=1,i=me.f,a=j.f;n>o;)for(var c,u=M(arguments[o++]),s=i?xe(ye(u),i(u)):ye(u),l=s.length,f=0;l>f;)c=s[f++],E&&!T(a,u,c)||(r[c]=u[c]);return r}:be;te({target:"Object",stat:!0,arity:2,forced:Object.assign!==Se},{assign:Se});var ke=U.Object.assign,Oe=k([].slice),Ee=Function,Ae=k([].concat),Te=k([].join),Ce={},Ie=function(t,e,r){if(!ht(Ce,e)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";Ce[e]=Ee("C,a","return new C("+Te(n,",")+")");}return Ce[e](t,r)},je=h?Ee.bind:function(t){var e=it(this),r=e.prototype,n=Oe(arguments,1),o=function(){var r=Ae(n,Oe(arguments));return this instanceof o?Ie(e,r.length,r):e.apply(t,r)};return B(r)&&(o.prototype=r),o};te({target:"Function",proto:!0,forced:Function.bind!==je},{bind:je});var Pe=function(t){return U[t+"Prototype"]},Re=Pe("Function").bind,Ne=Function.prototype,Fe=function(t){var e=t.bind;return t===Ne||G(Ne,t)&&e===Ne.bind?Re:e};function Le(){var t;return (Le=ke?Fe(t=ke).call(t):function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t}).apply(this,arguments)}var De={};De[kt("toStringTag")]="z";var Me,_e="[object z]"===String(De),ze=kt("toStringTag"),He=Object,Be="Arguments"==F(function(){return arguments}()),Ue=_e?F:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=He(t),ze))?r:Be?F(e):"Object"==(n=F(e))&&O(e.callee)?"Arguments":n},Ve=String,qe=function(t){if("Symbol"===Ue(t))throw TypeError("Cannot convert a Symbol value to a string");return Ve(t)},Ge={f:E&&!Vt?Object.defineProperties:function(t,e){Wt(t);for(var r,n=H(e),o=ye(e),i=o.length,a=0;i>a;)Kt.f(t,r=o[a++],n[r]);return t}},We=q("document","documentElement"),Xe=lt("keys"),Ye=function(t){return Xe[t]||(Xe[t]=mt(t))},$e=Ye("IE_PROTO"),Ke=function(){},Ze=function(t){return "<script>"+t+"<\/script>"},Je=function(t){t.write(Ze("")),t.close();var e=t.parentWindow.Object;return t=null,e},Qe=function(){try{Me=new ActiveXObject("htmlfile");}catch(t){}var t,e;Qe="undefined"!=typeof document?document.domain&&Me?Je(Me):((e=jt("iframe")).style.display="none",We.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ze("document.F=Object")),t.close(),t.F):Je(Me);for(var r=ge.length;r--;)delete Qe.prototype[ge[r]];return Qe()};pe[$e]=!0;var tr=Object.create||function(t,e){var r;return null!==t?(Ke.prototype=Wt(t),r=new Ke,Ke.prototype=null,r[$e]=t):r=Qe(),void 0===e?r:Ge.f(r,e)},er=ge.concat("length","prototype"),rr={f:Object.getOwnPropertyNames||function(t){return ve(t,er)}},nr=function(t,e,r){var n=Tt(e);n in t?Kt.f(t,n,P(0,r)):t[n]=r;},or=Array,ir=Math.max,ar=rr.f,cr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ur=function(t){try{return ar(t)}catch(t){return function(t,e,r){for(var n=se(t),o=ce(e,n),i=ce(void 0===r?n:r,n),a=or(ir(i-o,0)),c=0;o<i;o++,c++)nr(a,c,t[o]);return a.length=c,a}(cr)}},sr={f:function(t){return cr&&"Window"==F(t)?ur(t):ar(H(t))}},lr=function(t,e,r,n){return n&&n.enumerable?t[e]=r:Zt(t,e,r),t},fr={f:kt},pr=Kt.f,dr=function(t){var e=U.Symbol||(U.Symbol={});ht(e,t)||pr(e,t,{value:fr.f(t)});},hr=function(){var t=q("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,n=kt("toPrimitive");e&&!e[n]&&lr(e,n,(function(t){return T(r,this)}),{arity:1});},vr=_e?{}.toString:function(){return "[object "+Ue(this)+"]"},gr=Kt.f,yr=kt("toStringTag"),mr=function(t,e,r,n){if(t){var o=r?t:t.prototype;ht(o,yr)||gr(o,yr,{configurable:!0,value:e}),n&&!_e&&Zt(o,"toString",vr);}},br=k(Function.toString);O(st.inspectSource)||(st.inspectSource=function(t){return br(t)});var wr,xr,Sr,kr=st.inspectSource,Or=p.WeakMap,Er=O(Or)&&/native code/.test(kr(Or)),Ar=p.TypeError,Tr=p.WeakMap;if(Er||st.state){var Cr=st.state||(st.state=new Tr),Ir=k(Cr.get),jr=k(Cr.has),Pr=k(Cr.set);wr=function(t,e){if(jr(Cr,t))throw new Ar("Object already initialized");return e.facade=t,Pr(Cr,t,e),e},xr=function(t){return Ir(Cr,t)||{}},Sr=function(t){return jr(Cr,t)};}else {var Rr=Ye("state");pe[Rr]=!0,wr=function(t,e){if(ht(t,Rr))throw new Ar("Object already initialized");return e.facade=t,Zt(t,Rr,e),e},xr=function(t){return ht(t,Rr)?t[Rr]:{}},Sr=function(t){return ht(t,Rr)};}var Nr={set:wr,get:xr,has:Sr,enforce:function(t){return Sr(t)?xr(t):wr(t,{})},getterFor:function(t){return function(e){var r;if(!B(e)||(r=xr(e)).type!==t)throw Ar("Incompatible receiver, "+t+" required");return r}}},Fr=Array.isArray||function(t){return "Array"==F(t)},Lr=function(){},Dr=[],Mr=q("Reflect","construct"),_r=/^\s*(?:class|function)\b/,zr=k(_r.exec),Hr=!_r.exec(Lr),Br=function(t){if(!O(t))return !1;try{return Mr(Lr,Dr,t),!0}catch(t){return !1}},Ur=function(t){if(!O(t))return !1;switch(Ue(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return !1}try{return Hr||!!zr(_r,kr(t))}catch(t){return !0}};Ur.sham=!0;var Vr=!Mr||d((function(){var t;return Br(Br.call)||!Br(Object)||!Br((function(){t=!0;}))||t}))?Ur:Br,qr=kt("species"),Gr=Array,Wr=function(t,e){return new(function(t){var e;return Fr(t)&&(e=t.constructor,(Vr(e)&&(e===Gr||Fr(e.prototype))||B(e)&&null===(e=e[qr]))&&(e=void 0)),void 0===e?Gr:e}(t))(0===e?0:e)},Xr=k([].push),Yr=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=7==t,c=5==t||i;return function(u,s,l,f){for(var p,d,h=pt(u),v=M(h),g=Ut(s,l),y=se(v),m=0,b=f||Wr,w=e?b(u,y):r||a?b(u,0):void 0;y>m;m++)if((c||m in v)&&(d=g(p=v[m],m,h),t))if(e)w[m]=d;else if(d)switch(t){case 3:return !0;case 5:return p;case 6:return m;case 2:Xr(w,p);}else switch(t){case 4:return !1;case 7:Xr(w,p);}return i?-1:n||o?o:w}},$r={forEach:Yr(0),map:Yr(1),filter:Yr(2),some:Yr(3),every:Yr(4),find:Yr(5),findIndex:Yr(6),filterReject:Yr(7)},Kr=$r.forEach,Zr=Ye("hidden"),Jr=Nr.set,Qr=Nr.getterFor("Symbol"),tn=Object.prototype,en=p.Symbol,rn=en&&en.prototype,nn=p.TypeError,on=p.QObject,an=Nt.f,cn=Kt.f,un=sr.f,sn=j.f,ln=k([].push),fn=lt("symbols"),pn=lt("op-symbols"),dn=lt("wks"),hn=!on||!on.prototype||!on.prototype.findChild,vn=E&&d((function(){return 7!=tr(cn({},"a",{get:function(){return cn(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=an(tn,e);n&&delete tn[e],cn(t,e,r),n&&t!==tn&&cn(tn,e,n);}:cn,gn=function(t,e){var r=fn[t]=tr(rn);return Jr(r,{type:"Symbol",tag:t,description:e}),E||(r.description=e),r},yn=function(t,e,r){t===tn&&yn(pn,e,r),Wt(t);var n=Tt(e);return Wt(r),ht(fn,n)?(r.enumerable?(ht(t,Zr)&&t[Zr][n]&&(t[Zr][n]=!1),r=tr(r,{enumerable:P(0,!1)})):(ht(t,Zr)||cn(t,Zr,P(1,{})),t[Zr][n]=!0),vn(t,n,r)):cn(t,n,r)},mn=function(t,e){Wt(t);var r=H(e),n=ye(r).concat(Sn(r));return Kr(n,(function(e){E&&!T(bn,r,e)||yn(t,e,r[e]);})),t},bn=function(t){var e=Tt(t),r=T(sn,this,e);return !(this===tn&&ht(fn,e)&&!ht(pn,e))&&(!(r||!ht(this,e)||!ht(fn,e)||ht(this,Zr)&&this[Zr][e])||r)},wn=function(t,e){var r=H(t),n=Tt(e);if(r!==tn||!ht(fn,n)||ht(pn,n)){var o=an(r,n);return !o||!ht(fn,n)||ht(r,Zr)&&r[Zr][n]||(o.enumerable=!0),o}},xn=function(t){var e=un(H(t)),r=[];return Kr(e,(function(t){ht(fn,t)||ht(pe,t)||ln(r,t);})),r},Sn=function(t){var e=t===tn,r=un(e?pn:H(t)),n=[];return Kr(r,(function(t){!ht(fn,t)||e&&!ht(tn,t)||ln(n,fn[t]);})),n};J||(rn=(en=function(){if(G(rn,this))throw nn("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?qe(arguments[0]):void 0,e=mt(t),r=function(t){this===tn&&T(r,pn,t),ht(this,Zr)&&ht(this[Zr],e)&&(this[Zr][e]=!1),vn(this,e,P(1,t));};return E&&hn&&vn(tn,e,{configurable:!0,set:r}),gn(e,t)}).prototype,lr(rn,"toString",(function(){return Qr(this).tag})),lr(en,"withoutSetter",(function(t){return gn(mt(t),t)})),j.f=bn,Kt.f=yn,Ge.f=mn,Nt.f=wn,rr.f=sr.f=xn,me.f=Sn,fr.f=function(t){return gn(kt(t),t)},E&&cn(rn,"description",{configurable:!0,get:function(){return Qr(this).description}})),te({global:!0,constructor:!0,wrap:!0,forced:!J,sham:!J},{Symbol:en}),Kr(ye(dn),(function(t){dr(t);})),te({target:"Symbol",stat:!0,forced:!J},{useSetter:function(){hn=!0;},useSimple:function(){hn=!1;}}),te({target:"Object",stat:!0,forced:!J,sham:!E},{create:function(t,e){return void 0===e?tr(t):mn(tr(t),e)},defineProperty:yn,defineProperties:mn,getOwnPropertyDescriptor:wn}),te({target:"Object",stat:!0,forced:!J},{getOwnPropertyNames:xn}),hr(),mr(en,"Symbol"),pe[Zr]=!0;var kn=J&&!!Symbol.for&&!!Symbol.keyFor,On=lt("string-to-symbol-registry"),En=lt("symbol-to-string-registry");te({target:"Symbol",stat:!0,forced:!kn},{for:function(t){var e=qe(t);if(ht(On,e))return On[e];var r=q("Symbol")(e);return On[e]=r,En[r]=e,r}});var An=lt("symbol-to-string-registry");te({target:"Symbol",stat:!0,forced:!kn},{keyFor:function(t){if(!et(t))throw TypeError(nt(t)+" is not a symbol");if(ht(An,t))return An[t]}});var Tn=q("JSON","stringify"),Cn=k(/./.exec),In=k("".charAt),jn=k("".charCodeAt),Pn=k("".replace),Rn=k(1..toString),Nn=/[\uD800-\uDFFF]/g,Fn=/^[\uD800-\uDBFF]$/,Ln=/^[\uDC00-\uDFFF]$/,Dn=!J||d((function(){var t=q("Symbol")();return "[null]"!=Tn([t])||"{}"!=Tn({a:t})||"{}"!=Tn(Object(t))})),Mn=d((function(){return '"\\udf06\\ud834"'!==Tn("\udf06\ud834")||'"\\udead"'!==Tn("\udead")})),_n=function(t,e){var r=Oe(arguments),n=e;if((B(e)||void 0!==t)&&!et(t))return Fr(e)||(e=function(t,e){if(O(n)&&(e=T(n,this,t,e)),!et(e))return e}),r[1]=e,m(Tn,null,r)},zn=function(t,e,r){var n=In(r,e-1),o=In(r,e+1);return Cn(Fn,t)&&!Cn(Ln,o)||Cn(Ln,t)&&!Cn(Fn,n)?"\\u"+Rn(jn(t,0),16):t};Tn&&te({target:"JSON",stat:!0,arity:3,forced:Dn||Mn},{stringify:function(t,e,r){var n=Oe(arguments),o=m(Dn?_n:Tn,null,n);return Mn&&"string"==typeof o?Pn(o,Nn,zn):o}});var Hn=!J||d((function(){me.f(1);}));te({target:"Object",stat:!0,forced:Hn},{getOwnPropertySymbols:function(t){var e=me.f;return e?e(pt(t)):[]}});var Bn,Un,Vn=U.Object.getOwnPropertySymbols,qn=fe.indexOf,Gn=k([].indexOf),Wn=!!Gn&&1/Gn([1],1,-0)<0,Xn=!!(Un=[]["indexOf"])&&d((function(){Un.call(null,Bn||function(){return 1},1);}));te({target:"Array",proto:!0,forced:Wn||!Xn},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return Wn?Gn(this,t,e)||0:qn(this,t,e)}});var Yn=Pe("Array").indexOf,$n=Array.prototype,Kn=function(t){var e=t.indexOf;return t===$n||G($n,t)&&e===$n.indexOf?Yn:e},Zn=d((function(){ye(1);}));te({target:"Object",stat:!0,forced:Zn},{keys:function(t){return ye(pt(t))}});var Jn=U.Object.keys;function Qn(t,e){if(null==t)return {};var r,n,o=function(t,e){if(null==t)return {};var r,n,o={},i=Jn(t);for(n=0;n<i.length;n++)r=i[n],Kn(e).call(e,r)>=0||(o[r]=t[r]);return o}(t,e);if(Vn){var i=Vn(t);for(n=0;n<i.length;n++)r=i[n],Kn(e).call(e,r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r]);}return o}var to=TypeError,eo=function(t){if(t>9007199254740991)throw to("Maximum allowed index exceeded");return t},ro=kt("species"),no=function(t){return Z>=51||!d((function(){var e=[];return (e.constructor={})[ro]=function(){return {foo:1}},1!==e[t](Boolean).foo}))},oo=kt("isConcatSpreadable"),io=Z>=51||!d((function(){var t=[];return t[oo]=!1,t.concat()[0]!==t})),ao=no("concat"),co=function(t){if(!B(t))return !1;var e=t[oo];return void 0!==e?!!e:Fr(t)};te({target:"Array",proto:!0,arity:1,forced:!io||!ao},{concat:function(t){var e,r,n,o,i,a=pt(this),c=Wr(a,0),u=0;for(e=-1,n=arguments.length;e<n;e++)if(co(i=-1===e?a:arguments[e]))for(o=se(i),eo(u+o),r=0;r<o;r++,u++)r in i&&nr(c,u,i[r]);else eo(u+1),nr(c,u++,i);return c.length=u,c}});var uo=Pe("Array").concat,so=Array.prototype,lo=function(t){var e=t.concat;return t===so||G(so,t)&&e===so.concat?uo:e},fo=no("slice"),po=kt("species"),ho=Array,vo=Math.max;te({target:"Array",proto:!0,forced:!fo},{slice:function(t,e){var r,n,o,i=H(this),a=se(i),c=ce(t,a),u=ce(void 0===e?a:e,a);if(Fr(i)&&(r=i.constructor,(Vr(r)&&(r===ho||Fr(r.prototype))||B(r)&&null===(r=r[po]))&&(r=void 0),r===ho||void 0===r))return Oe(i,c,u);for(n=new(void 0===r?ho:r)(vo(u-c,0)),o=0;c<u;c++,o++)c in i&&nr(n,o,i[c]);return n.length=o,n}});var go=Pe("Array").slice,yo=Array.prototype,mo=function(t){var e=t.slice;return t===yo||G(yo,t)&&e===yo.slice?go:e};te({target:"Array",stat:!0},{isArray:Fr});var bo=U.Array.isArray;var wo=Object.freeze({__proto__:null});dr("asyncIterator");var xo=Object.freeze({__proto__:null});dr("hasInstance"),dr("isConcatSpreadable"),dr("iterator"),dr("match"),dr("matchAll"),dr("replace"),dr("search"),dr("species"),dr("split"),dr("toPrimitive"),hr(),dr("toStringTag"),mr(q("Symbol"),"Symbol"),dr("unscopables"),mr(p.JSON,"JSON",!0);var So=Object.freeze({__proto__:null}),ko=Object.freeze({__proto__:null});u(wo),u(xo),u(So),u(ko);var Oo,Eo,Ao,To=U.Symbol,Co={},Io=Function.prototype,jo=E&&Object.getOwnPropertyDescriptor,Po=ht(Io,"name"),Ro={EXISTS:Po,PROPER:Po&&"something"===function(){}.name,CONFIGURABLE:Po&&(!E||E&&jo(Io,"name").configurable)},No=!d((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Fo=Ye("IE_PROTO"),Lo=Object,Do=Lo.prototype,Mo=No?Lo.getPrototypeOf:function(t){var e=pt(t);if(ht(e,Fo))return e[Fo];var r=e.constructor;return O(r)&&e instanceof r?r.prototype:e instanceof Lo?Do:null},_o=kt("iterator"),zo=!1;[].keys&&("next"in(Ao=[].keys())?(Eo=Mo(Mo(Ao)))!==Object.prototype&&(Oo=Eo):zo=!0);var Ho=null==Oo||d((function(){var t={};return Oo[_o].call(t)!==t}));Oo=Ho?{}:tr(Oo),O(Oo[_o])||lr(Oo,_o,(function(){return this}));var Bo={IteratorPrototype:Oo,BUGGY_SAFARI_ITERATORS:zo},Uo=Bo.IteratorPrototype,Vo=function(){return this};Object.setPrototypeOf||"__proto__"in{}&&function(){var t,e=!1,r={};try{(t=k(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array;}catch(t){}}();var qo=Ro.PROPER,Go=Bo.BUGGY_SAFARI_ITERATORS,Wo=kt("iterator"),Xo=function(){return this},Yo=function(t,e,r,n,o,i,a){!function(t,e,r,n){var o=e+" Iterator";t.prototype=tr(Uo,{next:P(+!n,r)}),mr(t,o,!1,!0),Co[o]=Vo;}(r,e,n);var c,u,s,l=function(t){if(t===o&&v)return v;if(!Go&&t in d)return d[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},f=e+" Iterator",p=!1,d=t.prototype,h=d[Wo]||d["@@iterator"]||o&&d[o],v=!Go&&h||l(o),g="Array"==e&&d.entries||h;if(g&&(c=Mo(g.call(new t)))!==Object.prototype&&c.next&&(mr(c,f,!0,!0),Co[f]=Xo),qo&&"values"==o&&h&&"values"!==h.name&&(p=!0,v=function(){return T(h,this)}),o)if(u={values:l("values"),keys:i?v:l("keys"),entries:l("entries")},a)for(s in u)(Go||p||!(s in d))&&lr(d,s,u[s]);else te({target:e,proto:!0,forced:Go||p},u);return a&&d[Wo]!==v&&lr(d,Wo,v,{name:o}),Co[e]=v,u};Kt.f;var $o=Nr.set,Ko=Nr.getterFor("Array Iterator");Yo(Array,"Array",(function(t,e){$o(this,{type:"Array Iterator",target:H(t),index:0,kind:e});}),(function(){var t=Ko(this),e=t.target,r=t.kind,n=t.index++;return !e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),Co.Arguments=Co.Array;var Zo=kt("toStringTag");for(var Jo in {CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Qo=p[Jo],ti=Qo&&Qo.prototype;ti&&Ue(ti)!==Zo&&Zt(ti,Zo,Jo),Co[Jo]=Co.Array;}var ei=To;dr("asyncDispose"),dr("dispose"),dr("matcher"),dr("metadataKey"),dr("observable"),dr("metadata"),dr("patternMatch"),dr("replaceAll");var ri=ei,ni=k("".charAt),oi=k("".charCodeAt),ii=k("".slice),ai=function(t){return function(e,r){var n,o,i=qe(z(e)),a=oe(r),c=i.length;return a<0||a>=c?t?"":void 0:(n=oi(i,a))<55296||n>56319||a+1===c||(o=oi(i,a+1))<56320||o>57343?t?ni(i,a):n:t?ii(i,a,a+2):o-56320+(n-55296<<10)+65536}},ci={codeAt:ai(!1),charAt:ai(!0)}.charAt,ui=Nr.set,si=Nr.getterFor("String Iterator");Yo(String,"String",(function(t){ui(this,{type:"String Iterator",string:qe(t),index:0});}),(function(){var t,e=si(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=ci(r,n),e.index+=t.length,{value:t,done:!1})}));var li=kt("iterator"),fi=function(t){if(null!=t)return at(t,li)||at(t,"@@iterator")||Co[Ue(t)]},pi=fi;var di=function(t,e,r){var n,o;Wt(t);try{if(!(n=at(t,"return"))){if("throw"===e)throw r;return r}n=T(n,t);}catch(t){o=!0,n=t;}if("throw"===e)throw r;if(o)throw n;return Wt(n),r},hi=function(t,e,r,n){try{return n?e(Wt(r)[0],r[1]):e(r)}catch(e){di(t,"throw",e);}},vi=kt("iterator"),gi=Array.prototype,yi=function(t){return void 0!==t&&(Co.Array===t||gi[vi]===t)},mi=TypeError,bi=function(t,e){var r=arguments.length<2?fi(t):e;if(it(r))return Wt(T(r,t));throw mi(nt(t)+" is not iterable")},wi=Array,xi=kt("iterator"),Si=!1;try{var ki=0,Oi={next:function(){return {done:!!ki++}},return:function(){Si=!0;}};Oi[xi]=function(){return this},Array.from(Oi,(function(){throw 2}));}catch(t){}var Ei=!function(t,e){if(!e&&!Si)return !1;var r=!1;try{var n={};n[xi]=function(){return {next:function(){return {done:r=!0}}}},t(n);}catch(t){}return r}((function(t){Array.from(t);}));te({target:"Array",stat:!0,forced:Ei},{from:function(t){var e=pt(t),r=Vr(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=Ut(o,n>2?arguments[2]:void 0));var a,c,u,s,l,f,p=fi(e),d=0;if(!p||this===wi&&yi(p))for(a=se(e),c=r?new this(a):wi(a);a>d;d++)f=i?o(e[d],d):e[d],nr(c,d,f);else for(l=(s=bi(e,p)).next,c=r?new this:[];!(u=T(l,s)).done;d++)f=i?hi(s,o,[u.value,d],!0):u.value,nr(c,d,f);return c.length=d,c}});var Ai=U.Array.from;function Ti(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ci(t,e){return function(t){if(bo(t))return t}(t)||function(t,e){var r=null==t?null:void 0!==ri&&pi(t)||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t;}finally{try{a||null==r.return||r.return();}finally{if(c)throw o}}return i}}(t,e)||function(t,e){var r;if(t){if("string"==typeof t)return Ti(t,e);var n=mo(r=Object.prototype.toString.call(t)).call(r,8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Ai(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ti(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ii="START",ji="DONE",Pi="START",Ri="DONE",Ni="ADD",Fi="ASCEND ",Li="DESCEND ",Di="DONE";function Mi(t){return Number(t.replace("px",""))}function _i(t,e,r,n){var o=n.current?n.current.getClientRects().length:0;return !(!t&&"none"===e)&&(!!(t&&o>t)||!!("none"!==e&&r.current&&r.current.scrollHeight>Mi(e)))}var zi=function(i){var a=i.ellipsis,c=void 0===a?"...":a,u=i.content,s=i.maxHeight,l=i.maxLines,f=i.expanded,p=void 0!==f&&f,d=i.renderContent,h=i.renderClampedContent,v=i.className,g=void 0===v?"":v,y=u.length||0,m=t.useRef(),b=t.useRef(),w=t.useRef(y),x=Ci(t.useState(y),2),S=x[0],k=x[1],O=Ci(t.useState(ji),2),E=O[0],A=O[1],T=Ci(t.useState(Ri),2),C=T[0],I=T[1],j=Ci(t.useState(Di),2),P=j[0],R=j[1],N=Ci(t.useState(!0),2),F=N[0],L=N[1],D=function(t$1){var e=Ci(t.useState(t$1),2),n=e[0],i=e[1];return t.useEffect((function(){i(t$1);}),[t$1]),n}(p),M=function(t$1,e,o,i,a,c,u){var s=Ci(t.useState((function(){return e()})),2),l=s[0],f=s[1];return t.useLayoutEffect((function(){!a||u?f(e()):i!==a&&f(o(i,c));}),[t$1,e,o,i,a,c,u]),l}(u,d,h,S,y,c,D),_=function(t$1,e){var o=Ci(t.useState("none"),2),i=o[0],a=o[1];return t.useLayoutEffect((function(){a(t$1?"none":e?"number"==typeof e?"".concat(e,"px"):e:"none");}),[t$1,e]),i}(D,s);t.useLayoutEffect((function(){!D&&_i(l,_,m,b)&&E===ji&&A(Ii);}),[l,s,c,D,E,_]),t.useLayoutEffect((function(){E===Ii&&I(Pi);}),[E,y]),t.useLayoutEffect((function(){var t=b.current?b.current.getClientRects().length:0,e=m.current&&m.current.scrollHeight<=Mi(_);C!==Pi&&C!==Ni||(_i(l,_,m,b)?C===Ni?(L(!1),k((function(t){return ~~(t-w.current)}))):(k((function(t){return ~~(t/2)})),w.current/=2):F&&("none"!==_&&e||l&&t<l)?(I(Ni),k((function(t){return ~~(t+w.current/2)})),w.current/=2):(I(Ri),R(Fi)));}),[C,l,b,_,M,F]),t.useLayoutEffect((function(){var t=b.current?b.current.getClientRects().length:0;P===Fi?(!_i(l,_,m,b)||t<2)&&S<y?k(S+1):R(Li):P===Li&&(_i(l,_,m,b)&&t>1&&S>0?k(S-1):(R(Di),A(ji),w.current=y));}),[P,y,S,b,l,_]);var z=t__default["default"].createElement("span",null,M),H=t__default["default"].createElement("span",{ref:b,style:{boxShadow:"transparent 0 0",wordBreak:"break-all"}},z);return t__default["default"].createElement("div",{className:"react-simple-clamp ".concat(g),ref:m,style:{overflow:"hidden",maxHeight:_}},H)};zi.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};var Hi=["content","renderAfter"],Bi=function(e){var r=e.content,n=void 0===r?"":r,o=e.renderAfter,a=void 0===o?function(){return t__default["default"].createElement(t.Fragment,null)}:o,c=Qn(e,Hi);return t__default["default"].createElement(zi,Le({content:n,renderContent:function(){return t__default["default"].createElement("span",null,n,a(!1))},renderClampedContent:function(e,r){var o;return t__default["default"].createElement("span",null,lo(o="".concat(mo(n).call(n,0,e))).call(o,r),a(!0))}},c))};Bi.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};var Ui="\t\n\v\f\r                　\u2028\u2029\ufeff",Vi=k("".replace),qi="["+Ui+"]",Gi=RegExp("^"+qi+qi+"*"),Wi=RegExp(qi+qi+"*$"),Xi=function(t){return function(e){var r=qe(z(e));return 1&t&&(r=Vi(r,Gi,"")),2&t&&(r=Vi(r,Wi,"")),r}},Yi={start:Xi(1),end:Xi(2),trim:Xi(3)},$i=Ro.PROPER,Ki=Yi.trim;te({target:"String",proto:!0,forced:function(t){return d((function(){return !!Ui[t]()||"​᠎"!=="​᠎"[t]()||$i&&Ui[t].name!==t}))}("trim")},{trim:function(){return Ki(this)}});var Zi=Pe("String").trim,Ji=String.prototype,Qi=function(t){var e=t.trim;return "string"==typeof t||t===Ji||G(Ji,t)&&e===Ji.trim?Zi:e},ta=/<([a-zA-Z]+[0-9]?)/,ea=/<head[^]*>/i,ra=/<body[^]*>/i,na=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},oa=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var ia=new window.DOMParser;na=oa=function(t,e){return e&&(t="<"+e+">"+t+"</"+e+">"),ia.parseFromString(t,"text/html")};}if(document.implementation){var aa=document.implementation.createHTMLDocument();na=function(t,e){return e?(aa.documentElement.querySelector(e).innerHTML=t,aa):(aa.documentElement.innerHTML=t,aa)};}var ca,ua=document.createElement("template");ua.content&&(ca=function(t){return ua.innerHTML=t,ua.content.childNodes});var sa,la=function(t){var e,r,n,o,i=t.match(ta);switch(i&&i[1]&&(e=i[1].toLowerCase()),e){case"html":return r=oa(t),ea.test(t)||(n=r.querySelector("head"))&&n.parentNode.removeChild(n),ra.test(t)||(n=r.querySelector("body"))&&n.parentNode.removeChild(n),r.querySelectorAll("html");case"head":case"body":return o=(r=na(t)).querySelectorAll(e),ra.test(t)&&ea.test(t)?o[0].parentNode.childNodes:o;default:return ca?ca(t):(n=na(t,"body").querySelector("body")).childNodes}};!function(t){t.Root="root",t.Text="text",t.Directive="directive",t.Comment="comment",t.Script="script",t.Style="style",t.Tag="tag",t.CDATA="cdata",t.Doctype="doctype";}(sa||(sa={})),sa.Root,sa.Text,sa.Directive,sa.Comment,sa.Script,sa.Style,sa.Tag,sa.CDATA,sa.Doctype;class fa{constructor(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null;}get parentNode(){return this.parent}set parentNode(t){this.parent=t;}get previousSibling(){return this.prev}set previousSibling(t){this.prev=t;}get nextSibling(){return this.next}set nextSibling(t){this.next=t;}cloneNode(t=!1){return xa(this,t)}}class pa extends fa{constructor(t){super(),this.data=t;}get nodeValue(){return this.data}set nodeValue(t){this.data=t;}}class da extends pa{constructor(){super(...arguments),this.type=sa.Text;}get nodeType(){return 3}}class ha extends pa{constructor(){super(...arguments),this.type=sa.Comment;}get nodeType(){return 8}}class va extends pa{constructor(t,e){super(e),this.name=t,this.type=sa.Directive;}get nodeType(){return 1}}class ga extends fa{constructor(t){super(),this.children=t;}get firstChild(){var t;return null!==(t=this.children[0])&&void 0!==t?t:null}get lastChild(){return this.children.length>0?this.children[this.children.length-1]:null}get childNodes(){return this.children}set childNodes(t){this.children=t;}}class ya extends ga{constructor(){super(...arguments),this.type=sa.CDATA;}get nodeType(){return 4}}class ma extends ga{constructor(){super(...arguments),this.type=sa.Root;}get nodeType(){return 9}}class ba extends ga{constructor(t,e,r=[],n=("script"===t?sa.Script:"style"===t?sa.Style:sa.Tag)){super(r),this.name=t,this.attribs=e,this.type=n;}get nodeType(){return 1}get tagName(){return this.name}set tagName(t){this.name=t;}get attributes(){return Object.keys(this.attribs).map(t=>{var e,r;return {name:t,value:this.attribs[t],namespace:null===(e=this["x-attribsNamespace"])||void 0===e?void 0:e[t],prefix:null===(r=this["x-attribsPrefix"])||void 0===r?void 0:r[t]}})}}function wa(t){return (e=t).type===sa.Tag||e.type===sa.Script||e.type===sa.Style;var e;}function xa(t,e=!1){let r;if(function(t){return t.type===sa.Text}(t))r=new da(t.data);else if(function(t){return t.type===sa.Comment}(t))r=new ha(t.data);else if(wa(t)){const n=e?Sa(t.children):[],o=new ba(t.name,{...t.attribs},n);n.forEach(t=>t.parent=o),null!=t.namespace&&(o.namespace=t.namespace),t["x-attribsNamespace"]&&(o["x-attribsNamespace"]={...t["x-attribsNamespace"]}),t["x-attribsPrefix"]&&(o["x-attribsPrefix"]={...t["x-attribsPrefix"]}),r=o;}else if(function(t){return t.type===sa.CDATA}(t)){const n=e?Sa(t.children):[],o=new ya(n);n.forEach(t=>t.parent=o),r=o;}else if(function(t){return t.type===sa.Root}(t)){const n=e?Sa(t.children):[],o=new ma(n);n.forEach(t=>t.parent=o),t["x-mode"]&&(o["x-mode"]=t["x-mode"]),r=o;}else {if(!function(t){return t.type===sa.Directive}(t))throw new Error("Not implemented yet: "+t.type);{const e=new va(t.name,t.data);null!=t["x-name"]&&(e["x-name"]=t["x-name"],e["x-publicId"]=t["x-publicId"],e["x-systemId"]=t["x-systemId"]),r=e;}}return r.startIndex=t.startIndex,r.endIndex=t.endIndex,null!=t.sourceCodeLocation&&(r.sourceCodeLocation=t.sourceCodeLocation),r}function Sa(t){const e=t.map(t=>xa(t,!0));for(let t=1;t<e.length;t++)e[t].prev=e[t-1],e[t-1].next=e[t];return e}const ka={withStartIndices:!1,withEndIndices:!1,xmlMode:!1};for(var Oa,Ea=class{constructor(t,e,r){this.dom=[],this.root=new ma(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof e&&(r=e,e=ka),"object"==typeof t&&(e=t,t=void 0),this.callback=null!=t?t:null,this.options=null!=e?e:ka,this.elementCB=null!=r?r:null;}onparserinit(t){this.parser=t;}onreset(){this.dom=[],this.root=new ma(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null;}onend(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null));}onerror(t){this.handleCallback(t);}onclosetag(){this.lastNode=null;const t=this.tagStack.pop();this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(t);}onopentag(t,e){const r=this.options.xmlMode?sa.Tag:void 0,n=new ba(t,e,void 0,r);this.addNode(n),this.tagStack.push(n);}ontext(t){const{lastNode:e}=this;if(e&&e.type===sa.Text)e.data+=t,this.options.withEndIndices&&(e.endIndex=this.parser.endIndex);else {const e=new da(t);this.addNode(e),this.lastNode=e;}}oncomment(t){if(this.lastNode&&this.lastNode.type===sa.Comment)return void(this.lastNode.data+=t);const e=new ha(t);this.addNode(e),this.lastNode=e;}oncommentend(){this.lastNode=null;}oncdatastart(){const t=new da(""),e=new ya([t]);this.addNode(e),t.parent=e,this.lastNode=t;}oncdataend(){this.lastNode=null;}onprocessinginstruction(t,e){const r=new va(t,e);this.addNode(r);}handleCallback(t){if("function"==typeof this.callback)this.callback(t,this.dom);else if(t)throw t}addNode(t){const e=this.tagStack[this.tagStack.length-1],r=e.children[e.children.length-1];this.options.withStartIndices&&(t.startIndex=this.parser.startIndex),this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),e.children.push(t),r&&(t.prev=r,r.next=t),t.parent=e,this.lastNode=null;}},Aa=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],Ta=Ea.Comment,Ca=Ea.Element,Ia=Ea.ProcessingInstruction,ja=Ea.Text,Pa={},Ra=0,Na=Aa.length;Ra<Na;Ra++)Pa[(Oa=Aa[Ra]).toLowerCase()]=Oa;function Fa(t){for(var e,r={},n=0,o=t.length;n<o;n++)r[(e=t[n]).name]=e.value;return r}function La(t){var e=function(t){return Pa[t]}(t=t.toLowerCase());return e||t}var Da={formatAttributes:Fa,formatDOM:function t(e,r,n){r=r||null;for(var o=[],i=0,a=e.length;i<a;i++){var c,u=e[i];switch(u.nodeType){case 1:(c=new Ca(La(u.nodeName),Fa(u.attributes))).children=t(u.childNodes,c);break;case 3:c=new ja(u.nodeValue);break;case 8:c=new Ta(u.nodeValue);break;default:continue}var s=o[i-1]||null;s&&(s.next=c),c.parent=r,c.prev=s,c.next=null,o.push(c);}return n&&((c=new Ia(n.substring(0,n.indexOf(" ")).toLowerCase(),n)).next=o[0]||null,c.parent=r,o.unshift(c),o[1]&&(o[1].prev=o[0])),o}}.formatDOM,Ma=/<(![a-zA-Z\s]+)>/;var _a=function(t){if("string"!=typeof t)throw new TypeError("First argument must be a string");if(""===t)return [];var e,r=t.match(Ma);return r&&r[1]&&(e=r[1]),Da(la(t),null,e)},za=d((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8});}})),Ha=Object.isExtensible,Ba=d((function(){Ha(1);}))||za?function(t){return !!B(t)&&((!za||"ArrayBuffer"!=F(t))&&(!Ha||Ha(t)))}:Ha,Ua=!d((function(){return Object.isExtensible(Object.preventExtensions({}))})),Va=c((function(t){var e=Kt.f,r=!1,n=mt("meta"),o=0,i=function(t){e(t,n,{value:{objectID:"O"+o++,weakData:{}}});},a=t.exports={enable:function(){a.enable=function(){},r=!0;var t=rr.f,e=k([].splice),o={};o[n]=1,t(o).length&&(rr.f=function(r){for(var o=t(r),i=0,a=o.length;i<a;i++)if(o[i]===n){e(o,i,1);break}return o},te({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:sr.f}));},fastKey:function(t,e){if(!B(t))return "symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!ht(t,n)){if(!Ba(t))return "F";if(!e)return "E";i(t);}return t[n].objectID},getWeakData:function(t,e){if(!ht(t,n)){if(!Ba(t))return !0;if(!e)return !1;i(t);}return t[n].weakData},onFreeze:function(t){return Ua&&r&&Ba(t)&&!ht(t,n)&&i(t),t}};pe[n]=!0;})),qa=TypeError,Ga=function(t,e){this.stopped=t,this.result=e;},Wa=Ga.prototype,Xa=function(t,e,r){var n,o,i,a,c,u,s,l=r&&r.that,f=!(!r||!r.AS_ENTRIES),p=!(!r||!r.IS_RECORD),d=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),v=Ut(e,l),g=function(t){return n&&di(n,"normal",t),new Ga(!0,t)},y=function(t){return f?(Wt(t),h?v(t[0],t[1],g):v(t[0],t[1])):h?v(t,g):v(t)};if(p)n=t.iterator;else if(d)n=t;else {if(!(o=fi(t)))throw qa(nt(t)+" is not iterable");if(yi(o)){for(i=0,a=se(t);a>i;i++)if((c=y(t[i]))&&G(Wa,c))return c;return new Ga(!1)}n=bi(t,o);}for(u=p?t.next:n.next;!(s=T(u,n)).done;){try{c=y(s.value);}catch(t){di(n,"throw",t);}if("object"==typeof c&&c&&G(Wa,c))return c}return new Ga(!1)},Ya=TypeError,$a=function(t,e){if(G(e,t))return t;throw Ya("Incorrect invocation")},Ka=Kt.f,Za=$r.forEach,Ja=Nr.set,Qa=Nr.getterFor,tc=function(t,e,r){for(var n in e)r&&r.unsafe&&t[n]?t[n]=e[n]:lr(t,n,e[n],r);return t},ec=kt("species"),rc=Kt.f,nc=Va.fastKey,oc=Nr.set,ic=Nr.getterFor;!function(t,e,r){var n,o=-1!==t.indexOf("Map"),i=-1!==t.indexOf("Weak"),a=o?"set":"add",c=p[t],u=c&&c.prototype,s={};if(E&&O(c)&&(i||u.forEach&&!d((function(){(new c).entries().next();})))){var l=(n=e((function(e,r){Ja($a(e,l),{type:t,collection:new c}),null!=r&&Xa(r,e[a],{that:e,AS_ENTRIES:o});}))).prototype,f=Qa(t);Za(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e="add"==t||"set"==t;!(t in u)||i&&"clear"==t||Zt(l,t,(function(r,n){var o=f(this).collection;if(!e&&i&&!B(r))return "get"==t&&void 0;var a=o[t](0===r?0:r,n);return e?this:a}));})),i||Ka(l,"size",{configurable:!0,get:function(){return f(this).collection.size}});}else n=r.getConstructor(e,t,o,a),Va.enable();mr(n,t,!1,!0),s[t]=n,te({global:!0,forced:!0},s),i||r.setStrong(n,t,o);}("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),{getConstructor:function(t,e,r,n){var o=t((function(t,o){$a(t,i),oc(t,{type:e,index:tr(null),first:void 0,last:void 0,size:0}),E||(t.size=0),null!=o&&Xa(o,t[n],{that:t,AS_ENTRIES:r});})),i=o.prototype,a=ic(e),c=function(t,e,r){var n,o,i=a(t),c=u(t,e);return c?c.value=r:(i.last=c={index:o=nc(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=c),n&&(n.next=c),E?i.size++:t.size++,"F"!==o&&(i.index[o]=c)),t},u=function(t,e){var r,n=a(t),o=nc(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return tc(i,{clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,E?t.size=0:this.size=0;},delete:function(t){var e=a(this),r=u(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first==r&&(e.first=n),e.last==r&&(e.last=o),E?e.size--:this.size--;}return !!r},forEach:function(t){for(var e,r=a(this),n=Ut(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous;},has:function(t){return !!u(this,t)}}),tc(i,r?{get:function(t){var e=u(this,t);return e&&e.value},set:function(t,e){return c(this,0===t?0:t,e)}}:{add:function(t){return c(this,t=0===t?0:t,t)}}),E&&rc(i,"size",{get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=ic(e),i=ic(n);Yo(t,e,(function(t,e){oc(this,{type:n,target:t,state:o(t),kind:e,last:void 0});}),(function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),function(t){var e=q(t),r=Kt.f;E&&e&&!e[ec]&&r(e,ec,{configurable:!0,get:function(){return this}});}(e);}});var ac=U.Set,cc=TypeError,uc=function(t){if(Vr(t))return t;throw cc(nt(t)+" is not a constructor")},sc=[].push;te({target:"Set",stat:!0,forced:!0},{from:function(t){var e,r,n,o,i=arguments.length,a=i>1?arguments[1]:void 0;return uc(this),(e=void 0!==a)&&it(a),null==t?new this:(r=[],e?(n=0,o=Ut(a,i>2?arguments[2]:void 0),Xa(t,(function(t){T(sc,r,o(t,n++));}))):Xa(t,sc,{that:r}),new this(r))}});te({target:"Set",stat:!0,forced:!0},{of:function(){return new this(Oe(arguments))}});te({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=Wt(this),e=it(t.add),r=0,n=arguments.length;r<n;r++)T(e,t,arguments[r]);return t}});te({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=Wt(this),r=it(e.delete),n=!0,o=0,i=arguments.length;o<i;o++)t=T(r,e,arguments[o]),n=n&&t;return !!n}});var lc=bi;te({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=Wt(this),r=lc(e),n=Ut(t,arguments.length>1?arguments[1]:void 0);return !Xa(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var fc=kt("species"),pc=function(t,e){var r,n=Wt(t).constructor;return void 0===n||null==(r=Wt(n)[fc])?e:uc(r)};te({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=Wt(this),r=new(pc(e,q("Set")))(e),n=it(r.delete);return Xa(t,(function(t){T(n,r,t);})),r}}),te({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=Wt(this),r=lc(e),n=Ut(t,arguments.length>1?arguments[1]:void 0),o=new(pc(e,q("Set"))),i=it(o.add);return Xa(r,(function(t){n(t,t,e)&&T(i,o,t);}),{IS_ITERATOR:!0}),o}}),te({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=Wt(this),r=lc(e),n=Ut(t,arguments.length>1?arguments[1]:void 0);return Xa(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}}),te({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=Wt(this),r=new(pc(e,q("Set"))),n=it(e.has),o=it(r.add);return Xa(t,(function(t){T(n,e,t)&&T(o,r,t);})),r}}),te({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=Wt(this),r=it(e.has);return !Xa(t,(function(t,n){if(!0===T(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}}),te({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=bi(this),r=Wt(t),n=r.has;return O(n)||(r=new(q("Set"))(t),n=it(r.has)),!Xa(e,(function(t,e){if(!1===T(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}}),te({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=Wt(this),r=it(e.has);return !Xa(t,(function(t,n){if(!1===T(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}});var dc=k([].join),hc=[].push;te({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=Wt(this),r=lc(e),n=void 0===t?",":qe(t),o=[];return Xa(r,hc,{that:o,IS_ITERATOR:!0}),dc(o,n)}}),te({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=Wt(this),r=lc(e),n=Ut(t,arguments.length>1?arguments[1]:void 0),o=new(pc(e,q("Set"))),i=it(o.add);return Xa(r,(function(t){T(i,o,n(t,t,e));}),{IS_ITERATOR:!0}),o}});var vc=TypeError;te({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=Wt(this),r=lc(e),n=arguments.length<2,o=n?void 0:arguments[1];if(it(t),Xa(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e);}),{IS_ITERATOR:!0}),n)throw vc("Reduce of empty set with no initial value");return o}}),te({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=Wt(this),r=lc(e),n=Ut(t,arguments.length>1?arguments[1]:void 0);return Xa(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}}),te({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=Wt(this),r=new(pc(e,q("Set")))(e),n=it(r.delete),o=it(r.add);return Xa(t,(function(t){T(n,r,t)||T(o,r,t);})),r}}),te({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=Wt(this),r=new(pc(e,q("Set")))(e);return Xa(t,it(r.add),{that:r}),r}});var gc=ac,yc={SAME:0,CAMELCASE:1,possibleStandardNames:{accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},mc=c((function(t,e){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t;}finally{try{a||null==r.return||r.return();}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(e,"__esModule",{value:!0});function o(t,e,r,n,o,i,a){this.acceptsBooleans=2===e||3===e||4===e,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a;}var i={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(t){i[t]=new o(t,0,!1,t,null,!1,!1);})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(t){var e=r(t,2),n=e[0],a=e[1];i[n]=new o(n,1,!1,a,null,!1,!1);})),["contentEditable","draggable","spellCheck","value"].forEach((function(t){i[t]=new o(t,2,!1,t.toLowerCase(),null,!1,!1);})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(t){i[t]=new o(t,2,!1,t,null,!1,!1);})),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach((function(t){i[t]=new o(t,3,!1,t.toLowerCase(),null,!1,!1);})),["checked","multiple","muted","selected"].forEach((function(t){i[t]=new o(t,3,!0,t,null,!1,!1);})),["capture","download"].forEach((function(t){i[t]=new o(t,4,!1,t,null,!1,!1);})),["cols","rows","size","span"].forEach((function(t){i[t]=new o(t,6,!1,t,null,!1,!1);})),["rowSpan","start"].forEach((function(t){i[t]=new o(t,5,!1,t.toLowerCase(),null,!1,!1);}));var a=/[\-\:]([a-z])/g,c=function(t){return t[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(t){var e=t.replace(a,c);i[e]=new o(e,1,!1,t,null,!1,!1);})),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(t){var e=t.replace(a,c);i[e]=new o(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1);})),["xml:base","xml:lang","xml:space"].forEach((function(t){var e=t.replace(a,c);i[e]=new o(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1);})),["tabIndex","crossOrigin"].forEach((function(t){i[t]=new o(t,1,!1,t.toLowerCase(),null,!1,!1);}));i.xlinkHref=new o("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(t){i[t]=new o(t,1,!1,t.toLowerCase(),null,!0,!0);}));var u=yc.CAMELCASE,s=yc.SAME,l=yc.possibleStandardNames,f=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),p=Object.keys(l).reduce((function(t,e){var r=l[e];return r===s?t[e]=e:r===u?t[e.toLowerCase()]=e:t[e]=r,t}),{});e.BOOLEAN=3,e.BOOLEANISH_STRING=2,e.NUMERIC=5,e.OVERLOADED_BOOLEAN=4,e.POSITIVE_NUMERIC=6,e.RESERVED=0,e.STRING=1,e.getPropertyInfo=function(t){return i.hasOwnProperty(t)?i[t]:null},e.isCustomAttribute=f,e.possibleStandardNames=p;})),bc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,wc=/\n/g,xc=/^\s*/,Sc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,kc=/^:\s*/,Oc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ec=/^[;\s]*/,Ac=/^\s+|\s+$/g;function Tc(t){return t?t.replace(Ac,""):""}var Cc=function(t,e){var r,n=null;if(!t||"string"!=typeof t)return n;for(var o,i,a=function(t,e){if("string"!=typeof t)throw new TypeError("First argument must be a string");if(!t)return [];e=e||{};var r=1,n=1;function o(t){var e=t.match(wc);e&&(r+=e.length);var o=t.lastIndexOf("\n");n=~o?t.length-o:n+t.length;}function i(){var t={line:r,column:n};return function(e){return e.position=new a(t),s(),e}}function a(t){this.start=t,this.end={line:r,column:n},this.source=e.source;}function c(o){var i=new Error(e.source+":"+r+":"+n+": "+o);if(i.reason=o,i.filename=e.source,i.line=r,i.column=n,i.source=t,!e.silent)throw i}function u(e){var r=e.exec(t);if(r){var n=r[0];return o(n),t=t.slice(n.length),r}}function s(){u(xc);}function l(t){var e;for(t=t||[];e=f();)!1!==e&&t.push(e);return t}function f(){var e=i();if("/"==t.charAt(0)&&"*"==t.charAt(1)){for(var r=2;""!=t.charAt(r)&&("*"!=t.charAt(r)||"/"!=t.charAt(r+1));)++r;if(r+=2,""===t.charAt(r-1))return c("End of comment missing");var a=t.slice(2,r-2);return n+=2,o(a),t=t.slice(r),n+=2,e({type:"comment",comment:a})}}function p(){var t=i(),e=u(Sc);if(e){if(f(),!u(kc))return c("property missing ':'");var r=u(Oc),n=t({type:"declaration",property:Tc(e[0].replace(bc,"")),value:r?Tc(r[0].replace(bc,"")):""});return u(Ec),n}}return a.prototype.content=t,s(),function(){var t,e=[];for(l(e);t=p();)!1!==t&&(e.push(t),l(e));return e}()}(t),c="function"==typeof e,u=0,s=a.length;u<s;u++)o=(r=a[u]).property,i=r.value,c?e(o,i,r):i&&(n||(n={}),n[o]=i);return n},Ic=c((function(t,e){e.__esModule=!0,e.camelCase=void 0;var r=/^--[a-zA-Z0-9-]+$/,n=/-([a-z])/g,o=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,c=function(t,e){return e.toUpperCase()},u=function(t,e){return "".concat(e,"-")};e.camelCase=function(t,e){return void 0===e&&(e={}),function(t){return !t||o.test(t)||r.test(t)}(t)?t:(t=t.toLowerCase(),(t=e.reactCompat?t.replace(a,u):t.replace(i,u)).replace(n,c))};})),jc=c((function(t,e){var r=a&&a.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var n=r(Cc);e.default=function(t,e){var r={};return t&&"string"==typeof t?((0, n.default)(t,(function(t,n){t&&n&&(r[(0, Ic.camelCase)(t,e)]=n);})),r):r};})),Pc=new gc(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]),Rc=new gc(["a","abbr","b","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","label","link","map","mark","math","meter","noscript","object","output","picture","progress","q","ruby","samp","script","select","small","span","strong","sub","sup","svg","textarea","time","u","var","video","wbr"]);function Nc(t){try{return jc(t,{reactCompat:!0})}catch(t){return {}}}function Fc(t){var e={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=t[r],o=r.toLowerCase();if("style"===o&&"string"==typeof n){e.style=Nc(n);continue}var i=mc.possibleStandardNames[o];if(i){e[i]=n;var a=mc.getPropInfo(i);switch(a&&a.type){case mc.BOOLEAN:e[i]=!0;break;case mc.OVERLOADED_BOOLEAN:""===n&&(e[i]=!0);}continue}e[r]=n;}return e}function Lc(t){return "text"===t.type&&t instanceof da||("tag"===t.type&&t instanceof ba&&Rc.has(t.name.toLowerCase()),!1)}var Dc=["content","renderAfter"];function Mc(e,r){if("string"!=typeof e)throw new TypeError("react-simple-clamp only accepts string as html content");return ""===Qi(e).call(e)?null:function e(r,n){for(var o=r.length,i=[],a=0;a<o;a++){var c=r[a];if(Lc(c))if("text"===c.type&&c instanceof da){var u;if(!Qi(u=c.data).call(u).length&&c.parent&&c.parent instanceof ba&&Pc.has(c.parent.name))continue;if("function"==typeof n){var s=n(c);if(s&&t__default["default"].isValidElement(s)){o>1&&(s=t__default["default"].cloneElement(s,{key:s.key||a})),i.push(s);continue}i.push(c.data);continue}i.push(c.data);}else {var l=null,f=Fc(c.attribs||{});"textarea"===c.name&&c.children[0]&&c.children[0]instanceof da?f.defaultValue=c.children[0].data:c.children&&c.children.length>0&&(l=e(c.children,n)),o>1&&(f.key=f.key||a),i.push(t__default["default"].createElement(c.name,f,l));}}return 1===i.length?i[0]:i}(_a(e),r)}var _c=function(e){var r=e.content,n=void 0===r?"":r,o=e.renderAfter,a=void 0===o?function(){return t__default["default"].createElement(t.Fragment,null)}:o,c=Qn(e,Dc);return t__default["default"].createElement(zi,Le({content:n,renderContent:function(){return t__default["default"].createElement(t.Fragment,null,Mc(n),a(!1))},renderClampedContent:function(e,r){var o=0,c=!1;return t__default["default"].createElement(t.Fragment,null,Mc(n,(function(r){var n;if(o===e||c)return t__default["default"].createElement(t.Fragment,null);if(!(o+r.data.length<=e)){var a=e-(o+r.data.length-e);return c=!0,t__default["default"].createElement(t.Fragment,null,mo(n=r.data).call(n,0,a))}o+=r.data.length;})),t__default["default"].createElement("span",null,r),a(!0))}},c))};_c.defaultProps={autoresize:!1,ellipsis:"",expanded:!1,className:""};

	var _this = undefined;

	var _jsxFileName = "/Users/albert/Documents/Code/github/react-simple-clamp/example/demo.jsx";
	var text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
	var html = 'hellohellohellhellohellohellhellohellohellhellohellohellhellohellohellhelloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld';

	var App = function App() {
	  var _useState = t.useState(false),
	      _useState2 = _slicedToArray(_useState, 2),
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
	  }, /*#__PURE__*/t__default["default"].createElement(Bi, {
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
	  }, /*#__PURE__*/t__default["default"].createElement(Bi, {
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
	  }, /*#__PURE__*/t__default["default"].createElement(Bi, {
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
	  }, /*#__PURE__*/t__default["default"].createElement(_c, {
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
