function printOdds(){
    for (var i = 1; i <=20; i++){
        if (i % 2 ===1){
            console.log(i);
        }
    }
}

function multiplesOfThree(){
    for (var i = 100; i > 0; i--){
        if (i % 3 === 0){
            console.log(i);
        }
    }
}

function sequence(){
    var i = 4.0;
    while (i >= -3.5){
        console.log(i);
        i -= 1.5;
    }
}

function sigma(){
    var sum = 0;
    for (var i =1; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
}

function factorial(){
    var product = 1;
    for (var i = 1; i <= 12; i++){
        product *= i;
    }
    console.log(product);
}
