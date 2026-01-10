function solution(my_string) {
  const arr = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!arr.includes(my_string[i])) {
      arr.push(my_string[i]);
    }
  }

  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}
