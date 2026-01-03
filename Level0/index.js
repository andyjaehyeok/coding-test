function solution(my_string) {
  const arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }

  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
