var $db183fbae05d6b51$exports = {};
$db183fbae05d6b51$exports = JSON.parse('{"author":{"name":"Jakub Krop\xe1\u010D","email":"honza@kropac.net"},"license":"MIT","name":"bosch-appliance-features","description":"Bosch Home Connect Alt features for Home Assistant Tile card","keywords":["home-assistant","lovelace","custom-card","feature","home_connect_alt","apppliance","dishwasher","oven"],"version":"0.0.36","source":"./src/bosch-appliance-features.ts","module":"./dist/bosch-appliance-features.js","targets":{"module":{"includeNodeModules":true,"outputFormat":"esmodule"}},"scripts":{"watch":"parcel watch","build":"parcel build --no-source-maps && node optimize-icons.mjs","optimize-icons":"node optimize-icons.mjs","version MAJOR":"npm version major","version MINOR":"npm version minor","version PATCH":"npm version patch"},"devDependencies":{"parcel":"^2.16.0","svg-path-commander":"^2.1.11","svgo":"^4.0.0","typescript":"^5.9.3"},"dependencies":{"custom-card-helpers":"^1.9.0","home-assistant-js-websocket":"^9.5.0","lit":"^3.3.1"}}');


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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $bb166217b384746d$var$extendStatics = function(d, b) {
    $bb166217b384746d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $bb166217b384746d$var$extendStatics(d, b);
};
function $bb166217b384746d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $bb166217b384746d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $bb166217b384746d$export$18ce0697a983be9b = function() {
    $bb166217b384746d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $bb166217b384746d$export$18ce0697a983be9b.apply(this, arguments);
};
function $bb166217b384746d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $bb166217b384746d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $bb166217b384746d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $bb166217b384746d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $bb166217b384746d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $bb166217b384746d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $bb166217b384746d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $bb166217b384746d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $bb166217b384746d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $bb166217b384746d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $bb166217b384746d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $bb166217b384746d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $bb166217b384746d$export$45d3717a4c69092e(o, m, p);
}
function $bb166217b384746d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $bb166217b384746d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $bb166217b384746d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($bb166217b384746d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $bb166217b384746d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $bb166217b384746d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $bb166217b384746d$export$10c90e4f7922046c(v) {
    return this instanceof $bb166217b384746d$export$10c90e4f7922046c ? (this.v = v, this) : new $bb166217b384746d$export$10c90e4f7922046c(v);
}
function $bb166217b384746d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $bb166217b384746d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $bb166217b384746d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $bb166217b384746d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $bb166217b384746d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $bb166217b384746d$export$19a8beecd37a4c45 === "function" ? $bb166217b384746d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $bb166217b384746d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $bb166217b384746d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $bb166217b384746d$var$ownKeys = function(o) {
    $bb166217b384746d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $bb166217b384746d$var$ownKeys(o);
};
function $bb166217b384746d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $bb166217b384746d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $bb166217b384746d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $bb166217b384746d$var$__setModuleDefault(result, mod);
    return result;
}
function $bb166217b384746d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $bb166217b384746d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $bb166217b384746d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $bb166217b384746d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $bb166217b384746d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $bb166217b384746d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $bb166217b384746d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $bb166217b384746d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $bb166217b384746d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $bb166217b384746d$export$2e2bcd8739ae039 = {
    __extends: $bb166217b384746d$export$a8ba968b8961cb8a,
    __assign: $bb166217b384746d$export$18ce0697a983be9b,
    __rest: $bb166217b384746d$export$3c9a16f847548506,
    __decorate: $bb166217b384746d$export$29e00dfd3077644b,
    __param: $bb166217b384746d$export$d5ad3fd78186038f,
    __esDecorate: $bb166217b384746d$export$3a84e1ae4e97e9b0,
    __runInitializers: $bb166217b384746d$export$d831c04e792af3d,
    __propKey: $bb166217b384746d$export$6a2a36740a146cb8,
    __setFunctionName: $bb166217b384746d$export$d1a06452d3489bc7,
    __metadata: $bb166217b384746d$export$f1db080c865becb9,
    __awaiter: $bb166217b384746d$export$1050f835b63b671e,
    __generator: $bb166217b384746d$export$67ebef60e6f28a6,
    __createBinding: $bb166217b384746d$export$45d3717a4c69092e,
    __exportStar: $bb166217b384746d$export$f33643c0debef087,
    __values: $bb166217b384746d$export$19a8beecd37a4c45,
    __read: $bb166217b384746d$export$8d051b38c9118094,
    __spread: $bb166217b384746d$export$afc72e2116322959,
    __spreadArrays: $bb166217b384746d$export$6388937ca91ccae8,
    __spreadArray: $bb166217b384746d$export$1216008129fb82ed,
    __await: $bb166217b384746d$export$10c90e4f7922046c,
    __asyncGenerator: $bb166217b384746d$export$e427f37a30a4de9b,
    __asyncDelegator: $bb166217b384746d$export$bbd80228419bb833,
    __asyncValues: $bb166217b384746d$export$e3b29a3d6162315f,
    __makeTemplateObject: $bb166217b384746d$export$4fb47efe1390b86f,
    __importStar: $bb166217b384746d$export$c21735bcef00d192,
    __importDefault: $bb166217b384746d$export$da59b14a69baef04,
    __classPrivateFieldGet: $bb166217b384746d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $bb166217b384746d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $bb166217b384746d$export$81fdc39f203e4e04,
    __addDisposableResource: $bb166217b384746d$export$88ac25d8e944e405,
    __disposeResources: $bb166217b384746d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $bb166217b384746d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $06bdd16cbb4a41b3$var$t = globalThis, $06bdd16cbb4a41b3$export$b4d10f6001c083c2 = $06bdd16cbb4a41b3$var$t.ShadowRoot && (void 0 === $06bdd16cbb4a41b3$var$t.ShadyCSS || $06bdd16cbb4a41b3$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $06bdd16cbb4a41b3$var$s = Symbol(), $06bdd16cbb4a41b3$var$o = new WeakMap;
class $06bdd16cbb4a41b3$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $06bdd16cbb4a41b3$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $06bdd16cbb4a41b3$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $06bdd16cbb4a41b3$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $06bdd16cbb4a41b3$export$8d80f9cac07cdb3 = (t)=>new $06bdd16cbb4a41b3$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $06bdd16cbb4a41b3$var$s), $06bdd16cbb4a41b3$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $06bdd16cbb4a41b3$export$505d1e8739bad805(o, t, $06bdd16cbb4a41b3$var$s);
}, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $06bdd16cbb4a41b3$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $06bdd16cbb4a41b3$export$ee69dfd951e24778 = $06bdd16cbb4a41b3$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $06bdd16cbb4a41b3$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $375b48187e686ca2$var$i, defineProperty: $375b48187e686ca2$var$e, getOwnPropertyDescriptor: $375b48187e686ca2$var$h, getOwnPropertyNames: $375b48187e686ca2$var$r, getOwnPropertySymbols: $375b48187e686ca2$var$o, getPrototypeOf: $375b48187e686ca2$var$n } = Object, $375b48187e686ca2$var$a = globalThis, $375b48187e686ca2$var$c = $375b48187e686ca2$var$a.trustedTypes, $375b48187e686ca2$var$l = $375b48187e686ca2$var$c ? $375b48187e686ca2$var$c.emptyScript : "", $375b48187e686ca2$var$p = $375b48187e686ca2$var$a.reactiveElementPolyfillSupport, $375b48187e686ca2$var$d = (t, s)=>t, $375b48187e686ca2$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $375b48187e686ca2$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $375b48187e686ca2$export$53a6892c50694894 = (t, s)=>!$375b48187e686ca2$var$i(t, s), $375b48187e686ca2$var$b = {
    attribute: !0,
    type: String,
    converter: $375b48187e686ca2$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $375b48187e686ca2$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $375b48187e686ca2$var$a.litPropertyMetadata ??= new WeakMap;
class $375b48187e686ca2$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $375b48187e686ca2$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $375b48187e686ca2$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $375b48187e686ca2$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $375b48187e686ca2$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("elementProperties"))) return;
        const t = $375b48187e686ca2$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($375b48187e686ca2$var$d("properties"))) {
            const t = this.properties, s = [
                ...$375b48187e686ca2$var$r(t),
                ...$375b48187e686ca2$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $375b48187e686ca2$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $375b48187e686ca2$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $375b48187e686ca2$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$375b48187e686ca2$export$c7c07a37856565d.elementStyles = [], $375b48187e686ca2$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("elementProperties")] = new Map, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("finalized")] = new Map, $375b48187e686ca2$var$p?.({
    ReactiveElement: $375b48187e686ca2$export$c7c07a37856565d
}), ($375b48187e686ca2$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d33ef1320595a3ac$var$t = globalThis, $d33ef1320595a3ac$var$i = $d33ef1320595a3ac$var$t.trustedTypes, $d33ef1320595a3ac$var$s = $d33ef1320595a3ac$var$i ? $d33ef1320595a3ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $d33ef1320595a3ac$var$e = "$lit$", $d33ef1320595a3ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $d33ef1320595a3ac$var$o = "?" + $d33ef1320595a3ac$var$h, $d33ef1320595a3ac$var$n = `<${$d33ef1320595a3ac$var$o}>`, $d33ef1320595a3ac$var$r = document, $d33ef1320595a3ac$var$l = ()=>$d33ef1320595a3ac$var$r.createComment(""), $d33ef1320595a3ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $d33ef1320595a3ac$var$a = Array.isArray, $d33ef1320595a3ac$var$u = (t)=>$d33ef1320595a3ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $d33ef1320595a3ac$var$d = "[ \t\n\f\r]", $d33ef1320595a3ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $d33ef1320595a3ac$var$v = /-->/g, $d33ef1320595a3ac$var$_ = />/g, $d33ef1320595a3ac$var$m = RegExp(`>|${$d33ef1320595a3ac$var$d}(?:([^\\s"'>=/]+)(${$d33ef1320595a3ac$var$d}*=${$d33ef1320595a3ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $d33ef1320595a3ac$var$p = /'/g, $d33ef1320595a3ac$var$g = /"/g, $d33ef1320595a3ac$var$$ = /^(?:script|style|textarea|title)$/i, $d33ef1320595a3ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $d33ef1320595a3ac$export$c0bb0b647f701bb5 = $d33ef1320595a3ac$var$y(1), $d33ef1320595a3ac$export$7ed1367e7fa1ad68 = $d33ef1320595a3ac$var$y(2), $d33ef1320595a3ac$export$47d5b44d225be5b4 = $d33ef1320595a3ac$var$y(3), $d33ef1320595a3ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $d33ef1320595a3ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $d33ef1320595a3ac$var$A = new WeakMap, $d33ef1320595a3ac$var$C = $d33ef1320595a3ac$var$r.createTreeWalker($d33ef1320595a3ac$var$r, 129);
function $d33ef1320595a3ac$var$P(t, i) {
    if (!$d33ef1320595a3ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $d33ef1320595a3ac$var$s ? $d33ef1320595a3ac$var$s.createHTML(i) : i;
}
const $d33ef1320595a3ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $d33ef1320595a3ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $d33ef1320595a3ac$var$f ? "!--" === u[1] ? c = $d33ef1320595a3ac$var$v : void 0 !== u[1] ? c = $d33ef1320595a3ac$var$_ : void 0 !== u[2] ? ($d33ef1320595a3ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $d33ef1320595a3ac$var$m) : void 0 !== u[3] && (c = $d33ef1320595a3ac$var$m) : c === $d33ef1320595a3ac$var$m ? ">" === u[0] ? (c = r ?? $d33ef1320595a3ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $d33ef1320595a3ac$var$m : '"' === u[3] ? $d33ef1320595a3ac$var$g : $d33ef1320595a3ac$var$p) : c === $d33ef1320595a3ac$var$g || c === $d33ef1320595a3ac$var$p ? c = $d33ef1320595a3ac$var$m : c === $d33ef1320595a3ac$var$v || c === $d33ef1320595a3ac$var$_ ? c = $d33ef1320595a3ac$var$f : (c = $d33ef1320595a3ac$var$m, r = void 0);
        const x = c === $d33ef1320595a3ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $d33ef1320595a3ac$var$f ? s + $d33ef1320595a3ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $d33ef1320595a3ac$var$e + s.slice(d) + $d33ef1320595a3ac$var$h + x) : s + $d33ef1320595a3ac$var$h + (-2 === d ? i : x);
    }
    return [
        $d33ef1320595a3ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $d33ef1320595a3ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $d33ef1320595a3ac$var$V(t, s);
        if (this.el = $d33ef1320595a3ac$var$N.createElement(f, n), $d33ef1320595a3ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $d33ef1320595a3ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($d33ef1320595a3ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($d33ef1320595a3ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $d33ef1320595a3ac$var$H : "?" === e[1] ? $d33ef1320595a3ac$var$I : "@" === e[1] ? $d33ef1320595a3ac$var$L : $d33ef1320595a3ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($d33ef1320595a3ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($d33ef1320595a3ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($d33ef1320595a3ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $d33ef1320595a3ac$var$i ? $d33ef1320595a3ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $d33ef1320595a3ac$var$l()), $d33ef1320595a3ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $d33ef1320595a3ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $d33ef1320595a3ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($d33ef1320595a3ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $d33ef1320595a3ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $d33ef1320595a3ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $d33ef1320595a3ac$var$S(t, i, s = t, e) {
    if (i === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $d33ef1320595a3ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $d33ef1320595a3ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $d33ef1320595a3ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $d33ef1320595a3ac$var$r).importNode(i, !0);
        $d33ef1320595a3ac$var$C.currentNode = e;
        let h = $d33ef1320595a3ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $d33ef1320595a3ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $d33ef1320595a3ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $d33ef1320595a3ac$var$C.nextNode(), o++);
        }
        return $d33ef1320595a3ac$var$C.currentNode = $d33ef1320595a3ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $d33ef1320595a3ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $d33ef1320595a3ac$var$S(this, t, i), $d33ef1320595a3ac$var$c(t) ? t === $d33ef1320595a3ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $d33ef1320595a3ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && $d33ef1320595a3ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($d33ef1320595a3ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $d33ef1320595a3ac$var$N.createElement($d33ef1320595a3ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $d33ef1320595a3ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $d33ef1320595a3ac$var$A.get(t.strings);
        return void 0 === i && $d33ef1320595a3ac$var$A.set(t.strings, i = new $d33ef1320595a3ac$var$N(t)), i;
    }
    k(t) {
        $d33ef1320595a3ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $d33ef1320595a3ac$var$R(this.O($d33ef1320595a3ac$var$l()), this.O($d33ef1320595a3ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $d33ef1320595a3ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $d33ef1320595a3ac$var$S(this, t, i, 0), o = !$d33ef1320595a3ac$var$c(t) || t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $d33ef1320595a3ac$var$S(this, e[s + n], i, n), r === $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$d33ef1320595a3ac$var$c(r) || r !== this._$AH[n], r === $d33ef1320595a3ac$export$45b790e32b2810ee ? t = $d33ef1320595a3ac$export$45b790e32b2810ee : t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $d33ef1320595a3ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $d33ef1320595a3ac$var$H extends $d33ef1320595a3ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $d33ef1320595a3ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $d33ef1320595a3ac$var$I extends $d33ef1320595a3ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $d33ef1320595a3ac$export$45b790e32b2810ee);
    }
}
class $d33ef1320595a3ac$var$L extends $d33ef1320595a3ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $d33ef1320595a3ac$var$S(this, t, i, 0) ?? $d33ef1320595a3ac$export$45b790e32b2810ee) === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $d33ef1320595a3ac$export$45b790e32b2810ee && s !== $d33ef1320595a3ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (s === $d33ef1320595a3ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $d33ef1320595a3ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $d33ef1320595a3ac$var$S(this, t);
    }
}
const $d33ef1320595a3ac$export$8613d1ca9052b22e = {
    M: $d33ef1320595a3ac$var$e,
    P: $d33ef1320595a3ac$var$h,
    A: $d33ef1320595a3ac$var$o,
    C: 1,
    L: $d33ef1320595a3ac$var$V,
    R: $d33ef1320595a3ac$var$M,
    D: $d33ef1320595a3ac$var$u,
    V: $d33ef1320595a3ac$var$S,
    I: $d33ef1320595a3ac$var$R,
    H: $d33ef1320595a3ac$var$k,
    N: $d33ef1320595a3ac$var$I,
    U: $d33ef1320595a3ac$var$L,
    B: $d33ef1320595a3ac$var$H,
    F: $d33ef1320595a3ac$var$z
}, $d33ef1320595a3ac$var$j = $d33ef1320595a3ac$var$t.litHtmlPolyfillSupport;
$d33ef1320595a3ac$var$j?.($d33ef1320595a3ac$var$N, $d33ef1320595a3ac$var$R), ($d33ef1320595a3ac$var$t.litHtmlVersions ??= []).push("3.3.1");
const $d33ef1320595a3ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $d33ef1320595a3ac$var$R(i.insertBefore($d33ef1320595a3ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $528e4332d1e3099e$var$s = globalThis;
class $528e4332d1e3099e$export$3f2f9f5909897157 extends (0, $375b48187e686ca2$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $d33ef1320595a3ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8;
    }
}
$528e4332d1e3099e$export$3f2f9f5909897157._$litElement$ = !0, $528e4332d1e3099e$export$3f2f9f5909897157["finalized"] = !0, $528e4332d1e3099e$var$s.litElementHydrateSupport?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$var$o = $528e4332d1e3099e$var$s.litElementPolyfillSupport;
$528e4332d1e3099e$var$o?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($528e4332d1e3099e$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $56239b0c931b817c$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $4af75e4a7ed8f584$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $80d080f0d3adcf1c$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $375b48187e686ca2$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $375b48187e686ca2$export$53a6892c50694894)
}, $80d080f0d3adcf1c$export$8d623b1670eb40f4 = (t = $80d080f0d3adcf1c$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $80d080f0d3adcf1c$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $80d080f0d3adcf1c$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $0ede0742a0fa7bbd$export$ca000e230c0caa3e(r) {
    return (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5954ea5dd4cf850a$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $503ea9824f18064f$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $688d7e93c42be25f$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $503ea9824f18064f$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $fc6586cfa4ad7136$var$e;
function $fc6586cfa4ad7136$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $503ea9824f18064f$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($fc6586cfa4ad7136$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b531a1a0aa7c0890$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $503ea9824f18064f$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $705c7c046c2578b3$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $637e9a1da54d3961$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $503ea9824f18064f$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





const $d9ed75644065a944$export$864cc654a388aa38 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`
    .switches {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    ha-icon-button {
        --mdc-icon-button-size: 48px;
        --mdc-icon-size: 32px;
        width: var(--mdc-icon-button-size);
        height: var(--mdc-icon-button-size);
        color: var(--primary-text-color);
    }

    ha-icon-button:hover {
        color: var(--primary-color);
    }

    ha-icon-button svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
    }
`;
const $d9ed75644065a944$export$af47e28c29f4440b = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f62b4c9bce56f3ae$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $f62b4c9bce56f3ae$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $f62b4c9bce56f3ae$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $97d09910a4ba4421$export$3bebd1f0e3943985 extends (0, $f62b4c9bce56f3ae$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $d33ef1320595a3ac$export$45b790e32b2810ee), i.type !== (0, $f62b4c9bce56f3ae$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $d33ef1320595a3ac$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$97d09910a4ba4421$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $97d09910a4ba4421$export$3bebd1f0e3943985.resultType = 1;
const $97d09910a4ba4421$export$b6e69390c23686fb = (0, $f62b4c9bce56f3ae$export$99b43ad1ed32e735)($97d09910a4ba4421$export$3bebd1f0e3943985);






/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $f856e4b28630779e$var$t } = (0, $d33ef1320595a3ac$export$8613d1ca9052b22e), $f856e4b28630779e$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $f856e4b28630779e$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $f856e4b28630779e$export$6b6d145ec2a44ca9 = (o, t)=>void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, $f856e4b28630779e$export$6a0e8de894d2fcca = (o)=>null != o?._$litType$?.h, $f856e4b28630779e$export$2f448fec17d50a3e = (o)=>void 0 !== o?._$litDirective$, $f856e4b28630779e$export$f28e31de6a6eaf32 = (o)=>o?._$litDirective$, $f856e4b28630779e$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $f856e4b28630779e$var$r = ()=>document.createComment(""), $f856e4b28630779e$export$291b2338ad9b0b30 = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore($f856e4b28630779e$var$r(), l), d = e.insertBefore($f856e4b28630779e$var$r(), l);
        n = new $f856e4b28630779e$var$t(i, d, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, d = i !== o;
        if (d) {
            let t;
            n._$AQ?.(o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
        }
        if (t !== l || d) {
            let o = n._$AA;
            for(; o !== t;){
                const t = o.nextSibling;
                e.insertBefore(o, l), o = t;
            }
        }
    }
    return n;
}, $f856e4b28630779e$export$cb8bf9562088e9f4 = (o, t, i = o)=>(o._$AI(t, i), o), $f856e4b28630779e$var$u = {}, $f856e4b28630779e$export$ea70d9dd5965b1c8 = (o, t = $f856e4b28630779e$var$u)=>o._$AH = t, $f856e4b28630779e$export$59e9bce518cde500 = (o)=>o._$AH, $f856e4b28630779e$export$3133b3144bbba267 = (o)=>{
    o._$AR(), o._$AA.remove();
}, $f856e4b28630779e$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $fb7afed61c741777$var$s = (i, t)=>{
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)i._$AO?.(t, !1), $fb7afed61c741777$var$s(i, t);
    return !0;
}, $fb7afed61c741777$var$o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === e?.size);
}, $fb7afed61c741777$var$r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), $fb7afed61c741777$var$c(t);
    }
};
function $fb7afed61c741777$var$h(i) {
    void 0 !== this._$AN ? ($fb7afed61c741777$var$o(this), this._$AM = i, $fb7afed61c741777$var$r(this)) : this._$AM = i;
}
function $fb7afed61c741777$var$n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)$fb7afed61c741777$var$s(r[i], !1), $fb7afed61c741777$var$o(r[i]);
            else null != r && ($fb7afed61c741777$var$s(r, !1), $fb7afed61c741777$var$o(r));
        } else $fb7afed61c741777$var$s(this, i);
    }
}
const $fb7afed61c741777$var$c = (i)=>{
    i.type == (0, $f62b4c9bce56f3ae$export$9ba3b3f20a85bfa).CHILD && (i._$AP ??= $fb7afed61c741777$var$n, i._$AQ ??= $fb7afed61c741777$var$h);
};
class $fb7afed61c741777$export$7d025501802325e extends (0, $f62b4c9bce56f3ae$export$befdefbdce210f91) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), $fb7afed61c741777$var$r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && ($fb7afed61c741777$var$s(this, i), $fb7afed61c741777$var$o(this));
    }
    setValue(t) {
        if ((0, $f856e4b28630779e$export$7f431ad0fff82fd9)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}


/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7bf3a4ad37d148a6$export$74673a32c6041f3e = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class $7bf3a4ad37d148a6$export$71341b9b69479007 {
    constructor(t){
        this.G = t;
    }
    disconnect() {
        this.G = void 0;
    }
    reconnect(t) {
        this.G = t;
    }
    deref() {
        return this.G;
    }
}
class $7bf3a4ad37d148a6$export$193ea5a420bb5c41 {
    constructor(){
        this.Y = void 0, this.Z = void 0;
    }
    get() {
        return this.Y;
    }
    pause() {
        this.Y ??= new Promise((t)=>this.Z = t);
    }
    resume() {
        this.Z?.(), this.Y = this.Z = void 0;
    }
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f35354e62b171f38$var$n = (t)=>!(0, $f856e4b28630779e$export$c3825b437cbdea5c)(t) && "function" == typeof t.then, $f35354e62b171f38$var$h = 1073741823;
class $f35354e62b171f38$export$51c6edf8ee19b71a extends (0, $fb7afed61c741777$export$7d025501802325e) {
    constructor(){
        super(...arguments), this._$Cwt = $f35354e62b171f38$var$h, this._$Cbt = [], this._$CK = new (0, $7bf3a4ad37d148a6$export$71341b9b69479007)(this), this._$CX = new (0, $7bf3a4ad37d148a6$export$193ea5a420bb5c41);
    }
    render(...s) {
        return s.find((t)=>!$f35354e62b171f38$var$n(t)) ?? (0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8);
    }
    update(s, i) {
        const e = this._$Cbt;
        let r = e.length;
        this._$Cbt = i;
        const o = this._$CK, c = this._$CX;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$Cwt); t++){
            const s = i[t];
            if (!$f35354e62b171f38$var$n(s)) return this._$Cwt = t, s;
            t < r && s === e[t] || (this._$Cwt = $f35354e62b171f38$var$h, r = 0, Promise.resolve(s).then(async (t)=>{
                for(; c.get();)await c.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const e = i._$Cbt.indexOf(s);
                    e > -1 && e < i._$Cwt && (i._$Cwt = e, i.setValue(t));
                }
            }));
        }
        return 0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8;
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
}
const $f35354e62b171f38$export$a40009bd2c363351 = (0, $f62b4c9bce56f3ae$export$99b43ad1ed32e735)($f35354e62b171f38$export$51c6edf8ee19b71a);











// import { IntlMessageFormat } from "intl-messageformat";
var $12255719fcb5db94$exports = {};
$12255719fcb5db94$exports = JSON.parse("{\"dishwasher\":{\"programs\":{\"feature-name\":\"Dishwasher programs\",\"editor\":{\"icons_with_text\":{\"title\":\"Show icons with text\",\"description\":\"Show program icons with text labels below them. (Default: disabled)\"},\"show_machine_care\":{\"title\":\"Show Machine Care program\",\"description\":\"Show the Machine Care program in the list of available programs. (Default: enabled)\"}}},\"options\":{\"feature-name\":\"Dishwasher options\"},\"time-remaining\":{\"feature-name\":\"Dishwasher time remaining\"}},\"oven\":{\"programs\":{\"feature-name\":\"Oven programs\"},\"time-remaining\":{\"feature-name\":\"Oven time remaining\"}}}");


//import * as es from "./translations/es.json";
//import * as fr from "./translations/fr.json";
//import * as it from "./translations/it.json";
//import * as pt from "./translations/pt.json";
//import * as sk from "./translations/sk.json";
const $f7e2ebf6156dc08b$var$languages = {
    en: //  cs,
    //  de,
    $12255719fcb5db94$exports
};
const $f7e2ebf6156dc08b$var$DEFAULT_LANG = "en";
function $f7e2ebf6156dc08b$var$getTranslatedString(key, lang) {
    try {
        return key.split(".").reduce((o, i)=>o[i], $f7e2ebf6156dc08b$var$languages[lang]);
    } catch (_) {
        return undefined;
    }
}
function $f7e2ebf6156dc08b$export$2e2bcd8739ae039(hass) {
    return function(key, argObject = {}) {
        const lang = hass?.locale.language ?? $f7e2ebf6156dc08b$var$DEFAULT_LANG;
        let translated = $f7e2ebf6156dc08b$var$getTranslatedString(key, lang);
        if (!translated) translated = $f7e2ebf6156dc08b$var$getTranslatedString(key, $f7e2ebf6156dc08b$var$DEFAULT_LANG);
        if (!translated) return key;
        /* formated messages are not used at the moment
    try {
      const translatedMessage = new IntlMessageFormat(translated, lang);
      return translatedMessage.format<string>(argObject) as string;
    } catch (e) {
      console.error(
        `Error formatting message for key "${key}" with lang "${lang}":`,
        e
      );
      return translated;
    }
    */ return translated;
    };
}



class $a3d36398cbb8abc5$export$5ad3d821964e0a36 extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        const customLocalize = (0, $f7e2ebf6156dc08b$export$2e2bcd8739ae039)(this.hass);
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
            <ha-settings-row>
                <span slot="heading" data-for="icons_with_text">
                    ${customLocalize("dishwasher.programs.editor.icons_with_text.title")}
                </span>
                <span slot="description" data-for="icons_with_text">
                    ${customLocalize("dishwasher.programs.editor.icons_with_text.description")}
                    
                </span>
                <ha-switch
                    id="icons_with_text" 
                    @change=${this._onSettingChange}
                    .checked=${this.getBoolConfigVal("icons_with_text", false)} 
                    name="icons_with_text"
                ></ha-switch>
            </ha-settings-row>

            <ha-settings-row>
                <span slot="heading" data-for="show_machine_care">
                    ${customLocalize("dishwasher.programs.editor.show_machine_care.title")}
                </span>
                <span slot="description" data-for="show_machine_care">
                    ${customLocalize("dishwasher.programs.editor.show_machine_care.description")}
                </span>
                <ha-switch
                    id="show_machine_care" 
                    @change=${this._onSettingChange}
                    .checked=${this.getBoolConfigVal("show_machine_care", true)} 
                    name="show_machine_care"
                ></ha-switch>
            </ha-settings-row>
        `;
    }
    _onSettingChange(e) {
        const target = e.target;
        const key = target.id;
        const value = target.checked ?? target.value;
        this._updateConfig({
            ...this.config,
            [key]: value
        });
    }
    getBoolConfigVal(key, defaultValue) {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    _updateConfig(newConfig) {
        this.config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    static get styles() {
        return 0, $d9ed75644065a944$export$af47e28c29f4440b;
    }
    constructor(...args){
        super(...args), this.config = {};
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $a3d36398cbb8abc5$export$5ad3d821964e0a36.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        type: Object
    })
], $a3d36398cbb8abc5$export$5ad3d821964e0a36.prototype, "config", void 0);
$a3d36398cbb8abc5$export$5ad3d821964e0a36 = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)("bosch-dishwasher-programs-editor")
], $a3d36398cbb8abc5$export$5ad3d821964e0a36);


