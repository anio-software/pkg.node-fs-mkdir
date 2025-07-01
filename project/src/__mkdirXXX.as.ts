import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import type {MakeDirectoryOptions as Options} from "#~export/MakeDirectoryOptions.ts"
//>import type {MakeDirectorySyncOptions as Options} from "#~export/MakeDirectorySyncOptions.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	pathToCreate: string,
	options?: Options|undefined
): Promise<boolean> {
//>): boolean {
	return false
}
