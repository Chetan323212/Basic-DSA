//Search:
//Find an element — return its [row, col] index
// let array = [[1,2,3],[4,5,6],[7,8,9]]
// let key = 7
// 
// for(let i = 0; i < array.length; i++){  // row
//    for(let j = 0; j < array[i].length; j++){  // column
        // if(key == array[i][j]){
            // console.log(array[i][j])
        // }
//    }
//    
// }
//============================================================================================================
// Update:
// Set grid[i][j] = newValue, update entire row/col

// let array = [[1,2,3],[4,5,6],[7,8,9]]
// for(let i = 0; i < array.length; i++){
    // for(let j = 0; j < array[i].length; j++){
    //  array[j][1] = 0 // 
    //  array[1][i] = 0
    // }
// }
// 
// console.table(array)

//============================================================================================================
//Transpose:
//Swap rows and columns [j][i] = grid[i][j]
// let array = [[1,2,3],[4,5,6],[7,8,9]]
// let transposed = []

// for(let i = 0; i < array.length; i++){
//     transposed[i] = []
// }
// for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array[i].length; j++){
//         transposed[j][i] = array[i][j]
//     }
// }
// array = transposed
// console.log(transposed)  
//Note :-> allway's denot i = row and j = column so if you want to change the value just change the position
