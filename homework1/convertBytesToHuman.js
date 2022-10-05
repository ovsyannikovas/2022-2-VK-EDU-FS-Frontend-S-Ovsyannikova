/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (!(typeof bytes == "number" && bytes >= 0))
        return false
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    let num = bytes
    let i = 0
    let remain
    while (num >= 1024) {
        remain = num % 1024
        num /= 1024
        i++
    }
    let res = remain === 0 || i === 0 ? Math.round(num) : num.toFixed(2)
    return res + ' ' + sizes[i]
}
