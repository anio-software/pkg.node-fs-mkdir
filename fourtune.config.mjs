import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "node"
		}
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/__mkdirpXXX.as.mts",
			export_name: "mkdirpXXX",
			destination: "src/export"
		})
	}
}
