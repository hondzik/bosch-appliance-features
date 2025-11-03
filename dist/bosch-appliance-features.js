var $db183fbae05d6b51$exports = {};
$db183fbae05d6b51$exports = JSON.parse('{"author":{"name":"Jakub Krop\xe1\u010D","email":"honza@kropac.net"},"license":"MIT","name":"bosch-appliance-features","displayName":"Bosch Appliance Features","description":"Home Assistant Tile card features for Bosch Home Connect Alt devices","repository":{"type":"git","url":"https://github.com/hondzik/bosch-appliance-features"},"keywords":["home-assistant","lovelace","custom-card","feature","home_connect_alt","apppliance","dishwasher","oven"],"type":"module","version":"0.0.97","source":"./src/bosch-appliance-features.ts","module":"./dist/bosch-appliance-features.js","targets":{"module":{"includeNodeModules":true,"outputFormat":"esmodule"}},"scripts":{"watch":"parcel watch","build":"parcel build --no-source-maps && node scripts/optimize-icons.mjs && node scripts/copy-to-haos.js","copy to HAOS":"parcel build --no-source-maps && node scripts/copy-to-haos.js","lint":"eslint src --ext .ts,.js --fix","format":"prettier --write src/**/*.{ts,js,css,scss,html}","optimize-icons":"node scripts/optimize-icons.mjs","version MAJOR":"npm version major","version MINOR":"npm version minor","version PATCH":"npm version patch"},"devDependencies":{"@typescript-eslint/eslint-plugin":"^8.46.2","@typescript-eslint/parser":"^8.46.2","dotenv":"^17.2.3","eslint":"^9.38.0","eslint-config-prettier":"^10.1.8","eslint-plugin-prettier":"^5.5.4","parcel":"^2.16.0","prettier":"^3.6.2","smb2":"^0.2.11","svg-path-commander":"^2.1.11","svgo":"^4.0.0","typescript":"^5.9.3"},"dependencies":{"custom-card-helpers":"^1.9.0","home-assistant-js-websocket":"^9.5.0","lit":"^3.3.1"}}');


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




/**
Bosch SMV4HVX03E – Plně vestavná myčka s Wi-Fi připojením. 
Bosch SMV2ITX09E – Vestavná myčka s Wi-Fi připojením a funkcí Home Connect. 
Bosch SMV2HVX02E – Plně vestavná myčka s Wi-Fi připojením. 
Bosch SPU2HKS41E – Vestavná myčka s panelem 45 cm a podporou Wi-Fi připojení. 
Bosch SPV4EMX25E – Vestavná myčka s Wi-Fi připojením. 
Bosch SMS8YCI03E: Volně stojící myčka s Wi-Fi připojením a funkcí Home Connect. 
Bosch SMS8ECI02Z: Volně stojící myčka s Wi-Fi připojením a funkcí Home Connect.
 */ var $9f801a9b0647a670$export$12672623d904b149 = /*#__PURE__*/ function(EBoschModelGroup) {
    // dishwashers
    EBoschModelGroup["SMV8YCX01E"] = "SMV8YCX01E";
    EBoschModelGroup["SMV8YCX02E"] = "SMV8YCX02E";
    return EBoschModelGroup;
}({});
var $9f801a9b0647a670$export$f68c7b551368089d = /*#__PURE__*/ function(EBoschModel) {
    // dishwashers
    EBoschModel["SMV8YCX01E"] = "SMV8YCX01E";
    EBoschModel["SMV8YCX02E"] = "SMV8YCX02E";
    return EBoschModel;
}({});
const $9f801a9b0647a670$export$6a9a709409a04f84 = new Map([
    [
        "SMV8YCX01E",
        "SMV8YCX01E"
    ],
    [
        "SMV8YCX02E",
        "SMV8YCX02E"
    ]
]);



const $041ae069d715ccb9$export$864cc654a388aa38 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`
    :host {
        height: var(--feature-height, 42px);
        width: 100%;
        padding: 0px;
        outline: 0px;
        overflow: hidden;
    }

    ha-control-button-group {
        gap: 0px!important;
        display: flex;
        flex-flow: column;
        place-content: center space-evenly;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        height: height: 100%;
        width: 100%;
        border: none;
        border-radius: var(--feature-border-radius, 12px);
        padding: 0px;
        margin: 0px;
        outline: 0px;
        overflow: hidden;
        flex-basis: 100%;
        background-color: var(--control-button-background-color);
    }


    ha-control-button {
        margin-left: calc(var(--feature-border-radius, 12px) * -0.5);
        margin-right: calc(var(--feature-border-radius, 12px) * -0.5);
        /*background-color: var(--disabled-color);*/
        border-radius: var(--feature-border-radius, 12px);
        height:  var(--feature-height, 42px);
        display: flex;
        align-items: center;
        justify-content: center;
        /*transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;*/
        z-idnex: 1;
        flex: 1;
    }
    
    ha-control-button:first-child {
        margin-left: 0px;
    }   
    ha-control-button:last-child {
        margin-right: 0px;
    }   

    ha-control-button.active,
    ha-control-button:hover {
        background-color: var(--tile-color);
        transition: background-color 180ms ease-in-out, opacity 180ms ease-in-out;
        opacity: var(--tile-opacity);
        z-index: 1;
    }

    .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: var(--tile-color);
    }

    svg {
        width: 100%;
        height: 100%;
        /*stroke: currentColor;
        fill: currentColor;*/
    }


 
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

    ha-icon-button 
    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
    }


    .programs-list ha-control-button .icon-wrapper {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .programs-list ha-control-button .icon-wrapper svg {
        width: 24px;
        height: 24px;
    }

    .programs-list .icon-wrapper {
        background: white;
        color: var(--primary-color);
    }

    .programs-list .icon-wrapper.active {
        background: var(--primary-color);
        color: white;
    }
`;
const $041ae069d715ccb9$export$af47e28c29f4440b = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;



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





