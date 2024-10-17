function multiplicarMatrizes(matriz1, matriz2) {
    result = []
    if (matriz1[0].length != matriz2.length) {
        return "NÂO È POSSIVEL REALIZAR A OPERAÇÃO DESEJADA NUMERO DE COLUNAS E LINHAS INCOMPATIVEL"
    }
    for (let i = 0;i < matriz1.length;i++) {
        result[i] = []
        for (let j = 0;j < matriz2[0].length;j++) {
            result[i][j] = 0
        }
    }
    console.log(result)
    for (let i = 0; i < matriz1.length;i++) {
        for (let j = 0; j < matriz2[0].length;j++) {
            for (let m = 0; m < matriz1[0].length;m++) {
                result[i][j] += matriz1[i][m] * matriz2[m][j]
            }
        }
    }
    return result
     
}
let m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let m2 = [[9, 2, 4], [6, 2, 9], [8, 5, 1]]
console.log(multiplicarMatrizes(m1, m2))