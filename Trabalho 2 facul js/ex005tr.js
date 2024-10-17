const matriz = [[7, 2, 3],[5, 6, 9],[8, 2, 6]]
function somaMatriz(array) {
    let soma = 0
    for (let c = 0; c < array.length ;c++) {
        for (let n = 0; n < array[c].length ;n++) {
            soma += array[c][n]
        }
    }
    return soma
}
console.log(somaMatriz(matriz))