var $0494cbdc56524684$export$312fe7d200422060 = /*#__PURE__*/ function(EBoschDishwasherProgram) {
    EBoschDishwasherProgram[EBoschDishwasherProgram["auto_1"] = 0] = "auto_1";
    EBoschDishwasherProgram[EBoschDishwasherProgram["auto_2"] = 1] = "auto_2";
    EBoschDishwasherProgram[EBoschDishwasherProgram["auto_3"] = 2] = "auto_3";
    EBoschDishwasherProgram[EBoschDishwasherProgram["auto_half_load"] = 3] = "auto_half_load";
    EBoschDishwasherProgram[EBoschDishwasherProgram["eco_50"] = 4] = "eco_50";
    EBoschDishwasherProgram[EBoschDishwasherProgram["express_60"] = 5] = "express_60";
    EBoschDishwasherProgram[EBoschDishwasherProgram["express_sparkle_65"] = 6] = "express_sparkle_65";
    EBoschDishwasherProgram[EBoschDishwasherProgram["glass_40"] = 7] = "glass_40";
    EBoschDishwasherProgram[EBoschDishwasherProgram["glass_care"] = 8] = "glass_care";
    EBoschDishwasherProgram[EBoschDishwasherProgram["intelligent"] = 9] = "intelligent";
    EBoschDishwasherProgram[EBoschDishwasherProgram["intensive_45"] = 10] = "intensive_45";
    EBoschDishwasherProgram[EBoschDishwasherProgram["intensive_70"] = 11] = "intensive_70";
    EBoschDishwasherProgram[EBoschDishwasherProgram["intensive_power"] = 12] = "intensive_power";
    EBoschDishwasherProgram[EBoschDishwasherProgram["magic_daily"] = 13] = "magic_daily";
    EBoschDishwasherProgram[EBoschDishwasherProgram["machinecare"] = 14] = "machinecare";
    EBoschDishwasherProgram[EBoschDishwasherProgram["maximum_cleaning"] = 15] = "maximum_cleaning";
    EBoschDishwasherProgram[EBoschDishwasherProgram["mixed_load"] = 16] = "mixed_load";
    EBoschDishwasherProgram[EBoschDishwasherProgram["night_wash"] = 17] = "night_wash";
    EBoschDishwasherProgram[EBoschDishwasherProgram["normal_45"] = 18] = "normal_45";
    EBoschDishwasherProgram[EBoschDishwasherProgram["normal_65"] = 19] = "normal_65";
    EBoschDishwasherProgram[EBoschDishwasherProgram["pre_rinse"] = 20] = "pre_rinse";
    EBoschDishwasherProgram[EBoschDishwasherProgram["quick_45"] = 21] = "quick_45";
    EBoschDishwasherProgram[EBoschDishwasherProgram["quick_65"] = 22] = "quick_65";
    EBoschDishwasherProgram[EBoschDishwasherProgram["quick_n_dry"] = 23] = "quick_n_dry";
    EBoschDishwasherProgram[EBoschDishwasherProgram["steam_fresh"] = 24] = "steam_fresh";
    EBoschDishwasherProgram[EBoschDishwasherProgram["super_60"] = 25] = "super_60";
    return EBoschDishwasherProgram;
}({});
const $0494cbdc56524684$export$84f2729a00483f73 = new Map([
    [
        0,
        {
            name: "Auto 43-45\xb0C",
            icon: 'auto',
            program: 'Dishcare.Dishwasher.Program.Auto1'
        }
    ],
    [
        1,
        {
            name: "Auto 45-65\xb0C",
            icon: 'auto',
            program: 'Dishcare.Dishwasher.Program.Auto2'
        }
    ],
    [
        2,
        {
            name: "Auto 65-75\xb0C",
            icon: 'auto',
            program: 'Dishcare.Dishwasher.Program.Auto3'
        }
    ],
    [
        3,
        {
            name: 'Auto Half Load',
            icon: 'auto_half_load',
            program: 'Dishcare.Dishwasher.Program.AutoHalfLoad'
        }
    ],
    [
        4,
        {
            name: "Eco 50\xb0C",
            icon: 'eco_50',
            program: 'Dishcare.Dishwasher.Program.Eco50'
        }
    ],
    [
        5,
        {
            name: "Express 60\xb0C",
            icon: 'express_60',
            program: 'Dishcare.Dishwasher.Program.Kurz60'
        }
    ],
    [
        6,
        {
            name: "Express Sparkle 65\xb0C",
            icon: 'express_sparkle_65',
            program: 'Dishcare.Dishwasher.Program.ExpressSparkle65'
        }
    ],
    [
        7,
        {
            name: "Glass 40\xb0C",
            icon: 'glass_40',
            program: 'Dishcare.Dishwasher.Program.Glas40'
        }
    ],
    [
        8,
        {
            name: 'Glass Care',
            icon: 'glass_care',
            program: 'Dishcare.Dishwasher.Program.GlassCare'
        }
    ],
    [
        9,
        {
            name: 'Intelligent',
            icon: 'intelligent',
            program: 'Dishcare.Dishwasher.Program.LearningDishwasher'
        }
    ],
    [
        10,
        {
            name: "Intensive 45\xb0C",
            icon: 'intensive_45',
            program: 'Dishcare.Dishwasher.Program.Intensiv45'
        }
    ],
    [
        11,
        {
            name: "Intensive 70\xb0C",
            icon: 'intensive_70',
            program: 'Dishcare.Dishwasher.Program.Intensiv70'
        }
    ],
    [
        12,
        {
            name: 'Intensive Power',
            icon: 'intensive_power',
            program: 'Dishcare.Dishwasher.Program.IntensivPower'
        }
    ],
    [
        13,
        {
            name: 'Magic Daily',
            icon: 'magic_daily',
            program: 'Dishcare.Dishwasher.Program.MagicDaily'
        }
    ],
    [
        14,
        {
            name: 'Machine Care',
            icon: 'machinecare',
            program: 'Dishcare.Dishwasher.Program.MachineCare'
        }
    ],
    [
        15,
        {
            name: 'Maximum Cleaning',
            icon: 'maximum_cleaning',
            program: 'Dishcare.Dishwasher.Program.MaximumCleaning'
        }
    ],
    [
        16,
        {
            name: 'Mixed Load',
            icon: 'mixed_load',
            program: 'Dishcare.Dishwasher.Program.MixedLoad'
        }
    ],
    [
        17,
        {
            name: "Silent 50\xb0C",
            icon: 'silent_50',
            program: 'Dishcare.Dishwasher.Program.NightWash'
        }
    ],
    [
        18,
        {
            name: "Normal 45\xb0C",
            icon: 'normal_45',
            program: 'Dishcare.Dishwasher.Program.Normal45'
        }
    ],
    [
        19,
        {
            name: "Normal 65\xb0C",
            icon: 'normal_65',
            program: 'Dishcare.Dishwasher.Program.Normal65'
        }
    ],
    [
        20,
        {
            name: 'Pre-rinse',
            icon: 'pre_rinse',
            program: 'Dishcare.Dishwasher.Program.PreRinse'
        }
    ],
    [
        21,
        {
            name: "Quick 45\xb0C",
            icon: 'express_45',
            program: 'Dishcare.Dishwasher.Program.Quick45'
        }
    ],
    [
        22,
        {
            name: "Quick 65\xb0C",
            icon: 'express_65',
            program: 'Dishcare.Dishwasher.Program.Quick65'
        }
    ],
    [
        23,
        {
            name: 'Quick Wash & Dry',
            icon: 'quick_n_dry',
            program: 'Dishcare.Dishwasher.Program.QuickD'
        }
    ],
    [
        24,
        {
            name: 'Steam Fresh',
            icon: 'steam_fresh',
            program: 'Dishcare.Dishwasher.Program.SteamFresh'
        }
    ],
    [
        25,
        {
            name: "Super 60\xb0C",
            icon: 'super_60',
            program: 'Dishcare.Dishwasher.Program.Super60'
        }
    ]
]);
const $0494cbdc56524684$export$368c514ed486b088 = new Map([
    [
        (0, $9f801a9b0647a670$export$12672623d904b149).SMV8YCX01E,
        [
            4,
            1,
            11,
            5,
            21,
            7,
            17,
            14
        ]
    ],
    [
        (0, $9f801a9b0647a670$export$12672623d904b149).SMV8YCX02E,
        [
            4,
            1,
            11,
            5,
            9,
            7,
            17,
            14
        ]
    ]
]);


function $742472ad635a8957$export$77ffbca238424dbf(enumObj, key) {
    return enumObj[key];
}



var $c302abf7983a4985$export$4ad3a6a09fb2916f = /*#__PURE__*/ function(EBoschFeature) {
    EBoschFeature[EBoschFeature["dishwasher_options"] = 0] = "dishwasher_options";
    EBoschFeature[EBoschFeature["dishwasher_programs"] = 1] = "dishwasher_programs";
    EBoschFeature[EBoschFeature["dishwasher_time"] = 2] = "dishwasher_time";
    EBoschFeature[EBoschFeature["oven_controls"] = 3] = "oven_controls";
    return EBoschFeature;
}({});


