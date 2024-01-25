function criCalculadora() {
    return {
        //atributos/variavéis dentro do objeto "criaCalculadora"

        display: document.querySelector('.display'),



        // metodos ou "ações"/"funcionalidades" especificas para o objeto "criaCalculadora" abaixo 
        inicia(){

        },

        cliqueBotoes(){
            document.addEventListener("click", function(e) {
                const el = e.target;
                if (el.classList.contains("btn-num")){
                    btnParaDisplay();
                }
            })
        },
    };
};

const calculadora = criCalculadora();
calculadora.inicia();