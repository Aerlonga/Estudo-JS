const paragrafos = document.querySelector(".paragrafo");
const ps = paragrafos.querySelectorAll("p");

const estilobody = getComputedStyle(document.body);
const backgroundColorBody = estilobody.backgroundColor;
console.log(backgroundColorBody)


for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}