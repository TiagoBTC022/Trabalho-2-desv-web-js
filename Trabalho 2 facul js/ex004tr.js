let string1 = "Controle"
let string2 = "Sopapos"
function ehpalindromo(string) {
    let list = []
    let nstring = string.split('').reverse().join('')
    if (string.toLowerCase() == nstring.toLowerCase()) {
        return true
    } else {
        return false
    }
}
console.log(ehpalindromo(string1))
console.log(ehpalindromo(string2))

