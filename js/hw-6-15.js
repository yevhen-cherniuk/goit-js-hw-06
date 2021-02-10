// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 === 1);

console.log(evenNumbers);
console.log(oddNumbers);