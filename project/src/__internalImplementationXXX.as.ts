import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {isNumber} from "@anio-software/pkg.is"
import {getOrCreateError} from "@anio-software/pkg.js-utils"
import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/sync"

type Options = {
	mode: number|undefined
	recursive: boolean
}

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	pathToCreate: string,
	options: Options
): Promise<boolean> {
//>): boolean {
	const context = createContext(contextOptions, 0)
	const recurse = options.recursive === true

	try {
		const modeToUse = isNumber(options.mode) ? options.mode : 0o755

		context.log.debug(
			`creating directory '${pathToCreate}' with mode '0o${modeToUse.toString(8)}'` +
			` and recursion set to '${recurse ? "yes" : "no"}'`
		)

		await mkdir(pathToCreate, {
//>		mkdir(pathToCreate, {
			mode: modeToUse,
			recursive: recurse
		})

		return true
	} catch (e) {
		const error = getOrCreateError(e)

		context.log.warn(`caught exception '${error.message}' while trying to create directory '${pathToCreate}'.`)

		return false
	}
}
