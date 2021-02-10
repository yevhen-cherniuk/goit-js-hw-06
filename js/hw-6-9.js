// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
// а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value){
    // Пиши код ниже этой строки
  let newChangeEven = [];
  numbers.forEach(number =>{
  if (number % 2 === 0) {
        number += value;
      }
    newChangeEven.push(number);
  });
   return newChangeEven;
      
   // Пиши код выше этой строки
}
  
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));