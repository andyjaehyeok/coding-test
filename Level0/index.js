function solution(my_string) {
  let arr = [];
  const string = my_string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  arr.sort();
  let sum = "";

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
