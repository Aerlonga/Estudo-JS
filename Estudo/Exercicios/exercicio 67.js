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
    salvarTarefas();
};

criBotaoApagar = (li) => {
    li.innerText += " ";  // Adiciona um espaço entre o conteúdo existente da lista e o botão "apagar"
    const botaoApagar = document.createElement("button");    // Cria um botão clicável
    botaoApagar.innerText = "apagar";    // Define o texto do botão como "apagar"
    botaoApagar.setAttribute("class", "apagar"); // cria uma classe com nome "apagar" para o botão apagar
    botaoApagar.setAttribute("title", "excluir o item")
    li.appendChild(botaoApagar);    // Adiciona adiciona o botão como parte do item de lista (li)
    
};

document.addEventListener("click", (e) =>{ // Adiciona um evento de clique ao documento
    const el = e.target;    // Obtém o elemento clicado
    if (el.classList.contains("apagar")){  // Verifica se o elemento clicado tem a classe "apagar"
        el.parentElement.remove();  // Remove o elemento pai (parent) do elemento clicado (o botão)
        salvarTarefas();
    };
});

salvarTarefas = () =>{
    const liTarefas = tarefas.querySelectorAll("li");  // Seleciona todos os elementos de lista (li) dentro do elemento com id "tarefas"
    const listaDeTarefas = []; // Cria uma array para armazenar as strings de texto das tarefas
    
    for (let tarefa of liTarefas){  // Itera sobre cada elemento de lista
        let tarefaTexto = tarefa.innerText;   // Obtém o texto da tarefa
        tarefaTexto = tarefaTexto.replace("apagar", "").trim(); // Remove a palavra "apagar" do texto da tarefa
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON)
};

adicionaTarefasSalvas = () =>{
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    };
};
adicionaTarefasSalvas();

