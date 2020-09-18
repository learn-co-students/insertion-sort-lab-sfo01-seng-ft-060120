function findMinAndRemove(array){
    let min = array[0]
    let minIndex
    for (let i = 1; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    return array.splice(minIndex, 1)[0]
}

function selectionSort(array){
    let sortedArray = []
    while (array.length !== 0) {
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}