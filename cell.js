const BLANK = 0
const POSSIBLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const VALID_VALUES = POSSIBLE_VALUES.concat(BLANK)

import { VALID_XY, valid_coord } from './coord.js'

export class Cell {

    constructor(x, y, n) {
        if (this.valid(n)) {
            console.log('a')
            this.n = n
        } else {
            console.log(`b n = ${n}`)
            this.n = BLANK
        }

        if (valid_coord(x)) {
            this.x = x
        } else {
            throw `invalid x coordinate x = ${x} n = ${n}`
        }

        if (valid_coord(y)) {
            this.y = y
        } else {
            throw `invalid y coordinate y = ${y} n = ${n}`
        }
    }

    valid(n) {
        return VALID_VALUES.includes(n)
    }

    isBlank() {
        if (this.n === BLANK) {
            console.log('g')
            return true
        }
        else {
            console.log(`this.n = ${this.n}`)
            return false
        }
    }

}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => console.log(new Cell(e, e, e)))

// let idx = 0
// VALID_XY.map(x => {
//     VALID_XY.map(y => {
//         console.log(new Cell(x, y, VALID_VALUES[idx++]))
//     })
// })

// console.log(new Cell(1,0,1).isBlank())

