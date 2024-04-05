import {mkdir} from "@anio-fs/api/sync"

export default function(path, mode) {
	let options = {
		recursive: true
	}

	if (mode !== null) {
		options.mode = mode
	}

	mkdir(path, options)
}
