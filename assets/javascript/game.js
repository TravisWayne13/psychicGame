const letter = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z` ]
let guessedLetter = []
let wins = 0
let losses = 0
let guessLeft = 7
// game needs to pick a random letter
let winningLetter = letter[Math.floor(Math.random() * 26)]
// letters need to be checked/stored for win and losses
document.getElementById('guessLeft').innerHTML = guessLeft

const game = document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90 ) {
    if (event.key === winningLetter){
      let guessLeft = 7
      wins = wins + 1
      winningLetter = letter[Math.floor(Math.random() * 26)]
      guessedLetter = []
      document.getElementById('wins').innerHTML = wins
      document.getElementById('guessLeft').innerHTML = guessLeft
      document.getElementById('wordBank').innerHTML = ''
      console.log(winningLetter)
      console.log(wins)
    } else {
      guessLeft = guessLeft - 1
      guessedLetter = guessedLetter + event.key + ', '
      document.getElementById('wordBank').innerHTML = guessedLetter
      document.getElementById('guessLeft').innerHTML = guessLeft
      console.log(guessedLetter)
      if (guessLeft === 0) {
        losses = losses + 1
        guessLeft = 7
        winningLetter = letter[Math.floor(Math.random() * 26)]
        document.getElementById('loss').innerHTML = losses
        document.getElementById('guessLeft').innerHTML = guessLeft
        document.getElementById('wordBank').innerHTML = ''
        guessedLetter = []
        console.log(winningLetter)
      }
    }
  }
}




console.log(letter)
console.log(winningLetter)
