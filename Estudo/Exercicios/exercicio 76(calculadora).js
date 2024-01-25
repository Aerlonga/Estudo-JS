// função que serve como "fábrica" para criar objetos da calculadora
function criCalculadora() {
    return {
        // Atributos/variáveis dentro do objeto "criaCalculadora"
        display: document.querySelector('.display'),

        // Métodos ou "ações"/"funcionalidades" específicas para o objeto "criaCalculadora" abaixo 
        inicia(){
            this.cliqueBotoes();
        },

        cliqueBotoes(){
            // Adiciona um ouvinte de evento de clique ao documento
            document.addEventListener("click", function(e) {
                // Obtém o elemento clicado
                const el = e.target;

                // Verifica se o elemento clicado possui a classe "btn-num"
                if (el.classList.contains("btn-num")){
                    this.btnParaDisplay();
                }
            });
        },
    };
}

// Cria uma instância da calculadora
const calculadora = criCalculadora();

// Inicia a calculadora chamando o método "inicia"
calculadora.inicia();
