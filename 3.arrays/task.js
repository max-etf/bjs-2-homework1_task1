function compareArrays(arr1, arr2) {
  let result = true;

arr1.every(function(value,index) {
  result = result && (arr2[index]===value);
  return result;
})

arr2.every(function(value,index) {
  result = result && (arr1[index]===value);
  return result;
})
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = [];
  arr.every(function(value) {
    if ((value > 0)&&(value%3===0)) resultArr.push(value*10);
    return resultArr;
  })
  // Ваш код

  return resultArr; // array
}
