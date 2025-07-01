import {mkdirSyncFactory, mkdirpSyncFactory} from "../products/project/dist/default/index.mjs"
import {defineContextOptions} from "@anio-software/enkore.js-runtime"
import {getProject} from "@anio-software/enkore.target-js-node/project"

const contextOptions = defineContextOptions({
	project: getProject(),
	shouldLog() {
		return true
	}
})

const mkdir = mkdirSyncFactory(contextOptions)
const mkdirp = mkdirpSyncFactory(contextOptions)

console.log(mkdir("/tmp/this/is/a/test"))
console.log(mkdirp("/tmp/this/is/a/test"))
