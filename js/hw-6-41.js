// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));

console.log(names);