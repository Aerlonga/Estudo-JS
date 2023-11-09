const elementos = [
    {tag: "p", texto: "Bobeira é Fundamental"},
    {tag: "div", texto: "Bobeira é Bocó"},
    {tag: "section", texto: "Bobeira é Boba"},
    {tag: "footer", texto: "Bobeira é Bobeira"},
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);