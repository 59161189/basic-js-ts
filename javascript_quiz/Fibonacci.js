let count = 0;
let first_fibo = 0;
let second_fibo = 1;
let fibo_sum = 0;

function fib(_order) {
    console.log("start fibo");
    if (_order == 0) {
        console.log(fibo_sum);
    }
    else if (_order < 0){
        console.log("Invalid number");
    }
    else {
        // วนลูบรวมค่าตามทฤษฎีฟีโบนักชี
        for (count; count < _order; count++) {
            fibo_sum = first_fibo + second_fibo;
            second_fibo = first_fibo;
            first_fibo = fibo_sum; 
            
        }
        console.log(fibo_sum);
    }
}

fib(-5);