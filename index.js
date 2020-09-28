function findMinAndRemove(array){
    let min = array[0]
    let minIdx = 0
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1)
    return min
}

function selectionSort(array){
    let sortedArr = []
    while(array.length > 0){
        sortedArr.push(findMinAndRemove(array))
    }

    return sortedArr
}
