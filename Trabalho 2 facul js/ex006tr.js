function substituirElemento(list, va, vn) {
    for (let num in list) {
        if (list[num] === va) {
            list[num] = vn
        }
    }
    return list
}
let array = [1, 1, 2, 5, 3, 6, 6, 7, 1, 7, 1, 8, 5, 1]
let anum = 1
let nnum = 9
console.log(substituirElemento(array, anum, nnum))
