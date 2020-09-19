function findMinAndRemove(array){

    let minNum = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i]
            minIndex = i
        }
    }

    array.splice(minIndex, 1)
    return minNum

}

function selectionSort(array){

    let sortedArray = [];

    while (array.length > 0) {
        sortedArray.push(findMinAndRemove(array))
    }

    return sortedArray

}
