
//===================================================[ 2D Array ]========================================================
// const matrix = [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9]
// ];
// 
// console.log(matrix[0][1]); // 2 → row 0, col 1
// console.log(matrix[2][0]); // 7 → row 2, col 0

// ======================================================================================================================


// so the 2D array is a two dimanshinal Array

// syntex:- 
          //Data type ArrayName = [ [value1, value2], [value1, value2] ,[value1, value2]]

// How to call 2D array :- console.log(ArrayName[[coluam value], [row value]])
//eg

// let studentData = [["Chetan", 23 , `Class = 12`],
//                   ["OM", 24 , `Class = 12`],
//                   ["Tushar", 20 , `Class = 12`],
//                   ["Vinay", 20 , `Class = 12`]]  // this is my 2D array

// //console.log(studentData) // colling 2D array/ print the 2D array

// console.table(studentData) // print data in table format 

//========================================================================================================================

// Ok so now operaction on 2D array 

// Traversal Loop through every element row by row (or column by column).

// let twoDArray = [[1 ,2 ,3 ],
//                  [4 ,5 ,6 ],
//                  [7, 8 ,9]]

// // for(let i = 0; i < twoDArray.length; i++){
// //   console.log(twoDArray[i])
  
// // }

// // Row by Row Traversal
// console.log(`Row by Row Traversal`)
// for(let i = 0; i < twoDArray.length; i++){ // this outer loop for coluam 
//   for(let j = 0; j < twoDArray[i].length; j++){
//     console.log(twoDArray[i][j])
//   }
// }

// // Column by Column Traversal
// console.log(`Column by Column Traversal`)
// for(let j  = 0; j < twoDArray[0].length; j++){ // for  column 
//   for(let i = 0; i < twoDArray.length ; i++){
//     console.log(twoDArray[i][j])
//   }
// }

//=========================================================================================================================

// 1. Insert a New ROW


// let arr = [[1,2,3] , [3 ,4 ,5] ]

// let newrow = [6,7,8]
// console.log(arr)
// arr.splice(2 , 0, newrow) // add new row 
// console.log(arr) // new row added

//2. Insert a New COLUMN
// 
// let arr = [[1,2,3] , [3 ,4 ,5] ]
// let newrow = [6, 7, 8] //  insert new row in array
// arr.splice(3, 0 , newrow)
// let newCol = [10, 20, 30]
// 
// for(let i = 0; i < arr.length ; i++){
  //  arr[i].splice(3, 0 , newCol[i]) // adding new element in every row
// }
// console.log(arr)
//----------------------------------------------------------------------------------------------------------------------
// Delete a row or column
//1. Remove element by index (row, col)
// let arr = [[1, 2, 3], [4, 5, ,6], [7 ,8 ,9]]
// arr[1].splice(1,1) // so now 6 well be delete
// console.log(arr)

// 2. Remove element by value  5 
// let arr = [[1, 2, 3], [4, 5, ,6], [7 ,8 ,9]]
// let nweArr = []

// for(let i = 0; i < arr[1].length; i++){
//   if(arr[1][i]!==5){
//     nweArr.push(arr[1][i])
//   }
// }
// arr[1] = nweArr
// console.log(arr)


//4. Delete an entire column
// let arr = [[1, 2, 3], [4, 5,6], [7 ,8 ,9]]
// let nweArr = []

// for(let i = 0; i < arr.length; i++){
//   let newRow = [];
//   for(let j = 0; j < arr[i].length; j++){
//     if(j !==1 ){
//       newRow.push(arr[i][j])
//     }
//   }
//   nweArr.push(newRow)
// }
// arr = nweArr
// console.log(arr)

//=======================================================================================================================
//reate dynamically using loops: fill an N×M grid with zeros

// function fillZero(row , coluam){
//   let arr = []
//   for(let i = 0; i < row; i++){
//     arr[i] = []
//     for(let j = 0; j < coluam; j++){
//       arr[i][j] = 0
//     }
//   }
//   return arr
// }

// console.log(fillZero(3,4))

//add column 
// 
// let array = [[1,2,3], [4,5,6],[7,8,9]]
// let coluam = [10,20,30,40]
// let row = [10,11,12]
// array.slice(3,row)
// 
// for(let i = 0; i < array.length; i++){
  // 
    // array[i].splice(3,0,coluam[i])
  // 
// }
// 
// console.log(array)


