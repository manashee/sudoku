const VALID_XY = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export class Col { 
    constructor(x, cells) {
        if ( valid_coord (x) ) { 
            this.x = x
        } else { 
            const m = `Col: Invalid x coordinate : ${x}`
            console.error ( m )
            throw m
        }

        this.cells = cells 
    }

    valid_coord(xy) {
        return VALID_XY.includes(xy)
    }
}

const c = new Col ( x , cells )
