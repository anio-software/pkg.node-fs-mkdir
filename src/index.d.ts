/**
 * @brief Asynchronously create directory with parents.
 * @description
 * Asynchronously creates the directory `path` with its parents
 * if they don't exist.
 * @param path Directory to be created.
 * @param mode Mode to be set when creating directories (optional).
 */
export function mkdirp(path : string, mode? : number) : Promise<void>

/**
 * @brief Synchronously create directory with parents.
 * @description
 * Synchronously creates the directory `path` with its parents
 * if they don't exist.
 * @param path Directory to be created.
 * @param mode Mode to be set when creating directories (optional).
 */
export function mkdirpSync(path : string, mode? : number) : void
