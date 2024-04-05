import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"import {mkdir} from \"@anio-fs/api/async\"": "import {mkdir} from \"@anio-fs/api/sync\"",
	"export default async function(": "export default function(",
	"await mkdir": "mkdir"
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
