//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  //Максимум и минимум включаются
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(0, 10);


//Функция для проверки максимальной длины строки.

const isPassesLength = (str, count) => {
  return str.length <= count;
};

isPassesLength('Hello, World!', 140);
