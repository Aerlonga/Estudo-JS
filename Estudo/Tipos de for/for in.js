// const frutas = ['pera', 'maça', 'uva'];

// // for (let i = 0; i < frutas.length; i++){
// //  console.log(frutas[i])
// // };

// for (let i in frutas){
//     console.log(frutas[i]);
// }

// Funciona com objeto


const pessoa = {
    nome : "Aerlon",
    sobrenome: "Alves",
    idade: 26
};

for (let eu in pessoa ){
    console.log(eu, ":", pessoa[eu])
}