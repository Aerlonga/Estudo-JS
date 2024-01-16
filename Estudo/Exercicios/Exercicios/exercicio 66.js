// function relogio() {
//     function criaHoraDosSegundos(segundos) {
//       const data = new Date(segundos * 1000);
//       return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'
//       });
//     }
  
//     const relogio = document.querySelector('.relogio');
//     let segundos = 0;
//     let timer;
  
//     function iniciaRelogio() {
//       timer = setInterval(function() {
//         segundos++;
//         relogio.innerHTML = criaHoraDosSegundos(segundos);
//       }, 1000);
//     }
   
//     document.addEventListener('click', function(e) {
//       const el = e.target;
  
//       if (el.classList.contains('zerar')) {
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         relogio.classList.remove('pausado');
//         segundos = 0;
//       }
  
//       if (el.classList.contains('iniciar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciaRelogio();
//       }
  
//       if (el.classList.contains('pausar')) {
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//       }
//     });
//   }
//   relogio();
  




// function getTimeFromSecond (segundos){
//   const data = new Date(segundos * 1000);
//   return data.toLocaleTimeString ("pt-br",{ hour12: false, timeZone: 'UTC'});
// };


// const relogio = document.querySelector(".relogio");
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
// let segundos = 0;
// let timer;

// function iniciaRelogio(){
//   timer = setInterval (function(){
//     segundos++
//     relogio.innerHTML = getTimeFromSecond(segundos);
//   }, 1000);
// };

// iniciar.addEventListener("click", function(event){
//   relogio.classList.remove('pausado');
//   clearInterval(timer) ;
//   iniciaRelogio();
// });

// pausar.addEventListener("click", function(event){
//   relogio.classList.add('pausado');
//   clearInterval(timer);
// });

// zerar.addEventListener("click", function(event){
//   clearInterval(timer);
//   relogio.innerHTML = "00:00:00",
//   segundos = 0;
// });

function relogio(){
const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;


function getTimeFromSecond (segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString ("pt-br",{ hour12: false, timeZone: 'UTC'});
};


function iniciaRelogio(){
  timer = setInterval (function () {
    segundos++
    relogio.innerHTML = getTimeFromSecond(segundos);
  }, 1000);
};


document.addEventListener("click", function(e){
  const el = e.target; //target = qual elemento esta sendo clicado
  
  if(el.classList.contains("zerar")){
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
    relogio.classList.remove('pausado');
  };

  if (el.classList.contains("iniciar")){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
  };

  if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add('pausado');
  }
});
}
relogio();





