var $2bd9259198ca0bf4$export$46cdc11276e7e760 = /*#__PURE__*/ function(EBoschEntity) {
    EBoschEntity[EBoschEntity["active_program"] = 0] = "active_program";
    EBoschEntity[EBoschEntity["alarm_clock"] = 1] = "alarm_clock";
    EBoschEntity[EBoschEntity["alarm_clock_value"] = 2] = "alarm_clock_value";
    EBoschEntity[EBoschEntity["base_program"] = 3] = "base_program";
    EBoschEntity[EBoschEntity["brilliance_dry"] = 4] = "brilliance_dry";
    EBoschEntity[EBoschEntity["childlock"] = 5] = "childlock";
    EBoschEntity[EBoschEntity["connected"] = 6] = "connected";
    EBoschEntity[EBoschEntity["current_cavity_temperature"] = 7] = "current_cavity_temperature";
    EBoschEntity[EBoschEntity["door_state"] = 8] = "door_state";
    EBoschEntity[EBoschEntity["duration"] = 9] = "duration";
    EBoschEntity[EBoschEntity["elapsed_program_time"] = 10] = "elapsed_program_time";
    EBoschEntity[EBoschEntity["eco_dry"] = 11] = "eco_dry";
    EBoschEntity[EBoschEntity["extra_dry"] = 12] = "extra_dry";
    EBoschEntity[EBoschEntity["fast_preheat"] = 13] = "fast_preheat";
    EBoschEntity[EBoschEntity["half_load"] = 14] = "half_load";
    EBoschEntity[EBoschEntity["hygiene_plus"] = 15] = "hygiene_plus";
    EBoschEntity[EBoschEntity["intensive_zone"] = 16] = "intensive_zone";
    EBoschEntity[EBoschEntity["interior_illumination_active"] = 17] = "interior_illumination_active";
    EBoschEntity[EBoschEntity["local_control_active"] = 18] = "local_control_active";
    EBoschEntity[EBoschEntity["operation_state"] = 19] = "operation_state";
    EBoschEntity[EBoschEntity["power_state"] = 20] = "power_state";
    EBoschEntity[EBoschEntity["program_name"] = 21] = "program_name";
    EBoschEntity[EBoschEntity["program_progress"] = 22] = "program_progress";
    EBoschEntity[EBoschEntity["programs"] = 23] = "programs";
    EBoschEntity[EBoschEntity["remaining_program_time"] = 24] = "remaining_program_time";
    EBoschEntity[EBoschEntity["remaining_program_time_is_estimated"] = 25] = "remaining_program_time_is_estimated";
    EBoschEntity[EBoschEntity["remote_control_active"] = 26] = "remote_control_active";
    EBoschEntity[EBoschEntity["remote_control_start_allowed"] = 27] = "remote_control_start_allowed";
    EBoschEntity[EBoschEntity["sabbath_mode"] = 28] = "sabbath_mode";
    EBoschEntity[EBoschEntity["selected_program"] = 29] = "selected_program";
    EBoschEntity[EBoschEntity["set_point_temperature"] = 30] = "set_point_temperature";
    EBoschEntity[EBoschEntity["set_point_temperature_value"] = 31] = "set_point_temperature_value";
    EBoschEntity[EBoschEntity["silence_on_demand"] = 32] = "silence_on_demand";
    EBoschEntity[EBoschEntity["start_in_relative"] = 33] = "start_in_relative";
    EBoschEntity[EBoschEntity["start_in_relative_value"] = 34] = "start_in_relative_value";
    EBoschEntity[EBoschEntity["start_pause"] = 35] = "start_pause";
    EBoschEntity[EBoschEntity["steam_assist_level"] = 36] = "steam_assist_level";
    EBoschEntity[EBoschEntity["stop"] = 37] = "stop";
    EBoschEntity[EBoschEntity["vario_speed_plus"] = 38] = "vario_speed_plus";
    EBoschEntity[EBoschEntity["weight"] = 39] = "weight";
    EBoschEntity[EBoschEntity["zeolite_dry"] = 40] = "zeolite_dry";
    return EBoschEntity;
}({});
const $2bd9259198ca0bf4$export$306b07a8235c3466 = new Map([
    [
        0,
        {
            type: 'sensor',
            suffix: 'active_program'
        }
    ],
    [
        1,
        {
            type: 'sensor',
            suffix: 'bsh_common_setting_alarmclock'
        }
    ],
    [
        2,
        {
            type: 'number',
            suffix: 'bsh_common_setting_alarmclock'
        }
    ],
    [
        3,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_baseprogram'
        }
    ],
    [
        4,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_brilliancedry'
        }
    ],
    [
        5,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_setting_childlock'
        }
    ],
    [
        6,
        {
            type: 'binary_sensor',
            suffix: 'connected'
        }
    ],
    [
        7,
        {
            type: 'sensor',
            suffix: 'cooking_oven_status_currentcavitytemperature'
        }
    ],
    [
        8,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_status_doorstate'
        }
    ],
    [
        9,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_duration'
        }
    ],
    [
        10,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_elapsedprogramtime'
        }
    ],
    [
        11,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_ecodry'
        }
    ],
    [
        12,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_extradry'
        }
    ],
    [
        13,
        {
            type: 'switch',
            suffix: 'cooking_oven_option_fastpreheat'
        }
    ],
    [
        14,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_halfload'
        }
    ],
    [
        15,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_hygieneplus'
        }
    ],
    [
        16,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_intensivzone'
        }
    ],
    [
        17,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_status_interiorilluminationactive'
        }
    ],
    [
        18,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_status_localcontrolactive'
        }
    ],
    [
        19,
        {
            type: 'sensor',
            suffix: 'bsh_common_status_operationstate'
        }
    ],
    [
        20,
        {
            type: 'switch',
            suffix: 'bsh_common_setting_powerstate'
        }
    ],
    [
        21,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_programname'
        }
    ],
    [
        22,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_programprogress'
        }
    ],
    [
        23,
        {
            type: 'select',
            suffix: 'programs'
        }
    ],
    [
        24,
        {
            type: 'sensor',
            suffix: 'bsh_common_option_remainingprogramtime'
        }
    ],
    [
        25,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_option_remainingprogramtimeisestimated'
        }
    ],
    [
        26,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_status_remotecontrolactive'
        }
    ],
    [
        27,
        {
            type: 'binary_sensor',
            suffix: 'bsh_common_status_remotecontrolstartallowed'
        }
    ],
    [
        28,
        {
            type: 'switch',
            suffix: 'cooking_oven_setting_sabbathmode'
        }
    ],
    [
        29,
        {
            type: 'sensor',
            suffix: 'selected_program'
        }
    ],
    [
        30,
        {
            type: 'sensor',
            suffix: 'cooking_oven_option_setpointtemperature'
        }
    ],
    [
        31,
        {
            type: 'number',
            suffix: 'cooking_oven_option_setpointtemperature'
        }
    ],
    [
        32,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_silenceondemand'
        }
    ],
    [
        33,
        {
            type: 'select',
            suffix: 'bsh_common_option_startinrelative'
        }
    ],
    [
        34,
        {
            type: 'number',
            suffix: 'bsh_common_option_startinrelative'
        }
    ],
    [
        35,
        {
            type: 'button',
            suffix: 'start_pause'
        }
    ],
    [
        36,
        {
            type: 'sensor',
            suffix: 'cooking_oven_option_steamassistlevel'
        }
    ],
    [
        37,
        {
            type: 'button',
            suffix: 'stop'
        }
    ],
    [
        38,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_variospeedplus'
        }
    ],
    [
        39,
        {
            type: 'sensor',
            suffix: 'cooking_oven_option_weight'
        }
    ],
    [
        40,
        {
            type: 'switch',
            suffix: 'dishcare_dishwasher_option_zeolitedry'
        }
    ]
]);
const $2bd9259198ca0bf4$export$b74fc37d3b82988d = new Map([
    [
        (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_programs,
        [
            0,
            3,
            6,
            8,
            19,
            20,
            21,
            23,
            25,
            26,
            27,
            29
        ]
    ],
    [
        (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_options,
        [
            6,
            8,
            12,
            15,
            16,
            19,
            20,
            26,
            27,
            32,
            38
        ]
    ],
    [
        (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_time,
        [
            6,
            8,
            19,
            20,
            22,
            24,
            26,
            27,
            35,
            37
        ]
    ],
    [
        (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).oven_controls,
        [
            0,
            1,
            2,
            5,
            6,
            7,
            8,
            9,
            10,
            13,
            17,
            18,
            19,
            20,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            33,
            34,
            35,
            36,
            37,
            39
        ]
    ]
]);



class $2eb7d861ff889d97$export$951251c678728e4c extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static get applianceType() {
        throw new Error("Must be implemented by subclass");
    }
    get entityPrefix() {
        if (this._entityPrefix === undefined) {
            if (this.context?.entity_id) this._entityPrefix = this.context.entity_id.split('.')[1]?.split('_').slice(0, this.entityPrefixLength).join('_');
            else console.error('Cannot derive entityPrefix: context.entity_id is undefined');
        }
        return this._entityPrefix;
    }
    get entities() {
        if (this._entities.size === 0) {
            const entityEnums = (0, $2bd9259198ca0bf4$export$b74fc37d3b82988d).get(this.feature) ?? [];
            this._entities = entityEnums.reduce((mapAcc, enumKey)=>{
                const entity = (0, $2bd9259198ca0bf4$export$306b07a8235c3466).get(enumKey);
                if (entity) mapAcc.set(enumKey, entity);
                return mapAcc;
            }, new Map());
            if (this._entities.size === 0) console.error(`No entities associated with feature ${this.feature} found`);
        }
        return this._entities;
    }
    get online() {
        if (this._online === undefined) // TODO: check if appliance is online, otherwise return false
        this._online = true;
        return this._online;
    }
    set online(val) {
        this._online = val;
    }
    get running() {
        if (this._running === undefined) // TODO: check if appliance is running, otherwise return false
        this._running = false;
        return this._running;
    }
    set running(val) {
        this._running = val;
    }
    getLinkedEntityState(entityRef) {
        if (!this.hass || !this.context) return undefined;
        if (!this.entities.has(entityRef) || !this.entityPrefix) {
            console.error(`Entity ${entityRef} with prefix ${this.entityPrefix} not found in entities map`);
            return undefined;
        }
        const entityDef = this.entities.get(entityRef);
        const entityId = `${entityDef.type}.${this.entityPrefix}_${entityDef.suffix}`;
        const entity = this.hass?.states?.[entityId];
        if (!entity) console.error(`Entity for ${entityRef} not found (entityId: ${entityId})`);
        if (entity.state === 'unavailable' || entity.state === 'unknown') return undefined;
        return entity;
    }
    getBoolConfigVal(key, defaultValue) {
        return this._config && key in this._config ? !!this._config[key] : defaultValue;
    }
    static{
        this.iconCache = new Map();
    }
    static async getInlineSVG(iconName) {
        if (!this.iconCache.has(iconName)) {
            const res = await fetch(`/hacsfiles/bosch-appliance-features/icons/${iconName}.svg?v=${(0, $db183fbae05d6b51$exports.version)}`);
            const svgText = (await res.text()).replace(/#000000|#000/g, 'currentColor');
            this.iconCache.set(iconName, svgText);
        }
        return this.iconCache.get(iconName);
    }
    shouldUpdate(changedProperties) {
        if (changedProperties.has('context') || changedProperties.has('_config')) return true;
        if (!changedProperties.has('hass')) return false;
        const oldHass = changedProperties.get('hass');
        if (!oldHass) return true; // first render
        let linkedEntityChanged = false;
        for (const entity of this.entities.values()){
            const entityId = `${entity.type}.${this.entityPrefix}_${entity.suffix}`;
            if (oldHass.states[entityId] !== this.hass?.states[entityId]) {
                linkedEntityChanged = true;
                break;
            }
        }
        if (linkedEntityChanged) {
            this.online = undefined;
            this.running = undefined;
        }
        return linkedEntityChanged;
    }
    static isSupported(hass, context) {
        console.log('isSupported: Context entity_id:', context.entity_id);
        const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
        if (!stateObj) return false;
        return this.isApplianceTypeSupported(stateObj, this.applianceType);
    }
    static isApplianceTypeSupported(stateObj, applianceType) {
        console.log('isApplianceTypeSupported: check for subtype:', applianceType);
        const deviceClass = stateObj.attributes.device_class?.toLowerCase() || '';
        const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || '';
        return deviceClass.startsWith('home_connect_alt_') && friendlyName.includes('bosch') && friendlyName.includes(applianceType);
    }
    constructor(...args){
        super(...args), this._entities = new Map();
    }
}












const $746d4ff12e3854a3$export$c61018cc7a2d300d = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`
  .settings {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .settings ha-settings-row {
    align-items: center;
    flex-wrap: wrap;
  }

  .settings ha-settings-row [slot='heading'] {
    font-weight: 500;
  }

  .settings ha-settings-row [slot='description'] {
    color: var(--secondary-text-color);
    max-width: 70%; /* zabrání, aby text přetékal pod přepínač */
    white-space: normal;
  }

  .settings ha-switch {
    margin-left: auto; /* udrží přepínač vpravo */
  }
`;



// import { IntlMessageFormat } from "intl-messageformat";
var $2b65a1b876bb1c9d$exports = {};
$2b65a1b876bb1c9d$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Programy my\u010Dky","editor":{"show_as_button_bar":{"title":"Zobrazit jako panel tla\u010D\xedtek","description":"Zobraz\xed programy jako horizont\xe1ln\xed panel tla\u010D\xedtek m\xedsto m\u0159\xed\u017Eky tla\u010D\xedtek."},"show_machinecare":{"title":"Zobrazit program Machine Care","description":"Zobraz\xed program Machine Care v seznamu dostupn\xfdch program\u016F."}}},"options":{"feature-name":"Mo\u017Enosti my\u010Dky","editor":{"show_as_button_bar":{"title":"Zobrazit jako panel tla\u010D\xedtek","description":"Zobraz\xed programy jako horizont\xe1ln\xed panel tla\u010D\xedtek m\xedsto m\u0159\xed\u017Eky tla\u010D\xedtek."}}},"time":{"feature-name":"Zb\xfdvaj\xedc\xed \u010Das my\u010Dky","editor":{"show_remaining_time":{"title":"Zobrazit zb\xfdvaj\xedc\xed \u010Das","description":"Zobraz\xed zb\xfdvaj\xedc\xed \u010Das m\xedsto \u010Dasu dokon\u010Den\xed"}}}},"oven":{"programs":{"feature-name":"Programy trouby"},"time":{"feature-name":"Zb\xfdvaj\xedc\xed \u010Das trouby"}}}');


var $76863c36101820a3$exports = {};
$76863c36101820a3$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Geschirrsp\xfcler-Programme","editor":{"show_as_button_bar":{"title":"Als Schaltfl\xe4chenleiste anzeigen","description":"Zeigt die Programme als horizontale Schaltfl\xe4chenleiste anstelle eines Rasters an."},"show_machinecare":{"title":"Maschinenpflege-Programm anzeigen","description":"Zeigt das Maschinenpflege-Programm in der Liste der verf\xfcgbaren Programme an."}}},"options":{"feature-name":"Geschirrsp\xfcler-Optionen","editor":{"show_as_button_bar":{"title":"Als Schaltfl\xe4chenleiste anzeigen","description":"Zeigt die Programme als horizontale Schaltfl\xe4chenleiste anstelle eines Rasters an."}}},"time":{"feature-name":"Geschirrsp\xfcler Restzeit","editor":{"show_remaining_time":{"title":"Restzeit anzeigen","description":"Zeigt die verbleibende Zeit anstelle der Endzeit an"}}}},"oven":{"programs":{"feature-name":"Backofen-Programme"},"time":{"feature-name":"Backofen Restzeit"}}}');


var $12255719fcb5db94$exports = {};
$12255719fcb5db94$exports = JSON.parse("{\"dishwasher\":{\"programs\":{\"feature-name\":\"Dishwasher programs\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Show as button bar\",\"description\":\"Show the programs as a horizontal button bar instead of a grid of buttons.\"},\"show_machinecare\":{\"title\":\"Show Machine Care program\",\"description\":\"Show the Machine Care program in the list of available programs.\"}}},\"options\":{\"feature-name\":\"Dishwasher options\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Show as button bar\",\"description\":\"Show the programs as a horizontal button bar instead of a grid of buttons.\"}}},\"time\":{\"feature-name\":\"Dishwasher time remaining\",\"editor\":{\"show_remaining_time\":{\"title\":\"Show remaining time\",\"description\":\"Show remaining time instead of finish time.\"}}}},\"oven\":{\"programs\":{\"feature-name\":\"Oven programs\"},\"time\":{\"feature-name\":\"Oven time remaining\"}}}");


var $cef4d15088828b93$exports = {};
$cef4d15088828b93$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Programas del lavavajillas","editor":{"show_as_button_bar":{"title":"Mostrar como barra de botones","description":"Muestra los programas como una barra horizontal de botones en lugar de una cuadr\xedcula."},"show_machinecare":{"title":"Mostrar programa de cuidado de m\xe1quina","description":"Muestra el programa de cuidado de m\xe1quina en la lista de programas disponibles."}}},"options":{"feature-name":"Opciones del lavavajillas","editor":{"show_as_button_bar":{"title":"Mostrar como barra de botones","description":"Muestra los programas como una barra horizontal de botones en lugar de una cuadr\xedcula."}}},"time":{"feature-name":"Tiempo restante del lavavajillas","editor":{"show_remaining_time":{"title":"Mostrar tiempo restante","description":"Muestra el tiempo restante en lugar de la hora de finalizaci\xf3n"}}}},"oven":{"programs":{"feature-name":"Programas del horno"},"time":{"feature-name":"Tiempo restante del horno"}}}');


var $f9190c022786ac10$exports = {};
$f9190c022786ac10$exports = JSON.parse("{\"dishwasher\":{\"programs\":{\"feature-name\":\"Programmes du lave-vaisselle\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Afficher comme barre de boutons\",\"description\":\"Affiche les programmes sous forme de barre horizontale de boutons au lieu d'une grille.\"},\"show_machinecare\":{\"title\":\"Afficher le programme d'entretien\",\"description\":\"Affiche le programme d'entretien dans la liste des programmes disponibles.\"}}},\"options\":{\"feature-name\":\"Options du lave-vaisselle\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Afficher comme barre de boutons\",\"description\":\"Affiche les programmes sous forme de barre horizontale de boutons au lieu d'une grille.\"}}},\"time\":{\"feature-name\":\"Temps restant du lave-vaisselle\",\"editor\":{\"show_remaining_time\":{\"title\":\"Afficher le temps restant\",\"description\":\"Affiche le temps restant au lieu de l'heure de fin\"}}}},\"oven\":{\"programs\":{\"feature-name\":\"Programmes du four\"},\"time\":{\"feature-name\":\"Temps restant du four\"}}}");


var $696ef0d177011e66$exports = {};
$696ef0d177011e66$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Mosogat\xf3g\xe9p programok","editor":{"show_as_button_bar":{"title":"Megjelen\xedt\xe9s gombsork\xe9nt","description":"A programokat v\xedzszintes gombsork\xe9nt jelen\xedti meg a r\xe1cs helyett."},"show_machinecare":{"title":"G\xe9ptiszt\xedt\xf3 program megjelen\xedt\xe9se","description":"Megjelen\xedti a g\xe9ptiszt\xedt\xf3 programot az el\xe9rhet\u0151 programok list\xe1j\xe1ban."}}},"options":{"feature-name":"Mosogat\xf3g\xe9p be\xe1ll\xedt\xe1sok","editor":{"show_as_button_bar":{"title":"Megjelen\xedt\xe9s gombsork\xe9nt","description":"A programokat v\xedzszintes gombsork\xe9nt jelen\xedti meg a r\xe1cs helyett."}}},"time":{"feature-name":"Mosogat\xf3g\xe9p h\xe1tral\xe9v\u0151 id\u0151","editor":{"show_remaining_time":{"title":"H\xe1tral\xe9v\u0151 id\u0151 megjelen\xedt\xe9se","description":"A h\xe1tral\xe9v\u0151 id\u0151t mutatja a befejez\xe9si id\u0151 helyett"}}}},"oven":{"programs":{"feature-name":"S\xfct\u0151 programok"},"time":{"feature-name":"S\xfct\u0151 h\xe1tral\xe9v\u0151 id\u0151"}}}');


var $f437c74ff9dd0ebe$exports = {};
$f437c74ff9dd0ebe$exports = JSON.parse("{\"dishwasher\":{\"programs\":{\"feature-name\":\"Programmi lavastoviglie\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Mostra come barra dei pulsanti\",\"description\":\"Mostra i programmi come barra orizzontale invece di una griglia di pulsanti.\"},\"show_machinecare\":{\"title\":\"Mostra programma di manutenzione\",\"description\":\"Mostra il programma di manutenzione nell'elenco dei programmi disponibili.\"}}},\"options\":{\"feature-name\":\"Opzioni lavastoviglie\",\"editor\":{\"show_as_button_bar\":{\"title\":\"Mostra come barra dei pulsanti\",\"description\":\"Mostra i programmi come barra orizzontale invece di una griglia di pulsanti.\"}}},\"time\":{\"feature-name\":\"Tempo rimanente lavastoviglie\",\"editor\":{\"show_remaining_time\":{\"title\":\"Mostra tempo rimanente\",\"description\":\"Mostra il tempo rimanente invece dell'ora di fine\"}}}},\"oven\":{\"programs\":{\"feature-name\":\"Programmi forno\"},\"time\":{\"feature-name\":\"Tempo rimanente forno\"}}}");


var $da3b756d4cd107ae$exports = {};
$da3b756d4cd107ae$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Programy zmywarki","editor":{"show_as_button_bar":{"title":"Poka\u017C jako pasek przycisk\xf3w","description":"Wy\u015Bwietla programy jako poziomy pasek przycisk\xf3w zamiast siatki."},"show_machinecare":{"title":"Poka\u017C program czyszczenia","description":"Wy\u015Bwietla program czyszczenia na li\u015Bcie dost\u0119pnych program\xf3w."}}},"options":{"feature-name":"Opcje zmywarki","editor":{"show_as_button_bar":{"title":"Poka\u017C jako pasek przycisk\xf3w","description":"Wy\u015Bwietla programy jako poziomy pasek przycisk\xf3w zamiast siatki."}}},"time":{"feature-name":"Pozosta\u0142y czas zmywarki","editor":{"show_remaining_time":{"title":"Poka\u017C pozosta\u0142y czas","description":"Pokazuje pozosta\u0142y czas zamiast czasu zako\u0144czenia"}}}},"oven":{"programs":{"feature-name":"Programy piekarnika"},"time":{"feature-name":"Pozosta\u0142y czas piekarnika"}}}');


var $edb4109659f67458$exports = {};
$edb4109659f67458$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Programas da m\xe1quina de lavar lou\xe7a","editor":{"show_as_button_bar":{"title":"Mostrar como barra de bot\xf5es","description":"Mostra os programas como uma barra horizontal de bot\xf5es em vez de uma grade."},"show_machinecare":{"title":"Mostrar programa de manuten\xe7\xe3o","description":"Mostra o programa de manuten\xe7\xe3o na lista de programas dispon\xedveis."}}},"options":{"feature-name":"Op\xe7\xf5es da m\xe1quina de lavar lou\xe7a","editor":{"show_as_button_bar":{"title":"Mostrar como barra de bot\xf5es","description":"Mostra os programas como uma barra horizontal de bot\xf5es em vez de uma grade."}}},"time":{"feature-name":"Tempo restante da m\xe1quina de lavar lou\xe7a","editor":{"show_remaining_time":{"title":"Mostrar tempo restante","description":"Mostra o tempo restante em vez da hora de t\xe9rmino"}}}},"oven":{"programs":{"feature-name":"Programas do forno"},"time":{"feature-name":"Tempo restante do forno"}}}');


var $b421de365e0a2097$exports = {};
$b421de365e0a2097$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"Programy um\xfdva\u010Dky","editor":{"show_as_button_bar":{"title":"Zobrazi\u0165 ako panel tla\u010Didiel","description":"Zobraz\xed programy ako horizont\xe1lny panel tla\u010Didiel namiesto mrie\u017Eky tla\u010Didiel."},"show_machinecare":{"title":"Zobrazi\u0165 program Machine Care","description":"Zobraz\xed program Machine Care v zozname dostupn\xfdch programov."}}},"options":{"feature-name":"Mo\u017Enosti um\xfdva\u010Dky","editor":{"show_as_button_bar":{"title":"Zobrazi\u0165 ako panel tla\u010Didiel","description":"Zobraz\xed programy ako horizont\xe1lny panel tla\u010Didiel namiesto mrie\u017Eky tla\u010Didiel."}}},"time":{"feature-name":"Zost\xe1vaj\xfaci \u010Das um\xfdva\u010Dky","editor":{"show_remaining_time":{"title":"Zobrazi\u0165 zost\xe1vaj\xfaci \u010Das","description":"Zobraz\xed zost\xe1vaj\xfaci \u010Das namiesto \u010Dasu ukon\u010Denia"}}}},"oven":{"programs":{"feature-name":"Programy r\xfary"},"time":{"feature-name":"Zost\xe1vaj\xfaci \u010Das r\xfary"}}}');


