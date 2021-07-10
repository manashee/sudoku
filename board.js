//  import { uniqBy } from "lodash"

const POSSIBLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export class Board {

    constructor(rows) {
        this.rows = rows
        this.squares = squares ( rows )
    }

    solve() {
        this.rows.map((row, ridx) => {
            row.map((value, cidx) => {
                if (value === 0) {
                    const d = this.diff(POSSIBLE_VALUES, Array.from(new Set([this.row(ridx), this.col(cidx)].flat())))
                    console.log(ridx, cidx, d)
                    //  console.log (  d )

                }
            })
        })
    }

    row(n) {
        if (n >= 0 && n <= 8) {
            return this.rows[n]
        } else {
            const m = `invalid row : ${n}`
            console.error(m)
            throw m
        }
    }

    col(n) {
        if (n >= 0 && n <= 8) {
            return this.rows.map(row => {
                return row[n]
            })
        } else {
            const m = `invalid col : ${n}`
            console.error(m)
            throw m
        }
    }

    squareRowColNumber(rc) {
        if (rc <= 2) return 0
        else if (rc > 2 && rc <= 5) return 1
        else if (rc > 5 && rc <= 9) return 2
    }

    // returns the set of values in the cell's square.
    // cell's row and col are inputs
    sq(r, c) {
        const sqRow = this.squareRowColNumber(r)
        const sqCol = this.squareRowColNumber(c)


        return { sqRow, sqCol }
    }

    diff(a, b) {
        return a.filter(v => !b.includes(v))
    }


    // PROBABLE_VALUES = POSSBILE_VALUES - dedup ( sq.values union col.value union row.values ) 
}


const b = new Board(
    [
        [0, 6, 0, 4, 2, 0, 0, 0, 1],
        [1, 9, 0, 0, 8, 3, 0, 2, 0],
        [0, 0, 2, 0, 1, 0, 7, 0, 0],
        [0, 0, 0, 8, 7, 0, 5, 0, 0],
        [0, 5, 1, 3, 4, 9, 0, 0, 2],
        [4, 0, 3, 0, 5, 0, 0, 8, 0],
        [6, 0, 5, 1, 3, 2, 0, 0, 0],
        [7, 0, 4, 0, 0, 8, 0, 1, 0],
        [0, 1, 0, 0, 6, 0, 8, 5, 0]
    ]
)

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8]
a.map(r => {
    a.map(c => {
        console.log(r , c ,b.sq(r, c))
    })
})
// const s = b.sq(0, 0)
// console.log(s)
// const b1 = b.solve()
// const c = new Set ( [ b.row(0) , b.col(0)].flat() )
// console.log ( [ b.row(0) , b.col(0)].flat() )
// console.log ( c )
// const r0 = b.row(0)
// // // // r0.map ( r => console.log (r) )
// const c0 = b.col(0)
// // c0.map ( c => console.log (c) )
// const s = new Set ( [...r0, ...c0] )
// console.log ( r0, c0, Array.from(s) )
// // const d = b.diff([1, 2, 3], [2, 3, 4])
// // console.log(d)

// // const dedp = new Set([...[1,2,3],...[2,3,4]])
// // console.log( dedp)

// const p = new Set ( [0, 6, 0, 4, 2,0, 0, 0, 1].concat([ 0, 1, 0, 0, 0,4, 6, 7, 0]) )
// console.log(p)
// const q = _.uniqBy(data, 'id');
