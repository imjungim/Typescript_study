//@ts-check
// javascript 파일 내에서 타입 검사를 허용(ts가 js파일도 보호)
/**
* @param {object} config
* @param {boolean} config.debug
* @param {string} config.url
* @returns boolean
*/
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
//only js code -> typeScript는 이게 뭔지 모름.
