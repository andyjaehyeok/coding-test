function solution(num_list, n) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < num_list.length; i++) {
    let tempArr = [];
    for (let j = 0; j < n; j++) {
      tempArr.push(num_list[count]);
      count++;
    }

    if (count > num_list.length) {
      return arr;
    } else {
      arr.push(tempArr);
    }
  }
}
