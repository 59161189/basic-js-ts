function fizzBuzz(_number) {
    let text = "";
    modThree(_number) == 0 ? text += "Fizz" : text += "";
    modFive(_number) == 0 ? text += "Buzz" : text += "";
    console.log(text)
}

function modThree(_number) {
    return _number % 3;
}

function modFive(_number) {
    return _number % 5;
}

fizzBuzz(9);