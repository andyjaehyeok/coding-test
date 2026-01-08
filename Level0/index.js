function solution(order) {
  const arr = [];
  const str = String(order);
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") {
      count++;
    }
  }
  return count;
}

console.log(solution(29423));
