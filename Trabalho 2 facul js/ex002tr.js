let pessoas = [{Tiago: 19}, {Dalton: 20}, {Felisberto: 88}, {Felipe: 16}, {Cauan: 18}, {Cleide: 75}, {Geraldo: 64}];
function ordenarPorIdade(list) {
    let orgid = [];
    let idnaorg = [];

    for (const num in list) {
        orgid.push(Object.values(list[num])[0]);
    }

    orgid.sort((a, b) => a - b);

    for (const idade of orgid) {
        for (const pessoa of list) {
            const idadePessoa = Object.values(pessoa)[0];
            if (idadePessoa === idade) {
                idnaorg.push(pessoa);
                break;
            }
        }
    }

    return idnaorg; 
}

console.log(ordenarPorIdade(pessoas));