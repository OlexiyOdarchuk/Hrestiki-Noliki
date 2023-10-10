console.clear()
let matrix = [
  [1,0,0,0],
  [2,1,2,0],
  [2,1,1,0],
  [6,2,1,1]
  
]
function check(arr){
  for(let i = 0;i<arr.length;i++){
  if(arr[i].every(item => item == 0)){
  return"win 0"
    break
}
else  if(arr[i].every(item => item == 1)){
 return'win 1'
  break
}
  else {
    if(i == arr.length-1){
      return "нічия"
    }
  }
}

}
// витягую  діагоналі
let diagonali = [[],[]]
let column = []
for(let i = 0;i<matrix.length;i++){
  column.push([])
}
for(let i = 0;i<matrix.length;i++){
  diagonali[0].push(matrix[i][i])
  diagonali[1].push(matrix[i][matrix.length-1-i])
 for(let j = 0;j < matrix.length;j++){
   column[i].push(matrix[j][i])
 } 
}
console.log(diagonali)
console.log(column)
console.log(check(matrix)+check(diagonali)+check(column))
let result = check(matrix)+check(diagonali)+check(column) 
result.includes("win 0")?
  console.log("win 0"):
     result.includes("win 1")?
  console.log("win 1"):
   console.log("Нічия")
