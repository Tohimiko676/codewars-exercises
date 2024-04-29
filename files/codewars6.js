function solution(number) {
  let summ = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      summ.push(i)
    }
  }
  const result = summ.reduce((partialSum, a) => partialSum + a, 0);
  return result
}


solution(10)