// function funcao(){
//     let total = 0;
//     for (argumento of arguments){ // arguments é uma "macete" do js que le os argumentos da função declarado na hora que chama a função
//         total += argumento;
//     }
//     console.log(total);
// };

// funcao(1, 2, 3, 4, 5, 6, 7)

// let argumento1 = 1
// let argumento2 = 2
// let argumento3 = 3
// let argumento4 = 4
// let argumento5 = 5
// let argumento6 = 6
// let argumento7 = 7

// let total = argumento1 + argumento2 + argumento3 + argumento4 + argumento5 + argumento6 + argumento7;

// console.log(total);



// let numeros = [2,2];

// function n() {
//     let resultado = 0;
//     for (soma of numeros){
//         resultado += soma
//     };
//     console.log(resultado);
// }

// n();


function conta(operador, acumulador, ...numeros) { // "..." significa rest operator, ou seja, tudo que estiver depois dos outros parametros, o resto, vai entrar em número
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero
        if (operador === "-") acumulador -= numero
        if (operador === "/") acumulador /= numero
        if (operador === "*") acumulador *= numero
    };
    console.log(acumulador)
};

conta("/", 1, 20, 30, 40, 50);


