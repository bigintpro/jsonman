/**
 *
 * @param separator 切割字符串
 * @param str 待切割字符串
 * @param insertBefore 匹配项前面插入字符串
 * @returns {string|*}
 */
export function splitStrPrint(separator, str, insertBefore) {

    if (!separator) {
        return str;
    }
    if (!str) {
        return '';
    }
    if (!insertBefore) {
        insertBefore = '';
    }


    let splits = str.split(separator);
    if (splits.length === 0) {
        return '';
    }
    let result = '';

    result = splits[0];

    for (let i = 1; i < splits.length; i++) {
        result = result.concat(insertBefore);
        result = result.concat(separator);
        result = result.concat(splits[i]);
    }
    return result;
}

