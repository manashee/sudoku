const BLANK = 0
const POSSIBLE_VALUES = [1,2,3,4,5,6,7,8,9]
const VALID_VALUES = POSSIBLE_VALUES.concat(BLANK)

export default class Cell {
    constructor(n) {
        if (this.valid(n)) {
            console.log ( 'a' )
            this.n = n
        } else {
            console.log ( 'b' )
            this.n = BLANK
        }

    }

    valid(n) {
        if (n >= 1 && n <= 9) {
            console.log ( 'c' )
            return true
        } else if (n === BLANK) {
            console.log ( 'd' )
            return true
        }
        else {
            console.log ( 'f' )
            return false
        }
    }

    isBlank() {
        if (this.n === BLANK) {
            console.log ( 'g' )
            return true
        }
        else {
            console.log ( `this.v = ${this.v}` )
            return false
        }
    }

}

[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => console.log(new Cell(e)))
console.log(new Cell(0).isBlank())

