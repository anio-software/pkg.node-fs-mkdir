import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import type {MakeDirectoryOptions as Options} from "#~export/MakeDirectoryOptions.ts"
//>import type {MakeDirectorySyncOptions as Options} from "#~export/MakeDirectorySyncOptions.ts"

import {__implementation as impl} from "#~src/internalImplementation.ts"
//>import {__implementationSync as impl} from "#~src/internalImplementationSync.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	pathToCreate: string,
	options?: Options|undefined
): Promise<boolean> {
//>): boolean {
	return await impl(
//>	return impl(
		contextOptions,
		pathToCreate,
		{
			mode: options?.mode,
			recursive: false
		}
	)
}
