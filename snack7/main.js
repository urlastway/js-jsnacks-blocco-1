const names = ["Marco", "Clara", "Marcello", "Arianna"];
const lastnames = ["Gentili", "Sileoni", "Ronaldo", "Carlotti"];

for (i = 0; i < 4; i++){
    
    randomName = Math.floor(Math.random() * 3);
    randomLastName = Math.floor(Math.random() * 3);

    console.log(names[randomName] + " " + lastnames[randomLastName]);
};