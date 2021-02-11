// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
// по её возрастанию или убыванию.Дополни код так,
// чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
// а в переменной descendingReleaseDates копия отсортированная по убыванию.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);