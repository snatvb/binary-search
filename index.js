/*write code below*/

const createCounter = (c) => () => c++

function getGuess(low, high) {
  return (low + high) / 2
}

function abs(n) {
  return n < 0 ? n * -1 : n
}

function powSqua(n) {
  return n * n
}

function sqrt(n) {
  /*
    Так как дробные числа всегда имеют
    погрешность, это надо учитывать,
    а так же, чем больше epsilon,
    тем веротянее меньше будет итераций,
    на мелком дроблении
  */
  const epsilon = 0.01
  let low = 0
  let high = n
  let guess = getGuess(low, high)
  let squaGuess = powSqua(guess)
  const counter = createCounter(1)
  while (abs(squaGuess - n) >= epsilon) {
    if (squaGuess > n) {
      high = guess
    } else {
      low = guess
    }

    guess = getGuess(low, high)
    squaGuess = powSqua(guess)
    counter()
  }
  console.log(`iteractions count ${counter() - 1}`)
  return guess
}

console.log(sqrt(2057483))