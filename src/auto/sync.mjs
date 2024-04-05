export default function(fs_object, path, mode) {
	let options = {
		recursive: true
	}

	if (mode !== null) {
		options.mode = mode
	}

	fs_object.mkdir(path, options)
}
