function solution(num, k) {
  const arr = [];
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === String(k)) {
      return i + 1;
    }
  }

  return -1;
}
