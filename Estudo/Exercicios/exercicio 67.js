const inputTarefa = document.querySelector(".input-tarefa");// é a informação que vai dentro da caixa de texto
const btnTarefa = document.querySelector(".btn-tarefa"); // é o botão "adicionar tarefa"
const tarefas = document.querySelector(".tarefas"); // 

function criaLi(){ // cria uma li (lista ordenada) ao invés de digitar li dentro do ul no html
    const li = document.createElement("li");
    return li;
}


function criaTarefa(textoInput) { // função que vai receber o for escrito dentro da caixa de texto
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
}

btnTarefa.addEventListener("click", () => { //fumção para adicionar evento de click no botão de adicionar tarefa
    if(!inputTarefa.value) return; //se valor dentro de inputTarefa for nulo não executa = ! (exclamação)
    criaTarefa(inputTarefa.value) //armazena o que foi digitado na caixa de texto
});



