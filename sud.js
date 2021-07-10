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

// Now a major question is how should 


// What are the queries - this determines the datastructure
// Queries will be coming from Square, Row and Col
// But this calculation needs to be done only once
// When you create a Square you can also compute what values are missing.
// when you create a Row / Col , you can compute what values are missing. 
// From the cell, we need to easily find the row and the col

// The interface to set it up should be easy, and powerful , and expressive. 

// Start it from top most level. From specifications
// write the interface down which the customer might use, the testers might use
// How a customer might set it up. 
// look at other implementations. what interface have they used?
// an array of rows seem to be the intuitive interface
// the external interface must be designed for ease of use
// internally it can be represented / stored for efficiency


// what is the most straight forward algo that you can think of 
// for each value which is 0 ( vacant ) find probable values
// probable value for a vacant cell is a list of values that can be used to fill it
// this is the list of those values which are absent in  square, row and col of that cell 
// square is a function that returns a set of values in the square of the cell
// row is a function that returns a set of values in the row of the cell
// col is a function that returns a set of values in the col of the cell


// come up with the minimum amount of code to solve the problem
// the right abstractions are minimalist abstractions needed to solve the problem

// values
// write straight forward - useful code, keeping aim in mind
// 