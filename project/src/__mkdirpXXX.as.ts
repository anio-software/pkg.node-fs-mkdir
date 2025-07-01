import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import type {MakeDirectoryPOptions as Options} from "#~export/MakeDirectoryPOptions.ts"
//>import type {MakeDirectoryPSyncOptions as Options} from "#~export/MakeDirectoryPSyncOptions.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	pathToCreate: string,
	options?: Options|undefined
): Promise<boolean> {
//>): boolean {
	return false
}
