import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Record' at the top level */
// ^^^--- types needed for implementation

import {mkdirpSyncFactory as factory} from "#~synthetic/user/export/mkdirpSyncFactory.mts"

let __fnImplementation: any = null

export function mkdirpSync(path: string, mode?: number) : undefined {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(path, mode)
}
