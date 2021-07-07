// Step 1 - understand what the program should do
// Write down the rules of the game, try to give name to things. ( this is called abstractions )

// a) there are cells, squares and board
// square is 9 cells arranged in 3x3 grid
// board is 9 squares arranged in a 3x3 grid
// a) Number must not repeat in the cells within a square
// b) Number must not repeat in the columns and rows in the board


// Step 2 Work out a step by step Procedure. ( this is called algorithms )
// Procedure to fill in the board
// start on the square with most numbers filled in already



// Break down the steps into smaller steps.
// And use the same strategy. Break the smaller steps into even smaller steps.
// Stop only when the step does one and only one thing. ( This is called single responsibility principle )

// count-filled-in-squares
// run isFilled on all cells
// true
// it will produce many values
// [true,true,true,true,true,true,true,true,false] 


// Write a function for each such unbreakable step
// Every function must take some input, do some calculation, and return the value of the calculation
// They should be pure and total : in other words
// They should not modify their inputs
// They should not use global variables ( )
// They should not read / write from the disk
// They should not make any assumptions ( use of constants )
// They should return a value for every input value

// run the above on every-square
// [false,true,true,true,true,true,true,true,false] ->  7
// [true,true,true,true,true,true,true,true,false]  -> 8 
// [true,true,true,true,true,true,true,true,false] 
// [false,true,true,true,true,false,true,true,false] 
// [true,true,true,true,false,true,true,true,false] 
// [true,true,true,true,true,true,true,true,false] 
// [false,true,false,true,true,true,true,true,false] 
// [true,true,true,true,true,true,true,true,false] 


// cell.isBlank() { 
//     return true / false ; 
// }

// cell.isFilled() { 
//     return true / false ; 
// }


// square.countFilled ( ) { 

// }

// // input output model of a function
// // every function takes as input something and produces as output something
// countFilled ( square ) { 
//     // return 
// }

// find all valid values that are not in the square, in the same column and same row
// diff ( valid values , dedup ( values in the square union values in the col union values in the row ) ) 

