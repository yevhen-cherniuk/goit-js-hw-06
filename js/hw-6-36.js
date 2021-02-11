// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
// в алфавитном и обратном алфавитном порядке.Дополни код так,
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder =[...authors].sort((a,b)=>a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);