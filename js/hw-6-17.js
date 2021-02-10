// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг
// рейтинг которых(свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг
// написанных автором с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);