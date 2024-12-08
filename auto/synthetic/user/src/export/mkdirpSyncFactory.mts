import {implementation} from "#~synthetic/async.sync/mkdirpSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Record' at the top level */
// ^^^--- types needed for implementation

declare function mkdirpSync(
	path: string,
	mode: number
) : undefined

/**
 * @brief
 * Create an instance of the function 'mkdirpSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'mkdirpSync'.
 */
export function mkdirpSyncFactory(context: RuntimeWrappedContextInstance) : typeof mkdirpSync {
	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return function mkdirpSync(path: string, mode: number) : undefined {
		return implementation(local_context, path, mode)
	}
}
