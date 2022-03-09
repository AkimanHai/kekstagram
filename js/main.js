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


const COUNT_OBJ = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ',
  'В конце концов это просто непрофессионально. ',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
let serialNomer = 0;
let serialId = 0;


const getSerialNomer = () => {
  return serialNomer += 1;
};

const getSerialId = () => {
  return serialId += 1;
};


const createComment = () => {
  return {
    id: getSerialId(),
    avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
    message: '',
    name: '',
  };
}

const createPhotoDescription = () => {
  return {
    id: getSerialNomer(),
    url: 'photos/' + getSerialId() + '.jpg',
    description: '',
    likes: getRandomIntInclusive(15, 200),
    comments: '',
  }
};


const similarDescription = new Array(COUNT_OBJ).fill(null).map(() => createPhotoDescription());
console.log(similarDescription);
