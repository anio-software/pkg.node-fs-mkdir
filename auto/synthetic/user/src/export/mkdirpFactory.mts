import {implementation} from "#~synthetic/async.sync/mkdirp.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
/* couldn't find a user defined type named 'Record' at the top level */
// ^^^--- types needed for implementation

declare function mkdirp(
	path: string,
	mode?: number
) : Promise<undefined>

/**
 * @brief
 * Create an instance of the function 'mkdirp'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'mkdirp'.
 */
export function mkdirpFactory(context: RuntimeWrappedContextInstance) : typeof mkdirp {
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

	return async function mkdirp(path: string, mode?: number) : Promise<undefined> {
		return await implementation(local_context, path, mode)
	}
}
