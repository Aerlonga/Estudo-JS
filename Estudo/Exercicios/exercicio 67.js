const inputTarefa = document.querySelector(".input-tarefa");// é a informação que vai dentro da caixa de texto
const btnTarefa = document.querySelector(".btn-tarefa"); // é o botão "adicionar tarefa"
const tarefas = document.querySelector(".tarefas"); // 

function criaLi(){ // cria uma li (lista ordenada) ao invés de digitar li dentro do ul no html
    const li = document.createElement("li");
    return li;
};

inputTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    };
});

limpaInput = () =>{
    inputTarefa.value = "";
    inputTarefa.focus(); // focus = é quando se clica em uma caixa para digitar texto e o cursos fica piscando
};


btnTarefa.addEventListener("click", () => { //fumção para adicionar evento de click no botão de adicionar tarefa
    if(!inputTarefa.value) return; //se valor dentro de inputTarefa for nulo não executa = ! (exclamação)
    criaTarefa(inputTarefa.value) //armazena o que foi digitado na caixa de texto
});


function criaTarefa(textoInput) { // função que vai receber o for escrito dentro da caixa de texto
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li) // função appendchild vai jogar o que foi escrito dentro das li (listas) gerando as tarefas
    limpaInput(); // toda vez que adicionar o item a lista, o input vai limpar, apagar o que foi escrito
    criBotaoApagar(li);
};

criBotaoApagar = (li) => {
    li.innerText += " ";  // Adiciona um espaço entre o conteúdo existente da lista e o botão "apagar"
    const botaoApagar = document.createElement("button");    // Cria um botão clicável
    botaoApagar.innerText = "apagar";    // Define o texto do botão como "apagar"
    botaoApagar.setAttribute("class", "apagar"); // cria uma classe com nome "apagar" para o botão apagar
    botaoApagar.setAttribute("title", "excluir o item")
    li.appendChild(botaoApagar);    // Adiciona adiciona o botão como parte do item de lista (li)
    
};

document.addEventListener("click", (e) =>{
    const el = e.target;
    if (el.classList.contains("apagar")){
        el.parentElement.remove();
    };
});



