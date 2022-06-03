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
if ((percent > 0)&&(contribution > 0)&&(amount > 0)&&((date - Date.now()) > 0)) {
  /* if ((!isNaN(Number(percent)))&&(!isNaN(Number(contribution)))&&(!isNaN(Number(amount)))) */
  const body = amount - contribution;
  const monthCount = Math.ceil((date - Date.now()) / 1000 / 3600 /24 / 30);
  const monthPercent = percent / 1200;
  const payment = body*(monthPercent + (monthPercent / (Math.pow((1+monthPercent),monthCount) - 1)));
  totalAmount = monthCount * payment;
  totalAmount = totalAmount.toFixed(2);
  console.log(totalAmount);
}

else {

  console.log('Значения введены неверно')
  
}


  return totalAmount;
}
