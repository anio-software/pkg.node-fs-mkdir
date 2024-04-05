import {mkdir} from "@anio-fs/api/async"

export default async function(path, mode) {
	let options = {
		recursive: true
	}

	if (mode !== null) {
		options.mode = mode
	}

	await mkdir(path, options)
}
