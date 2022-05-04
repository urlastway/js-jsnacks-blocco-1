const parola1 = String(prompt("inserisci la prima parola"))
const parola2 = String(prompt("inserisci la seconda parola"))

if (parola1.length > parola2.length){
    console.log(parola1)
}
else if (parola1.length < parola2.length){
    console.log(parola2)
}

else{
    console.log("pari")
}