let tmpArray = [];

function shift(_array, _direction, _element) {

    let firstIndexToMoveObect = findFirstIndex(_array, _direction, _element);
    moveObjectInArray(firstIndexToMoveObect, _array);
    console.log(tmpArray);
}

function findFirstIndex(_array, _direction, _element) {
    let firstIndex = 0;
    if (_direction === "left") {
        _element >= _array.length ? firstIndex = _array.length - (_element % _array.length) : firstIndex = _array.length - _element
    }
    else if (_direction === "right") {
        _element >= _array.length ? firstIndex = _element % _array.length : firstIndex = _element
    }
    console.log(firstIndex);
    return firstIndex;

}

function moveObjectInArray(firstIndex, _array) {
    let _arrayIndexCount = 0;
    for (let indexCount = firstIndex; indexCount < _array.length; indexCount++, _arrayIndexCount++) {
        tmpArray[indexCount] = _array[_arrayIndexCount]

    }
    for (let indexCount = 0; indexCount < firstIndex; indexCount++, _arrayIndexCount++) {
        tmpArray[indexCount] = _array[_arrayIndexCount]
    }

    return tmpArray;
}

shift([1, 2, 3, 4], "right", 1);