// Your code here
function mapToNegativize(sourceArray) {
let narr = []
sourceArray.forEach(n => narr.push(n * -1))
return narr
}


function mapToNoChange(sourceArray) {
let narr = sourceArray
return narr
}


function mapToDouble(sourceArray) {
    let narr = []
    sourceArray.forEach(n => narr.push(n * 2))
    return narr
}


function mapToSquare(sourceArray) {
    let narr = []
    sourceArray.forEach(n => narr.push(n * n))
    return narr
}



function reduceToTotal(sourceArray, startingPoint=0) {
let sum = startingPoint
sourceArray.forEach(n => sum += n)
return sum
}


function reduceToAllTrue(sourceArray) {
let t = true
sourceArray.forEach(n => {if(n === false) {
t = false
}})
return t
}


function reduceToAnyTrue(sourceArray) {
    let t = false
    sourceArray.forEach(n => {if(n === true) {
    t = true
    }})
    return t
}

