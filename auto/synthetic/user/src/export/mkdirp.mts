import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
/* couldn't find a user defined type named 'Record' at the top level */
// ^^^--- types needed for implementation

import {mkdirpFactory as factory} from "#~synthetic/user/export/mkdirpFactory.mts"

let __fnImplementation: any = null

export async function mkdirp(path: string, mode?: number) : Promise<undefined> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(path, mode)
}
