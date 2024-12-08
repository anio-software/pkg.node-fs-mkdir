import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

/**
 * @brief Asynchronously create directory with parents.
//> * @brief Synchronously create directory with parents.
 * @description
 * Asynchronously creates the directory `path` with its parents
//> * Synchronously creates the directory `path` with its parents
 * if they don't exist.
 * @param path Directory to be created.
 * @param mode Mode to be set when creating directories (optional).
 */
import {mkdir} from "@aniojs-private/node-async-sync-fs/async"
//>import {mkdir} from "@aniojs-private/node-async-sync-fs/sync"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string,
	mode?: number
) : Promise<undefined> {
//>) : undefined {
	const context = useContext(wrapped_context, 0)

	let options : Record<string, any> = {
		recursive: true
	}

	if (typeof mode !== "undefined") {
		options.mode = mode
	}

	await mkdir(path, options)
//>	mkdir(path, options)
}
