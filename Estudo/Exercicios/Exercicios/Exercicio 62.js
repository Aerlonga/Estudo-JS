function fb (x){
    if (x % 3 === 0 && x % 5 === 0){return "FizzBuzz"};   
    if (x % 3 === 0){return "Fizz"};
    if (x % 5 === 0){return 'Buzz'};
    if(typeof x !== "number"){return x}
    return x
};

for (let i = 0; i <= 20; i++){
    console.log(i, fb(i))
};