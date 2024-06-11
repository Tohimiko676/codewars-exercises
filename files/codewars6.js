// for if summ with reduce
function solution(number) {
  let summ = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      summ.push(i);
    }
  }
  const result = summ.reduce((partialSum, a) => partialSum + a, 0);
  return result;
}

function spinWords(string) {
  //TODO split and revers words with map function:)

  const reversedSentence = string
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
  return reversedSentence;
}

function findOdd(A) {
  //count numbers in array
  for (let v = 0; v < A.length; v++) {
    counter = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[v] === A[i]) {
        counter++;
      }
    }
    if (counter % 2 != 0) {
      return A[v];
    }
  }
}

  //пиздец с бинарным  XOR
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);





//reduce example
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);


function likes(names) {
  // TODO
  if (names.length == 0) {
    return `no one likes this`
  }
  if (names.length == 1) {
    return `${names[0]} likes this`
  }
  if (names.length == 2) {
    return `${names[0]} and ${names[1]} } like this`
  }
  if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${(names.length) - 2} others like this`
  }
}




// exec ----------------------------------------------------------


console.log(likes(['briol']))
