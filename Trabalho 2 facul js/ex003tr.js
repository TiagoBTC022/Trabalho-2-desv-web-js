let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function separarParesImpares(list) {
    let par = []
    let impar = []
    let concParImp = {}
    for (let num of list) {
        if (num % 2 === 0) {
            par.push(num)
        } else {
            impar.push(num)
        }
    }
    concParImp["PAR"] = par
    concParImp["IMPAR"] = impar
    return concParImp
}
console.log(separarParesImpares(array))