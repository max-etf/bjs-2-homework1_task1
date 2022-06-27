function cachingDecoratorNew(func) {
  let cache = [];
   // Ваш код
  function wrapper(...args) {
      const hash = args.join(',') // получаем правильный хэш
      let objectInCache = cache.findIndex((item) => item.hash === hash);
     // console.log(objectInCache); // ищем элемент, хэш которого равен нашему хэшу
       if (objectInCache !== -1) { // если элемент не найден
          console.log("Из кэша: " + cache[objectInCache].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[objectInCache].result;
      }  

      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash, result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
     // console.log(cache)
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,delta) {
  // Ваш код
  let timerId;
  return function(...args) {
    if (timerId === undefined) {
        timerId = Date.now();
        func.apply(this, args);
    } else {
        let passedTime = Date.now() - timerId;
        if (passedTime >= delta) {
            timerId = Date.now();
            func.apply(this, args);
        }
    }
  }
}


function debounceDecorator2(func,delta) {
  // Ваш код
  let timerId;
  let time = false;

  function wrapper (...args) {
    clearTimeout(timerId);

    if(!time) {
      func(...args);
      wrapper.count ++;
      //console.log (wrapper.count)
      time = true;
    }

    timerId = setTimeout(() => time = false, delta);
  }
  wrapper.count = 0; //Добавьте к обертке wrapper новое свойство count в котором храните количество вызовов.
  //console.log (wrapper.count)
  return wrapper;
}

const sendSignal2 = () => console.log("Сигнал отправлен");
const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
