let insertNumbers = [2, 4, 7, 5, 6, 3, 8, 15];
let somma = 0;

for(i = 0; i < insertNumbers.length; i++){
    if(insertNumbers[i] % 2 == 1 )
    somma +=insertNumbers[i];
}
console.log(somma);