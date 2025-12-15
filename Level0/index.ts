//두 수의 차 구하기
function minus(num1: number, num2: number) {
  return num1 - num2;
}

//두 수의 합 구하기
function plus(num1: number, num2: number) {
  return num1 + num2;
}

//두 수의 곱 구하기
function times(num1: number, num2: number) {
  return num1 * num2;
}

//몫 구하기
function divide(num1: number, num2: number) {
  return Math.floor(num1 / num2);
}

//두 수의 나눗셈
function divideAndTimes(num1: number, num2: number) {
  return Math.floor((num1 / num2) * 1000);
}

//숫자 비교하기
function compare(num1: number, num2: number) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

//분수의 덧셈
function fractionSum(
  num1: number,
  denom1: number,
  num2: number,
  denom2: number
) {
  let arr: number[] = [];

  let timeNum1 = num1 * denom2;
  let timeNum2 = num2 * denom1;
  let timeDenom2 = denom1 * denom2;

  let sumNum = timeNum1 + timeNum2;
  let sumDenom = timeDenom2;

  const greatestCommonDivisor = (num1: number, num2: number) => {
    while (num2 !== 0) {
      [num1, num2] = [num2, num1 % num2];
    }
    return num1;
  };
  const num = greatestCommonDivisor(sumNum, sumDenom);

  arr.push(sumNum / num, sumDenom / num);
  return arr;
}

//배열 두배 만들기
function arrDouble(numbers: number[]) {
  let tempArr: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    tempArr.push(numbers[i] * 2);
  }
  return tempArr;
}

//나머지 구하기
function modulo(num1: number, num2: number) {
  return num1 % num2;
}

//중앙값 구하기
function getMedian(array: number[]) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}

//최빈값 구하기
function getMode(array: number[]) {
  if (array.length === 1) {
    return 1;
  }

  let count = 1;
  let arr1: any[] = [];
  let arr2: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      arr1.push(count);
      arr2.push(array[i]);
      count = 1;
    }
  }

  const sortedDesc = [...arr1].sort((a, b) => b - a);

  if (sortedDesc[0] === sortedDesc[1]) {
    return -1;
  }

  let max = arr1[0];
  let maxIndex: any;
  for (let i = 1; i <= arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
      maxIndex = i;
    }
  }

  return arr2[maxIndex];
}

console.log(getMode([1, 2, 3, 3, 3, 4]));

//짝수는 싫아요
function oddArr(n: number) {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++)
    if (i % 2 !== 0) {
      arr.push(i);
    }

  return arr;
}

//피자 나눠 먹기
function slicePizza(n: number) {
  if (n % 7 === 0) {
    return n / 7;
  }

  if (n <= 7) {
    return 1;
  }

  if (n % 7 !== 0) {
    return Math.floor(n / 7 + 1);
  }
}
