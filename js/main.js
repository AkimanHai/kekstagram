//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max <= min) {
    return -1;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//Функция для проверки максимальной длины строки.

const isPassesLength = function (str, maxLength) {
  if (str.length > maxLength) {
    return false;
  }
  return true;
}