var $018b5e89128fe2ab$exports = {};
$018b5e89128fe2ab$exports = JSON.parse('{"dishwasher":{"programs":{"feature-name":"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u043E\u0457 \u043C\u0430\u0448\u0438\u043D\u0438","editor":{"show_as_button_bar":{"title":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u044F\u043A \u043F\u0430\u043D\u0435\u043B\u044C \u043A\u043D\u043E\u043F\u043E\u043A","description":"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u044F\u043A \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C \u043A\u043D\u043E\u043F\u043E\u043A \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u0441\u0456\u0442\u043A\u0438."},"show_machinecare":{"title":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0434\u043E\u0433\u043B\u044F\u0434\u0443","description":"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0434\u043E\u0433\u043B\u044F\u0434\u0443 \u0437\u0430 \u043C\u0430\u0448\u0438\u043D\u043E\u044E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C."}}},"options":{"feature-name":"\u041E\u043F\u0446\u0456\u0457 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u0438\u0439\u043D\u043E\u0457 \u043C\u0430\u0448\u0438\u043D\u0438","editor":{"show_as_button_bar":{"title":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u044F\u043A \u043F\u0430\u043D\u0435\u043B\u044C \u043A\u043D\u043E\u043F\u043E\u043A","description":"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0454 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u044F\u043A \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C \u043A\u043D\u043E\u043F\u043E\u043A \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u0441\u0456\u0442\u043A\u0438."}}},"time":{"feature-name":"\u0427\u0430\u0441 \u0434\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u043C\u0438\u0442\u0442\u044F","editor":{"show_remaining_time":{"title":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0447\u0430\u0441, \u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F","description":"\u041F\u043E\u043A\u0430\u0437\u0443\u0454 \u0447\u0430\u0441, \u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F, \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u0447\u0430\u0441\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F"}}}},"oven":{"programs":{"feature-name":"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u0434\u0443\u0445\u043E\u0432\u043A\u0438"},"time":{"feature-name":"\u0427\u0430\u0441 \u0434\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u0434\u0443\u0445\u043E\u0432\u043A\u0438"}}}');


