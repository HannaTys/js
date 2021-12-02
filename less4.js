/*const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray)*/



function map(fn, array) {
    var arrayNew = [];
    for (var i = 0; i < array.length; i++) {
        arrayNew[i] = fn(array[i]);
    }
    return arrayNew;
}

function fn(a) {
    return a * 2;
}

document.write(map(fn, [2, 5, 3, 10]) + '<br />');