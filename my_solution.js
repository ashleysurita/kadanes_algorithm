function kadane(array) {
    let maxCurr = array[0]
    let maxGlobal = array[0]
    for(let i = 1; i < array.length; i++){
        maxCurr = Math.max(array[i], maxCurr + array[i])
        if( maxCurr > maxGlobal ){
            maxGlobal = maxCurr
        }
    }
    return maxGlobal
}
