globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "http://45.117.179.131:4343/",
    "otherUrl": "http://45.117.179.131:4343/",
    "toKen": "vYIrl2C30cdvhjyroM0HYQr2fs7cNo9Qx01g8P1nPIS7joDA",
    "SecretKey": "1012198815021989",
    "publictoken": "ZeiCsoE1M7hmz1lzmjU7WLIvGOOU/LEIGyxYT2HlWzmW2tNaMpYSn+c/DyXx+QKHDOdiAxwqYqorpcrgvgyDCp7lxt5HpENBD8kzikqjunb5grYabietoS5COYOFPE5iaXIvux4bYGn0C8RXba+pc0B062Ncurnuj8iwRCkXNUHWIXtYxM3yGJh7I+3chpcEfjIEmckJdDRALTGXUhN8h+NqbySHCB4c5T7J3626w4V9cgLBH2/0Gnc4+xxRyN20ttt6qqdR2y2cIkkCw8YxrU8lqZyFj27Z95HWIi4jo7c="
  },
  "apiSecret": "1012198815021989"
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-o2UFFtVchRnmXEzaRVlz9f8We0c\"",
    "mtime": "2023-07-15T13:16:07.046Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/adminlayout.a9d83381.js": {
    "type": "application/javascript",
    "etag": "\"bb-5i69xPc1DkdrnMlTUQuaPEZnsKk\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 187,
    "path": "../public/_nuxt/adminlayout.a9d83381.js"
  },
  "/_nuxt/asyncData.090faa5e.js": {
    "type": "application/javascript",
    "etag": "\"afc-VtJ+Fx961SP9cy8W4vixqNewZEQ\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 2812,
    "path": "../public/_nuxt/asyncData.090faa5e.js"
  },
  "/_nuxt/checkbox.esm.7ca7b5b9.js": {
    "type": "application/javascript",
    "etag": "\"46a6-G3UtBTcBaQkYNYKgvxFNk3IJVSA\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 18086,
    "path": "../public/_nuxt/checkbox.esm.7ca7b5b9.js"
  },
  "/_nuxt/chip.esm.737eab89.js": {
    "type": "application/javascript",
    "etag": "\"82e-CJHr8x2UOsR8mr2GbryWAthtTu8\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 2094,
    "path": "../public/_nuxt/chip.esm.737eab89.js"
  },
  "/_nuxt/column.esm.167ad6a7.js": {
    "type": "application/javascript",
    "etag": "\"79b-bCL8p3KQf9xMXi9PAiNzvjUqkhw\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 1947,
    "path": "../public/_nuxt/column.esm.167ad6a7.js"
  },
  "/_nuxt/datatable.esm.91271ca1.js": {
    "type": "application/javascript",
    "etag": "\"29e8a-+s9MlX90UacfM9WHqNAR9rc2HPY\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 171658,
    "path": "../public/_nuxt/datatable.esm.91271ca1.js"
  },
  "/_nuxt/dataview.esm.3d9cecee.js": {
    "type": "application/javascript",
    "etag": "\"1cbf-DiAD+THrv8oDk2SkxW1hzAQvRN0\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 7359,
    "path": "../public/_nuxt/dataview.esm.3d9cecee.js"
  },
  "/_nuxt/default.6e3635a1.js": {
    "type": "application/javascript",
    "etag": "\"2d21-eJgIFMmqKrdDzKR3+rEhy4gffgw\"",
    "mtime": "2023-08-10T12:49:30.436Z",
    "size": 11553,
    "path": "../public/_nuxt/default.6e3635a1.js"
  },
  "/_nuxt/default.ec0d612c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de1-m1rBNgH08+fuYswalTn/yms+YbM\"",
    "mtime": "2023-08-10T12:49:30.429Z",
    "size": 7649,
    "path": "../public/_nuxt/default.ec0d612c.css"
  },
  "/_nuxt/dialog.esm.2590785c.js": {
    "type": "application/javascript",
    "etag": "\"6811-QJxMxihg4hIY+r9VjYx6M5Na1Ac\"",
    "mtime": "2023-08-10T12:49:30.432Z",
    "size": 26641,
    "path": "../public/_nuxt/dialog.esm.2590785c.js"
  },
  "/_nuxt/editor.esm.0020aa64.js": {
    "type": "application/javascript",
    "etag": "\"7c03-RyFJGORPKxNksZSdf77AJN///nU\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 31747,
    "path": "../public/_nuxt/editor.esm.0020aa64.js"
  },
  "/_nuxt/entry.f5a07536.js": {
    "type": "application/javascript",
    "etag": "\"57770-Q6AQ0YuX9P9IoDg4tTUYTAaL7X0\"",
    "mtime": "2023-08-10T12:49:30.447Z",
    "size": 358256,
    "path": "../public/_nuxt/entry.f5a07536.js"
  },
  "/_nuxt/entry.fec43701.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3234-JDC+DhODYNm/Yf/23wekIDCtouA\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 12852,
    "path": "../public/_nuxt/entry.fec43701.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.6c8536a6.js": {
    "type": "application/javascript",
    "etag": "\"8d2-SeLcq9vMeamhZHImzcs804LVwZY\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.6c8536a6.js"
  },
  "/_nuxt/error-500.1625dbce.js": {
    "type": "application/javascript",
    "etag": "\"756-GyL2TMurMgihznPM5hTGeOGalmU\"",
    "mtime": "2023-08-10T12:49:30.436Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.1625dbce.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/favicon.298222c1.js": {
    "type": "application/javascript",
    "etag": "\"6c-QfxHtCzOcDlgWoiKmHt3YgjjvQk\"",
    "mtime": "2023-08-10T12:49:30.429Z",
    "size": 108,
    "path": "../public/_nuxt/favicon.298222c1.js"
  },
  "/_nuxt/favicon.39dcade5.png": {
    "type": "image/png",
    "etag": "\"2a662-VNyPlgIzWAJ2rZHsX0MpStxgafQ\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 173666,
    "path": "../public/_nuxt/favicon.39dcade5.png"
  },
  "/_nuxt/fileupload.esm.8cf01fcf.js": {
    "type": "application/javascript",
    "etag": "\"18be6-5k7F3oOGjVFHtUdbLptqHH/5lDQ\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 101350,
    "path": "../public/_nuxt/fileupload.esm.8cf01fcf.js"
  },
  "/_nuxt/Headbar.27e94c73.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e6d-QM14XxK3cqPQw9LVcC20eh6IIow\"",
    "mtime": "2023-08-10T12:49:30.428Z",
    "size": 7789,
    "path": "../public/_nuxt/Headbar.27e94c73.css"
  },
  "/_nuxt/Headbar.8905abfb.js": {
    "type": "application/javascript",
    "etag": "\"226f-T+sERvGc4GdpT++wu0em2rT0Am8\"",
    "mtime": "2023-08-10T12:49:30.437Z",
    "size": 8815,
    "path": "../public/_nuxt/Headbar.8905abfb.js"
  },
  "/_nuxt/index.07195433.js": {
    "type": "application/javascript",
    "etag": "\"18ca4-d8cwSEgChimNcxMkyo3ryXffqjM\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 101540,
    "path": "../public/_nuxt/index.07195433.js"
  },
  "/_nuxt/index.10857bf0.js": {
    "type": "application/javascript",
    "etag": "\"865-O1nOo7ZaDnbABjH6Vk9WwKdbTgU\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 2149,
    "path": "../public/_nuxt/index.10857bf0.js"
  },
  "/_nuxt/index.14d3a4ef.js": {
    "type": "application/javascript",
    "etag": "\"255-ibFNuWMCCMtekn5+TzM3wcqiimg\"",
    "mtime": "2023-08-10T12:49:30.429Z",
    "size": 597,
    "path": "../public/_nuxt/index.14d3a4ef.js"
  },
  "/_nuxt/index.19a1591a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11a-EsYujYVSzCvTyqJasYkcwsyXqTs\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 282,
    "path": "../public/_nuxt/index.19a1591a.css"
  },
  "/_nuxt/index.2590e19b.js": {
    "type": "application/javascript",
    "etag": "\"75f-MyZwmmxFxIj2MaSEgNpRERSkHNE\"",
    "mtime": "2023-08-10T12:49:30.429Z",
    "size": 1887,
    "path": "../public/_nuxt/index.2590e19b.js"
  },
  "/_nuxt/index.3baad21f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a4-wfZBbmhhJFRWZDY2qehpS4/6gQA\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 1700,
    "path": "../public/_nuxt/index.3baad21f.css"
  },
  "/_nuxt/index.585e7911.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11a-e5+vLHgAxXNPP0fk5G/n9zpr/tc\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 282,
    "path": "../public/_nuxt/index.585e7911.css"
  },
  "/_nuxt/index.6f36121c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11f-+m70u5n3rFkATUjIUMRMxgKKqWc\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 287,
    "path": "../public/_nuxt/index.6f36121c.css"
  },
  "/_nuxt/index.76d440f2.js": {
    "type": "application/javascript",
    "etag": "\"cae9-SaXfg2ZjtDcFf54paqugEC01ERI\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 51945,
    "path": "../public/_nuxt/index.76d440f2.js"
  },
  "/_nuxt/index.7f08d9f9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"86b-Uoil3DJ1ULr3pKAEKaR8LfdFytc\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 2155,
    "path": "../public/_nuxt/index.7f08d9f9.css"
  },
  "/_nuxt/index.8b4044a1.js": {
    "type": "application/javascript",
    "etag": "\"5282-bGNEWYar/vfVOwHhBMxrrzad3q0\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 21122,
    "path": "../public/_nuxt/index.8b4044a1.js"
  },
  "/_nuxt/index.99648ad5.js": {
    "type": "application/javascript",
    "etag": "\"4873-8CFK3GwZpKG1IKdIwwKAqPJzNE4\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 18547,
    "path": "../public/_nuxt/index.99648ad5.js"
  },
  "/_nuxt/index.a42be372.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"308-Td80JorVXzzG7nPDewp+QsgXtHg\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 776,
    "path": "../public/_nuxt/index.a42be372.css"
  },
  "/_nuxt/index.a9e6651a.js": {
    "type": "application/javascript",
    "etag": "\"abcb-HICYW3juVTpYIzHCPqeAk7ly1XE\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 43979,
    "path": "../public/_nuxt/index.a9e6651a.js"
  },
  "/_nuxt/index.bab6720e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a0-6rDm4eZz97YCV9cFNgdsKNH2gBw\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 1440,
    "path": "../public/_nuxt/index.bab6720e.css"
  },
  "/_nuxt/index.ecfe4517.js": {
    "type": "application/javascript",
    "etag": "\"bbae-6FQ0Lep+LFIEC7szmSk6cBmalgw\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 48046,
    "path": "../public/_nuxt/index.ecfe4517.js"
  },
  "/_nuxt/index.esm.225d1033.js": {
    "type": "application/javascript",
    "etag": "\"3d7-i9mVn8tUBmWtU+3JU3Si+N7PiAI\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 983,
    "path": "../public/_nuxt/index.esm.225d1033.js"
  },
  "/_nuxt/index.esm.67f03e0c.js": {
    "type": "application/javascript",
    "etag": "\"729-it9y3Exf7fBZnfOU/UK/eVtaUOY\"",
    "mtime": "2023-08-10T12:49:30.429Z",
    "size": 1833,
    "path": "../public/_nuxt/index.esm.67f03e0c.js"
  },
  "/_nuxt/index.esm.b76f7341.js": {
    "type": "application/javascript",
    "etag": "\"80f-gZVp69JpuWYUwHeT1ONLDE+OPxI\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 2063,
    "path": "../public/_nuxt/index.esm.b76f7341.js"
  },
  "/_nuxt/index.esm.d51ffea6.js": {
    "type": "application/javascript",
    "etag": "\"ef82-ai/D8qHeAkap0u+hrj+dqf6tXxc\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 61314,
    "path": "../public/_nuxt/index.esm.d51ffea6.js"
  },
  "/_nuxt/index.esm.f4b8960c.js": {
    "type": "application/javascript",
    "etag": "\"2b66-PEpcC0RWj3yHTHK68R6Ybbiu8Fk\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 11110,
    "path": "../public/_nuxt/index.esm.f4b8960c.js"
  },
  "/_nuxt/index.esm.f7bc3c82.js": {
    "type": "application/javascript",
    "etag": "\"188c-ype1OCIUbuz9c4o7oXqLQMuIR1E\"",
    "mtime": "2023-08-10T12:49:30.436Z",
    "size": 6284,
    "path": "../public/_nuxt/index.esm.f7bc3c82.js"
  },
  "/_nuxt/LoginView.78d7a22f.js": {
    "type": "application/javascript",
    "etag": "\"14f0c-BoRU/imq80+auGQMRluzBIYUrKg\"",
    "mtime": "2023-08-10T12:49:30.443Z",
    "size": 85772,
    "path": "../public/_nuxt/LoginView.78d7a22f.js"
  },
  "/_nuxt/LoginView.8cc3568f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1046-BpNi3VyS03E7jRuP484P779PIG0\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 4166,
    "path": "../public/_nuxt/LoginView.8cc3568f.css"
  },
  "/_nuxt/new.e5fa6eff.jpg": {
    "type": "image/jpeg",
    "etag": "\"36d6-IU9K+OTegO7gfaQTqw87XV7v6R8\"",
    "mtime": "2023-08-10T12:49:30.423Z",
    "size": 14038,
    "path": "../public/_nuxt/new.e5fa6eff.jpg"
  },
  "/_nuxt/nodata.5884fd54.png": {
    "type": "image/png",
    "etag": "\"51bb-WALJ4U2uVJOBEXGLpBcStSpMZrk\"",
    "mtime": "2023-08-10T12:49:30.422Z",
    "size": 20923,
    "path": "../public/_nuxt/nodata.5884fd54.png"
  },
  "/_nuxt/nuxt-link.9006b8ce.js": {
    "type": "application/javascript",
    "etag": "\"1107-K0zIaupJWCh3tHEgPZX87S4u95I\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 4359,
    "path": "../public/_nuxt/nuxt-link.9006b8ce.js"
  },
  "/_nuxt/paginator.esm.82549e9d.js": {
    "type": "application/javascript",
    "etag": "\"1b681-j7JZjKuMjKlCGpnDjRmciR91Av0\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 112257,
    "path": "../public/_nuxt/paginator.esm.82549e9d.js"
  },
  "/_nuxt/primeicons.131bc3bf.ttf": {
    "type": "font/ttf",
    "etag": "\"11a0c-zutG1ZT95cxQfN+LcOOOeP5HZTw\"",
    "mtime": "2023-08-10T12:49:30.422Z",
    "size": 72204,
    "path": "../public/_nuxt/primeicons.131bc3bf.ttf"
  },
  "/_nuxt/primeicons.3824be50.woff2": {
    "type": "font/woff2",
    "etag": "\"75e4-VaSypfAuNiQF2Nh0kDrwtfamwV0\"",
    "mtime": "2023-08-10T12:49:30.422Z",
    "size": 30180,
    "path": "../public/_nuxt/primeicons.3824be50.woff2"
  },
  "/_nuxt/primeicons.5e10f102.svg": {
    "type": "image/svg+xml",
    "etag": "\"4727e-0zMqRSQrj27b8/PHF2ooDn7c2WE\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 291454,
    "path": "../public/_nuxt/primeicons.5e10f102.svg"
  },
  "/_nuxt/primeicons.90a58d3a.woff": {
    "type": "font/woff",
    "etag": "\"11a58-sWSLUL4TNQ/ei12ab+eDVN3MQ+Q\"",
    "mtime": "2023-08-10T12:49:30.424Z",
    "size": 72280,
    "path": "../public/_nuxt/primeicons.90a58d3a.woff"
  },
  "/_nuxt/primeicons.ce852338.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"11abc-5N8jVcQFzTiq2jbtqQFagQ/quUw\"",
    "mtime": "2023-08-10T12:49:30.421Z",
    "size": 72380,
    "path": "../public/_nuxt/primeicons.ce852338.eot"
  },
  "/_nuxt/quill.6b7ae699.js": {
    "type": "application/javascript",
    "etag": "\"34f33-/akl1sHIUUee2hqbY2jprrbWC0Q\"",
    "mtime": "2023-08-10T12:49:30.448Z",
    "size": 216883,
    "path": "../public/_nuxt/quill.6b7ae699.js"
  },
  "/_nuxt/Roboto-Regular.bde8a188.ttf": {
    "type": "font/ttf",
    "etag": "\"1ec78-gktUgMl3qBZuF35TV9ExZMzEX0c\"",
    "mtime": "2023-08-10T12:49:30.422Z",
    "size": 126072,
    "path": "../public/_nuxt/Roboto-Regular.bde8a188.ttf"
  },
  "/_nuxt/sidebar.esm.e7492a36.js": {
    "type": "application/javascript",
    "etag": "\"2829-KQr+49cQfZhlTSyVFTpZWIG53iE\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 10281,
    "path": "../public/_nuxt/sidebar.esm.e7492a36.js"
  },
  "/_nuxt/toolbar.esm.6c6ac948.js": {
    "type": "application/javascript",
    "etag": "\"534-VfhaN0lq388BPQheQ3gt7Tx96c4\"",
    "mtime": "2023-08-10T12:49:30.430Z",
    "size": 1332,
    "path": "../public/_nuxt/toolbar.esm.6c6ac948.js"
  },
  "/_nuxt/treeselect.esm.a6cf84a4.js": {
    "type": "application/javascript",
    "etag": "\"a462-zj/U2YNvEcsPB1P/o0zyET++W50\"",
    "mtime": "2023-08-10T12:49:30.439Z",
    "size": 42082,
    "path": "../public/_nuxt/treeselect.esm.a6cf84a4.js"
  },
  "/_nuxt/treetable.esm.1123365d.js": {
    "type": "application/javascript",
    "etag": "\"eb71-9LUt13Ev4UPE9oGGvAiQ62/DLJ4\"",
    "mtime": "2023-08-10T12:49:30.440Z",
    "size": 60273,
    "path": "../public/_nuxt/treetable.esm.1123365d.js"
  },
  "/_nuxt/_tag_.1bb85a10.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"be-n0hZb5P89nrq4s4ajEIJJS5Cieg\"",
    "mtime": "2023-08-10T12:49:30.417Z",
    "size": 190,
    "path": "../public/_nuxt/_tag_.1bb85a10.css"
  },
  "/_nuxt/_tag_.fd763365.js": {
    "type": "application/javascript",
    "etag": "\"5c4-myttsR5pg6jy0VYk19iapaJg5HA\"",
    "mtime": "2023-08-10T12:49:30.436Z",
    "size": 1476,
    "path": "../public/_nuxt/_tag_.fd763365.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_KbmOl0 = () => import('../axios.mjs');
const _lazy_JPVXEA = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/axios', handler: _lazy_KbmOl0, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_JPVXEA, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_JPVXEA, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