const $3fccb9d4d2156306$var$supportsBoschDishwasherProgramsFeature = (stateObj)=>{
    if (!stateObj?.attributes) return false;
    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
    const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";
    return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
};
class $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static{
        this.iconCache = new Map();
    }
    setConfig(config) {
        // If entity_prefix is not set, try to derive it from the entity name
        if (config.entity_prefix === undefined && config.entity) {
            const entityName = config.entity.split(".")[1];
            config.entity_prefix = entityName.split("_").slice(0, -2).join("_");
        }
        this.config = config;
        if (config && config.entity) this.stateObj = this.hass?.states?.[config.entity];
        else this.stateObj = undefined;
    }
    set hass(hass) {
        this._hass = hass;
        if (this.config && this.config.entity) {
            this.stateObj = hass?.states?.[this.config.entity];
            const entityPrefix = this.stateObj?.attributes?.common_prefix;
            if (entityPrefix) this.switches = Object.values(hass?.states || {}).reduce((acc, entity)=>{
                if (entity.entity_id.startsWith(`switch.${entityPrefix}_`)) acc[entity.entity_id] = entity;
                return acc;
            }, {});
            else this.switches = {};
        }
    }
    get hass() {
        return this._hass;
    }
    /**
     * Programs
     * - Eco 50°C: Dishcare.Dishwasher.Program.Eco50
     * - Auto 45-65°C: Dishcare.Dishwasher.Program.Auto2
     * - Intensive 70°C: Dishcare.Dishwasher.Program.Intensiv70
     * - Express 60°C Dishcare.Dishwasher.Program.Kurz60
     * - Quick 45°C: Dishcare.Dishwasher.Program.Quick45
     * - Glass 40°C: Dishcare.Dishwasher.Program.Glas40
     * - Silent 50°C: Dishcare.Dishwasher.Program.NightWash
     * - Machine Care: Dishcare.Dishwasher.Program.MachineCare
     */ render() {
        if (!this.config || !this.hass || !this.stateObj || !$3fccb9d4d2156306$var$supportsBoschDishwasherProgramsFeature(this.stateObj)) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
                <div class="toners">
                    <div>Unsupported feature</div>
                </div>
            `;
        const showMachineCare = this.getBoolConfigVal("show_machine_care", true);
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
            <div class="switches">
                ${this.getHaIconButton("Eco 50\xb0C", "Eco_50", "Dishcare.Dishwasher.Program.Eco50")}
                ${this.getHaIconButton("Auto 45-65\xb0C", "Auto_45-65", "Dishcare.Dishwasher.Program.Auto2")}
                ${this.getHaIconButton("Intensive 70\xb0C", "Intensive_70", "Dishcare.Dishwasher.Program.Intensiv70")}
                ${this.getHaIconButton("Express 60\xb0C", "Express_60", "Dishcare.Dishwasher.Program.Kurz60")}
                ${this.getHaIconButton("Quick 45\xb0C", "Express_45", "Dishcare.Dishwasher.Program.Quick45")}
                ${this.getHaIconButton("Glass 40\xb0C", "Glass_40", "Dishcare.Dishwasher.Program.Glas40")}
                ${this.getHaIconButton("Silent 50\xb0C", "Silent_50", "Dishcare.Dishwasher.Program.NightWash")}
                ${showMachineCare ? this.getHaIconButton("Machine Care", "MachineCare", "Dishcare.Dishwasher.Program.MachineCare") : (0, $d33ef1320595a3ac$export$45b790e32b2810ee)}
            </div>
        `;
    }
    getHaIconButton(label, iconName, programName) {
        const iconSuffix = this.getBoolConfigVal("icons_with_text", false) ? "_text" : "";
        const svgPromise = $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature.getInlineSVG(`${iconName}${iconSuffix}`).then((svg)=>(0, $97d09910a4ba4421$export$b6e69390c23686fb)(svg));
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
            <ha-icon-button .label=${label} title=${label} @click=${()=>this.setProgram(programName)}>
            ${(0, $f35354e62b171f38$export$a40009bd2c363351)(svgPromise, (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<span>⏳</span>`)}
            </ha-icon-button>
        `;
    }
    getBoolConfigVal(key, defaultValue) {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    setProgram(programName) {
        console.log("Selectiong", programName);
    // this.hass?.callService("switch", "toggle", { entity_id: entityId });
    }
    static async getInlineSVG(iconName) {
        if (!this.iconCache.has(iconName)) {
            const iconPath = `/hacsfiles/bosch-appliance-features/${iconName}.svg`;
            console.log("Loading icon:", iconPath);
            const res = await fetch(iconPath);
            const svgText = (await res.text()).replace(/(["'\s:])#000000(["'\s;>])/gi, '$1currentColor$2').replace(/(["'\s:])#000(["'\s;>])/gi, '$1currentColor$2');
            this.iconCache.set(iconName, svgText);
        }
        return this.iconCache.get(iconName);
    }
    static get properties() {
        return {
            hass: {
                type: Object
            },
            config: {
                type: Object
            },
            stateObj: {
                type: Object
            }
        };
    }
    static getConfigElement() {
        return document.createElement('bosch-dishwasher-programs-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:bosch-dishwasher-programs-feature'
        };
    }
    static get styles() {
        return 0, $d9ed75644065a944$export$864cc654a388aa38;
    }
    constructor(...args){
        super(...args), this.switches = {};
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature.prototype, "_hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature.prototype, "config", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature.prototype, "stateObj", void 0);
$3fccb9d4d2156306$var$BoschDishwasherProgramsFeature = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)("bosch-dishwasher-programs-feature")
], $3fccb9d4d2156306$var$BoschDishwasherProgramsFeature);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-programs-feature",
    name: "Bosch Dishwasher Programs Panel",
    supported: $3fccb9d4d2156306$var$supportsBoschDishwasherProgramsFeature,
    configurable: true
});






const $8b1647a9ad59d584$export$f0eb0d6ee1da2bba = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;
const $8b1647a9ad59d584$export$1726954ff531d1cc = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;







class $c45b3a62a020e969$export$777b72c3156c0d7d extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        const customLocalize = (0, $f7e2ebf6156dc08b$export$2e2bcd8739ae039)(this.hass);
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`config editor not implemented yet`;
    }
    _updateConfig(newConfig) {
        this.config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    static get styles() {
        return 0, $8b1647a9ad59d584$export$1726954ff531d1cc;
    }
    constructor(...args){
        super(...args), this.config = {};
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $c45b3a62a020e969$export$777b72c3156c0d7d.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        type: Object
    })
], $c45b3a62a020e969$export$777b72c3156c0d7d.prototype, "config", void 0);
$c45b3a62a020e969$export$777b72c3156c0d7d = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)("bosch-dishwasher-options-editor")
], $c45b3a62a020e969$export$777b72c3156c0d7d);


