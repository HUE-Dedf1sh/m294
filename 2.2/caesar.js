//1
const personen = ["Franz", "Jenny", "Karen", "Joseph", "Richard", "Florenze"]
for(let i = 0; i < personen.length; i++){
    console.log(`Name: ${personen[i]}`);
}

//2
personen.sort();
console.log(personen);

//3
const uppercased = personen.map(person => person.toUpperCase());
console.log(uppercased);

//4
function toCaesar(input){
    const characters = input.split("");
    const newCharacters = characters.map((character) => {
        const charCode = character.charCodeAt();
        if(charCode <= "Z".charCodeAt()){
            return String.fromCharCode((charCode - "A".charCodeAt() + 13) % 26 + "A".charCodeAt());
        } else {
            return String.fromCharCode((charCode - "a".charCodeAt() + 13) % 26 + "a".charCodeAt());
          }
        });
        return newCharacters.join("");
}

for(let i = 0; i < uppercased.length; i++){
    console.log(toCaesar(personen[i]));
}

//5
const firstletter = personen.map()
console.log()