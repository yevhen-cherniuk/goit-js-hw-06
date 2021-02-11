// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstbook,secondbook)=>firstbook.author.localeCompare(secondbook.author));

const sortedByReversedAuthorName = [...books].sort((firstbook,secondbook)=>secondbook.author.localeCompare(firstbook.author));


const sortedByAscendingRating = [...books].sort((firstbook,secondbook)=>firstbook.rating - secondbook.rating);

const sortedByDescentingRating = [...books].sort((firstbook,secondbook)=>secondbook.rating - firstbook.rating);
;

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);