const $77c64735a69c1828$var$supportsBoschDishwasherOptionsFeature = (stateObj)=>{
    if (!stateObj?.attributes) return false;
    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
    const friendlyName = stateObj.attributes.friendly_name.toLowerCase() || "";
    return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("dishwasher") && friendlyName.includes("dishwasher");
};
class $77c64735a69c1828$export$80a2f62778bb11ea extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    setConfig(config) {
        // If entity_prefix is not set, try to derive it from the entity name
        if (config.entity_prefix === undefined && config.entity) {
            const entityName = config.entity.split(".")[1];
            config.entity_prefix = entityName.split("_").slice(0, -2).join("_");
        }
        this.config = config;
        if (config && config.entity) this.stateObj = this.hass?.states?.[config.entity];
        else this.stateObj = undefined;
    }
    set hass(hass) {
        this._hass = hass;
        if (this.config && this.config.entity) {
            this.stateObj = hass?.states?.[this.config.entity];
            const entityPrefix = this.stateObj?.attributes?.common_prefix;
            if (entityPrefix) this.switches = Object.values(hass?.states || {}).reduce((acc, entity)=>{
                if (entity.entity_id.startsWith(`switch.${entityPrefix}_`)) acc[entity.entity_id] = entity;
                return acc;
            }, {});
            else this.switches = {};
        }
    }
    get hass() {
        return this._hass;
    }
    /**
     * Programs
     * - Eco 50°C: Dishcare.Dishwasher.Program.Eco50
     * - Auto 45-65°C: Dishcare.Dishwasher.Program.Auto2
     * - Intensive 70°C: Dishcare.Dishwasher.Program.Intensiv70
     * - Dishcare.Dishwasher.Program.Kurz60
     * - Quick 45°C: Dishcare.Dishwasher.Program.Quick45
     * - Glass 40°C: Dishcare.Dishwasher.Program.Glas40
     * - Night Wash 50°C: Dishcare.Dishwasher.Program.NightWash
     * - Machine Care: Dishcare.Dishwasher.Program.MachineCare
     * Options:
     * - Delayed Start
     * - Remote Start
     * - Extra Dry: switch.*_dishcare_dishwasher_option_extradry
     * - Intensive Zone: switch.*_dishcare_dishwasher_option_intensivzone
     * - HygienePlus: switch.*_dishcare_dishwasher_option_hygieneplus
     * - PerfectSpeed+: switch.*_dishcare_dishwasher_option_variospeedplus
     */ render() {
        if (!this.config || !this.hass || !this.stateObj || !$77c64735a69c1828$var$supportsBoschDishwasherOptionsFeature(this.stateObj)) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
                <div class="toners">
                    <div>Unsupported feature</div>
                </div>
            `;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)``;
    }
    getEntity(type, suffix) {
        return `${type}.${this.config?.entity_prefix}_${suffix}`;
    }
    static get properties() {
        return {
            hass: {
                type: Object
            },
            config: {
                type: Object
            },
            stateObj: {
                type: Object
            }
        };
    }
    static getConfigElement() {
        return document.createElement('bosch-dishwasher-options-editor');
    }
    static getStubConfig() {
        return {
            type: 'bosch-dishwasher-options-feature'
        };
    }
    static get styles() {
        return 0, $8b1647a9ad59d584$export$f0eb0d6ee1da2bba;
    }
    constructor(...args){
        super(...args), this.switches = {};
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "_hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "config", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "stateObj", void 0);
$77c64735a69c1828$export$80a2f62778bb11ea = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)("bosch-dishwasher-options-feature")
], $77c64735a69c1828$export$80a2f62778bb11ea);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-options-feature",
    name: "Bosch Dishwasher Program Options Panel",
    supported: $77c64735a69c1828$var$supportsBoschDishwasherOptionsFeature,
    configurable: true
});


//import "./features/bosch-dishwasher-time/bosch-dishwasher-time-feature";
console.info(`Home Connect Alt Features for Tile cards - ${(0, $db183fbae05d6b51$exports.version)}`, "color: #ee5500; font-weight: 200;");


