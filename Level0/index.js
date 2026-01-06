function solution(numbers, direction) {
  let arr = [];
  if (direction === "right") {
    arr.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      arr.push(numbers[i]);
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      arr.push(numbers[i]);
    }

    arr.push(numbers[0]);
  }

  return arr;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
