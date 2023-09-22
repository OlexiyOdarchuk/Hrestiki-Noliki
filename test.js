console.clear()

let matrix = [
    [-1, -1, -1],
    [0, 0, 0],
    [-1, -1, -1]
]
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].every(item => item === 0)){
        console.log(0)
        break
    }
    else if (matrix[i].every(item => item === 1)){
        console.log(1)
        break
    }
    else{
        console.log("DRAW")
    }
}