const $f7e2ebf6156dc08b$var$languages = {
    cs: $2b65a1b876bb1c9d$exports,
    de: $76863c36101820a3$exports,
    en: $12255719fcb5db94$exports,
    es: $cef4d15088828b93$exports,
    fr: $f9190c022786ac10$exports,
    hu: $696ef0d177011e66$exports,
    it: $f437c74ff9dd0ebe$exports,
    pl: $da3b756d4cd107ae$exports,
    pt: $edb4109659f67458$exports,
    sk: $b421de365e0a2097$exports,
    uk: $018b5e89128fe2ab$exports
};
const $f7e2ebf6156dc08b$var$DEFAULT_LANG = 'en';
function $f7e2ebf6156dc08b$var$getTranslatedString(key, lang) {
    try {
        return key.split('.').reduce((o, i)=>o[i], $f7e2ebf6156dc08b$var$languages[lang]);
    } catch (_) {
        console.error('getTranslatedString exception: ', _);
        return undefined;
    }
}
function $f7e2ebf6156dc08b$export$2e2bcd8739ae039(hass) {
    return function(key) {
        //  return function (key: string, argObject: Record<string, any> = {}) {
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


class $fb3480942ad4693b$export$48c0d7e7463991d6 extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    renderBoolHaSettingsRow(key, defaultVal) {
        const customLocalize = (0, $f7e2ebf6156dc08b$export$2e2bcd8739ae039)(this.hass);
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <ha-settings-row>
        <div slot="heading" data-for="${key}">${customLocalize(`dishwasher.${this.feature}.editor.${key}.title`)}</div>
        <div slot="description" data-for="${key}">${customLocalize(`dishwasher.${this.feature}.editor.${key}.description`)}</div>
        <ha-switch id="${key}" name="${key}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(key, defaultVal)} />
      </ha-settings-row>
    `;
    }
    _onSettingChange(e) {
        const target = e.target;
        const key = target.id || target.name;
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
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
}


class $a3d36398cbb8abc5$export$5ad3d821964e0a36 extends (0, $fb3480942ad4693b$export$48c0d7e7463991d6) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)` <div class="settings">${this.renderBoolHaSettingsRow('show_as_button_bar', true)} ${this.renderBoolHaSettingsRow('show_machinecare', true)}</div> `;
    }
    static get styles() {
        return [
            (0, $746d4ff12e3854a3$export$c61018cc7a2d300d),
            (0, $041ae069d715ccb9$export$af47e28c29f4440b)
        ];
    }
    constructor(...args){
        super(...args), this.config = {
            type: 'custom:bosch-dishwasher-programs-feature'
        }, this.feature = 'time';
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
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-programs-editor')
], $a3d36398cbb8abc5$export$5ad3d821964e0a36);



const $3fccb9d4d2156306$var$supportsBoschDishwasherProgramsFeature = (stateObj)=>{
    return (0, $2eb7d861ff889d97$export$951251c678728e4c).isApplianceTypeSupported(stateObj, $3fccb9d4d2156306$export$2abebcf1e6123836.applianceType);
};
class $3fccb9d4d2156306$export$2abebcf1e6123836 extends (0, $2eb7d861ff889d97$export$951251c678728e4c) {
    static get applianceType() {
        return 'dishwasher';
    }
    set program(value) {
        const entityId = this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).programs)?.entity_id;
        console.log(`Setting ${entityId} to ${value}`);
        if (entityId && this.hass) this.hass.callService('select', 'select_option', {
            entity_id: entityId,
            option: value
        });
        else console.error(`Cannot set ${entityId} to ${value}`);
    }
    get programs() {
        if (this._programs.length === 0) {
            const modelName = 'SMV8YCX01E'; // TODO: get from cfg?
            const model = (0, $742472ad635a8957$export$77ffbca238424dbf)((0, $9f801a9b0647a670$export$f68c7b551368089d), modelName);
            if (model === undefined) {
                console.error(`Unsupported dishwasher model ${modelName}`);
                return [];
            }
            const modelGroup = (0, $9f801a9b0647a670$export$6a9a709409a04f84).get(model);
            if (modelGroup === undefined) {
                console.error(`Model group not defined for dishwasher model ${modelName}`);
                return [];
            }
            const programKeys = (0, $0494cbdc56524684$export$368c514ed486b088).get(modelGroup) || [];
            this._programs = programKeys.map((p)=>(0, $0494cbdc56524684$export$84f2729a00483f73).get(p)).filter(Boolean);
            if (this._programs.length === 0) console.error(`No programs associated with model ${modelName} found`);
        }
        return this._programs;
    }
    set programs(programs) {
        this._programs = programs;
    }
    setConfig(config) {
        if (!config) throw new Error('Invalid configuration');
        this._config = config;
        this.programs = [];
        this.classList.toggle('buttons', this._config.show_as_button_bar === true);
        this.classList.toggle('icons', this._config.show_as_button_bar !== true);
    }
    get program() {
        const program = this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).programs);
        return program ? program.state : null;
    }
    render() {
        if (!this._config || !this.hass || !this.context || !$3fccb9d4d2156306$export$2abebcf1e6123836.isSupported(this.hass, this.context)) return 0, $d33ef1320595a3ac$export$45b790e32b2810ee;
        const filteredPrograms = this.programs.filter((p)=>this.getBoolConfigVal('show_' + p.icon, true));
        return this._config.show_as_button_bar === true ? (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<ha-control-button-group> ${filteredPrograms.map((p)=>this.renderHaControlButton(p))} </ha-control-button-group>` : (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>${filteredPrograms.map((p)=>this.renderHaIconButton(p))}</div>`;
    }
    renderHaControlButton(program) {
        const svg = $3fccb9d4d2156306$export$2abebcf1e6123836.getInlineSVG(program.icon).then((svg)=>(0, $97d09910a4ba4421$export$b6e69390c23686fb)(svg));
        const disabled = !this.online || this.running;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <ha-control-button
        .value=${program.program}
        .disabled=${disabled}
        class="${program.program == this.program ? 'active' : ''}"
        title=${program.name}
        @click=${(e)=>this.changeProgram(e)}
      >
        <div class="icon-wrapper">${(0, $f35354e62b171f38$export$a40009bd2c363351)(svg, (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<ha-spinner size="small"></ha-spinner>`)}</div>
      </ha-control-button>
    `;
    }
    renderHaIconButton(program) {
        const svg = $3fccb9d4d2156306$export$2abebcf1e6123836.getInlineSVG(program.icon).then((svg)=>(0, $97d09910a4ba4421$export$b6e69390c23686fb)(svg));
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <ha-icon-button .label=${program.name} title=${program.name} value=${program.program} @click=${()=>this.changeProgram}>
        ${(0, $f35354e62b171f38$export$a40009bd2c363351)(svg, (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<ha-spinner size="small"></ha-spinner>`)}
      </ha-icon-button>
    `;
    }
    changeProgram(e) {
        const target = e.currentTarget;
        const value = target?.value;
        if (!value) return;
        this.program = value;
    }
    static get properties() {
        return {
            hass: {
                type: Object
            },
            config: {
                type: Object
            },
            context: {
                type: Object
            }
        };
    }
    static getConfigElement() {
        return document.createElement('bosch-dishwasher-programs-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:bosch-dishwasher-programs-feature',
            show_as_button_bar: true,
            show_machinecare: true
        };
    }
    static get styles() {
        return 0, $041ae069d715ccb9$export$864cc654a388aa38;
    }
    static getGridOptions() {
        return {
            min_rows: 1,
            min_columns: 12
        };
    }
    constructor(...args){
        super(...args), this.feature = (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_programs, this.entityPrefixLength = 2, this._programs = [];
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $3fccb9d4d2156306$export$2abebcf1e6123836.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $3fccb9d4d2156306$export$2abebcf1e6123836.prototype, "context", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $3fccb9d4d2156306$export$2abebcf1e6123836.prototype, "_config", void 0);
$3fccb9d4d2156306$export$2abebcf1e6123836 = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-programs-feature')
], $3fccb9d4d2156306$export$2abebcf1e6123836);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: 'bosch-dishwasher-programs-feature',
    name: 'Bosch Dishwasher Programs Panel',
    supported: $3fccb9d4d2156306$var$supportsBoschDishwasherProgramsFeature,
    configurable: true
});






const $d98ae74f16dab842$export$f0eb0d6ee1da2bba = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;
const $d98ae74f16dab842$export$1726954ff531d1cc = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;









class $c45b3a62a020e969$export$777b72c3156c0d7d extends (0, $fb3480942ad4693b$export$48c0d7e7463991d6) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)` <div class="settings">${this.renderBoolHaSettingsRow('show_as_button_bar', true)}</div> `;
    }
    static get styles() {
        return [
            (0, $746d4ff12e3854a3$export$c61018cc7a2d300d),
            (0, $d98ae74f16dab842$export$1726954ff531d1cc)
        ];
    }
    constructor(...args){
        super(...args), this.config = {
            type: 'custom:bosch-dishwasher-options-feature'
        }, this.feature = 'options';
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
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-options-editor')
], $c45b3a62a020e969$export$777b72c3156c0d7d);



const $77c64735a69c1828$var$supportsBoschDishwasherOptionsFeature = (stateObj)=>{
    return (0, $2eb7d861ff889d97$export$951251c678728e4c).isApplianceTypeSupported(stateObj, $77c64735a69c1828$export$80a2f62778bb11ea.applianceType);
};
class $77c64735a69c1828$export$80a2f62778bb11ea extends (0, $2eb7d861ff889d97$export$951251c678728e4c) {
    static get applianceType() {
        return 'dishwasher';
    }
    setConfig(config) {
        if (!config) throw new Error('Invalid configuration');
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass || !this.context || !$77c64735a69c1828$export$80a2f62778bb11ea.isSupported(this.hass, this.context)) return 0, $d33ef1320595a3ac$export$45b790e32b2810ee;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div class="toners"><div>Not implemented</div></div>`;
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
            type: 'custom:bosch-dishwasher-options-feature',
            show_as_button_bar: true
        };
    }
    static get styles() {
        return 0, $d98ae74f16dab842$export$f0eb0d6ee1da2bba;
    }
    constructor(...args){
        super(...args), this.feature = (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_options, this.entityPrefixLength = 2;
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "context", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $77c64735a69c1828$export$80a2f62778bb11ea.prototype, "_config", void 0);
$77c64735a69c1828$export$80a2f62778bb11ea = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-options-feature')
], $77c64735a69c1828$export$80a2f62778bb11ea);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: 'bosch-dishwasher-options-feature',
    name: 'Bosch Dishwasher Program Options Panel',
    supported: $77c64735a69c1828$var$supportsBoschDishwasherOptionsFeature,
    configurable: true
});







