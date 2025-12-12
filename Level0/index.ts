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
