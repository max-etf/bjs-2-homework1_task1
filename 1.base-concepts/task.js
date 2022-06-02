"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = Math.pow(b,2)-4*a*c
      if (d===0){
          const x = -b/(2*a);
          arr.push(x);
      }
      if (d > 0){
        const x1 = (-b + Math.sqrt(d) )/(2*a);
        const x2 = (-b - Math.sqrt(d) )/(2*a);
        arr.push(x1,x2);
      }

      // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
    console.log(typeof(percent));
    console.log(Number(percent));
  // код для задачи №2 писать здесь

  return totalAmount;
}