const $ae6a689dca82854d$export$bd393bd8bf11a424 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`
  :host {
    height: var(--feature-height, 42px);
    width: 100%;
    padding: 0px;
    outline: 0px;
    overflow: hidden;
  }

  .bosch-dishwasher-time-feature {
    display: flex;
    align-items: center; /* vertikální zarovnání */
    justify-content: space-between; /* mezery mezi prvky */
    gap: 8px; /* volitelně mezera mezi prvky */
    width: 100%;
    height: var(--feature-height, 42px);
  }

  .bosch-dishwasher-time-feature > * {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content; /* jen tolik místa, kolik obsah potřebuje */
  }

  .bosch-dishwasher-time-feature .time-graph {
    flex: 1; /* roztáhne se na zbylý prostor */
    position: relative;
    min-height: 11px;
    border-radius: 5px;

    border: 1px solid var(--tile-color);
    background-color: color-mix(in srgb, var(--tile-color) 70%, transparent);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }

  .bosh-dishwasher-time-feature .time-graph .level {
    height: 100%;
    background-color: var(--tile-color);
  }

  .bosh-dishwasher-time-feature .time-remaining {
    width: 35px;
    justify-content: flex-end; /* obsah zarovnán doprava */
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }
`;
const $ae6a689dca82854d$export$7a756a828eb685fc = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;










