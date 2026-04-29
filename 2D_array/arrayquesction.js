//Search:
//Find an element — return its [row, col] index
let array = [[1,2,3],[4,5,6],[7,8,9]]
let key = 7

for(let i = 0; i < array.length; i++){  // row
   for(let j = 0; j < array[i].length; j++){  // column
        if(key == array[i][j]){
            console.log(array[i][j])
        }
   }
   
}