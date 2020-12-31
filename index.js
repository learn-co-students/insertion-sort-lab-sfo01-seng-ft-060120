function findMinAndRemove(arr){
    let min = arr[0]
    let index = 0
    for(var x = 0; x < arr.length; x++){
        if(arr[x] < min){
            min = arr[x]
            index = x
        }
    }
    arr.splice(index, 1)
    return min
}

function selectionSort(arr){
    let min 
    let newarr = []
    while(arr.length !== 0){
        min = findMinAndRemove(arr)
        newarr.push(min)
    }
    return newarr
}
