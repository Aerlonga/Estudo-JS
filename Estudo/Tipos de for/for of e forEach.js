// So funciona com arrays


const nomes = ["Aerlon", "Alves"];


for (let eu of nomes){
    console.log(eu)
}


nomes.forEach(function(eu, indice, array){
    console.log(eu, indice, array)
});
