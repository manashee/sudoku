import { Cell, VALID_VALUES } from './cell.js'
import { VALID_XY, valid_coord } from './coord.js'

export default class Square {

    constructor(x, y, cellValues) {
        if (valid_coord(x)) {
            this.x = x
        } else {
            throw `Sq: invalid x coordinate x = ${x}`
        }

        if (valid_coord(y)) {
            this.y = y
        } else {
            throw `Sq: invalid y coordinate y = ${y} n = ${n}`
        }

        const invalidValues = this.validateCellValues(cellValues).filter ( v => v.valid === false)
        if ( invalidValues.length === 0 ) { 
            console.log('p')
            this.cellValues = cellValues
        } else { 
            console.log('q')
            const m = `Sq: invalidCellValues =  ${JSON.stringify(invalidValues)}`
            console.log ( m )
            throw m
        }

    }

    validateCellValues(cellValues) {
        return cellValues.map(v => { return {
            value: v,
            valid: VALID_VALUES.includes(v)
        }})
    }
}

const _00 = new Square(0, 0, [5, 0, 0, 0, 0, 2, 1, 0, 0]) 
const _01 = new Square(0, 1, [4, 0, 7, 0, 1, 0, 6, 8, 0]) 

console.log(_00)
console.log(_01)
