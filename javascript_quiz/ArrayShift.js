let tmpArray = [];

function shift(_array, _direction, _element) {
    /* 
        1. เช็คว่า ซ้าย หรือ ขวา 
        2. หาตำแหน่งแรกที่จะวาง index แรกของ _array ใน array ใหม่
        3. แบ่ง _array ออกเป็น 2 ชิ้น : ชิ้นแรกเริ่มจากตำแหน่งแรกที่จะวาง ถึง index สุดท้ายของ array ใหม่ : ชิ้นที่ 2 เริ่มจาก index แรก ถึง index ที่เหลือ
    */

    if (_direction === "left") {

    }
    else if (_direction === "right") {
        console.log(findFirstIndex(_array, _element));
    }
}

function findFirstIndex(_array, _element){
    let firstIndex = 0;
        if (_element > _array.length) {
            firstIndex = _element % _array.length
        }
        else
            firstIndex = _element + _array.length
    return firstIndex;
}

shift([1,2,3], "right", 1);