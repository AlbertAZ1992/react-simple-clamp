
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('htmlparser2/lib/esm/index.js'), require('domhandler/lib/esm/index.js')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'htmlparser2/lib/esm/index.js', 'domhandler/lib/esm/index.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM, global.index_js, global.index_js$1));
})(this, (function (React, ReactDOM, index_js, index_js$1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

	var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule$1(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire$1(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire$1 () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var check$1 = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1$1 =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check$1(typeof globalThis == 'object' && globalThis) ||
	  check$1(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check$1(typeof self == 'object' && self) ||
	  check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails$1 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var functionBindNative$1 = !fails$1(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var FunctionPrototype$6 = Function.prototype;
	var apply$1 = FunctionPrototype$6.apply;
	var call$5 = FunctionPrototype$6.call;

	// eslint-disable-next-line es-x/no-reflect -- safe
	var functionApply$1 = typeof Reflect == 'object' && Reflect.apply || (functionBindNative$1 ? call$5.bind(apply$1) : function () {
	  return call$5.apply(apply$1, arguments);
	});

	var FunctionPrototype$5 = Function.prototype;
	var bind$a = FunctionPrototype$5.bind;
	var call$4 = FunctionPrototype$5.call;
	var uncurryThis$1 = functionBindNative$1 && bind$a.bind(call$4, call$4);

	var functionUncurryThis$1 = functionBindNative$1 ? function (fn) {
	  return fn && uncurryThis$1(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$4.apply(fn, arguments);
	  };
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$1 = function (argument) {
	  return typeof argument == 'function';
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors$1 = !fails$1(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call$3 = Function.prototype.call;

	var functionCall$1 = functionBindNative$1 ? call$3.bind(call$3) : function () {
	  return call$3.apply(call$3, arguments);
	};

	var $propertyIsEnumerable$3 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG$1 = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$3.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$3(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$3;

	var objectPropertyIsEnumerable$1 = {
		f: f$f
	};

	var createPropertyDescriptor$1 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$3 = functionUncurryThis$1({}.toString);
	var stringSlice$3 = functionUncurryThis$1(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$3(toString$3(it), 8, -1);
	};

	var $Object$9 = Object;
	var split$1 = functionUncurryThis$1(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject$1 = fails$1(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$9('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw$1(it) == 'String' ? split$1(it, '') : $Object$9(it);
	} : $Object$9;

	var $TypeError$l = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$1 = function (it) {
	  if (it == undefined) throw $TypeError$l("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject$1 = function (it) {
	  return indexedObject$1(requireObjectCoercible$1(it));
	};

	var isObject$1 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$1(it);
	};

	var path$1 = {};

	var aFunction$1 = function (variable) {
	  return isCallable$1(variable) ? variable : undefined;
	};

	var getBuiltIn$1 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path$1[namespace]) || aFunction$1(global_1$1[namespace])
	    : path$1[namespace] && path$1[namespace][method] || global_1$1[namespace] && global_1$1[namespace][method];
	};

	var objectIsPrototypeOf$1 = functionUncurryThis$1({}.isPrototypeOf);

	var engineUserAgent$1 = getBuiltIn$1('navigator', 'userAgent') || '';

	var process$1 = global_1$1.process;
	var Deno$1 = global_1$1.Deno;
	var versions$1 = process$1 && process$1.versions || Deno$1 && Deno$1.version;
	var v8$1 = versions$1 && versions$1.v8;
	var match$1, version$1;

	if (v8$1) {
	  match$1 = v8$1.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && engineUserAgent$1) {
	  match$1 = engineUserAgent$1.match(/Edge\/(\d+)/);
	  if (!match$1 || match$1[1] >= 74) {
	    match$1 = engineUserAgent$1.match(/Chrome\/(\d+)/);
	    if (match$1) version$1 = +match$1[1];
	  }
	}

	var engineV8Version$1 = version$1;

	/* eslint-disable es-x/no-symbol -- required for testing */



	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$1(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version$1 && engineV8Version$1 < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */


	var useSymbolAsUid$1 = nativeSymbol$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var $Object$8 = Object;

	var isSymbol$1 = useSymbolAsUid$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$1('Symbol');
	  return isCallable$1($Symbol) && objectIsPrototypeOf$1($Symbol.prototype, $Object$8(it));
	};

	var $String$7 = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String$7(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var $TypeError$k = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$1 = function (argument) {
	  if (isCallable$1(argument)) return argument;
	  throw $TypeError$k(tryToString$1(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$1(func);
	};

	var $TypeError$j = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$1(fn = input.toString) && !isObject$1(val = functionCall$1(fn, input))) return val;
	  if (isCallable$1(fn = input.valueOf) && !isObject$1(val = functionCall$1(fn, input))) return val;
	  if (pref !== 'string' && isCallable$1(fn = input.toString) && !isObject$1(val = functionCall$1(fn, input))) return val;
	  throw $TypeError$j("Can't convert object to primitive value");
	};

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$8 = Object.defineProperty;

	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$8(global_1$1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1$1[key] = value;
	  } return value;
	};

	var SHARED$1 = '__core-js_shared__';
	var store$3 = global_1$1[SHARED$1] || defineGlobalProperty$1(SHARED$1, {});

	var sharedStore$1 = store$3;

	var shared$1 = createCommonjsModule$1(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore$1[key] || (sharedStore$1[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.24.1',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	});

	var $Object$7 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$1 = function (argument) {
	  return $Object$7(requireObjectCoercible$1(argument));
	};

	var hasOwnProperty$1 = functionUncurryThis$1({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$1(toObject$1(it), key);
	};

	var id$1 = 0;
	var postfix$1 = Math.random();
	var toString$2 = functionUncurryThis$1(1.0.toString);

	var uid$1 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id$1 + postfix$1, 36);
	};

	var WellKnownSymbolsStore$3 = shared$1('wks');
	var Symbol$2 = global_1$1.Symbol;
	var symbolFor$1 = Symbol$2 && Symbol$2['for'];
	var createWellKnownSymbol$1 = useSymbolAsUid$1 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

	var wellKnownSymbol$1 = function (name) {
	  if (!hasOwnProperty_1$1(WellKnownSymbolsStore$3, name) || !(nativeSymbol$1 || typeof WellKnownSymbolsStore$3[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (nativeSymbol$1 && hasOwnProperty_1$1(Symbol$2, name)) {
	      WellKnownSymbolsStore$3[name] = Symbol$2[name];
	    } else if (useSymbolAsUid$1 && symbolFor$1) {
	      WellKnownSymbolsStore$3[name] = symbolFor$1(description);
	    } else {
	      WellKnownSymbolsStore$3[name] = createWellKnownSymbol$1(description);
	    }
	  } return WellKnownSymbolsStore$3[name];
	};

	var $TypeError$i = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$1('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$1(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = functionCall$1(exoticToPrim, input, pref);
	    if (!isObject$1(result) || isSymbol$1(result)) return result;
	    throw $TypeError$i("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$1(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$1 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$1(key) ? key : key + '';
	};

	var document$2 = global_1$1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$3 = isObject$1(document$2) && isObject$1(document$2.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$3 ? document$2.createElement(it) : {};
	};

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine$1 = !descriptors$1 && !fails$1(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(documentCreateElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$e = descriptors$1 ? $getOwnPropertyDescriptor$5 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$1(O);
	  P = toPropertyKey$1(P);
	  if (ie8DomDefine$1) try {
	    return $getOwnPropertyDescriptor$5(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1$1(O, P)) return createPropertyDescriptor$1(!functionCall$1(objectPropertyIsEnumerable$1.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor$1 = {
		f: f$e
	};

	var replacement$1 = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data$1[normalize$1(feature)];
	  return value == POLYFILL$1 ? true
	    : value == NATIVE$1 ? false
	    : isCallable$1(detection) ? fails$1(detection)
	    : !!detection;
	};

	var normalize$1 = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement$1, '.').toLowerCase();
	};

	var data$1 = isForced$1.data = {};
	var NATIVE$1 = isForced$1.NATIVE = 'N';
	var POLYFILL$1 = isForced$1.POLYFILL = 'P';

	var isForced_1$1 = isForced$1;

	var bind$9 = functionUncurryThis$1(functionUncurryThis$1.bind);

	// optional / simple context binding
	var functionBindContext$1 = function (fn, that) {
	  aCallable$1(fn);
	  return that === undefined ? fn : functionBindNative$1 ? bind$9(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug$1 = descriptors$1 && fails$1(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var $String$6 = String;
	var $TypeError$h = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$1 = function (argument) {
	  if (isObject$1(argument)) return argument;
	  throw $TypeError$h($String$6(argument) + ' is not an object');
	};

	var $TypeError$g = TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty$3 = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE$1 = 'enumerable';
	var CONFIGURABLE$3 = 'configurable';
	var WRITABLE$1 = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$d = descriptors$1 ? v8PrototypeDefineBug$1 ? function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
	    var current = $getOwnPropertyDescriptor$4(O, P);
	    if (current && current[WRITABLE$1]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$3 in Attributes ? Attributes[CONFIGURABLE$3] : current[CONFIGURABLE$3],
	        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
	        writable: false
	      };
	    }
	  } return $defineProperty$3(O, P, Attributes);
	} : $defineProperty$3 : function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (ie8DomDefine$1) try {
	    return $defineProperty$3(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$g('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty$1 = {
		f: f$d
	};

	var createNonEnumerableProperty$1 = descriptors$1 ? function (object, key, value) {
	  return objectDefineProperty$1.f(object, key, createPropertyDescriptor$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;






	var wrapConstructor$1 = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return functionApply$1(NativeConstructor, this, arguments);
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
	var _export$1 = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1$1 : STATIC ? global_1$1[TARGET] : (global_1$1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path$1 : path$1[TARGET] || createNonEnumerableProperty$1(path$1, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwnProperty_1$1(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$2(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext$1(sourceProperty, global_1$1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor$1(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable$1(sourceProperty)) resultProperty = functionUncurryThis$1(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$1(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$1(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwnProperty_1$1(path$1, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$1(path$1, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$1(path$1[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$1(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$d = Array.isArray || function isArray(argument) {
	  return classofRaw$1(argument) == 'Array';
	};

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	_export$1({ target: 'Array', stat: true }, {
	  isArray: isArray$d
	});

	var isArray$c = path$1.Array.isArray;

	var isArray$b = isArray$c;

	var isArray$a = isArray$b;

	var isArray$9 = isArray$a;

	var isArray$8 = isArray$9;

	var isArray$7 = isArray$8;

	function _arrayWithHoles$1(arr) {
	  if (isArray$7(arr)) return arr;
	}

	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es-x/no-math-trunc -- safe
	var mathTrunc$1 = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$1 : ceil$1)(n);
	};

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$1 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : mathTrunc$1(number);
	};

	var min$3 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min$3(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$1 = function (obj) {
	  return toLength$1(obj.length);
	};

	var $TypeError$f = TypeError;
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$1 = function (it) {
	  if (it > MAX_SAFE_INTEGER$1) throw $TypeError$f('Maximum allowed index exceeded');
	  return it;
	};

	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) objectDefineProperty$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var TO_STRING_TAG$7 = wellKnownSymbol$1('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$7] = 'z';

	var toStringTagSupport$1 = String(test$1) === '[object z]';

	var TO_STRING_TAG$6 = wellKnownSymbol$1('toStringTag');
	var $Object$6 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS$1 = classofRaw$1(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet$1 = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$1 = toStringTagSupport$1 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet$1(O = $Object$6(it), TO_STRING_TAG$6)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS$1 ? classofRaw$1(O)
	    // ES3 arguments fallback
	    : (result = classofRaw$1(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
	};

	var functionToString$1 = functionUncurryThis$1(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$1(sharedStore$1.inspectSource)) {
	  sharedStore$1.inspectSource = function (it) {
	    return functionToString$1(it);
	  };
	}

	var inspectSource$1 = sharedStore$1.inspectSource;

	var noop$1 = function () { /* empty */ };
	var empty$1 = [];
	var construct$2 = getBuiltIn$1('Reflect', 'construct');
	var constructorRegExp$1 = /^\s*(?:class|function)\b/;
	var exec$3 = functionUncurryThis$1(constructorRegExp$1.exec);
	var INCORRECT_TO_STRING$1 = !constructorRegExp$1.exec(noop$1);

	var isConstructorModern$1 = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  try {
	    construct$2(noop$1, empty$1, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy$1 = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  switch (classof$1(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING$1 || !!exec$3(constructorRegExp$1, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy$1.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$1 = !construct$2 || fails$1(function () {
	  var called;
	  return isConstructorModern$1(isConstructorModern$1.call)
	    || !isConstructorModern$1(Object)
	    || !isConstructorModern$1(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy$1 : isConstructorModern$1;

	var SPECIES$7 = wellKnownSymbol$1('species');
	var $Array$7 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$d(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$1(C) && (C === $Array$7 || isArray$d(C.prototype))) C = undefined;
	    else if (isObject$1(C)) {
	      C = C[SPECIES$7];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$7 : C;
	};

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$1 = function (originalArray, length) {
	  return new (arraySpeciesConstructor$1(originalArray))(length === 0 ? 0 : length);
	};

	var SPECIES$6 = wellKnownSymbol$1('species');

	var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version$1 >= 51 || !fails$1(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$6] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$1('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT$1 = engineV8Version$1 >= 51 || !fails$1(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE$1] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('concat');

	var isConcatSpreadable$1 = function (O) {
	  if (!isObject$1(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE$1];
	  return spreadable !== undefined ? !!spreadable : isArray$d(O);
	};

	var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export$1({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$1(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable$1(E)) {
	        len = lengthOfArrayLike$1(E);
	        doesNotExceedSafeInteger$1(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$1(n + 1);
	        createProperty$1(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var $String$5 = String;

	var toString_1$1 = function (argument) {
	  if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$5(argument);
	};

	var max$5 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max$5(integer + length, 0) : min$2(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$6 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$1($this);
	    var length = lengthOfArrayLike$1(O);
	    var index = toAbsoluteIndex$1(fromIndex, length);
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

	var arrayIncludes$1 = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$6(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$6(false)
	};

	var hiddenKeys$3 = {};

	var indexOf$8 = arrayIncludes$1.indexOf;


	var push$7 = functionUncurryThis$1([].push);

	var objectKeysInternal$1 = function (object, names) {
	  var O = toIndexedObject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1$1(hiddenKeys$3, key) && hasOwnProperty_1$1(O, key) && push$7(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1$1(O, key = names[i++])) {
	    ~indexOf$8(result, key) || push$7(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$1 = [
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
	var objectKeys$1 = Object.keys || function keys(O) {
	  return objectKeysInternal$1(O, enumBugKeys$1);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	var f$c = descriptors$1 && !v8PrototypeDefineBug$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$1(O);
	  var props = toIndexedObject$1(Properties);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty$1.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var objectDefineProperties$1 = {
		f: f$c
	};

	var html$2 = getBuiltIn$1('document', 'documentElement');

	var keys$7 = shared$1('keys');

	var sharedKey$1 = function (key) {
	  return keys$7[key] || (keys$7[key] = uid$1(key));
	};

	/* global ActiveXObject -- old IE, WSH */








	var GT$1 = '>';
	var LT$1 = '<';
	var PROTOTYPE$3 = 'prototype';
	var SCRIPT$1 = 'script';
	var IE_PROTO$3 = sharedKey$1('IE_PROTO');

	var EmptyConstructor$1 = function () { /* empty */ };

	var scriptTag$1 = function (content) {
	  return LT$1 + SCRIPT$1 + GT$1 + content + LT$1 + '/' + SCRIPT$1 + GT$1;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX$1 = function (activeXDocument) {
	  activeXDocument.write(scriptTag$1(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame$1 = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT$1 + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$2.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag$1('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument$1;
	var NullProtoObject$1 = function () {
	  try {
	    activeXDocument$1 = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject$1 = typeof document != 'undefined'
	    ? document.domain && activeXDocument$1
	      ? NullProtoObjectViaActiveX$1(activeXDocument$1) // old IE
	      : NullProtoObjectViaIFrame$1()
	    : NullProtoObjectViaActiveX$1(activeXDocument$1); // WSH
	  var length = enumBugKeys$1.length;
	  while (length--) delete NullProtoObject$1[PROTOTYPE$3][enumBugKeys$1[length]];
	  return NullProtoObject$1();
	};

	hiddenKeys$3[IE_PROTO$3] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe
	var objectCreate$1 = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor$1[PROTOTYPE$3] = anObject$1(O);
	    result = new EmptyConstructor$1();
	    EmptyConstructor$1[PROTOTYPE$3] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$3] = O;
	  } else result = NullProtoObject$1();
	  return Properties === undefined ? result : objectDefineProperties$1.f(result, Properties);
	};

	var hiddenKeys$2 = enumBugKeys$1.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	var f$b = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal$1(O, hiddenKeys$2);
	};

	var objectGetOwnPropertyNames$1 = {
		f: f$b
	};

	var $Array$6 = Array;
	var max$4 = Math.max;

	var arraySliceSimple$1 = function (O, start, end) {
	  var length = lengthOfArrayLike$1(O);
	  var k = toAbsoluteIndex$1(start, length);
	  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	  var result = $Array$6(max$4(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	/* eslint-disable es-x/no-object-getownpropertynames -- safe */


	var $getOwnPropertyNames$3 = objectGetOwnPropertyNames$1.f;


	var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames$1 = function (it) {
	  try {
	    return $getOwnPropertyNames$3(it);
	  } catch (error) {
	    return arraySliceSimple$1(windowNames$1);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$a = function getOwnPropertyNames(it) {
	  return windowNames$1 && classofRaw$1(it) == 'Window'
	    ? getWindowNames$1(it)
	    : $getOwnPropertyNames$3(toIndexedObject$1(it));
	};

	var objectGetOwnPropertyNamesExternal$1 = {
		f: f$a
	};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	var f$9 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols$1 = {
		f: f$9
	};

	var defineBuiltIn$1 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$1(target, key, value);
	  return target;
	};

	var f$8 = wellKnownSymbol$1;

	var wellKnownSymbolWrapped$1 = {
		f: f$8
	};

	var defineProperty$7 = objectDefineProperty$1.f;

	var defineWellKnownSymbol$1 = function (NAME) {
	  var Symbol = path$1.Symbol || (path$1.Symbol = {});
	  if (!hasOwnProperty_1$1(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
	    value: wellKnownSymbolWrapped$1.f(NAME)
	  });
	};

	var symbolDefineToPrimitive$1 = function () {
	  var Symbol = getBuiltIn$1('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$1(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return functionCall$1(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString$1 = toStringTagSupport$1 ? {}.toString : function toString() {
	  return '[object ' + classof$1(this) + ']';
	};

	var defineProperty$6 = objectDefineProperty$1.f;





	var TO_STRING_TAG$5 = wellKnownSymbol$1('toStringTag');

	var setToStringTag$1 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwnProperty_1$1(target, TO_STRING_TAG$5)) {
	      defineProperty$6(target, TO_STRING_TAG$5, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport$1) {
	      createNonEnumerableProperty$1(target, 'toString', objectToString$1);
	    }
	  }
	};

	var WeakMap$3 = global_1$1.WeakMap;

	var nativeWeakMap$1 = isCallable$1(WeakMap$3) && /native code/.test(inspectSource$1(WeakMap$3));

	var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
	var TypeError$4 = global_1$1.TypeError;
	var WeakMap$2 = global_1$1.WeakMap;
	var set$7, get$1, has$1;

	var enforce$1 = function (it) {
	  return has$1(it) ? get$1(it) : set$7(it, {});
	};

	var getterFor$1 = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$1(it) || (state = get$1(it)).type !== TYPE) {
	      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap$1 || sharedStore$1.state) {
	  var store$2 = sharedStore$1.state || (sharedStore$1.state = new WeakMap$2());
	  var wmget$1 = functionUncurryThis$1(store$2.get);
	  var wmhas$1 = functionUncurryThis$1(store$2.has);
	  var wmset$1 = functionUncurryThis$1(store$2.set);
	  set$7 = function (it, metadata) {
	    if (wmhas$1(store$2, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    wmset$1(store$2, it, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return wmget$1(store$2, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas$1(store$2, it);
	  };
	} else {
	  var STATE$1 = sharedKey$1('state');
	  hiddenKeys$3[STATE$1] = true;
	  set$7 = function (it, metadata) {
	    if (hasOwnProperty_1$1(it, STATE$1)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    createNonEnumerableProperty$1(it, STATE$1, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return hasOwnProperty_1$1(it, STATE$1) ? it[STATE$1] : {};
	  };
	  has$1 = function (it) {
	    return hasOwnProperty_1$1(it, STATE$1);
	  };
	}

	var internalState$1 = {
	  set: set$7,
	  get: get$1,
	  has: has$1,
	  enforce: enforce$1,
	  getterFor: getterFor$1
	};

	var push$6 = functionUncurryThis$1([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$5 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$1($this);
	    var self = indexedObject$1(O);
	    var boundFunction = functionBindContext$1(callbackfn, that);
	    var length = lengthOfArrayLike$1(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$1;
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
	          case 2: push$6(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$6(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration$1 = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$5(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$5(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$5(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$5(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$5(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$5(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$5(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$5(7)
	};

	var $forEach$1 = arrayIteration$1.forEach;

	var HIDDEN$1 = sharedKey$1('hidden');
	var SYMBOL$1 = 'Symbol';
	var PROTOTYPE$2 = 'prototype';

	var setInternalState$7 = internalState$1.set;
	var getInternalState$5 = internalState$1.getterFor(SYMBOL$1);

	var ObjectPrototype$3 = Object[PROTOTYPE$2];
	var $Symbol$1 = global_1$1.Symbol;
	var SymbolPrototype$1 = $Symbol$1 && $Symbol$1[PROTOTYPE$2];
	var TypeError$3 = global_1$1.TypeError;
	var QObject$1 = global_1$1.QObject;
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor$1.f;
	var nativeDefineProperty$1 = objectDefineProperty$1.f;
	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal$1.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable$1.f;
	var push$5 = functionUncurryThis$1([].push);

	var AllSymbols$1 = shared$1('symbols');
	var ObjectPrototypeSymbols$1 = shared$1('op-symbols');
	var WellKnownSymbolsStore$2 = shared$1('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER$1 = !QObject$1 || !QObject$1[PROTOTYPE$2] || !QObject$1[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor$1 = descriptors$1 && fails$1(function () {
	  return objectCreate$1(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$3, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
	    nativeDefineProperty$1(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap$1 = function (tag, description) {
	  var symbol = AllSymbols$1[tag] = objectCreate$1(SymbolPrototype$1);
	  setInternalState$7(symbol, {
	    type: SYMBOL$1,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors$1) symbol.description = description;
	  return symbol;
	};

	var $defineProperty$2 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$3) $defineProperty$2(ObjectPrototypeSymbols$1, P, Attributes);
	  anObject$1(O);
	  var key = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (hasOwnProperty_1$1(AllSymbols$1, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwnProperty_1$1(O, HIDDEN$1)) nativeDefineProperty$1(O, HIDDEN$1, createPropertyDescriptor$1(1, {}));
	      O[HIDDEN$1][key] = true;
	    } else {
	      if (hasOwnProperty_1$1(O, HIDDEN$1) && O[HIDDEN$1][key]) O[HIDDEN$1][key] = false;
	      Attributes = objectCreate$1(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
	    } return setSymbolDescriptor$1(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties$1 = function defineProperties(O, Properties) {
	  anObject$1(O);
	  var properties = toIndexedObject$1(Properties);
	  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols$1(properties));
	  $forEach$1(keys, function (key) {
	    if (!descriptors$1 || functionCall$1($propertyIsEnumerable$2, properties, key)) $defineProperty$2(O, key, properties[key]);
	  });
	  return O;
	};

	var $create$1 = function create(O, Properties) {
	  return Properties === undefined ? objectCreate$1(O) : $defineProperties$1(objectCreate$1(O), Properties);
	};

	var $propertyIsEnumerable$2 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$1(V);
	  var enumerable = functionCall$1(nativePropertyIsEnumerable$1, this, P);
	  if (this === ObjectPrototype$3 && hasOwnProperty_1$1(AllSymbols$1, P) && !hasOwnProperty_1$1(ObjectPrototypeSymbols$1, P)) return false;
	  return enumerable || !hasOwnProperty_1$1(this, P) || !hasOwnProperty_1$1(AllSymbols$1, P) || hasOwnProperty_1$1(this, HIDDEN$1) && this[HIDDEN$1][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor$3 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$1(O);
	  var key = toPropertyKey$1(P);
	  if (it === ObjectPrototype$3 && hasOwnProperty_1$1(AllSymbols$1, key) && !hasOwnProperty_1$1(ObjectPrototypeSymbols$1, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && hasOwnProperty_1$1(AllSymbols$1, key) && !(hasOwnProperty_1$1(it, HIDDEN$1) && it[HIDDEN$1][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames$2 = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject$1(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwnProperty_1$1(AllSymbols$1, key) && !hasOwnProperty_1$1(hiddenKeys$3, key)) push$5(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols$1 = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols$1 : toIndexedObject$1(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwnProperty_1$1(AllSymbols$1, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1$1(ObjectPrototype$3, key))) {
	      push$5(result, AllSymbols$1[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!nativeSymbol$1) {
	  $Symbol$1 = function Symbol() {
	    if (objectIsPrototypeOf$1(SymbolPrototype$1, this)) throw TypeError$3('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1$1(arguments[0]);
	    var tag = uid$1(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$3) functionCall$1(setter, ObjectPrototypeSymbols$1, value);
	      if (hasOwnProperty_1$1(this, HIDDEN$1) && hasOwnProperty_1$1(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
	      setSymbolDescriptor$1(this, tag, createPropertyDescriptor$1(1, value));
	    };
	    if (descriptors$1 && USE_SETTER$1) setSymbolDescriptor$1(ObjectPrototype$3, tag, { configurable: true, set: setter });
	    return wrap$1(tag, description);
	  };

	  SymbolPrototype$1 = $Symbol$1[PROTOTYPE$2];

	  defineBuiltIn$1(SymbolPrototype$1, 'toString', function toString() {
	    return getInternalState$5(this).tag;
	  });

	  defineBuiltIn$1($Symbol$1, 'withoutSetter', function (description) {
	    return wrap$1(uid$1(description), description);
	  });

	  objectPropertyIsEnumerable$1.f = $propertyIsEnumerable$2;
	  objectDefineProperty$1.f = $defineProperty$2;
	  objectDefineProperties$1.f = $defineProperties$1;
	  objectGetOwnPropertyDescriptor$1.f = $getOwnPropertyDescriptor$3;
	  objectGetOwnPropertyNames$1.f = objectGetOwnPropertyNamesExternal$1.f = $getOwnPropertyNames$2;
	  objectGetOwnPropertySymbols$1.f = $getOwnPropertySymbols$1;

	  wellKnownSymbolWrapped$1.f = function (name) {
	    return wrap$1(wellKnownSymbol$1(name), name);
	  };

	  if (descriptors$1) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1(SymbolPrototype$1, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$5(this).description;
	      }
	    });
	  }
	}

	_export$1({ global: true, constructor: true, wrap: true, forced: !nativeSymbol$1, sham: !nativeSymbol$1 }, {
	  Symbol: $Symbol$1
	});

	$forEach$1(objectKeys$1(WellKnownSymbolsStore$2), function (name) {
	  defineWellKnownSymbol$1(name);
	});

	_export$1({ target: SYMBOL$1, stat: true, forced: !nativeSymbol$1 }, {
	  useSetter: function () { USE_SETTER$1 = true; },
	  useSimple: function () { USE_SETTER$1 = false; }
	});

	_export$1({ target: 'Object', stat: true, forced: !nativeSymbol$1, sham: !descriptors$1 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create$1,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty$2,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties$1,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$3
	});

	_export$1({ target: 'Object', stat: true, forced: !nativeSymbol$1 }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames$2
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	symbolDefineToPrimitive$1();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$1($Symbol$1, SYMBOL$1);

	hiddenKeys$3[HIDDEN$1] = true;

	/* eslint-disable es-x/no-symbol -- safe */
	var nativeSymbolRegistry$1 = nativeSymbol$1 && !!Symbol['for'] && !!Symbol.keyFor;

	var StringToSymbolRegistry$1 = shared$1('string-to-symbol-registry');
	var SymbolToStringRegistry$3 = shared$1('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	_export$1({ target: 'Symbol', stat: true, forced: !nativeSymbolRegistry$1 }, {
	  'for': function (key) {
	    var string = toString_1$1(key);
	    if (hasOwnProperty_1$1(StringToSymbolRegistry$1, string)) return StringToSymbolRegistry$1[string];
	    var symbol = getBuiltIn$1('Symbol')(string);
	    StringToSymbolRegistry$1[string] = symbol;
	    SymbolToStringRegistry$3[symbol] = string;
	    return symbol;
	  }
	});

	var SymbolToStringRegistry$2 = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	_export$1({ target: 'Symbol', stat: true, forced: !nativeSymbolRegistry$1 }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$1(sym)) throw TypeError(tryToString$1(sym) + ' is not a symbol');
	    if (hasOwnProperty_1$1(SymbolToStringRegistry$2, sym)) return SymbolToStringRegistry$2[sym];
	  }
	});

	var arraySlice$1 = functionUncurryThis$1([].slice);

	var $stringify$1 = getBuiltIn$1('JSON', 'stringify');
	var exec$2 = functionUncurryThis$1(/./.exec);
	var charAt$5 = functionUncurryThis$1(''.charAt);
	var charCodeAt$3 = functionUncurryThis$1(''.charCodeAt);
	var replace$2 = functionUncurryThis$1(''.replace);
	var numberToString$1 = functionUncurryThis$1(1.0.toString);

	var tester$1 = /[\uD800-\uDFFF]/g;
	var low$1 = /^[\uD800-\uDBFF]$/;
	var hi$1 = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION$1 = !nativeSymbol$1 || fails$1(function () {
	  var symbol = getBuiltIn$1('Symbol')();
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify$1([symbol]) != '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify$1({ a: symbol }) != '{}'
	    // V8 throws on boxed symbols
	    || $stringify$1(Object(symbol)) != '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE$1 = fails$1(function () {
	  return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify$1('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix$1 = function (it, replacer) {
	  var args = arraySlice$1(arguments);
	  var $replacer = replacer;
	  if (!isObject$1(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined
	  if (!isArray$d(replacer)) replacer = function (key, value) {
	    if (isCallable$1($replacer)) value = functionCall$1($replacer, this, key, value);
	    if (!isSymbol$1(value)) return value;
	  };
	  args[1] = replacer;
	  return functionApply$1($stringify$1, null, args);
	};

	var fixIllFormed$1 = function (match, offset, string) {
	  var prev = charAt$5(string, offset - 1);
	  var next = charAt$5(string, offset + 1);
	  if ((exec$2(low$1, match) && !exec$2(hi$1, next)) || (exec$2(hi$1, match) && !exec$2(low$1, prev))) {
	    return '\\u' + numberToString$1(charCodeAt$3(match, 0), 16);
	  } return match;
	};

	if ($stringify$1) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  _export$1({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION$1 || ILL_FORMED_UNICODE$1 }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$1(arguments);
	      var result = functionApply$1(WRONG_SYMBOLS_CONVERSION$1 ? stringifyWithSymbolsFix$1 : $stringify$1, null, args);
	      return ILL_FORMED_UNICODE$1 && typeof result == 'string' ? replace$2(result, tester$1, fixIllFormed$1) : result;
	    }
	  });
	}

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$2 = !nativeSymbol$1 || fails$1(function () { objectGetOwnPropertySymbols$1.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	_export$1({ target: 'Object', stat: true, forced: FORCED$2 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$1(it)) : [];
	  }
	});

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$1('asyncIterator');

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol$1('hasInstance');

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol$1('isConcatSpreadable');

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$1('iterator');

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol$1('match');

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol$1('matchAll');

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol$1('replace');

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol$1('search');

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol$1('species');

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol$1('split');

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$1('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	symbolDefineToPrimitive$1();

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$1('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$1(getBuiltIn$1('Symbol'), 'Symbol');

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$1('unscopables');

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$1(global_1$1.JSON, 'JSON', true);

	var symbol$b = path$1.Symbol;

	var iterators$1 = {};

	var FunctionPrototype$4 = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor$1 = descriptors$1 && Object.getOwnPropertyDescriptor;

	var EXISTS$2 = hasOwnProperty_1$1(FunctionPrototype$4, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER$1 = EXISTS$2 && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE$2 = EXISTS$2 && (!descriptors$1 || (descriptors$1 && getDescriptor$1(FunctionPrototype$4, 'name').configurable));

	var functionName$1 = {
	  EXISTS: EXISTS$2,
	  PROPER: PROPER$1,
	  CONFIGURABLE: CONFIGURABLE$2
	};

	var correctPrototypeGetter$1 = !fails$1(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$2 = sharedKey$1('IE_PROTO');
	var $Object$5 = Object;
	var ObjectPrototype$2 = $Object$5.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
	var objectGetPrototypeOf$1 = correctPrototypeGetter$1 ? $Object$5.getPrototypeOf : function (O) {
	  var object = toObject$1(O);
	  if (hasOwnProperty_1$1(object, IE_PROTO$2)) return object[IE_PROTO$2];
	  var constructor = object.constructor;
	  if (isCallable$1(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$5 ? ObjectPrototype$2 : null;
	};

	var ITERATOR$9 = wellKnownSymbol$1('iterator');
	var BUGGY_SAFARI_ITERATORS$3 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$3, PrototypeOfArrayIteratorPrototype$1, arrayIterator$1;

	/* eslint-disable es-x/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator$1 = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator$1)) BUGGY_SAFARI_ITERATORS$3 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype$1 = objectGetPrototypeOf$1(objectGetPrototypeOf$1(arrayIterator$1));
	    if (PrototypeOfArrayIteratorPrototype$1 !== Object.prototype) IteratorPrototype$3 = PrototypeOfArrayIteratorPrototype$1;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE$1 = IteratorPrototype$3 == undefined || fails$1(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$3[ITERATOR$9].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE$1) IteratorPrototype$3 = {};
	else IteratorPrototype$3 = objectCreate$1(IteratorPrototype$3);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$1(IteratorPrototype$3[ITERATOR$9])) {
	  defineBuiltIn$1(IteratorPrototype$3, ITERATOR$9, function () {
	    return this;
	  });
	}

	var iteratorsCore$1 = {
	  IteratorPrototype: IteratorPrototype$3,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$3
	};

	var IteratorPrototype$2 = iteratorsCore$1.IteratorPrototype;





	var returnThis$3 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate$1(IteratorPrototype$2, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators$1[TO_STRING_TAG] = returnThis$3;
	  return IteratorConstructor;
	};

	var $String$4 = String;
	var $TypeError$e = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
	  throw $TypeError$e("Can't set " + $String$4(argument) + ' as a prototype');
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
	    setter = functionUncurryThis$1(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$1(O);
	    aPossiblePrototype$1(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var PROPER_FUNCTION_NAME$2 = functionName$1.PROPER;
	var BUGGY_SAFARI_ITERATORS$2 = iteratorsCore$1.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$8 = wellKnownSymbol$1('iterator');
	var KEYS$1 = 'keys';
	var VALUES$1 = 'values';
	var ENTRIES$1 = 'entries';

	var returnThis$2 = function () { return this; };

	var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor$1(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$2 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS$1: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES$1: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES$1: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$8]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$2 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf$1(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators$1[TO_STRING_TAG] = returnThis$2;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES$1 && nativeIterator && nativeIterator.name !== VALUES$1) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return functionCall$1(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES$1),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS$1),
	      entries: getIterationMethod(ENTRIES$1)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export$1({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$8] !== defaultIterator) {
	    defineBuiltIn$1(IterablePrototype, ITERATOR$8, defaultIterator, { name: DEFAULT });
	  }
	  iterators$1[NAME] = defaultIterator;

	  return methods;
	};

	objectDefineProperty$1.f;




	var ARRAY_ITERATOR$1 = 'Array Iterator';
	var setInternalState$6 = internalState$1.set;
	var getInternalState$4 = internalState$1.getterFor(ARRAY_ITERATOR$1);

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
	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$6(this, {
	    type: ARRAY_ITERATOR$1,
	    target: toIndexedObject$1(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$4(this);
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
	iterators$1.Arguments = iterators$1.Array;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables$1 = {
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

	var TO_STRING_TAG$4 = wellKnownSymbol$1('toStringTag');

	for (var COLLECTION_NAME$1 in domIterables$1) {
	  var Collection$1 = global_1$1[COLLECTION_NAME$1];
	  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
	  if (CollectionPrototype$1 && classof$1(CollectionPrototype$1) !== TO_STRING_TAG$4) {
	    createNonEnumerableProperty$1(CollectionPrototype$1, TO_STRING_TAG$4, COLLECTION_NAME$1);
	  }
	  iterators$1[COLLECTION_NAME$1] = iterators$1.Array;
	}

	var symbol$a = symbol$b;

	var symbol$9 = symbol$a;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol$1('asyncDispose');

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol$1('dispose');

	// `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('matcher');

	// `Symbol.metadataKey` well-known symbol
	// https://github.com/tc39/proposal-decorator-metadata
	defineWellKnownSymbol$1('metadataKey');

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol$1('observable');

	// TODO: Remove from `core-js@4`


	// `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators
	defineWellKnownSymbol$1('metadata');

	// TODO: remove from `core-js@4`


	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`


	defineWellKnownSymbol$1('replaceAll');

	// TODO: Remove from `core-js@4`




	var symbol$8 = symbol$9;

	var symbol$7 = symbol$8;

	var symbol$6 = symbol$7;

	var charAt$4 = functionUncurryThis$1(''.charAt);
	var charCodeAt$2 = functionUncurryThis$1(''.charCodeAt);
	var stringSlice$2 = functionUncurryThis$1(''.slice);

	var createMethod$4 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString_1$1(requireObjectCoercible$1($this));
	    var position = toIntegerOrInfinity$1(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$2(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$2(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$4(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$2(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte$1 = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$4(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$4(true)
	};

	var charAt$3 = stringMultibyte$1.charAt;




	var STRING_ITERATOR$1 = 'String Iterator';
	var setInternalState$5 = internalState$1.set;
	var getInternalState$3 = internalState$1.getterFor(STRING_ITERATOR$1);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$5(this, {
	    type: STRING_ITERATOR$1,
	    string: toString_1$1(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$3(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt$3(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var ITERATOR$7 = wellKnownSymbol$1('iterator');

	var getIteratorMethod$b = function (it) {
	  if (it != undefined) return getMethod$1(it, ITERATOR$7)
	    || getMethod$1(it, '@@iterator')
	    || iterators$1[classof$1(it)];
	};

	var getIteratorMethod_1$1 = getIteratorMethod$b;

	var getIteratorMethod$a = getIteratorMethod_1$1;

	var getIteratorMethod$9 = getIteratorMethod$a;

	var getIteratorMethod$8 = getIteratorMethod$9;

	var getIteratorMethod$7 = getIteratorMethod$8;

	var getIteratorMethod$6 = getIteratorMethod$7;

	function _iterableToArrayLimit$1(arr, i) {
	  var _i = arr == null ? null : typeof symbol$6 !== "undefined" && getIteratorMethod$6(arr) || arr["@@iterator"];

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

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

	var SPECIES$5 = wellKnownSymbol$1('species');
	var $Array$5 = Array;
	var max$3 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$1(this);
	    var length = lengthOfArrayLike$1(O);
	    var k = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$d(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$1(Constructor) && (Constructor === $Array$5 || isArray$d(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$1(Constructor)) {
	        Constructor = Constructor[SPECIES$5];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$5 || Constructor === undefined) {
	        return arraySlice$1(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$5 : Constructor)(max$3(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$1 = function (CONSTRUCTOR) {
	  return path$1[CONSTRUCTOR + 'Prototype'];
	};

	var slice$d = entryVirtual$1('Array').slice;

	var ArrayPrototype$5 = Array.prototype;

	var slice$c = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$5 || (objectIsPrototypeOf$1(ArrayPrototype$5, it) && own === ArrayPrototype$5.slice) ? slice$d : own;
	};

	var slice$b = slice$c;

	var slice$a = slice$b;

	var slice$9 = slice$a;

	var slice$8 = slice$9;

	var slice$7 = slice$8;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$1(iterator);
	  try {
	    innerResult = getMethod$1(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = functionCall$1(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$1(innerResult);
	  return value;
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$1(iterator, 'throw', error);
	  }
	};

	var ITERATOR$6 = wellKnownSymbol$1('iterator');
	var ArrayPrototype$4 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (iterators$1.Array === it || ArrayPrototype$4[ITERATOR$6] === it);
	};

	var $TypeError$d = TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$b(argument) : usingIterator;
	  if (aCallable$1(iteratorMethod)) return anObject$1(functionCall$1(iteratorMethod, argument));
	  throw $TypeError$d(tryToString$1(argument) + ' is not iterable');
	};

	var $Array$4 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$1(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor$1(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = functionBindContext$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod$b(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$4 && isArrayIteratorMethod$1(iteratorMethod))) {
	    iterator = getIterator$1(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = functionCall$1(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing$1(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$1(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$1(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$4(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$1(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var ITERATOR$5 = wellKnownSymbol$1('iterator');
	var SAFE_CLOSING$1 = false;

	try {
	  var called$1 = 0;
	  var iteratorWithReturn$1 = {
	    next: function () {
	      return { done: !!called$1++ };
	    },
	    'return': function () {
	      SAFE_CLOSING$1 = true;
	    }
	  };
	  iteratorWithReturn$1[ITERATOR$5] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn$1, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING$1) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$5] = function () {
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

	var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$1(function (iterable) {
	  // eslint-disable-next-line es-x/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	_export$1({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$1 }, {
	  from: arrayFrom$1
	});

	var from_1$b = path$1.Array.from;

	var from_1$a = from_1$b;

	var from_1$9 = from_1$a;

	var from_1$8 = from_1$9;

	var from_1$7 = from_1$8;

	var from_1$6 = from_1$7;

	function _arrayLikeToArray$1(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray$1(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);

	  var n = slice$7(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from_1$6(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
	}

	function _nonIterableRest$1() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray$1(arr, i) {
	  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
	}

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

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
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

	var FunctionPrototype$3 = Function.prototype;
	var apply = FunctionPrototype$3.apply;
	var call$2 = FunctionPrototype$3.call;

	// eslint-disable-next-line es-x/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call$2.bind(apply) : function () {
	  return call$2.apply(apply, arguments);
	});

	var FunctionPrototype$2 = Function.prototype;
	var bind$8 = FunctionPrototype$2.bind;
	var call$1 = FunctionPrototype$2.call;
	var uncurryThis = functionBindNative && bind$8.bind(call$1, call$1);

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

	var $TypeError$c = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw $TypeError$c("Can't call method on " + it);
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

	var $TypeError$b = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw $TypeError$b(tryToString(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var $TypeError$a = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  throw $TypeError$a("Can't convert object to primitive value");
	};

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$5 = Object.defineProperty;

	var defineGlobalProperty = function (key, value) {
	  try {
	    defineProperty$5(global_1, key, { value: value, configurable: true, writable: true });
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

	var $TypeError$9 = TypeError;
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
	    throw $TypeError$9("Can't convert object to primitive value");
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

	var bind$7 = functionUncurryThis(functionUncurryThis.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : functionBindNative ? bind$7(fn, that) : function (/* ...args */) {
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
	var $TypeError$8 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw $TypeError$8($String$2(argument) + ' is not an object');
	};

	var $TypeError$7 = TypeError;
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
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
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

	var max$2 = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$1(integer, length);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$3 = function (IS_INCLUDES) {
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
	  includes: createMethod$3(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$3(false)
	};

	var hiddenKeys$1 = {};

	var indexOf$7 = arrayIncludes.indexOf;


	var push$4 = functionUncurryThis([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$4(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
	    ~indexOf$7(result, key) || push$4(result, key);
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

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// eslint-disable-next-line es-x/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	var defineProperty$4 = Object.defineProperty;
	var concat$8 = functionUncurryThis([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$4(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es-x/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$8(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es-x/no-object-assign -- required for testing
	_export({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	var assign$5 = path.Object.assign;

	var assign$4 = assign$5;

	var assign$3 = assign$4;

	var assign$2 = assign$3;

	var assign$1 = assign$2;

	var assign = assign$1;

	var arraySlice = functionUncurryThis([].slice);

	var $Function = Function;
	var concat$7 = functionUncurryThis([].concat);
	var join = functionUncurryThis([].join);
	var factories = {};

	var construct$1 = function (C, argsLength, args) {
	  if (!hasOwnProperty_1(factories, argsLength)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	var functionBind = functionBindNative ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat$7(partArgs, arraySlice(arguments));
	    return this instanceof boundFunction ? construct$1(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	// TODO: Remove from `core-js@4`



	// `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	_export({ target: 'Function', proto: true, forced: Function.bind !== functionBind }, {
	  bind: functionBind
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var bind$6 = entryVirtual('Function').bind;

	var FunctionPrototype$1 = Function.prototype;

	var bind$5 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype$1 || (objectIsPrototypeOf(FunctionPrototype$1, it) && own === FunctionPrototype$1.bind) ? bind$6 : own;
	};

	var bind$4 = bind$5;

	var bind$3 = bind$4;

	var bind$2 = bind$3;

	var bind$1 = bind$2;

	var bind = bind$1;

	function _extends() {
	  var _context;

	  _extends = assign ? bind(_context = assign).call(_context) : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

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

	var $String$1 = String;

	var toString_1 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	var f$3 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
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
		f: f$3
	};

	var html$1 = getBuiltIn('document', 'documentElement');

	var keys$6 = shared('keys');

	var sharedKey = function (key) {
	  return keys$6[key] || (keys$6[key] = uid(key));
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
	var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$2
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var $Array$3 = Array;
	var max$1 = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = $Array$3(max$1(fin - k, 0));
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
	var f$1 = function getOwnPropertyNames(it) {
	  return windowNames && classofRaw(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
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

	var defineProperty$3 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!hasOwnProperty_1(Symbol, NAME)) defineProperty$3(Symbol, NAME, {
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

	var defineProperty$2 = objectDefineProperty.f;





	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwnProperty_1(target, TO_STRING_TAG$1)) {
	      defineProperty$2(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var functionToString = functionUncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(sharedStore.inspectSource)) {
	  sharedStore.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$2 = global_1.TypeError;
	var WeakMap = global_1.WeakMap;
	var set$6, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set$6(it, {});
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
	  set$6 = function (it, metadata) {
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
	  set$6 = function (it, metadata) {
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
	  set: set$6,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$6 = Array.isArray || function isArray(argument) {
	  return classofRaw(argument) == 'Array';
	};

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

	var SPECIES$4 = wellKnownSymbol('species');
	var $Array$2 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor = function (originalArray) {
	  var C;
	  if (isArray$6(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array$2 || isArray$6(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES$4];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$2 : C;
	};

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var push$3 = functionUncurryThis([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$2 = function (TYPE) {
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
	          case 2: push$3(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$3(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$2(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$2(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$2(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$2(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$2(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$2(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$2(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$2(7)
	};

	var $forEach = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';

	var setInternalState$4 = internalState.set;
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
	var push$2 = functionUncurryThis([].push);

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
	  setInternalState$4(symbol, {
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
	    if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys$1, key)) push$2(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype$1, key))) {
	      push$2(result, AllSymbols[key]);
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

	var $stringify = getBuiltIn('JSON', 'stringify');
	var exec = functionUncurryThis(/./.exec);
	var charAt$2 = functionUncurryThis(''.charAt);
	var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
	var replace$1 = functionUncurryThis(''.replace);
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
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$1 = !nativeSymbol || fails(function () { objectGetOwnPropertySymbols.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	_export({ target: 'Object', stat: true, forced: FORCED$1 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
	  }
	});

	var getOwnPropertySymbols$5 = path.Object.getOwnPropertySymbols;

	var getOwnPropertySymbols$4 = getOwnPropertySymbols$5;

	var getOwnPropertySymbols$3 = getOwnPropertySymbols$4;

	var getOwnPropertySymbols$2 = getOwnPropertySymbols$3;

	var getOwnPropertySymbols$1 = getOwnPropertySymbols$2;

	var getOwnPropertySymbols = getOwnPropertySymbols$1;

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */


	var $IndexOf = arrayIncludes.indexOf;


	var un$IndexOf = functionUncurryThis([].indexOf);

	var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? un$IndexOf(this, searchElement, fromIndex) || 0
	      : $IndexOf(this, searchElement, fromIndex);
	  }
	});

	var indexOf$6 = entryVirtual('Array').indexOf;

	var ArrayPrototype$3 = Array.prototype;

	var indexOf$5 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$3 || (objectIsPrototypeOf(ArrayPrototype$3, it) && own === ArrayPrototype$3.indexOf) ? indexOf$6 : own;
	};

	var indexOf$4 = indexOf$5;

	var indexOf$3 = indexOf$4;

	var indexOf$2 = indexOf$3;

	var indexOf$1 = indexOf$2;

	var indexOf = indexOf$1;

	var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var keys$5 = path.Object.keys;

	var keys$4 = keys$5;

	var keys$3 = keys$4;

	var keys$2 = keys$3;

	var keys$1 = keys$2;

	var keys = keys$1;

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};

	  var sourceKeys = keys(source);

	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (indexOf(excluded).call(excluded, key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (getOwnPropertySymbols) {
	    var sourceSymbolKeys = getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (indexOf(excluded).call(excluded, key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var $TypeError$6 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$6('Maximum allowed index exceeded');
	  return it;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$3] = function () {
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

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
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

	var concat$6 = entryVirtual('Array').concat;

	var ArrayPrototype$2 = Array.prototype;

	var concat$5 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$2 || (objectIsPrototypeOf(ArrayPrototype$2, it) && own === ArrayPrototype$2.concat) ? concat$6 : own;
	};

	var concat$4 = concat$5;

	var concat$3 = concat$4;

	var concat$2 = concat$3;

	var concat$1 = concat$2;

	var concat = concat$1;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

	var SPECIES$2 = wellKnownSymbol('species');
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
	        Constructor = Constructor[SPECIES$2];
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

	// empty

	var es_object_toString = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol('asyncIterator');

	// empty

	var es_symbol_description = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

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

	// empty

	var es_math_toStringTag = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	// empty

	var es_reflect_toStringTag = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	getCjsExportFromNamespace(es_object_toString);

	getCjsExportFromNamespace(es_symbol_description);

	getCjsExportFromNamespace(es_math_toStringTag);

	getCjsExportFromNamespace(es_reflect_toStringTag);

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
	var $TypeError$5 = TypeError;

	var aPossiblePrototype = function (argument) {
	  if (typeof argument == 'object' || isCallable(argument)) return argument;
	  throw $TypeError$5("Can't set " + $String(argument) + ' as a prototype');
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

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
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
	  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
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
	var setInternalState$3 = internalState.set;
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
	  setInternalState$3(this, {
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

	var createMethod$1 = function (CONVERT_TO_STRING) {
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
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	var charAt = stringMultibyte.charAt;




	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = internalState.set;
	var getInternalState = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$2(this, {
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

	var $TypeError$4 = TypeError;

	var getIterator = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$5(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
	  throw $TypeError$4(tryToString(argument) + ' is not iterable');
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
	  var _useState = React.useState('none'),
	      _useState2 = _slicedToArray(_useState, 2),
	      screenMaxHeight = _useState2[0],
	      setScreenMaxHeight = _useState2[1];

	  React.useLayoutEffect(function () {
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
	  var _useState3 = React.useState(function () {
	    return renderContent();
	  }),
	      _useState4 = _slicedToArray(_useState3, 2),
	      screenContent = _useState4[0],
	      setScreenContent = _useState4[1];

	  React.useLayoutEffect(function () {
	    if (!contentLength || internalExpanded) {
	      setScreenContent(renderContent());
	    } else if (offset !== contentLength) {
	      setScreenContent(renderClampedContent(offset, ellipsis));
	    }
	  }, [content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded]);
	  return screenContent;
	}

	function useSetExpand(expanded) {
	  var _useState5 = React.useState(expanded),
	      _useState6 = _slicedToArray(_useState5, 2),
	      internalExpanded = _useState6[0],
	      setInternalExpanded = _useState6[1];

	  React.useEffect(function () {
	    setInternalExpanded(expanded);
	  }, [expanded]);
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
	      _useState8 = _slicedToArray(_useState7, 2),
	      offset = _useState8[0],
	      setOffset = _useState8[1];

	  var _useState9 = React.useState(RENDER_STATE.DONE),
	      _useState10 = _slicedToArray(_useState9, 2),
	      renderState = _useState10[0],
	      setRenderState = _useState10[1];

	  var _useState11 = React.useState(RENDER_LOCATE_STATE.DONE),
	      _useState12 = _slicedToArray(_useState11, 2),
	      renderLocateState = _useState12[0],
	      setRenderLocateState = _useState12[1];

	  var _useState13 = React.useState(RENDER_FILL_STATE.DONE),
	      _useState14 = _slicedToArray(_useState13, 2),
	      renderFillState = _useState14[0],
	      setRenderFillState = _useState14[1];

	  var _useState15 = React.useState(true),
	      _useState16 = _slicedToArray(_useState15, 2),
	      needLocationAdd = _useState16[0],
	      setNeedLocationAdd = _useState16[1];

	  var internalExpanded = useSetExpand(expanded);
	  var screenContent = useScreenContent(content, renderContent, renderClampedContent, offset, contentLength, ellipsis, internalExpanded);
	  var screenMaxHeight = useScreenMaxHeight(internalExpanded, maxHeight);
	  /** start rendering * */

	  React.useLayoutEffect(function () {
	    if (!internalExpanded && isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) && renderState === RENDER_STATE.DONE) {
	      setRenderState(RENDER_STATE.START);
	    }
	  }, [maxLines, maxHeight, ellipsis, internalExpanded, renderState, screenMaxHeight]);
	  /** start locating * */

	  React.useLayoutEffect(function () {
	    if (renderState === RENDER_STATE.START) {
	      setRenderLocateState(RENDER_LOCATE_STATE.START);
	    }
	  }, [renderState, contentLength]);
	  /** locating process，find the locate position before clamp position as soon as posible * */

	  React.useLayoutEffect(function () {
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
	      } else if (needLocationAdd && (screenMaxHeight !== 'none' && screenHeightHasSpace || maxLines && contentLines < maxLines)) {
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
	  }, [renderLocateState, maxLines, contentRef, screenMaxHeight, screenContent, needLocationAdd]);
	  /** filling process, fill the gap between locate position and clamp position * */

	  React.useLayoutEffect(function () {
	    var contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;

	    if (renderFillState === RENDER_FILL_STATE.ASCEND) {
	      if ((!isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) || contentLines < 2) && offset < contentLength) {
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

	var _excluded$1 = ["content", "renderAfter"];
	var defaultProps$1 = {
	  autoresize: false,
	  ellipsis: '',
	  expanded: false,
	  className: ''
	};

	var ClampText = function ClampText(properties) {
	  var _properties$content = properties.content,
	      content = _properties$content === void 0 ? '' : _properties$content,
	      _properties$renderAft = properties.renderAfter,
	      renderAfter = _properties$renderAft === void 0 ? function () {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null);
	  } : _properties$renderAft,
	      restProps = _objectWithoutProperties(properties, _excluded$1);

	  var renderClampedContent = function renderClampedContent(offset, ellipsis) {
	    var _context;

	    return /*#__PURE__*/React__default["default"].createElement("span", null, concat(_context = "".concat(slice(content).call(content, 0, offset))).call(_context, ellipsis), renderAfter(true));
	  };

	  var renderContent = function renderContent() {
	    return /*#__PURE__*/React__default["default"].createElement("span", null, content, renderAfter(false));
	  };

	  return /*#__PURE__*/React__default["default"].createElement(ReactSimpleClamp, _extends({
	    content: content,
	    renderContent: renderContent,
	    renderClampedContent: renderClampedContent
	  }, restProps));
	};

	ClampText.defaultProps = defaultProps$1;

	// a string of all valid unicode whitespaces
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var replace = functionUncurryThis(''.replace);
	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod = function (TYPE) {
	  return function ($this) {
	    var string = toString_1(requireObjectCoercible($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod(3)
	};

	var PROPER_FUNCTION_NAME = functionName.PROPER;



	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $trim = stringTrim.trim;


	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	_export({ target: 'String', proto: true, forced: stringTrimForced('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var trim$7 = entryVirtual('String').trim;

	var StringPrototype = String.prototype;

	var trim$6 = function (it) {
	  var own = it.trim;
	  return typeof it == 'string' || it === StringPrototype
	    || (objectIsPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? trim$7 : own;
	};

	var trim$5 = trim$6;

	var trim$4 = trim$5;

	var trim$3 = trim$4;

	var trim$2 = trim$3;

	var trim$1 = trim$2;

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it


	var arrayBufferNonExtensible = fails(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	// eslint-disable-next-line es-x/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = (FAILS_ON_PRIMITIVES || arrayBufferNonExtensible) ? function isExtensible(it) {
	  if (!isObject(it)) return false;
	  if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var freezing = !fails(function () {
	  // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = createCommonjsModule(function (module) {
	var defineProperty = objectDefineProperty.f;






	var REQUIRED = false;
	var METADATA = uid('meta');
	var id = 0;

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + id++, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwnProperty_1(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!objectIsExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!hasOwnProperty_1(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!objectIsExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (freezing && REQUIRED && objectIsExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () { /* empty */ };
	  REQUIRED = true;
	  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	  var splice = functionUncurryThis([].splice);
	  var test = {};
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    objectGetOwnPropertyNames.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };

	    _export({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
	    });
	  }
	};

	var meta = module.exports = {
	  enable: enable,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys$1[METADATA] = true;
	});

	var $TypeError$3 = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = functionBindContext(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$5(iterable);
	    if (!iterFn) throw $TypeError$3(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = functionCall(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var $TypeError$2 = TypeError;

	var anInstance = function (it, Prototype) {
	  if (objectIsPrototypeOf(Prototype, it)) return it;
	  throw $TypeError$2('Incorrect invocation');
	};

	var defineProperty$1 = objectDefineProperty.f;
	var forEach = arrayIteration.forEach;



	var setInternalState$1 = internalState.set;
	var internalStateGetterFor$1 = internalState.getterFor;

	var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;

	  if (!descriptors || !isCallable(NativeConstructor)
	    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
	  ) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    internalMetadata.enable();
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$1(anInstance(target, Prototype), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });

	    IS_WEAK || defineProperty$1(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }

	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  _export({ global: true, forced: true }, exported);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var defineBuiltIns = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else defineBuiltIn(target, key, src[key], options);
	  } return target;
	};

	var SPECIES$1 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$1]) {
	    defineProperty(Constructor, SPECIES$1, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var defineProperty = objectDefineProperty.f;








	var fastKey = internalMetadata.fastKey;


	var setInternalState = internalState.set;
	var internalStateGetterFor = internalState.getterFor;

	var collectionStrong = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance(that, Prototype);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: objectCreate(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!descriptors) that.size = 0;
	      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (descriptors) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    defineBuiltIns(Prototype, {
	      // `{ Map, Set }.prototype.clear()` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.clear
	      // https://tc39.es/ecma262/#sec-set.prototype.clear
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (descriptors) state.size = 0;
	        else that.size = 0;
	      },
	      // `{ Map, Set }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.delete
	      // https://tc39.es/ecma262/#sec-set.prototype.delete
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (descriptors) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // `{ Map, Set}.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.has
	      // https://tc39.es/ecma262/#sec-set.prototype.has
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    defineBuiltIns(Prototype, IS_MAP ? {
	      // `Map.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.get
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // `Map.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.set
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // `Set.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-set.prototype.add
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (descriptors) defineProperty(Prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
	    // https://tc39.es/ecma262/#sec-map.prototype.entries
	    // https://tc39.es/ecma262/#sec-map.prototype.keys
	    // https://tc39.es/ecma262/#sec-map.prototype.values
	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
	    // https://tc39.es/ecma262/#sec-set.prototype.entries
	    // https://tc39.es/ecma262/#sec-set.prototype.keys
	    // https://tc39.es/ecma262/#sec-set.prototype.values
	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
	    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return { value: undefined, done: true };
	      }
	      // return step by kind
	      if (kind == 'keys') return { value: entry.key, done: false };
	      if (kind == 'values') return { value: entry.value, done: false };
	      return { value: [entry.key, entry.value], done: false };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // `{ Map, Set }.prototype[@@species]` accessors
	    // https://tc39.es/ecma262/#sec-get-map-@@species
	    // https://tc39.es/ecma262/#sec-get-set-@@species
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	// `Set` constructor
	// https://tc39.es/ecma262/#sec-set-objects
	collection('Set', function (init) {
	  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var set$5 = path.Set;

	var set$4 = set$5;

	var set$3 = set$4;

	var $TypeError$1 = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw $TypeError$1(tryToString(argument) + ' is not a constructor');
	};

	// https://tc39.github.io/proposal-setmap-offrom/






	var push$1 = [].push;

	var collectionFrom = function from(source /* , mapFn, thisArg */) {
	  var length = arguments.length;
	  var mapFn = length > 1 ? arguments[1] : undefined;
	  var mapping, array, n, boundFunction;
	  aConstructor(this);
	  mapping = mapFn !== undefined;
	  if (mapping) aCallable(mapFn);
	  if (source == undefined) return new this();
	  array = [];
	  if (mapping) {
	    n = 0;
	    boundFunction = functionBindContext(mapFn, length > 2 ? arguments[2] : undefined);
	    iterate(source, function (nextItem) {
	      functionCall(push$1, array, boundFunction(nextItem, n++));
	    });
	  } else {
	    iterate(source, push$1, { that: array });
	  }
	  return new this(array);
	};

	// `Set.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	_export({ target: 'Set', stat: true, forced: true }, {
	  from: collectionFrom
	});

	// https://tc39.github.io/proposal-setmap-offrom/
	var collectionOf = function of() {
	  return new this(arraySlice(arguments));
	};

	// `Set.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	_export({ target: 'Set', stat: true, forced: true }, {
	  of: collectionOf
	});

	// https://github.com/tc39/collection-methods
	var collectionAddAll = function addAll(/* ...elements */) {
	  var set = anObject(this);
	  var adder = aCallable(set.add);
	  for (var k = 0, len = arguments.length; k < len; k++) {
	    functionCall(adder, set, arguments[k]);
	  }
	  return set;
	};

	// `Set.prototype.addAll` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  addAll: collectionAddAll
	});

	// https://github.com/tc39/collection-methods
	var collectionDeleteAll = function deleteAll(/* ...elements */) {
	  var collection = anObject(this);
	  var remover = aCallable(collection['delete']);
	  var allDeleted = true;
	  var wasDeleted;
	  for (var k = 0, len = arguments.length; k < len; k++) {
	    wasDeleted = functionCall(remover, collection, arguments[k]);
	    allDeleted = allDeleted && wasDeleted;
	  }
	  return !!allDeleted;
	};

	// `Set.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  deleteAll: collectionDeleteAll
	});

	var getSetIterator = getIterator;

	// `Set.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  every: function every(callbackfn /* , thisArg */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return !iterate(iterator, function (value, stop) {
	      if (!boundFunction(value, value, set)) return stop();
	    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
	  }
	});

	var SPECIES = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
	};

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  difference: function difference(iterable) {
	    var set = anObject(this);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
	    var remover = aCallable(newSet['delete']);
	    iterate(iterable, function (value) {
	      functionCall(remover, newSet, value);
	    });
	    return newSet;
	  }
	});

	// `Set.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
	    var adder = aCallable(newSet.add);
	    iterate(iterator, function (value) {
	      if (boundFunction(value, value, set)) functionCall(adder, newSet, value);
	    }, { IS_ITERATOR: true });
	    return newSet;
	  }
	});

	// `Set.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  find: function find(callbackfn /* , thisArg */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(iterator, function (value, stop) {
	      if (boundFunction(value, value, set)) return stop(value);
	    }, { IS_ITERATOR: true, INTERRUPTED: true }).result;
	  }
	});

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  intersection: function intersection(iterable) {
	    var set = anObject(this);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
	    var hasCheck = aCallable(set.has);
	    var adder = aCallable(newSet.add);
	    iterate(iterable, function (value) {
	      if (functionCall(hasCheck, set, value)) functionCall(adder, newSet, value);
	    });
	    return newSet;
	  }
	});

	// `Set.prototype.isDisjointFrom` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  isDisjointFrom: function isDisjointFrom(iterable) {
	    var set = anObject(this);
	    var hasCheck = aCallable(set.has);
	    return !iterate(iterable, function (value, stop) {
	      if (functionCall(hasCheck, set, value) === true) return stop();
	    }, { INTERRUPTED: true }).stopped;
	  }
	});

	// `Set.prototype.isSubsetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  isSubsetOf: function isSubsetOf(iterable) {
	    var iterator = getIterator(this);
	    var otherSet = anObject(iterable);
	    var hasCheck = otherSet.has;
	    if (!isCallable(hasCheck)) {
	      otherSet = new (getBuiltIn('Set'))(iterable);
	      hasCheck = aCallable(otherSet.has);
	    }
	    return !iterate(iterator, function (value, stop) {
	      if (functionCall(hasCheck, otherSet, value) === false) return stop();
	    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
	  }
	});

	// `Set.prototype.isSupersetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  isSupersetOf: function isSupersetOf(iterable) {
	    var set = anObject(this);
	    var hasCheck = aCallable(set.has);
	    return !iterate(iterable, function (value, stop) {
	      if (functionCall(hasCheck, set, value) === false) return stop();
	    }, { INTERRUPTED: true }).stopped;
	  }
	});

	var arrayJoin = functionUncurryThis([].join);
	var push = [].push;

	// `Set.prototype.join` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  join: function join(separator) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var sep = separator === undefined ? ',' : toString_1(separator);
	    var result = [];
	    iterate(iterator, push, { that: result, IS_ITERATOR: true });
	    return arrayJoin(result, sep);
	  }
	});

	// `Set.prototype.map` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  map: function map(callbackfn /* , thisArg */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
	    var adder = aCallable(newSet.add);
	    iterate(iterator, function (value) {
	      functionCall(adder, newSet, boundFunction(value, value, set));
	    }, { IS_ITERATOR: true });
	    return newSet;
	  }
	});

	var $TypeError = TypeError;

	// `Set.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable(callbackfn);
	    iterate(iterator, function (value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, value, set);
	      }
	    }, { IS_ITERATOR: true });
	    if (noInitial) throw $TypeError('Reduce of empty set with no initial value');
	    return accumulator;
	  }
	});

	// `Set.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  some: function some(callbackfn /* , thisArg */) {
	    var set = anObject(this);
	    var iterator = getSetIterator(set);
	    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(iterator, function (value, stop) {
	      if (boundFunction(value, value, set)) return stop();
	    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
	  }
	});

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  symmetricDifference: function symmetricDifference(iterable) {
	    var set = anObject(this);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
	    var remover = aCallable(newSet['delete']);
	    var adder = aCallable(newSet.add);
	    iterate(iterable, function (value) {
	      functionCall(remover, newSet, value) || functionCall(adder, newSet, value);
	    });
	    return newSet;
	  }
	});

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	_export({ target: 'Set', proto: true, real: true, forced: true }, {
	  union: function union(iterable) {
	    var set = anObject(this);
	    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
	    iterate(iterable, aCallable(newSet.add), { that: newSet });
	    return newSet;
	  }
	});

	var set$2 = set$3;

	var set$1 = set$2;

	var set = set$1;

	// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
	var SAME = 0;
	var SAME_1 = SAME;

	// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
	var CAMELCASE = 1;
	var CAMELCASE_1 = CAMELCASE;

	var possibleStandardNames = {
	  accept: 0,
	  acceptCharset: 1,
	  'accept-charset': 'acceptCharset',
	  accessKey: 1,
	  action: 0,
	  allowFullScreen: 1,
	  alt: 0,
	  as: 0,
	  async: 0,
	  autoCapitalize: 1,
	  autoComplete: 1,
	  autoCorrect: 1,
	  autoFocus: 1,
	  autoPlay: 1,
	  autoSave: 1,
	  capture: 0,
	  cellPadding: 1,
	  cellSpacing: 1,
	  challenge: 0,
	  charSet: 1,
	  checked: 0,
	  children: 0,
	  cite: 0,
	  class: 'className',
	  classID: 1,
	  className: 1,
	  cols: 0,
	  colSpan: 1,
	  content: 0,
	  contentEditable: 1,
	  contextMenu: 1,
	  controls: 0,
	  controlsList: 1,
	  coords: 0,
	  crossOrigin: 1,
	  dangerouslySetInnerHTML: 1,
	  data: 0,
	  dateTime: 1,
	  default: 0,
	  defaultChecked: 1,
	  defaultValue: 1,
	  defer: 0,
	  dir: 0,
	  disabled: 0,
	  disablePictureInPicture: 1,
	  disableRemotePlayback: 1,
	  download: 0,
	  draggable: 0,
	  encType: 1,
	  enterKeyHint: 1,
	  for: 'htmlFor',
	  form: 0,
	  formMethod: 1,
	  formAction: 1,
	  formEncType: 1,
	  formNoValidate: 1,
	  formTarget: 1,
	  frameBorder: 1,
	  headers: 0,
	  height: 0,
	  hidden: 0,
	  high: 0,
	  href: 0,
	  hrefLang: 1,
	  htmlFor: 1,
	  httpEquiv: 1,
	  'http-equiv': 'httpEquiv',
	  icon: 0,
	  id: 0,
	  innerHTML: 1,
	  inputMode: 1,
	  integrity: 0,
	  is: 0,
	  itemID: 1,
	  itemProp: 1,
	  itemRef: 1,
	  itemScope: 1,
	  itemType: 1,
	  keyParams: 1,
	  keyType: 1,
	  kind: 0,
	  label: 0,
	  lang: 0,
	  list: 0,
	  loop: 0,
	  low: 0,
	  manifest: 0,
	  marginWidth: 1,
	  marginHeight: 1,
	  max: 0,
	  maxLength: 1,
	  media: 0,
	  mediaGroup: 1,
	  method: 0,
	  min: 0,
	  minLength: 1,
	  multiple: 0,
	  muted: 0,
	  name: 0,
	  noModule: 1,
	  nonce: 0,
	  noValidate: 1,
	  open: 0,
	  optimum: 0,
	  pattern: 0,
	  placeholder: 0,
	  playsInline: 1,
	  poster: 0,
	  preload: 0,
	  profile: 0,
	  radioGroup: 1,
	  readOnly: 1,
	  referrerPolicy: 1,
	  rel: 0,
	  required: 0,
	  reversed: 0,
	  role: 0,
	  rows: 0,
	  rowSpan: 1,
	  sandbox: 0,
	  scope: 0,
	  scoped: 0,
	  scrolling: 0,
	  seamless: 0,
	  selected: 0,
	  shape: 0,
	  size: 0,
	  sizes: 0,
	  span: 0,
	  spellCheck: 1,
	  src: 0,
	  srcDoc: 1,
	  srcLang: 1,
	  srcSet: 1,
	  start: 0,
	  step: 0,
	  style: 0,
	  summary: 0,
	  tabIndex: 1,
	  target: 0,
	  title: 0,
	  type: 0,
	  useMap: 1,
	  value: 0,
	  width: 0,
	  wmode: 0,
	  wrap: 0,
	  about: 0,
	  accentHeight: 1,
	  'accent-height': 'accentHeight',
	  accumulate: 0,
	  additive: 0,
	  alignmentBaseline: 1,
	  'alignment-baseline': 'alignmentBaseline',
	  allowReorder: 1,
	  alphabetic: 0,
	  amplitude: 0,
	  arabicForm: 1,
	  'arabic-form': 'arabicForm',
	  ascent: 0,
	  attributeName: 1,
	  attributeType: 1,
	  autoReverse: 1,
	  azimuth: 0,
	  baseFrequency: 1,
	  baselineShift: 1,
	  'baseline-shift': 'baselineShift',
	  baseProfile: 1,
	  bbox: 0,
	  begin: 0,
	  bias: 0,
	  by: 0,
	  calcMode: 1,
	  capHeight: 1,
	  'cap-height': 'capHeight',
	  clip: 0,
	  clipPath: 1,
	  'clip-path': 'clipPath',
	  clipPathUnits: 1,
	  clipRule: 1,
	  'clip-rule': 'clipRule',
	  color: 0,
	  colorInterpolation: 1,
	  'color-interpolation': 'colorInterpolation',
	  colorInterpolationFilters: 1,
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorProfile: 1,
	  'color-profile': 'colorProfile',
	  colorRendering: 1,
	  'color-rendering': 'colorRendering',
	  contentScriptType: 1,
	  contentStyleType: 1,
	  cursor: 0,
	  cx: 0,
	  cy: 0,
	  d: 0,
	  datatype: 0,
	  decelerate: 0,
	  descent: 0,
	  diffuseConstant: 1,
	  direction: 0,
	  display: 0,
	  divisor: 0,
	  dominantBaseline: 1,
	  'dominant-baseline': 'dominantBaseline',
	  dur: 0,
	  dx: 0,
	  dy: 0,
	  edgeMode: 1,
	  elevation: 0,
	  enableBackground: 1,
	  'enable-background': 'enableBackground',
	  end: 0,
	  exponent: 0,
	  externalResourcesRequired: 1,
	  fill: 0,
	  fillOpacity: 1,
	  'fill-opacity': 'fillOpacity',
	  fillRule: 1,
	  'fill-rule': 'fillRule',
	  filter: 0,
	  filterRes: 1,
	  filterUnits: 1,
	  floodOpacity: 1,
	  'flood-opacity': 'floodOpacity',
	  floodColor: 1,
	  'flood-color': 'floodColor',
	  focusable: 0,
	  fontFamily: 1,
	  'font-family': 'fontFamily',
	  fontSize: 1,
	  'font-size': 'fontSize',
	  fontSizeAdjust: 1,
	  'font-size-adjust': 'fontSizeAdjust',
	  fontStretch: 1,
	  'font-stretch': 'fontStretch',
	  fontStyle: 1,
	  'font-style': 'fontStyle',
	  fontVariant: 1,
	  'font-variant': 'fontVariant',
	  fontWeight: 1,
	  'font-weight': 'fontWeight',
	  format: 0,
	  from: 0,
	  fx: 0,
	  fy: 0,
	  g1: 0,
	  g2: 0,
	  glyphName: 1,
	  'glyph-name': 'glyphName',
	  glyphOrientationHorizontal: 1,
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphOrientationVertical: 1,
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphRef: 1,
	  gradientTransform: 1,
	  gradientUnits: 1,
	  hanging: 0,
	  horizAdvX: 1,
	  'horiz-adv-x': 'horizAdvX',
	  horizOriginX: 1,
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 0,
	  imageRendering: 1,
	  'image-rendering': 'imageRendering',
	  in2: 0,
	  in: 0,
	  inlist: 0,
	  intercept: 0,
	  k1: 0,
	  k2: 0,
	  k3: 0,
	  k4: 0,
	  k: 0,
	  kernelMatrix: 1,
	  kernelUnitLength: 1,
	  kerning: 0,
	  keyPoints: 1,
	  keySplines: 1,
	  keyTimes: 1,
	  lengthAdjust: 1,
	  letterSpacing: 1,
	  'letter-spacing': 'letterSpacing',
	  lightingColor: 1,
	  'lighting-color': 'lightingColor',
	  limitingConeAngle: 1,
	  local: 0,
	  markerEnd: 1,
	  'marker-end': 'markerEnd',
	  markerHeight: 1,
	  markerMid: 1,
	  'marker-mid': 'markerMid',
	  markerStart: 1,
	  'marker-start': 'markerStart',
	  markerUnits: 1,
	  markerWidth: 1,
	  mask: 0,
	  maskContentUnits: 1,
	  maskUnits: 1,
	  mathematical: 0,
	  mode: 0,
	  numOctaves: 1,
	  offset: 0,
	  opacity: 0,
	  operator: 0,
	  order: 0,
	  orient: 0,
	  orientation: 0,
	  origin: 0,
	  overflow: 0,
	  overlinePosition: 1,
	  'overline-position': 'overlinePosition',
	  overlineThickness: 1,
	  'overline-thickness': 'overlineThickness',
	  paintOrder: 1,
	  'paint-order': 'paintOrder',
	  panose1: 0,
	  'panose-1': 'panose1',
	  pathLength: 1,
	  patternContentUnits: 1,
	  patternTransform: 1,
	  patternUnits: 1,
	  pointerEvents: 1,
	  'pointer-events': 'pointerEvents',
	  points: 0,
	  pointsAtX: 1,
	  pointsAtY: 1,
	  pointsAtZ: 1,
	  prefix: 0,
	  preserveAlpha: 1,
	  preserveAspectRatio: 1,
	  primitiveUnits: 1,
	  property: 0,
	  r: 0,
	  radius: 0,
	  refX: 1,
	  refY: 1,
	  renderingIntent: 1,
	  'rendering-intent': 'renderingIntent',
	  repeatCount: 1,
	  repeatDur: 1,
	  requiredExtensions: 1,
	  requiredFeatures: 1,
	  resource: 0,
	  restart: 0,
	  result: 0,
	  results: 0,
	  rotate: 0,
	  rx: 0,
	  ry: 0,
	  scale: 0,
	  security: 0,
	  seed: 0,
	  shapeRendering: 1,
	  'shape-rendering': 'shapeRendering',
	  slope: 0,
	  spacing: 0,
	  specularConstant: 1,
	  specularExponent: 1,
	  speed: 0,
	  spreadMethod: 1,
	  startOffset: 1,
	  stdDeviation: 1,
	  stemh: 0,
	  stemv: 0,
	  stitchTiles: 1,
	  stopColor: 1,
	  'stop-color': 'stopColor',
	  stopOpacity: 1,
	  'stop-opacity': 'stopOpacity',
	  strikethroughPosition: 1,
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughThickness: 1,
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 0,
	  stroke: 0,
	  strokeDasharray: 1,
	  'stroke-dasharray': 'strokeDasharray',
	  strokeDashoffset: 1,
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokeLinecap: 1,
	  'stroke-linecap': 'strokeLinecap',
	  strokeLinejoin: 1,
	  'stroke-linejoin': 'strokeLinejoin',
	  strokeMiterlimit: 1,
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokeWidth: 1,
	  'stroke-width': 'strokeWidth',
	  strokeOpacity: 1,
	  'stroke-opacity': 'strokeOpacity',
	  suppressContentEditableWarning: 1,
	  suppressHydrationWarning: 1,
	  surfaceScale: 1,
	  systemLanguage: 1,
	  tableValues: 1,
	  targetX: 1,
	  targetY: 1,
	  textAnchor: 1,
	  'text-anchor': 'textAnchor',
	  textDecoration: 1,
	  'text-decoration': 'textDecoration',
	  textLength: 1,
	  textRendering: 1,
	  'text-rendering': 'textRendering',
	  to: 0,
	  transform: 0,
	  typeof: 0,
	  u1: 0,
	  u2: 0,
	  underlinePosition: 1,
	  'underline-position': 'underlinePosition',
	  underlineThickness: 1,
	  'underline-thickness': 'underlineThickness',
	  unicode: 0,
	  unicodeBidi: 1,
	  'unicode-bidi': 'unicodeBidi',
	  unicodeRange: 1,
	  'unicode-range': 'unicodeRange',
	  unitsPerEm: 1,
	  'units-per-em': 'unitsPerEm',
	  unselectable: 0,
	  vAlphabetic: 1,
	  'v-alphabetic': 'vAlphabetic',
	  values: 0,
	  vectorEffect: 1,
	  'vector-effect': 'vectorEffect',
	  version: 0,
	  vertAdvY: 1,
	  'vert-adv-y': 'vertAdvY',
	  vertOriginX: 1,
	  'vert-origin-x': 'vertOriginX',
	  vertOriginY: 1,
	  'vert-origin-y': 'vertOriginY',
	  vHanging: 1,
	  'v-hanging': 'vHanging',
	  vIdeographic: 1,
	  'v-ideographic': 'vIdeographic',
	  viewBox: 1,
	  viewTarget: 1,
	  visibility: 0,
	  vMathematical: 1,
	  'v-mathematical': 'vMathematical',
	  vocab: 0,
	  widths: 0,
	  wordSpacing: 1,
	  'word-spacing': 'wordSpacing',
	  writingMode: 1,
	  'writing-mode': 'writingMode',
	  x1: 0,
	  x2: 0,
	  x: 0,
	  xChannelSelector: 1,
	  xHeight: 1,
	  'x-height': 'xHeight',
	  xlinkActuate: 1,
	  'xlink:actuate': 'xlinkActuate',
	  xlinkArcrole: 1,
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkHref: 1,
	  'xlink:href': 'xlinkHref',
	  xlinkRole: 1,
	  'xlink:role': 'xlinkRole',
	  xlinkShow: 1,
	  'xlink:show': 'xlinkShow',
	  xlinkTitle: 1,
	  'xlink:title': 'xlinkTitle',
	  xlinkType: 1,
	  'xlink:type': 'xlinkType',
	  xmlBase: 1,
	  'xml:base': 'xmlBase',
	  xmlLang: 1,
	  'xml:lang': 'xmlLang',
	  xmlns: 0,
	  'xml:space': 'xmlSpace',
	  xmlnsXlink: 1,
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlSpace: 1,
	  y1: 0,
	  y2: 0,
	  y: 0,
	  yChannelSelector: 1,
	  z: 0,
	  zoomAndPan: 1
	};

	var possibleStandardNamesOptimized = {
		SAME: SAME_1,
		CAMELCASE: CAMELCASE_1,
		possibleStandardNames: possibleStandardNames
	};

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

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

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	// A reserved attribute.
	// It is handled by React separately and shouldn't be written to the DOM.
	var RESERVED = 0; // A simple string attribute.
	// Attributes that aren't in the filter are presumed to have this type.

	var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	// "enumerated" attributes with "true" and "false" as possible values.
	// When true, it should be set to a "true" string.
	// When false, it should be set to a "false" string.

	var BOOLEANISH_STRING = 2; // A real boolean attribute.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.

	var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.
	// For any other value, should be present with that value.

	var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	// When falsy, it should be removed.

	var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	// When falsy, it should be removed.

	var POSITIVE_NUMERIC = 6;
	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
	  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	  this.attributeName = attributeName;
	  this.attributeNamespace = attributeNamespace;
	  this.mustUseProperty = mustUseProperty;
	  this.propertyName = name;
	  this.type = type;
	  this.sanitizeURL = sanitizeURL;
	  this.removeEmptyString = removeEmptyString;
	} // When adding attributes to this list, be sure to also add them to
	// the `possibleStandardNames` module to ensure casing and incorrect
	// name warnings.


	var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	// elements (not just inputs). Now that ReactDOMInput assigns to the
	// defaultValue property -- do we need this?
	'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
	reservedProps.forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // A few React string attributes have a different name.
	// This is a mapping from React prop names to the attribute names.

	[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      name = _ref2[0],
	      attributeName = _ref2[1];

	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" HTML attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).

	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" SVG attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).
	// Since these are SVG attributes, their attribute names are case-sensitive.

	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML boolean attributes.

	['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	// on the client side because the browsers are inconsistent. Instead we call focus().
	'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	'itemScope'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are the few React props that we set as DOM properties
	// rather than attributes. These are all booleans.

	['checked', // Note: `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`. We have special logic for handling this.
	'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that are "overloaded booleans": they behave like
	// booleans, but can also accept a string value.

	['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be positive numbers.

	['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be numbers.

	['rowSpan', 'start'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	});
	var CAMELIZE = /[\-\:]([a-z])/g;

	var capitalize = function capitalize(token) {
	  return token[1].toUpperCase();
	}; // This is a list of all SVG attributes that need special casing, namespacing,
	// or boolean value assignment. Regular attributes that just accept strings
	// and have the same names are omitted, just like in the HTML attribute filter.
	// Some of these attributes can be hard to find. This list was created by
	// scraping the MDN documentation.


	['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xlink namespace.

	['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xml namespace.

	['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
	  false);
	}); // These attribute exists both in HTML and SVG.
	// The attribute name is case-sensitive in SVG so we can't just use
	// the React name like we do for attributes that exist only in HTML.

	['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These attributes accept URLs. These must not allow javascript: URLS.
	// These will also need to accept Trusted Types object in the future.

	var xlinkHref = 'xlinkHref';
	properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
	false);
	['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  true, // sanitizeURL
	  true);
	});

	var CAMELCASE = possibleStandardNamesOptimized.CAMELCASE,
	    SAME = possibleStandardNamesOptimized.SAME,
	    possibleStandardNamesOptimized$1 = possibleStandardNamesOptimized.possibleStandardNames;

	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	/**
	 * Checks whether a property name is a custom attribute.
	 *
	 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
	 *
	 * @param {string}
	 * @return {boolean}
	 */

	var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
	new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	var possibleStandardNames = Object.keys(possibleStandardNamesOptimized$1).reduce(function (accumulator, standardName) {
	  var propName = possibleStandardNamesOptimized$1[standardName];

	  if (propName === SAME) {
	    accumulator[standardName] = standardName;
	  } else if (propName === CAMELCASE) {
	    accumulator[standardName.toLowerCase()] = standardName;
	  } else {
	    accumulator[standardName] = propName;
	  }

	  return accumulator;
	}, {});

	exports.BOOLEAN = BOOLEAN;
	exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
	exports.NUMERIC = NUMERIC;
	exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
	exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
	exports.RESERVED = RESERVED;
	exports.STRING = STRING;
	exports.getPropertyInfo = getPropertyInfo;
	exports.isCustomAttribute = isCustomAttribute;
	exports.possibleStandardNames = possibleStandardNames;
	});

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

	var utilities = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.camelCase = void 0;
	var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
	var HYPHEN_REGEX = /-([a-z])/g;
	var NO_HYPHEN_REGEX = /^[^-]+$/;
	var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
	var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
	var skipCamelCase = function (property) {
	    return !property ||
	        NO_HYPHEN_REGEX.test(property) ||
	        CUSTOM_PROPERTY_REGEX.test(property);
	};
	var capitalize = function (match, character) {
	    return character.toUpperCase();
	};
	var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
	var camelCase = function (property, options) {
	    if (options === void 0) { options = {}; }
	    if (skipCamelCase(property)) {
	        return property;
	    }
	    property = property.toLowerCase();
	    if (options.reactCompat) {
	        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
	    }
	    else {
	        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
	    }
	    return property.replace(HYPHEN_REGEX, capitalize);
	};
	exports.camelCase = camelCase;
	});

	var cjs = createCommonjsModule(function (module, exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	exports.__esModule = true;
	var style_to_object_1 = __importDefault(styleToObject);

	function StyleToJS(style, options) {
	    var output = {};
	    if (!style || typeof style !== 'string') {
	        return output;
	    }
	    (0, style_to_object_1["default"])(style, function (property, value) {
	        if (property && value) {
	            output[(0, utilities.camelCase)(property, options)] = value;
	        }
	    });
	    return output;
	}
	exports["default"] = StyleToJS;
	});

	var elementsWithNoTextChildren = new set(['tr', 'tbody', 'thead', 'tfoot', 'colgroup', 'table', 'head', 'html', 'frameset']);
	var inlineHtmlTagNames = new set(['a', 'abbr', 'b', 'bdo', 'br', 'button', 'canvas', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'link', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'picture', 'progress', 'q', 'ruby', 'samp', 'script', 'select', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'textarea', 'time', 'u', 'var', 'video', 'wbr']);

	function getStyleProps(style) {
	  try {
	    return cjs(style, {
	      reactCompat: true
	    });
	  } catch (_unused) {
	    return {};
	  }
	}

	function attributesToProps(attributes) {
	  var props = {};

	  for (var attributeName in attributes) {
	    if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
	      var attributeValue = attributes[attributeName];
	      var lowerCasedName = attributeName.toLowerCase();

	      if (lowerCasedName === 'style' && typeof attributeValue === 'string') {
	        props.style = getStyleProps(attributeValue);
	        continue;
	      }

	      var propName = lib.possibleStandardNames[lowerCasedName];

	      if (propName) {
	        props[propName] = attributeValue;
	        var propInfo = lib.getPropInfo(propName);

	        switch (propInfo && propInfo.type) {
	          case lib.BOOLEAN:
	            props[propName] = true;
	            break;

	          case lib.OVERLOADED_BOOLEAN:
	            if (attributeValue === '') {
	              props[propName] = true;
	            }

	            break;
	        }

	        continue;
	      }

	      props[attributeName] = attributeValue;
	    }
	  }

	  return props;
	}

	function isValideInlineHtmlNode(node) {
	  if (node.type === 'text' && node instanceof index_js$1.Text) {
	    return true;
	  }

	  if (node.type === 'tag' && node instanceof index_js$1.Element) {
	    inlineHtmlTagNames.has(node.name.toLowerCase());
	  }

	  return false;
	}

	function parseDomNodesToReactNodes(nodes, replace) {
	  var len = nodes.length;
	  var result = [];

	  for (var i = 0; i < len; i++) {
	    var node = nodes[i];

	    if (!isValideInlineHtmlNode(node)) {
	      continue;
	    }

	    if (node.type === 'text' && node instanceof index_js$1.Text) {
	      var _context;

	      var isWhitespace = !trim$1(_context = node.data).call(_context).length;

	      if (isWhitespace && node.parent && node.parent instanceof index_js$1.Element && elementsWithNoTextChildren.has(node.parent.name)) {
	        continue;
	      }

	      if (typeof replace === 'function') {
	        var replacedTextNode = replace(node);

	        if (replacedTextNode && /*#__PURE__*/React__default["default"].isValidElement(replacedTextNode)) {
	          if (len > 1) {
	            replacedTextNode = /*#__PURE__*/React__default["default"].cloneElement(replacedTextNode, {
	              key: replacedTextNode.key || i
	            });
	          }

	          result.push(replacedTextNode);
	          continue;
	        } else {
	          result.push(node.data);
	          continue;
	        }
	      }

	      result.push(node.data);
	      continue;
	    }

	    var children = null;
	    var props = attributesToProps(node.attribs || {});

	    if (node.name === 'textarea' && node.children[0] && node.children[0] instanceof index_js$1.Text) {
	      props.defaultValue = node.children[0].data;
	    } else if (node.children && node.children.length > 0) {
	      children = parseDomNodesToReactNodes(node.children, replace);
	    }

	    if (len > 1) {
	      props.key = props.key || i;
	    }

	    result.push( /*#__PURE__*/React__default["default"].createElement(node.name, props, children));
	  }

	  return result.length === 1 ? result[0] : result;
	}

	var _excluded = ["content", "renderAfter"];
	var defaultProps = {
	  autoresize: false,
	  ellipsis: '',
	  expanded: false,
	  className: ''
	};

	function parseInlineHtmlToReactNodes(html, replace) {
	  if (typeof html !== 'string') {
	    throw new TypeError('react-simple-clamp only accepts string as html content');
	  }

	  if (trim$1(html).call(html) === '') {
	    return null;
	  }

	  var domNodes = index_js.parseDocument(html).children;
	  return parseDomNodesToReactNodes(domNodes, replace);
	}

	var ClampInlineHtml = function ClampInlineHtml(properties) {
	  var _properties$content = properties.content,
	      content = _properties$content === void 0 ? '' : _properties$content,
	      _properties$renderAft = properties.renderAfter,
	      renderAfter = _properties$renderAft === void 0 ? function () {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null);
	  } : _properties$renderAft,
	      restProps = _objectWithoutProperties(properties, _excluded);

	  var renderClampedContent = function renderClampedContent(offset, ellipsis) {
	    var count = 0;
	    var finished = false;

	    var replace = function replace(domNode) {
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
	    };

	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, parseInlineHtmlToReactNodes(content, replace), /*#__PURE__*/React__default["default"].createElement("span", null, ellipsis), renderAfter(true));
	  };

	  var renderContent = function renderContent() {
	    return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, parseInlineHtmlToReactNodes(content), renderAfter(false));
	  };

	  return /*#__PURE__*/React__default["default"].createElement(ReactSimpleClamp, _extends({
	    content: content,
	    renderContent: renderContent,
	    renderClampedContent: renderClampedContent
	  }, restProps));
	};

	ClampInlineHtml.defaultProps = defaultProps;

	var _this = undefined;

	var _jsxFileName = "/Users/albert/Documents/Code/github/react-simple-clamp/example/demo.jsx";
	var text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
	var html = 'hellohellohellhellohellohellhellohellohellhellohellohellhellohellohellhelloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld';

	var App = function App() {
	  var _useState = React.useState(false),
	      _useState2 = _slicedToArray$1(_useState, 2),
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
