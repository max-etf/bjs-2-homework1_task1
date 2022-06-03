// Задание 1
function getArrayParams(arr) {
  let min = arr [0], max = arr[0], sum = 0, avg;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
    i++;
  }
  avg = (sum / arr.length);
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  arrOfArr.forEach(element => {
    if (func(element) > max) max = func(element);
  });
  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0];
  arr.forEach(element => {
    if (element > max) max = element;
    if (element < min) min = element;
  });
  return Math.abs (max - min)
  // Ваш код
}
