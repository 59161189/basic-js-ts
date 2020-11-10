let maxNum = Number.MIN_VALUE;
let secondMaxNum = Number.MIN_VALUE;
let hasSecondMaxNum = false;
let arrayEmpty = false;

function secondMax(_array) {
    findMaxNum(_array);
    findSecondMaxNum(_array);
    showResult();
}

function findMaxNum(_array) {
    try {
        if (_array.length == 0) {
            arrayEmpty = true;
            throw "Error!";
        } else
            for (let count = 0; count < _array.length; count++) {
                if (_array[count] > maxNum) {
                    maxNum = _array[count];
                }
            }
    }
    catch (err) {
        console.log(err);
    }
}

function findSecondMaxNum(_array) {
    for (let count = 0; count < _array.length; count++) {
        if (_array[count] < maxNum) {
            if (_array[count] > secondMaxNum) {
                secondMaxNum = _array[count];
                hasSecondMaxNum = true;
            }
        }
    }

}

function showResult() {
    if (hasSecondMaxNum)
        console.log(secondMaxNum);
    else if (!arrayEmpty)
        console.log(maxNum);
}

secondMax([3,3]);