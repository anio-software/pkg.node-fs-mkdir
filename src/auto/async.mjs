export default async function(fs_object, path, mode) {
	let options = {
		recursive: true
	}

	if (mode !== null) {
		options.mode = mode
	}

	await fs_object.mkdir(path, options)
}
