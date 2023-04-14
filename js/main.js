class TicTacToeGame{
    constructor(){
        this.turn = 'X'
        this.board = [[document.querySelector("#one").innerText, document.querySelector("#two").innerText, document.querySelector("#three").innerText],
                      [document.querySelector("#four").innerText, document.querySelector("#five").innerText, document.querySelector("#six").innerText],
                      [document.querySelector("#seven").innerText, document.querySelector("#eight").innerText, document.querySelector("#nine").innerText],]
    }
    start() {
        alert("Game started! Click Square to Start!")
        document.querySelector('#status').innerText = 'playing game'
        document.querySelector("#restart").addEventListener("click", () => {
            this.restart()
        })
        this.move()
        console.log(this.board)
    }
    move() {
        document.querySelectorAll(".square").forEach(square => {
            square.addEventListener("click",(e) => this.modify(e))
        })
    }
    modify(e) {
        this.checkSpot(e)
        this.changeTurn()
    }
    changeTurn() { // switches the turn
        if (this.turn == 'X') {
            this.turn = 'O'
            document.querySelector("#turn").innerText = this.turn
        } else {
            this.turn = 'X'
            document.querySelector("#turn").innerText = this.turn
        }
    }
    checkSpot(e) { // checks if clicked spot is available
        if (document.querySelector('#'+e.target.id).innerText == '') {
            document.querySelector("#"+e.target.id).innerText = this.turn
            if (e.target.id == 'one') {
                this.board[0][0] = this.turn
            } else if (e.target.id == 'two') {
                this.board[0][1] = this.turn
            } else if (e.target.id == 'three') {
                this.board[0][2] = this.turn
            } else if (e.target.id == 'four') {
                this.board[1][0] = this.turn
            } else if (e.target.id == 'five') {
                this.board[1][1] = this.turn
            } else if (e.target.id == 'six') {
                this.board[1][2] = this.turn
            } else if (e.target.id == 'seven') {
                this.board[2][0] = this.turn
            } else if (e.target.id == 'eight') {
                this.board[2][1] = this.turn
            } else if (e.target.id == 'nine') {
                this.board[2][2] = this.turn
            }
        } else {
            alert(`This spot is taken`)
            this.changeTurn()
        }
        this.checkWinner()
    }
    checkWinner() {
        this.checkHorizontal()
        this.checkVertical()
        this.checkDiagonal()
        this.checkCat()
    }
    checkHorizontal() {
        if (this.board[0][0] != '' && this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2] || this.board[1][0] != '' && this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2] || this.board[2][0] != '' && this.board[2][0] == this.board[2][1] && this.board[2][1] == this.board[2][2]) {
            document.querySelector('#status').innerText = `Player ${this.turn} Won!`
            document.querySelector('h1').style.display = "none"
            alert(`${this.turn} Won!`)
            document.addEventListener("click", this.restart())
        }
    }
    checkVertical() {
        if (this.board[0][0] != '' && this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0] || this.board[0][1] != '' && this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1] || this.board[0][2] != '' && this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2]) {
            document.querySelector('#status').innerText = `Player ${this.turn} Won!`
            document.querySelector('h1').style.display = "none"
            alert(`${this.turn} Won!`)
            document.addEventListener("click", this.restart())
        }
    }
    checkDiagonal() {
        if (this.board[0][0] != '' && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] || this.board[0][2] != '' && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]) {
            document.querySelector('#status').innerText = `Player ${this.turn} Won!`
            document.querySelector('h1').style.display = "none"
            alert(`${this.turn} Won!`)
            document.addEventListener("click", this.restart())
        }
    }
    checkCat() {
        let count = 0
        this.board.forEach(row=>{
            row.forEach(spot=>{
                if (spot != '') {
                    count += 1
                }
            })
        })
        if (count == 9) {
            document.querySelector('#status').innerText = `Tie Game`
            document.querySelector('h1').style.display = "none"
            alert(`${this.turn} Won!`)
            document.addEventListener("click", this.restart())
        } else {
            return
        }
    }
    restart() { // clears the board
        location.reload()
    }
}

document.querySelector("#restart").style.display = "none"
let game = new TicTacToeGame()

document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").style.display = "none"
    document.querySelector("#restart").style.display = ""
    game.start()
})