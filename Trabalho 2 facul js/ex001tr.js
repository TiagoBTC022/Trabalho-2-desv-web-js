const array = [1, 3, 4, 2, 2, 1, 3, 7, 8, 5, 10, 6, 8,  15, 5, 9, 10, 16]
function ContarOcorrencia(list) {
    let cont = {}
    list.sort((a, b) => (a - b))
    for (let c = 0; c < list.length ; c++) {
        const numero = array[c]
        if (cont[numero]) {
            cont[numero] += 1
        } else {
            cont[numero] = 1
        }
    }
    for (const num in cont) {
        console.log(`O numero ${num} Aparece ${cont[num]} Vez(es)`)
    }
}
ContarOcorrencia(array)