class $fc3158e92917286c$export$687095a8510429a6 extends (0, $fb3480942ad4693b$export$48c0d7e7463991d6) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)` <div class="settings">${this.renderBoolHaSettingsRow('show_remaining_time', true)}</div> `;
    }
    static get styles() {
        return [
            (0, $746d4ff12e3854a3$export$c61018cc7a2d300d),
            (0, $ae6a689dca82854d$export$7a756a828eb685fc)
        ];
    }
    constructor(...args){
        super(...args), this.config = {
            type: 'custom:bosch-dishwasher-time-feature'
        }, this.feature = 'program';
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $fc3158e92917286c$export$687095a8510429a6.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        type: Object
    })
], $fc3158e92917286c$export$687095a8510429a6.prototype, "config", void 0);
$fc3158e92917286c$export$687095a8510429a6 = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-time-editor')
], $fc3158e92917286c$export$687095a8510429a6);


const $e4104b77a0427686$var$supportsDishwasherTimeFeature = (stateObj)=>{
    return (0, $2eb7d861ff889d97$export$951251c678728e4c).isApplianceTypeSupported(stateObj, $e4104b77a0427686$export$7fc06ad2513928c.applianceType);
};
class $e4104b77a0427686$export$7fc06ad2513928c extends (0, $2eb7d861ff889d97$export$951251c678728e4c) {
    static get applianceType() {
        return 'dishwasher';
    }
    setConfig(config) {
        if (!config) throw new Error('Invalid configuration');
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass || !this.context || !$e4104b77a0427686$export$7fc06ad2513928c.isSupported(this.hass, this.context)) return 0, $d33ef1320595a3ac$export$45b790e32b2810ee;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <div class="bosch-dishwasher-time-feature">
        <ha-control-button .disabled=${!this.online} title=${this.running ? 'Pause' : 'Start'} @click=${this.action('start_pause')}>
          <ha-icon icon=${this.running ? 'mdi:pause' : 'mdi:play'}></ha-icon>
        </ha-control-button>
        <ha-control-button .disabled=${!this.online} title="Stop" } @click=${this.action('stop')}>
          <ha-icon icon="mdi:stop" }></ha-icon>
        </ha-control-button>
        <div class="time-graph">
          <div class="level" style="width: ${this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).program_progress)?.state ?? '0'}%;"></div>
        </div>
        <div class="time-remaining">${this.getTimeRemaining()}</div>
      </div>
    `;
    }
    action(action) {
        let entity = undefined;
        switch(action){
            case 'start_pause':
                entity = this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).start_pause);
                break;
            case 'stop':
                entity = this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).stop);
                break;
        }
        if (entity) this.hass?.callService('button', 'press', {
            entity_id: 'button.xyz'
        });
    }
    getTimeRemaining() {
        const remainingTime = this.getLinkedEntityState((0, $2bd9259198ca0bf4$export$46cdc11276e7e760).remaining_program_time);
        if (!remainingTime) return '0:00';
        const targetDate = new Date(remainingTime.state);
        const diffMs = Math.max(targetDate.getTime() - new Date().getTime(), 0);
        const totalMinutes = Math.floor(diffMs / 60000);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }
    static getConfigElement() {
        return document.createElement('bosch-dishwasher-time-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:bosch-dishwasher-time-feature',
            show_remaining_time: true
        };
    }
    static get styles() {
        return 0, $ae6a689dca82854d$export$bd393bd8bf11a424;
    }
    static getGridOptions() {
        return {
            min_rows: 1,
            min_columns: 6
        };
    }
    constructor(...args){
        super(...args), this.feature = (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).dishwasher_time, this.entityPrefixLength = 2;
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $e4104b77a0427686$export$7fc06ad2513928c.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $e4104b77a0427686$export$7fc06ad2513928c.prototype, "context", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $e4104b77a0427686$export$7fc06ad2513928c.prototype, "_config", void 0);
$e4104b77a0427686$export$7fc06ad2513928c = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-dishwasher-time-feature')
], $e4104b77a0427686$export$7fc06ad2513928c);
// Register the feature in the global customCardFeatures array
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: 'bosch-dishwasher-time-feature',
    name: 'Bosch Dishwasher Time Panel',
    supported: $e4104b77a0427686$var$supportsDishwasherTimeFeature,
    configurable: true
});








const $b23a93e7a594dc41$export$35ea47264c17a762 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;
const $b23a93e7a594dc41$export$b6505f99632eb968 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)``;








class $89202ea70c91c27a$export$5ccb48bf553800e4 extends (0, $fb3480942ad4693b$export$48c0d7e7463991d6) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)` <div class="settings">Nothing to configure</div> `;
    }
    static get styles() {
        return [
            (0, $746d4ff12e3854a3$export$c61018cc7a2d300d),
            (0, $b23a93e7a594dc41$export$b6505f99632eb968)
        ];
    }
    constructor(...args){
        super(...args), this.config = {
            type: 'custom:bosch-oven-controls-feature'
        }, this.feature = 'program';
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $89202ea70c91c27a$export$5ccb48bf553800e4.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        type: Object
    })
], $89202ea70c91c27a$export$5ccb48bf553800e4.prototype, "config", void 0);
$89202ea70c91c27a$export$5ccb48bf553800e4 = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-oven-controls-editor')
], $89202ea70c91c27a$export$5ccb48bf553800e4);


const $7e7c4cdb018aa395$var$supportsBoschOvenControlsFeature = (stateObj)=>{
    return (0, $2eb7d861ff889d97$export$951251c678728e4c).isApplianceTypeSupported(stateObj, $7e7c4cdb018aa395$export$45c23ac36f4762a4.applianceType);
};
class $7e7c4cdb018aa395$export$45c23ac36f4762a4 extends (0, $2eb7d861ff889d97$export$951251c678728e4c) {
    static get applianceType() {
        return 'oven';
    }
    setConfig(config) {
        if (!config) throw new Error('Invalid configuration');
        this._config = config;
    }
    /*
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_childlock
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_doorstate
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_interiorilluminationactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_localcontrolactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_remotecontrolactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_remotecontrolstartallowed
binary_sensor.bosch_hsg636xs6_68a40e80aee4_connected
binary_sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_fastpreheat
binary_sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_setting_sabbathmode
button.bosch_hsg636xs6_68a40e80aee4_start_pause
button.bosch_hsg636xs6_68a40e80aee4_stop
number.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_alarmclock
number.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_setpointtemperature
select.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_powerstate
select.bosch_hsg636xs6_68a40e80aee4_programs
sensor.bosch_hsg636xs6_68a40e80aee4_active_program
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_duration
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_elapsedprogramtime
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_programprogress
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_startinrelative
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_alarmclock
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_powerstate
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_operationstate
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_setpointtemperature
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_steamassistlevel
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_weight
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_status_currentcavitytemperature
switch.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_childlock
switch.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_fastpreheat
switch.bosch_hsg636xs6_68a40e80aee4_cooking_oven_setting_sabbathmode
*/ render() {
        if (!this._config || !this.hass || !this.context || !$7e7c4cdb018aa395$export$45c23ac36f4762a4.isSupported(this.hass, this.context)) return 0, $d33ef1320595a3ac$export$45b790e32b2810ee;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div class="toners"><div>Not implemented</div></div>`;
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
        return document.createElement('bosch-oven-controls-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:bosch-oven-controls-feature'
        };
    }
    static getGridOptions() {
        return {
            min_rows: 1,
            min_columns: 12
        };
    }
    static get styles() {
        return 0, $b23a93e7a594dc41$export$35ea47264c17a762;
    }
    constructor(...args){
        super(...args), this.feature = (0, $c302abf7983a4985$export$4ad3a6a09fb2916f).oven_controls, this.entityPrefixLength = 3;
    }
}
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $7e7c4cdb018aa395$export$45c23ac36f4762a4.prototype, "hass", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $80d080f0d3adcf1c$export$d541bacb2bda4494)({
        attribute: false
    })
], $7e7c4cdb018aa395$export$45c23ac36f4762a4.prototype, "context", void 0);
(0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $0ede0742a0fa7bbd$export$ca000e230c0caa3e)()
], $7e7c4cdb018aa395$export$45c23ac36f4762a4.prototype, "_config", void 0);
$7e7c4cdb018aa395$export$45c23ac36f4762a4 = (0, $bb166217b384746d$export$29e00dfd3077644b)([
    (0, $4af75e4a7ed8f584$export$da64fc29f17f9d0e)('bosch-oven-controls-feature')
], $7e7c4cdb018aa395$export$45c23ac36f4762a4);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: 'bosch-oven-controls-feature',
    name: 'Bosch Oven Controls Panel',
    supported: $7e7c4cdb018aa395$var$supportsBoschOvenControlsFeature,
    configurable: true
});


const $4ce9dd84d19e7dd4$var$commonStyle = 'padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;';
const $4ce9dd84d19e7dd4$var$nameStyle = `background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${$4ce9dd84d19e7dd4$var$commonStyle}`;
const $4ce9dd84d19e7dd4$var$versionStyle = `background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${$4ce9dd84d19e7dd4$var$commonStyle}`;
console.groupCollapsed(`%c${(0, $db183fbae05d6b51$exports.displayName)}%c${(0, $db183fbae05d6b51$exports.version)}`, $4ce9dd84d19e7dd4$var$nameStyle, $4ce9dd84d19e7dd4$var$versionStyle);
console.info((0, $db183fbae05d6b51$exports.description));
console.info(`Github: ${(0, $db183fbae05d6b51$exports.repository).url}`);
console.groupEnd();


