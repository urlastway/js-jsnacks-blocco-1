let number = [];

for(let i = 0; i< 6 ; i++){
    let userNumber = Number(prompt("inserisci il numero"))
    if (userNumber % 2 == 0){
        number.push(userNumber)
    }
}

console.log(number)