import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

/**
 * @brief Asynchronously create directory with parents.
 * @description
 * Asynchronously creates the directory `path` with its parents
 * if they don't exist.
 * @param path Directory to be created.
 * @param mode Mode to be set when creating directories (optional).
 */
import {mkdir} from "@aniojs-private/node-async-sync-fs/async"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string,
	mode?: number
) : Promise<undefined> {
	const context = useContext(wrapped_context, 0)

	let options : Record<string, any> = {
		recursive: true
	}

	if (typeof mode !== "undefined") {
		options.mode = mode
	}

	await mkdir(path, options)
}
