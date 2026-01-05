function solution(age) {
  const arr = [];
  const answer = [];
  let string = "";
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let str = String(age);
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    answer.push(alphabets[arr[i]]);
  }

  for (let i = 0; i < answer.length; i++) {
    string += answer[i];
  }
  return string;
}

console.log(solution(100));
