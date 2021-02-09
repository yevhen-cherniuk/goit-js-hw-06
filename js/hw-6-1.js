// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
//  и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach. 
 


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
orderedItems.forEach(function(element) {
    totalPrice += element;
  
})
  
  // Пиши код выше этой строки
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));