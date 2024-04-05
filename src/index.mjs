import fs from "@anio-fs/api"

import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function mkdirp(path, mode = null) {
	return async_impl(fs.async, path, mode)
}

export function mkdirpSync(path, mode = null) {
	return sync_impl(fs.sync, path, mode)
}
