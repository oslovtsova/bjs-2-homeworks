/*Задача № 1*/

let add2 = (a, b) => a + b;
let upgAdd2;

function cachingDecoratorNew(func) {
  let cache = [];
  return function wrapper(...args) {
    let hash = func(...args) + 2;
    //ошибка тут, но если не указывать свойство, то он сохраняет сам объект
    let objectInCache = cache.find((item) => item.hash === hash).value; 
    if (objectInCache) {
      console.log("Из кеша: " +objectInCache);
      // но если его вернуть .value  то все хорошо,
      // почему я не могу свойство сохранить в переменную???
      return "Из кеша: " + objectInCache;  
    }
    let result = func(...args); 
    cache.push({ hash: hash, value: result }); 
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

upgAdd2 = cachingDecoratorNew(add2);
upgAdd2(1, 2);

/*Задача № 2*/

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args){
    wrapper.allCount++;
    if(timeoutId) {
        clearTimeout(timeoutId);
    } else {
        func(...args);
        wrapper.count++;
    }
    timeoutId = setTimeout(() => {
        func(...args);
        wrapper.count++;
    }, delay);
  }
  return wrapper;
}