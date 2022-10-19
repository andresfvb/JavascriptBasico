var lastName = 'Andres';
lastName = 'Felipe';
console.log(lastName);
//Esta reemplazo a var
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
//Esta es una constante, es decir su valor nunca cambia
const animal = 'Dog';
animal = "Cat";
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
//LAS VARIABLES let Y const SON LOCAL SCOPE