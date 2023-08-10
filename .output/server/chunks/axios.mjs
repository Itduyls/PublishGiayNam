import { defineEventHandler } from 'h3';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const axios = defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public;
  const datalists = ref();
  await $fetch(
    baseURL.apiBase + "/api/Cache/GetPublicToken?StrToken=" + useRuntimeConfig().toKen
  );
  return datalists;
});

export { axios as default };
//# sourceMappingURL=axios.mjs.map
