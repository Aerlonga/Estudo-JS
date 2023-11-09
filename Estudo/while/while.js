// let i = 0;

// while (i <= 10){
//     console.log(i)
//     i++;
// };
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let rand = random(1, 50);

while (rand <= 49){
    console.log(rand)
    rand ++;
};