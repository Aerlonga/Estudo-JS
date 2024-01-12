// try {
//     //  quando não há errors
// }catch(e){
//     // quando há erros
// } finally{
//     // sempre é executado
// }   

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError ("Esperando instância de Date")
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
     hour:"2-digit",
     minute:"2-digit",
     second:"2-digit",
     hour12:false
    });
}
try{
const data = new Date ("01-01-1970 12:38:10");
const hora = retornaHora();
console.log(hora);
}catch(error){
    //tratar erro
}finally{
    console.log("Tenha um bom dia!")
}